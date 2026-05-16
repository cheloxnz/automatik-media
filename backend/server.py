from fastapi import FastAPI, APIRouter, HTTPException, Request, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json
import hmac
import hashlib
import time
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class LeadCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    business: Optional[str] = Field(default=None, max_length=120)
    message: Optional[str] = Field(default=None, max_length=2000)
    source: Optional[str] = Field(default="landing", max_length=60)


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    business: Optional[str] = None
    message: Optional[str] = None
    source: str = "landing"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class EventCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=80)
    variant: Optional[str] = Field(default=None, max_length=20)
    metadata: Optional[dict] = None


class Event(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    variant: Optional[str] = None
    metadata: Optional[dict] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Automatik Media API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/leads", response_model=Lead, status_code=201)
async def create_lead(payload: LeadCreate):
    try:
        lead = Lead(**payload.model_dump())
        doc = lead.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.leads.insert_one(doc)
        logger.info(f"New lead captured: {lead.email} ({lead.source})")
        return lead
    except Exception as e:
        logger.exception("Failed to create lead")
        raise HTTPException(status_code=500, detail="No se pudo registrar tu solicitud. Probá nuevamente.") from e


@api_router.get("/leads", response_model=List[Lead])
async def list_leads(limit: int = 200):
    items = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


@api_router.post("/events", response_model=Event, status_code=201)
async def track_event(payload: EventCreate):
    """Lightweight event tracking for A/B testing (variant exposure & CTA clicks)."""
    try:
        ev = Event(**payload.model_dump())
        doc = ev.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.events.insert_one(doc)
        return ev
    except Exception as e:
        logger.exception("Failed to track event")
        raise HTTPException(status_code=500, detail="Tracking failed") from e


@api_router.get("/events/stats")
async def events_stats():
    """Aggregated A/B test results — view per variant + clicks per variant + CR%."""
    pipeline = [
        {"$group": {"_id": {"name": "$name", "variant": "$variant"}, "count": {"$sum": 1}}}
    ]
    rows = await db.events.aggregate(pipeline).to_list(1000)
    out = {}
    for r in rows:
        key = r["_id"].get("variant") or "default"
        out.setdefault(key, {})[r["_id"]["name"]] = r["count"]
    # Conversion rate = click / view per variant
    for variant, counts in out.items():
        views = counts.get("exit_view", 0)
        clicks = counts.get("exit_click", 0)
        counts["cr_percent"] = round((clicks / views) * 100, 2) if views else 0.0
    return out


# ---------- Calendly Webhook ----------
def _parse_iso8601(value: Optional[str]) -> Optional[datetime]:
    if not value:
        return None
    try:
        if value.endswith("Z"):
            value = value[:-1] + "+00:00"
        return datetime.fromisoformat(value)
    except Exception:
        return None


def _parse_calendly_signature(header_value: str) -> tuple[int, str]:
    """Parse 'Calendly-Webhook-Signature: t=...,v1=...' header."""
    timestamp: Optional[int] = None
    v1: Optional[str] = None
    for part in (header_value or "").split(","):
        if "=" not in part:
            continue
        k, v = part.split("=", 1)
        k, v = k.strip(), v.strip()
        if k == "t":
            try:
                timestamp = int(v)
            except ValueError:
                pass
        elif k == "v1":
            v1 = v
    if timestamp is None or not v1:
        raise ValueError("Malformed Calendly-Webhook-Signature header")
    return timestamp, v1


def _verify_calendly_signature(header_value: str, body: bytes, signing_key: str, tolerance: int = 300) -> None:
    timestamp, received_sig = _parse_calendly_signature(header_value)
    if abs(int(time.time()) - timestamp) > tolerance:
        raise ValueError("Signature timestamp outside tolerance window")
    signed_payload = f"{timestamp}.{body.decode('utf-8')}".encode("utf-8")
    expected = hmac.new(
        key=signing_key.encode("utf-8"),
        msg=signed_payload,
        digestmod=hashlib.sha256,
    ).hexdigest()
    if not hmac.compare_digest(expected, received_sig):
        raise ValueError("Signature mismatch")


def _extract_calendly_booking(webhook_payload: Dict[str, Any]) -> Dict[str, Any]:
    event_type = webhook_payload.get("event")
    webhook_created_at = webhook_payload.get("created_at")
    payload_obj = webhook_payload.get("payload") or {}
    invitee = payload_obj.get("invitee") or payload_obj  # some envelopes flatten
    event_obj = payload_obj.get("event") or payload_obj.get("scheduled_event") or {}

    invitee_email = invitee.get("email") if isinstance(invitee, dict) else None
    invitee_name = invitee.get("name") if isinstance(invitee, dict) else None
    if isinstance(invitee, dict) and not invitee_name:
        fn = (invitee.get("first_name") or "").strip()
        ln = (invitee.get("last_name") or "").strip()
        invitee_name = f"{fn} {ln}".strip() or None

    return {
        "id": str(uuid.uuid4()),
        "event_type": event_type,
        "invitee_email": invitee_email,
        "invitee_name": invitee_name,
        "invitee_uuid": invitee.get("uuid") if isinstance(invitee, dict) else None,
        "event_uuid": event_obj.get("uuid") if isinstance(event_obj, dict) else None,
        "event_start_time": _parse_iso8601(event_obj.get("start_time") if isinstance(event_obj, dict) else None),
        "event_start_time_raw": event_obj.get("start_time") if isinstance(event_obj, dict) else None,
        "event_end_time_raw": event_obj.get("end_time") if isinstance(event_obj, dict) else None,
        "event_timezone": (event_obj.get("start_time_zone") or event_obj.get("timezone")) if isinstance(event_obj, dict) else None,
        "webhook_created_at_raw": webhook_created_at,
        "created_at": datetime.now(timezone.utc),
        "raw_payload": webhook_payload,
    }


@api_router.post("/webhooks/calendly", status_code=status.HTTP_200_OK)
async def calendly_webhook(request: Request):
    """Receive invitee.created (and invitee.canceled) from Calendly.
    Verifies HMAC-SHA256 signature only if CALENDLY_WEBHOOK_SIGNING_KEY is set."""
    raw = await request.body()
    signing_key = os.environ.get("CALENDLY_WEBHOOK_SIGNING_KEY")
    sig_header = request.headers.get("Calendly-Webhook-Signature")

    if signing_key:
        if not sig_header:
            raise HTTPException(status_code=400, detail="Missing Calendly-Webhook-Signature header")
        try:
            _verify_calendly_signature(sig_header, raw, signing_key)
        except Exception as e:  # noqa: BLE001
            logger.warning("Calendly signature verification failed: %s", e)
            raise HTTPException(status_code=400, detail="Invalid signature") from e
    else:
        logger.warning("CALENDLY_WEBHOOK_SIGNING_KEY not set — webhook accepted without verification")

    try:
        payload = json.loads(raw.decode("utf-8"))
    except json.JSONDecodeError as e:
        raise HTTPException(status_code=400, detail="Invalid JSON") from e

    booking = _extract_calendly_booking(payload)
    doc = dict(booking)
    if isinstance(doc.get("event_start_time"), datetime):
        doc["event_start_time"] = doc["event_start_time"].isoformat()
    doc["created_at"] = doc["created_at"].isoformat()

    # Idempotency via (invitee_uuid, event_uuid) when both present
    if booking.get("invitee_uuid") and booking.get("event_uuid"):
        existing = await db.calendly_bookings.find_one(
            {"invitee_uuid": booking["invitee_uuid"], "event_uuid": booking["event_uuid"]},
            {"_id": 0, "id": 1},
        )
        if existing:
            logger.info("Duplicate Calendly webhook ignored (invitee=%s)", booking["invitee_uuid"])
            return {"status": "duplicate_ignored", "id": existing.get("id")}

    await db.calendly_bookings.insert_one(doc)

    # Fire a tracking event so it shows up in /api/events/stats too
    try:
        await db.events.insert_one({
            "id": str(uuid.uuid4()),
            "name": "calendly_booking",
            "variant": booking.get("event_type") or "invitee.created",
            "metadata": {
                "invitee_email": booking.get("invitee_email"),
                "event_start_time_raw": booking.get("event_start_time_raw"),
            },
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
    except Exception:  # noqa: BLE001
        pass

    logger.info(
        "Calendly booking received: %s <%s> @ %s",
        booking.get("invitee_name"),
        booking.get("invitee_email"),
        booking.get("event_start_time_raw"),
    )
    return {"status": "received", "id": booking["id"]}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

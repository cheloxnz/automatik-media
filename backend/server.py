from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
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

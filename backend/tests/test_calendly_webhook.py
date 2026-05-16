"""Backend tests for Calendly webhook endpoint /api/webhooks/calendly.

These tests directly call the FastAPI app via TestClient so we can mutate
os.environ for CALENDLY_WEBHOOK_SIGNING_KEY without restarting supervisor.
The unsigned (no-key) path is also additionally tested against the public
BASE_URL since the running supervisor process has no key configured.
"""
import os
import json
import time
import hmac
import hashlib
import uuid
import sys
from pathlib import Path
import requests
import pytest

# Ensure /app/backend is importable for direct ASGI tests
BACKEND_DIR = Path("/app/backend").resolve()
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

from fastapi.testclient import TestClient  # noqa: E402

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break
API = f"{BASE_URL}/api"


def _make_payload(invitee_uuid=None, event_uuid=None):
    invitee_uuid = invitee_uuid or f"inv-{uuid.uuid4()}"
    event_uuid = event_uuid or f"evt-{uuid.uuid4()}"
    return {
        "event": "invitee.created",
        "created_at": "2026-01-15T10:00:00.000000Z",
        "payload": {
            "invitee": {
                "uuid": invitee_uuid,
                "email": f"TEST_{invitee_uuid}@example.com",
                "first_name": "Cande",
                "last_name": "Test",
            },
            "event": {
                "uuid": event_uuid,
                "start_time": "2026-02-01T15:00:00.000000Z",
                "end_time": "2026-02-01T15:30:00.000000Z",
                "start_time_zone": "America/Argentina/Buenos_Aires",
            },
        },
    }


def _sign(body: bytes, key: str, ts: int | None = None) -> tuple[str, int]:
    ts = ts if ts is not None else int(time.time())
    signed = f"{ts}.{body.decode('utf-8')}".encode("utf-8")
    sig = hmac.new(key.encode("utf-8"), signed, hashlib.sha256).hexdigest()
    return f"t={ts},v1={sig}", ts


# ---------------- 1) Public URL: no key on server -> accepts unsigned ----------------
def test_public_webhook_no_key_accepts_and_persists():
    payload = _make_payload()
    r = requests.post(f"{API}/webhooks/calendly", json=payload, timeout=20)
    assert r.status_code == 200, f"{r.status_code}: {r.text}"
    data = r.json()
    assert data.get("status") == "received"
    assert isinstance(data.get("id"), str) and len(data["id"]) > 0


def test_public_webhook_duplicate_returns_duplicate_ignored():
    inv = f"inv-{uuid.uuid4()}"
    evt = f"evt-{uuid.uuid4()}"
    payload = _make_payload(inv, evt)
    r1 = requests.post(f"{API}/webhooks/calendly", json=payload, timeout=20)
    assert r1.status_code == 200
    first_id = r1.json()["id"]
    r2 = requests.post(f"{API}/webhooks/calendly", json=payload, timeout=20)
    assert r2.status_code == 200
    data = r2.json()
    assert data.get("status") == "duplicate_ignored"
    assert data.get("id") == first_id


def test_public_webhook_fires_calendly_booking_event_in_stats():
    # Snapshot stats before
    before = requests.get(f"{API}/events/stats", timeout=15).json()
    before_count = before.get("invitee.created", {}).get("calendly_booking", 0)
    r = requests.post(f"{API}/webhooks/calendly", json=_make_payload(), timeout=20)
    assert r.status_code == 200
    time.sleep(0.4)
    after = requests.get(f"{API}/events/stats", timeout=15).json()
    after_count = after.get("invitee.created", {}).get("calendly_booking", 0)
    assert after_count == before_count + 1, f"before={before_count} after={after_count}"


def test_public_webhook_extracts_invitee_name_from_first_last():
    payload = _make_payload()
    # Force name fallback path: no "name" key, only first/last
    assert "name" not in payload["payload"]["invitee"]
    r = requests.post(f"{API}/webhooks/calendly", json=payload, timeout=20)
    assert r.status_code == 200


# ---------------- 2) In-process TestClient with signing key set ----------------
@pytest.fixture(scope="module")
def signed_client():
    """Spin up an in-process FastAPI TestClient with signing key configured.

    Note: the running supervisor backend stays unchanged (no key) — only this
    in-process app instance has the env var set when imported.
    """
    os.environ["CALENDLY_WEBHOOK_SIGNING_KEY"] = "test-signing-key-123"
    # Re-import server module fresh so it reads env at request time anyway
    import importlib
    if "server" in sys.modules:
        importlib.reload(sys.modules["server"])
    import server  # noqa: WPS433
    client = TestClient(server.app)
    yield client, "test-signing-key-123"
    # Cleanup
    os.environ.pop("CALENDLY_WEBHOOK_SIGNING_KEY", None)


def test_signed_valid_signature_returns_200(signed_client):
    client, key = signed_client
    body = json.dumps(_make_payload()).encode("utf-8")
    header, _ = _sign(body, key)
    r = client.post(
        "/api/webhooks/calendly",
        content=body,
        headers={"Content-Type": "application/json", "Calendly-Webhook-Signature": header},
    )
    assert r.status_code == 200, r.text
    assert r.json().get("status") in ("received", "duplicate_ignored")


def test_signed_missing_header_returns_400(signed_client):
    client, _ = signed_client
    body = json.dumps(_make_payload()).encode("utf-8")
    r = client.post(
        "/api/webhooks/calendly",
        content=body,
        headers={"Content-Type": "application/json"},
    )
    assert r.status_code == 400
    assert "Missing Calendly-Webhook-Signature header" in r.text


def test_signed_wrong_v1_returns_400(signed_client):
    client, _ = signed_client
    body = json.dumps(_make_payload()).encode("utf-8")
    ts = int(time.time())
    header = f"t={ts},v1=deadbeef" + "0" * 56
    r = client.post(
        "/api/webhooks/calendly",
        content=body,
        headers={"Content-Type": "application/json", "Calendly-Webhook-Signature": header},
    )
    assert r.status_code == 400
    assert "Invalid signature" in r.text


def test_signed_stale_timestamp_returns_400(signed_client):
    client, key = signed_client
    body = json.dumps(_make_payload()).encode("utf-8")
    stale_ts = int(time.time()) - 1000
    header, _ = _sign(body, key, ts=stale_ts)
    r = client.post(
        "/api/webhooks/calendly",
        content=body,
        headers={"Content-Type": "application/json", "Calendly-Webhook-Signature": header},
    )
    assert r.status_code == 400
    assert "Invalid signature" in r.text


# ---------------- 3) Regression: leads + events still work via public URL ----------------
def test_regression_leads_create_and_list():
    payload = {
        "name": "TEST_Webhook Regression",
        "email": f"TEST_{uuid.uuid4()}@example.com",
        "source": "test_calendly_suite",
    }
    r = requests.post(f"{API}/leads", json=payload, timeout=20)
    assert r.status_code == 201, r.text
    r2 = requests.get(f"{API}/leads", timeout=20)
    assert r2.status_code == 200
    assert any(it.get("email") == payload["email"] for it in r2.json())


def test_regression_events_create_and_stats():
    r = requests.post(f"{API}/events", json={"name": "exit_view", "variant": "B"}, timeout=15)
    assert r.status_code == 201
    r2 = requests.get(f"{API}/events/stats", timeout=15)
    assert r2.status_code == 200
    assert isinstance(r2.json(), dict)

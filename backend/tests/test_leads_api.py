"""Backend API tests for Automatik Media — /api/ root + /api/leads CRUD."""
import os
import time
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback to frontend/.env
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health
def test_api_root_returns_200(session):
    r = session.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert isinstance(data["message"], str) and len(data["message"]) > 0


# POST /api/leads — happy path
def test_create_lead_valid_payload(session):
    payload = {
        "name": "TEST_Carlos Tester",
        "email": "TEST_carlos@example.com",
        "phone": "+5491111111111",
        "business": "Test Clinic",
        "message": "Hola, quiero info",
        "source": "automated_test",
    }
    r = session.post(f"{API}/leads", json=payload, timeout=15)
    assert r.status_code == 201, f"got {r.status_code}: {r.text}"
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data and isinstance(data["created_at"], str)
    assert data["email"] == payload["email"]
    assert data["name"] == payload["name"]
    assert data["source"] == "automated_test"
    # Persistence check via GET list
    time.sleep(0.5)
    list_r = session.get(f"{API}/leads", timeout=15)
    assert list_r.status_code == 200
    items = list_r.json()
    assert any(it.get("id") == data["id"] for it in items)


# Email validation
def test_create_lead_invalid_email_returns_422(session):
    r = session.post(
        f"{API}/leads",
        json={"name": "TEST_Bad Email", "email": "not-an-email"},
        timeout=15,
    )
    assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"


# Name length validation
def test_create_lead_empty_name_returns_422(session):
    r = session.post(
        f"{API}/leads",
        json={"name": "", "email": "TEST_valid@example.com"},
        timeout=15,
    )
    assert r.status_code == 422


def test_create_lead_short_name_returns_422(session):
    r = session.post(
        f"{API}/leads",
        json={"name": "A", "email": "TEST_a@example.com"},
        timeout=15,
    )
    assert r.status_code == 422


# Missing email
def test_create_lead_missing_email_returns_422(session):
    r = session.post(
        f"{API}/leads",
        json={"name": "TEST_NoEmail"},
        timeout=15,
    )
    assert r.status_code == 422


# GET /api/leads — no _id, sorted desc by created_at
def test_get_leads_no_mongo_id_and_sorted_desc(session):
    # Seed two leads
    p1 = session.post(f"{API}/leads", json={
        "name": "TEST_First", "email": "TEST_first@example.com", "source": "auto"
    }, timeout=15)
    assert p1.status_code == 201
    time.sleep(1.1)
    p2 = session.post(f"{API}/leads", json={
        "name": "TEST_Second", "email": "TEST_second@example.com", "source": "auto"
    }, timeout=15)
    assert p2.status_code == 201

    r = session.get(f"{API}/leads", timeout=15)
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list) and len(items) >= 2
    # No mongo _id
    for it in items:
        assert "_id" not in it, f"Mongo _id leaked: {it}"
        assert "id" in it
        assert "created_at" in it
    # Sorted desc
    times = [it["created_at"] for it in items]
    assert times == sorted(times, reverse=True), "Leads not sorted desc by created_at"


# GET /api/leads?limit
def test_get_leads_respects_limit(session):
    # Ensure enough seeded
    for i in range(6):
        session.post(f"{API}/leads", json={
            "name": f"TEST_Limit_{i}", "email": f"TEST_lim{i}@example.com", "source": "auto"
        }, timeout=15)
    r = session.get(f"{API}/leads", params={"limit": 5}, timeout=15)
    assert r.status_code == 200
    assert len(r.json()) <= 5


# Optional fields default behavior
def test_create_lead_minimal_payload(session):
    r = session.post(
        f"{API}/leads",
        json={"name": "TEST_Minimal", "email": "TEST_min@example.com"},
        timeout=15,
    )
    assert r.status_code == 201
    data = r.json()
    assert data["source"] == "landing"
    assert data["phone"] is None
    assert data["business"] is None

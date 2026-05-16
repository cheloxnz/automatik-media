"""Backend API tests for Automatik Media — /api/events tracking + /api/events/stats."""
import os
import time
from pathlib import Path
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
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


# POST /api/events — happy path with variant
def test_create_event_with_variant(session):
    payload = {
        "name": "exit_view",
        "variant": "A",
        "metadata": {"url": "/", "test": "TEST_run"},
    }
    r = session.post(f"{API}/events", json=payload, timeout=15)
    assert r.status_code == 201, f"got {r.status_code}: {r.text}"
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data and isinstance(data["created_at"], str)
    assert data["name"] == "exit_view"
    assert data["variant"] == "A"
    assert data.get("metadata", {}).get("url") == "/"


# POST /api/events — name min_length=1 validation
def test_create_event_empty_name_returns_422(session):
    r = session.post(
        f"{API}/events",
        json={"name": "", "variant": "A"},
        timeout=15,
    )
    assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"


# POST /api/events — missing name returns 422
def test_create_event_missing_name_returns_422(session):
    r = session.post(
        f"{API}/events",
        json={"variant": "A"},
        timeout=15,
    )
    assert r.status_code == 422


# POST /api/events — minimal payload (no variant, no metadata)
def test_create_event_minimal_payload(session):
    r = session.post(
        f"{API}/events",
        json={"name": "exit_view"},
        timeout=15,
    )
    assert r.status_code == 201
    data = r.json()
    assert data["name"] == "exit_view"
    assert data.get("variant") is None


# GET /api/events/stats — structure & CR calculation
def test_events_stats_structure_and_cr(session):
    # Seed deterministic counts: variant Z views=4, clicks=1 -> 25.0%
    # Using a unique variant to not collide with other tests
    variant = "ZTEST"
    for _ in range(4):
        r = session.post(f"{API}/events", json={"name": "exit_view", "variant": variant}, timeout=15)
        assert r.status_code == 201
    r = session.post(f"{API}/events", json={"name": "exit_click", "variant": variant}, timeout=15)
    assert r.status_code == 201

    time.sleep(0.5)
    stats_r = session.get(f"{API}/events/stats", timeout=15)
    assert stats_r.status_code == 200
    stats = stats_r.json()
    assert isinstance(stats, dict)
    assert variant in stats, f"Variant {variant} missing in stats: {stats}"
    bucket = stats[variant]
    assert bucket.get("exit_view", 0) >= 4
    assert bucket.get("exit_click", 0) >= 1
    assert "cr_percent" in bucket
    # cr should equal click/view*100, rounded to 2
    expected = round((bucket["exit_click"] / bucket["exit_view"]) * 100, 2)
    assert bucket["cr_percent"] == expected


# GET /api/events/stats — A and B variants present after seeding
def test_events_stats_contains_a_and_b(session):
    # Seed at least 1 view per variant
    for v in ("A", "B"):
        r = session.post(f"{API}/events", json={"name": "exit_view", "variant": v}, timeout=15)
        assert r.status_code == 201
    time.sleep(0.4)
    r = session.get(f"{API}/events/stats", timeout=15)
    assert r.status_code == 200
    stats = r.json()
    assert "A" in stats and "B" in stats
    for v in ("A", "B"):
        assert "exit_view" in stats[v]
        assert "cr_percent" in stats[v]


# GET /api/events/stats — no mongo _id leak
def test_events_stats_no_mongo_id(session):
    r = session.get(f"{API}/events/stats", timeout=15)
    assert r.status_code == 200
    body = r.text
    assert '"_id"' not in body

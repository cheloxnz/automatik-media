"""Iteration 6 backend tests:
- notifications module (Telegram no-op when env vars missing, message formatting)
- /api/events with whitelisted names schedules background notification (no exceptions)
- /api/webhooks/calendly still works + schedules notification
- Regression on /api/, /api/status, /api/leads, /api/events/stats
"""
import asyncio
import os
import sys
import time
import hmac
import hashlib
import json
import pytest
import requests

# Ensure backend dir is importable
sys.path.insert(0, "/app/backend")

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL") or open("/app/frontend/.env").read().split("REACT_APP_BACKEND_URL=")[1].split("\n")[0].strip()
BASE_URL = BASE_URL.rstrip("/")

# Import notifications module for unit-level checks
from notifications import (  # noqa: E402
    send_telegram_notification,
    format_booking_message,
    format_trial_handoff_message,
    _escape_md,
)


# ---------- Notifications module unit tests ----------
class TestNotificationsModule:
    def test_module_imports_cleanly(self):
        assert callable(send_telegram_notification)
        assert callable(format_booking_message)
        assert callable(format_trial_handoff_message)

    def test_send_returns_false_when_env_missing(self):
        # Ensure env vars are absent
        os.environ.pop("TELEGRAM_BOT_TOKEN", None)
        os.environ.pop("TELEGRAM_CHAT_ID", None)
        result = asyncio.get_event_loop().run_until_complete(
            send_telegram_notification("hello")
        ) if False else asyncio.run(send_telegram_notification("hello"))
        assert result is False

    def test_format_booking_message_contains_name_email_start(self):
        booking = {
            "invitee_name": "Juan Pérez",
            "invitee_email": "juan@example.com",
            "event_start_time_raw": "2026-02-01T15:00:00Z",
            "event_timezone": "America/Argentina/Buenos_Aires",
            "event_type": "invitee.created",
        }
        msg = format_booking_message(booking)
        # Contains plain text components (name, email local part, year)
        assert "Juan Pérez" in msg
        assert "juan@example" in msg
        assert "2026" in msg
        # MarkdownV2 escaping check: '.' must be escaped at least once
        assert "\\." in msg
        # KNOWN BUG (iter6): _escape_md double-escapes because it iterates '\\'
        # AFTER the other reserved chars, re-escaping the backslash it just inserted.
        # Telegram will render '\\.' literally instead of '.'. Should escape '\\' FIRST
        # or exclude it from the iteration list.
        if "\\\\." in msg:
            pytest.fail(
                "format_booking_message double-escapes backslashes — '.' becomes '\\\\.' "
                "instead of '\\.'; Telegram MarkdownV2 will render this incorrectly. "
                "Fix: in notifications._escape_md, escape '\\\\' first, or remove it from "
                "the iteration list (raw input rarely contains backslashes)."
            )

    def test_format_trial_handoff_message(self):
        msg = format_trial_handoff_message({"origin": "combo_section"})
        assert "Trial InmoBot" in msg
        # Underscore in 'combo_section' will be MarkdownV2-escaped (\_)
        assert "combo" in msg and "section" in msg

    def test_escape_md_escapes_reserved(self):
        out = _escape_md("hello.world-foo!")
        assert "\\." in out
        assert "\\-" in out
        assert "\\!" in out


# ---------- API endpoint tests ----------
class TestEvents:
    def test_root(self):
        r = requests.get(f"{BASE_URL}/api/", timeout=10)
        assert r.status_code == 200
        assert "message" in r.json()

    def test_event_trial_with_expert_201(self):
        payload = {
            "name": "trial_with_expert",
            "variant": "trial_intent",
            "metadata": {"origin": "combo_section_test"},
        }
        r = requests.post(f"{BASE_URL}/api/events", json=payload, timeout=10)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["name"] == "trial_with_expert"
        assert data["variant"] == "trial_intent"
        assert "id" in data
        assert "created_at" in data

    def test_event_exit_click_201(self):
        payload = {
            "name": "exit_click",
            "variant": "B",
            "metadata": {"source": "test_iter6"},
        }
        r = requests.post(f"{BASE_URL}/api/events", json=payload, timeout=10)
        assert r.status_code == 201
        assert r.json()["name"] == "exit_click"

    def test_event_other_event_still_persists(self):
        # Non-whitelisted name should NOT raise / NOT notify but must still persist (201)
        payload = {"name": "TEST_other_event_iter6", "variant": "x"}
        r = requests.post(f"{BASE_URL}/api/events", json=payload, timeout=10)
        assert r.status_code == 201
        assert r.json()["name"] == "TEST_other_event_iter6"

    def test_events_stats_200(self):
        r = requests.get(f"{BASE_URL}/api/events/stats", timeout=10)
        assert r.status_code == 200
        assert isinstance(r.json(), dict)


class TestLeads:
    def test_create_lead_and_list(self):
        payload = {
            "name": "TEST Iter6",
            "email": "test_iter6@example.com",
            "source": "iter6_pytest",
        }
        r = requests.post(f"{BASE_URL}/api/leads", json=payload, timeout=10)
        assert r.status_code == 201
        created = r.json()
        assert created["email"] == "test_iter6@example.com"
        assert created["name"] == "TEST Iter6"

        # GET to verify
        rl = requests.get(f"{BASE_URL}/api/leads?limit=50", timeout=10)
        assert rl.status_code == 200
        emails = [it["email"] for it in rl.json()]
        assert "test_iter6@example.com" in emails


class TestStatus:
    def test_status_post_get(self):
        r = requests.post(
            f"{BASE_URL}/api/status",
            json={"client_name": "TEST_iter6_status"},
            timeout=10,
        )
        assert r.status_code == 200
        assert r.json()["client_name"] == "TEST_iter6_status"

        rg = requests.get(f"{BASE_URL}/api/status", timeout=10)
        assert rg.status_code == 200


class TestCalendlyWebhook:
    def test_webhook_no_signing_key_accepts(self):
        # When CALENDLY_WEBHOOK_SIGNING_KEY is not set, should accept without verification.
        body = {
            "event": "invitee.created",
            "created_at": "2026-01-15T10:00:00Z",
            "payload": {
                "invitee": {
                    "uuid": f"TEST-iter6-{int(time.time())}",
                    "email": "calendly_iter6@example.com",
                    "name": "Iter6 Tester",
                },
                "event": {
                    "uuid": f"EVT-iter6-{int(time.time())}",
                    "start_time": "2026-02-01T15:00:00Z",
                    "start_time_zone": "America/Argentina/Buenos_Aires",
                },
            },
        }
        r = requests.post(
            f"{BASE_URL}/api/webhooks/calendly", json=body, timeout=10
        )
        # Either accepted (status received) or duplicate. Both are 200.
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["status"] in ("received", "duplicate_ignored")

    def test_webhook_duplicate_idempotent(self):
        invitee_uuid = f"TEST-dup-{int(time.time())}"
        event_uuid = f"EVT-dup-{int(time.time())}"
        body = {
            "event": "invitee.created",
            "created_at": "2026-01-15T10:00:00Z",
            "payload": {
                "invitee": {
                    "uuid": invitee_uuid,
                    "email": "dup_iter6@example.com",
                    "name": "Dup Tester",
                },
                "event": {
                    "uuid": event_uuid,
                    "start_time": "2026-02-01T15:00:00Z",
                },
            },
        }
        r1 = requests.post(f"{BASE_URL}/api/webhooks/calendly", json=body, timeout=10)
        assert r1.status_code == 200
        assert r1.json()["status"] == "received"
        r2 = requests.post(f"{BASE_URL}/api/webhooks/calendly", json=body, timeout=10)
        assert r2.status_code == 200
        assert r2.json()["status"] == "duplicate_ignored"

    def test_webhook_invalid_json_400(self):
        r = requests.post(
            f"{BASE_URL}/api/webhooks/calendly",
            data="not-json",
            headers={"Content-Type": "application/json"},
            timeout=10,
        )
        assert r.status_code == 400


# ---------- Static frontend SEO assets ----------
class TestSEOAssets:
    def test_robots_txt(self):
        r = requests.get(f"{BASE_URL}/robots.txt", timeout=10)
        assert r.status_code == 200
        assert "Sitemap: https://automatik-media.com/sitemap.xml" in r.text

    def test_sitemap_xml(self):
        r = requests.get(f"{BASE_URL}/sitemap.xml", timeout=10)
        assert r.status_code == 200
        # Should be valid XML with 5 <url> entries
        assert r.text.count("<url>") == 5
        assert "<urlset" in r.text

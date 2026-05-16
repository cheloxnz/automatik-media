"""Telegram notification helper — no-op when env vars are missing.

Setup steps for the user:
1. Open Telegram and message @BotFather.
2. Send /newbot, pick a name + username. BotFather returns a TOKEN (e.g. 7891234567:AAH...).
3. Open https://t.me/<your_bot_username> and click START to allow the bot to message you.
4. Send any message to the bot. Then visit
   https://api.telegram.org/bot<TOKEN>/getUpdates  — find result[0].message.chat.id (your CHAT_ID).
5. Add to /app/backend/.env:
       TELEGRAM_BOT_TOKEN=...
       TELEGRAM_CHAT_ID=...
   Then: sudo supervisorctl restart backend
"""
from __future__ import annotations

import os
import logging
from typing import Optional

import httpx

logger = logging.getLogger(__name__)

_TELEGRAM_API = "https://api.telegram.org"


def _escape_md(text: str) -> str:
    """Escape MarkdownV2 reserved chars. Backslash must be handled FIRST
    so it does not double-escape the backslashes we insert for other chars."""
    if not text:
        return ""
    # Escape backslash first
    text = text.replace("\\", "\\\\")
    for ch in r"_*[]()~`>#+-=|{}.!":
        text = text.replace(ch, f"\\{ch}")
    return text


async def send_telegram_notification(text: str, *, parse_mode: str = "MarkdownV2") -> bool:
    """Send a one-shot notification. Returns True on success, False otherwise.
    No-op (returns False) when TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing."""
    token = os.environ.get("TELEGRAM_BOT_TOKEN")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        return False

    url = f"{_TELEGRAM_API}/bot{token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": parse_mode,
        "disable_web_page_preview": True,
    }
    try:
        async with httpx.AsyncClient(timeout=8.0) as client:
            r = await client.post(url, json=payload)
            if r.status_code >= 400:
                logger.warning("Telegram notify failed: %s %s", r.status_code, r.text)
                return False
            return True
    except Exception as exc:  # noqa: BLE001
        logger.warning("Telegram notify exception: %s", exc)
        return False


def format_booking_message(booking: dict) -> str:
    name = _escape_md(booking.get("invitee_name") or "—")
    email = _escape_md(booking.get("invitee_email") or "—")
    start = _escape_md(booking.get("event_start_time_raw") or "—")
    tz = _escape_md(booking.get("event_timezone") or "")
    event_type = _escape_md(booking.get("event_type") or "invitee.created")
    return (
        f"*📅 Nuevo booking en Calendly*\n"
        f"*Tipo:* `{event_type}`\n"
        f"*Nombre:* {name}\n"
        f"*Email:* `{email}`\n"
        f"*Inicio:* `{start}` {tz}"
    )


def format_trial_handoff_message(metadata: Optional[dict]) -> str:
    meta = metadata or {}
    origin = _escape_md(str(meta.get("origin") or "unknown"))
    return (
        f"*🤝 Trial InmoBot \\+ acompañamiento*\n"
        f"Alguien acaba de pedir ayuda por WhatsApp\\.\n"
        f"*Origen:* `{origin}`\n"
        f"Revisá WhatsApp\\."
    )

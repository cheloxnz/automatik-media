# Automatik Media — Premium Landing Page

## Original Problem Statement
Premium high-ticket landing page for luxury AI marketing agency "Automatik Media", in Spanish. Dark/luxury aesthetic, neon green #9EFF00 accents, glassmorphism, futuristic. Target: luxury brands, beauty clinics, plastic surgeons, real estate, premium businesses. Goal: generate qualified leads / booked calls via Calendly + WhatsApp.

## User Choices Captured
- WhatsApp: +5491168754798 (wa.me/5491168754798)
- Calendly: https://calendly.com/cheloxnz/30min
- Hero video: featured player next to text (auto-loop muted, unmutes on click)
- Testimonials: initials-only avatars (no stock photos)
- 6-step "How It Works" copy (Business Manager onboarding → leads in WhatsApp)
- Assets: logo + hero video uploaded by user

## What's been implemented (Dec 2025)
- Sticky glass navbar (logo + scroll-to nav + Calendly CTA + mobile menu)
- Hero with featured video, particle/grid background, floating glass cards (WhatsApp / Analytics / AI Assistant), CTAs to Calendly + smooth scroll
- Problem section — 5 staggered bento cards
- Services section — 10-card irregular bento grid with hover glow
- 6-step zig-zag timeline with center connecting line
- Automation ecosystem — orbital AI hub with 6 nodes + SVG dashed connectors
- Results — 4 animated stat counters + animated SVG line chart
- Psychology — 5 elegant cards
- Testimonials — 4 cards with initial avatars + 5-star rating
- Final cinematic CTA with custom-generated background image
- Premium footer + WhatsApp floating button (positioned bottom-24 to avoid Emergent badge overlap)
- Custom cursor glow (desktop only)
- Spanish copy throughout
- Fully responsive, no console errors, all data-testids present

## Architecture
- React 19 + react-router-dom (single route `/`)
- framer-motion for scroll/floating animations
- Tailwind + custom CSS (index.css) with #9EFF00 brand variable, glass utilities, particle keyframes
- Custom fonts: Space Grotesk (display) + Manrope (body) + JetBrains Mono (accents)
- No backend usage; landing is static and routes leads via external links

## Backlog / Next Action Items
- P1: Add a lightweight `/api/leads` endpoint + optional form fallback if user wants to capture leads beyond WhatsApp/Calendly
- P1: Add Open Graph + Twitter meta tags + favicon based on logo (SEO)
- P2: Add lazy-load for hero video poster while loading
- P2: Add cookie/consent banner if running ads to EU traffic
- P2: Add Spanish meta description + structured data (LocalBusiness)
- P2: Lightbox/modal version of "Ver Cómo Funciona" with embedded preview video

## Iteration 2 (Dec 2025) — SEO + Lead Capture + Conversion Boosters
- SEO: title, description, keywords, OG, Twitter, favicon (logo), JSON-LD ProfessionalService schema
- Backend: `POST /api/leads` + `GET /api/leads` with Pydantic EmailStr validation, stored in MongoDB `leads` collection (UUID id, ISO timestamps, no _id leak)
- VideoModal: "Ver Cómo Funciona" opens cinematic modal with controls + ESC/outside/close + Calendly CTA inside
- ExitIntentPopup: triggered on mouse-leave from top (desktop) / 25s (mobile); 4-field form posting to /api/leads source="exit_intent_popup"; localStorage flag prevents re-showing
- SlotsCounter: live scarcity widget in final CTA section (decrements randomly, persisted per day, floor of 2/8)
- WhatsAppFloat repositioned to `bottom-24 right-6 z-50` (clears Emergent badge)
- Test results: 100% backend (9/9 pytest), 100% frontend acceptance criteria

## Iteration 3 (Dec 2025) — A/B Test on Exit-Intent + Form Removal
- Removed the lead-capture form from the exit-intent popup per user request
- Implemented A/B test with random 50/50 assignment per device, persisted in localStorage `am_ab_variant_v1`:
  - Variant A: "Auditoría gratuita" → opens Calendly
  - Variant B: "Checklist gratuito" → opens WhatsApp with prefilled message
- Backend `POST /api/events` + `GET /api/events/stats` for event tracking and aggregated CR% per variant (no UI dashboard — query via curl)
- Both variants track `exit_view` on open and `exit_click` on CTA click
- All tests pass: 16/16 backend pytest, 100% frontend acceptance

## Iteration 4 (Dec 2025) — InmoBot Combo + Calendly Webhook
- New "Combo Premium" section (`#combo`) showcasing InmoBot bundled with Automatik Media (7-day free trial). Includes WhatsApp-style chat mock, feature grid, two CTAs:
  - Trial → `https://inmobot-ia.com/signup?utm_source=automatikmedia&utm_medium=landing&utm_campaign=combo`
  - Learn more → `https://inmobot-ia.com/inicio?utm_source=automatikmedia&utm_medium=landing`
- Services WhatsApp Bots card now tagged "Powered by InmoBot"
- Navbar: replaced "Sistema IA" link with "Combo"
- A/B Variant B switched from Checklist → InmoBot trial (with UTM tracking on signup URL)
- Backend `POST /api/webhooks/calendly`: HMAC-SHA256 signature verification gated by env var `CALENDLY_WEBHOOK_SIGNING_KEY`. If not set, webhook accepts and logs a warning. Stores in `calendly_bookings` collection with idempotency on `(invitee_uuid, event_uuid)`. Also fires a `calendly_booking` event for stats.
- 100% backend (26/26 pytest) and 100% frontend.

## Important note about Calendly free plan
- The user's Calendly account (cheloxnz/30min) is on the FREE plan, which does NOT support webhooks. To activate booking notifications:
  1. Upgrade to Calendly Standard plan
  2. Generate a Personal Access Token
  3. Create a webhook subscription pointing to `https://premium-lead-system.preview.emergentagent.com/api/webhooks/calendly` for event `invitee.created`
  4. Copy the signing key into `/app/backend/.env` as `CALENDLY_WEBHOOK_SIGNING_KEY=...`
  5. Restart backend: `sudo supervisorctl restart backend`
- After that, choose a notification channel (Resend/Telegram/Twilio) to forward bookings.

## Iteration 5 (Dec 2025) — One-Two Punch (Trial + Expert handoff)
- Created `TrialIntentModal.jsx`: intercepts every "Probar InmoBot" click site-wide and offers two paths:
  - Variant 1 (recommended): opens BOTH wa.me/5491168754798 (with prefilled "Hola! Acabo de empezar mi trial de InmoBot...") AND inmobot-ia.com/signup
  - Variant 2: only opens the signup
- `lib/site.js`: added `requestInmoBotTrial(origin)`, `openInmoBotPlusWhatsApp()`, custom event `automatik:trial-intent`
- Combo section CTA + Exit-intent Variant B now route through the modal
- Events tracked: trial_intent_view, trial_with_expert, trial_self_serve (all with variant='trial_intent')
- Tests: 100% frontend acceptance, regression on all prior sections OK

## Iteration 6 (Dec 2025) — Full conversion stack
- **Sticky countdown banner** (`CountdownBanner.jsx`): evergreen 72h timer per visitor (resets on expiry), CTA opens TrialIntentModal, dismissible. Navbar offsets with `--am-banner-h` CSS var.
- **Value calculator** (`ValueCalculator.jsx`): interactive sliders (ticket, cierres, leads) → projects +30% conversion and monthly/annual revenue lift. Section anchored at `#calculadora`.
- **Success cases** (`SuccessCases.jsx`): 4 industry-specific case cards with before/after metrics + quote. Anchored at `#casos`.
- **Analytics** (`Analytics.jsx`): conditionally injects GA4 + Meta Pixel scripts based on env vars `REACT_APP_GA4_MEASUREMENT_ID` and `REACT_APP_META_PIXEL_ID`. Exports `trackEvent(name, params)` helper.
- **SEO**: `/public/robots.txt` + `/public/sitemap.xml` for automatik-media.com.
- **Telegram notifications** (`backend/notifications.py`): one-way bot notifications via Telegram Bot API. No-op when `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID` env vars missing. Triggered by `POST /api/webhooks/calendly` (booking received) and `POST /api/events` with name in {trial_with_expert, exit_click}. Sent in background tasks so the request response is never delayed.
- Navbar links updated: Combo, Servicios, Proceso, Calculadora, Casos

## Required env vars (all optional)
```
# /app/backend/.env
CALENDLY_WEBHOOK_SIGNING_KEY=...   # paid Calendly plan only
TELEGRAM_BOT_TOKEN=...             # from @BotFather
TELEGRAM_CHAT_ID=...               # from /api/getUpdates

# /app/frontend/.env
REACT_APP_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
REACT_APP_META_PIXEL_ID=...
```

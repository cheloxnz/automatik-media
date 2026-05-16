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

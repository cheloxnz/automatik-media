import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  CalendarCheck,
  MessageCircle,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";
import axios from "axios";
import { CALENDLY_URL, WHATSAPP_NUMBER } from "../lib/site";

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND}/api`;

const STORAGE_KEY = "am_exit_popup_v2";
const VARIANT_KEY = "am_ab_variant_v1";

// Variant content
const VARIANTS = {
  A: {
    id: "A",
    pill: "Auditoría gratuita · Sin compromiso",
    Icon: CalendarCheck,
    title: (
      <>
        Antes de irte: agendá una{" "}
        <span className="text-[#9EFF00] am-text-glow">auditoría gratuita</span>{" "}
        de tu sistema de adquisición.
      </>
    ),
    body: "30 minutos con nuestro equipo. Revisamos tus anuncios, embudo y respuesta a leads y te devolvemos las 3 mejoras de mayor impacto. Sin venta, sin compromiso.",
    bullets: [
      "Diagnóstico en vivo de tus campañas",
      "Plan de acción de 3 puntos accionables",
      "Sin tarjeta, sin demo encubierta",
    ],
    ctaLabel: "Agendar mi auditoría",
    ctaIcon: CalendarCheck,
    action: () => {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    },
  },
  B: {
    id: "B",
    pill: "Checklist gratuito · Acceso inmediato",
    Icon: FileCheck2,
    title: (
      <>
        Antes de irte: llevate el{" "}
        <span className="text-[#9EFF00] am-text-glow">Checklist High-Ticket</span>{" "}
        que usamos con nuestros clientes premium.
      </>
    ),
    body: "27 puntos para auditar tu sistema en menos de 1 hora: anuncios, embudo, automatizaciones, CRM, follow-up y cierre. Te lo enviamos directo por WhatsApp.",
    bullets: [
      "Acceso instantáneo por WhatsApp",
      "Probado con clínicas, surgeons y real estate",
      "Sin email, sin formularios largos",
    ],
    ctaLabel: "Recibirlo por WhatsApp",
    ctaIcon: MessageCircle,
    action: () => {
      const msg = encodeURIComponent(
        "Hola! Quiero recibir el Checklist High-Ticket de Automatik Media."
      );
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,
        "_blank",
        "noopener,noreferrer"
      );
    },
  },
};

const getOrAssignVariant = () => {
  try {
    const existing = localStorage.getItem(VARIANT_KEY);
    if (existing === "A" || existing === "B") return existing;
  } catch {}
  const next = Math.random() < 0.5 ? "A" : "B";
  try {
    localStorage.setItem(VARIANT_KEY, next);
  } catch {}
  return next;
};

const fireEvent = (name, variant) => {
  // Fire and forget — never blocks the user
  try {
    axios
      .post(
        `${API}/events`,
        { name, variant, metadata: { url: window.location.pathname } },
        { timeout: 4000 }
      )
      .catch(() => {});
  } catch {}
};

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const variant = useMemo(getOrAssignVariant, []);
  const config = VARIANTS[variant];
  const Icon = config.Icon;
  const CTAIcon = config.ctaIcon;
  const viewFiredRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    let timerId;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setOpen(true);
    };

    const onMouseOut = (e) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      timerId = setTimeout(trigger, 25000);
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  // Fire view event once popup actually opens
  useEffect(() => {
    if (open && !viewFiredRef.current) {
      viewFiredRef.current = true;
      fireEvent("exit_view", variant);
    }
  }, [open, variant]);

  const persistClose = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  const close = () => {
    setOpen(false);
    persistClose();
  };

  const handleCTA = () => {
    setClicked(true);
    fireEvent("exit_click", variant);
    persistClose();
    config.action();
    // Close shortly after to give the new tab time to open
    setTimeout(() => setOpen(false), 500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4"
          data-testid="exit-intent-popup"
          data-variant={variant}
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={close}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden glass-strong am-ring-border"
          >
            {/* Accent glows */}
            <div className="absolute -top-32 -right-20 w-72 h-72 rounded-full bg-[#9EFF00]/15 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-[#9EFF00]/10 blur-[110px] pointer-events-none" />

            <button
              onClick={close}
              data-testid="exit-intent-close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white/70 hover:text-[#9EFF00] hover:border-[#9EFF00]/40 transition"
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>

            {!clicked ? (
              <div className="relative p-7 sm:p-10">
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] mb-6 font-mono-am"
                  data-testid="exit-intent-pill"
                >
                  <Sparkles size={11} /> {config.pill}
                </div>

                <div className="flex items-start gap-5">
                  <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-2xl border border-[#9EFF00]/30 bg-[#9EFF00]/[0.06] items-center justify-center text-[#9EFF00] am-glow">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-display text-2xl sm:text-[32px] leading-[1.08] tracking-tighter font-semibold"
                      data-testid="exit-intent-title"
                    >
                      {config.title}
                    </h3>
                    <p className="text-white/60 text-[14px] mt-4 leading-relaxed">
                      {config.body}
                    </p>
                  </div>
                </div>

                <ul className="mt-7 space-y-2.5">
                  {config.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[13.5px] text-white/75"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[#9EFF00] mt-0.5 shrink-0"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={handleCTA}
                    data-testid="exit-intent-cta"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9EFF00] text-black px-6 py-3.5 text-[14px] font-semibold hover:bg-[#b8ff3a] transition shadow-[0_0_30px_rgba(158,255,0,0.4)]"
                  >
                    <CTAIcon size={15} />
                    {config.ctaLabel}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  <button
                    onClick={close}
                    data-testid="exit-intent-decline"
                    className="rounded-full border border-white/10 px-6 py-3.5 text-[13px] text-white/55 hover:text-white hover:bg-white/[0.04] transition"
                  >
                    Quizás más tarde
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-white/35">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
                    100% confidencial
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
                    Sin spam · Sin obligación
                  </span>
                </div>

                <div className="absolute bottom-3 right-5 text-[10px] uppercase tracking-[0.22em] text-white/15 font-mono-am pointer-events-none">
                  v.{variant}
                </div>
              </div>
            ) : (
              <div
                className="relative p-10 text-center"
                data-testid="exit-redirecting-state"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-[#9EFF00]/15 border border-[#9EFF00]/40 flex items-center justify-center text-[#9EFF00] mb-5 am-glow">
                  <CheckCircle2 size={24} />
                </div>
                <div className="font-display text-2xl">¡Te estamos redirigiendo!</div>
                <div className="text-white/55 text-[13.5px] mt-2">
                  Si no se abre una nueva pestaña automáticamente, hacé clic{" "}
                  <button
                    onClick={config.action}
                    className="text-[#9EFF00] underline-offset-2 underline"
                  >
                    aquí
                  </button>
                  .
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;

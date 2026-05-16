import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";
import { requestInmoBotTrial } from "../lib/site";

// Evergreen countdown: 72h from the visitor's first visit, persisted in localStorage.
// When it reaches 0, it auto-resets so the urgency stays alive.
const STORAGE_KEY = "am_combo_deadline_v1";
const DISMISS_KEY = "am_combo_banner_dismiss_v1";
const DURATION_MS = 72 * 60 * 60 * 1000; // 72h

const getDeadline = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const ts = parseInt(raw, 10);
      if (!Number.isNaN(ts) && ts > Date.now()) return ts;
    }
  } catch {}
  const fresh = Date.now() + DURATION_MS;
  try {
    localStorage.setItem(STORAGE_KEY, String(fresh));
  } catch {}
  return fresh;
};

const fmt = (ms) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return { d, h, m, s };
};

const CountdownBanner = () => {
  const [deadline, setDeadline] = useState(0);
  const [now, setNow] = useState(Date.now());
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(DISMISS_KEY)) {
      setHidden(true);
      return;
    }
    setDeadline(getDeadline());
    setHidden(false);
  }, []);

  useEffect(() => {
    if (hidden) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [hidden]);

  // Auto-renew when expired
  useEffect(() => {
    if (!deadline || hidden) return;
    if (now >= deadline) {
      const next = Date.now() + DURATION_MS;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {}
      setDeadline(next);
    }
  }, [now, deadline, hidden]);

  const dismiss = () => {
    setHidden(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {}
    // Adjust navbar top offset
    document.documentElement.style.setProperty("--am-banner-h", "0px");
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--am-banner-h",
      hidden ? "0px" : "44px"
    );
  }, [hidden]);

  if (hidden) return null;

  const remaining = Math.max(0, deadline - now);
  const { d, h, m, s } = fmt(remaining);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        data-testid="countdown-banner"
        className="fixed top-0 inset-x-0 z-[60] h-11 flex items-center justify-center px-4 bg-[#0a0d0c] border-b border-[#9EFF00]/30"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9EFF00]/[0.07] to-transparent pointer-events-none" />

        <div className="relative max-w-7xl w-full mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] font-mono-am shrink-0">
              <Zap size={11} className="fill-[#9EFF00]" /> Combo Premium
            </span>
            <span className="hidden md:inline text-white/55 text-[12px] tracking-wide shrink-0">
              7 días gratis · InmoBot + Automatik Media
            </span>
            <div className="flex items-center gap-1.5 text-[12px] font-mono-am ml-auto sm:ml-2">
              <span className="text-white/45 uppercase text-[10px] tracking-[0.18em] hidden sm:inline">
                Termina en
              </span>
              {[
                { v: d, label: "d" },
                { v: h, label: "h" },
                { v: m, label: "m" },
                { v: s, label: "s" },
              ].map((b, i) => (
                <React.Fragment key={b.label}>
                  <span className="inline-flex items-center justify-center min-w-[34px] rounded-md bg-white/[0.05] border border-white/10 px-1.5 py-0.5 text-[#9EFF00] tabular-nums font-semibold">
                    {String(b.v).padStart(2, "0")}
                    <span className="text-white/40 ml-0.5 text-[10px] uppercase">
                      {b.label}
                    </span>
                  </span>
                  {i < 3 && (
                    <span className="text-white/15 text-[10px]">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <button
            onClick={() => requestInmoBotTrial("countdown_banner")}
            data-testid="countdown-cta"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#9EFF00] text-black px-4 py-1.5 text-[12px] font-semibold hover:bg-[#b8ff3a] transition shrink-0"
          >
            Probar gratis <span>→</span>
          </button>

          <button
            onClick={dismiss}
            data-testid="countdown-dismiss"
            aria-label="Cerrar banner"
            className="text-white/40 hover:text-white transition shrink-0 p-1"
          >
            <X size={14} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CountdownBanner;

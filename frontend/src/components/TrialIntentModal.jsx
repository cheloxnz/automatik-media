import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  MessageCircle,
  Bot,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import {
  TRIAL_INTENT_EVENT,
  openInmoBotTrial,
  openInmoBotPlusWhatsApp,
} from "../lib/site";

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND}/api`;

const track = (name, metadata = {}) => {
  try {
    axios
      .post(`${API}/events`, { name, variant: "trial_intent", metadata }, { timeout: 4000 })
      .catch(() => {});
  } catch {}
};

const TrialIntentModal = () => {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState("unknown");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e) => {
      const detail = e?.detail || {};
      setOrigin(detail.origin || "unknown");
      setOpen(true);
      track("trial_intent_view", { origin: detail.origin || "unknown" });
    };
    window.addEventListener(TRIAL_INTENT_EVENT, handler);
    return () => window.removeEventListener(TRIAL_INTENT_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const handleWithExpert = () => {
    track("trial_with_expert", { origin });
    openInmoBotPlusWhatsApp();
    setTimeout(close, 300);
  };

  const handleSelfServe = () => {
    track("trial_self_serve", { origin });
    openInmoBotTrial();
    setTimeout(close, 200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          data-testid="trial-intent-modal"
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={close}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden glass-strong am-ring-border"
          >
            <div className="absolute -top-32 -right-20 w-72 h-72 rounded-full bg-[#9EFF00]/15 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-[#9EFF00]/10 blur-[110px] pointer-events-none" />

            <button
              onClick={close}
              data-testid="trial-intent-close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white/70 hover:text-[#9EFF00] hover:border-[#9EFF00]/40 transition"
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>

            <div className="relative p-7 sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] mb-6 font-mono-am">
                <Sparkles size={11} /> Antes de empezar tu trial
              </div>

              <h3
                className="font-display text-2xl sm:text-[32px] leading-[1.08] tracking-tighter font-semibold"
                data-testid="trial-intent-title"
              >
                ¿Querés que un experto te{" "}
                <span className="text-[#9EFF00] am-text-glow">configure el bot</span>{" "}
                para tu negocio?
              </h3>
              <p className="text-white/60 text-[14px] mt-4 leading-relaxed">
                Podés activar InmoBot solo o con acompañamiento humano. La
                mayoría logra su primera conversación calificada{" "}
                <span className="text-white">en menos de 24 hs</span> cuando
                arrancamos juntos.
              </p>

              {/* Two-card choice */}
              <div className="grid sm:grid-cols-2 gap-3 mt-7">
                {/* Recommended — with expert */}
                <button
                  onClick={handleWithExpert}
                  data-testid="trial-intent-with-expert"
                  className="group relative text-left rounded-2xl p-5 bg-gradient-to-br from-[#9EFF00]/[0.10] to-[#9EFF00]/[0.02] border border-[#9EFF00]/40 hover:border-[#9EFF00]/70 transition shadow-[0_0_40px_-15px_rgba(158,255,0,0.5)]"
                >
                  <div className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.22em] text-black bg-[#9EFF00] rounded-full px-2 py-0.5 font-semibold">
                    Recomendado
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-black/40 border border-[#9EFF00]/40 flex items-center justify-center text-[#9EFF00] mb-4">
                    <MessageCircle size={18} />
                  </div>
                  <div className="font-display text-white text-[17px] tracking-tight mb-1">
                    Trial + experto por WhatsApp
                  </div>
                  <div className="text-[12.5px] text-white/60 leading-relaxed mb-4">
                    Te abrimos el signup y un especialista te acompaña en vivo
                    para configurar el bot a tu negocio.
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {[
                      "Configuración guiada en 20 min",
                      "Te ayudamos a cargar tus flujos",
                      "Resolvemos dudas al instante",
                    ].map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[12px] text-white/75"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-[#9EFF00] mt-0.5 shrink-0"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#9EFF00] group-hover:translate-x-1 transition-transform">
                    Abrir trial + WhatsApp <ArrowRight size={13} />
                  </div>
                </button>

                {/* Self-serve */}
                <button
                  onClick={handleSelfServe}
                  data-testid="trial-intent-self-serve"
                  className="group relative text-left rounded-2xl p-5 bg-white/[0.02] border border-white/10 hover:border-white/25 transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-white/70 mb-4">
                    <Bot size={18} />
                  </div>
                  <div className="font-display text-white text-[17px] tracking-tight mb-1">
                    Solo el trial
                  </div>
                  <div className="text-[12.5px] text-white/55 leading-relaxed mb-4">
                    Avanzo solo con el onboarding de InmoBot. Si necesito ayuda
                    después, te escribo.
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {[
                      "Onboarding self-serve",
                      "7 días gratis sin tarjeta",
                      "Soporte cuando lo pidas",
                    ].map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[12px] text-white/65"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-white/40 mt-0.5 shrink-0"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/70 group-hover:text-white group-hover:translate-x-1 transition">
                    Abrir solo el trial <ArrowRight size={13} />
                  </div>
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-white/35">
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
                  Sin costo
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
                  Sin tarjeta
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
                  Cancelás cuando quieras
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrialIntentModal;

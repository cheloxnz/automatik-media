import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import axios from "axios";

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND}/api`;

const STORAGE_KEY = "am_exit_popup_v1";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Don't show if already shown / submitted in this device
    if (localStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    let timerId;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setOpen(true);
    };

    // Desktop: mouse leaves through the top
    const onMouseOut = (e) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    // Mobile fallback: trigger after 25s of activity if not yet shown
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

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email) {
      setError("Por favor completá tu nombre y email.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        ...form,
        source: "exit_intent_popup",
        message: "Solicitó auditoría gratuita desde exit-intent",
      });
      setSubmitted(true);
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    } catch (err) {
      const detail = err?.response?.data?.detail;
      setError(typeof detail === "string" ? detail : "Algo falló. Probá nuevamente.");
    } finally {
      setLoading(false);
    }
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
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={close} />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden glass-strong am-ring-border"
          >
            {/* Accent glow */}
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

            {!submitted ? (
              <div className="relative p-7 sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] mb-5 font-mono-am">
                  <Sparkles size={11} /> Oferta exclusiva · Antes de que te vayas
                </div>
                <h3 className="font-display text-3xl sm:text-4xl tracking-tighter font-semibold leading-[1.05]">
                  Recibí una{" "}
                  <span className="text-[#9EFF00] am-text-glow">auditoría gratuita</span>{" "}
                  de tu sistema de adquisición
                </h3>
                <p className="text-white/60 text-[14px] mt-4 leading-relaxed">
                  Analizamos tus anuncios, embudo y respuesta a leads. Te
                  devolvemos un informe con las 3 mejoras de mayor impacto —
                  sin costo, sin compromiso.
                </p>

                <form onSubmit={submit} className="mt-7 grid sm:grid-cols-2 gap-3">
                  <input
                    data-testid="exit-input-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nombre"
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:outline-none focus:border-[#9EFF00]/50 transition"
                    required
                  />
                  <input
                    data-testid="exit-input-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email"
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:outline-none focus:border-[#9EFF00]/50 transition"
                    required
                  />
                  <input
                    data-testid="exit-input-phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="WhatsApp (opcional)"
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:outline-none focus:border-[#9EFF00]/50 transition"
                  />
                  <input
                    data-testid="exit-input-business"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    placeholder="Tu negocio"
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:outline-none focus:border-[#9EFF00]/50 transition"
                  />

                  {error && (
                    <div
                      data-testid="exit-form-error"
                      className="sm:col-span-2 text-[13px] text-red-300/90 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="exit-submit"
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#9EFF00] text-black px-6 py-3.5 text-[14px] font-semibold hover:bg-[#b8ff3a] transition disabled:opacity-60 shadow-[0_0_30px_rgba(158,255,0,0.35)]"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Enviando...
                      </>
                    ) : (
                      <>Quiero mi auditoría gratuita →</>
                    )}
                  </button>
                </form>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-white/35">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
                    100% confidencial
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
                    Respuesta en 24 hs
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative p-10 sm:p-14 text-center" data-testid="exit-submitted-state">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#9EFF00]/15 border border-[#9EFF00]/40 flex items-center justify-center text-[#9EFF00] mb-6 am-glow">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-display text-3xl tracking-tighter">
                  Recibimos tu solicitud
                </h3>
                <p className="text-white/60 mt-4 max-w-md mx-auto text-[14px] leading-relaxed">
                  Te vamos a contactar en menos de 24 hs para coordinar tu
                  auditoría gratuita. Si querés, podés agendar directo abajo.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://calendly.com/cheloxnz/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="rounded-full bg-[#9EFF00] text-black px-6 py-3 text-[13px] font-semibold hover:bg-[#b8ff3a] transition"
                  >
                    Agendar ahora →
                  </a>
                  <button
                    onClick={close}
                    className="rounded-full border border-white/15 px-6 py-3 text-[13px] text-white/80 hover:bg-white/[0.05]"
                  >
                    Más tarde
                  </button>
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

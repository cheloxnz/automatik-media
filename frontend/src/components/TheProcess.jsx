import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, Cpu, TrendingUp } from "lucide-react";
import { openCalendly } from "../lib/site";

const phases = [
  {
    num: "01",
    icon: Search,
    label: "Auditoría",
    title: "Entendemos tu negocio antes de proponer cualquier solución",
    body:
      "Analizamos tus procesos actuales, identificamos los puntos de mayor fricción y cuantificamos el impacto potencial de la IA en tu operación. Sin promesas vacías, solo diagnóstico real.",
    duration: "1–2 semanas",
    deliverable: "Mapa de oportunidades + priorización de impacto",
  },
  {
    num: "02",
    icon: Zap,
    label: "Quick Wins",
    title: "Resultados tangibles en las primeras semanas",
    body:
      "Implementamos automatizaciones de alto impacto y bajo riesgo que generan valor inmediato. Esto valida la metodología y libera recursos para la implementación completa.",
    duration: "2–4 semanas",
    deliverable: "3–5 automatizaciones operativas y funcionando",
  },
  {
    num: "03",
    icon: Cpu,
    label: "Implementación completa",
    title: "Construimos el sistema de IA de tu negocio",
    body:
      "Desarrollamos e integramos el stack completo: agentes conversacionales, flujos de automatización, dashboards e integraciones con tus sistemas existentes.",
    duration: "4–12 semanas",
    deliverable: "Sistema de IA personalizado en producción",
  },
  {
    num: "04",
    icon: TrendingUp,
    label: "Autonomía",
    title: "Tu equipo toma el control, nosotros seguimos mejorando",
    body:
      "Formamos a tu equipo, documentamos cada proceso y establecemos métricas de seguimiento. El sistema sigue evolucionando con el negocio.",
    duration: "Ongoing",
    deliverable: "KPIs, dashboards de impacto y soporte continuo",
  },
];

const TheProcess = () => {
  const [active, setActive] = useState(0);
  const p = phases[active];

  return (
    <section id="proceso" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-[#9EFF00]/4 blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            El proceso
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            4 fases.{" "}
            <span className="text-[#9EFF00] am-text-glow">Resultados</span>{" "}
            <span className="italic font-light text-white/60">desde la semana 1.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Phase selector */}
          <div className="lg:col-span-4 flex lg:flex-col gap-3">
            {phases.map((ph, i) => (
              <button
                key={ph.num}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                  active === i
                    ? "border-[#9EFF00]/40 bg-[#9EFF00]/5"
                    : "border-white/8 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <span
                  className={`font-display text-2xl font-semibold w-12 flex-shrink-0 transition ${
                    active === i ? "text-[#9EFF00]" : "text-white/20"
                  }`}
                >
                  {ph.num}
                </span>
                <div>
                  <div className={`text-[11px] uppercase tracking-[0.18em] mb-0.5 transition ${active === i ? "text-[#9EFF00]" : "text-white/40"}`}>
                    {ph.label}
                  </div>
                  <div className="text-[13px] text-white/70 hidden sm:block leading-snug">
                    {ph.duration}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Phase detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-8 sm:p-10 h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#9EFF00]/10 flex items-center justify-center text-[#9EFF00] flex-shrink-0">
                    <p.icon size={22} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#9EFF00] mb-1">
                      Fase {p.num} · {p.label}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <p className="text-white/65 text-[15px] leading-relaxed mb-8">{p.body}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/[0.03] border border-white/8 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-1.5">
                      Duración
                    </div>
                    <div className="text-white font-medium">{p.duration}</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/8 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-1.5">
                      Entregable
                    </div>
                    <div className="text-white font-medium text-[14px] leading-snug">{p.deliverable}</div>
                  </div>
                </div>

                {active === 0 && (
                  <button
                    onClick={openCalendly}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#9EFF00] text-black px-6 py-3 text-[13px] font-semibold hover:bg-[#b8ff3a] transition shadow-[0_0_30px_rgba(158,255,0,0.3)]"
                  >
                    Empezar con la auditoría gratuita →
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;

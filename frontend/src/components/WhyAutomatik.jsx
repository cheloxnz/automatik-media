import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { attr: "Soluciones a medida", us: true, generic: false, consultant: false },
  { attr: "Implementación técnica completa", us: true, generic: false, consultant: false },
  { attr: "Resultado en semanas (no meses)", us: true, generic: true, consultant: false },
  { attr: "Mantenimiento y evolución continua", us: true, generic: false, consultant: false },
  { attr: "Integración con tus sistemas actuales", us: true, generic: false, consultant: true },
  { attr: "Sin contratos eternos ni lock-in", us: true, generic: false, consultant: false },
  { attr: "Formación del equipo interno", us: true, generic: false, consultant: true },
  { attr: "Soporte técnico dedicado", us: true, generic: false, consultant: false },
];

const Cell = ({ value }) =>
  value ? (
    <div className="flex justify-center">
      <Check size={18} className="text-[#9EFF00]" />
    </div>
  ) : (
    <div className="flex justify-center">
      <X size={16} className="text-white/20" />
    </div>
  );

const WhyAutomatik = () => {
  return (
    <section id="por-que" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#9EFF00]/5 blur-[160px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            Por qué Automatik
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            No somos una alternativa.{" "}
            <span className="text-[#9EFF00] am-text-glow">Somos otra categoría.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/8 overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/8">
            <div className="p-5 col-span-1" />
            <div className="p-5 text-center">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#9EFF00] font-semibold">
                Automatik Media
              </div>
            </div>
            <div className="p-5 text-center">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Software genérico
              </div>
            </div>
            <div className="p-5 text-center">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Consultora tradicional
              </div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={r.attr}
              className={`grid grid-cols-4 border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
              }`}
            >
              <div className="p-4 sm:p-5 text-[13px] text-white/70 col-span-1 flex items-center">
                {r.attr}
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center bg-[#9EFF00]/[0.02]">
                <Cell value={r.us} />
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center">
                <Cell value={r.generic} />
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center">
                <Cell value={r.consultant} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAutomatik;

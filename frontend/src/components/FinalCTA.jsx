import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { openCalendly, openWhatsApp } from "../lib/site";

const FinalCTA = () => {
  return (
    <section
      data-testid="final-cta-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 am-grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#9EFF00]/10 blur-[180px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.05] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[#9EFF00] mb-8"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#9EFF00] opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#9EFF00]" />
          </span>
          Disponible ahora
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tighter font-semibold max-w-3xl mx-auto"
        >
          El próximo cliente que escribe a las 11pm{" "}
          <span className="text-[#9EFF00] am-text-glow">no puede irse sin respuesta.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 mt-7 max-w-xl mx-auto text-[15px] leading-relaxed"
        >
          Hablemos 30 minutos. Te mostramos exactamente qué nivel le conviene a tu negocio
          y cómo funciona el sistema antes de que pongas un peso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openCalendly}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9EFF00] text-black px-8 py-4 text-[14px] font-semibold hover:bg-[#b8ff3a] transition shadow-[0_0_45px_rgba(158,255,0,0.45)]"
          >
            Quiero mi bot →
          </button>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-[14px] font-medium text-white hover:bg-white/[0.07] hover:border-white/30 transition"
          >
            <MessageCircle size={16} className="text-[#9EFF00]" />
            Hablar por WhatsApp
          </button>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.22em] text-white/40">
          <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#9EFF00]" />30 min · sin costo</span>
          <span className="hidden sm:flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#9EFF00]" />Setup en ~15 días</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#9EFF00]" />Sin compromiso</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

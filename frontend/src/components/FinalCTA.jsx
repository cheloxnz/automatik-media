import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FINAL_CTA_BG, openCalendly, openWhatsApp } from "../lib/site";

const FinalCTA = () => {
  return (
    <section
      data-testid="final-cta-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${FINAL_CTA_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      <div className="absolute inset-0 am-grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#9EFF00]/10 blur-[160px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-[#9EFF00] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-pulse" />
          Cupos limitados este mes
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="final-cta-headline"
          className="font-display text-3xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-tighter font-semibold max-w-4xl mx-auto"
        >
          Tu negocio ya tiene potencial.
          <br />
          <span className="text-white/50">Nosotros construimos el sistema</span>{" "}
          <span className="text-[#9EFF00] am-text-glow">para escalarlo.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          data-testid="final-cta-subheadline"
          className="text-white/60 mt-7 max-w-2xl mx-auto text-[15px] sm:text-base leading-relaxed"
        >
          Automatik Media combina marketing, IA y automatización para convertir
          negocios premium en líderes de su mercado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openCalendly}
            data-testid="final-cta-agendar"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9EFF00] text-black px-8 py-4 text-[14px] font-semibold tracking-wide hover:bg-[#b8ff3a] transition shadow-[0_0_45px_rgba(158,255,0,0.45)]"
          >
            Agendar Reunión
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={openWhatsApp}
            data-testid="final-cta-whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-[14px] font-medium text-white hover:bg-white/[0.07] hover:border-white/30 transition backdrop-blur-md"
          >
            <MessageCircle size={16} className="text-[#9EFF00]" />
            Hablar por WhatsApp
          </button>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.22em] text-white/40">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
            Respuesta en 24 hs
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
            Diagnóstico gratuito
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#9EFF00]" />
            Sin compromiso
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

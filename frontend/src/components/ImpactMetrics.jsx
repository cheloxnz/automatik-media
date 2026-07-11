import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: "24/7", label: "Atención sin interrupciones", desc: "el bot no duerme, no falla el lunes" },
  { value: "< 5 seg", label: "Tiempo de respuesta", desc: "vs. 2–4 horas del promedio humano" },
  { value: "~15 días", label: "Tiempo de entrega", desc: "desde el pago hasta el bot activo" },
  { value: "4 niveles", label: "Tamaños disponibles", desc: "del bot básico a la automatización total" },
];

const ImpactMetrics = () => {
  return (
    <section id="impacto" className="relative py-16 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-[#9EFF00]/5 via-transparent to-[#9EFF00]/5" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="lg:px-10 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="font-display text-4xl sm:text-5xl text-[#9EFF00] tracking-tighter">{m.value}</div>
              <div className="mt-2 text-[13px] font-medium text-white/90 leading-snug">{m.label}</div>
              <div className="mt-1 text-[12px] text-white/40">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;

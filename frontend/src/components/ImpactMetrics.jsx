import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: "+40%", label: "Reducción de costos operativos", desc: "promedio en los primeros 90 días" },
  { value: "10x", label: "Velocidad de respuesta al cliente", desc: "con agentes de IA 24/7" },
  { value: "3–5x", label: "Productividad por empleado", desc: "al eliminar tareas repetitivas" },
  { value: "< 4 sem", label: "Primer resultado visible", desc: "desde el inicio del proyecto" },
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
              <div className="font-display text-4xl sm:text-5xl text-[#9EFF00] tracking-tighter">
                {m.value}
              </div>
              <div className="mt-2 text-[13px] font-medium text-white/90 leading-snug">
                {m.label}
              </div>
              <div className="mt-1 text-[12px] text-white/40">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;

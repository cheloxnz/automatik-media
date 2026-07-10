import React from "react";
import { motion } from "framer-motion";

const cases = [
  {
    initials: "HB",
    name: "Hamburguesería",
    location: "Buenos Aires, AR",
    nivel: "Nivel 1 · Bot Vendedor",
    before: { label: "Respuesta promedio", value: "4 hs" },
    after: { label: "Respuesta promedio", value: "< 30 seg" },
    metrics: [
      { label: "Consultas fuera de horario", value: "100% respondidas" },
      { label: "Pedidos cerrados por el bot", value: "+34%/mes" },
      { label: "Horas liberadas al dueño", value: "18 hs/sem" },
    ],
    quote: "Antes el viernes a la noche perdía pedidos porque estaba en el local y no podía atender el WhatsApp. Ahora el bot cierra solo.",
  },
  {
    initials: "CE",
    name: "Clínica estética",
    location: "Córdoba, AR",
    nivel: "Nivel 2 · Bot + CRM",
    before: { label: "Leads con seguimiento", value: "20%" },
    after: { label: "Leads con seguimiento", value: "100%" },
    metrics: [
      { label: "Turnos agendados por bot", value: "+67%" },
      { label: "Base de clientes ordenada", value: "1.200+ contactos" },
      { label: "ROI a 90 días", value: "4.8x" },
    ],
    quote: "Antes teníamos los contactos en planillas y el teléfono de cada empleado. Ahora todo está en un solo lugar y el bot hace el seguimiento solo.",
  },
  {
    initials: "AG",
    name: "Agencia de autos",
    location: "Monterrey, MX",
    nivel: "Nivel 3 · Bot + CRM + Dashboard",
    before: { label: "Tiempo de respuesta", value: "2–6 hs" },
    after: { label: "Tiempo de respuesta", value: "< 1 min" },
    metrics: [
      { label: "Consultas respondidas/mes", value: "340+" },
      { label: "Leads sin respuesta", value: "0" },
      { label: "Conversión web → consulta", value: "+52%" },
    ],
    quote: "El dashboard me muestra qué modelos se preguntan más y cuáles se pierden. Por primera vez tengo datos reales de lo que pasa en mi WhatsApp.",
  },
];

const SuccessCases = () => {
  return (
    <section id="casos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#9EFF00]/4 blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            Casos reales
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            Negocios que ya{" "}
            <span className="text-[#9EFF00] am-text-glow">no pierden consultas.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#9EFF00]/15 flex items-center justify-center text-[#9EFF00] font-display font-semibold text-sm">
                  {c.initials}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">{c.name}</div>
                  <div className="text-[12px] text-white/40">{c.location}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl bg-white/[0.03] border border-white/8 p-3.5 text-center">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-white/40 mb-1">Antes</div>
                  <div className="font-display text-xl text-white/40">{c.before.value}</div>
                  <div className="text-[10px] text-white/30 mt-0.5">{c.before.label}</div>
                </div>
                <div className="rounded-xl bg-[#9EFF00]/[0.06] border border-[#9EFF00]/20 p-3.5 text-center">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[#9EFF00] mb-1">Después</div>
                  <div className="font-display text-xl text-[#9EFF00]">{c.after.value}</div>
                  <div className="text-[10px] text-[#9EFF00]/60 mt-0.5">{c.after.label}</div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {c.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-[13px]">
                    <span className="text-white/50">{m.label}</span>
                    <span className="text-white font-medium">{m.value}</span>
                  </div>
                ))}
              </div>

              <blockquote className="mt-auto pt-5 border-t border-white/8 text-[13px] text-white/65 italic leading-relaxed">
                "{c.quote}"
              </blockquote>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#9EFF00]/20 bg-[#9EFF00]/[0.05] px-3 py-1 text-[11px] text-[#9EFF00]">
                {c.nivel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;

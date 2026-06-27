import React from "react";
import { motion } from "framer-motion";

const cases = [
  {
    initials: "IM",
    name: "Inmobiliaria premium",
    location: "Buenos Aires, AR",
    industry: "Real Estate",
    before: { label: "Leads calificados/mes", value: "12" },
    after: { label: "Leads calificados/mes", value: "67" },
    metrics: [
      { label: "Tiempo de respuesta", value: "< 90 seg" },
      { label: "Horas admin ahorradas", value: "28/sem" },
      { label: "ROI a 90 días", value: "5.1x" },
    ],
    quote: "Antes perdíamos leads porque nadie podía responder a las 11pm. Ahora el bot califica, agenda y el equipo solo cierra.",
    phase: "Implementación completa",
  },
  {
    initials: "RL",
    name: "Retail de indumentaria",
    location: "Córdoba, AR",
    industry: "Retail",
    before: { label: "Consultas atendidas/día", value: "30" },
    after: { label: "Consultas atendidas/día", value: "210" },
    metrics: [
      { label: "Conversión web", value: "+38%" },
      { label: "Tickets de soporte", value: "-65%" },
      { label: "Satisfacción cliente", value: "4.8/5" },
    ],
    quote: "El chatbot maneja el 80% de las consultas. Mi equipo ahora se enfoca en clientes que realmente necesitan ayuda humana.",
    phase: "Quick Wins + Implementación",
  },
  {
    initials: "AS",
    name: "Asesoría contable",
    location: "Monterrey, MX",
    industry: "Servicios profesionales",
    before: { label: "Onboarding de cliente (días)", value: "7" },
    after: { label: "Onboarding de cliente (días)", value: "1" },
    metrics: [
      { label: "Documentos procesados", value: "10x más rápido" },
      { label: "Errores de carga", value: "-94%" },
      { label: "Clientes gestionados", value: "+3x" },
    ],
    quote: "Lo que tardábamos una semana en procesar ahora está listo en horas. Pudimos triplicar la cartera sin contratar más personal.",
    phase: "Automatización operativa",
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
            Casos de éxito
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            Resultados reales.{" "}
            <span className="text-[#9EFF00] am-text-glow">Negocios reales.</span>
          </h2>
          <p className="mt-5 text-white/60 text-[15px] leading-relaxed">
            Cada caso parte de un diagnóstico real y termina con métricas medibles.
            Sin promesas vacías, sin vanity metrics.
          </p>
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
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#9EFF00]/15 flex items-center justify-center text-[#9EFF00] font-display font-semibold text-sm">
                  {c.initials}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">{c.name}</div>
                  <div className="text-[12px] text-white/40">{c.location} · {c.industry}</div>
                </div>
              </div>

              {/* Before/After main metric */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl bg-white/[0.03] border border-white/8 p-3.5 text-center">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-white/40 mb-1">Antes</div>
                  <div className="font-display text-2xl text-white/40">{c.before.value}</div>
                  <div className="text-[10px] text-white/30 mt-0.5">{c.before.label}</div>
                </div>
                <div className="rounded-xl bg-[#9EFF00]/[0.06] border border-[#9EFF00]/20 p-3.5 text-center">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[#9EFF00] mb-1">Después</div>
                  <div className="font-display text-2xl text-[#9EFF00]">{c.after.value}</div>
                  <div className="text-[10px] text-[#9EFF00]/60 mt-0.5">{c.after.label}</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-2 mb-6">
                {c.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-[13px]">
                    <span className="text-white/50">{m.label}</span>
                    <span className="text-white font-medium">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-auto pt-5 border-t border-white/8 text-[13px] text-white/65 italic leading-relaxed">
                "{c.quote}"
              </blockquote>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#9EFF00]/20 bg-[#9EFF00]/[0.05] px-3 py-1 text-[11px] text-[#9EFF00]">
                {c.phase}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;

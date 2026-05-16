import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    initials: "CE",
    name: "Clínica estética premium",
    location: "Palermo, BA",
    industry: "Beauty Clinic",
    before: { label: "Consultas/mes", value: "6" },
    after: { label: "Consultas/mes", value: "28" },
    metrics: [
      { label: "Ticket promedio", value: "+41%" },
      { label: "Tiempo respuesta", value: "< 1 min" },
      { label: "ROI a 90 días", value: "4.2x" },
    ],
    quote:
      "Mi equipo dejó de filtrar consultas y se enfoca solo en cerrar. La agenda no para.",
  },
  {
    initials: "CP",
    name: "Centro de cirugía plástica",
    location: "Recoleta, BA",
    industry: "Plastic Surgery",
    before: { label: "Leads perdidos", value: "62%" },
    after: { label: "Leads perdidos", value: "9%" },
    metrics: [
      { label: "Calls agendadas", value: "+312%" },
      { label: "Tiempo respuesta", value: "< 1 min" },
      { label: "Show rate", value: "84%" },
    ],
    quote:
      "InmoBot califica mejor que un SDR humano. Solo veo en agenda casos serios.",
  },
  {
    initials: "RE",
    name: "Inmobiliaria boutique",
    location: "Nordelta",
    industry: "Real Estate",
    before: { label: "Visitas/mes", value: "4" },
    after: { label: "Visitas/mes", value: "21" },
    metrics: [
      { label: "Cierres 90 días", value: "3 prop." },
      { label: "Ticket promedio", value: "US$ 480k" },
      { label: "Tiempo respuesta", value: "Instantáneo" },
    ],
    quote:
      "Vendimos 3 propiedades en el primer trimestre sin tocar el celular un fin de semana.",
  },
  {
    initials: "GA",
    name: "Salón premium",
    location: "Recoleta, BA",
    industry: "Luxury Salon",
    before: { label: "Reservas online", value: "18%" },
    after: { label: "Reservas online", value: "67%" },
    metrics: [
      { label: "No-shows", value: "-58%" },
      { label: "Ticket promedio", value: "+28%" },
      { label: "Recurrencia", value: "+44%" },
    ],
    quote:
      "Cambió por completo el perfil de clienta. Hoy entran ya pre-calificadas y compran al instante.",
  },
];

const SuccessCases = () => {
  return (
    <section
      id="casos"
      data-testid="cases-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#070908] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ casos de éxito · resultados reales ]
            </div>
            <h2
              data-testid="cases-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Negocios premium que ya están{" "}
              <span className="text-[#9EFF00] am-text-glow">escalando</span> con
              nosotros
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              Números reales de clientes en distintos rubros. Métricas medidas
              durante los primeros 90 días con el sistema completo activo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl glass p-7 sm:p-8 hover:border-[#9EFF00]/30 transition-all overflow-hidden"
              data-testid={`case-${i}`}
            >
              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#9EFF00]/0 group-hover:bg-[#9EFF00]/8 blur-3xl transition" />

              <div className="relative flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9EFF00]/30 to-white/[0.04] border border-[#9EFF00]/30 flex items-center justify-center">
                  <span className="font-display text-white text-base tracking-tight">
                    {c.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-white text-[17px] leading-tight">
                    {c.name}
                  </div>
                  <div className="text-[12px] text-white/45 mt-0.5">
                    {c.location}
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] font-mono-am">
                  {c.industry}
                </div>
              </div>

              {/* Before/After */}
              <div className="relative grid grid-cols-3 items-center gap-3 mb-6">
                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Antes
                  </div>
                  <div className="font-display text-2xl text-white/65 tabular-nums mt-1">
                    {c.before.value}
                  </div>
                  <div className="text-[10.5px] text-white/40 mt-0.5">
                    {c.before.label}
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowUpRight size={22} className="text-[#9EFF00]" />
                </div>
                <div className="rounded-xl border border-[#9EFF00]/40 bg-[#9EFF00]/[0.04] px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#9EFF00]">
                    Ahora
                  </div>
                  <div className="font-display text-2xl text-[#9EFF00] tabular-nums mt-1 am-text-glow">
                    {c.after.value}
                  </div>
                  <div className="text-[10.5px] text-white/55 mt-0.5">
                    {c.after.label}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="relative grid grid-cols-3 gap-2 mb-6">
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="text-center rounded-lg bg-white/[0.02] border border-white/5 px-2 py-2.5"
                  >
                    <div className="font-mono-am text-[#9EFF00] text-[13px] font-semibold tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[9.5px] uppercase tracking-[0.14em] text-white/40 mt-1 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="relative text-white/65 italic text-[13.5px] leading-relaxed border-l-2 border-[#9EFF00]/40 pl-4">
                "{c.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-[11px] uppercase tracking-[0.22em] text-white/30 font-mono-am">
          Métricas auto-reportadas · primeros 90 días con sistema completo
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;

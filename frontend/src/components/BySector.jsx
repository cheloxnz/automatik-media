import React from "react";
import { motion } from "framer-motion";
import { openCalendly } from "../lib/site";

const sectors = [
  {
    emoji: "🏠",
    name: "Inmobiliarias",
    solutions: ["Generación de creativos con IA", "Calificación de leads 24/7", "Prospección B2B corporativa"],
    badge: "InmoGen · InmoBot · InmoDesk",
  },
  {
    emoji: "🛒",
    name: "Retail y e-commerce",
    solutions: ["Atención al cliente automatizada", "Catálogos actualizados con IA", "Campañas personalizadas por segmento"],
    badge: "Implementación en 4–6 semanas",
  },
  {
    emoji: "🚛",
    name: "Logística y transporte",
    solutions: ["Seguimiento de pedidos automatizado", "Comunicación con clientes en tiempo real", "Gestión de incidencias con IA"],
    badge: "Reducción de costos operativos",
  },
  {
    emoji: "🏥",
    name: "Salud y bienestar",
    solutions: ["Agendamiento automático de turnos", "Seguimiento post-consulta con IA", "Recordatorios y comunicación con pacientes"],
    badge: "HIPAA friendly · privacidad garantizada",
  },
  {
    emoji: "📊",
    name: "Asesorías y servicios profesionales",
    solutions: ["Onboarding de clientes automatizado", "Documentación generada con IA", "Pipeline de ventas con seguimiento inteligente"],
    badge: "Más clientes, menos administración",
  },
  {
    emoji: "🏭",
    name: "Industria y manufactura",
    solutions: ["Reportes de producción automáticos", "Control de calidad asistido por IA", "Mantenimiento predictivo básico"],
    badge: "Digitalización acelerada",
  },
];

const BySector = () => {
  return (
    <section id="verticales" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 am-grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            Por sector
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            Si recibís consultas por WhatsApp,{" "}
            <span className="text-[#9EFF00] am-text-glow">el bot funciona.</span>
          </h2>
          <p className="mt-5 text-white/60 text-[15px] leading-relaxed">
            No importa la industria. Si perdés ventas porque no respondés a tiempo,
            el sistema aplica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-[#9EFF00]/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{s.emoji}</div>
              <h3 className="font-display text-lg font-semibold mb-3">{s.name}</h3>
              <ul className="space-y-2 mb-5">
                {s.solutions.map((sol) => (
                  <li key={sol} className="flex items-start gap-2 text-[13px] text-white/65">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#9EFF00] flex-shrink-0" />
                    {sol}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#9EFF00]/20 bg-[#9EFF00]/[0.05] px-3 py-1 text-[11px] text-[#9EFF00] tracking-wide">
                {s.badge}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-white/50 text-[14px] mb-5">
            ¿Tu industria no está en la lista? No importa — la metodología aplica a cualquier negocio.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 rounded-full bg-[#9EFF00] text-black px-7 py-3.5 text-[14px] font-semibold hover:bg-[#b8ff3a] transition shadow-[0_0_30px_rgba(158,255,0,0.3)]"
          >
            Hablemos de tu caso →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BySector;

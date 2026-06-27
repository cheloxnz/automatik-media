import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Procesos manuales que no escalan",
    desc: "Tu equipo gasta horas en tareas repetitivas que podrían estar automatizadas. Cada hora perdida en data entry, seguimientos y reportes es una hora que no se dedica a crecer.",
  },
  {
    icon: Clock,
    title: "Velocidad de respuesta insuficiente",
    desc: "El 78% de los clientes elige al proveedor que responde primero. Sin IA, tu equipo no puede competir con empresas que atienden 24/7 de forma automática.",
  },
  {
    icon: TrendingDown,
    title: "Tecnología genérica que no se adapta",
    desc: "Los CRMs, chatbots y herramientas estándar no fueron diseñados para tu negocio. Terminás pagando por funciones que no usás y sin las que realmente necesitás.",
  },
  {
    icon: Users,
    title: "Talento humano mal aprovechado",
    desc: "Tu mejor gente dedica tiempo a tareas que una IA puede hacer mejor y más rápido. El potencial real de tu equipo queda bloqueado por la operación diaria.",
  },
];

const Problem = () => {
  return (
    <section id="problema" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            El problema
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            Tu negocio tiene potencial.{" "}
            <span className="text-white/40 italic font-light">
              La operación lo frena.
            </span>
          </h2>
          <p className="mt-5 text-white/60 text-[15px] leading-relaxed">
            La mayoría de las empresas ya saben que la IA puede transformar su negocio.
            El problema es que no saben por dónde empezar, qué implementar primero
            ni cómo hacer que realmente funcione.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-5">
                <p.icon size={18} />
              </div>
              <h3 className="font-semibold text-[15px] mb-3 text-white">{p.title}</h3>
              <p className="text-white/55 text-[13px] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-red-400 mb-4">Sin IA</div>
            {[
              "Seguimiento manual por WhatsApp",
              "Reportes armados a mano",
              "Respuesta a leads en horas",
              "Procesos que dependen de personas",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0">
                <span className="w-4 h-4 rounded-full border border-red-500/40 flex items-center justify-center text-red-400 text-[10px] flex-shrink-0">✕</span>
                <span className="text-white/55 text-[13px]">{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#9EFF00]/20 bg-[#9EFF00]/[0.03] p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#9EFF00] mb-4">Con Automatik</div>
            {[
              "Seguimiento automático 24/7 con IA",
              "Reportes en tiempo real, siempre disponibles",
              "Respuesta a leads en segundos",
              "Procesos que escalan solos",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0">
                <span className="w-4 h-4 rounded-full bg-[#9EFF00]/20 flex items-center justify-center text-[#9EFF00] text-[10px] flex-shrink-0">✓</span>
                <span className="text-white/80 text-[13px]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;

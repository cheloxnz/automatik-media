import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Settings, Megaphone, HeadphonesIcon, FileText } from "lucide-react";

const areas = [
  {
    icon: ShoppingCart,
    label: "Ventas",
    color: "#9EFF00",
    title: "IA que cierra más negocios",
    solutions: [
      "Agentes de calificación de leads 24/7",
      "Seguimiento automático por WhatsApp, email y SMS",
      "Scoring de prospectos con IA",
      "CRM actualizado automáticamente",
      "Propuestas personalizadas generadas con IA",
    ],
    result: "Equipos de ventas que trabajan solo con leads calificados y listos para cerrar.",
  },
  {
    icon: Settings,
    label: "Operaciones",
    color: "#9EFF00",
    title: "Procesos que se ejecutan solos",
    solutions: [
      "Automatización de tareas administrativas repetitivas",
      "Flujos de aprobación inteligentes",
      "Sincronización entre sistemas (ERP, CRM, herramientas)",
      "Alertas y reportes automáticos",
      "Gestión de agenda y recursos con IA",
    ],
    result: "Operaciones que escalan sin contratar más personal.",
  },
  {
    icon: Megaphone,
    label: "Marketing",
    color: "#9EFF00",
    title: "Contenido y campañas en piloto automático",
    solutions: [
      "Generación de creativos con IA para Meta y Google Ads",
      "Segmentación y optimización de audiencias",
      "Contenido para redes sociales generado con IA",
      "Email marketing personalizado y automatizado",
      "Reportes de performance automáticos",
    ],
    result: "Más impacto con menos horas dedicadas a marketing.",
  },
  {
    icon: HeadphonesIcon,
    label: "Atención al cliente",
    color: "#9EFF00",
    title: "Soporte que nunca duerme",
    solutions: [
      "Chatbots y agentes IA para WhatsApp, web e Instagram",
      "Resolución automática de consultas frecuentes",
      "Escalado inteligente a agentes humanos",
      "Base de conocimiento actualizada automáticamente",
      "Encuestas de satisfacción y análisis de sentimiento",
    ],
    result: "Clientes atendidos al instante, a cualquier hora, sin costo marginal.",
  },
  {
    icon: FileText,
    label: "Administración",
    color: "#9EFF00",
    title: "Papeleo cero. Decisiones más rápidas.",
    solutions: [
      "Procesamiento automático de facturas y documentos",
      "Extracción de datos con OCR e IA",
      "Generación de contratos y reportes",
      "Control de gastos y alertas financieras",
      "Onboarding de empleados automatizado",
    ],
    result: "El equipo administrativo se enfoca en lo que importa, no en data entry.",
  },
];

const ByArea = () => {
  const [active, setActive] = useState(0);
  const a = areas[active];

  return (
    <section id="areas" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[600px] rounded-full bg-[#9EFF00]/4 blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            Por área de negocio
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            IA para cada parte{" "}
            <span className="text-[#9EFF00] am-text-glow">de tu empresa.</span>
          </h2>
        </motion.div>

        {/* Area tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {areas.map((ar, i) => (
            <button
              key={ar.label}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-[13px] font-medium transition-all ${
                active === i
                  ? "bg-[#9EFF00] text-black border-[#9EFF00]"
                  : "border-white/15 text-white/65 hover:border-white/30 hover:text-white"
              }`}
            >
              <ar.icon size={14} />
              {ar.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-[#9EFF00]/10 flex items-center justify-center text-[#9EFF00] mb-6">
                <a.icon size={22} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">{a.title}</h3>
              <ul className="space-y-3">
                {a.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[14px] text-white/75">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#9EFF00] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-[#9EFF00]/20 bg-[#9EFF00]/[0.03] p-8 sm:p-10">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#9EFF00] mb-4">Resultado esperado</div>
              <p className="text-white text-xl sm:text-2xl font-display font-semibold leading-snug">
                {a.result}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ByArea;

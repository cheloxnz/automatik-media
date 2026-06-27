import React from "react";
import { motion } from "framer-motion";
import { Code2, Workflow, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    tag: "01 / Desarrollo a medida",
    title: "Soluciones de IA construidas para tu negocio",
    body:
      "No plantillas. No software genérico. Diseñamos e implementamos agentes, flujos y modelos entrenados sobre tu operación específica: tus datos, tus procesos, tu industria.",
    items: [
      "Agentes conversacionales con IA",
      "Modelos entrenados en tu dominio",
      "Integraciones con tus sistemas actuales",
      "APIs y automatizaciones custom",
    ],
  },
  {
    icon: Workflow,
    tag: "02 / Automatización inteligente",
    title: "Eliminamos el trabajo repetitivo que frena tu crecimiento",
    body:
      "Mapeamos cada proceso manual, identificamos los cuellos de botella y los reemplazamos con flujos automáticos que trabajan 24/7 sin supervisión.",
    items: [
      "Automatización de ventas y seguimiento",
      "Procesamiento de documentos con IA",
      "Reportes y dashboards automáticos",
      "Notificaciones y alertas inteligentes",
    ],
  },
  {
    icon: ShieldCheck,
    tag: "03 / Soporte y evolución continua",
    title: "Tu sistema de IA mejora con el tiempo",
    body:
      "No entregamos y desaparecemos. Monitoreamos el rendimiento, iteramos sobre los resultados y adaptamos el sistema a medida que tu negocio crece.",
    items: [
      "Monitoreo de performance en tiempo real",
      "Actualizaciones y mejoras periódicas",
      "Soporte técnico dedicado",
      "Formación del equipo interno",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section id="que-hacemos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#9EFF00]/5 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            Qué hacemos
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            Tres pilares.{" "}
            <span className="text-[#9EFF00] am-text-glow">Un sistema</span>{" "}
            <span className="italic font-light text-white/60">que escala.</span>
          </h2>
          <p className="mt-5 text-white/60 text-[15px] leading-relaxed">
            No somos una consultora que hace presentaciones. Somos el equipo técnico que construye,
            implementa y mantiene tu infraestructura de IA de principio a fin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.02] p-8 hover:border-[#9EFF00]/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#9EFF00]/10 flex items-center justify-center text-[#9EFF00] mb-6 group-hover:bg-[#9EFF00]/20 transition">
                <p.icon size={22} />
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3">{p.tag}</div>
              <h3 className="font-display text-xl font-semibold leading-snug mb-4">{p.title}</h3>
              <p className="text-white/60 text-[14px] leading-relaxed mb-6">{p.body}</p>
              <ul className="space-y-2.5">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/70">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#9EFF00] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

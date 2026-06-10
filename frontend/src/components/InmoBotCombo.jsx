import React from "react";
import { motion } from "framer-motion";
import {
  ImageIcon,
  Bot,
  Search,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { openCalendly } from "../lib/site";

const SUITE_APPS = [
  {
    icon: ImageIcon,
    name: "InmoGen",
    tag: "Creativos IA",
    color: "from-[#9EFF00]/20 to-transparent",
    border: "border-[#9EFF00]/30",
    text: "text-[#9EFF00]",
    desc: "Del link de la propiedad a 7 creativos para Meta Ads en 2 minutos.",
    url: "https://inmogen-ia.com",
  },
  {
    icon: Bot,
    name: "InmoBot",
    tag: "WhatsApp IA",
    color: "from-white/10 to-transparent",
    border: "border-white/20",
    text: "text-white",
    desc: "Califica leads 24/7, aplica scoring automático y notifica al asesor.",
    url: "https://inmobot-ia.com",
  },
  {
    icon: Search,
    name: "InmoDesk",
    tag: "Prospección B2B",
    color: "from-[#9EFF00]/10 to-transparent",
    border: "border-[#9EFF00]/20",
    text: "text-[#9EFF00]/80",
    desc: "Configurás el perfil de cliente B2B que buscás y el sistema prospecta automáticamente.",
    url: null,
  },
];

const InmoBotCombo = () => {
  return (
    <section
      id="suite"
      data-testid="combo-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#060807] to-black overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#9EFF00]/8 blur-[160px]" />
      <div className="absolute inset-0 am-grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ suite IA · tres herramientas ]
            </div>
            <h2
              data-testid="combo-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Tres apps independientes.{" "}
              <span className="text-[#9EFF00] am-text-glow">Un solo sistema</span>{" "}
              que trabaja junto.
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              Cada herramienta resuelve un problema distinto —
              juntas automatizan el ciclo completo de tu inmobiliaria:
              creativos, leads y prospección.
            </p>
          </div>
        </div>

        {/* App cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {SUITE_APPS.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-3xl glass p-7 flex flex-col gap-4 bg-gradient-to-b ${app.color} overflow-hidden`}
              >
                <div className={`w-12 h-12 rounded-xl border ${app.border} bg-black/30 flex items-center justify-center ${app.text}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className={`font-display text-2xl tracking-tight ${app.text}`}>{app.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-mono-am mt-0.5">{app.tag}</div>
                </div>
                <p className="text-white/60 text-[13.5px] leading-relaxed flex-1">{app.desc}</p>
                {app.url ? (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-[12px] font-medium ${app.text} hover:opacity-80 transition`}
                  >
                    Ver app <ArrowRight size={12} />
                  </a>
                ) : (
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/30 font-mono-am">
                    Incluido en Plan Scale+
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-[#9EFF00]/25 bg-gradient-to-br from-[#9EFF00]/[0.07] via-black to-black p-8 sm:p-10 flex flex-col lg:flex-row gap-8 items-center justify-between overflow-hidden"
        >
          <div className="absolute -top-32 -right-20 w-72 h-72 rounded-full bg-[#9EFF00]/15 blur-[100px] pointer-events-none" />

          <div className="relative flex-1">
            <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-[#9EFF00] font-mono-am mb-3">
              <Sparkles size={12} /> Empezá hoy
            </div>
            <h3 className="font-display text-2xl sm:text-3xl tracking-tight font-semibold leading-tight mb-3">
              Agendá una demo del suite completo.{" "}
              <span className="text-[#9EFF00]">Sin compromiso.</span>
            </h3>
            <ul className="space-y-2">
              {[
                "Te mostramos InmoGen, InmoBot e InmoDesk en acción",
                "Diagnóstico gratuito de tu situación actual",
                "Propuesta personalizada según el tamaño de tu inmobiliaria",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-white/70">
                  <CheckCircle2 size={14} className="text-[#9EFF00] mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col items-center sm:items-start lg:items-center gap-3 shrink-0">
            <button
              onClick={openCalendly}
              data-testid="combo-cta-trial"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9EFF00] text-black px-8 py-4 text-[14px] font-semibold hover:bg-[#b8ff3a] transition shadow-[0_0_40px_rgba(158,255,0,0.35)]"
            >
              Agendar demo gratuita
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/35 font-mono-am text-center">
              30 min · Sin tarjeta · Sin compromiso
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InmoBotCombo;

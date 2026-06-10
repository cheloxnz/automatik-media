import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ImageIcon,
  Bot,
  Search,
  Link,
  ScanLine,
  Wand2,
  Download,
  MessageCircle,
  Zap,
  Bell,
  RefreshCw,
  MapPin,
  Brain,
  Mail,
  CheckCircle,
} from "lucide-react";

const SYSTEMS = [
  {
    id: "inmogen",
    icon: ImageIcon,
    name: "InmoGen",
    tag: "Creativos IA",
    headline: "Del link al creativo en 2 minutos",
    steps: [
      {
        icon: Link,
        title: "Pegás la URL de la propiedad",
        desc: "Cualquier portal: Zonaprop, Idealista, Argenprop, Fotocasa, Inmuebles24 y más.",
      },
      {
        icon: ScanLine,
        title: "El scraper extrae todo automáticamente",
        desc: "Fotos, precio, m², ambientes, ubicación — sin copy-paste, sin errores.",
      },
      {
        icon: Wand2,
        title: "IA genera los creativos con tu marca",
        desc: "7 tipos de creativo × 6 formatos. Logo, colores y tipografía de tu inmobiliaria aplicados solos.",
      },
      {
        icon: Download,
        title: "Descargás y publicás",
        desc: "Descarga individual o ZIP. También podés compartir un link de la propiedad con tus clientes.",
      },
    ],
  },
  {
    id: "inmobot",
    icon: Bot,
    name: "InmoBot",
    tag: "WhatsApp IA",
    headline: "Lead calificado en menos de 1 minuto",
    steps: [
      {
        icon: MessageCircle,
        title: "El lead escribe por WhatsApp",
        desc: "InmoBot responde al instante, 24/7. Sin esperas, sin leads perdidos por respuesta tardía.",
      },
      {
        icon: Zap,
        title: "El bot califica con IA",
        desc: "Detecta intención, presupuesto, zona y timeline. Flujos de Comprar / Alquilar / Vender / Consulta libre.",
      },
      {
        icon: Bell,
        title: "Scoring automático + alerta al asesor",
        desc: "🔥 Hot · 🌡️ Tibio · ❄️ Frío. Cuando el lead es Hot, el asesor recibe notificación inmediata.",
      },
      {
        icon: RefreshCw,
        title: "Follow-up automático si no responde",
        desc: "A las 24hs, 48hs y 7 días. El pipeline se actualiza solo — sin intervención del equipo.",
      },
    ],
  },
  {
    id: "inmodesk",
    icon: Search,
    name: "InmoDesk",
    tag: "Clientes Corporativos B2B",
    headline: "Para inmobiliarias que quieren clientes corporativos",
    steps: [
      {
        icon: MapPin,
        title: "Definís tu cliente corporativo ideal",
        desc: "Inversores, fondos de inversión, desarrolladoras, empresas que relocalizan empleados — el canal B2B que los ads y el bot no cubren.",
      },
      {
        icon: Brain,
        title: "Escanea Google Maps automáticamente",
        desc: "Cada semana el sistema sale solo a buscar. +1.000 prospectos nuevos con diagnóstico IA incluido — sin intervención manual.",
      },
      {
        icon: Mail,
        title: "Genera el email personalizado por prospecto",
        desc: "Borradores listos en Gmail, adaptados a cada empresa. Vos revisás y aprobás antes de que salgan.",
      },
      {
        icon: CheckCircle,
        title: "Follow-up automático FU1 / FU2 / FU3",
        desc: "Lunes, miércoles y viernes. El CRM se actualiza solo según el estado de cada conversación.",
      },
    ],
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState("inmogen");
  const system = SYSTEMS.find((s) => s.id === active);

  return (
    <section
      id="proceso"
      data-testid="howitworks-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-[#9EFF00]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
            [ 03 — cómo funciona ]
          </div>
          <h2
            data-testid="howitworks-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
          >
            Cada herramienta,{" "}
            <span className="text-[#9EFF00] am-text-glow">un sistema completo.</span>
          </h2>
          <p className="text-white/55 mt-5 text-[15px] leading-relaxed">
            Explorá cómo funciona cada producto por dentro — paso a paso.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 backdrop-blur p-1">
            {SYSTEMS.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  data-testid={`tab-${s.id}`}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12.5px] font-medium tracking-wide transition ${
                    active === s.id
                      ? "bg-[#9EFF00] text-black shadow-[0_0_20px_rgba(158,255,0,0.35)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Icon size={13} />
                  {s.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl glass p-8 sm:p-10"
          >
            {/* System header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#9EFF00]/10 border border-[#9EFF00]/30 flex items-center justify-center text-[#9EFF00]">
                <system.icon size={22} />
              </div>
              <div>
                <div className="font-display text-2xl text-white tracking-tight">{system.name}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#9EFF00]/70 font-mono-am">{system.headline}</div>
              </div>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Vertical line */}
              <div className="hidden lg:block absolute left-[27px] top-10 bottom-0 w-px bg-gradient-to-b from-[#9EFF00]/30 via-[#9EFF00]/15 to-transparent" />

              <div className="flex flex-col gap-8">
                {system.steps.map((step, i) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-6"
                      data-testid={`step-${i + 1}`}
                    >
                      {/* Icon node */}
                      <div className="relative shrink-0 w-14 h-14 rounded-2xl bg-black border border-[#9EFF00]/30 flex flex-col items-center justify-center gap-0.5 z-10">
                        <StepIcon size={16} className="text-[#9EFF00]" />
                        <span className="font-mono-am text-[9px] text-[#9EFF00]/50">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <h3 className="font-display text-lg sm:text-xl text-white tracking-tight leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-white/55 mt-1.5 text-[13.5px] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;

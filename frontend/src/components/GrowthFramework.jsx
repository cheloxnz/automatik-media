import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Zap,
  RefreshCw,
  MapPin,
  Mail,
  MessageCircle,
  BarChart3,
  Bot,
  Bell,
  CalendarCheck,
  Radio,
  TrendingUp,
} from "lucide-react";

const stages = [
  {
    id: "capturar",
    number: "01",
    label: "Capturar",
    title: "Prospección automática de leads",
    desc: "Cada lunes, el sistema sale solo a buscar prospectos. Sin que toques nada, aparecen nuevos leads calificados con diagnóstico IA.",
    color: "#9EFF00",
    icon: Search,
    systems: [
      {
        icon: MapPin,
        title: "Google Maps Scraping",
        sub: "Múltiples ciudades y keywords = +2.000 búsquedas/semana",
      },
      {
        icon: Bot,
        title: "Diagnóstico con IA",
        sub: "OpenAI analiza cada prospecto y genera problema + solución",
      },
      {
        icon: Mail,
        title: "Outreach semi-automático",
        sub: "Borradores personalizados en Gmail. Vos aprobás, el sistema envía",
      },
    ],
    badge: "Funciona solo · Cada lunes 3am",
  },
  {
    id: "convertir",
    number: "02",
    label: "Convertir",
    title: "InmoBot responde antes que la competencia",
    desc: "Cuando un lead escribe por WhatsApp, InmoBot califica en < 1 minuto, 24/7. Hot leads notifican al asesor al instante.",
    color: "#9EFF00",
    icon: Zap,
    systems: [
      {
        icon: MessageCircle,
        title: "Bot conversacional IA",
        sub: "Califica: presupuesto, zona, intención, timeline",
      },
      {
        icon: Bell,
        title: "Alerta Hot Lead",
        sub: "Notificación inmediata al asesor cuando el lead está listo",
      },
      {
        icon: BarChart3,
        title: "Scoring automático",
        sub: "🔥 Hot · 🌡️ Tibio · ❄️ Frío en tiempo real",
      },
    ],
    badge: "Respuesta < 1 min · 24/7",
  },
  {
    id: "retener",
    number: "03",
    label: "Retener",
    title: "Follow-up automático hasta el cierre",
    desc: "Los que no respondieron reciben seguimiento automático los lunes, miércoles y viernes. El pipeline se actualiza solo.",
    color: "#9EFF00",
    icon: RefreshCw,
    systems: [
      {
        icon: CalendarCheck,
        title: "Follow-up multi-etapa",
        sub: "FU1 (3 días) → FU2 (7 días) → FU3 (14 días)",
      },
      {
        icon: Radio,
        title: "Broadcast masivo",
        sub: "Campañas de WhatsApp a toda tu base de leads",
      },
      {
        icon: TrendingUp,
        title: "Pipeline Kanban",
        sub: "Pendiente → Enviado → En negociación → Cliente",
      },
    ],
    badge: "Automático · Lun · Mié · Vie",
  },
];

const GrowthFramework = () => {
  return (
    <section
      id="framework"
      data-testid="framework-section"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-black via-[#060807] to-black"
    >
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#9EFF00]/6 blur-[180px]" />
      <div className="absolute inset-0 am-grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
            [ conversation-led growth ]
          </div>
          <h2
            data-testid="framework-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
          >
            Tres sistemas que trabajan{" "}
            <span className="text-[#9EFF00] am-text-glow">juntos y solos.</span>
          </h2>
          <p className="text-white/55 mt-5 text-[15px] leading-relaxed">
            Mientras tu equipo cierra negocios, el sistema captura leads nuevos,
            convierte los que escriben y hace seguimiento a los que no respondieron.
          </p>
        </div>

        {/* Flow connector */}
        <div className="hidden lg:flex items-center justify-center gap-0 mb-12">
          {stages.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#9EFF00]/60 font-mono-am mb-2">
                  {s.label}
                </div>
                <div className="w-12 h-12 rounded-full bg-[#9EFF00]/10 border border-[#9EFF00]/40 flex items-center justify-center text-[#9EFF00]">
                  <s.icon size={18} />
                </div>
              </div>
              {i < stages.length - 1 && (
                <div className="flex items-center mx-4 mt-5">
                  <div className="h-px w-16 bg-gradient-to-r from-[#9EFF00]/40 to-[#9EFF00]/40" />
                  <span className="text-[#9EFF00]/60 text-xs mx-1">→</span>
                  <div className="h-px w-16 bg-gradient-to-r from-[#9EFF00]/40 to-[#9EFF00]/10" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Stage cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => {
            const StageIcon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative rounded-3xl glass p-7 flex flex-col"
                data-testid={`framework-stage-${stage.id}`}
              >
                {/* Stage number + badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display text-[#9EFF00]/30 text-4xl tracking-tighter">
                    {stage.number}
                  </span>
                  <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#9EFF00] bg-[#9EFF00]/[0.08] border border-[#9EFF00]/20 rounded-full px-2.5 py-1 font-mono-am">
                    {stage.badge}
                  </span>
                </div>

                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#9EFF00]/10 border border-[#9EFF00]/30 flex items-center justify-center text-[#9EFF00]">
                    <StageIcon size={18} />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#9EFF00] font-mono-am">
                    {stage.label}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-white tracking-tight leading-tight mb-3">
                  {stage.title}
                </h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed mb-6">
                  {stage.desc}
                </p>

                {/* Sub-systems */}
                <div className="mt-auto space-y-3">
                  {stage.systems.map((sys) => {
                    const SysIcon = sys.icon;
                    return (
                      <div
                        key={sys.title}
                        className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#9EFF00]/[0.08] border border-[#9EFF00]/20 flex items-center justify-center text-[#9EFF00] shrink-0">
                          <SysIcon size={13} />
                        </div>
                        <div>
                          <div className="text-[12.5px] text-white font-medium leading-tight">
                            {sys.title}
                          </div>
                          <div className="text-[11px] text-white/40 mt-0.5 leading-tight">
                            {sys.sub}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 rounded-3xl border border-[#9EFF00]/20 bg-[#9EFF00]/[0.04] p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
        >
          {[
            { k: "+2.000", v: "búsquedas/semana" },
            { k: "< 1 min", v: "respuesta al lead" },
            { k: "3×", v: "follow-ups automáticos" },
            { k: "24/7", v: "sistema activo" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl sm:text-3xl text-[#9EFF00] am-text-glow">
                {s.k}
              </div>
              <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/40 mt-1">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthFramework;

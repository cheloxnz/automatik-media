import React from "react";
import { motion } from "framer-motion";
import {
  ImageIcon,
  Bot,
  Search,
  Megaphone,
  Video,
  ArrowRight,
  Sparkles,
  Zap,
  Chrome,
  Sofa,
  Sun,
  Clapperboard,
} from "lucide-react";

const PRODUCTS = [
  {
    icon: ImageIcon,
    name: "InmoGen",
    tag: "Creativos IA",
    badge: "inmogen-ia.com",
    color: "#9EFF00",
    desc: "Pegás el link de cualquier propiedad y en 2 minutos tenés 7 tipos de creativos para Meta Ads con tu marca aplicada. Sin diseñador. Sin Canva.",
    features: [
      "Scraping automático de portales (Zonaprop, Idealista, Fotocasa…)",
      "7 tipos de creativos × 6 formatos de salida",
      "Home Staging Virtual — amoblá espacios vacíos con IA en segundos",
      "Auto-mejora de fotos + reemplazo de cielo automático",
      "Video Ken Burns — video cinematográfico de la propiedad con tus fotos",
      "Extensión Chrome — generá desde el portal sin copiar la URL",
    ],
    aiFeatures: [
      { icon: Sofa, label: "Home Staging Virtual" },
      { icon: Sun, label: "Reemplazo de cielo" },
      { icon: Clapperboard, label: "Video Ken Burns" },
      { icon: Chrome, label: "Extensión Chrome" },
    ],
    span: "lg:col-span-4 lg:row-span-2",
    large: true,
  },
  {
    icon: Bot,
    name: "InmoBot",
    tag: "WhatsApp IA",
    badge: "inmobot-ia.com",
    color: "#9EFF00",
    desc: "Bot inteligente que califica leads por WhatsApp 24/7, aplica scoring automático y notifica al asesor cuando el lead está listo para cerrar.",
    features: [
      "Flujos: Comprar / Alquilar / Vender / Consulta libre",
      "Scoring 🔥 Hot · 🌡️ Tibio · ❄️ Frío",
      "Dashboard con pipeline de oportunidades",
      "Follow-up automático 24hs / 48hs / 7 días",
    ],
    span: "lg:col-span-4",
    large: false,
  },
  {
    icon: Search,
    name: "InmoDesk",
    tag: "Prospección B2B",
    badge: "incluido en Scale",
    color: "#9EFF00",
    desc: "Complemento B2B para inmobiliarias que quieren clientes corporativos: inversores, desarrolladoras y empresas. El sistema los encuentra en Google Maps y hace el outreach solo.",
    features: [
      "Perfil configurable: inversores, desarrolladoras, empresas, fondos…",
      "1.000+ prospectos B2B/semana con diagnóstico IA incluido",
      "Secuencias de email: FU1 / FU2 / FU3 automáticas",
      "CRM en Google Sheets con estados y seguimiento",
    ],
    span: "lg:col-span-4",
    large: false,
  },
];

const SERVICES = [
  {
    icon: Megaphone,
    name: "Meta Ads Gestionado",
    tag: "Performance",
    desc: "Campañas en Facebook e Instagram con creativos generados por InmoGen. Segmentación premium, optimización continua y reportes de performance integrados.",
    span: "lg:col-span-6",
  },
  {
    icon: Video,
    name: "Producción de Video",
    tag: "Creative",
    desc: "Videos profesionales para anuncios y contenido orgánico. Producción cinematográfica que genera deseo y aumenta el ticket de tus propiedades.",
    span: "lg:col-span-6",
  },
];

const Services = () => {
  return (
    <section
      id="servicios"
      data-testid="services-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#070908] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ 02 — el suite completo ]
            </div>
            <h2
              data-testid="services-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Tres herramientas IA{" "}
              <span className="text-white/40">diseñadas</span> para{" "}
              <span className="text-[#9EFF00] am-text-glow">inmobiliarias</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              Creativos automáticos, calificación de leads 24/7 y prospección B2B —
              más Meta Ads y video profesional para potenciarlas. Todo integrado.
            </p>
          </div>
        </div>

        {/* AI Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-auto gap-5 mb-5">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`${p.span} group relative rounded-2xl glass overflow-hidden hover:border-[#9EFF00]/30 transition-all duration-500 ${p.large ? "min-h-[420px]" : "min-h-[220px]"}`}
                data-testid={`product-card-${p.name.toLowerCase()}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#9EFF00]/15 blur-3xl" />
                </div>

                <div className="relative h-full p-6 sm:p-8 flex flex-col">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#9EFF00]/10 border border-[#9EFF00]/30 flex items-center justify-center text-[#9EFF00]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="font-display text-2xl text-white tracking-tight">{p.name}</div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-[#9EFF00]/70 font-mono-am">{p.tag}</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/30 font-mono-am hidden sm:block">
                      {p.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-[14px] leading-relaxed mb-6 max-w-lg">
                    {p.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 pb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/70">
                        <Sparkles size={12} className="text-[#9EFF00] mt-1 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* AI Feature badges (InmoGen only) */}
                  {p.aiFeatures && (
                    <div className="mt-5 pt-4 border-t border-white/[0.06]">
                      <div className="text-[9.5px] uppercase tracking-[0.24em] text-[#9EFF00]/60 font-mono-am mb-2.5">
                        Herramientas IA incluidas
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.aiFeatures.map(({ icon: AiIcon, label }) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-1.5 text-[11px] text-white/70 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1"
                          >
                            <AiIcon size={11} className="text-[#9EFF00]" />
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 group-hover:text-[#9EFF00] group-hover:border-[#9EFF00]/50 transition">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider label */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/35 font-mono-am">
            <Zap size={11} className="text-[#9EFF00]" />
            servicios que potencian el suite
          </div>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        {/* Supporting services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`${s.span} group relative rounded-2xl glass overflow-hidden hover:border-[#9EFF00]/30 transition-all duration-500 min-h-[160px]`}
                data-testid={`service-card-${i}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#9EFF00]/10 blur-3xl" />
                </div>
                <div className="relative h-full p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:text-[#9EFF00] group-hover:border-[#9EFF00]/40 transition">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/35 font-mono-am">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-white tracking-tight mb-2">{s.name}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{s.desc}</p>
                  <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/40 group-hover:text-[#9EFF00] group-hover:border-[#9EFF00]/50 transition">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  Palette,
  Workflow,
  LayoutTemplate,
  Bot,
  MessageCircle,
  Database,
  Video,
  LineChart,
} from "lucide-react";

const services = [
  { icon: Megaphone, name: "Meta Ads", tag: "Performance", desc: "Campañas en Instagram y Facebook con segmentación premium y creativos high-converting." },
  { icon: Search, name: "Google Ads", tag: "Intent", desc: "Capturamos demanda activa de búsqueda con anuncios y landing optimizadas." },
  { icon: Palette, name: "Branding Premium", tag: "Identity", desc: "Identidad visual que posiciona tu negocio como líder en tu mercado." },
  { icon: Workflow, name: "Funnel Design", tag: "Conversion", desc: "Arquitectura de embudo basada en data y psicología del cliente high-ticket." },
  { icon: LayoutTemplate, name: "Landing Pages", tag: "CRO", desc: "Páginas cinematográficas optimizadas para conversión y velocidad." },
  { icon: Bot, name: "IA & Automatización", tag: "AI", desc: "Sistemas de IA que califican, agendan y nurturean leads 24/7." },
  { icon: MessageCircle, name: "WhatsApp Bots", tag: "Conversational", desc: "Bots inteligentes que responden al instante y derivan a humano cuando hace falta." },
  { icon: Database, name: "CRM Systems", tag: "Pipeline", desc: "Centralización del lead a la venta con notificaciones y scoring automático." },
  { icon: Video, name: "Video Marketing", tag: "Creative", desc: "Producción cinematográfica para anuncios y orgánico que generan deseo." },
  { icon: LineChart, name: "Analytics & Reporting", tag: "Insight", desc: "Dashboards en vivo con métricas accionables, no vanidosas." },
];

const Services = () => {
  return (
    <section
      id="servicios"
      data-testid="services-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#070908] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ 02 — qué hacemos ]
            </div>
            <h2
              data-testid="services-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Construimos sistemas <span className="text-white/40">completos</span> de{" "}
              <span className="text-[#9EFF00] am-text-glow">adquisición</span> y{" "}
              <span className="italic font-light">automatización</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              Diez disciplinas trabajando como una sola máquina. Desde la
              primera impresión hasta el cierre de venta. Todo medible, todo
              optimizable, todo escalable.
            </p>
          </div>
        </div>

        {/* Bento grid - irregular */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[180px] gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            // Custom spans to create artistic bento layout
            const layout = [
              "lg:col-span-3 lg:row-span-2", // Meta Ads — large
              "lg:col-span-3", // Google Ads
              "lg:col-span-2", // Branding
              "lg:col-span-4", // Funnel
              "lg:col-span-2", // Landing
              "lg:col-span-2 lg:row-span-2", // IA
              "lg:col-span-2", // WhatsApp
              "lg:col-span-2", // CRM
              "lg:col-span-3", // Video
              "lg:col-span-3", // Analytics
            ];
            const isLarge = layout[i].includes("row-span-2");
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 5) * 0.06, duration: 0.6 }}
                className={`${layout[i]} group relative rounded-2xl glass overflow-hidden hover:border-[#9EFF00]/30 transition-all duration-500`}
                data-testid={`service-card-${i}`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#9EFF00]/15 blur-3xl" />
                </div>

                <div className="relative h-full p-6 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:text-[#9EFF00] group-hover:border-[#9EFF00]/40 transition">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/35 font-mono-am">
                      {s.tag}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className={`font-display text-white ${isLarge ? "text-2xl sm:text-3xl" : "text-xl"} tracking-tight`}>
                      {s.name}
                    </h3>
                    <p className={`text-white/55 mt-2 text-[13px] leading-relaxed ${isLarge ? "" : "line-clamp-2"}`}>
                      {s.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/40 group-hover:text-[#9EFF00] group-hover:border-[#9EFF00]/50 transition">
                    →
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

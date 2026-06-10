import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  ShieldCheck,
} from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Segmentación de precisión",
    desc: "Audiencias construidas con datos reales de comportamiento — no suposiciones. Llegamos exactamente a quien busca propiedades.",
  },
  {
    icon: Megaphone,
    title: "Creativos high-level con InmoGen",
    desc: "Copy, diseño y formato pensados para detener el scroll y generar acción. Cada anuncio es una pieza de conversión.",
  },
  {
    icon: TrendingUp,
    title: "Optimización continua",
    desc: "Monitoreo diario de métricas, ajustes semanales y escalamiento estratégico. El rendimiento mejora mes a mes.",
  },
  {
    icon: ShieldCheck,
    title: "ROAS mínimo garantizado X2",
    desc: "Nos comprometemos con resultados medibles. Si no alcanzamos el X2 de retorno, seguimos trabajando sin costo adicional.",
  },
];

const Automation = () => {
  return (
    <section
      id="sistema"
      data-testid="automation-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#060807] to-black overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#9EFF00]/6 blur-[160px]" />
      <div className="absolute inset-0 am-grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ meta ads · especialistas en conversión ]
            </div>
            <h2
              data-testid="automation-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Publicidad que{" "}
              <span className="text-[#9EFF00] am-text-glow">realmente convierte.</span>{" "}
              <span className="italic font-light text-white/60">No que solo se ve.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              Somos especialistas en adquisición de clientes mediante anuncios de alto rendimiento.
              Disciplina, estrategia y datos aplicados a cada campaña —
              para inmobiliarias que quieren escalar con publicidad que mide cada peso invertido.
            </p>
          </div>
        </div>

        {/* Main block */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          {/* Manifesto card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-[#9EFF00]/30 bg-gradient-to-br from-[#9EFF00]/[0.09] via-black to-black p-8 sm:p-10 flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#9EFF00]/20 blur-[80px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.06] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] mb-6 font-mono-am">
                <Zap size={11} /> Nuestro compromiso
              </div>
              <p className="text-white/80 text-[15px] leading-relaxed">
                Creamos campañas, copies y creativos enfocados en aumentar conversiones
                y alcanzar un{" "}
                <span className="text-[#9EFF00] font-semibold">ROAS mínimo de X2</span>.
                Ayudamos a inmobiliarias a escalar con publicidad que realmente convierte.
              </p>
            </div>
            <div className="relative mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
              {[
                { k: "X2", v: "ROAS mínimo" },
                { k: "90", v: "días a resultados" },
                { k: "24/7", v: "optimización" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl text-[#9EFF00] am-text-glow">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mt-1 leading-tight">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillars grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group rounded-2xl glass p-6 hover:border-[#9EFF00]/30 transition-all duration-500"
                  data-testid={`pillar-${i}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9EFF00] group-hover:border-[#9EFF00]/40 transition mb-4">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-display text-[16px] text-white tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <BarChart3 size={18} className="text-[#9EFF00]" />
            <span className="text-[13.5px] text-white/70">
              Cada peso invertido en ads tiene una métrica que lo justifica.
              <span className="text-white"> Sin vanity metrics. Solo resultados.</span>
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#9EFF00]/60 font-mono-am whitespace-nowrap">
            Meta · Google · TikTok Ads
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Automation;

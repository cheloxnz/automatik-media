import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play, Zap, BarChart3, Brain, ArrowDown } from "lucide-react";
import { HERO_YOUTUBE_ID, openCalendly } from "../lib/site";
import VideoModal from "./VideoModal";

const Particles = () => {
  const dots = useMemo(() => {
    return new Array(28).fill(0).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 6,
      size: Math.random() > 0.85 ? 3 : 2,
    }));
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((d) => (
        <span
          key={d.id}
          className="am-particle"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const FloatCard = ({ children, className = "", delay = 0, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 + delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`glass-strong rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] ${className}`}
    {...rest}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 am-grid-bg" />
      <div className="absolute inset-0 am-spotlight" />
      <Particles />
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-[#9EFF00]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#9EFF00]/5 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Text */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/70"
            data-testid="hero-badge"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#9EFF00] opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#9EFF00]" />
            </span>
            Agencia de Inteligencia Artificial
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            data-testid="hero-headline"
            className="font-display mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tighter font-semibold"
          >
            Construimos el sistema de IA que{" "}
            <span className="text-[#9EFF00] am-text-glow">transforma</span>{" "}
            <span className="italic font-light text-white/70">tu negocio.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            data-testid="hero-subheadline"
            className="mt-6 max-w-xl text-[15px] sm:text-base text-white/65 leading-relaxed"
          >
            Auditamos tu operación, identificamos los puntos de mayor impacto e implementamos
            automatizaciones de IA a medida. No vendemos software genérico —{" "}
            <span className="text-white">construimos tu ventaja competitiva.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-9 flex flex-col sm:flex-row gap-3.5"
          >
            <button
              onClick={openCalendly}
              data-testid="hero-cta-agendar"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9EFF00] text-black px-7 py-3.5 text-[14px] font-semibold tracking-wide hover:bg-[#b8ff3a] transition shadow-[0_0_40px_rgba(158,255,0,0.35)]"
            >
              Agendá tu diagnóstico gratuito
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => setModalOpen(true)}
              data-testid="hero-cta-howitworks"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-[14px] font-medium text-white hover:bg-white/[0.06] hover:border-white/30 transition"
            >
              <Play size={14} className="text-[#9EFF00]" /> Ver cómo trabajamos
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            data-testid="hero-mini-stats"
          >
            {[
              { k: "4 fases", v: "metodología probada" },
              { k: "IA a medida", v: "no genérica" },
              { k: "multi-vertical", v: "cualquier industria" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-xl text-[#9EFF00]">{s.k}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Video + floating elements */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[28px] overflow-hidden glass-strong am-ring-border"
            data-testid="hero-video-container"
          >
            <iframe
              src={`https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_YOUTUBE_ID}&controls=0&showinfo=0&rel=0&modestbranding=1`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Automatik Media"
              data-testid="hero-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[28px] pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/70">
              <span className="font-mono-am">automatik / reel</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-pulse" />
                live
              </span>
            </div>
          </motion.div>

          {/* Floating card: AI audit */}
          <FloatCard
            delay={0.1}
            className="absolute -left-4 sm:-left-8 top-10 w-[230px] p-3.5 hidden sm:block"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#9EFF00]/15 flex items-center justify-center text-[#9EFF00]">
                <Brain size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                  Automatización
                </div>
                <div className="text-[13px] text-white truncate">
                  Flujo activado →
                </div>
              </div>
            </div>
            <div className="mt-2.5 text-[11px] text-white/55">
              Lead calificado. Follow-up programado en 2 min.
            </div>
          </FloatCard>

          {/* Floating: ROI */}
          <FloatCard
            delay={0.25}
            className="absolute -right-4 sm:-right-6 top-1/3 w-[210px] p-4 hidden sm:block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                Eficiencia ops.
              </span>
              <BarChart3 size={14} className="text-[#9EFF00]" />
            </div>
            <div className="font-display text-2xl text-white">+312%</div>
            <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "82%" }}
                transition={{ delay: 1, duration: 1.2 }}
                className="h-full bg-[#9EFF00]"
              />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/40">
              últimos 30 días
            </div>
          </FloatCard>

          {/* Floating: Quick Win */}
          <FloatCard
            delay={0.4}
            className="absolute -left-2 sm:-left-6 bottom-6 w-[250px] p-3.5 hidden sm:block"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/50">
              <Zap size={12} className="text-[#9EFF00]" /> Quick Win detectado
            </div>
            <div className="mt-2 text-[12.5px] text-white/85 leading-snug">
              Automatizar seguimiento → ahorro estimado 12 hs/semana.
            </div>
            <div className="mt-3 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-bounce" style={{ animationDelay: "0.15s" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
          </FloatCard>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/35">
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce text-[#9EFF00]" />
      </div>

      <VideoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Hero;

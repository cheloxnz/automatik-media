import React, { useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowDown, ArrowUpRight, MessageSquare, BarChart3, Sparkles } from "lucide-react";
import { NICHES } from "../data/niches";
import { openCalendly, HERO_VIDEO_URL } from "../lib/site";

// Universal sections — imported as-is from the main landing
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import InmoBotCombo from "../components/InmoBotCombo";
import HowItWorks from "../components/HowItWorks";
import Automation from "../components/Automation";
import Results from "../components/Results";
import ValueCalculator from "../components/ValueCalculator";
import Psychology from "../components/Psychology";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PlansComparator from "../components/PlansComparator";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import CursorGlow from "../components/CursorGlow";
import ExitIntentPopup from "../components/ExitIntentPopup";
import TrialIntentModal from "../components/TrialIntentModal";
import CountdownBanner from "../components/CountdownBanner";
import Analytics from "../components/Analytics";

// --- Niche-specific Hero (mirrors Hero.jsx visual language, copy overridden) ---
const NicheHero = ({ niche }) => {
  const { hero } = niche;
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 am-grid-bg" />
      <div className="absolute inset-0 am-spotlight" />
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-[#9EFF00]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#9EFF00]/5 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
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
            {hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            data-testid="hero-headline"
            className="font-display mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] tracking-tighter font-semibold"
          >
            {hero.headline[0]}
            <br />
            <span className="italic font-light text-white/70">
              {hero.headline[1].split(hero.highlightWord)[0]}
            </span>
            <span className="text-[#9EFF00] am-text-glow">
              {hero.highlightWord}
            </span>
            <span className="italic font-light text-white/70">
              {hero.headline[1].split(hero.highlightWord)[1] || ""}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            data-testid="hero-subheadline"
            className="mt-6 max-w-xl text-[15px] sm:text-base text-white/65 leading-relaxed"
          >
            {hero.subheadline}
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
              Agendar diagnóstico
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <a
              href="#precios"
              data-testid="hero-cta-pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-[14px] font-medium text-white hover:bg-white/[0.06] hover:border-white/30 transition"
            >
              <Play size={14} className="text-[#9EFF00]" /> Ver planes
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[28px] overflow-hidden glass-strong am-ring-border"
          >
            <video
              src={HERO_VIDEO_URL}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/70">
              <span className="font-mono-am">automatik / {niche.slug}</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00] animate-pulse" />
                {niche.shortLabel}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/35">
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce text-[#9EFF00]" />
      </div>
    </section>
  );
};

// --- Niche-specific Problem ---
const NicheProblem = ({ niche }) => {
  const { problem } = niche;
  return (
    <section
      id="problema"
      data-testid="problem-section"
      className="relative py-24 sm:py-32"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ 01 — el problema ]
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]">
              {problem.title}{" "}
              <span className="text-[#9EFF00] am-text-glow">{problem.titleAccent}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/55 text-[15px] leading-relaxed">
              {problem.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {problem.items.map((it, i) => {
            const Icon = it.icon;
            const span =
              i === 0 ? "lg:col-span-3" : i === 1 ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`${span} group relative rounded-2xl border border-white/[0.07] bg-[#0a0d0c]/60 p-7 overflow-hidden hover:border-white/20 transition`}
              >
                <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#9EFF00]/0 group-hover:bg-[#9EFF00]/10 blur-3xl transition-all duration-700" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-5 group-hover:border-[#9EFF00]/40 group-hover:text-[#9EFF00] transition">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">{it.title}</h3>
                  <p className="text-[13.5px] text-white/55 leading-relaxed">
                    {it.desc}
                  </p>
                  <div className="mt-5 text-[10px] uppercase tracking-[0.22em] text-white/30 font-mono-am">
                    0{i + 1}
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

// --- Niche-specific Cases (same as SuccessCases but with niche data) ---
const NicheCases = ({ niche }) => {
  return (
    <section
      id="casos"
      data-testid="cases-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#070908] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ casos de éxito · {niche.industry} ]
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]">
              Resultados reales en{" "}
              <span className="text-[#9EFF00] am-text-glow">{niche.name.toLowerCase()}</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              Métricas reales de clientes del rubro, medidas durante los
              primeros 90 días con el sistema completo activo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {niche.cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl glass p-7 sm:p-8 hover:border-[#9EFF00]/30 transition overflow-hidden"
              data-testid={`case-${i}`}
            >
              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#9EFF00]/0 group-hover:bg-[#9EFF00]/8 blur-3xl transition" />
              <div className="relative flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9EFF00]/30 to-white/[0.04] border border-[#9EFF00]/30 flex items-center justify-center">
                  <span className="font-display text-white text-base tracking-tight">
                    {c.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-white text-[17px] leading-tight">
                    {c.name}
                  </div>
                  <div className="text-[12px] text-white/45 mt-0.5">
                    {c.location}
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] font-mono-am">
                  {c.industry}
                </div>
              </div>

              <div className="relative grid grid-cols-3 items-center gap-3 mb-6">
                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Antes</div>
                  <div className="font-display text-2xl text-white/65 tabular-nums mt-1">
                    {c.before.value}
                  </div>
                  <div className="text-[10.5px] text-white/40 mt-0.5">{c.before.label}</div>
                </div>
                <div className="flex justify-center">
                  <ArrowUpRight size={22} className="text-[#9EFF00]" />
                </div>
                <div className="rounded-xl border border-[#9EFF00]/40 bg-[#9EFF00]/[0.04] px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#9EFF00]">Ahora</div>
                  <div className="font-display text-2xl text-[#9EFF00] tabular-nums mt-1 am-text-glow">
                    {c.after.value}
                  </div>
                  <div className="text-[10.5px] text-white/55 mt-0.5">{c.after.label}</div>
                </div>
              </div>

              <div className="relative grid grid-cols-3 gap-2 mb-6">
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="text-center rounded-lg bg-white/[0.02] border border-white/5 px-2 py-2.5"
                  >
                    <div className="font-mono-am text-[#9EFF00] text-[13px] font-semibold tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[9.5px] uppercase tracking-[0.14em] text-white/40 mt-1 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="relative text-white/65 italic text-[13.5px] leading-relaxed border-l-2 border-[#9EFF00]/40 pl-4">
                "{c.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NichePage = () => {
  const { slug } = useParams();
  const niche = useMemo(() => NICHES[slug], [slug]);

  // SEO meta tags — update on mount
  useEffect(() => {
    if (!niche) return;
    document.title = niche.seo.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", niche.seo.description);
    // OG
    const og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute("content", niche.seo.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", niche.seo.description);
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://automatik-media.com/${slug}`);
    window.scrollTo(0, 0);
  }, [niche, slug]);

  if (!niche) return <Navigate to="/" replace />;

  return (
    <main
      data-testid="niche-page"
      data-niche={niche.slug}
      className="relative overflow-x-clip bg-[#050505] text-white antialiased selection:bg-[#9EFF00] selection:text-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <Analytics />
      <CursorGlow />
      <CountdownBanner />
      <Navbar />
      <NicheHero niche={niche} />
      <NicheProblem niche={niche} />
      <Services />
      <InmoBotCombo />
      <HowItWorks />
      <Automation />
      <Results />
      <ValueCalculator />
      <Psychology />
      <NicheCases niche={niche} />
      <Testimonials />
      <Pricing />
      <PlansComparator />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
      <ExitIntentPopup />
      <TrialIntentModal />
    </main>
  );
};

export default NichePage;

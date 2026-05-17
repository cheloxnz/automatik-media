import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Crown, ArrowRight, Zap, Trophy } from "lucide-react";
import axios from "axios";
import { CALENDLY_URL } from "../lib/site";

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND}/api`;

// Plan catalog — Marketing only and Combo (Marketing + InmoBot)
const PLANS = {
  marketing: [
    {
      id: "marketing_basic",
      name: "Basic",
      price: 597,
      tagline: "Empezá a recibir leads premium",
      icon: Sparkles,
      features: [
        "~1.000 mensajes/mes (campaña de mensajes)",
        "Creación de campañas en Meta Ads",
        "Optimización de anuncios",
        "Estrategia básica de escalamiento",
        "Sistema de generación de leads",
      ],
    },
    {
      id: "marketing_gold",
      name: "Gold",
      price: 997,
      tagline: "Más volumen, mejor performance",
      icon: Zap,
      popular: true,
      features: [
        "~2.000 mensajes/mes",
        "Optimización continua",
        "Sistemas de escalamiento",
        "Seguimiento y mejoras de rendimiento",
        "Reportes mensuales detallados",
      ],
    },
    {
      id: "marketing_diamond",
      name: "Diamond",
      price: 1597,
      tagline: "Marketing alto rendimiento",
      icon: Crown,
      features: [
        "~4.000 mensajes/mes",
        "3 videos profesionales/mes",
        "Estrategia de anuncios High-Ticket",
        "Sistema avanzado de escalamiento",
        "Optimización total: campañas + redes",
      ],
    },
  ],
  combo: [
    {
      id: "combo_basic",
      name: "Basic",
      price: 997,
      tagline: "Marketing + IA en WhatsApp",
      icon: Sparkles,
      features: [
        "Todo lo del Marketing Basic",
        "InmoBot 24/7 — para no perder leads",
        "WhatsApp Marketing",
        "Landing Page Basic",
        "Gestión de Reputación (reseñas, recordatorios, alertas)",
      ],
    },
    {
      id: "combo_gold",
      name: "Gold",
      price: 1997,
      tagline: "El combo más elegido",
      icon: Zap,
      popular: true,
      features: [
        "Todo lo del Marketing Gold",
        "InmoBot 24/7 + Plantillas WhatsApp Business",
        "WhatsApp Marketing",
        "Landing Page Profesional",
        "Gestión de Reputación",
      ],
    },
    {
      id: "combo_diamond",
      name: "Diamond",
      price: 3597,
      tagline: "Sistema completo high-converting",
      icon: Crown,
      features: [
        "Todo lo del Marketing Diamond",
        "InmoBot 24/7 + Plantillas WhatsApp Business",
        "WhatsApp Marketing",
        "Landing High-Converting a medida",
        "Gestión de Reputación avanzada",
      ],
    },
    {
      id: "combo_diamond_premium",
      name: "Diamond Premium",
      price: 5997,
      tagline: "El stack completo + tu equipo dedicado",
      icon: Trophy,
      premium: true,
      features: [
        "Todo lo del Diamond Combo",
        "Account Manager dedicado (1-on-1 semanal)",
        "8 videos profesionales/mes",
        "SEO técnico + estrategia de contenido",
        "Lead scoring + nurturing con IA avanzado",
        "Multi-canal: Meta + Google + TikTok Ads",
        "Integración CRM externo (HubSpot/Pipedrive)",
        "Reportes ejecutivos quincenales",
        "Acceso prioritario + canal directo con el equipo",
        "Garantía de leads mínimos o crédito mensual",
      ],
    },
  ],
};

const FREQUENCIES = [
  { id: "monthly", label: "Mensual", sub: "Pago mes a mes", multiplier: 1, months: 1, badge: null },
  {
    id: "quarterly",
    label: "3 meses",
    sub: "Pago único · 1 mes bonificado",
    multiplier: 2,
    months: 3,
    badge: "Ahorrás 33%",
  },
  {
    id: "annual",
    label: "Anual",
    sub: "Pago único · −20% del total",
    multiplier: 12 * 0.8,
    months: 12,
    badge: "Ahorrás 20%",
  },
];

const fmtUSD = (n) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(Math.round(n));

const track = (plan, frequency, mode) => {
  try {
    axios
      .post(
        `${API}/events`,
        {
          name: "pricing_cta_click",
          variant: "pricing",
          metadata: { plan, frequency, mode },
        },
        { timeout: 4000 }
      )
      .catch(() => {});
  } catch {}
};

const Pricing = () => {
  const [mode, setMode] = useState("combo"); // marketing | combo
  const [freqId, setFreqId] = useState("monthly");

  const freq = useMemo(
    () => FREQUENCIES.find((f) => f.id === freqId) || FREQUENCIES[0],
    [freqId]
  );

  const plans = PLANS[mode];

  const openCalendly = (plan) => {
    track(plan.id, freq.id, mode);
    const url = `${CALENDLY_URL}?utm_source=automatikmedia&utm_medium=pricing&utm_content=${plan.id}&utm_campaign=${freq.id}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="precios"
      data-testid="pricing-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-[480px] h-[480px] rounded-full bg-[#9EFF00]/8 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#9EFF00]/6 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
            [ planes · transparencia total ]
          </div>
          <h2
            data-testid="pricing-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
          >
            Elegí cómo querés{" "}
            <span className="text-[#9EFF00] am-text-glow">escalar</span>
          </h2>
          <p className="text-white/55 mt-5 text-[15px] leading-relaxed">
            Marketing puro o combo completo con IA. Todos los planes tienen un{" "}
            <span className="text-white">servicio mínimo de 3 meses</span> —
            necesarios para implementar, optimizar y mostrar resultados reales.
          </p>
        </div>

        {/* Mode toggle */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 backdrop-blur p-1"
            role="tablist"
            data-testid="pricing-mode-toggle"
          >
            {[
              { id: "marketing", label: "Solo Marketing" },
              { id: "combo", label: "Combo + InmoBot" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                data-testid={`mode-${m.id}`}
                className={`relative px-5 py-2.5 rounded-full text-[12.5px] font-medium tracking-wide transition ${
                  mode === m.id
                    ? "bg-[#9EFF00] text-black shadow-[0_0_20px_rgba(158,255,0,0.35)]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {m.label}
                {m.id === "combo" && mode !== m.id && (
                  <span className="ml-2 text-[9px] uppercase tracking-[0.18em] text-[#9EFF00]/80">
                    + IA
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Frequency toggle */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex flex-col sm:flex-row items-stretch gap-1 rounded-2xl border border-white/10 bg-black/30 p-1"
            role="tablist"
            data-testid="pricing-frequency-toggle"
          >
            {FREQUENCIES.map((f) => (
              <button
                key={f.id}
                onClick={() => setFreqId(f.id)}
                data-testid={`freq-${f.id}`}
                className={`relative text-left px-4 py-2.5 rounded-xl transition ${
                  freqId === f.id
                    ? "bg-white/[0.06] border border-white/10"
                    : "border border-transparent hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[12.5px] font-medium ${
                      freqId === f.id ? "text-white" : "text-white/65"
                    }`}
                  >
                    {f.label}
                  </span>
                  {f.badge && (
                    <span className="text-[9px] uppercase tracking-[0.18em] text-[#9EFF00] bg-[#9EFF00]/10 border border-[#9EFF00]/30 rounded-full px-1.5 py-0.5">
                      {f.badge}
                    </span>
                  )}
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.16em] text-white/35 mt-0.5">
                  {f.sub}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div
          className={`grid gap-5 ${
            plans.length === 4
              ? "md:grid-cols-2 xl:grid-cols-4"
              : "md:grid-cols-3"
          }`}
        >
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const monthlyEquiv = plan.price; // monthly base
            const totalPay = monthlyEquiv * freq.multiplier;
            const monthlyShown =
              freq.months === 1 ? monthlyEquiv : totalPay / freq.months;
            const savings =
              freq.months === 1
                ? 0
                : monthlyEquiv * freq.months - totalPay;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.06, duration: 0.55 }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col ${
                  plan.premium
                    ? "bg-gradient-to-br from-[#9EFF00]/[0.10] via-black to-black border border-[#9EFF00]/40 am-glow"
                    : plan.popular
                      ? "glass-strong border-[#9EFF00]/40"
                      : "glass border-white/10"
                }`}
                data-testid={`plan-card-${plan.id}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.22em] text-black bg-[#9EFF00] rounded-full px-3 py-1 font-semibold whitespace-nowrap shadow-[0_0_18px_rgba(158,255,0,0.45)]">
                    Más elegido
                  </div>
                )}
                {plan.premium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.22em] text-black bg-white rounded-full px-3 py-1 font-semibold whitespace-nowrap shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                    ⚡ Top tier
                  </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                      plan.popular || plan.premium
                        ? "bg-[#9EFF00]/10 border-[#9EFF00]/40 text-[#9EFF00]"
                        : "bg-white/[0.04] border-white/10 text-white"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-xl text-white tracking-tight">
                      {plan.name}
                    </div>
                    <div className="text-[12px] text-white/45 leading-tight">
                      {plan.tagline}
                    </div>
                  </div>
                </div>

                {/* Price block */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[14px] text-white/55">US$</span>
                    <span
                      className="font-display text-5xl tracking-tighter text-white tabular-nums"
                      data-testid={`plan-price-${plan.id}`}
                    >
                      {fmtUSD(monthlyShown)}
                    </span>
                    <span className="text-[12px] text-white/45 ml-0.5">
                      /mes
                    </span>
                  </div>
                  {freq.months > 1 && (
                    <div className="mt-1.5 text-[12px] text-white/50">
                      Pago único:{" "}
                      <span className="text-white font-medium">
                        US$ {fmtUSD(totalPay)}
                      </span>
                      {savings > 0 && (
                        <span className="ml-2 text-[11px] uppercase tracking-[0.18em] text-[#9EFF00]">
                          Ahorrás US$ {fmtUSD(savings)}
                        </span>
                      )}
                    </div>
                  )}
                  {freq.months === 1 && (
                    <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-white/35">
                      Contrato mínimo 3 meses
                    </div>
                  )}
                </div>

                <div className="h-px bg-white/[0.06] mb-5" />

                {/* Features */}
                <ul className="flex-1 space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13.5px] text-white/75 leading-snug"
                    >
                      <Check
                        size={14}
                        className="text-[#9EFF00] mt-1 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openCalendly(plan)}
                  data-testid={`plan-cta-${plan.id}`}
                  className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition ${
                    plan.popular || plan.premium
                      ? "bg-[#9EFF00] text-black hover:bg-[#b8ff3a] shadow-[0_0_30px_rgba(158,255,0,0.35)]"
                      : "border border-white/15 text-white hover:bg-white/[0.05] hover:border-white/30"
                  }`}
                >
                  Empezar con {plan.name}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center text-[12px] text-white/45 leading-relaxed max-w-3xl mx-auto">
          Precios en USD. <span className="text-white/65">Servicio mínimo de 3 meses</span> en todos los planes —
          tiempo necesario para implementar, optimizar y validar resultados.{" "}
          <span className="text-white/65">Pago único trimestral</span> bonifica
          el tercer mes.{" "}
          <span className="text-white/65">Pago anual</span> incluye 20% de
          descuento sobre el total. Métodos de pago: tarjeta, transferencia,
          USDT.
        </div>
      </div>
    </section>
  );
};

export default Pricing;

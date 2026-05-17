import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, ArrowRight } from "lucide-react";
import axios from "axios";
import { CALENDLY_URL } from "../lib/site";

const BACKEND = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND}/api`;

// Comparison rows. Value `true` = check, `false` = dash, string = literal value.
const COMPARISON = {
  marketing: {
    plans: [
      { id: "marketing_basic", name: "Basic", price: 597 },
      { id: "marketing_gold", name: "Gold", price: 997, popular: true },
      { id: "marketing_diamond", name: "Diamond", price: 1597 },
    ],
    groups: [
      {
        title: "Campañas y volumen",
        rows: [
          { label: "Mensajes mensuales", values: ["~1.000", "~2.000", "~4.000"] },
          { label: "Creación de campañas Meta Ads", values: [true, true, true] },
          { label: "Optimización de anuncios", values: [true, true, true] },
          { label: "Optimización continua", values: [false, true, true] },
        ],
      },
      {
        title: "Estrategia y crecimiento",
        rows: [
          { label: "Sistema de generación de leads", values: [true, true, true] },
          {
            label: "Sistemas de escalamiento",
            values: ["Básico", "Estándar", "Avanzado"],
          },
          {
            label: "Seguimiento y mejoras de rendimiento",
            values: [false, true, true],
          },
          { label: "Estrategia High-Ticket", values: [false, false, true] },
          { label: "Optimización campañas + redes", values: [false, false, true] },
        ],
      },
      {
        title: "Contenido y reporting",
        rows: [
          { label: "Videos profesionales / mes", values: ["—", "—", "3"] },
          { label: "Reportes", values: ["Básicos", "Detallados", "Completos"] },
        ],
      },
    ],
  },
  combo: {
    plans: [
      { id: "combo_basic", name: "Basic", price: 997 },
      { id: "combo_gold", name: "Gold", price: 1997, popular: true },
      { id: "combo_diamond", name: "Diamond", price: 3597 },
      { id: "combo_diamond_premium", name: "Diamond Premium", price: 5997, premium: true },
    ],
    groups: [
      {
        title: "Marketing",
        rows: [
          {
            label: "Mensajes mensuales",
            values: ["~1.000", "~2.000", "~4.000", "~4.000+"],
          },
          { label: "Campañas Meta Ads", values: [true, true, true, true] },
          {
            label: "Optimización continua",
            values: [false, true, true, true],
          },
          { label: "Estrategia High-Ticket", values: [false, false, true, true] },
          {
            label: "Multi-canal (Meta + Google + TikTok)",
            values: [false, false, false, true],
          },
        ],
      },
      {
        title: "IA + WhatsApp",
        rows: [
          { label: "InmoBot 24/7", values: [true, true, true, true] },
          {
            label: "Plantillas WhatsApp Business",
            values: [false, true, true, true],
          },
          { label: "WhatsApp Marketing", values: [true, true, true, true] },
          {
            label: "Lead scoring + nurturing con IA",
            values: [false, false, false, true],
          },
        ],
      },
      {
        title: "Web + contenido",
        rows: [
          {
            label: "Landing Page",
            values: ["Basic", "Profesional", "High-Converting", "High-Converting +"],
          },
          {
            label: "Videos profesionales / mes",
            values: ["—", "—", "3", "8"],
          },
          {
            label: "SEO técnico + estrategia de contenido",
            values: [false, false, false, true],
          },
        ],
      },
      {
        title: "Operación y soporte",
        rows: [
          {
            label: "Gestión de Reputación",
            values: ["Básica", "Estándar", "Avanzada", "Avanzada +"],
          },
          {
            label: "Integración CRM externo (HubSpot/Pipedrive)",
            values: [false, false, false, true],
          },
          {
            label: "Reportes ejecutivos quincenales",
            values: [false, false, false, true],
          },
          {
            label: "Account Manager dedicado",
            values: [false, false, false, true],
          },
          {
            label: "Canal directo con el equipo",
            values: [false, false, false, true],
          },
          {
            label: "Garantía de leads mínimos",
            values: [false, false, false, true],
          },
        ],
      },
    ],
  },
};

const fmtUSD = (n) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

const track = (plan, mode) => {
  try {
    axios
      .post(
        `${API}/events`,
        {
          name: "comparator_cta_click",
          variant: "comparator",
          metadata: { plan, mode },
        },
        { timeout: 4000 }
      )
      .catch(() => {});
  } catch {}
};

const CellValue = ({ value, highlight }) => {
  if (value === true) {
    return (
      <Check
        size={18}
        className={highlight ? "text-[#9EFF00]" : "text-[#9EFF00]/85"}
      />
    );
  }
  if (value === false) {
    return <Minus size={16} className="text-white/20" />;
  }
  return (
    <span
      className={`text-[13px] tabular-nums ${
        highlight ? "text-white font-medium" : "text-white/70"
      }`}
    >
      {value}
    </span>
  );
};

const PlansComparator = () => {
  const [mode, setMode] = useState("combo");
  const data = COMPARISON[mode];

  const openCalendly = (plan) => {
    track(plan.id, mode);
    const url = `${CALENDLY_URL}?utm_source=automatikmedia&utm_medium=comparator&utm_content=${plan.id}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="comparador"
      data-testid="comparator-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#070908] to-black"
    >
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#9EFF00]/5 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
            [ comparador · todas las diferencias ]
          </div>
          <h2
            data-testid="comparator-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
          >
            ¿Qué incluye cada{" "}
            <span className="text-[#9EFF00] am-text-glow">plan</span>?
          </h2>
          <p className="text-white/55 mt-5 text-[15px] leading-relaxed">
            Mirá feature por feature lo que sumás al pasar al siguiente plan.
          </p>
        </div>

        {/* Mode toggle (reuses same UX as pricing) */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 backdrop-blur p-1"
            role="tablist"
            data-testid="comparator-mode-toggle"
          >
            {[
              { id: "marketing", label: "Solo Marketing" },
              { id: "combo", label: "Combo + InmoBot" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                data-testid={`comparator-mode-${m.id}`}
                className={`px-5 py-2.5 rounded-full text-[12.5px] font-medium tracking-wide transition ${
                  mode === m.id
                    ? "bg-[#9EFF00] text-black shadow-[0_0_20px_rgba(158,255,0,0.35)]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl glass overflow-hidden"
          data-testid="comparator-table-wrapper"
        >
          <div className="overflow-x-auto">
            <table
              className="w-full min-w-[720px]"
              data-testid="comparator-table"
            >
              {/* Plans header */}
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-5 sticky left-0 z-10 bg-[#0a0d0c] min-w-[220px]">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/35 font-mono-am">
                      Features
                    </div>
                  </th>
                  {data.plans.map((p) => (
                    <th
                      key={p.id}
                      data-testid={`comparator-header-${p.id}`}
                      className={`p-5 text-center align-bottom min-w-[170px] ${
                        p.popular || p.premium ? "bg-[#9EFF00]/[0.04]" : ""
                      }`}
                    >
                      {p.popular && (
                        <div className="inline-block text-[9px] uppercase tracking-[0.22em] text-black bg-[#9EFF00] rounded-full px-2 py-0.5 font-semibold mb-2">
                          Más elegido
                        </div>
                      )}
                      {p.premium && (
                        <div className="inline-block text-[9px] uppercase tracking-[0.22em] text-black bg-white rounded-full px-2 py-0.5 font-semibold mb-2">
                          Top tier
                        </div>
                      )}
                      <div className="font-display text-white text-[18px] tracking-tight leading-tight">
                        {p.name}
                      </div>
                      <div className="mt-1.5">
                        <span className="text-[11px] text-white/50">US$</span>{" "}
                        <span className="font-mono-am text-[#9EFF00] text-[15px] font-semibold">
                          {fmtUSD(p.price)}
                        </span>
                        <span className="text-[11px] text-white/40">/mes</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.groups.map((group, gi) => (
                  <React.Fragment key={group.title}>
                    {/* Group separator */}
                    <tr className="bg-black/40">
                      <td
                        colSpan={data.plans.length + 1}
                        className="px-5 py-3 text-[10px] uppercase tracking-[0.26em] text-[#9EFF00] font-mono-am border-y border-white/[0.05]"
                      >
                        {String(gi + 1).padStart(2, "0")} · {group.title}
                      </td>
                    </tr>
                    {group.rows.map((row, ri) => (
                      <tr
                        key={row.label}
                        className={`border-b border-white/[0.04] hover:bg-white/[0.015] transition ${
                          ri % 2 === 1 ? "bg-white/[0.012]" : ""
                        }`}
                        data-testid={`comparator-row-${gi}-${ri}`}
                      >
                        <td className="px-5 py-3.5 text-[13.5px] text-white/80 sticky left-0 bg-[#0a0d0c] z-[1]">
                          {row.label}
                        </td>
                        {row.values.map((v, ci) => {
                          const plan = data.plans[ci];
                          const highlight = plan?.popular || plan?.premium;
                          return (
                            <td
                              key={ci}
                              className={`px-5 py-3.5 text-center ${
                                highlight ? "bg-[#9EFF00]/[0.03]" : ""
                              }`}
                            >
                              <div className="inline-flex items-center justify-center">
                                <CellValue value={v} highlight={highlight} />
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}

                {/* CTA row */}
                <tr className="bg-black/40">
                  <td className="px-5 py-5 sticky left-0 bg-[#0a0d0c]">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-mono-am">
                      Empezá
                    </div>
                  </td>
                  {data.plans.map((p) => (
                    <td
                      key={p.id}
                      className={`px-5 py-5 text-center ${
                        p.popular || p.premium ? "bg-[#9EFF00]/[0.04]" : ""
                      }`}
                    >
                      <button
                        onClick={() => openCalendly(p)}
                        data-testid={`comparator-cta-${p.id}`}
                        className={`group inline-flex items-center justify-center gap-1.5 rounded-full text-[12px] font-semibold transition px-4 py-2 ${
                          p.popular || p.premium
                            ? "bg-[#9EFF00] text-black hover:bg-[#b8ff3a] shadow-[0_0_22px_rgba(158,255,0,0.35)]"
                            : "border border-white/15 text-white hover:bg-white/[0.05] hover:border-white/30"
                        }`}
                      >
                        Elegir {p.name}
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-6 text-center text-[11px] uppercase tracking-[0.22em] text-white/30 font-mono-am">
          Deslizá horizontalmente en mobile para ver todos los planes
        </div>
      </div>
    </section>
  );
};

export default PlansComparator;

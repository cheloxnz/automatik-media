import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { requestInmoBotTrial } from "../lib/site";

const fmt = (n) => {
  if (!Number.isFinite(n)) return "0";
  return new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 0,
  }).format(Math.round(n));
};

const ValueCalculator = () => {
  const [ticket, setTicket] = useState(800);
  const [closes, setCloses] = useState(8);
  const [leads, setLeads] = useState(40);

  // Assumptions (transparent multipliers shown in the UI)
  // Average uplift from response-time-under-1-minute + qualified follow-up = +30% close rate.
  const result = useMemo(() => {
    const t = Math.max(0, Number(ticket) || 0);
    const c = Math.max(0, Number(closes) || 0);
    const l = Math.max(0, Number(leads) || 0);

    const currentRevenue = t * c;
    // 30% uplift on conversion (more reachable leads + faster response)
    const projectedCloses = Math.min(l, c * 1.3);
    const projectedRevenue = t * projectedCloses;
    const monthlyLift = Math.max(0, projectedRevenue - currentRevenue);
    const annualLift = monthlyLift * 12;
    const currentCR = l > 0 ? (c / l) * 100 : 0;
    const projectedCR = l > 0 ? (projectedCloses / l) * 100 : 0;

    return {
      currentRevenue,
      projectedRevenue,
      monthlyLift,
      annualLift,
      currentCR,
      projectedCR,
      projectedCloses,
    };
  }, [ticket, closes, leads]);

  return (
    <section
      id="calculadora"
      data-testid="calculator-section"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[480px] h-[480px] rounded-full bg-[#9EFF00]/8 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ calculadora · valor proyectado ]
            </div>
            <h2
              data-testid="calculator-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              ¿Cuánto te dejarías de ganar{" "}
              <span className="text-[#9EFF00] am-text-glow">sin nuestro sistema</span>?
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              Pasamos del lead frío al cierre. Estimación basada en una mejora
              promedio del{" "}
              <span className="text-white">30% de conversión</span> al responder
              en menos de 1 minuto y calificar con IA.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Inputs */}
          <div
            className="lg:col-span-5 rounded-3xl glass p-7 sm:p-8"
            data-testid="calculator-inputs"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/45 font-mono-am mb-6">
              <Calculator size={13} className="text-[#9EFF00]" /> Tus números
              actuales
            </div>

            {[
              {
                label: "Ticket promedio",
                hint: "Lo que pagás vos cliente (USD)",
                value: ticket,
                set: setTicket,
                prefix: "US$",
                min: 0,
                max: 50000,
                step: 50,
                testid: "calc-ticket",
              },
              {
                label: "Cierres por mes",
                hint: "Ventas concretadas hoy",
                value: closes,
                set: setCloses,
                prefix: "",
                min: 0,
                max: 200,
                step: 1,
                testid: "calc-closes",
              },
              {
                label: "Leads por mes",
                hint: "Consultas que recibís",
                value: leads,
                set: setLeads,
                prefix: "",
                min: 0,
                max: 1000,
                step: 5,
                testid: "calc-leads",
              },
            ].map((f) => (
              <div key={f.label} className="mb-6 last:mb-0">
                <div className="flex items-baseline justify-between mb-2">
                  <label className="text-[13px] text-white">{f.label}</label>
                  <div className="font-mono-am text-[15px] text-[#9EFF00]">
                    {f.prefix}
                    {fmt(f.value)}
                  </div>
                </div>
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={f.value}
                  onChange={(e) => f.set(Number(e.target.value))}
                  data-testid={f.testid}
                  className="am-range w-full"
                />
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/30 mt-1.5">
                  {f.hint}
                </div>
              </div>
            ))}
          </div>

          {/* Output */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rounded-3xl glass-strong p-7 sm:p-9 overflow-hidden"
            data-testid="calculator-output"
          >
            <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#9EFF00]/15 blur-[100px] pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#9EFF00] mb-2 font-mono-am">
                <TrendingUp size={13} /> Proyección con InmoBot + Automatik
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                    Facturación mensual hoy
                  </div>
                  <div className="font-display text-3xl text-white/85 mt-2 tabular-nums">
                    US$ {fmt(result.currentRevenue)}
                  </div>
                  <div className="text-[12px] text-white/40 mt-2">
                    Tasa conversión:{" "}
                    <span className="text-white/65">
                      {fmt(result.currentCR)}%
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#9EFF00]/40 bg-[#9EFF00]/[0.04] p-5 am-glow">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#9EFF00]">
                    Facturación proyectada
                  </div>
                  <div
                    className="font-display text-3xl text-[#9EFF00] mt-2 tabular-nums am-text-glow"
                    data-testid="calculator-projected-revenue"
                  >
                    US$ {fmt(result.projectedRevenue)}
                  </div>
                  <div className="text-[12px] text-white/55 mt-2">
                    Tasa conversión:{" "}
                    <span className="text-white">
                      {fmt(result.projectedCR)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#9EFF00]/[0.08] to-transparent border border-[#9EFF00]/25 p-6">
                <div className="grid sm:grid-cols-3 gap-4 items-center">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                      Plus mensual
                    </div>
                    <div
                      className="font-display text-3xl text-white mt-1 tabular-nums"
                      data-testid="calculator-monthly-lift"
                    >
                      + US$ {fmt(result.monthlyLift)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                      Plus anual
                    </div>
                    <div
                      className="font-display text-3xl text-[#9EFF00] mt-1 am-text-glow tabular-nums"
                      data-testid="calculator-annual-lift"
                    >
                      + US$ {fmt(result.annualLift)}
                    </div>
                  </div>
                  <button
                    onClick={() => requestInmoBotTrial("calculator")}
                    data-testid="calculator-cta"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9EFF00] text-black px-5 py-3 text-[13px] font-semibold hover:bg-[#b8ff3a] transition shadow-[0_0_30px_rgba(158,255,0,0.35)]"
                  >
                    Activar mi sistema
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>

              <div className="mt-4 text-[11px] text-white/35 leading-relaxed">
                * Estimación conservadora basada en mejora del 30% en
                conversión por respuesta &lt; 1 min + calificación IA. Resultados
                reales varían según rubro, ticket y volumen de leads.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueCalculator;

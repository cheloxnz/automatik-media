import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Leads Premium Mensuales" },
  { value: 3, suffix: "X", label: "ROI Proyectado" },
  { value: 24, suffix: "/7", label: "Sistema Activo" },
  { value: 90, suffix: " días", label: "A Resultados" },
];

const Counter = ({ to, suffix }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(start + (to - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-[#9EFF00] am-text-glow">
      {val}
      {suffix}
    </span>
  );
};

// Animated line chart (SVG)
const Chart = () => {
  const points = [
    [0, 90],
    [12, 82],
    [24, 78],
    [36, 70],
    [48, 65],
    [60, 50],
    [72, 42],
    [84, 26],
    [96, 18],
    [100, 12],
  ];
  const d = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
  const area = `${d} L 100 100 L 0 100 Z`;

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id="amGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9EFF00" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#9EFF00" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="amLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9EFF00" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
      ))}
      <motion.path
        d={area}
        fill="url(#amGrad)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="url(#amLine)"
        strokeWidth="0.8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      {/* End point */}
      <motion.circle
        cx="100"
        cy="12"
        r="1.6"
        fill="#9EFF00"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8 }}
      />
    </svg>
  );
};

const Results = () => {
  return (
    <section
      id="resultados"
      data-testid="results-section"
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ 05 — resultados ]
            </div>
            <h2
              data-testid="results-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Resultados <span className="text-white/40">Reales.</span>{" "}
              <span className="text-[#9EFF00] am-text-glow">Escalamiento Real.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              No vendemos promesas — vendemos infraestructura. Métricas que
              importan en un sistema construido para crecer mes a mes.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-2xl glass p-6 hover:border-[#9EFF00]/30 transition"
                data-testid={`stat-${i}`}
              >
                <div className="font-display text-4xl sm:text-5xl tracking-tighter">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[12px] uppercase tracking-[0.18em] text-white/50 mt-3">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative rounded-2xl glass p-6 min-h-[340px]"
            data-testid="results-chart"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-mono-am">
                  Pipeline · Q1 → Q4
                </div>
                <div className="font-display text-2xl text-white mt-1">
                  Crecimiento sostenido
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#9EFF00]">
                <span className="w-2 h-2 rounded-full bg-[#9EFF00] animate-pulse" />
                LIVE
              </div>
            </div>
            <div className="h-[230px] -mx-2">
              <Chart />
            </div>
            <div className="flex items-center justify-between mt-2 text-[10px] uppercase tracking-[0.22em] text-white/35 font-mono-am">
              <span>ENE</span>
              <span>MAR</span>
              <span>JUN</span>
              <span>SEP</span>
              <span>DIC</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;

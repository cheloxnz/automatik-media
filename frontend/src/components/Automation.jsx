import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Database,
  Calendar,
  LayoutDashboard,
  Cpu,
  Activity,
} from "lucide-react";

const nodes = [
  { icon: MessageCircle, label: "WhatsApp Bot", angle: -90 },
  { icon: Database, label: "CRM", angle: -30 },
  { icon: Calendar, label: "Google Calendar", angle: 30 },
  { icon: LayoutDashboard, label: "Dashboard", angle: 90 },
  { icon: Activity, label: "Lead Tracking", angle: 150 },
  { icon: Cpu, label: "AI Automation", angle: 210 },
];

const Automation = () => {
  // Build orbit positions
  const radius = 200;
  return (
    <section
      id="sistema"
      data-testid="automation-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#060807] to-black overflow-hidden"
    >
      <div className="absolute inset-0 am-grid-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
            [ 04 — sistema de automatización ]
          </div>
          <h2
            data-testid="automation-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
          >
            Tu negocio trabajando{" "}
            <span className="text-[#9EFF00] am-text-glow">24/7</span>
          </h2>
          <p className="text-white/55 mt-5 text-[15px] leading-relaxed">
            Un ecosistema de herramientas conectadas que captura, califica,
            agenda y nutre clientes mientras dormís.
          </p>
        </div>

        {/* Ecosystem visual */}
        <div className="relative mx-auto w-full max-w-[640px] aspect-square">
          {/* Concentric rings */}
          {[1, 2, 3].map((r) => (
            <div
              key={r}
              className="absolute inset-0 rounded-full border border-white/[0.05]"
              style={{
                margin: `${r * 12}%`,
              }}
            />
          ))}

          {/* SVG connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="-260 -260 520 520">
            {nodes.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <motion.line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={x}
                  y2={y}
                  stroke="rgba(158,255,0,0.35)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Center hub */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-black border border-[#9EFF00]/50 flex flex-col items-center justify-center am-glow"
            data-testid="automation-core"
          >
            <span className="am-pulse-ring" />
            <Cpu size={22} className="text-[#9EFF00] mb-1.5" />
            <span className="font-display text-xs text-white">AI Engine</span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/40 mt-0.5">
              Automatik
            </span>
          </motion.div>

          {/* Orbiting nodes */}
          {nodes.map((n, i) => {
            const Icon = n.icon;
            const rad = (n.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                }}
                data-testid={`automation-node-${i}`}
              >
                <div className="glass-strong w-[120px] h-[120px] rounded-2xl flex flex-col items-center justify-center text-center p-3 hover:border-[#9EFF00]/40 transition group">
                  <div className="w-9 h-9 rounded-lg bg-[#9EFF00]/10 border border-[#9EFF00]/30 flex items-center justify-center text-[#9EFF00] mb-2 group-hover:scale-110 transition">
                    <Icon size={16} />
                  </div>
                  <span className="text-[11px] text-white leading-tight font-medium">
                    {n.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Automation;

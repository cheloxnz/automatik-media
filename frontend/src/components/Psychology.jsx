import React from "react";
import { motion } from "framer-motion";
import { Diamond, ShieldCheck, Crown, Award, Sparkles } from "lucide-react";

const items = [
  {
    icon: Diamond,
    title: "Exclusividad",
    desc: "Quieren sentirse parte de algo reservado para pocos. La escasez vende más que el descuento.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza",
    desc: "Buscan certezas antes que precios. Tu sistema debe transmitir solidez en cada punto de contacto.",
  },
  {
    icon: Crown,
    title: "Autoridad",
    desc: "Eligen a quien parece líder del mercado, no a quien grita más fuerte.",
  },
  {
    icon: Award,
    title: "Resultados",
    desc: "Validación social, casos y métricas. La promesa abstracta no convierte high-ticket.",
  },
  {
    icon: Sparkles,
    title: "Atención Premium",
    desc: "Quieren ser tratados como únicos desde el primer mensaje. La experiencia es el producto.",
  },
];

const Psychology = () => {
  return (
    <section
      data-testid="psychology-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-[#070908] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ 06 — psicología premium ]
            </div>
            <h2
              data-testid="psychology-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Lo que tu cliente premium{" "}
              <span className="text-[#9EFF00] am-text-glow">realmente busca</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-white/55 text-[15px] leading-relaxed">
              El cliente high-ticket no compra producto. Compra una experiencia,
              un estatus y una garantía emocional. Diseñamos cada pieza para
              activar esos cinco gatillos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative col-span-2 lg:col-span-1 rounded-2xl border border-white/10 bg-[#0a0d0c]/60 p-6 hover:border-[#9EFF00]/30 hover:bg-[#0a0d0c]/90 transition-all"
                data-testid={`psychology-card-${i}`}
              >
                <div className="absolute top-4 right-4 text-[10px] font-mono-am text-white/30">
                  0{i + 1}
                </div>
                <div className="w-12 h-12 rounded-full border border-[#9EFF00]/30 bg-[#9EFF00]/[0.04] flex items-center justify-center text-[#9EFF00] mb-6 group-hover:scale-110 transition">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-xl text-white mb-2 tracking-tight">
                  {it.title}
                </h3>
                <p className="text-[13px] text-white/55 leading-relaxed">
                  {it.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Psychology;

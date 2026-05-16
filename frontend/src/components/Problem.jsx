import React from "react";
import { motion } from "framer-motion";
import {
  UserX,
  Clock,
  Repeat,
  Cpu,
  Target,
} from "lucide-react";

const items = [
  {
    icon: UserX,
    title: "Leads perdidos",
    desc: "Cada consulta sin respuesta es un cliente premium que se va con tu competencia.",
  },
  {
    icon: Clock,
    title: "Respuestas lentas",
    desc: "El 78% de los leads compra a quien responde primero. Tu equipo no llega a tiempo.",
  },
  {
    icon: Repeat,
    title: "Sin seguimiento",
    desc: "Los prospectos calientes se enfrían sin un proceso automatizado de nurturing.",
  },
  {
    icon: Cpu,
    title: "Sin automatización",
    desc: "Procesos manuales que escalan tus costos pero no tu facturación.",
  },
  {
    icon: Target,
    title: "Campañas sin estrategia",
    desc: "Anuncios que llegan a la audiencia equivocada y queman tu presupuesto.",
  },
];

const Problem = () => {
  return (
    <section
      id="problema"
      data-testid="problem-section"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ 01 — el problema ]
            </div>
            <h2
              data-testid="problem-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              La mayoría de los negocios premium{" "}
              <span className="text-white/40">pierde clientes</span>{" "}
              <span className="text-[#9EFF00] am-text-glow">todos los días.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/55 text-[15px] leading-relaxed">
              No es por falta de servicio. Es por falta de un sistema que
              capture, califique y convierta. Mientras vos atendés clientes,{" "}
              <span className="text-white">otros leads se enfrían</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            const span =
              i === 0 ? "lg:col-span-3" : i === 1 ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`${span} group relative rounded-2xl border border-white/[0.07] bg-[#0a0d0c]/60 p-7 overflow-hidden hover:border-white/20 transition-all`}
                data-testid={`problem-card-${i}`}
              >
                <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#9EFF00]/0 group-hover:bg-[#9EFF00]/10 blur-3xl transition-all duration-700" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-5 group-hover:border-[#9EFF00]/40 group-hover:text-[#9EFF00] transition">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">
                    {it.title}
                  </h3>
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

export default Problem;

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Database, BarChart3 } from "lucide-react";
import { openCalendly } from "../lib/site";

const niveles = [
  {
    num: "N1",
    icon: MessageSquare,
    name: "Bot Vendedor",
    price: "$1.000",
    tag: "El más popular",
    tagColor: "border-[#9EFF00]/40 bg-[#9EFF00]/[0.06] text-[#9EFF00]",
    pitch: '"Ninguna consulta sin respuesta, ni un viernes a las 3am."',
    features: [
      "Responde, asesora y vende solo · 24/7",
      "Habla como humano — cero menú de opciones",
      "Manda precios, fotos, links y archivos",
      "Conectado a tu stock y catálogo en tiempo real",
      "Hace seguimiento al que preguntó y no compró",
      "Deriva a humano cuando hace falta",
    ],
    ideal: "Perdés consultas por no responder a tiempo — muchos mensajes, respuestas tarde, sin atención de noche o fines de semana.",
    highlight: false,
  },
  {
    num: "N2",
    icon: Database,
    name: "Bot + CRM",
    price: "$1.500",
    tag: "Recomendado",
    tagColor: "border-white/20 bg-white/[0.05] text-white/70",
    pitch: '"Todos tus clientes ordenados sin cargar nada a mano."',
    features: [
      "Todo lo del Nivel 1",
      "CRM: cada cliente queda registrado automáticamente",
      "Ningún lead se pierde — todo queda trackeado",
      "Difusiones masivas a toda la base con un click",
      "Segmentación por comportamiento e interés",
    ],
    ideal: "Además del bot, tenés los contactos desparramados en el teléfono, cuadernos o Excel — no podés hacer campañas ni seguimiento.",
    highlight: true,
  },
  {
    num: "N3",
    icon: BarChart3,
    name: "Bot + CRM + Dashboard",
    price: "$2.000",
    tag: "Premium",
    tagColor: "border-white/15 bg-white/[0.03] text-white/50",
    pitch: '"Ves todo tu negocio en vivo desde el teléfono."',
    features: [
      "Todo lo del Nivel 2",
      "Dashboard en tiempo real: métricas y conversiones",
      "Qué se vende, qué se pregunta, qué se pierde",
      "Reportes automáticos sin pedirle nada a nadie",
      "El dueño controla todo sin estar en el local",
    ],
    ideal: "Querés números y control — pedís métricas, querés saber qué pasa cuando no estás, te gusta ver todo de un vistazo.",
    highlight: false,
  },
];

const WhatWeDo = () => {
  return (
    <section id="niveles" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#9EFF00]/5 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            Los 3 niveles
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            El mismo sistema.{" "}
            <span className="text-[#9EFF00] am-text-glow">Tres tamaños.</span>
          </h2>
          <p className="mt-5 text-white/60 text-[15px] leading-relaxed">
            Cada nivel incluye al anterior. El cliente entra por lo que necesita hoy y escala después —
            venderle de nuevo a un cliente contento es mucho más fácil que conseguir uno nuevo.
          </p>
        </motion.div>

        {/* Aviso */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-[#9EFF00]/20 bg-[#9EFF00]/[0.04] px-4 py-2 text-[12px] text-[#9EFF00]/80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#9EFF00]" />
          Precio de setup único · Mantenimiento desde $200/mes a partir del 2do mes
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {niveles.map((n, i) => (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                n.highlight
                  ? "border border-[#9EFF00]/30 bg-[#9EFF00]/[0.04] shadow-[0_0_60px_-10px_rgba(158,255,0,0.15)]"
                  : "border border-white/8 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#9EFF00]/10 flex items-center justify-center text-[#9EFF00]">
                  <n.icon size={20} />
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-[0.14em] border rounded-full px-3 py-1 ${n.tagColor}`}>
                  {n.tag}
                </span>
              </div>

              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1">{n.num}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{n.name}</h3>

              <div className="font-display text-4xl font-semibold text-white mb-1">
                {n.price}
                <span className="text-[15px] font-normal text-white/40 ml-1">USD</span>
              </div>
              <div className="text-[12px] text-white/40 mb-6">setup único · pago 50/50</div>

              <p className="text-[13px] text-white/50 italic mb-6 leading-relaxed border-l-2 border-[#9EFF00]/30 pl-4">
                {n.pitch}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {n.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/70">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#9EFF00] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-white/[0.03] border border-white/8 p-4 mb-6">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/35 mb-1.5">Ideal si…</div>
                <p className="text-[12.5px] text-white/60 leading-relaxed">{n.ideal}</p>
              </div>

              <button
                onClick={openCalendly}
                className={`w-full rounded-full py-3 text-[13px] font-semibold transition ${
                  n.highlight
                    ? "bg-[#9EFF00] text-black hover:bg-[#b8ff3a] shadow-[0_0_30px_rgba(158,255,0,0.3)]"
                    : "border border-white/15 text-white hover:border-[#9EFF00]/50 hover:text-[#9EFF00]"
                }`}
              >
                Me interesa este nivel →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Nota debajo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-[13px] text-white/35"
        >
          ¿No sabés por cuál empezar? Arrancá por el Nivel 1 y escalá cuando veas los resultados.
          El upsell se vende solo.
        </motion.p>
      </div>
    </section>
  );
};

export default WhatWeDo;

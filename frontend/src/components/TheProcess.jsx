import React from "react";
import { motion } from "framer-motion";
import { openCalendly } from "../lib/site";

const steps = [
  {
    num: "01",
    title: "50% para arrancar",
    body: "El cliente paga la mitad del setup y recién ahí empezamos a trabajar. Siempre por adelantado — garantiza compromiso de ambos lados.",
    detail: "Transferencia, tarjeta o USDT",
  },
  {
    num: "02",
    title: "Entregamos en ~15 días",
    body: "Con el 50% adentro, construimos y entregamos el sistema funcionando en dos semanas. El cliente lo prueba en su propio WhatsApp.",
    detail: "Bot activo + capacitación incluida",
  },
  {
    num: "03",
    title: "El cliente prueba y paga el otro 50%",
    body: "Testea el bot, da el OK, y ahí cobra el resto del setup. Nadie paga a ciegas — eso saca fricción en la venta.",
    detail: "Solo paga si está conforme",
  },
  {
    num: "04",
    title: "Primer mes de mantenimiento gratis",
    body: "Ya pagó el setup: el primer mes va de regalo. Se acostumbra al sistema, ve los primeros resultados y entiende el valor.",
    detail: "Ajustes y soporte incluido",
  },
  {
    num: "05",
    title: "Desde el 2do mes: mensualidad de mantenimiento",
    body: "Cubre mantenimiento, ajustes del prompt, cambios de ofertas y correcciones. El negocio de verdad es el recurrente — clientes que pagan mes a mes sin que tengas que conseguir uno nuevo.",
    detail: "El setup es el arranque. La mensualidad es el negocio.",
    highlight: true,
  },
];

const TheProcess = () => {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-[#9EFF00]/4 blur-[160px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            Cómo funciona
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tighter font-semibold">
            Así se cobra.{" "}
            <span className="text-[#9EFF00] am-text-glow">Así se entrega.</span>
          </h2>
          <p className="mt-5 text-white/60 text-[15px] leading-relaxed">
            Un modelo de pago claro, sin sorpresas, diseñado para que el cliente
            confíe antes de poner el primer peso.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#9EFF00]/30 via-[#9EFF00]/10 to-transparent hidden sm:block" />

          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`relative sm:ml-14 rounded-2xl border p-6 sm:p-7 transition-all ${
                  s.highlight
                    ? "border-[#9EFF00]/30 bg-[#9EFF00]/[0.04]"
                    : "border-white/8 bg-white/[0.02]"
                }`}
              >
                {/* Dot en la línea */}
                <div className={`absolute -left-[3.35rem] top-7 w-3 h-3 rounded-full border-2 hidden sm:block ${
                  s.highlight ? "bg-[#9EFF00] border-[#9EFF00]" : "bg-[#050505] border-[#9EFF00]/40"
                }`} />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className={`font-display text-[12px] tracking-widest mb-1 ${s.highlight ? "text-[#9EFF00]" : "text-white/30"}`}>
                      {s.num}
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-white/60 text-[14px] leading-relaxed">{s.body}</p>
                  </div>
                  <div className={`text-right text-[11px] rounded-lg px-3 py-2 flex-shrink-0 hidden sm:block ${
                    s.highlight
                      ? "bg-[#9EFF00]/10 text-[#9EFF00] border border-[#9EFF00]/20"
                      : "bg-white/[0.03] text-white/40 border border-white/8"
                  }`}>
                    {s.detail}
                  </div>
                </div>

                {s.highlight && (
                  <div className="mt-4 pt-4 border-t border-[#9EFF00]/15 text-[13px] text-white/50">
                    💡 El setup te paga el arranque. La mensualidad convierte esto en un negocio — no en changas.
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 rounded-full bg-[#9EFF00] text-black px-8 py-4 text-[14px] font-semibold hover:bg-[#b8ff3a] transition shadow-[0_0_40px_rgba(158,255,0,0.3)]"
          >
            Empecemos →
          </button>
          <p className="mt-4 text-[12px] text-white/35">30 min · sin costo · sin compromiso</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheProcess;

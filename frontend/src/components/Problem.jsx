import React from "react";
import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section id="problema" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
              El problema
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[52px] leading-[1.05] tracking-tighter font-semibold mb-6">
              Los mensajes que no respondés{" "}
              <span className="text-white/40 italic font-light">son ventas que perdés.</span>
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-8">
              Un cliente que escribe a las 11pm y no recibe respuesta hasta el mediodía del día siguiente
              ya compró en otro lado. No perdiste una consulta — perdiste una venta.
            </p>

            <div className="space-y-4">
              {[
                { stat: "78%", text: "de los clientes compra al que responde primero" },
                { stat: "60%", text: "de las consultas llegan fuera del horario laboral" },
                { stat: "1 de 3", text: "negocios pierde leads por no tener seguimiento" },
              ].map((item) => (
                <div key={item.stat} className="flex items-center gap-4">
                  <div className="font-display text-2xl text-[#9EFF00] w-20 flex-shrink-0">{item.stat}</div>
                  <div className="text-[14px] text-white/65">{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: before/after */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            {/* Sin bot */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-red-400 mb-5">Sin bot</div>
              {[
                "Cliente escribe a las 11pm — no hay respuesta",
                "El lunes a las 10am alguien le responde: ya compró en otro lado",
                "Dueño pegado al teléfono los fines de semana",
                "No hay seguimiento: quien no compró, se olvida",
                "Sin datos: no sabés qué se pregunta ni qué se pierde",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-2.5 border-b border-white/5 last:border-0">
                  <span className="w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center text-red-400 text-[10px] flex-shrink-0 mt-0.5">✕</span>
                  <span className="text-white/55 text-[13px]">{item}</span>
                </div>
              ))}
            </div>

            {/* Con bot */}
            <div className="rounded-2xl border border-[#9EFF00]/20 bg-[#9EFF00]/[0.03] p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#9EFF00] mb-5">Con el bot de Automatik</div>
              {[
                "Responde en segundos, a cualquier hora, sin excepción",
                "Asesora, manda precios, fotos y links como un vendedor real",
                "Hace seguimiento automático al que preguntó y no compró",
                "Deriva a humano solo cuando realmente hace falta",
                "Dashboard con todo lo que se pregunta, vende y pierde",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-2.5 border-b border-white/5 last:border-0">
                  <span className="w-5 h-5 rounded-full bg-[#9EFF00]/20 flex items-center justify-center text-[#9EFF00] text-[10px] flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-white/80 text-[13px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

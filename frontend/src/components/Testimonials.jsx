import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    initials: "MR",
    name: "Martín R.",
    role: "Agente Inmobiliario · Palermo, Buenos Aires",
    quote:
      "Antes tardaba 2 horas armando los creativos para cada propiedad entre Canva y WhatsApp. Ahora en 3 minutos ya los tengo listos para publicar. InmoGen cambió mi semana entera.",
    stars: 5,
    tag: "InmoGen",
  },
  {
    initials: "VS",
    name: "Valentina S.",
    role: "Directora · Inmobiliaria Recoleta",
    quote:
      "La calidad visual sorprende. Los clientes me preguntan quién hace el diseño y les digo que es IA. Se quedan sin palabras. Y el bot de WhatsApp califica los leads mientras duermo.",
    stars: 5,
    tag: "Pro Suite",
  },
  {
    initials: "DM",
    name: "Diego M.",
    role: "Broker · Córdoba Capital",
    quote:
      "Lo mejor es que mantiene mi identidad de marca en todo. Logo, colores, teléfono. Súper consistente. Y la prospección automática me trajo 3 inmobiliarias nuevas en el primer mes.",
    stars: 5,
    tag: "Scale Suite",
  },
  {
    initials: "FN",
    name: "Federico N.",
    role: "CEO · Inmobiliaria Premium · Madrid",
    quote:
      "Cerramos 4 propiedades de alto valor en el primer trimestre. El scoring automático y el follow-up de InmoBot cambiaron todas las métricas del equipo. No perdemos más un lead por respuesta lenta.",
    stars: 5,
    tag: "Scale Suite",
  },
];

const Testimonials = () => {
  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
              [ 07 — testimonios ]
            </div>
            <h2
              data-testid="testimonials-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
            >
              Lo que dicen las{" "}
              <span className="text-[#9EFF00] am-text-glow">inmobiliarias</span>{" "}
              que automatizaron con el suite
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
              className="relative rounded-3xl glass p-8 sm:p-9 hover:border-[#9EFF00]/30 transition-all overflow-hidden"
              data-testid={`testimonial-${i}`}
            >
              <Quote
                size={56}
                className="absolute top-6 right-6 text-[#9EFF00]/10"
              />
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#9EFF00]/30 to-white/[0.04] border border-[#9EFF00]/30 flex items-center justify-center">
                  <span className="font-display text-white text-base tracking-tight">
                    {t.initials}
                  </span>
                  <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                </div>
                <div>
                  <div className="font-display text-white text-[17px] leading-tight">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-white/50 mt-0.5">{t.role}</div>
                </div>
                <div className="ml-auto text-[10px] uppercase tracking-[0.22em] text-[#9EFF00] font-mono-am">
                  {t.tag}
                </div>
              </div>

              <p className="relative text-white/75 text-[15px] leading-relaxed">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="text-[#9EFF00] fill-[#9EFF00]"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

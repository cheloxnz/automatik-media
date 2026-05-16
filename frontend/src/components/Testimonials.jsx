import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    initials: "DR",
    name: "Dra. Romina V.",
    role: "Directora · Clínica de Estética",
    quote:
      "Pasamos de 6 a 28 consultas mensuales en menos de 90 días. El sistema agenda solo, mi equipo solo confirma. Cambió la forma en que operamos.",
    stars: 5,
    tag: "Beauty Clinic",
  },
  {
    initials: "MA",
    name: "Dr. Mariano Aldana",
    role: "Cirujano Plástico",
    quote:
      "Antes perdía leads por no contestar a tiempo. El bot de WhatsApp filtra y agenda con calendario. Aumentamos el ticket promedio un 41%.",
    stars: 5,
    tag: "Plastic Surgery",
  },
  {
    initials: "LS",
    name: "Lucía Salgado",
    role: "Owner · Salón Premium",
    quote:
      "El branding y los anuncios elevaron por completo la percepción del salón. Hoy atraemos un perfil de clienta totalmente distinto.",
    stars: 5,
    tag: "Luxury Salon",
  },
  {
    initials: "FN",
    name: "Federico Núñez",
    role: "CEO · Inmobiliaria Premium",
    quote:
      "Cerramos 3 propiedades de alto valor en el primer trimestre. El CRM y el seguimiento automático cambiaron todas las métricas del equipo.",
    stars: 5,
    tag: "Real Estate",
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
              Lo que dicen los{" "}
              <span className="text-[#9EFF00] am-text-glow">negocios premium</span>{" "}
              que confían en nosotros
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

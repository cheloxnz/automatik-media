import React from "react";
import { motion } from "framer-motion";
import {
  SendHorizonal,
  MousePointerClick,
  Image as ImageIcon,
  Wand2,
  Rocket,
  HandCoins,
} from "lucide-react";

const steps = [
  {
    icon: SendHorizonal,
    title: "Enviamos la Solicitud de Business Manager",
    desc: "Recibirás una invitación segura a través del sistema oficial de Facebook.",
  },
  {
    icon: MousePointerClick,
    title: "Aceptas la Solicitud",
    desc: "Un simple clic concede acceso limitado — nunca vemos contraseñas ni datos personales.",
  },
  {
    icon: ImageIcon,
    title: "Comparte tus Activos Visuales",
    desc: "Envíanos tus fotos y videos existentes, o te ayudamos a crear nuevos.",
  },
  {
    icon: Wand2,
    title: "Creamos Anuncios Profesionales",
    desc: "Nuestro equipo diseña campañas convincentes optimizadas para máxima conversión.",
  },
  {
    icon: Rocket,
    title: "La Campaña se Activa",
    desc: "Tus anuncios se lanzan en Facebook e Instagram, llegando a miles de clientes potenciales.",
  },
  {
    icon: HandCoins,
    title: "Recibes Clientes",
    desc: "Leads cualificados empiezan a enviarte mensajes por WhatsApp, listos para comprar.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="proceso"
      data-testid="howitworks-section"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Backdrop accent */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-[#9EFF00]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
            [ 03 — cómo funciona ]
          </div>
          <h2
            data-testid="howitworks-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
          >
            De cero a primer cliente,{" "}
            <span className="text-[#9EFF00] am-text-glow">en 6 pasos.</span>
          </h2>
          <p className="text-white/55 mt-5 text-[15px] leading-relaxed">
            Un proceso transparente y sin fricciones. Vos te enfocás en atender;
            nosotros construimos el sistema que te trae los clientes.
          </p>
        </div>

        {/* Steps timeline — alternating */}
        <div className="relative">
          {/* Vertical center line on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#9EFF00]/30 to-transparent" />

          <div className="flex flex-col gap-12 lg:gap-16">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid lg:grid-cols-9 items-center gap-6"
                  data-testid={`step-${i + 1}`}
                >
                  {/* Number node centered on the line */}
                  <div className="hidden lg:flex lg:col-start-5 lg:col-span-1 justify-center relative z-10">
                    <div className="relative w-14 h-14 rounded-full bg-black border border-[#9EFF00]/40 flex items-center justify-center am-glow">
                      <span className="font-display text-[#9EFF00] text-lg">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`lg:col-span-4 ${
                      left ? "lg:col-start-1 lg:text-right lg:pr-10" : "lg:col-start-6 lg:pl-10"
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${left ? "lg:justify-end" : "lg:justify-start"}`}>
                      <div className="lg:hidden w-10 h-10 rounded-full border border-[#9EFF00]/40 flex items-center justify-center text-[#9EFF00] font-display text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#9EFF00]">
                        <Icon size={16} />
                      </div>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl text-white tracking-tight leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-white/55 mt-3 text-[14px] leading-relaxed max-w-md lg:max-w-none">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

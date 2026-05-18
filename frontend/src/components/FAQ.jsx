import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { openWhatsApp } from "../lib/site";

const DEFAULT_ITEMS = [
  {
    q: "¿Por qué los planes parecen más caros que otras agencias?",
    a: "No vendemos solo ads. Construimos un sistema completo: campañas + IA en WhatsApp 24/7 + landing high-converting + automatizaciones + reportes. Una agencia tradicional cobra parecido por solo las campañas; nosotros incluimos la infraestructura que te dispara la conversión. Si comparás precio puro contra resultado, salimos más baratos.",
  },
  {
    q: "¿En cuánto tiempo veo resultados reales?",
    a: "Los primeros leads suelen entrar en la primera o segunda semana. Resultados consolidados (cierres + métricas estables) a partir del día 60-90. Por eso el contrato mínimo es de 3 meses: necesitamos ese tiempo para optimizar audiencias, creativos y flujos. En la sección de Casos podés ver ejemplos reales por rubro.",
  },
  {
    q: "¿Qué pasa si no me funcionan los anuncios o no me llegan leads?",
    a: "Plan Diamond Premium incluye garantía de leads mínimos: si no alcanzamos el volumen acordado, te damos crédito en el mes siguiente. En todos los planes hacemos reportes y ajustes continuos. Si después de 90 días no estás conforme, te ayudamos a hacer la transición.",
  },
  {
    q: "¿Mi negocio es muy chico (o muy grande) para esto?",
    a: "Trabajamos con tickets desde US$ 200 hasta proyectos de inversión high-ticket. El sistema se adapta. Si tu ticket promedio es bajo y vendés volumen, el plan Basic con InmoBot puede ser ideal. Si manejás ticket alto y poco volumen pero crítico (cirugías, real estate premium), el Diamond/Premium es el sweet spot.",
  },
  {
    q: "¿Necesito tener equipo de marketing interno?",
    a: "No. Nosotros somos tu equipo. Nos encargamos de estrategia, creativos, copy, optimización, bot y reportes. Vos atendés a tus clientes; el sistema te trae los leads ya calificados. Si tenés equipo interno, nos coordinamos con ellos sin pisar nadie.",
  },
  {
    q: "¿Cómo me cobran? ¿Aceptan tarjeta argentina / internacional / USDT?",
    a: "Tarjeta (Stripe), transferencia bancaria internacional y USDT. Si pagás en una sola operación (3 meses o anual) accedés a descuentos. Para clientes en Argentina podemos coordinar pago en pesos al tipo de cambio del día por transferencia.",
  },
  {
    q: "¿Qué incluye exactamente el trial de 7 días de InmoBot?",
    a: "Acceso completo al bot configurado para tu negocio, conectado a tu WhatsApp, con flujos de calificación y agenda. Sin tarjeta. Si te suma, lo dejás activo dentro de tu combo. Si no, lo cancelás y no pagás nada. Tu data queda guardada por si decidís reactivarlo.",
  },
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí. Subís de plan en cualquier momento y bonificamos la diferencia proporcional. Bajar de plan se puede hacer al fin del ciclo (3 meses o anual) ya cumplido. Cambios en mitad del ciclo se evalúan caso a caso.",
  },
];

const FAQ = ({ items, title, subtitle, eyebrow }) => {
  const list = items && items.length ? items : DEFAULT_ITEMS;
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#9EFF00]/5 blur-[140px]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#9EFF00] mb-4 font-mono-am">
            [ {eyebrow || "preguntas frecuentes"} ]
          </div>
          <h2
            data-testid="faq-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-semibold leading-[1.05]"
          >
            {title ? (
              title
            ) : (
              <>
                Antes de decidir,{" "}
                <span className="text-[#9EFF00] am-text-glow">
                  resolvé todas tus dudas
                </span>
              </>
            )}
          </h2>
          <p className="text-white/55 mt-5 text-[15px] leading-relaxed">
            {subtitle ||
              "Las preguntas que más nos hacen los negocios premium antes de entrar al combo."}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass p-2 sm:p-3"
        >
          <Accordion type="single" collapsible className="w-full">
            {list.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-white/[0.06] last:border-b-0 px-4 sm:px-5"
              >
                <AccordionTrigger
                  className="text-left font-display text-[16px] sm:text-[17px] text-white tracking-tight hover:no-underline hover:text-[#9EFF00] data-[state=open]:text-[#9EFF00] py-5"
                  data-testid={`faq-trigger-${i}`}
                >
                  <span className="flex items-start gap-3 pr-4">
                    <span className="font-mono-am text-[#9EFF00]/70 text-[12px] mt-1 shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className="text-white/65 text-[14px] leading-relaxed pb-5 pl-9 pr-4"
                  data-testid={`faq-content-${i}`}
                >
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA fallback */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl glass px-6 py-5">
            <HelpCircle size={18} className="text-[#9EFF00]" />
            <div className="text-[14px] text-white/70">
              ¿Tu duda no está acá?
            </div>
            <button
              onClick={openWhatsApp}
              data-testid="faq-whatsapp-cta"
              className="inline-flex items-center gap-2 rounded-full bg-[#9EFF00] text-black px-5 py-2.5 text-[13px] font-semibold hover:bg-[#b8ff3a] transition"
            >
              <MessageCircle size={14} /> Escribinos por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

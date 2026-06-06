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
    q: "¿Qué incluye exactamente el Starter y por qué arranca en $497?",
    a: "El Starter incluye InmoGen ilimitado (creativos para Meta Ads en 2 minutos por propiedad), landing page automática por propiedad, Meta Ads gestionado con hasta $1.000/mes de adspend, 3 videos profesionales al mes y reporte mensual de performance. El precio refleja la combinación de herramientas IA + gestión humana de campañas: solo InmoGen standalone vale $49/mes en inmogen-ia.com; el Starter lo incluye con todo el servicio de ads encima.",
  },
  {
    q: "¿Qué es el adspend y está incluido en el precio del plan?",
    a: "El adspend es el presupuesto que Meta (Facebook/Instagram) cobra directamente por mostrar tus anuncios. No está incluido en el fee mensual del plan — lo manejás desde tu cuenta de Meta Ads. Nosotros nos encargamos de la estrategia, configuración y optimización de las campañas; vos ponés el presupuesto publicitario por separado. El plan indica el máximo de adspend que gestionamos: Starter hasta $1.000/mes, Pro hasta $3.000/mes.",
  },
  {
    q: "¿Qué diferencia al Plan Pro del Starter?",
    a: "El Pro suma InmoBot 24/7: un bot de WhatsApp que califica tus leads automáticamente con scoring (🔥 Hot · 🌡️ Tibio · ❄️ Frío), notifica al asesor cuando el lead está listo, y hace follow-up automático a los que no responden. También sube el adspend gestionado a $3.000/mes, añade 2 videos más por mes y agrega reportes de performance de creativos para saber exactamente qué anuncio convierte mejor.",
  },
  {
    q: "¿En cuánto tiempo veo resultados reales?",
    a: "Los primeros leads suelen entrar en la primera o segunda semana de campaña activa. Resultados consolidados (cierres + métricas estables) a partir del día 60–90. Por eso el mínimo es 3 meses: necesitamos ese tiempo para optimizar audiencias, creativos y flujos. InmoGen empieza a funcionar desde el día 1 — en tu primera sesión ya generás creativos para tus propiedades.",
  },
  {
    q: "¿InmoGen funciona con los portales de mi país?",
    a: "Sí. InmoGen tiene scraping automático para Zonaprop y Argenprop (Argentina), Idealista y Fotocasa (España), Inmuebles24 (México), Infocasas (Uruguay), Portal Inmobiliario (Chile), Metrocuadrado (Colombia) y MercadoLibre Inmuebles. Si tu portal no está en la lista, avisanos — lo agregamos en el onboarding.",
  },
  {
    q: "¿Necesito tener equipo de marketing interno?",
    a: "No. Nosotros somos tu equipo de marketing. Nos encargamos de estrategia, creativos (InmoGen), gestión de campañas Meta Ads, videos y reportes. Vos y tu equipo se enfocan en atender y cerrar leads. Si ya tenés equipo interno, nos coordinamos sin pisar nadie.",
  },
  {
    q: "¿Puedo contratar solo InmoGen sin el resto del suite?",
    a: "Sí. InmoGen está disponible como producto standalone en inmogen-ia.com desde $49/mes con sistema de créditos. Si después querés sumar Meta Ads gestionado, InmoBot o InmoDesk, escalás a cualquier plan del suite y el costo se ajusta proporcionalmente.",
  },
  {
    q: "¿Cómo me cobran? ¿Aceptan tarjeta / transferencia / USDT?",
    a: "Tarjeta internacional (Stripe), transferencia bancaria y USDT. Si pagás 3 meses por adelantado te bonificamos el tercer mes. Para clientes en Argentina coordinamos pago en pesos al tipo de cambio del día. El plan Enterprise tiene condiciones de pago personalizadas.",
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
              "Las preguntas que más nos hacen las inmobiliarias antes de entrar al suite."}
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

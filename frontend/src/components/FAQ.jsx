import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../lib/site";

const DEFAULT_ITEMS = [
  {
    q: "¿Qué necesita el negocio para tener el bot?",
    a: "Solo un número de WhatsApp (puede ser el mismo que ya usan) y acceso a WhatsApp Business API. Nosotros nos encargamos de toda la configuración técnica. El cliente no necesita saber nada de tecnología.",
  },
  {
    q: "¿El bot suena a máquina o habla como una persona?",
    a: "Habla como una persona. No tiene menú de opciones tipo 'presione 1'. Responde con lenguaje natural, usa el tono del negocio y maneja conversaciones reales. Si alguien le pregunta algo fuera de lo esperado, deriva a un humano.",
  },
  {
    q: "¿En cuánto tiempo está listo?",
    a: "En aproximadamente 15 días desde que recibimos el 50% de adelanto. Eso incluye la construcción, las pruebas y la capacitación del equipo. El primer mes de mantenimiento va gratis.",
  },
  {
    q: "¿Qué pasa si el cliente quiere cambios después de entregado?",
    a: "Los ajustes menores (cambio de precios, nuevos productos, modificaciones de tono) están cubiertos en la mensualidad de $200/mes. Si el cliente quiere rehacer la estructura completa o agregar funcionalidades nuevas, eso es un proyecto nuevo.",
  },
  {
    q: "¿Por qué cobran el 50% por adelantado?",
    a: "Porque es trabajo real que empieza desde el día uno. El 50% adelantado garantiza el compromiso del cliente — si no está dispuesto a poner la mitad, no está listo para avanzar. El otro 50% lo cobra solo cuando el cliente prueba el bot y da el OK.",
  },
  {
    q: "¿Funciona con cualquier tipo de negocio?",
    a: "Sí. Ya lo implementamos en hamburgueserías, clínicas estéticas, agencias de autos, tiendas de ropa y servicios profesionales. Si el negocio recibe consultas por WhatsApp, el bot funciona.",
  },
  {
    q: "¿Qué incluye el mantenimiento mensual?",
    a: "Ajustes del prompt, actualización de precios y productos, corrección de errores y soporte técnico. No incluye rehacer la estructura del bot ni agregar módulos nuevos — eso tiene precio aparte.",
  },
  {
    q: "¿El bot puede tomar pedidos o solo informar?",
    a: "Depende de la integración. En el Nivel 1, el bot informa, asesora y hace seguimiento. Si el negocio quiere que el bot tome pedidos directamente y los registre en un sistema, eso se integra en el Nivel 2 o 3 según el caso.",
  },
];

const FAQ = ({ items = DEFAULT_ITEMS }) => {
  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
            Preguntas frecuentes
          </div>
          <h2 className="font-display text-3xl sm:text-[48px] leading-[1.05] tracking-tighter font-semibold">
            Lo que preguntan antes{" "}
            <span className="text-[#9EFF00] am-text-glow">de arrancar.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/8 rounded-xl bg-white/[0.02] px-6 data-[state=open]:border-[#9EFF00]/30 data-[state=open]:bg-white/[0.04] transition-all"
              >
                <AccordionTrigger className="text-left text-[14px] sm:text-[15px] text-white/90 py-5 hover:text-white hover:no-underline font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-white/60 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-[14px] mb-5">¿Tenés alguna pregunta más específica?</p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-[13px] text-white hover:bg-white/[0.06] hover:border-white/30 transition"
          >
            <MessageCircle size={15} className="text-[#9EFF00]" />
            Escribinos por WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../lib/site";

const DEFAULT_ITEMS = [
  {
    q: "¿Cuánto tiempo tarda en verse el primer resultado?",
    a: "En la fase de Quick Wins (semanas 2–4) ya tenés automatizaciones operativas funcionando. Los resultados medibles del sistema completo se ven entre los 30 y 90 días posteriores a la implementación, dependiendo de la complejidad.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos o equipo de IT?",
    a: "No. Nos encargamos de toda la implementación técnica de principio a fin. Solo necesitamos acceso a tus sistemas actuales y reuniones de alineación con tu equipo. Al final del proyecto, tu equipo puede operar el sistema sin depender de nosotros.",
  },
  {
    q: "¿Trabajan con cualquier industria o solo con algunas?",
    a: "Trabajamos con cualquier industria. La metodología de auditoría → quick wins → implementación → autonomía aplica independientemente del sector. Tenemos experiencia especial en inmobiliarias, retail, servicios profesionales, salud y logística, pero el enfoque funciona para cualquier negocio.",
  },
  {
    q: "¿Qué pasa si ya tengo herramientas de software instaladas?",
    a: "Las integramos. Una parte clave del diagnóstico es identificar qué sistemas ya están usando y cómo conectarlos con las nuevas automatizaciones. No hace falta tirar lo que funciona — la IA se suma encima de tu stack actual.",
  },
  {
    q: "¿Tienen contratos largos? ¿Hay lock-in?",
    a: "No. Trabajamos por proyecto o con acuerdos de soporte continuo, sin lock-in. Si el proyecto termina y querés operar de forma autónoma, te entregamos todo documentado y funcionando. Preferimos seguir trabajando porque los resultados lo justifican, no por contrato.",
  },
  {
    q: "¿Cómo es el diagnóstico gratuito?",
    a: "Es una llamada de 30–45 minutos donde analizamos tu operación actual, identificamos los 3–5 puntos de mayor impacto potencial para IA y te presentamos una estimación de resultados. Sin presión, sin compromiso. Si hay fit, avanzamos; si no, igual te llevás el diagnóstico.",
  },
  {
    q: "¿Cuánto cuesta implementar IA con Automatik?",
    a: "Depende del alcance. Cada proyecto se cotiza después del diagnóstico gratuito, con transparencia total. No publicamos precios genéricos porque cada negocio tiene necesidades distintas — pero sí podemos decirte que trabajamos con empresas de diferentes tamaños y ajustamos el alcance al presupuesto disponible.",
  },
  {
    q: "¿Qué diferencia a Automatik de una agencia de marketing o un proveedor de software?",
    a: "Las agencias de marketing generan demanda. Los proveedores de software venden herramientas. Nosotros construimos el sistema operativo de IA de tu negocio: integramos datos, automatizamos procesos, y hacemos que todo funcione junto. No dejamos una herramienta instalada — dejamos un sistema funcionando.",
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
            Las preguntas que todos hacen{" "}
            <span className="text-[#9EFF00] am-text-glow">antes de empezar.</span>
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
          <p className="text-white/50 text-[14px] mb-5">
            ¿Tenés una pregunta que no está acá?
          </p>
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

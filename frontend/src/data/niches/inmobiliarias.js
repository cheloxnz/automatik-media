import {
  EyeOff,
  Clock,
  AlertTriangle,
  TrendingDown,
  Repeat,
} from "lucide-react";

const niche = {
  slug: "inmobiliarias",
  utmCampaign: "inmobiliarias",
  name: "Inmobiliarias",
  shortLabel: "Real Estate",
  industry: "Real Estate",
  seo: {
    title: "Marketing IA para Inmobiliarias Premium — Automatik Media",
    description:
      "Sistema completo de captación para inmobiliarias: leads premium para venta y alquiler, visitas filtradas por presupuesto y zona, WhatsApp IA 24/7.",
  },
  hero: {
    badge: "Real Estate · Premium",
    headline: ["Visitas calificadas para tus", "propiedades premium"],
    highlightWord: "propiedades premium",
    subheadline:
      "Cada lead pre-calificado por tipología, presupuesto, zona y plazo. El bot filtra a los curiosos y agenda visitas con quien sí puede comprar.",
    leadWord: "visitas",
  },
  problem: {
    title: "Tu inmobiliaria pierde cierres",
    titleAccent: "por mala calificación.",
    subtitle:
      "Real estate premium requiere paciencia + filtro. Sin sistema, gastás horas con tire-kickers y perdés al comprador serio que ya se fue a otra agencia.",
    items: [
      {
        icon: EyeOff,
        title: "Visitas con curiosos",
        desc: "Acompañás una hora de visita a alguien que estaba paseando. Tu tiempo es oro y se quema.",
      },
      {
        icon: Clock,
        title: "Respuesta lenta",
        desc: "Mientras estás en una visita, el lead que vio tu publicación se va a la competencia que contestó al instante.",
      },
      {
        icon: AlertTriangle,
        title: "Sin filtro de presupuesto",
        desc: "Te dicen 'quiero ver propiedades en X zona' sin presupuesto real. Visitas inútiles.",
      },
      {
        icon: TrendingDown,
        title: "Cierres a la baja",
        desc: "Negociás con compradores que no califican. Bajás el precio para 'cerrar como sea'.",
      },
      {
        icon: Repeat,
        title: "Sin nurturing post-visita",
        desc: "Pasaron por la propiedad, no decidieron, y nunca más los llamaste. Perdiste el cierre por silencio.",
      },
    ],
  },
  cases: [
    {
      initials: "RE",
      name: "Inmobiliaria boutique",
      location: "Nordelta",
      industry: "Real Estate",
      before: { label: "Visitas calificadas/mes", value: "4" },
      after: { label: "Visitas calificadas/mes", value: "21" },
      metrics: [
        { label: "Cierres 90 días", value: "3 prop." },
        { label: "Ticket promedio", value: "US$ 480k" },
        { label: "Tiempo respuesta", value: "Instantáneo" },
      ],
      quote:
        "Vendimos 3 propiedades en el primer trimestre sin tocar el celular un fin de semana.",
    },
    {
      initials: "DV",
      name: "Desarrollos premium",
      location: "Pilar",
      industry: "Real Estate Development",
      before: { label: "Reservas/mes", value: "2" },
      after: { label: "Reservas/mes", value: "9" },
      metrics: [
        { label: "Costo por visita", value: "-58%" },
        { label: "Tiempo respuesta", value: "< 30s" },
        { label: "ROI a 6 meses", value: "6.8x" },
      ],
      quote:
        "El bot maneja consultas técnicas (m², expensas, entrega) antes de pasarme el lead.",
    },
    {
      initials: "AL",
      name: "Especialista en alquiler premium",
      location: "Palermo, BA",
      industry: "Premium Rentals",
      before: { label: "Inquilinos calificados/mes", value: "8" },
      after: { label: "Inquilinos calificados/mes", value: "34" },
      metrics: [
        { label: "Tiempo de cierre", value: "-44%" },
        { label: "Comisiones", value: "+88%" },
        { label: "Show rate visita", value: "82%" },
      ],
      quote:
        "Solo veo gente con garantías y presupuesto. Las visitas son productivas.",
    },
    {
      initials: "CR",
      name: "Comercial / oficinas corporativas",
      location: "Puerto Madero, BA",
      industry: "Commercial RE",
      before: { label: "Operaciones/trimestre", value: "1" },
      after: { label: "Operaciones/trimestre", value: "4" },
      metrics: [
        { label: "Ticket promedio", value: "US$ 1.2M" },
        { label: "Pipeline", value: "+312%" },
        { label: "Tiempo de respuesta", value: "< 1 min" },
      ],
      quote:
        "Para B2B comercial, la velocidad de respuesta es decisiva. Esto la dispara.",
    },
  ],
  faqs: [
    {
      q: "¿InmoBot reemplaza al corredor o al asesor inmobiliario?",
      a: "No. InmoBot reemplaza al primer contacto (el filtro), no al cierre. Tu asesor sigue atendiendo la visita y la negociación. El bot solo te ahorra horas de 'cuánto sale, dónde queda, cuántos m²' a curiosos que nunca compran.",
    },
    {
      q: "¿Cómo califica el bot un comprador serio vs un curioso?",
      a: "Pregunta presupuesto disponible (no precio orientativo), forma de pago (contado/crédito/permuta), plazo de compra y motivo. Si el lead no califica en presupuesto o plazo, lo deriva a un flujo de nurturing en vez de pasártelo en caliente.",
    },
    {
      q: "¿Puedo conectar mi cartera de Tokko, Lares, Argenprop o Zonaprop?",
      a: "Sí. Sincronizamos tu cartera y el bot busca por tipología, zona y rango de precio en tiempo real. Le manda al lead las 3-5 propiedades que mejor encajan con su criterio.",
    },
    {
      q: "¿Funciona para alquiler temporario (Airbnb-style) o solo venta?",
      a: "Funciona para venta, alquiler permanente, temporario y comercial. Cada flujo tiene calificación distinta (alquiler: garantías, ingresos; venta: presupuesto, financiación; temporario: fechas, cantidad de huéspedes).",
    },
    {
      q: "¿Y si manejo desarrollos en pozo o pre-venta?",
      a: "Es uno de nuestros mejores casos. El bot envía planos, fideicomiso, plan de pagos y cronograma de obra automáticamente. Acortás el ciclo de venta de 60-90 días a 30-45.",
    },
    {
      q: "¿Tengo que dar mis precios al bot? ¿Y si la propiedad es 'precio a consultar'?",
      a: "Si querés mantener precio reservado, configuramos al bot para que pida calificación primero y solo dé precio tras verificar que el lead califica. Es el flujo que usan brokers boutique y luxury.",
    },
    {
      q: "¿Sirve para inmobiliarias del interior, no solo BA?",
      a: "Sí. Tenemos clientes en Córdoba, Mendoza, Rosario, Bariloche y Punta del Este. El sistema se adapta a la dinámica local: en mercados chicos el bot también filtra por barrio y referido conocido.",
    },
  ],
};

export default niche;

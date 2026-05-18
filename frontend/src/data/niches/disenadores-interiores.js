import {
  TrendingDown,
  Clock,
  EyeOff,
  Repeat,
  AlertTriangle,
} from "lucide-react";

const niche = {
  slug: "disenadores-interiores",
  utmCampaign: "disenadores_interiores",
  name: "Diseñadores de Interiores",
  shortLabel: "Diseño Interior",
  industry: "Interior Design",
  seo: {
    title: "Marketing para Diseñadores de Interiores Premium — Automatik Media",
    description:
      "Captación de clientes premium para estudios de diseño interior y arquitectura. Meta Ads visuales + IA en WhatsApp que califica por m², estilo y presupuesto.",
  },
  hero: {
    badge: "Diseño + Arquitectura · Premium",
    headline: ["Proyectos que sí podés", "facturar"],
    highlightWord: "facturar",
    subheadline:
      "Clientes premium para diseño, arquitectura, decoración o reformas integrales. Filtrados por presupuesto, m² y plazo antes de que te llegue la consulta.",
    leadWord: "proyectos",
  },
  problem: {
    title: "Tu estudio gasta horas en",
    titleAccent: "consultas que no cierran.",
    subtitle:
      "Diseñar requiere tiempo. Sin filtro previo, perdés horas calificando proyectos que no van a ningún lado mientras los clientes premium se quedan sin atender.",
    items: [
      {
        icon: TrendingDown,
        title: "Proyectos sin presupuesto real",
        desc: "Llegan consultas con expectativas altas pero presupuestos que no cubren ni los materiales.",
      },
      {
        icon: Clock,
        title: "Respuesta de 1+ día",
        desc: "Estás en obra. El proyecto serio te escribió y respondiste 18hs después. Ya contrató al estudio que respondió rápido.",
      },
      {
        icon: EyeOff,
        title: "Cotizás gratis sin filtro",
        desc: "Mandás presupuestos detallados a quienes no van a contratar. Tu propiedad intelectual sin pago.",
      },
      {
        icon: Repeat,
        title: "Sin seguimiento estructurado",
        desc: "Mostraste el proyecto, te dijeron 'lo pienso' y nunca volviste a llamar. Cierres perdidos por silencio.",
      },
      {
        icon: AlertTriangle,
        title: "Cartera saturada de mini-proyectos",
        desc: "Aceptás todo para llenar agenda. Margenes bajos, tiempo quemado, sin avanzar al ticket alto.",
      },
    ],
  },
  cases: [
    {
      initials: "DI",
      name: "Estudio de diseño boutique",
      location: "Palermo Soho, BA",
      industry: "Interior Design",
      before: { label: "Proyectos premium/mes", value: "1" },
      after: { label: "Proyectos premium/mes", value: "5" },
      metrics: [
        { label: "Ticket promedio", value: "US$ 28k" },
        { label: "Pre-calificación", value: "Automática" },
        { label: "ROI 6 meses", value: "7.1x" },
      ],
      quote:
        "Hoy solo cotizo a quien ya pasó por el filtro del bot. Mi tiempo vale.",
    },
    {
      initials: "AR",
      name: "Estudio de arquitectura",
      location: "Nordelta",
      industry: "Architecture",
      before: { label: "Llaves en mano cerradas", value: "2 / año" },
      after: { label: "Llaves en mano cerradas", value: "11 / año" },
      metrics: [
        { label: "Ticket promedio", value: "US$ 180k" },
        { label: "Tasa conversión", value: "32%" },
        { label: "CAC", value: "-44%" },
      ],
      quote:
        "El sistema clasifica reforma vs obra nueva vs solo asesoría. Cada uno con su flujo.",
    },
    {
      initials: "DR",
      name: "Decoradora premium",
      location: "Recoleta, BA",
      industry: "Decoration",
      before: { label: "Hogares completos/mes", value: "1" },
      after: { label: "Hogares completos/mes", value: "4" },
      metrics: [
        { label: "Ticket promedio", value: "+62%" },
        { label: "Tiempo respuesta", value: "< 1 min" },
        { label: "Referidos", value: "+88%" },
      ],
      quote:
        "Triplicamos hogares completos. Ya no acepto deco-puntual; el bot filtra.",
    },
    {
      initials: "RF",
      name: "Reformas integrales premium",
      location: "Vicente López",
      industry: "Renovation",
      before: { label: "Obras cerradas/trimestre", value: "3" },
      after: { label: "Obras cerradas/trimestre", value: "12" },
      metrics: [
        { label: "Ticket promedio", value: "US$ 65k" },
        { label: "Pipeline mensual", value: "US$ 480k" },
        { label: "Tiempo cierre", value: "-38%" },
      ],
      quote:
        "Pre-filtrar por m², zona y rango de inversión cambió el negocio.",
    },
  ],
  faqs: [
    {
      q: "¿Cómo filtramos clientes que 'solo quieren ideas gratis'?",
      a: "El bot detecta intención y pide siempre superficie a intervenir, presupuesto estimado y plazo. Si el lead dice 'solo quiero una idea' sin presupuesto real, lo deriva a un kit gratuito (descargable) que cobramos como lead magnet — vos no perdés tiempo cotizando.",
    },
    {
      q: "¿Sirve para arquitectos que hacen obra nueva vs decoradores que solo decoran?",
      a: "Sí, el flujo del bot se ramifica: 'obra nueva / reforma integral / decoración / asesoría puntual'. Cada uno tiene calificación distinta y se enruta a vos solo si encaja con tu nicho real.",
    },
    {
      q: "¿Cobramos visita técnica o quedó incluida en la propuesta?",
      a: "Lo configuramos según tu modelo. Muchos estudios cobran visita técnica entre US$ 80-200 que descuentan si firman el proyecto. El bot informa el costo antes de agendar, filtrando automáticamente los curiosos.",
    },
    {
      q: "¿Las ads tienen que ser solo de mi portfolio o pueden ser inspiración general?",
      a: "Siempre tu portfolio real. Hacemos creativos cinemáticos con tus mejores 5-10 proyectos, fotos antes/después, recorridos en video y testimonios. Sin stock photos — eso desinfla el ticket.",
    },
    {
      q: "¿Cómo escalo si soy estudio chico (1-3 personas)?",
      a: "El bot evita que te saturen leads que no podés atender. Configura un cap de leads/semana según tu capacidad real. Mejor 5 proyectos premium al mes que 30 cotizaciones que no podés hacer.",
    },
    {
      q: "¿Vamos a recibir consultas de Pinterest 'quiero algo parecido a esta foto'?",
      a: "El bot pide al lead su Pinterest/Instagram de referencia. Si la inspiración encaja con tu estilo, lo agenda; si no, le explica que no es tu fit creativo y lo descarta. Cuida tu marca.",
    },
  ],
};

export default niche;

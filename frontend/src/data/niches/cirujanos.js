import {
  EyeOff,
  Clock,
  PhoneOff,
  AlertTriangle,
  TrendingDown,
} from "lucide-react";

const niche = {
  slug: "cirujanos",
  utmCampaign: "cirujanos",
  name: "Cirujanos Plásticos",
  shortLabel: "Cirujanos",
  industry: "Plastic Surgery",
  seo: {
    title: "Marketing y IA para Cirujanos Plásticos — Automatik Media",
    description:
      "Sistema de adquisición de pacientes calificados para cirujanos plásticos. Filtrado por presupuesto, zona y procedimiento. WhatsApp IA + Meta Ads premium.",
  },
  hero: {
    badge: "Cirugía plástica · High-Ticket",
    headline: ["Pacientes calificados,", "no curiosos"],
    highlightWord: "no curiosos",
    subheadline:
      "Solo ves en agenda candidatos serios. El bot filtra por procedimiento, presupuesto, zona y urgencia antes de pasar la consulta. Reservas con seña ya activadas.",
    leadWord: "consultas",
  },
  problem: {
    title: "Los cirujanos premium pierden agenda",
    titleAccent: "por no filtrar.",
    subtitle:
      "Un cirujano con buena trayectoria recibe consultas — pero la mayoría no convierte. Sin filtro, perdés horas con leads que nunca operan.",
    items: [
      {
        icon: EyeOff,
        title: "Curiosos sin presupuesto",
        desc: "DM y WhatsApp llenos de gente preguntando precio sin intención real de operar.",
      },
      {
        icon: Clock,
        title: "Respuesta lenta",
        desc: "Estás en quirófano. El lead caliente se enfría y se va al cirujano que contestó primero.",
      },
      {
        icon: PhoneOff,
        title: "No-shows en consulta",
        desc: "Reservan turno pero no van. Una hora bloqueada, un slot premium desperdiciado.",
      },
      {
        icon: AlertTriangle,
        title: "Ads sin filtro clínico",
        desc: "Anuncios que atraen volumen pero no calidad. Tu equipo se quema atendiendo lookers.",
      },
      {
        icon: TrendingDown,
        title: "Ticket bajo por miedo",
        desc: "Cerrás procedimientos sueltos cuando deberías estar vendiendo planes integrales.",
      },
    ],
  },
  cases: [
    {
      initials: "CP",
      name: "Centro de cirugía plástica",
      location: "Recoleta, BA",
      industry: "Plastic Surgery",
      before: { label: "Leads perdidos", value: "62%" },
      after: { label: "Leads perdidos", value: "9%" },
      metrics: [
        { label: "Calls agendadas", value: "+312%" },
        { label: "Tiempo respuesta", value: "< 1 min" },
        { label: "Show rate", value: "84%" },
      ],
      quote:
        "InmoBot califica mejor que un SDR humano. Solo veo en agenda casos serios.",
    },
    {
      initials: "DM",
      name: "Cirujano plástico boutique",
      location: "Las Cañitas, BA",
      industry: "Plastic Surgery",
      before: { label: "Cirugías/mes", value: "3" },
      after: { label: "Cirugías/mes", value: "11" },
      metrics: [
        { label: "Ticket promedio", value: "+38%" },
        { label: "CAC", value: "-52%" },
        { label: "Conversión consulta→cirugía", value: "47%" },
      ],
      quote:
        "Subí ticket promedio porque ahora califico antes de la consulta presencial.",
    },
    {
      initials: "VG",
      name: "Estudio cirugía facial",
      location: "Pilar",
      industry: "Facial Surgery",
      before: { label: "Show rate", value: "44%" },
      after: { label: "Show rate", value: "91%" },
      metrics: [
        { label: "Sesión informativa", value: "Automática" },
        { label: "Reserva con seña", value: "Activada" },
        { label: "Cancelaciones", value: "-68%" },
      ],
      quote:
        "El bot envía la info técnica antes — vienen ya decididos a operar.",
    },
    {
      initials: "AR",
      name: "Cirugía reconstructiva",
      location: "Córdoba",
      industry: "Reconstructive",
      before: { label: "Leads cualificados", value: "9%" },
      after: { label: "Leads cualificados", value: "61%" },
      metrics: [
        { label: "Costo por consulta", value: "-58%" },
        { label: "Procedimientos premium", value: "+82%" },
        { label: "ROI 6 meses", value: "5.7x" },
      ],
      quote:
        "Pasamos de filtrar manualmente a tener pipeline lleno todo el mes.",
    },
  ],
  faqs: [
    {
      q: "¿Puedo activar reserva con seña para consultas presenciales?",
      a: "Sí. Configuramos un flujo de pago de seña (US$ 50-150 según el cirujano) antes de confirmar el turno. Reduce no-shows del 50% al 8-12% y filtra automáticamente lookers de pacientes serios.",
    },
    {
      q: "¿El bot puede hablar de procedimientos específicos (rinoplastia, abdominoplastia, implantes)?",
      a: "Sí. Lo entrenamos con tu portfolio, tu técnica y tus precios orientativos por procedimiento. Da info técnica básica y deriva a consulta presencial sin comprometerse a un presupuesto cerrado.",
    },
    {
      q: "¿Cómo manejamos pacientes del interior del país o extranjeros?",
      a: "El bot detecta zona y, si es de otra ciudad/país, agenda directamente una telemedicina previa + cotización de paquete con hospedaje si aplica. Es ideal para cirujanos que reciben pacientes de afuera.",
    },
    {
      q: "¿No es muy frío que un bot atienda consultas de cirugía?",
      a: "El bot no reemplaza a tu equipo médico — solo califica y agenda. Está diseñado para sonar humano, empático y profesional. La consulta clínica siempre la hacés vos en persona o por videollamada.",
    },
    {
      q: "¿Aceptan trabajar con cirujanos jóvenes que recién empiezan?",
      a: "Sí, pero recomendamos al menos 2 años de trayectoria y resultados verificables. Sin base de casos, las ads pueden generar consultas pero la conversión a cirugía baja. Lo evaluamos en el diagnóstico inicial.",
    },
    {
      q: "¿Vamos a aparecer en Google cuando buscan 'rinoplastia + ciudad'?",
      a: "Sí, con Google Ads en el plan Diamond. SEO orgánico requiere 6+ meses; Google Ads te pone primero desde el día 1. Combinamos ambas para que captures intención alta + brand search.",
    },
  ],
};

export default niche;

import {
  PhoneOff,
  Clock,
  CalendarX,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

const niche = {
  slug: "clinicas-esteticas",
  utmCampaign: "clinicas_esteticas",
  name: "Clínicas Estéticas",
  shortLabel: "Clínicas",
  industry: "Beauty / Aesthetic",
  seo: {
    title: "Marketing para Clínicas Estéticas Premium — Automatik Media",
    description:
      "Sistema completo para clínicas estéticas: Meta Ads, IA en WhatsApp, agenda online y reportes. 3X consultas calificadas en 90 días. Combo con InmoBot incluido.",
  },
  hero: {
    badge: "Sector estético · High-Ticket",
    headline: ["Marketing y IA para", "clínicas y centros estéticos"],
    highlightWord: "estéticos",
    subheadline:
      "Llenamos tu agenda de pacientes calificados por presupuesto, zona y tratamiento. Meta Ads + bot 24/7 que califica y agenda sin que tu equipo levante el teléfono.",
    leadWord: "consultas",
  },
  problem: {
    title: "Tu clínica pierde pacientes premium",
    titleAccent: "todos los días.",
    subtitle:
      "El paciente estético decide rápido y compara silencio. Si no respondés en minutos, ya está en la consulta de la competencia.",
    items: [
      {
        icon: PhoneOff,
        title: "Consultas sin respuesta",
        desc: "DM, formularios y WhatsApp sin contestar a tiempo. Cada uno es un paciente perdido con ticket alto.",
      },
      {
        icon: Clock,
        title: "Respuesta de 4+ horas",
        desc: "Tu equipo atiende pacientes en boxes. Las consultas nuevas esperan, se enfrían y compran a otro.",
      },
      {
        icon: CalendarX,
        title: "Agenda con huecos",
        desc: "Días flojos sin nuevas primeras consultas. No por falta de demanda — por falta de sistema.",
      },
      {
        icon: TrendingDown,
        title: "Tickets bajos por miedo",
        desc: "Tu equipo no califica antes — termina ofreciendo precio en lugar de mostrar valor del tratamiento.",
      },
      {
        icon: AlertTriangle,
        title: "Ads que no convierten",
        desc: "Probaste Meta o Google sin estrategia clínica. Gastaste sin medir y bajaste los brazos.",
      },
    ],
  },
  cases: [
    {
      initials: "CE",
      name: "Clínica de estética avanzada",
      location: "Palermo, BA",
      industry: "Beauty Clinic",
      before: { label: "Primeras consultas/mes", value: "6" },
      after: { label: "Primeras consultas/mes", value: "28" },
      metrics: [
        { label: "Ticket promedio", value: "+41%" },
        { label: "Tiempo respuesta", value: "< 1 min" },
        { label: "ROI a 90 días", value: "4.2x" },
      ],
      quote:
        "El bot filtra por presupuesto antes de pasar la consulta. Mi equipo solo cierra.",
    },
    {
      initials: "MD",
      name: "Med-spa premium",
      location: "Nordelta",
      industry: "Med Spa",
      before: { label: "Show rate", value: "52%" },
      after: { label: "Show rate", value: "89%" },
      metrics: [
        { label: "Reservas/mes", value: "+220%" },
        { label: "Cancelaciones", value: "-61%" },
        { label: "Recurrencia", value: "+38%" },
      ],
      quote:
        "Recordatorios automáticos por WhatsApp bajaron los no-shows casi 60%.",
    },
    {
      initials: "RM",
      name: "Dermo-estética",
      location: "Recoleta, BA",
      industry: "Dermatology",
      before: { label: "Leads / mes", value: "32" },
      after: { label: "Leads / mes", value: "187" },
      metrics: [
        { label: "Costo por consulta", value: "-44%" },
        { label: "Tiempo respuesta", value: "Instantáneo" },
        { label: "Tratamientos premium", value: "+58%" },
      ],
      quote:
        "Cambiamos completamente el perfil de paciente. Hoy nos eligen por autoridad.",
    },
    {
      initials: "LS",
      name: "Centro láser",
      location: "Belgrano, BA",
      industry: "Laser Clinic",
      before: { label: "Sesiones vendidas/mes", value: "48" },
      after: { label: "Sesiones vendidas/mes", value: "164" },
      metrics: [
        { label: "Paquete promedio", value: "+72%" },
        { label: "CAC", value: "-39%" },
        { label: "LTV / paciente", value: "+2.8x" },
      ],
      quote:
        "Vendemos paquetes completos, no sesiones sueltas. El sistema educa antes.",
    },
  ],
  faqs: [
    {
      q: "¿Funciona para tratamientos de bajo y alto ticket (botox, láser vs implantes, rinomodelación)?",
      a: "Sí. El bot califica por tratamiento y presupuesto: a un lead que pregunta por botox lo agenda directo; a uno que pregunta por rinomodelación o medicina estética avanzada lo filtra antes de pasar a tu staff. Cada flujo se adapta al ticket.",
    },
    {
      q: "¿Vamos a recibir 'curiosos que solo piden precio'?",
      a: "El bot está configurado para no dar precios sueltos. Pide zona, tratamiento de interés, urgencia y rango de inversión antes de pasarte la consulta. Reduce 60-70% de tire-kickers en las primeras 4 semanas.",
    },
    {
      q: "¿Cómo manejan la regulación sanitaria y la privacidad del paciente?",
      a: "No pedimos datos clínicos sensibles en el bot, solo intención y contexto. La data se guarda en CRM con consentimiento explícito y bajo normativa Habeas Data / LGPD si aplica. Tu equipo médico maneja la historia clínica como hasta ahora.",
    },
    {
      q: "¿El bot puede mostrar 'antes y después' por WhatsApp?",
      a: "Sí, configuramos un catálogo de imágenes por tratamiento (con consentimiento del paciente original) que el bot envía automáticamente según el procedimiento que pregunta el lead. Aumenta show rate ~30%.",
    },
    {
      q: "¿Sirve para clínicas con 1 médico vs grupos con 5+ profesionales?",
      a: "Ambos. Para clínica unipersonal, el sistema te llena la agenda sin que tengas que contratar recepcionista. Para grupos, el bot enruta al profesional correcto por especialidad y disponibilidad real.",
    },
    {
      q: "¿Cuándo bajan los no-shows y cancelaciones?",
      a: "Desde la segunda semana. El bot envía recordatorios automáticos 24h y 2h antes con confirmación por WhatsApp. La mayoría de nuestras clínicas bajan no-shows del 40% al 10-15% en el primer mes.",
    },
    {
      q: "¿Tengo que cambiar mi sistema de agenda actual?",
      a: "No. Nos integramos con Google Calendar, Calendly, Nimbo, AgendaPro y la mayoría de los CRMs estéticos. Si usás algo muy custom, lo conectamos vía Zapier o n8n sin tocar tu setup.",
    },
  ],
};

export default niche;

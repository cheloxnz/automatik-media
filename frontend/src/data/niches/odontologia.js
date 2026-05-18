import {
  PhoneOff,
  TrendingDown,
  CalendarX,
  AlertTriangle,
  EyeOff,
} from "lucide-react";

const niche = {
  slug: "odontologia",
  utmCampaign: "odontologia",
  name: "Odontología",
  shortLabel: "Odontología",
  industry: "Dental",
  seo: {
    title: "Marketing para Odontólogos y Clínicas Dentales — Automatik Media",
    description:
      "Sistema de captación para clínicas dentales premium e implantología. Meta Ads + IA en WhatsApp 24/7. Pacientes calificados por tratamiento y presupuesto.",
  },
  hero: {
    badge: "Odontología · High-Ticket",
    headline: ["Pacientes para tratamientos", "que valen la pena"],
    highlightWord: "valen la pena",
    subheadline:
      "Implantes, ortodoncia, estética dental, all-on-4. Atraemos pacientes que buscan calidad y pueden pagarla. Filtrado por tratamiento + zona + presupuesto.",
    leadWord: "pacientes",
  },
  problem: {
    title: "Tu consultorio pierde",
    titleAccent: "implantes y ortodoncia.",
    subtitle:
      "Los tratamientos high-ticket dentales se pierden porque el paciente no califica el costo desde el principio o no recibe la info en el momento.",
    items: [
      {
        icon: PhoneOff,
        title: "Consultas sin contestar",
        desc: "Recepción saturada. WhatsApp con notificaciones ignoradas. Pacientes que no esperan más de 1 hora.",
      },
      {
        icon: TrendingDown,
        title: "Tratamientos sueltos",
        desc: "Vendés una limpieza cuando podrías cerrar un plan integral de ortodoncia o implantes.",
      },
      {
        icon: CalendarX,
        title: "Agenda con días flojos",
        desc: "Lunes y martes vacíos, semanas con poco volumen. Demanda existe — falta sistema.",
      },
      {
        icon: AlertTriangle,
        title: "Presupuestos sin seguimiento",
        desc: "Le pasaste el presupuesto y desapareció. Sin nurturing automático, el paciente se va a la competencia barata.",
      },
      {
        icon: EyeOff,
        title: "Pacientes que buscan precio",
        desc: "Tus ads atraen leads que solo comparan costo. Falta posicionamiento premium.",
      },
    ],
  },
  cases: [
    {
      initials: "OD",
      name: "Clínica dental integral",
      location: "Belgrano, BA",
      industry: "Dental Clinic",
      before: { label: "Implantes/mes", value: "4" },
      after: { label: "Implantes/mes", value: "19" },
      metrics: [
        { label: "Ticket promedio", value: "+62%" },
        { label: "Plan integral cerrado", value: "73%" },
        { label: "Tiempo respuesta", value: "< 1 min" },
      ],
      quote:
        "Pasamos de vender limpiezas a vender planes integrales. El bot pre-vende.",
    },
    {
      initials: "OR",
      name: "Centro de ortodoncia",
      location: "Pilar",
      industry: "Orthodontics",
      before: { label: "Casos invisalign/mes", value: "7" },
      after: { label: "Casos invisalign/mes", value: "31" },
      metrics: [
        { label: "Show rate consulta", value: "92%" },
        { label: "CAC", value: "-41%" },
        { label: "Referidos", value: "+58%" },
      ],
      quote:
        "El bot manda fotos de antes/después según el caso del paciente. Cierra solo.",
    },
    {
      initials: "IM",
      name: "Implantología premium",
      location: "Núñez, BA",
      industry: "Implantology",
      before: { label: "All-on-4 cerrados/mes", value: "1" },
      after: { label: "All-on-4 cerrados/mes", value: "6" },
      metrics: [
        { label: "Ticket promedio", value: "US$ 14k" },
        { label: "ROI 90 días", value: "8.1x" },
        { label: "Show rate", value: "88%" },
      ],
      quote:
        "Para tratamientos high-ticket dentales, este sistema es game-changer.",
    },
    {
      initials: "ED",
      name: "Estética dental boutique",
      location: "Recoleta, BA",
      industry: "Cosmetic Dentistry",
      before: { label: "Diseños de sonrisa/mes", value: "3" },
      after: { label: "Diseños de sonrisa/mes", value: "14" },
      metrics: [
        { label: "Ticket promedio", value: "+44%" },
        { label: "Reserva con seña", value: "Activada" },
        { label: "Cancelaciones", value: "-72%" },
      ],
      quote:
        "Triplicamos diseños de sonrisa cobrando más por trabajo. Pacientes calificados.",
    },
  ],
  faqs: [
    {
      q: "¿Sirve para implantes / all-on-4 / ortodoncia adulta o solo limpiezas?",
      a: "Está diseñado para tratamientos de US$ 1.500+ (implantes unitarios, ortodoncia invisible, all-on-4, diseño de sonrisa). Para limpiezas y obras sociales no aporta tanto — necesitás volumen, no calificación. El sistema se enfoca en ticket alto.",
    },
    {
      q: "¿Cómo evitamos que solo lleguen pacientes 'buscando descuento'?",
      a: "El bot filtra por presupuesto y forma de pago (contado, financiación a 12 cuotas o crédito médico). Los leads que solo buscan obra social o promo extrema no pasan a tu agenda. Verás el cambio en 2-3 semanas.",
    },
    {
      q: "¿Pueden integrarse con mi software dental (Dentaltec, Iris, etc.)?",
      a: "Sí. La mayoría de los softwares dentales aceptan integración vía API o Zapier. Si el tuyo es muy cerrado, el bot envía un resumen del lead por mail/WhatsApp a tu recepción para que lo carguen.",
    },
    {
      q: "¿El bot puede dar presupuesto orientativo de un implante o tratamiento?",
      a: "Sí, pero solo rangos (ej: 'implantes unitarios desde X hasta Y según marca y técnica'). Nunca da precio cerrado sin evaluación. Eso lo hacés vos en la consulta, después de revisar la radiografía panorámica.",
    },
    {
      q: "¿Cómo manejamos pacientes que llegan con miedo dental?",
      a: "El bot detecta lenguaje de miedo (palabras como 'fobia', 'no aguanto', 'me da pánico') y activa un flujo empático que ofrece sedación consciente o atención específica. Aumenta conversión 40% en ese segmento.",
    },
    {
      q: "¿Funciona si soy odontólogo solo, sin clínica grande?",
      a: "Sí. Lo ideal es que tengas al menos un sillón y agenda online. Muchos clientes nuestros son odontólogos solos que querían dejar de depender de obras sociales y subir al privado high-ticket.",
    },
    {
      q: "¿Cuánto tarda en llenar mi agenda de ortodoncia adulta o invisalign?",
      a: "Primeros casos: semanas 2-4. Agenda completa (ortodoncia adulta corre lenta): meses 3-4. Es el tratamiento más lento de cerrar porque el paciente compara. El nurturing automático del bot acorta el ciclo ~35%.",
    },
  ],
};

export default niche;

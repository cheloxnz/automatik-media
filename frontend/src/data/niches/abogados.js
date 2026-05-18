import {
  ScrollText,
  TrendingDown,
  Clock,
  AlertTriangle,
  Repeat,
} from "lucide-react";

const niche = {
  slug: "abogados",
  utmCampaign: "abogados",
  name: "Abogados",
  shortLabel: "Abogados",
  industry: "Legal",
  seo: {
    title: "Marketing para Estudios Jurídicos Premium — Automatik Media",
    description:
      "Captación de casos calificados para abogados y estudios jurídicos. Especializaciones premium (corporativo, sucesiones, inmobiliario, laboral high-ticket).",
  },
  hero: {
    badge: "Estudios Jurídicos · Premium",
    headline: ["Casos calificados, no", "consultas gratuitas"],
    highlightWord: "consultas gratuitas",
    subheadline:
      "Atraemos clientes para tus áreas premium: corporativo, sucesiones, inmobiliario, laboral high-ticket. El bot filtra por monto, área y urgencia.",
    leadWord: "casos",
  },
  problem: {
    title: "Tu estudio se quema con",
    titleAccent: "consultas que no pagan.",
    subtitle:
      "El abogado premium pierde tiempo dando primeras consultas gratuitas a casos que nunca van a contratar. Sin sistema, el ticket promedio se cae.",
    items: [
      {
        icon: ScrollText,
        title: "Consultas gratuitas eternas",
        desc: "Tu equipo o vos atienden horas de primera consulta a personas que no califican para honorarios premium.",
      },
      {
        icon: TrendingDown,
        title: "Casos de bajo valor",
        desc: "Aceptás cualquier expediente para mantener volumen. Resultado: cartera que no escala el ticket promedio.",
      },
      {
        icon: Clock,
        title: "Respuesta lenta a casos urgentes",
        desc: "El cliente premium con urgencia te escribió. Le contestaste al día siguiente. Ya contrató otro estudio.",
      },
      {
        icon: AlertTriangle,
        title: "Sin diferenciación digital",
        desc: "Tu estudio compite por precio en Google. Sin posicionamiento de autoridad, sos uno más.",
      },
      {
        icon: Repeat,
        title: "Referidos sin estructura",
        desc: "Todo tu negocio depende del boca a boca. Sin pipeline propio, los meses sin referidos son muertos.",
      },
    ],
  },
  cases: [
    {
      initials: "DC",
      name: "Estudio derecho corporativo",
      location: "Microcentro, BA",
      industry: "Corporate Law",
      before: { label: "Retainers/mes", value: "1" },
      after: { label: "Retainers/mes", value: "5" },
      metrics: [
        { label: "Honorarios promedio", value: "+78%" },
        { label: "Calificación por monto", value: "Automática" },
        { label: "ROI 6 meses", value: "5.4x" },
      ],
      quote:
        "El bot filtra por facturación de la empresa antes de pasarme la consulta.",
    },
    {
      initials: "DS",
      name: "Sucesiones premium",
      location: "Recoleta, BA",
      industry: "Estate / Succession",
      before: { label: "Sucesiones cerradas/trim.", value: "3" },
      after: { label: "Sucesiones cerradas/trim.", value: "14" },
      metrics: [
        { label: "Ticket promedio", value: "+52%" },
        { label: "Tiempo respuesta", value: "< 1 min" },
        { label: "Cierre primer mes", value: "78%" },
      ],
      quote:
        "Sucesiones premium requieren confianza inmediata. El bot la genera.",
    },
    {
      initials: "DI",
      name: "Derecho inmobiliario",
      location: "Palermo, BA",
      industry: "Real Estate Law",
      before: { label: "Operaciones/mes", value: "2" },
      after: { label: "Operaciones/mes", value: "9" },
      metrics: [
        { label: "Ticket promedio", value: "US$ 4.2k" },
        { label: "Show rate consulta", value: "84%" },
        { label: "Cancelaciones", value: "-66%" },
      ],
      quote:
        "Filtramos según el monto de operación antes de agendar. Eficiencia total.",
    },
    {
      initials: "DL",
      name: "Laboral high-ticket",
      location: "Córdoba",
      industry: "Labor Law",
      before: { label: "Casos premium/mes", value: "4" },
      after: { label: "Casos premium/mes", value: "18" },
      metrics: [
        { label: "Honorarios promedio", value: "+44%" },
        { label: "Pipeline mensual", value: "+312%" },
        { label: "Tiempo cierre", value: "-38%" },
      ],
      quote:
        "Atraemos despidos ejecutivos, no consultas de salario mínimo. Otro negocio.",
    },
  ],
  faqs: [
    {
      q: "¿No es poco ético / mal visto que un abogado haga publicidad?",
      a: "El Colegio Público no prohíbe publicidad respetuosa y verídica — sí prohíbe garantizar resultados o nombrar casos sin consentimiento. Nosotros construimos campañas con autoridad técnica, contenido informativo y testimonios anonimizados. 100% compatible con tu ética profesional.",
    },
    {
      q: "¿Cómo filtra el bot un caso premium (corporativo, sucesión grande) vs uno chico?",
      a: "Pregunta área (corporativo / laboral / familia / sucesiones / penal / inmobiliario), monto involucrado o facturación de la empresa, y urgencia. Si el caso no califica para tu ticket mínimo, lo deriva a un flujo de info o lo descarta — vos no perdés la primera consulta gratuita.",
    },
    {
      q: "¿Sirve para áreas no transaccionales como derecho de familia o penal?",
      a: "Funciona mejor con áreas de ticket alto y resultado claro (corporativo, sucesiones, laboral high-ticket, inmobiliario). Familia y penal son posibles pero requieren ajustes éticos finos en el copy. Lo evaluamos en el diagnóstico.",
    },
    {
      q: "¿El bot puede dar asesoramiento jurídico?",
      a: "No. El bot está expresamente configurado para NO dar asesoramiento. Solo califica, agenda y envía información pública (folletos, artículos tuyos). El asesoramiento siempre lo das vos en consulta paga.",
    },
    {
      q: "¿Vamos a cobrar primera consulta o sigue gratuita?",
      a: "Recomendamos cobrar primera consulta (US$ 80-200 según área) y descontarla si firma. El bot informa el costo al agendar, filtrando 70% de consultas sin intención de contratar. Si querés mantenerla gratuita, también funciona pero el filtro recae más en el bot.",
    },
    {
      q: "¿Cómo manejamos la confidencialidad y secreto profesional?",
      a: "El bot no pide datos sensibles del caso, solo área genérica y monto orientativo. Cuando agenda contigo, el cliente firma confidencialidad como en cualquier primera consulta. Todo cifrado bajo Habeas Data.",
    },
    {
      q: "¿Sirve para estudios chicos (1-2 abogados) o solo grandes?",
      a: "Estudios chicos son nuestros mejores casos. Un abogado solo no puede atender 50 consultas/semana; el filtro lo libera de eso. Estudios grandes lo usan para alimentar el pipeline de socios senior.",
    },
  ],
};

export default niche;

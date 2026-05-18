// Niche configurations — used by /[niche] pages
// Each niche overrides: hero, problem cards, success cases + SEO meta tags

import {
  Clock,
  Repeat,
  PhoneOff,
  CalendarX,
  TrendingDown,
  AlertTriangle,
  EyeOff,
  ScrollText,
} from "lucide-react";

export const NICHES = {
  "clinicas-esteticas": {
    slug: "clinicas-esteticas",
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
  },

  cirujanos: {
    slug: "cirujanos",
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
  },

  odontologia: {
    slug: "odontologia",
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
  },

  inmobiliarias: {
    slug: "inmobiliarias",
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
  },

  "disenadores-interiores": {
    slug: "disenadores-interiores",
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
  },

  abogados: {
    slug: "abogados",
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
  },
};

export const NICHE_LIST = Object.values(NICHES).map((n) => ({
  slug: n.slug,
  name: n.name,
  shortLabel: n.shortLabel,
  industry: n.industry,
}));

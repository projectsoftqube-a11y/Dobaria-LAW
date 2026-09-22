// content/pages/schedule-consultation.ts
//
// Locale-keyed page content. Components read `scheduleConsultationContent[locale]`,
// so the shape stays identical in both languages and a missing translation is a
// type error rather than a page that silently falls back to English.

const en = {
  hero: {
    eyebrow: "Schedule a Consultation",
    h1: "Talk to an Experienced Immigration Attorney",
    subhead:
      "For 45+ years, Dobaria Law PC has helped individuals, families, and employers across Philadelphia and Montgomery County. Tell us about your situation, and let's discuss how we can help.",
    trustBullets: [
      "Over four decades of experience.",
      "In-depth case evaluation with a qualified attorney.",
      "Clear, honest assessment of your options.",
    ],
  },
  form: {
    heading: "Get Your Consultation",
    submitLabel: "Request My Consultation",
    microcopy:
      "We respond within 24 business hours. Your information is confidential and protected by attorney-client privilege.",
    callAlternative: "Prefer to call? 215-362-2478",
  },
  whyUs: {
    items: [
      { title: "Experience that matters", body: "More than four decades focused on immigration and nationality law." },
      { title: "Honest assessments", body: "We tell you clearly where you stand and what your options are." },
      { title: "Global reach", body: "We've represented clients from over 50 countries." },
      { title: "A boutique approach", body: "You aren't a file number; you work directly with your attorney." },
    ],
  },
  howItWorks: {
    h2: "What to expect",
    steps: [
      { step: 1, title: "Submit", body: "Submit the form (or call 215-362-2478)." },
      { step: 2, title: "Review", body: "We review your matter — an attorney or team member looks at your situation." },
      { step: 3, title: "Schedule", body: "We respond within 24 business hours to schedule your consultation." },
    ],
  },
  faq: [
    {
      q: "What happens during a consultation?",
      a: "You will speak with an attorney (or a senior paralegal for certain matters) to discuss your situation, understand your goals, and get a preliminary assessment of your options.",
    },
    {
      q: "What does the consultation cost?",
      a: "We will confirm the consultation fee when you contact us, before anything is scheduled.",
    },
    {
      q: "Is my information confidential?",
      a: "Absolutely. Everything you share with us through this form or during your consultation is protected by attorney-client privilege.",
    },
  ],
  meta: {
    title: "Schedule an Immigration Consultation | Dobaria Law PC",
    description:
      "Schedule a consultation with the experienced immigration attorneys at Dobaria Law PC in Lansdale, PA. Tell us about your case today.",
  },
};

const es: typeof en = {
  hero: {
    eyebrow: "Agendar una Consulta",
    h1: "Hable con un Abogado de Inmigración con Experiencia",
    subhead:
      "Durante más de 45 años, Dobaria Law PC ha ayudado a personas, familias y empleadores en Filadelfia y el condado de Montgomery. Cuéntenos su situación y conversemos sobre cómo podemos ayudarle.",
    trustBullets: [
      "Más de cuatro décadas de experiencia.",
      "Evaluación detallada de su caso con un abogado calificado.",
      "Una valoración clara y honesta de sus opciones.",
    ],
  },
  form: {
    heading: "Solicite Su Consulta",
    submitLabel: "Solicitar Mi Consulta",
    microcopy:
      "Respondemos dentro de 24 horas hábiles. Su información es confidencial y está protegida por el secreto profesional entre abogado y cliente.",
    callAlternative: "¿Prefiere llamar? 215-362-2478",
  },
  whyUs: {
    items: [
      { title: "Experiencia que cuenta", body: "Más de cuatro décadas dedicadas al derecho migratorio y de nacionalidad." },
      { title: "Evaluaciones honestas", body: "Le decimos con claridad cuál es su situación y cuáles son sus opciones." },
      { title: "Alcance global", body: "Hemos representado a clientes de más de 50 países." },
      { title: "Un trato cercano", body: "Usted no es un número de expediente; trabaja directamente con su abogado." },
    ],
  },
  howItWorks: {
    h2: "Qué puede esperar",
    steps: [
      { step: 1, title: "Envíe", body: "Envíe el formulario (o llame al 215-362-2478)." },
      { step: 2, title: "Revisamos", body: "Revisamos su asunto: un abogado o miembro del equipo analiza su situación." },
      { step: 3, title: "Agendamos", body: "Respondemos dentro de 24 horas hábiles para agendar su consulta." },
    ],
  },
  faq: [
    {
      q: "¿Qué ocurre durante una consulta?",
      a: "Hablará con un abogado (o con un asistente legal senior en ciertos asuntos) para conversar sobre su situación, entender sus objetivos y recibir una evaluación preliminar de sus opciones.",
    },
    {
      q: "¿Cuál es el costo de la consulta?",
      a: "Le confirmaremos el costo de la consulta cuando se comunique con nosotros, antes de agendar cualquier cita.",
    },
    {
      q: "¿Mi información es confidencial?",
      a: "Por completo. Todo lo que comparta con nosotros a través de este formulario o durante su consulta está protegido por el secreto profesional entre abogado y cliente.",
    },
  ],
  meta: {
    title: "Agende una Consulta de Inmigración | Dobaria Law PC",
    description:
      "Agende una consulta con los abogados de inmigración con experiencia de Dobaria Law PC en Lansdale, PA. Cuéntenos sobre su caso hoy mismo.",
  },
};

export const scheduleConsultationContent = { en, es };

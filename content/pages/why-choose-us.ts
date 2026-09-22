// content/pages/why-choose-us.ts
//
// Locale-keyed page content. Components read `whyChooseUsContent[locale]`.

const en = {
  hero: {
    eyebrow: "Why Dobaria Law PC",
    h1: "Why Clients Choose Dobaria Law PC",
    subhead:
      "What sets us apart isn't a slogan — it's four decades of focused experience, a genuinely multilingual practice, and attorneys who treat your matter as their own.",
  },
  intro:
    "Choosing a lawyer is really about trust: Do they understand my situation? Will they be honest with me? Have they done this before? For more than 45 years, clients across Philadelphia and Montgomery County have answered yes. We are a boutique firm by design — small enough that a partner reads your file, large enough in experience to have handled a matter like yours many times before. The pages that follow explain, in plain terms, what that means for you.",
  differentiators: [
    { title: "Four decades of experience", body: "Marcia Binder Ibrahim founded the firm in 1981, and immigration and nationality law has been our foundation ever since. Forty-five years in one field is not a marketing line — it is the reason we can tell you early what a case is likely to require." },
    { title: "Credentialed counsel", body: "Our founding partner is admitted to practice before the U.S. Supreme Court, and the firm has been part of the American Immigration Lawyers Association (AILA) for more than 28 years. Those credentials reflect a standard of preparation we bring to every filing." },
    { title: "A truly global practice", body: "We have represented clients from more than 50 countries, and eight languages are spoken in-house. For people navigating an unfamiliar legal system, being understood in your own language is not a convenience — it is the difference between guessing and knowing." },
    { title: "Cross-practice insight", body: "Immigration, family, business, and real estate law sit under one roof. Because these areas overlap far more often than clients expect, having them handled together means the connections get caught instead of missed." },
    { title: "Honest, plain-language counsel", body: "We give clear assessments, including when the news is not what you hoped to hear. You will always understand where your matter stands and what the next step is, in language that does not require a law degree to follow." },
    { title: "A boutique, not a mill", body: "You work with attorneys who know your case by name, not a rotating queue of case handlers. When you call, you reach people who already understand your situation." },
  ],
  credentialsBand: [
    "45+ Years",
    "U.S. Supreme Court Admitted",
    "AILA Members 28+ Years",
    "Clients from 50+ Countries",
    "8 Languages",
    "Admitted in PA, NJ & NY",
  ],
  crossPractice: {
    h2: "Cross-Practice Advantage",
    body: "Many firms do one thing. Because we practice immigration alongside family, business, and real estate law, we catch the connections others miss — the divorce that affects a green card, the business that needs both entity and property work, the family matter with an international dimension. Almost no firm in our region handles immigration and family law under one roof, and that combination is where our clients get the most protection.",
    scenario:
      "Consider a common situation: a client comes to us for a divorce, but their permanent residence is conditional and tied to the marriage. Handled by a family lawyer alone, the divorce could quietly jeopardize the client's immigration status. Because we practice both, we plan the family case and the immigration filing together — protecting the client's status while the divorce proceeds. The same is true when a business owner needs to sponsor a key employee, or when a couple buying their first home also needs a visa question answered. One firm, one connected strategy, no gaps between attorneys who never speak to each other.",
  },
  commitment: {
    h2: "What you can expect from us",
    body: [
      "Every engagement starts with a confidential consultation and an honest read of your options — including the realistic timeline and the likely cost. We would rather set accurate expectations at the outset than promise an outcome no one can guarantee.",
      "From there, you get steady communication and meticulous preparation. Immigration adjudicators, courts, and title companies all reward documents that are complete and accurate the first time, and that is the standard we hold ourselves to. When something changes in your case, you hear it from us — not the other way around.",
    ],
  },
  multilingual: {
    h2: "We speak your language",
    body: "We speak English, Spanish, Gujarati, Hindi, German, Arabic, French, and Korean — because understanding your situation starts with understanding you.",
    languages: ["English", "Spanish", "German", "Arabic", "French", "Korean"],
  },
  faqs: [
    { q: "What makes a boutique firm different from a large one?", a: "At a boutique firm, the attorney who meets you is the attorney who handles your matter — not a paralegal or a rotating queue of case handlers. You get direct access, continuity, and counsel who know the details of your case by name." },
    { q: "Will I work with an attorney or a paralegal?", a: "You work directly with an attorney. Our partners are personally involved in the matters they take on, and you will always know who is responsible for your case." },
    { q: "Do you handle cases outside Pennsylvania?", a: "Yes. We represent immigration clients nationwide, and we are licensed in Pennsylvania and New Jersey for other matters. Consultations can be held by phone or video for clients outside the area." },
    { q: "What languages do you speak?", a: "We speak eight languages in-house: English, Spanish, Gujarati, Hindi, German, Arabic, French, and Korean. Se habla español." },
    { q: "How much experience does the firm have?", a: "The firm was founded in 1981 and has more than 45 years of experience, with clients from over 50 countries and attorneys who have been AILA members for 28+ years." },
  ],
  cta: {
    h2: "See the difference for yourself",
    primaryCta: { label: "Schedule a Consultation", href: "/contact" },
    support: "Or call 215-362-2478",
  },
  meta: {
    title: "Why Choose Dobaria Law PC | Immigration, PA",
    description:
      "45+ years, eight languages, clients from 50+ countries, and attorneys admitted to the U.S. Supreme Court. See why clients choose Dobaria Law PC.",
  },
};

const es: typeof en = {
  hero: {
    eyebrow: "Por Qué Dobaria Law PC",
    h1: "Por Qué los Clientes Eligen Dobaria Law PC",
    subhead:
      "Lo que nos distingue no es un eslogan: son cuatro décadas de experiencia enfocada, una práctica genuinamente multilingüe y abogados que tratan su caso como propio.",
  },
  intro:
    "Elegir un abogado es, en el fondo, una cuestión de confianza: ¿entiende mi situación? ¿será honesto conmigo? ¿ha hecho esto antes? Durante más de 45 años, clientes de Filadelfia y el condado de Montgomery han respondido que sí. Somos una firma boutique por decisión propia: lo bastante pequeña para que un socio lea su expediente y lo bastante experimentada para haber manejado muchas veces un asunto como el suyo. Las páginas que siguen explican, en términos claros, lo que eso significa para usted.",
  differentiators: [
    { title: "Cuatro décadas de experiencia", body: "Marcia Binder Ibrahim fundó la firma en 1981, y el derecho migratorio y de nacionalidad ha sido nuestra base desde entonces. Cuarenta y cinco años en un mismo campo no son una frase publicitaria: son la razón por la que podemos decirle desde el inicio qué requerirá probablemente su caso." },
    { title: "Credenciales sólidas", body: "Nuestra socia fundadora está admitida para ejercer ante la Corte Suprema de EE. UU., y la firma ha sido parte de la Asociación Americana de Abogados de Inmigración (AILA) por más de 28 años. Esas credenciales reflejan el estándar de preparación que aplicamos a cada presentación." },
    { title: "Una práctica verdaderamente global", body: "Hemos representado a clientes de más de 50 países y se hablan ocho idiomas dentro de la firma. Para quien enfrenta un sistema legal desconocido, ser comprendido en su propio idioma no es una comodidad: es la diferencia entre adivinar y saber." },
    { title: "Visión entre áreas de práctica", body: "Inmigración, derecho familiar, corporativo e inmobiliario conviven bajo un mismo techo. Como estas áreas se cruzan mucho más de lo que los clientes esperan, atenderlas juntas significa detectar las conexiones en lugar de pasarlas por alto." },
    { title: "Asesoría honesta y en lenguaje claro", body: "Damos evaluaciones claras, incluso cuando la noticia no es la que esperaba escuchar. Siempre entenderá en qué punto está su asunto y cuál es el siguiente paso, en un lenguaje que no exige un título en derecho." },
    { title: "Una firma boutique, no una fábrica de casos", body: "Trabaja con abogados que conocen su caso por nombre, no con una fila rotativa de gestores. Cuando llama, habla con personas que ya entienden su situación." },
  ],
  credentialsBand: [
    "Más de 45 Años",
    "Admitidos ante la Corte Suprema de EE. UU.",
    "Miembros de AILA por más de 28 Años",
    "Clientes de más de 50 Países",
    "8 Idiomas",
    "Admitidos en PA, NJ y NY",
  ],
  crossPractice: {
    h2: "La Ventaja de Practicar Varias Áreas",
    body: "Muchas firmas hacen una sola cosa. Como practicamos inmigración junto con derecho familiar, corporativo e inmobiliario, detectamos las conexiones que otros pasan por alto: el divorcio que afecta una green card, el negocio que necesita tanto constitución como trabajo de propiedad, el asunto familiar con una dimensión internacional. Casi ninguna firma en nuestra región atiende inmigración y derecho familiar bajo un mismo techo, y esa combinación es donde nuestros clientes obtienen la mayor protección.",
    scenario:
      "Considere una situación común: un cliente acude a nosotros por un divorcio, pero su residencia permanente es condicional y está ligada al matrimonio. Atendido solo por un abogado de familia, el divorcio podría poner en riesgo silenciosamente su estatus migratorio. Como practicamos ambas áreas, planificamos el caso familiar y la presentación migratoria en conjunto, protegiendo el estatus del cliente mientras avanza el divorcio. Lo mismo ocurre cuando el dueño de un negocio necesita patrocinar a un empleado clave, o cuando una pareja que compra su primera casa también tiene una duda sobre visas. Una firma, una estrategia conectada, sin vacíos entre abogados que nunca se hablan.",
  },
  commitment: {
    h2: "Qué puede esperar de nosotros",
    body: [
      "Cada caso comienza con una consulta confidencial y una lectura honesta de sus opciones, incluidos el plazo realista y el costo probable. Preferimos establecer expectativas precisas desde el inicio antes que prometer un resultado que nadie puede garantizar.",
      "A partir de ahí, recibe comunicación constante y una preparación meticulosa. Los funcionarios de inmigración, los tribunales y las compañías de títulos recompensan los documentos completos y correctos desde la primera vez, y ese es el estándar que nos exigimos. Cuando algo cambia en su caso, lo escucha de nosotros, no al revés.",
    ],
  },
  multilingual: {
    h2: "Hablamos su idioma",
    body: "Hablamos inglés, español, guyaratí, hindi, alemán, árabe, francés y coreano, porque entender su situación empieza por entenderlo a usted.",
    languages: ["Inglés", "Español", "Alemán", "Árabe", "Francés", "Coreano"],
  },
  faqs: [
    { q: "¿Qué diferencia a una firma boutique de una grande?", a: "En una firma boutique, el abogado que lo recibe es el abogado que maneja su asunto, no un asistente legal ni una fila rotativa de gestores. Obtiene acceso directo, continuidad y abogados que conocen los detalles de su caso por nombre." },
    { q: "¿Trabajaré con un abogado o con un asistente legal?", a: "Trabaja directamente con un abogado. Nuestros socios participan personalmente en los asuntos que aceptan, y usted siempre sabrá quién es responsable de su caso." },
    { q: "¿Manejan casos fuera de Pensilvania?", a: "Sí. Representamos a clientes de inmigración en todo el país y estamos autorizados en Pensilvania y Nueva Jersey para otros asuntos. Las consultas pueden realizarse por teléfono o video para clientes fuera del área." },
    { q: "¿Qué idiomas hablan?", a: "Hablamos ocho idiomas dentro de la firma: inglés, español, guyaratí, hindi, alemán, árabe, francés y coreano. Se habla español." },
    { q: "¿Cuánta experiencia tiene la firma?", a: "La firma fue fundada en 1981 y cuenta con más de 45 años de experiencia, con clientes de más de 50 países y abogados que han sido miembros de AILA por más de 28 años." },
  ],
  cta: {
    h2: "Compruebe la diferencia usted mismo",
    primaryCta: { label: "Agendar una Consulta", href: "/contact" },
    support: "O llame al 215-362-2478",
  },
  meta: {
    title: "Por Qué Elegir Dobaria Law PC | Inmigración, PA",
    description:
      "Más de 45 años, ocho idiomas, clientes de más de 50 países y abogados admitidos ante la Corte Suprema de EE. UU. Vea por qué los clientes eligen Dobaria Law PC.",
  },
};

export const whyChooseUsContent = { en, es };

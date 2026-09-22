// content/attorneys/index.ts
// Individual attorney bio data

export interface AttorneyBio {
  slug: string;
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  meta: { title: string; description: string };
  hero: { cta: { label: string; href: string }; phone: string };
  narrative: string[];
  credentials: string[];
  practiceFocus: string[];
  languages: string[];
  education: string[];
  admissions: string[];
  memberships: string[];
}

const en: AttorneyBio[] = [
  {
    slug: "marcia-binder-ibrahim",
    name: "Marcia Binder Ibrahim, Esq.",
    title: "Founding Member & Of Counsel",
    image: "/images/attorneys/marcia.webp",
    imageAlt: "Marcia Binder Ibrahim, Founding Member, Dobaria Law PC",
    meta: {
      title: "Marcia Binder Ibrahim, Immigration Attorney | Lansdale, PA",
      description:
        "Marcia Binder Ibrahim is a founding member of Dobaria Law PC with 35+ years in U.S. immigration and family law. Admitted before the U.S. Supreme Court; AILA member 28+ years.",
    },
    hero: {
      cta: { label: "Schedule a Consultation", href: "/contact" },
      phone: "215-362-2478",
    },
    narrative: [
      "Marcia Binder Ibrahim is a founding member and senior attorney of the firm, and now serves Of Counsel. Across more than thirty-five years of practice she has represented individuals, families, and employers in matters of U.S. immigration and nationality law, with a companion practice in family law that lets her handle the two areas together when a client's status and family situation are intertwined.",
      "Marcia earned her J.D. from Villanova University School of Law in 1979 and is admitted in Pennsylvania and New Jersey, as well as before the United States Supreme Court, the Second and Third Circuit Courts, and the U.S. District Courts for New Jersey and the Eastern District of Pennsylvania. She co-chairs the Montgomery Bar Association's Immigration Committee, serves on its Family Law Committee, and was recently recognized by the Philadelphia Chapter of the American Immigration Lawyers Association for twenty-eight years of membership.",
    ],
    credentials: [
      "35+ years in practice — founding member of the firm",
      "Admitted to practice before the U.S. Supreme Court",
      "Member, American Immigration Lawyers Association (AILA), 28+ years",
      "Co-Chair, Immigration Committee, Montgomery Bar Association",
    ],
    practiceFocus: [
      "Immigration & Nationality Law",
      "Family Law",
      "Family-Based & Employment-Based Petitions",
      "Naturalization",
      "Consular Processing",
      "Federal Appeals",
    ],
    languages: ["English", "Spanish", "German"],
    education: ["J.D., Villanova University School of Law (1979)"],
    admissions: [
      "Pennsylvania",
      "New Jersey",
      "U.S. Supreme Court",
      "Second & Third Circuit Courts",
      "U.S. District Court — District of New Jersey",
      "U.S. District Court — Eastern District of Pennsylvania",
    ],
    memberships: [
      "American Immigration Lawyers Association (AILA), Philadelphia Chapter — 28 years",
      "Montgomery Bar Association — Immigration Committee Co-Chair",
      "Montgomery Bar Association — Family Law Committee",
    ],
  },
  {
    slug: "vishal-j-dobaria",
    name: "Vishal J. Dobaria, Esq.",
    title: "Managing Attorney",
    image: "/images/attorneys/vishal.webp",
    imageAlt: "Vishal J. Dobaria, Managing Attorney, Dobaria Law PC",
    meta: {
      title: "Vishal J. Dobaria, Attorney | Real Estate & Immigration Law",
      description:
        "Vishal J. Dobaria is Managing Attorney at Dobaria Law PC. Over a decade in immigration, real estate, business & family law, with title experience across 18 states.",
    },
    hero: {
      cta: { label: "Schedule a Consultation", href: "/contact" },
      phone: "215-362-2478",
    },
    narrative: [
      "Vishal J. Dobaria is the firm's Managing Attorney and leads its day-to-day practice across immigration, real estate, business, and family law. With more than a decade of experience — including time as a solo practitioner and a tenure at a prominent global law firm in Philadelphia — he brings a broad, connected view to matters that many attorneys treat in isolation.",
      "At his prior firm, Vishal led the real estate title portfolio spanning eighteen states, and he continues to represent buyers, sellers, and lenders in residential and commercial transactions while advising businesses on formation, contracts, and agreements. His immigration work covers visas, petitions, and naturalization applications. Raised in Montgomery County, where he still lives, he earned a B.A. from Temple University, an M.A. from Saint Joseph's University, and his J.D. from Western Michigan University Cooley Law School.",
    ],
    credentials: [
      "Over a decade in practice — Managing Attorney",
      "Led an 18-state real estate title portfolio at a prior global firm",
      "Practices immigration, real estate, business & family law",
    ],
    practiceFocus: [
      "Immigration Law",
      "Real Estate Law",
      "Business Law",
      "Family Law",
      "Title & Closings (18 states)",
      "Entity Formation & Contracts",
    ],
    languages: ["English", "Gujarati", "Hindi"],
    education: [
      "J.D., Western Michigan University Cooley Law School",
      "M.A., Saint Joseph's University",
      "B.A., Temple University",
    ],
    admissions: ["Pennsylvania", "New Jersey", "Nationwide (immigration matters)"],
    memberships: [
      "American Immigration Lawyers Association (AILA)",
      "Montgomery Bar Association",
    ],
  },
  {
    slug: "jose-m-lugo",
    name: "Jose M. Lugo, J.D., Ph.D.",
    title: "Immigration Attorney",
    image: "/images/attorneys/jose.png",
    imageAlt: "Jose M. Lugo, Immigration Attorney, Dobaria Law PC",
    meta: {
      title: "Jose M. Lugo, J.D., Ph.D. — Immigration Attorney | Lansdale, PA",
      description:
        "Jose M. Lugo, J.D., Ph.D. is an immigration attorney at Dobaria Law PC. Bilingual in English and Spanish, focusing on visas, green cards, asylum, deportation defense, and citizenship.",
    },
    hero: {
      cta: { label: "Schedule a Consultation", href: "/contact" },
      phone: "215-362-2478",
    },
    narrative: [
      "Jose M. Lugo brings a distinctive combination of legal and academic training to the firm's immigration practice, holding both a Juris Doctor and a Ph.D. in Political Science. His scholarly background in how governments and legal systems work informs a practical, thorough approach to the immigration process — from the first filing to the final decision.",
      "Bilingual and fluent in both English and Spanish, Jose focuses on delivering culturally competent representation to the communities the firm serves. His practice concentrates on immigration law, including visas, green cards, asylum, deportation defense, and citizenship matters, guiding clients through each step with clear, direct communication.",
    ],
    credentials: [
      "Juris Doctor (J.D.)",
      "Ph.D. in Political Science",
      "Bilingual — English & Spanish",
      "Culturally competent immigration representation",
    ],
    practiceFocus: [
      "Immigration Law",
      "Visas",
      "Green Cards",
      "Asylum",
      "Deportation Defense",
      "Citizenship & Naturalization",
    ],
    languages: ["English", "Spanish"],
    education: ["Juris Doctor (J.D.)", "Ph.D., Political Science"],
    admissions: [],
    memberships: [],
  },
];

const es: AttorneyBio[] = [
  {
    slug: "marcia-binder-ibrahim",
    name: "Marcia Binder Ibrahim, Esq.",
    title: "Miembro Fundador y Of Counsel",
    image: "/images/attorneys/marcia.webp",
    imageAlt: "Marcia Binder Ibrahim, Miembro Fundador, Dobaria Law PC",
    meta: {
      title: "Marcia Binder Ibrahim, Abogada de Inmigración | Lansdale, PA",
      description:
        "Marcia Binder Ibrahim es miembro fundador de Dobaria Law PC con más de 35 años en derecho migratorio y familiar de EE. UU. Admitida ante la Corte Suprema de EE. UU.; miembro de AILA por más de 28 años.",
    },
    hero: {
      cta: { label: "Agendar una Consulta", href: "/contact" },
      phone: "215-362-2478",
    },
    narrative: [
      "Marcia Binder Ibrahim es miembro fundador y abogada senior de la firma, y actualmente se desempeña como Of Counsel. A lo largo de más de treinta y cinco años de ejercicio ha representado a personas, familias y empleadores en asuntos de inmigración y nacionalidad de EE. UU., con una práctica complementaria en derecho familiar que le permite atender ambas áreas en conjunto cuando el estatus de un cliente y su situación familiar están entrelazados.",
      "Marcia obtuvo su J.D. en la Facultad de Derecho de Villanova University en 1979 y está admitida en Pensilvania y Nueva Jersey, así como ante la Corte Suprema de Estados Unidos, los Tribunales del Segundo y Tercer Circuito y los Tribunales de Distrito de EE. UU. para Nueva Jersey y el Distrito Este de Pensilvania. Copreside el Comité de Inmigración del Colegio de Abogados del Condado de Montgomery, integra su Comité de Derecho Familiar y fue reconocida recientemente por el Capítulo de Filadelfia de la Asociación Americana de Abogados de Inmigración por veintiocho años de membresía.",
    ],
    credentials: [
      "Más de 35 años de ejercicio — miembro fundador de la firma",
      "Admitida para ejercer ante la Corte Suprema de EE. UU.",
      "Miembro de la Asociación Americana de Abogados de Inmigración (AILA), más de 28 años",
      "Copresidenta del Comité de Inmigración, Colegio de Abogados del Condado de Montgomery",
    ],
    practiceFocus: [
      "Derecho Migratorio y de Nacionalidad",
      "Derecho Familiar",
      "Peticiones por Familia y por Empleo",
      "Naturalization",
      "Trámite Consular",
      "Apelaciones Federales",
    ],
    languages: ["English", "Spanish", "German"],
    education: ["J.D., Facultad de Derecho de Villanova University (1979)"],
    admissions: [
      "Pennsylvania",
      "Nueva Jersey",
      "Corte Suprema de EE. UU.",
      "Tribunales del Segundo y Tercer Circuito",
      "Tribunal de Distrito de EE. UU. — Distrito de Nueva Jersey",
      "Tribunal de Distrito de EE. UU. — Distrito Este de Pensilvania",
    ],
    memberships: [
      "Asociación Americana de Abogados de Inmigración (AILA), Capítulo de Filadelfia — 28 años",
      "Colegio de Abogados del Condado de Montgomery — Copresidencia del Comité de Inmigración",
      "Colegio de Abogados del Condado de Montgomery — Comité de Derecho Familiar",
    ],
  },
  {
    slug: "vishal-j-dobaria",
    name: "Vishal J. Dobaria, Esq.",
    title: "Abogado Director",
    image: "/images/attorneys/vishal.webp",
    imageAlt: "Vishal J. Dobaria, Abogado Director, Dobaria Law PC",
    meta: {
      title: "Vishal J. Dobaria, Abogado | Derecho Inmobiliario y Migratorio",
      description:
        "Vishal J. Dobaria es Abogado Director en Dobaria Law PC. Más de una década en derecho migratorio, inmobiliario, corporativo y familiar, con experiencia en títulos en 18 estados.",
    },
    hero: {
      cta: { label: "Agendar una Consulta", href: "/contact" },
      phone: "215-362-2478",
    },
    narrative: [
      "Vishal J. Dobaria es el Abogado Director de la firma y dirige su práctica diaria en derecho migratorio, inmobiliario, corporativo y familiar. Con más de una década de experiencia —incluido su ejercicio como abogado independiente y un periodo en una destacada firma global en Filadelfia— aporta una visión amplia y conectada a asuntos que muchos abogados tratan de forma aislada.",
      "En su firma anterior, Vishal dirigió la cartera de títulos inmobiliarios que abarcaba dieciocho estados, y sigue representando a compradores, vendedores y prestamistas en transacciones residenciales y comerciales, además de asesorar a empresas en constitución, contratos y acuerdos. Su trabajo migratorio abarca visas, peticiones y solicitudes de naturalización. Criado en el condado de Montgomery, donde aún vive, obtuvo un B.A. de Temple University, un M.A. de Saint Joseph's University y su J.D. de Western Michigan University Cooley Law School.",
    ],
    credentials: [
      "Más de una década de ejercicio — Abogado Director",
      "Dirigió una cartera de títulos inmobiliarios en 18 estados en una firma global anterior",
      "Ejerce en derecho migratorio, inmobiliario, corporativo y familiar",
    ],
    practiceFocus: [
      "Ley de Inmigración",
      "Derecho Inmobiliario",
      "Derecho Corporativo",
      "Derecho Familiar",
      "Títulos y Cierres (18 estados)",
      "Constitución de Entidades y Contratos",
    ],
    languages: ["English", "Gujarati", "Hindi"],
    education: [
      "J.D., Western Michigan University Cooley Law School",
      "M.A., Saint Joseph's University",
      "B.A., Temple University",
    ],
    admissions: ["Pennsylvania", "Nueva Jersey", "Todo el país (asuntos migratorios)"],
    memberships: [
      "Asociación Americana de Abogados de Inmigración (AILA)",
      "Colegio de Abogados del Condado de Montgomery",
    ],
  },
  {
    slug: "jose-m-lugo",
    name: "Jose M. Lugo, J.D., Ph.D.",
    title: "Abogado de Inmigración",
    image: "/images/attorneys/jose.png",
    imageAlt: "Jose M. Lugo, Abogado de Inmigración, Dobaria Law PC",
    meta: {
      title: "Jose M. Lugo, J.D., Ph.D. — Abogado de Inmigración | Lansdale, PA",
      description:
        "Jose M. Lugo, J.D., Ph.D. es abogado de inmigración en Dobaria Law PC. Bilingüe en inglés y español, con enfoque en visas, green cards, asilo, defensa contra la deportación y ciudadanía.",
    },
    hero: {
      cta: { label: "Agendar una Consulta", href: "/contact" },
      phone: "215-362-2478",
    },
    narrative: [
      "Jose M. Lugo aporta una combinación singular de formación jurídica y académica a la práctica migratoria de la firma, con un Juris Doctor y un doctorado en Ciencias Políticas. Su formación académica sobre el funcionamiento de los gobiernos y los sistemas legales nutre un enfoque práctico y exhaustivo del proceso migratorio, desde la primera presentación hasta la decisión final.",
      "Bilingüe y con dominio pleno del inglés y el español, Jose se enfoca en ofrecer una representación culturalmente competente a las comunidades que atiende la firma. Su práctica se concentra en derecho migratorio, incluidas visas, green cards, asilo, defensa contra la deportación y asuntos de ciudadanía, guiando a sus clientes en cada paso con una comunicación clara y directa.",
    ],
    credentials: [
      "Juris Doctor (J.D.)",
      "Doctorado en Ciencias Políticas",
      "Bilingüe — Inglés y Español",
      "Representación migratoria culturalmente competente",
    ],
    practiceFocus: [
      "Ley de Inmigración",
      "Visas",
      "Green Cards",
      "Asylum",
      "Defensa contra la Deportación",
      "Ciudadanía y Naturalización",
    ],
    languages: ["English", "Spanish"],
    education: ["Juris Doctor (J.D.)", "Doctorado en Ciencias Políticas"],
    admissions: [],
    memberships: [],
  },
];

export const attorneyBios = { en, es };

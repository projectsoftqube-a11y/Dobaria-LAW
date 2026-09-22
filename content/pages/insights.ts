// content/pages/insights.ts
//
// Locale-keyed page content. Components read `insightsContent[locale]`.
// The article list itself lives in content/insights/index.ts; only the page
// furniture is here.

const en = {
  hero: {
    eyebrow: "Legal Insights",
    h1: "Plain-Language Guidance From Our Attorneys",
    subhead:
      "Articles on the immigration, family, business, and real estate changes that matter most to clients in Lansdale, Montgomery County, and beyond.",
  },
  categories: ["Immigration", "Family Law", "Business", "Real Estate"],
  allCategories: "All",
  readMore: "Read Article",
  readTimeSuffix: "min read",
  cta: {
    h2: "Have a question about your own matter?",
    primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  },
  meta: {
    title: "Legal Insights & Immigration Blog | Dobaria Law PC",
    description:
      "Plain-language guidance on immigration, family, business & real estate law from the attorneys at Dobaria Law PC in Lansdale, PA. Read our latest insights.",
  },
};

const es: typeof en = {
  hero: {
    eyebrow: "Publicaciones Legales",
    h1: "Orientación en Lenguaje Claro de Nuestros Abogados",
    subhead:
      "Artículos sobre los cambios en inmigración, derecho familiar, corporativo e inmobiliario que más importan a nuestros clientes en Lansdale, el condado de Montgomery y más allá.",
  },
  categories: ["Inmigración", "Derecho Familiar", "Negocios", "Bienes Raíces"],
  allCategories: "Todas",
  readMore: "Leer Artículo",
  readTimeSuffix: "min de lectura",
  cta: {
    h2: "¿Tiene una pregunta sobre su propio asunto?",
    primaryCta: { label: "Agendar una Consulta", href: "/contact" },
  },
  meta: {
    title: "Publicaciones Legales y Blog de Inmigración | Dobaria Law PC",
    description:
      "Orientación en lenguaje claro sobre derecho migratorio, familiar, corporativo e inmobiliario, de los abogados de Dobaria Law PC en Lansdale, PA.",
  },
};

export const insightsContent = { en, es };

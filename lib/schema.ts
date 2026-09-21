// lib/schema.ts — Shared JSON-LD helpers (centralized per V5 audit)

const SITE = "https://dobarialaw.com";

export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE}/#organization`,
  name: "Dobaria Law PC",
  url: SITE,
  telephone: "+1-215-362-2478",
  email: "notice@dobarialaw.com",
  foundingDate: "1981",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2031 N. Broad Street, Unit 129",
    addressLocality: "Lansdale",
    addressRegion: "PA",
    postalCode: "19446",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.2415,
    longitude: -75.2838,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Lansdale" },
    { "@type": "AdministrativeArea", name: "Montgomery County" },
    { "@type": "City", name: "Philadelphia" },
    { "@type": "Country", name: "United States" },
  ],
  knowsLanguage: ["en", "es", "gu", "hi", "de", "ar", "fr", "ko"],
  availableLanguage: [
    "English", "Spanish", "Gujarati", "Hindi",
    "German", "Arabic", "French", "Korean",
  ],
  // Public profiles Google can link to the firm. Add Instagram and X here
  // once those accounts exist.
  sameAs: [
    "https://www.linkedin.com/company/ibrahim-dobaria-law-pllc",
    "https://www.facebook.com/p/Law-Office-of-Marcia-Binder-Ibrahim-100043954827038/",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#org`,
  name: "Dobaria Law PC",
  url: SITE,
  logo: `${SITE}/og/default.png`,
  telephone: "+1-215-362-2478",
  email: "notice@dobarialaw.com",
  foundingDate: "1981",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2031 N. Broad Street, Unit 129",
    addressLocality: "Lansdale",
    addressRegion: "PA",
    postalCode: "19446",
    addressCountry: "US",
  },
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  name: "Dobaria Law PC",
  url: SITE,
  publisher: { "@id": `${SITE}/#organization` },
};

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE}${service.url}#service`,
    name: service.name,
    description: service.description,
    url: `${SITE}${service.url}`,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: [
      { "@type": "City", name: "Lansdale" },
      { "@type": "AdministrativeArea", name: "Montgomery County" },
      { "@type": "City", name: "Philadelphia" },
    ],
  };
}

export function attorneySchema(attorney: {
  name: string;
  jobTitle: string;
  url: string;
  image: string;
  languages: string[];
  alumniOf: string;
  knowsAbout: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: attorney.name,
    jobTitle: attorney.jobTitle,
    worksFor: { "@id": `${SITE}/#organization` },
    url: `${SITE}${attorney.url}`,
    image: `${SITE}${attorney.image}`,
    knowsLanguage: attorney.languages,
    alumniOf: attorney.alumniOf,
    knowsAbout: attorney.knowsAbout,
  };
}

export function blogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  authorUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE}${post.url}`,
    datePublished: post.datePublished,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE}${post.authorUrl}`,
    },
    publisher: { "@id": `${SITE}/#organization` },
  };
}

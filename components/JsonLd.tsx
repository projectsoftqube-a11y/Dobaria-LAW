// components/JsonLd.tsx
// Reusable JSON-LD structured data component

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonLdArray = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLdArray.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}


// Pre-built schema generators
export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://dobarialaw.com/#firm",
    name: "Dobaria Law PC",
    url: "https://dobarialaw.com/",
    telephone: "+1-215-362-2478",
    email: "info@dobarialaw.com",
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
    areaServed: [
      "Lansdale",
      "Montgomery County",
      "Philadelphia",
      "Pennsylvania",
      "New Jersey",
    ],
    knowsLanguage: ["English", "Spanish", "German", "Arabic", "French", "Korean"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
    ],
  };
}

export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://dobarialaw.com${item.href}`,
    })),
  };
}

export function getAttorneySchema(attorney: {
  name: string;
  jobTitle: string;
  url: string;
  image: string;
  languages: string[];
  alumniOf: string;
  memberOf: string;
  knowsAbout: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: attorney.name,
    jobTitle: attorney.jobTitle,
    worksFor: {
      "@type": "LegalService",
      name: "Dobaria Law PC",
    },
    url: `https://dobarialaw.com${attorney.url}`,
    image: `https://dobarialaw.com${attorney.image}`,
    knowsLanguage: attorney.languages,
    alumniOf: attorney.alumniOf,
    memberOf: attorney.memberOf,
    knowsAbout: attorney.knowsAbout,
  };
}

export function getBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  authorUrl: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://dobarialaw.com${post.url}`,
    mainEntityOfPage: `https://dobarialaw.com${post.url}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    ...(post.image ? { image: `https://dobarialaw.com${post.image}` } : {}),
    author: {
      "@type": "Attorney",
      name: post.author,
      url: `https://dobarialaw.com${post.authorUrl}`,
    },
    publisher: {
      "@id": "https://dobarialaw.com/#organization",
    },
  };
}

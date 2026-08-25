// content/pages/insights.ts
export const insightsContent = {
  hero: {
    eyebrow: "Legal Insights",
    h1: "Plain-Language Guidance From Our Attorneys",
    subhead:
      "Articles on the immigration, family, business, and real estate changes that matter most to clients in Lansdale, Montgomery County, and beyond.",
  },
  categories: ["Immigration", "Family Law", "Business", "Real Estate"],
  posts: [
    { slug: "h1b-2026-cap-season", title: "H-1B Cap Season 2026: What Employers and Applicants Need to Know", category: "Immigration" },
    { slug: "green-card-process-timeline", title: "How Long Does the Green Card Process Take? A 2026 Timeline", category: "Immigration" },
    { slug: "international-custody-cases", title: "International Custody Disputes: How Cross-Border Cases Work", category: "Family Law" },
    { slug: "forming-an-llc-in-pa", title: "How to Form an LLC in Pennsylvania: A Step-by-Step Guide", category: "Business" },
    { slug: "deportation-defense-guide", title: "Deportation Defense: What to Do If You or a Loved One Faces Removal", category: "Immigration" },
    { slug: "eb5-investor-visa-guide", title: "The EB-5 Investor Visa, Explained", category: "Immigration" },
  ],
  newsletter: {
    heading: "Subscribe to our Newsletter",
    body: "Subscribe for occasional updates on immigration and legal changes that affect our community. No spam — just useful, plain-language guidance.",
    buttonLabel: "Subscribe",
  },
  cta: {
    h2: "Have a question about your own matter?",
    primaryCta: {
      label: "Schedule a Consultation",
      href: "/contact",
    },
  },
  meta: {
    title: "Legal Insights & Immigration Blog | Dobaria Law PC",
    description:
      "Plain-language guidance on immigration, family, business & real estate law from the attorneys at Dobaria Law PC in Lansdale, PA. Read our latest insights.",
  },
} as const;

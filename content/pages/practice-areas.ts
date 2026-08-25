// content/pages/practice-areas.ts
export const practiceAreasHub = {
  hero: {
    eyebrow: "Serving Lansdale, Montgomery County & Philadelphia",
    h1: "Practice Areas: Immigration, Family, Business & Real Estate Law",
    subhead:
      "For more than 45 years, Dobaria Law PC has represented individuals, families, and employers across a focused set of practice areas — led by immigration and nationality law, and extending into family, business, and real estate matters.",
    primaryCta: { label: "Schedule a Consultation", href: "/contact" },
    secondaryCta: { label: "Call 215-362-2478", href: "tel:+12153622478" },
  },
  intro: [
    "Dobaria Law PC is a boutique immigration law firm in Lansdale, Pennsylvania. Since 1981, our work has centered on the moments that change people's lives — securing lawful status, reuniting families, building businesses, and closing on property. We keep our practice deliberately focused so that every matter benefits from real depth rather than broad generalization.",
    "Below are the eight areas we practice. Immigration is our foundation, and because immigration so often intersects with family and business decisions, we're able to advise clients through the full arc of a situation rather than a single piece of it. Select any area to learn how we approach it.",
  ],
  groups: [
    {
      heading: "Immigration & Nationality Law",
      areas: [
        { title: "Immigration Law", body: "We guide individuals, families, and employers through every stage of the U.S. immigration process, from first filings to complex appeals.", href: "/practice-areas/immigration-law", linkText: "Learn about our immigration practice" },
        { title: "Green Cards & Visas", body: "Family-based and employment-based green cards, consular processing, adjustment of status, and the full range of nonimmigrant visas.", href: "/practice-areas/green-cards-visas", linkText: "Explore green cards & visas" },
        { title: "Citizenship & Naturalization", body: "Naturalization, derivative citizenship, and guidance through complex eligibility questions.", href: "/practice-areas/citizenship-naturalization", linkText: "Learn about naturalization" },
        { title: "Deportation Defense", body: "Representation in removal proceedings before the immigration courts and the Board of Immigration Appeals.", href: "/practice-areas/deportation-defense", linkText: "Learn about deportation defense" },
      ],
    },
    {
      heading: "Family Law",
      areas: [
        { title: "Family Law", body: "Divorce, custody, support, and prenuptial agreements handled with discretion and steady judgment.", href: "/practice-areas/family-law", linkText: "Learn about family law" },
        { title: "International Divorce", body: "Cross-border divorce and custody matters involving foreign jurisdictions, dual citizenship, and international assets.", href: "/practice-areas/international-divorce", linkText: "Learn about international divorce" },
      ],
    },
    {
      heading: "Business & Real Estate Law",
      areas: [
        { title: "Business Law", body: "Entity formation, contracts, commercial transactions, and ongoing counsel for closely held businesses.", href: "/practice-areas/business-law", linkText: "Learn about business law" },
        { title: "Real Estate Law", body: "Residential and commercial real estate matters, including title work, closings, and multi-state transactions across eighteen states.", href: "/practice-areas/real-estate-law", linkText: "Learn about real estate law" },
      ],
    },
  ],
  trustBand: ["45+ Years of Counsel", "50+ Countries Served", "6 Languages Spoken", "Admitted in PA, NJ & NY"],
  helper: {
    h2: "Not sure which area fits your situation?",
    body: "Many matters cross more than one practice area — an immigration case can involve family law, and a business can raise real estate questions. If you're unsure where you fit, start with a free consultation and we'll point you in the right direction.",
    cta: { label: "Schedule a Consultation", href: "/contact" },
  },
  faqs: [
    { q: "What types of law does Dobaria Law PC practice?", a: "We focus on immigration and nationality law, and also handle family law, international divorce, business law, and real estate law. Immigration is our core practice." },
    { q: "Is the firm primarily an immigration law firm?", a: "Yes. Immigration and nationality law has been our foundation since 1981, and it informs how we handle related family and business matters." },
    { q: "Do you serve clients outside Lansdale?", a: "We serve Lansdale, Montgomery County, and Philadelphia, and represent immigration clients nationwide. We're licensed in Pennsylvania and New Jersey for other matters." },
    { q: "What languages does the firm speak?", a: "English, Spanish, German, Arabic, French, and Korean." },
    { q: "How do I know which practice area I need?", a: "You don't have to know. Book a free initial consultation and we'll identify the right approach — including where a matter spans more than one area." },
  ],
  finalCta: {
    h2: "Begin with a free consultation",
    body: "Tell us about your matter and we'll respond within 24 business hours.",
    cta: { label: "Schedule a Consultation", href: "/contact" },
  },
  meta: {
    title: "Legal Practice Areas in Lansdale, PA | Dobaria Law PC",
    description:
      "Immigration, green cards, citizenship, deportation defense, family, business & real estate law — trusted counsel in Lansdale & Montgomery County for 45+ years.",
  },
} as const;

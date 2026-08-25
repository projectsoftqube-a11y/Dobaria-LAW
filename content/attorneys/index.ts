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

export const attorneyBios: AttorneyBio[] = [
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
      "Real Estate Law",
      "Business Law",
      "Immigration Law",
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

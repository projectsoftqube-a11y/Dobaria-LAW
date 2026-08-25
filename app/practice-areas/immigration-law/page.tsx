import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PracticeAreaClient from "../[slug]/PracticeAreaClient";

interface ServiceItem {
  title: string;
  description: string;
}

interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

interface PracticeData {
  slug: string;
  title: string;
  h1: string;
  category: string;
  heroSubtitle: string;
  overview: string[];
  servicesTitle: string;
  services: ServiceItem[];
  processTitle: string;
  process: ProcessItem[];
  faqs: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
}

const practiceAreasData: Record<string, PracticeData> = {
  "immigration-law": {
    slug: "immigration-law",
    title: "Immigration Law",
    category: "Immigration & Citizenship",
    heroSubtitle: "Decades of experience guiding individuals, families, and employers through every stage of U.S. immigration.",
    overview: [
      "Navigating the complex landscape of U.S. immigration law requires more than just filling out forms. It demands a strategic approach tailored to your specific circumstances. Our firm has spent more than four decades representing individuals, families, and employers in matters of U.S. immigration and nationality law.",
      "Whether you are seeking to sponsor a family member, obtain a temporary work visa, naturalize as a U.S. citizen, or defend against deportation, we provide the experienced guidance you need. We understand that immigration decisions have a profound impact on your life, your family, and your business."
    ],
    servicesTitle: "Scope of Immigration Representation",
    services: [
      {
        title: "Family-Based Petitions",
        description: "Guiding clients through marriage-based petitions, immediate relative sponsorships, and family preference categories with absolute care."
      },
      {
        title: "Employment-Based Visas",
        description: "Assisting employers and individuals with nonimmigrant work visas (H-1B, L-1, O-1) and permanent residency options."
      },
      {
        title: "Consular Processing & Adjustment of Status",
        description: "Helping clients navigate the steps required to obtain their green cards, whether from within the United States or at a U.S. embassy abroad."
      },
      {
        title: "Appeals & Litigation",
        description: "Representing clients before the Board of Immigration Appeals (BIA) and federal appellate courts in complex immigration cases."
      }
    ],
    processTitle: "Your Legal Journey: Step-by-Step",
    process: [
      {
        step: "01",
        title: "Personalized Consultation",
        description: "We evaluate your eligibility, background, and long-term goals to chart a clear, personalized legal strategy."
      },
      {
        step: "02",
        title: "Evidence & Document Gathering",
        description: "We work closely with you to collect and organize all necessary evidence, supporting records, and documentation."
      },
      {
        step: "03",
        title: "Rigorous Review & Submission",
        description: "We thoroughly audit every detail of your application before filing it with USCIS or the relevant agency."
      },
      {
        step: "04",
        title: "Representation & Resolution",
        description: "We prepare you for interviews, handle requests for evidence (RFEs), and guide you through the final decision."
      }
    ],
    h1: "Immigration Lawyers Serving Philadelphia & Lansdale, PA",
    faqs: [
      { q: "How much does an immigration lawyer cost?", a: "Fees depend on the complexity of your matter. We explain the fee structure clearly at your initial consultation, which is free." },
      { q: "What does an immigration lawyer do?", a: "We assess your eligibility, prepare and file petitions with the documentation adjudicators expect, and represent you before USCIS or the immigration courts when needed." },
      { q: "Do I need a lawyer for a green card?", a: "Not always, but experienced counsel helps most when there are prior issues, deadlines, or complex facts. We'll tell you honestly at the consultation." },
      { q: "Do you offer a free consultation?", a: "Yes. The initial consultation is free, and we respond to every inquiry within 24 business hours." },
      { q: "Do you work with clients outside Lansdale?", a: "Yes — Montgomery County, Philadelphia, and nationwide for immigration. We're licensed in PA, NJ, and NY." },
      { q: "How long does an immigration case take?", a: "It depends on the case type and current USCIS processing times; we give you realistic timelines up front." }
    ],
    relatedPages: [
      { label: "Green Cards & Visas", href: "/practice-areas/green-cards-visas" },
      { label: "Citizenship & Naturalization", href: "/practice-areas/citizenship-naturalization" },
      { label: "Deportation Defense", href: "/practice-areas/deportation-defense" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  }
};

export async function generateMetadata(): Promise<Metadata> {
  const data = practiceAreasData["immigration-law"];
  return {
    title: `${data.title} | Immigration Lawyers in PA | Dobaria Law PC`,
    description: `Experienced ${data.title.toLowerCase()} in Philadelphia & Lansdale. 45+ years serving individuals, families & employers.`,
    alternates: {
      canonical: `https://ibrahimdobarialaw.com/practice-areas/immigration-law`,
    },
    openGraph: {
      title: `${data.title} | Dobaria Law PC`,
      description: `${data.title} from experienced attorneys in Lansdale, PA.`,
      url: `https://ibrahimdobarialaw.com/practice-areas/immigration-law`,
      siteName: "Dobaria Law PC",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function ImmigrationLawPage() {
  const data = practiceAreasData["immigration-law"];
  
  if (!data) {
    notFound();
  }

  return <PracticeAreaClient data={data} />;
}

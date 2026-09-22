import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PracticeAreaClient from "./PracticeAreaClient";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n";

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

const practiceAreasDataEn: Record<string, PracticeData> = {
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
      { q: "How much does an immigration lawyer cost?", a: "Fees depend on the complexity of your matter. We explain the fee structure clearly at your initial consultation." },
      { q: "What does an immigration lawyer do?", a: "We assess your eligibility, prepare and file petitions with the documentation adjudicators expect, and represent you before USCIS or the immigration courts when needed." },
      { q: "Do I need a lawyer for a green card?", a: "Not always, but experienced counsel helps most when there are prior issues, deadlines, or complex facts. We'll tell you honestly at the consultation." },
      { q: "Do you offer a consultation?", a: "Yes. You can schedule an initial consultation with us, and we ensure a timely response to every inquiry." },
      { q: "Do you work with clients outside Lansdale?", a: "Yes — Montgomery County, Philadelphia, and nationwide for immigration. We're licensed in PA, NJ, and NY." },
      { q: "How long does an immigration case take?", a: "It depends on the case type and current USCIS processing times; we give you realistic timelines up front." }
    ],
    relatedPages: [
      { label: "Green Cards & Visas", href: "/practice-areas/green-cards-visas" },
      { label: "Citizenship & Naturalization", href: "/practice-areas/citizenship-naturalization" },
      { label: "Deportation Defense", href: "/practice-areas/deportation-defense" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  },
  "green-cards-visas": {
    slug: "green-cards-visas",
    title: "Green Cards & Visas",
    category: "Immigration & Citizenship",
    heroSubtitle: "Family-based and employment-based green cards, consular processing, adjustment of status, and nonimmigrant visas.",
    overview: [
      "Securing a green card or temporary visa is often the first and most critical step in achieving your goals in the United States. We assist individuals, families, and employers in navigating the complex pathways to permanent residency and temporary work authorization.",
      "From H-1B specialty occupation visas and L-1 intracompany transfers to marriage-based and family-sponsored green cards, our team prepares every petition with meticulous attention to detail. We ensure that your application stands up to the rigorous standards of U.S. Citizenship and Immigration Services (USCIS).",
      "Because immigration decisions rarely stand alone, we also weigh how a petition interacts with your family, business, and long-term plans in the United States. We serve clients across Lansdale, Montgomery County, and Philadelphia, and represent green card and visa applicants nationwide and at consulates abroad — keeping you informed in plain language at every stage, in any of the eight languages we speak in-house."
    ],
    servicesTitle: "Visa & Green Card Pathways We Handle",
    services: [
      {
        title: "Family Green Cards",
        description: "Marriage-based green cards, parent/child sponsorship, and sibling petitions."
      },
      {
        title: "Employment Green Cards",
        description: "EB-1 priority workers, EB-2 professionals with advanced degrees, and EB-3 skilled/unskilled workers."
      },
      {
        title: "Temporary Work Visas",
        description: "H-1B, L-1, O-1 extraordinary ability, and E-2 treaty investor visas."
      },
      {
        title: "Consular Processing",
        description: "Coordination with U.S. embassies and consulates worldwide for visa issuance."
      },
      {
        title: "Adjustment of Status",
        description: "Adjusting to permanent residence from within the United States, including work and travel authorization while your case is pending."
      },
      {
        title: "Fiancé(e) & Marriage Visas",
        description: "K-1 fiancé(e) visas and CR-1/IR-1 spousal petitions, prepared with the documentation adjudicators expect."
      },
      {
        title: "EB-5 Investor Green Cards",
        description: "Immigrant investor petitions, including source-of-funds documentation and the path to conditional and permanent residence."
      },
      {
        title: "RFE & Denial Responses",
        description: "Responding to Requests for Evidence and addressing prior denials or complications with a stronger, well-supported record."
      }
    ],
    processTitle: "The Visa Acquisition Process",
    process: [
      {
        step: "01",
        title: "Strategy Selection",
        description: "Determining the most effective visa or green card category based on your background or business needs."
      },
      {
        step: "02",
        title: "Case Preparation",
        description: "Drafting petition forms and gathering extensive supporting evidence to establish eligibility."
      },
      {
        step: "03",
        title: "Filing & Monitoring",
        description: "Submitting the completed petition to USCIS and monitoring its progress throughout the adjudication cycle."
      },
      {
        step: "04",
        title: "Interview Preparation",
        description: "Conducting mock interviews and preparing you for the consular or local office interview."
      }
    ],
    h1: "Green Card & Visa Lawyers Serving Pennsylvania & Beyond",
    faqs: [
      { q: "How long does the green card process take?", a: "It depends on the category and current USCIS/consular processing times; we give realistic timelines and keep you updated." },
      { q: "What's the difference between adjustment of status and consular processing?", a: "Adjustment is done from within the U.S.; consular processing is completed at a U.S. consulate abroad. The right path depends on your status and location." },
      { q: "Do you handle H-1B cap registrations?", a: "Yes — we advise on registration strategy, prepare petitions, and support employer compliance." },
      { q: "Can you help with an EB-5 investor visa?", a: "Yes, including source-of-funds documentation and the path to conditional and permanent residence." },
      { q: "Do I need a job offer for an employment green card?", a: "Usually yes, though some categories allow self-petition. We'll assess which fits." },
      { q: "Do you serve clients outside Pennsylvania?", a: "Yes — nationwide for immigration matters." }
    ],
    relatedPages: [
      { label: "Immigration Law", href: "/practice-areas/immigration-law" },
      { label: "Citizenship & Naturalization", href: "/practice-areas/citizenship-naturalization" },
      { label: "EB-5 Investor Visa Guide", href: "/insights/eb5-investor-visa-guide" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  },
  "citizenship-naturalization": {
    slug: "citizenship-naturalization",
    title: "Citizenship & Naturalization",
    category: "Immigration & Citizenship",
    heroSubtitle: "Helping lawful permanent residents complete the final step of their U.S. immigration journey with absolute confidence.",
    overview: [
      "Becoming a United States citizen is a profound milestone that brings significant rights and responsibilities. While the naturalization process is straightforward for many, complex issues regarding continuous residence, physical presence, taxation, and past legal matters can arise.",
      "We guide lawful permanent residents through the N-400 naturalization process, representing them from the initial application through the naturalization interview and oath ceremony. We also assist with derivative citizenship claims for children born abroad to U.S. citizens.",
      "For applicants worried about a gap in residence, a past tax question, or an old record, the value of experienced counsel is knowing what will and will not become an issue before you file. We review your history carefully, prepare you for the civics and English components, and stand beside you at the interview — serving clients throughout Lansdale, Montgomery County, and Philadelphia in eight languages."
    ],
    servicesTitle: "Naturalization & Citizenship Services",
    services: [
      {
        title: "N-400 Naturalization",
        description: "Preparation and filing of the application for naturalization for eligible permanent residents."
      },
      {
        title: "Derivative Citizenship",
        description: "Applying for Certificates of Citizenship (N-600) for individuals who acquired citizenship through their parents."
      },
      {
        title: "Complex Eligibility Review",
        description: "Evaluating issues related to extended travel abroad, tax compliance, or minor criminal records."
      },
      {
        title: "Naturalization Interviews",
        description: "Mock interviews and legal representation at the USCIS interview room."
      },
      {
        title: "Continuous Residence & Travel Issues",
        description: "Addressing extended trips abroad and abandonment concerns that can affect the residence requirement."
      },
      {
        title: "Good Moral Character Concerns",
        description: "Assessing tax, support, or minor criminal issues before you file, and advising on the right timing to apply."
      },
      {
        title: "Disability & Test Exemptions",
        description: "Requesting accommodations and evaluating English or civics test exemptions where an applicant qualifies."
      }
    ],
    processTitle: "Pathway to Citizenship",
    process: [
      {
        step: "01",
        title: "Eligibility Assessment",
        description: "Reviewing residence history, tax records, and moral character requirements to confirm eligibility."
      },
      {
        step: "02",
        title: "Application Filing",
        description: "Preparing the Form N-400 with all necessary documentation and filing it securely."
      },
      {
        step: "03",
        title: "Civics & English Prep",
        description: "Providing resources and guidance to prepare you for the history and language components of the interview."
      },
      {
        step: "04",
        title: "Interview & Oath",
        description: "Accompanying you to the USCIS interview to represent your interests and celebrate your success."
      }
    ],
    h1: "Naturalization & Citizenship Lawyers in Lansdale, PA",
    faqs: [
      { q: "How long do I have to be a green card holder before applying?", a: "Usually five years, or three if you're married to and living with a U.S. citizen. We'll confirm your date." },
      { q: "How long does naturalization take?", a: "Timelines vary by field office and current USCIS processing; we give you a realistic estimate up front." },
      { q: "Do I have to take a test?", a: "Most applicants take an English and a civics test. We help you prepare and explain any exemptions." },
      { q: "Can a criminal record affect my application?", a: "It can. Talk to us before filing — good moral character is assessed carefully, and some issues are manageable." },
      { q: "Does the U.S. allow dual citizenship?", a: "The U.S. generally permits it; whether your home country does is a separate question we can discuss." },
      { q: "How much does it cost?", a: "Government filing fees plus our fee, which we explain clearly at your consultation." }
    ],
    relatedPages: [
      { label: "Immigration Law", href: "/practice-areas/immigration-law" },
      { label: "Green Cards & Visas", href: "/practice-areas/green-cards-visas" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  },
  "deportation-defense": {
    slug: "deportation-defense",
    title: "Deportation & Removal Defense",
    category: "Immigration & Citizenship",
    heroSubtitle: "Vigorous representation in removal proceedings before immigration courts and the Board of Immigration Appeals.",
    overview: [
      "Facing deportation is one of the most stressful experiences an individual or family can endure. The immigration court system is complex, and the stakes are incredibly high. Our attorneys have decades of experience defending clients in removal proceedings before immigration courts nationwide.",
      "We work tirelessly to explore every possible form of relief, including asylum, cancellation of removal, adjustment of status, and waivers. We build thorough, evidence-rich defenses to protect our clients' right to remain in the United States.",
      "Removal cases move on firm deadlines, and the difference between an order of removal and a second chance often comes down to preparation. From the first Master Calendar hearing through the Individual merits hearing and, when needed, an appeal, we handle each stage with the documentation and country-condition evidence these cases demand — for clients across Pennsylvania and, on immigration matters, nationwide. Every consultation is confidential."
    ],
    servicesTitle: "Defenses & Relief Forms We Handle",
    services: [
      {
        title: "Asylum & Withholding",
        description: "Representation for individuals seeking protection from persecution or harm in their home countries."
      },
      {
        title: "Cancellation of Removal",
        description: "Defense for long-term permanent residents and non-permanent residents facing deportation."
      },
      {
        title: "Waivers of Inadmissibility",
        description: "Filing waivers for fraud, criminal grounds, or unlawful presence to cure blocks."
      },
      {
        title: "Board of Immigration Appeals",
        description: "Appealing negative immigration judge decisions to the BIA and federal circuit courts."
      },
      {
        title: "Bond & Custody Hearings",
        description: "Seeking release from detention through bond hearings and advocating for the lowest appropriate bond."
      },
      {
        title: "Adjustment & Relief in Court",
        description: "Pursuing adjustment of status, prosecutorial discretion, and voluntary departure where they serve the client's goals."
      },
      {
        title: "Motions to Reopen or Reconsider",
        description: "Reopening in absentia orders and prior cases when new facts or legal grounds support a fresh look."
      }
    ],
    processTitle: "Removal Defense Procedure",
    process: [
      {
        step: "01",
        title: "Emergency Evaluation",
        description: "Reviewing the Notice to Appear (NTA) and assessing immediate actions and options."
      },
      {
        step: "02",
        title: "Defense Strategy",
        description: "Selecting the most viable forms of relief (asylum, cancellation, adjustment) and preparing the court filings."
      },
      {
        step: "03",
        title: "Evidentiary Gathering",
        description: "Compiling country condition reports, witness statements, and personal documentation."
      },
      {
        step: "04",
        title: "Court Representation",
        description: "Vigorously representing you at Master Calendar and Individual (Trial) hearings before the immigration judge."
      }
    ],
    h1: "Deportation & Removal Defense Attorneys Serving Pennsylvania",
    faqs: [
      { q: "What should I do if I or a family member is detained?", a: "Contact an attorney promptly. Gather any paperwork you have and avoid signing documents you don't understand." },
      { q: "Can deportation be stopped?", a: "Depending on the facts, defenses such as cancellation of removal, asylum, or waivers may be available. We assess honestly what applies to you." },
      { q: "What is cancellation of removal?", a: "A form of relief that can allow certain long-residing individuals to remain, if strict requirements are met." },
      { q: "Can I appeal an immigration judge's decision?", a: "Often yes — to the Board of Immigration Appeals, within strict deadlines. Timing is critical." },
      { q: "How quickly should I act?", a: "As soon as possible. Deadlines in removal cases are firm, and early preparation strengthens your options." },
      { q: "Is the consultation confidential?", a: "Yes. Your consultation is protected and confidential." }
    ],
    relatedPages: [
      { label: "Immigration Law", href: "/practice-areas/immigration-law" },
      { label: "Deportation Defense Guide", href: "/insights/deportation-defense-guide" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  },
  "family-law": {
    slug: "family-law",
    title: "Family Law",
    category: "Family Law",
    heroSubtitle: "Divorce, child custody, support matters, and prenuptial agreements handled with discretion, empathy, and steady judgment.",
    overview: [
      "Family law matters are deeply personal and frequently emotionally charged. Whether you are navigating a divorce, seeking custody of your children, or drafting a prenuptial agreement, you need counsel that combines legal expertise with genuine understanding.",
      "We represent clients in Pennsylvania and New Jersey, working to secure fair outcomes that protect their assets and the well-being of their children. We prioritize amicable resolutions through negotiation but stand ready to advocate fiercely in court when necessary.",
      "What sets our family practice apart is that immigration law is under the same roof. When a client's status, a spouse's green card, or a child's citizenship touches a divorce or custody matter, we handle both sides together rather than sending you to a second firm. Serving Montgomery County, Lansdale, and the greater Philadelphia area, we bring steady, discreet judgment to some of the most personal decisions our clients ever make."
    ],
    servicesTitle: "Domestic Relations Services",
    services: [
      {
        title: "Divorce & Dissolution",
        description: "Representing clients in contested and uncontested divorces, including complex asset division."
      },
      {
        title: "Child Custody & Visitation",
        description: "Negotiating custody agreements and representing parents in custody disputes in court."
      },
      {
        title: "Child & Spousal Support",
        description: "Calculating and securing child support, spousal support, and alimony orders."
      },
      {
        title: "Prenuptial Agreements",
        description: "Drafting and reviewing prenuptial and postnuptial agreements to protect personal assets."
      },
      {
        title: "Equitable Distribution",
        description: "Identifying, valuing, and fairly dividing marital property, retirement accounts, and business interests."
      },
      {
        title: "Custody Modifications & Relocation",
        description: "Modifying existing orders and handling relocation requests as families' circumstances change."
      },
      {
        title: "Immigration-Sensitive Family Matters",
        description: "Coordinating divorce and custody with immigration status so a family matter does not put a green card at risk."
      }
    ],
    processTitle: "Family Law Workflow",
    process: [
      {
        step: "01",
        title: "Initial Consultation",
        description: "Understanding your family dynamics, assets, and goals to build a constructive approach."
      },
      {
        step: "02",
        title: "Discovery & Valuation",
        description: "Gathering financial records, asset appraisals, and other relevant information to define the estate."
      },
      {
        step: "03",
        title: "Negotiation & Mediation",
        description: "Striving to reach a fair settlement through negotiations or structured mediation sessions."
      },
      {
        step: "04",
        title: "Court Litigation",
        description: "Advocating for your parental and financial rights before a family court judge if agreement cannot be reached."
      }
    ],
    h1: "Family Law & Divorce Attorneys in Montgomery County, PA",
    faqs: [
      { q: "Is Pennsylvania a no-fault divorce state?", a: "Pennsylvania allows both no-fault and fault-based divorce. We'll explain which path fits your circumstances." },
      { q: "How is custody decided in PA?", a: "Courts weigh a set of factors centered on the child's best interests. We help you present your case clearly." },
      { q: "How is property divided?", a: "Pennsylvania follows equitable distribution — a fair, not necessarily equal, division. We work to protect your interests." },
      { q: "Do you handle high-conflict cases?", a: "Yes, and we also work to reduce conflict where possible, which often serves families and children better." },
      { q: "What if my spouse or I am not a U.S. citizen?", a: "Immigration status can interact with divorce and custody. Our immigration background lets us handle these carefully." },
      { q: "How much will it cost?", a: "It depends on the complexity and level of dispute. We discuss fees openly at your consultation." }
    ],
    relatedPages: [
      { label: "International Divorce", href: "/practice-areas/international-divorce" },
      { label: "Immigration Law", href: "/practice-areas/immigration-law" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  },
  "international-divorce": {
    slug: "international-divorce",
    title: "International Divorce",
    category: "Family Law",
    heroSubtitle: "Cross-border divorce and child custody matters involving foreign jurisdictions, dual citizenship, and international assets.",
    overview: [
      "When a marriage dissolves across international borders, unique legal challenges arise. Issues such as foreign asset distribution, international child custody, service of process under the Hague Convention, and foreign marriage recognition require highly specialized knowledge.",
      "Our firm’s dual expertise in family law and immigration law makes us uniquely suited to handle international divorces. We work to protect your rights, coordinate with foreign legal counsel when necessary, and ensure that your family’s immigration status is not compromised.",
      "These cases turn on questions most firms rarely face: which country’s court has jurisdiction, how a foreign decree will be treated here, and how to serve documents abroad under the Hague Convention. We map those questions early, coordinate with counsel overseas, and keep the immigration consequences in view throughout — for clients in Montgomery County and Philadelphia and for parents and spouses living outside the United States."
    ],
    servicesTitle: "International Domestic Representation",
    services: [
      {
        title: "Cross-Border Asset Division",
        description: "Identifying, valuing, and dividing assets located outside the United States."
      },
      {
        title: "Hague Custody Disputes",
        description: "Representing parents in international child custody disputes under the Hague Convention."
      },
      {
        title: "Foreign Divorce Recognition",
        description: "Ensuring foreign divorce decrees are legally recognized in the United States and vice versa."
      },
      {
        title: "Immigration Status Protection",
        description: "Counseling clients on how divorce affects pending or active immigration petitions."
      },
      {
        title: "Jurisdiction & Forum Disputes",
        description: "Analyzing which country or state should hear your case and litigating jurisdiction where it is contested."
      },
      {
        title: "International Support Enforcement",
        description: "Pursuing and enforcing child and spousal support across borders where treaties and reciprocity allow."
      },
      {
        title: "Coordination with Foreign Counsel",
        description: "Working alongside attorneys and asset locators abroad to reach an agreement enforceable in every relevant jurisdiction."
      }
    ],
    processTitle: "Cross-Border Procedure",
    process: [
      {
        step: "01",
        title: "Jurisdictional Analysis",
        description: "Determining which state or country has jurisdiction to hear the divorce or custody case."
      },
      {
        step: "02",
        title: "Service under Hague",
        description: "Navigating the formal channels of the Hague Service Convention to serve documents abroad."
      },
      {
        step: "03",
        title: "Coordinating Experts",
        description: "Liaising with foreign legal advisors, asset locators, and forensic accountants."
      },
      {
        step: "04",
        title: "Settlement & Decree",
        description: "Finalizing an international agreement that is enforceable across borders."
      }
    ],
    h1: "International Divorce & Cross-Border Custody Lawyers",
    faqs: [
      { q: "What is the Hague Convention on child custody?", a: "An international treaty for the prompt return of children wrongfully removed across borders. We handle these time-sensitive cases." },
      { q: "Which country's court decides my divorce?", a: "Jurisdiction depends on residence, citizenship, and where you married. We assess where your case belongs." },
      { q: "Can a foreign divorce be recognized in the U.S.?", a: "Often, under certain conditions. We evaluate recognition and its effects here." },
      { q: "How does divorce affect my green card?", a: "For conditional residents especially, divorce can affect status. We plan to protect it." },
      { q: "What about assets held in another country?", a: "They can be part of the division; we work to identify and address them, coordinating abroad as needed." },
      { q: "Do you work with lawyers in other countries?", a: "Yes, we coordinate with foreign counsel when a matter requires it." }
    ],
    relatedPages: [
      { label: "Family Law", href: "/practice-areas/family-law" },
      { label: "Immigration Law", href: "/practice-areas/immigration-law" },
      { label: "International Custody Cases", href: "/insights/international-custody-cases" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  },
  "business-law": {
    slug: "business-law",
    title: "Business Law",
    category: "Business & Property",
    heroSubtitle: "Entity formation, commercial contracts, transactions, and ongoing counsel for closely held businesses.",
    overview: [
      "Starting, running, and growing a business requires a solid legal foundation. From selecting the right entity structure to drafting clear, enforceable contracts, proactive legal counsel helps prevent costly disputes and positions your business for success.",
      "We serve as trusted legal advisors to entrepreneurs, closely held businesses, and established corporations. We draft commercial agreements, negotiate leases, guide clients through business acquisitions, and offer practical, business-minded advice.",
      "For founders who are also foreign nationals, our immigration practice is a genuine advantage: we can align an entity structure with a treaty investor or employment-based visa strategy from day one. And because we handle real estate as well, a business buying, leasing, or financing property gets both the corporate and the property work from one team. We serve businesses throughout Lansdale, Montgomery County, and the greater Philadelphia region."
    ],
    servicesTitle: "Business Law Offerings",
    services: [
      {
        title: "Entity Formation",
        description: "Advising on and forming LLCs, S-Corporations, C-Corporations, and partnerships."
      },
      {
        title: "Commercial Contracts",
        description: "Drafting, reviewing, and negotiating service agreements, vendor contracts, and NDAs."
      },
      {
        title: "Employment Agreements",
        description: "Creating non-compete agreements, executive contracts, and employee handbooks."
      },
      {
        title: "Mergers & Acquisitions",
        description: "Representing buyers and sellers in asset purchases, stock purchases, and corporate restructuring."
      },
      {
        title: "Operating & Partnership Agreements",
        description: "Drafting the internal agreements that define ownership, management, and what happens when a member departs."
      },
      {
        title: "Commercial Leasing & Real Estate",
        description: "Negotiating leases and coordinating property purchases and financing alongside our real estate practice."
      },
      {
        title: "Foreign-Owned Business Counsel",
        description: "Structuring U.S. companies for foreign founders in step with treaty investor and employment-based visa strategy."
      }
    ],
    processTitle: "Business Advisory Flow",
    process: [
      {
        step: "01",
        title: "Needs Identification",
        description: "Assessing your business objectives, industry regulations, and risk tolerance."
      },
      {
        step: "02",
        title: "Document Drafting",
        description: "Preparing customized organizational documents, contracts, or transaction agreements."
      },
      {
        step: "03",
        title: "Negotiation",
        description: "Negotiating deal terms and contract revisions to ensure your business interests are fully protected."
      },
      {
        step: "04",
        title: "Execution & Advisory",
        description: "Finalizing transactions and providing ongoing legal support as your business grows."
      }
    ],
    h1: "Business & LLC Formation Attorneys in Pennsylvania",
    faqs: [
      { q: "How do I form an LLC in Pennsylvania?", a: "You file a Certificate of Organization with the state and put an operating agreement in place; we handle the details and structure it correctly." },
      { q: "Do I need a business attorney to start a company?", a: "Not always, but sound structure and contracts early prevent expensive problems later." },
      { q: "Can you review or draft our contracts?", a: "Yes — from client agreements to vendor and partnership contracts." },
      { q: "Do you help businesses that hire foreign workers?", a: "Yes; our immigration practice supports employer sponsorship and compliance." },
      { q: "Do you provide ongoing counsel?", a: "Yes — many clients keep us on as their go-to advisor." },
      { q: "How do you charge?", a: "Depending on the matter, flat or hourly; we explain fees clearly at your consultation." }
    ],
    relatedPages: [
      { label: "Real Estate Law", href: "/practice-areas/real-estate-law" },
      { label: "Immigration Law", href: "/practice-areas/immigration-law" },
      { label: "Forming an LLC in PA", href: "/insights/forming-an-llc-in-pa" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  },
  "real-estate-law": {
    slug: "real-estate-law",
    title: "Real Estate Law",
    category: "Business & Property",
    heroSubtitle: "Residential and commercial real estate transactions, title work, closings, and multi-state matters.",
    overview: [
      "Real estate transactions represent significant financial investments. Whether you are buying a home, purchasing commercial property, or leasing office space, having an experienced attorney review your documents ensures that your investment is secure.",
      "Our firm provides comprehensive real estate services, including contract review, title searches, deed transfers, and representations at closing. Our team has handled real estate title work across eighteen states, bringing unique multi-state closing expertise.",
      "That multi-state title experience matters when a purchase, refinance, or investment crosses state lines or involves an out-of-state party — the kind of transaction where a local-only firm has to hand you off. For business clients and foreign investors, we coordinate the property work with our business and immigration practices so the whole transaction moves as one. We serve buyers, sellers, and lenders throughout Montgomery County, Lansdale, and the Philadelphia area."
    ],
    servicesTitle: "Real Estate Legal Services",
    services: [
      {
        title: "Closings & Representation",
        description: "Representing buyers, sellers, and lenders at residential and commercial real estate closings."
      },
      {
        title: "Title Examination",
        description: "Conducting detailed title searches and securing title insurance to clear any clouds on title."
      },
      {
        title: "Commercial Leases",
        description: "Drafting and negotiating retail, office, and industrial lease agreements."
      },
      {
        title: "Property Transfers",
        description: "Preparing deeds, easements, and other instruments for transfer of property rights."
      },
      {
        title: "Purchase & Sale Agreements",
        description: "Reviewing and negotiating agreements of sale to set clear terms, contingencies, and protections before you sign."
      },
      {
        title: "Multi-State Transactions",
        description: "Handling closings and title matters that cross state lines, backed by title experience across eighteen states."
      },
      {
        title: "Refinances & Deed Work",
        description: "Managing refinance closings, quitclaim and warranty deeds, and transfers between family members or entities."
      }
    ],
    processTitle: "Real Estate Closing Timeline",
    process: [
      {
        step: "01",
        title: "Contract Review",
        description: "Reviewing and negotiating the agreement of sale to establish clear terms and contingencies."
      },
      {
        step: "02",
        title: "Title Search & Clearance",
        description: "Examining title records to resolve liens, easements, or other boundary disputes before closing."
      },
      {
        step: "03",
        title: "Closing Preparation",
        description: "Coordinating with lenders, brokers, and title companies to prepare all settlement statements."
      },
      {
        step: "04",
        title: "Closing Settlement",
        description: "Reviewing and executing all closing documents to ensure the clean transfer of ownership."
      }
    ],
    h1: "Real Estate Closing & Title Attorneys in Montgomery County, PA",
    faqs: [
      { q: "Do I need an attorney for a real estate closing in Pennsylvania?", a: "Pennsylvania doesn't always require one, but an attorney protects your interests in the contract, title, and closing." },
      { q: "What does title work involve?", a: "Examining the property's title history, resolving any defects, and coordinating title insurance so your ownership is secure." },
      { q: "Do you handle commercial real estate?", a: "Yes — purchases, sales, and leases for business and investment property." },
      { q: "Can you help with a property in another state?", a: "Often yes — our title experience spans eighteen states." },
      { q: "Do you represent both buyers and sellers?", a: "Yes, though not on the same transaction. We'll clarify your representation up front." },
      { q: "How much do you charge for a closing?", a: "It depends on the transaction; we explain fees clearly at your consultation." }
    ],
    relatedPages: [
      { label: "Business Law", href: "/practice-areas/business-law" },
      { label: "Immigration Law", href: "/practice-areas/immigration-law" },
      { label: "Schedule a Consultation", href: "/contact" }
    ]
  }
};

const practiceAreasDataEs: Record<string, PracticeData> = {
  "immigration-law": {
    slug: "immigration-law",
    title: "Ley de Inmigración",
    category: "Inmigración y Ciudadanía",
    heroSubtitle: "Décadas de experiencia guiando a personas, familias y empleadores en cada etapa del proceso migratorio de EE. UU.",
    overview: [
      "Navegar el complejo panorama del derecho migratorio estadounidense requiere mucho más que llenar formularios. Exige un enfoque estratégico adaptado a sus circunstancias particulares. Nuestra firma ha dedicado más de cuatro décadas a representar a personas, familias y empleadores en asuntos de inmigración y nacionalidad de EE. UU.",
      "Ya sea que busque patrocinar a un familiar, obtener una visa de trabajo temporal, naturalizarse como ciudadano estadounidense o defenderse de una deportación, le ofrecemos la orientación experimentada que necesita. Entendemos que las decisiones migratorias tienen un impacto profundo en su vida, su familia y su negocio."
    ],
    servicesTitle: "Alcance de Nuestra Representación Migratoria",
    services: [
      {
        title: "Peticiones Familiares",
        description: "Guiamos a nuestros clientes en peticiones por matrimonio, patrocinio de familiares inmediatos y categorías de preferencia familiar con el máximo cuidado."
      },
      {
        title: "Visas por Empleo",
        description: "Asistimos a empleadores y personas con visas de trabajo de no inmigrante (H-1B, L-1, O-1) y opciones de residencia permanente."
      },
      {
        title: "Trámite Consular y Ajuste de Estatus",
        description: "Ayudamos a nuestros clientes a recorrer los pasos necesarios para obtener su green card, ya sea desde dentro de Estados Unidos o en una embajada estadounidense en el extranjero."
      },
      {
        title: "Apelaciones y Litigio",
        description: "Representamos a clientes ante la Junta de Apelaciones de Inmigración (BIA) y los tribunales federales de apelación en casos migratorios complejos."
      }
    ],
    processTitle: "Su Proceso Legal: Paso a Paso",
    process: [
      {
        step: "01",
        title: "Consulta Personalizada",
        description: "Evaluamos su elegibilidad, sus antecedentes y sus objetivos a largo plazo para trazar una estrategia legal clara y personalizada."
      },
      {
        step: "02",
        title: "Recopilación de Pruebas y Documentos",
        description: "Trabajamos de cerca con usted para reunir y organizar todas las pruebas, registros de respaldo y documentación necesarios."
      },
      {
        step: "03",
        title: "Revisión Rigurosa y Presentación",
        description: "Auditamos minuciosamente cada detalle de su solicitud antes de presentarla ante USCIS o la agencia correspondiente."
      },
      {
        step: "04",
        title: "Representación y Resolución",
        description: "Lo preparamos para las entrevistas, atendemos las solicitudes de evidencia (RFE) y lo acompañamos hasta la decisión final."
      }
    ],
    h1: "Abogados de Inmigración al Servicio de Filadelfia y Lansdale, PA",
    faqs: [
      { q: "¿Cuánto cuesta un abogado de inmigración?", a: "Los honorarios dependen de la complejidad de su asunto. Le explicamos la estructura de honorarios con claridad en su consulta inicial." },
      { q: "¿Qué hace un abogado de inmigración?", a: "Evaluamos su elegibilidad, preparamos y presentamos peticiones con la documentación que los funcionarios esperan, y lo representamos ante USCIS o los tribunales de inmigración cuando es necesario." },
      { q: "¿Necesito un abogado para una green card?", a: "No siempre, pero un abogado con experiencia es más valioso cuando hay antecedentes, plazos o hechos complejos. Se lo diremos con honestidad en la consulta." },
      { q: "¿Ofrecen consultas?", a: "Sí. Puede agendar una consulta inicial con nosotros, y garantizamos una respuesta oportuna a cada solicitud." },
      { q: "¿Atienden clientes fuera de Lansdale?", a: "Sí: el condado de Montgomery, Filadelfia y todo el país en asuntos migratorios. Estamos autorizados en PA, NJ y NY." },
      { q: "¿Cuánto tarda un caso de inmigración?", a: "Depende del tipo de caso y de los tiempos de procesamiento actuales de USCIS; le damos plazos realistas desde el inicio." }
    ],
    relatedPages: [
      { label: "Green Cards y Visas", href: "/practice-areas/green-cards-visas" },
      { label: "Ciudadanía y Naturalización", href: "/practice-areas/citizenship-naturalization" },
      { label: "Defensa contra la Deportación", href: "/practice-areas/deportation-defense" },
      { label: "Agendar una Consulta", href: "/contact" }
    ]
  },
  "green-cards-visas": {
    slug: "green-cards-visas",
    title: "Green Cards y Visas",
    category: "Inmigración y Ciudadanía",
    heroSubtitle: "Green cards por familia y por empleo, trámite consular, ajuste de estatus y visas de no inmigrante.",
    overview: [
      "Obtener una green card o una visa temporal suele ser el primer paso, y el más decisivo, para alcanzar sus metas en Estados Unidos. Asistimos a personas, familias y empleadores a recorrer las complejas vías hacia la residencia permanente y la autorización de trabajo temporal.",
      "Desde visas H-1B de ocupación especializada y transferencias L-1 dentro de una misma empresa hasta green cards por matrimonio y patrocinio familiar, nuestro equipo prepara cada petición con una atención meticulosa al detalle. Nos aseguramos de que su solicitud resista los rigurosos estándares del Servicio de Ciudadanía e Inmigración de EE. UU. (USCIS).",
      "Como las decisiones migratorias rara vez son aisladas, también analizamos cómo interactúa una petición con su familia, su negocio y sus planes a largo plazo en Estados Unidos. Atendemos clientes en Lansdale, el condado de Montgomery y Filadelfia, y representamos a solicitantes de green cards y visas en todo el país y en consulados en el extranjero, manteniéndolo informado en lenguaje claro en cada etapa, en cualquiera de los ocho idiomas que hablamos internamente."
    ],
    servicesTitle: "Vías de Visa y Green Card que Atendemos",
    services: [
      {
        title: "Green Cards Familiares",
        description: "Green cards por matrimonio, patrocinio de padres e hijos y peticiones entre hermanos."
      },
      {
        title: "Green Cards por Empleo",
        description: "Trabajadores prioritarios EB-1, profesionales con títulos avanzados EB-2 y trabajadores calificados y no calificados EB-3."
      },
      {
        title: "Visas de Trabajo Temporal",
        description: "Visas H-1B, L-1, O-1 de habilidad extraordinaria y E-2 de inversionista por tratado."
      },
      {
        title: "Trámite Consular",
        description: "Coordinación con embajadas y consulados de EE. UU. en todo el mundo para la emisión de visas."
      },
      {
        title: "Ajuste de Estatus",
        description: "Ajuste a residencia permanente desde dentro de Estados Unidos, incluida la autorización de trabajo y viaje mientras su caso está pendiente."
      },
      {
        title: "Visas de Prometido(a) y Matrimonio",
        description: "Visas K-1 de prometido(a) y peticiones conyugales CR-1/IR-1, preparadas con la documentación que los funcionarios esperan."
      },
      {
        title: "Green Cards de Inversionista EB-5",
        description: "Peticiones de inversionista inmigrante, incluida la documentación del origen de los fondos y la vía hacia la residencia condicional y permanente."
      },
      {
        title: "Respuestas a RFE y Denegaciones",
        description: "Respondemos a Solicitudes de Evidencia y abordamos denegaciones previas o complicaciones con un expediente más sólido y mejor sustentado."
      }
    ],
    processTitle: "El Proceso para Obtener una Visa",
    process: [
      {
        step: "01",
        title: "Selección de Estrategia",
        description: "Determinamos la categoría de visa o green card más eficaz según sus antecedentes o las necesidades de su negocio."
      },
      {
        step: "02",
        title: "Preparación del Caso",
        description: "Redactamos los formularios de petición y reunimos evidencia de respaldo extensa para acreditar la elegibilidad."
      },
      {
        step: "03",
        title: "Presentación y Seguimiento",
        description: "Presentamos la petición completa ante USCIS y damos seguimiento a su avance durante todo el ciclo de adjudicación."
      },
      {
        step: "04",
        title: "Preparación para la Entrevista",
        description: "Realizamos entrevistas simuladas y lo preparamos para la entrevista consular o en la oficina local."
      }
    ],
    h1: "Abogados de Green Card y Visas al Servicio de Pensilvania y Más Allá",
    faqs: [
      { q: "¿Cuánto tarda el proceso de la green card?", a: "Depende de la categoría y de los tiempos actuales de procesamiento de USCIS y consulares; damos plazos realistas y lo mantenemos informado." },
      { q: "¿Cuál es la diferencia entre el ajuste de estatus y el trámite consular?", a: "El ajuste se realiza desde dentro de EE. UU.; el trámite consular se completa en un consulado estadounidense en el extranjero. La vía correcta depende de su estatus y ubicación." },
      { q: "¿Manejan los registros del cupo H-1B?", a: "Sí: asesoramos sobre la estrategia de registro, preparamos peticiones y apoyamos el cumplimiento del empleador." },
      { q: "¿Pueden ayudarme con una visa de inversionista EB-5?", a: "Sí, incluida la documentación del origen de los fondos y la vía hacia la residencia condicional y permanente." },
      { q: "¿Necesito una oferta de trabajo para una green card por empleo?", a: "Por lo general sí, aunque algunas categorías permiten la autopetición. Evaluaremos cuál corresponde." },
      { q: "¿Atienden clientes fuera de Pensilvania?", a: "Sí: en todo el país para asuntos migratorios." }
    ],
    relatedPages: [
      { label: "Ley de Inmigración", href: "/practice-areas/immigration-law" },
      { label: "Ciudadanía y Naturalización", href: "/practice-areas/citizenship-naturalization" },
      { label: "Guía de la Visa de Inversionista EB-5", href: "/insights/eb5-investor-visa-guide" },
      { label: "Agendar una Consulta", href: "/contact" }
    ]
  },
  "citizenship-naturalization": {
    slug: "citizenship-naturalization",
    title: "Ciudadanía y Naturalización",
    category: "Inmigración y Ciudadanía",
    heroSubtitle: "Ayudamos a los residentes permanentes legales a completar el paso final de su camino migratorio en EE. UU. con absoluta confianza.",
    overview: [
      "Convertirse en ciudadano de Estados Unidos es un hito trascendental que trae consigo derechos y responsabilidades importantes. Si bien el proceso de naturalización es sencillo para muchos, pueden surgir asuntos complejos relacionados con la residencia continua, la presencia física, los impuestos y antecedentes legales.",
      "Guiamos a los residentes permanentes legales a través del proceso de naturalización N-400, representándolos desde la solicitud inicial hasta la entrevista de naturalización y la ceremonia de juramento. También asistimos con reclamos de ciudadanía derivada para hijos de ciudadanos estadounidenses nacidos en el extranjero.",
      "Para quienes se preocupan por un vacío en su residencia, una duda fiscal del pasado o un antecedente antiguo, el valor de un abogado con experiencia está en saber qué será y qué no será un problema antes de presentar la solicitud. Revisamos su historial con cuidado, lo preparamos para las secciones de civismo e inglés y lo acompañamos en la entrevista, atendiendo a clientes en Lansdale, el condado de Montgomery y Filadelfia en ocho idiomas."
    ],
    servicesTitle: "Servicios de Naturalización y Ciudadanía",
    services: [
      {
        title: "Naturalización N-400",
        description: "Preparación y presentación de la solicitud de naturalización para residentes permanentes elegibles."
      },
      {
        title: "Ciudadanía Derivada",
        description: "Solicitud de Certificados de Ciudadanía (N-600) para personas que adquirieron la ciudadanía a través de sus padres."
      },
      {
        title: "Revisión de Elegibilidad Compleja",
        description: "Evaluamos asuntos relacionados con viajes prolongados al extranjero, cumplimiento fiscal o antecedentes penales menores."
      },
      {
        title: "Entrevistas de Naturalización",
        description: "Entrevistas simuladas y representación legal en la sala de entrevistas de USCIS."
      },
      {
        title: "Residencia Continua y Asuntos de Viaje",
        description: "Abordamos viajes prolongados al extranjero y preocupaciones por abandono que pueden afectar el requisito de residencia."
      },
      {
        title: "Asuntos de Buen Carácter Moral",
        description: "Evaluamos asuntos fiscales, de manutención o penales menores antes de presentar la solicitud, y asesoramos sobre el momento adecuado para aplicar."
      },
      {
        title: "Discapacidad y Exenciones de Examen",
        description: "Solicitamos adaptaciones y evaluamos exenciones del examen de inglés o civismo cuando el solicitante califica."
      }
    ],
    processTitle: "El Camino a la Ciudadanía",
    process: [
      {
        step: "01",
        title: "Evaluación de Elegibilidad",
        description: "Revisamos el historial de residencia, los registros fiscales y los requisitos de carácter moral para confirmar la elegibilidad."
      },
      {
        step: "02",
        title: "Presentación de la Solicitud",
        description: "Preparamos el Formulario N-400 con toda la documentación necesaria y lo presentamos de forma segura."
      },
      {
        step: "03",
        title: "Preparación de Civismo e Inglés",
        description: "Ofrecemos recursos y orientación para prepararlo para las secciones de historia e idioma de la entrevista."
      },
      {
        step: "04",
        title: "Entrevista y Juramento",
        description: "Lo acompañamos a la entrevista de USCIS para representar sus intereses y celebrar su logro."
      }
    ],
    h1: "Abogados de Naturalización y Ciudadanía en Lansdale, PA",
    faqs: [
      { q: "¿Cuánto tiempo debo tener la green card antes de solicitar?", a: "Por lo general cinco años, o tres si está casado y vive con un ciudadano estadounidense. Confirmaremos su fecha." },
      { q: "¿Cuánto tarda la naturalización?", a: "Los plazos varían según la oficina local y el procesamiento actual de USCIS; le damos una estimación realista desde el inicio." },
      { q: "¿Tengo que presentar un examen?", a: "La mayoría de los solicitantes presenta un examen de inglés y otro de civismo. Lo ayudamos a prepararse y le explicamos las exenciones." },
      { q: "¿Un antecedente penal puede afectar mi solicitud?", a: "Puede hacerlo. Hable con nosotros antes de presentarla: el buen carácter moral se evalúa con cuidado y algunos asuntos son manejables." },
      { q: "¿Estados Unidos permite la doble ciudadanía?", a: "EE. UU. generalmente la permite; si su país de origen lo hace es una cuestión aparte que podemos analizar." },
      { q: "¿Cuánto cuesta?", a: "Las tarifas gubernamentales de presentación más nuestros honorarios, que explicamos con claridad en su consulta." }
    ],
    relatedPages: [
      { label: "Ley de Inmigración", href: "/practice-areas/immigration-law" },
      { label: "Green Cards y Visas", href: "/practice-areas/green-cards-visas" },
      { label: "Agendar una Consulta", href: "/contact" }
    ]
  },
  "deportation-defense": {
    slug: "deportation-defense",
    title: "Defensa contra la Deportación y la Remoción",
    category: "Inmigración y Ciudadanía",
    heroSubtitle: "Representación enérgica en procesos de remoción ante los tribunales de inmigración y la Junta de Apelaciones de Inmigración.",
    overview: [
      "Enfrentar una deportación es una de las experiencias más angustiantes que una persona o una familia puede vivir. El sistema de tribunales de inmigración es complejo y lo que está en juego es enorme. Nuestros abogados tienen décadas de experiencia defendiendo clientes en procesos de remoción ante tribunales de inmigración de todo el país.",
      "Trabajamos incansablemente para explorar todas las formas posibles de alivio migratorio, incluidos el asilo, la cancelación de remoción, el ajuste de estatus y los perdones. Construimos defensas exhaustivas y bien sustentadas para proteger el derecho de nuestros clientes a permanecer en Estados Unidos.",
      "Los casos de remoción avanzan con plazos estrictos, y la diferencia entre una orden de deportación y una segunda oportunidad suele estar en la preparación. Desde la primera audiencia de Calendario Maestro hasta la audiencia Individual de méritos y, cuando es necesario, una apelación, manejamos cada etapa con la documentación y la evidencia sobre condiciones del país que estos casos exigen, para clientes en toda Pensilvania y, en asuntos migratorios, en todo el país. Cada consulta es confidencial."
    ],
    servicesTitle: "Defensas y Formas de Alivio que Manejamos",
    services: [
      {
        title: "Asilo y Suspensión de Remoción",
        description: "Representación para personas que buscan protección frente a persecución o daño en sus países de origen."
      },
      {
        title: "Cancelación de Remoción",
        description: "Defensa para residentes permanentes de larga trayectoria y no residentes permanentes que enfrentan deportación."
      },
      {
        title: "Perdones de Inadmisibilidad",
        description: "Presentamos perdones por fraude, causales penales o presencia ilegal para superar impedimentos."
      },
      {
        title: "Junta de Apelaciones de Inmigración",
        description: "Apelamos decisiones desfavorables de jueces de inmigración ante la BIA y los tribunales federales de circuito."
      },
      {
        title: "Audiencias de Fianza y Custodia",
        description: "Buscamos la liberación de la detención mediante audiencias de fianza y abogamos por el monto más bajo que corresponda."
      },
      {
        title: "Ajuste y Alivio ante el Tribunal",
        description: "Buscamos el ajuste de estatus, la discreción fiscal y la salida voluntaria cuando sirven a los objetivos del cliente."
      },
      {
        title: "Mociones de Reapertura o Reconsideración",
        description: "Reabrimos órdenes dictadas en ausencia y casos previos cuando nuevos hechos o fundamentos legales justifican una nueva revisión."
      }
    ],
    processTitle: "Procedimiento de Defensa contra la Remoción",
    process: [
      {
        step: "01",
        title: "Evaluación de Emergencia",
        description: "Revisamos la Notificación de Comparecencia (NTA) y evaluamos las acciones y opciones inmediatas."
      },
      {
        step: "02",
        title: "Estrategia de Defensa",
        description: "Seleccionamos las formas de alivio más viables (asilo, cancelación, ajuste) y preparamos las presentaciones ante el tribunal."
      },
      {
        step: "03",
        title: "Recopilación de Pruebas",
        description: "Reunimos informes sobre condiciones del país, declaraciones de testigos y documentación personal."
      },
      {
        step: "04",
        title: "Representación ante el Tribunal",
        description: "Lo representamos con firmeza en las audiencias de Calendario Maestro e Individuales (de juicio) ante el juez de inmigración."
      }
    ],
    h1: "Abogados de Defensa contra la Deportación al Servicio de Pensilvania",
    faqs: [
      { q: "¿Qué debo hacer si yo o un familiar somos detenidos?", a: "Contacte a un abogado de inmediato. Reúna todos los documentos que tenga y evite firmar papeles que no entienda." },
      { q: "¿Se puede detener una deportación?", a: "Según los hechos, pueden existir defensas como la cancelación de remoción, el asilo o los perdones. Evaluamos con honestidad qué aplica en su caso." },
      { q: "¿Qué es la cancelación de remoción?", a: "Una forma de alivio que puede permitir a ciertas personas con larga residencia permanecer en el país, si se cumplen requisitos estrictos." },
      { q: "¿Puedo apelar la decisión de un juez de inmigración?", a: "Con frecuencia sí, ante la Junta de Apelaciones de Inmigración y dentro de plazos estrictos. El tiempo es determinante." },
      { q: "¿Con qué rapidez debo actuar?", a: "Lo antes posible. Los plazos en los casos de remoción son estrictos, y prepararse temprano fortalece sus opciones." },
      { q: "¿La consulta es confidencial?", a: "Sí. Su consulta está protegida y es confidencial." }
    ],
    relatedPages: [
      { label: "Ley de Inmigración", href: "/practice-areas/immigration-law" },
      { label: "Guía de Defensa contra la Deportación", href: "/insights/deportation-defense-guide" },
      { label: "Agendar una Consulta", href: "/contact" }
    ]
  },
  "family-law": {
    slug: "family-law",
    title: "Derecho Familiar",
    category: "Derecho Familiar",
    heroSubtitle: "Divorcio, custodia de menores, asuntos de manutención y acuerdos prenupciales atendidos con discreción, empatía y criterio firme.",
    overview: [
      "Los asuntos de derecho familiar son profundamente personales y con frecuencia emocionalmente intensos. Ya sea que atraviese un divorcio, busque la custodia de sus hijos o redacte un acuerdo prenupcial, necesita un abogado que combine conocimiento legal con una comprensión genuina.",
      "Representamos a clientes en Pensilvania y Nueva Jersey, trabajando para lograr resultados justos que protejan sus bienes y el bienestar de sus hijos. Priorizamos las soluciones amistosas mediante la negociación, pero estamos listos para defenderlo con firmeza ante los tribunales cuando es necesario.",
      "Lo que distingue a nuestra práctica familiar es que el derecho migratorio está bajo el mismo techo. Cuando el estatus de un cliente, la green card de un cónyuge o la ciudadanía de un hijo se cruza con un divorcio o una custodia, atendemos ambos lados en conjunto en lugar de enviarlo a otra firma. Al servicio del condado de Montgomery, Lansdale y el área metropolitana de Filadelfia, aportamos un criterio firme y discreto a algunas de las decisiones más personales que nuestros clientes toman."
    ],
    servicesTitle: "Servicios de Relaciones Familiares",
    services: [
      {
        title: "Divorcio y Disolución",
        description: "Representamos a clientes en divorcios contenciosos y no contenciosos, incluida la división compleja de bienes."
      },
      {
        title: "Custodia y Régimen de Visitas",
        description: "Negociamos acuerdos de custodia y representamos a los padres en disputas de custodia ante los tribunales."
      },
      {
        title: "Manutención de Menores y Conyugal",
        description: "Calculamos y obtenemos órdenes de manutención de menores, manutención conyugal y pensión alimenticia."
      },
      {
        title: "Acuerdos Prenupciales",
        description: "Redactamos y revisamos acuerdos prenupciales y posnupciales para proteger los bienes personales."
      },
      {
        title: "Distribución Equitativa",
        description: "Identificamos, valoramos y dividimos de forma justa los bienes conyugales, las cuentas de jubilación y las participaciones empresariales."
      },
      {
        title: "Modificaciones de Custodia y Reubicación",
        description: "Modificamos órdenes existentes y atendemos solicitudes de reubicación conforme cambian las circunstancias familiares."
      },
      {
        title: "Asuntos Familiares con Implicaciones Migratorias",
        description: "Coordinamos el divorcio y la custodia con el estatus migratorio para que un asunto familiar no ponga en riesgo una green card."
      }
    ],
    processTitle: "Nuestro Proceso en Derecho Familiar",
    process: [
      {
        step: "01",
        title: "Consulta Inicial",
        description: "Comprendemos la dinámica de su familia, sus bienes y sus objetivos para construir un enfoque constructivo."
      },
      {
        step: "02",
        title: "Descubrimiento y Valoración",
        description: "Reunimos registros financieros, avalúos de bienes y demás información relevante para definir el patrimonio."
      },
      {
        step: "03",
        title: "Negociación y Mediación",
        description: "Buscamos alcanzar un acuerdo justo mediante negociaciones o sesiones de mediación estructuradas."
      },
      {
        step: "04",
        title: "Litigio ante los Tribunales",
        description: "Defendemos sus derechos parentales y financieros ante un juez de familia si no es posible llegar a un acuerdo."
      }
    ],
    h1: "Abogados de Derecho Familiar y Divorcio en el Condado de Montgomery, PA",
    faqs: [
      { q: "¿Pensilvania es un estado de divorcio sin culpa?", a: "Pensilvania permite el divorcio sin culpa y el basado en culpa. Le explicaremos cuál se ajusta a sus circunstancias." },
      { q: "¿Cómo se decide la custodia en Pensilvania?", a: "Los tribunales ponderan una serie de factores centrados en el interés superior del menor. Lo ayudamos a presentar su caso con claridad." },
      { q: "¿Cómo se dividen los bienes?", a: "Pensilvania aplica la distribución equitativa: una división justa, no necesariamente igual. Trabajamos para proteger sus intereses." },
      { q: "¿Manejan casos de alto conflicto?", a: "Sí, y también trabajamos para reducir el conflicto cuando es posible, lo que suele beneficiar más a las familias y a los hijos." },
      { q: "¿Qué pasa si mi cónyuge o yo no somos ciudadanos estadounidenses?", a: "El estatus migratorio puede incidir en el divorcio y la custodia. Nuestra experiencia migratoria nos permite manejarlo con cuidado." },
      { q: "¿Cuánto costará?", a: "Depende de la complejidad y del nivel de disputa. Conversamos los honorarios abiertamente en su consulta." }
    ],
    relatedPages: [
      { label: "Divorcio Internacional", href: "/practice-areas/international-divorce" },
      { label: "Ley de Inmigración", href: "/practice-areas/immigration-law" },
      { label: "Agendar una Consulta", href: "/contact" }
    ]
  },
  "international-divorce": {
    slug: "international-divorce",
    title: "Divorcio Internacional",
    category: "Derecho Familiar",
    heroSubtitle: "Divorcios y asuntos de custodia transfronterizos que involucran jurisdicciones extranjeras, doble ciudadanía y bienes internacionales.",
    overview: [
      "Cuando un matrimonio se disuelve a través de fronteras internacionales, surgen desafíos legales singulares. Asuntos como la distribución de bienes en el extranjero, la custodia internacional de menores, la notificación de documentos bajo el Convenio de La Haya y el reconocimiento de matrimonios extranjeros requieren un conocimiento altamente especializado.",
      "La doble experiencia de nuestra firma en derecho familiar y migratorio nos hace especialmente idóneos para manejar divorcios internacionales. Trabajamos para proteger sus derechos, coordinamos con abogados extranjeros cuando es necesario y velamos por que el estatus migratorio de su familia no se vea comprometido.",
      "Estos casos giran en torno a preguntas que pocas firmas enfrentan: qué tribunal de qué país tiene jurisdicción, cómo se tratará aquí un decreto extranjero y cómo notificar documentos en el exterior bajo el Convenio de La Haya. Planteamos esas preguntas desde el inicio, coordinamos con abogados en el extranjero y mantenemos siempre a la vista las consecuencias migratorias, para clientes en el condado de Montgomery y Filadelfia y para padres y cónyuges que viven fuera de Estados Unidos."
    ],
    servicesTitle: "Representación Familiar Internacional",
    services: [
      {
        title: "División de Bienes Transfronterizos",
        description: "Identificamos, valoramos y dividimos bienes ubicados fuera de Estados Unidos."
      },
      {
        title: "Disputas de Custodia bajo La Haya",
        description: "Representamos a padres en disputas internacionales de custodia bajo el Convenio de La Haya."
      },
      {
        title: "Reconocimiento de Divorcios Extranjeros",
        description: "Velamos por que los decretos de divorcio extranjeros sean reconocidos legalmente en Estados Unidos y viceversa."
      },
      {
        title: "Protección del Estatus Migratorio",
        description: "Asesoramos a nuestros clientes sobre cómo el divorcio afecta las peticiones migratorias pendientes o activas."
      },
      {
        title: "Disputas de Jurisdicción y Foro",
        description: "Analizamos qué país o estado debe conocer su caso y litigamos la jurisdicción cuando está en disputa."
      },
      {
        title: "Ejecución Internacional de Manutención",
        description: "Gestionamos y hacemos cumplir la manutención de menores y conyugal más allá de las fronteras cuando los tratados y la reciprocidad lo permiten."
      },
      {
        title: "Coordinación con Abogados Extranjeros",
        description: "Trabajamos junto a abogados y localizadores de bienes en el extranjero para alcanzar un acuerdo ejecutable en todas las jurisdicciones pertinentes."
      }
    ],
    processTitle: "Procedimiento Transfronterizo",
    process: [
      {
        step: "01",
        title: "Análisis de Jurisdicción",
        description: "Determinamos qué estado o país tiene jurisdicción para conocer el caso de divorcio o custodia."
      },
      {
        step: "02",
        title: "Notificación bajo La Haya",
        description: "Recorremos los canales formales del Convenio de La Haya sobre Notificación para entregar documentos en el extranjero."
      },
      {
        step: "03",
        title: "Coordinación de Expertos",
        description: "Nos coordinamos con asesores legales extranjeros, localizadores de bienes y contadores forenses."
      },
      {
        step: "04",
        title: "Acuerdo y Decreto",
        description: "Formalizamos un acuerdo internacional que sea ejecutable más allá de las fronteras."
      }
    ],
    h1: "Abogados de Divorcio Internacional y Custodia Transfronteriza",
    faqs: [
      { q: "¿Qué es el Convenio de La Haya sobre custodia de menores?", a: "Un tratado internacional para la restitución inmediata de menores trasladados ilícitamente a otro país. Manejamos estos casos, que son muy sensibles al tiempo." },
      { q: "¿El tribunal de qué país decide mi divorcio?", a: "La jurisdicción depende de la residencia, la ciudadanía y el lugar donde se casó. Evaluamos dónde corresponde su caso." },
      { q: "¿Se puede reconocer en EE. UU. un divorcio extranjero?", a: "Con frecuencia sí, bajo ciertas condiciones. Evaluamos el reconocimiento y sus efectos aquí." },
      { q: "¿Cómo afecta el divorcio a mi green card?", a: "Sobre todo para los residentes condicionales, el divorcio puede afectar el estatus. Planificamos para protegerlo." },
      { q: "¿Qué ocurre con los bienes en otro país?", a: "Pueden formar parte de la división; trabajamos para identificarlos y atenderlos, coordinando en el extranjero según sea necesario." },
      { q: "¿Trabajan con abogados en otros países?", a: "Sí, nos coordinamos con abogados extranjeros cuando el asunto lo requiere." }
    ],
    relatedPages: [
      { label: "Derecho Familiar", href: "/practice-areas/family-law" },
      { label: "Ley de Inmigración", href: "/practice-areas/immigration-law" },
      { label: "Casos de Custodia Internacional", href: "/insights/international-custody-cases" },
      { label: "Agendar una Consulta", href: "/contact" }
    ]
  },
  "business-law": {
    slug: "business-law",
    title: "Derecho Corporativo",
    category: "Negocios y Propiedad",
    heroSubtitle: "Constitución de entidades, contratos comerciales, transacciones y asesoría continua para empresas familiares y cerradas.",
    overview: [
      "Iniciar, operar y hacer crecer un negocio requiere una base legal sólida. Desde elegir la estructura societaria adecuada hasta redactar contratos claros y ejecutables, una asesoría legal proactiva ayuda a evitar disputas costosas y posiciona su negocio para el éxito.",
      "Somos asesores legales de confianza para emprendedores, empresas cerradas y corporaciones establecidas. Redactamos acuerdos comerciales, negociamos arrendamientos, guiamos a nuestros clientes en adquisiciones de empresas y ofrecemos consejos prácticos con mentalidad de negocio.",
      "Para los fundadores que además son extranjeros, nuestra práctica migratoria es una ventaja real: podemos alinear la estructura societaria con una estrategia de visa de inversionista por tratado o por empleo desde el primer día. Y como también manejamos bienes raíces, una empresa que compra, arrienda o financia una propiedad obtiene el trabajo corporativo y el inmobiliario de un solo equipo. Atendemos a empresas en Lansdale, el condado de Montgomery y toda la región metropolitana de Filadelfia."
    ],
    servicesTitle: "Nuestros Servicios Corporativos",
    services: [
      {
        title: "Constitución de Entidades",
        description: "Asesoramos y constituimos LLC, S-Corporations, C-Corporations y sociedades."
      },
      {
        title: "Contratos Comerciales",
        description: "Redactamos, revisamos y negociamos contratos de servicios, acuerdos con proveedores y acuerdos de confidencialidad."
      },
      {
        title: "Contratos Laborales",
        description: "Elaboramos acuerdos de no competencia, contratos de ejecutivos y manuales del empleado."
      },
      {
        title: "Fusiones y Adquisiciones",
        description: "Representamos a compradores y vendedores en compras de activos, compras de acciones y reestructuraciones corporativas."
      },
      {
        title: "Acuerdos Operativos y de Sociedad",
        description: "Redactamos los acuerdos internos que definen la propiedad, la administración y qué ocurre cuando un socio se retira."
      },
      {
        title: "Arrendamiento Comercial y Bienes Raíces",
        description: "Negociamos arrendamientos y coordinamos compras y financiamiento de propiedades junto con nuestra práctica inmobiliaria."
      },
      {
        title: "Asesoría para Empresas de Capital Extranjero",
        description: "Estructuramos empresas estadounidenses para fundadores extranjeros en sintonía con la estrategia de visas de inversionista por tratado y por empleo."
      }
    ],
    processTitle: "Nuestro Proceso de Asesoría Corporativa",
    process: [
      {
        step: "01",
        title: "Identificación de Necesidades",
        description: "Evaluamos sus objetivos comerciales, la regulación de su industria y su tolerancia al riesgo."
      },
      {
        step: "02",
        title: "Redacción de Documentos",
        description: "Preparamos documentos societarios, contratos o acuerdos de transacción hechos a la medida."
      },
      {
        step: "03",
        title: "Negociación",
        description: "Negociamos los términos del acuerdo y las revisiones contractuales para que los intereses de su negocio queden plenamente protegidos."
      },
      {
        step: "04",
        title: "Ejecución y Asesoría",
        description: "Cerramos las transacciones y brindamos apoyo legal continuo conforme su negocio crece."
      }
    ],
    h1: "Abogados de Constitución de Empresas y LLC en Pensilvania",
    faqs: [
      { q: "¿Cómo constituyo una LLC en Pensilvania?", a: "Se presenta un Certificado de Organización ante el estado y se establece un acuerdo operativo; nosotros nos encargamos de los detalles y lo estructuramos correctamente." },
      { q: "¿Necesito un abogado corporativo para abrir una empresa?", a: "No siempre, pero una estructura sólida y buenos contratos desde el inicio evitan problemas costosos más adelante." },
      { q: "¿Pueden revisar o redactar nuestros contratos?", a: "Sí: desde contratos con clientes hasta acuerdos con proveedores y de sociedad." },
      { q: "¿Ayudan a empresas que contratan trabajadores extranjeros?", a: "Sí; nuestra práctica migratoria apoya el patrocinio del empleador y el cumplimiento normativo." },
      { q: "¿Ofrecen asesoría continua?", a: "Sí: muchos clientes nos mantienen como su asesor de cabecera." },
      { q: "¿Cómo cobran?", a: "Según el asunto, tarifa fija o por hora; explicamos los honorarios con claridad en su consulta." }
    ],
    relatedPages: [
      { label: "Derecho Inmobiliario", href: "/practice-areas/real-estate-law" },
      { label: "Ley de Inmigración", href: "/practice-areas/immigration-law" },
      { label: "Cómo Constituir una LLC en Pensilvania", href: "/insights/forming-an-llc-in-pa" },
      { label: "Agendar una Consulta", href: "/contact" }
    ]
  },
  "real-estate-law": {
    slug: "real-estate-law",
    title: "Derecho Inmobiliario",
    category: "Negocios y Propiedad",
    heroSubtitle: "Transacciones inmobiliarias residenciales y comerciales, trabajo de títulos, cierres y asuntos multiestatales.",
    overview: [
      "Las transacciones inmobiliarias representan inversiones financieras importantes. Ya sea que compre una casa, adquiera una propiedad comercial o arriende un espacio de oficina, contar con un abogado experimentado que revise sus documentos asegura que su inversión esté protegida.",
      "Nuestra firma ofrece servicios inmobiliarios integrales, incluida la revisión de contratos, búsquedas de títulos, transferencias de escrituras y representación en el cierre. Nuestro equipo ha realizado trabajo de títulos inmobiliarios en dieciocho estados, aportando una experiencia singular en cierres multiestatales.",
      "Esa experiencia multiestatal en títulos importa cuando una compra, un refinanciamiento o una inversión cruza fronteras estatales o involucra a una parte de otro estado, el tipo de transacción en la que una firma puramente local tendría que derivarlo a otro despacho. Para clientes empresariales e inversionistas extranjeros, coordinamos el trabajo inmobiliario con nuestras prácticas corporativa y migratoria para que toda la transacción avance como una sola. Atendemos a compradores, vendedores y prestamistas en el condado de Montgomery, Lansdale y el área de Filadelfia."
    ],
    servicesTitle: "Servicios Legales Inmobiliarios",
    services: [
      {
        title: "Cierres y Representación",
        description: "Representamos a compradores, vendedores y prestamistas en cierres inmobiliarios residenciales y comerciales."
      },
      {
        title: "Examen de Títulos",
        description: "Realizamos búsquedas detalladas de títulos y gestionamos el seguro de título para despejar cualquier gravamen."
      },
      {
        title: "Arrendamientos Comerciales",
        description: "Redactamos y negociamos contratos de arrendamiento comerciales, de oficina e industriales."
      },
      {
        title: "Transferencias de Propiedad",
        description: "Preparamos escrituras, servidumbres y otros instrumentos para la transferencia de derechos de propiedad."
      },
      {
        title: "Contratos de Compraventa",
        description: "Revisamos y negociamos los contratos de compraventa para fijar términos, condiciones y protecciones claras antes de que firme."
      },
      {
        title: "Transacciones Multiestatales",
        description: "Atendemos cierres y asuntos de títulos que cruzan fronteras estatales, respaldados por experiencia en títulos en dieciocho estados."
      },
      {
        title: "Refinanciamientos y Escrituras",
        description: "Gestionamos cierres de refinanciamiento, escrituras de renuncia y de garantía, y transferencias entre familiares o entidades."
      }
    ],
    processTitle: "Cronología del Cierre Inmobiliario",
    process: [
      {
        step: "01",
        title: "Revisión del Contrato",
        description: "Revisamos y negociamos el contrato de compraventa para establecer términos y condiciones claros."
      },
      {
        step: "02",
        title: "Búsqueda y Saneamiento de Título",
        description: "Examinamos los registros de título para resolver gravámenes, servidumbres u otras disputas de linderos antes del cierre."
      },
      {
        step: "03",
        title: "Preparación del Cierre",
        description: "Nos coordinamos con prestamistas, corredores y compañías de títulos para preparar todos los estados de liquidación."
      },
      {
        step: "04",
        title: "Cierre y Liquidación",
        description: "Revisamos y firmamos todos los documentos de cierre para asegurar una transferencia de propiedad sin complicaciones."
      }
    ],
    h1: "Abogados de Cierres Inmobiliarios y Títulos en el Condado de Montgomery, PA",
    faqs: [
      { q: "¿Necesito un abogado para un cierre inmobiliario en Pensilvania?", a: "Pensilvania no siempre lo exige, pero un abogado protege sus intereses en el contrato, el título y el cierre." },
      { q: "¿Qué implica el trabajo de títulos?", a: "Examinar el historial de título de la propiedad, resolver cualquier defecto y coordinar el seguro de título para que su propiedad quede protegida." },
      { q: "¿Manejan bienes raíces comerciales?", a: "Sí: compras, ventas y arrendamientos de propiedades comerciales y de inversión." },
      { q: "¿Pueden ayudarme con una propiedad en otro estado?", a: "Con frecuencia sí: nuestra experiencia en títulos abarca dieciocho estados." },
      { q: "¿Representan tanto a compradores como a vendedores?", a: "Sí, aunque no en la misma transacción. Aclararemos su representación desde el inicio." },
      { q: "¿Cuánto cobran por un cierre?", a: "Depende de la transacción; explicamos los honorarios con claridad en su consulta." }
    ],
    relatedPages: [
      { label: "Derecho Corporativo", href: "/practice-areas/business-law" },
      { label: "Ley de Inmigración", href: "/practice-areas/immigration-law" },
      { label: "Agendar una Consulta", href: "/contact" }
    ]
  }
};

// Keyed by locale; the slug stays identical in both so URLs never move.
const practiceAreasData = { en: practiceAreasDataEn, es: practiceAreasDataEs };


export async function generateStaticParams() {
  return [
    { slug: "immigration-law" },
    { slug: "green-cards-visas" },
    { slug: "citizenship-naturalization" },
    { slug: "deportation-defense" },
    { slug: "family-law" },
    { slug: "international-divorce" },
    { slug: "business-law" },
    { slug: "real-estate-law" }
  ];
}

const metaMap: Record<Locale, Record<string, { title: string; description: string }>> = {
  en: {
  "immigration-law": {
    title: "Immigration Lawyer in Philadelphia & Lansdale, PA",
    description: "Experienced immigration attorneys serving Philadelphia, Montgomery County & nationwide. Green cards, visas, citizenship & removal defense. Consultations available.",
  },
  "green-cards-visas": {
    title: "Green Card & Visa Lawyers | H-1B, EB-5, Family | Lansdale PA",
    description: "Green card & visa attorneys in Lansdale, PA. Family & employment green cards, H-1B, L-1, O-1, EB-5, adjustment of status & consular processing. Consultations available.",
  },
  "citizenship-naturalization": {
    title: "Naturalization & Citizenship Lawyer | Lansdale, PA",
    description: "Naturalization & citizenship attorneys in Lansdale, PA. N-400 applications, eligibility, the citizenship test & complex cases. 45+ years. Consultations available.",
  },
  "deportation-defense": {
    title: "Deportation & Removal Defense Lawyers in Pennsylvania",
    description: "Facing removal proceedings? Our deportation defense attorneys represent clients before the immigration courts & the BIA. 45+ years. Confidential consultation.",
  },
  "family-law": {
    title: "Family Law & Divorce Attorneys in Montgomery County, PA",
    description: "Divorce, custody, support & prenuptial agreements in Montgomery County & Lansdale, PA. Discreet, steady family law counsel. Consultations available. 45+ years.",
  },
  "international-divorce": {
    title: "International Divorce & Cross-Border Custody Lawyers | PA",
    description: "Cross-border divorce & international custody attorneys. Hague Convention cases, dual citizenship, foreign assets. Immigration + family law under one roof.",
  },
  "business-law": {
    title: "Business & LLC Formation Attorneys in Pennsylvania",
    description: "Business law counsel in Lansdale, PA: LLC & entity formation, contracts, and commercial transactions for closely held businesses. 45+ years. Consultations available.",
  },
  "real-estate-law": {
    title: "Real Estate Closing & Title Attorneys | Montgomery County PA",
    description: "Real estate attorneys for residential & commercial closings, title work, and multi-state transactions. Title experience across 18 states. Consultations available. 45+ yrs.",
  },
},
  es: {
    "immigration-law": {
      title: "Abogado de Inmigración en Filadelfia y Lansdale, PA",
      description: "Abogados de inmigración con experiencia al servicio de Filadelfia, el condado de Montgomery y todo el país. Green cards, visas, ciudadanía y defensa contra la deportación. Consultas disponibles.",
    },
    "green-cards-visas": {
      title: "Abogados de Green Card y Visas | H-1B, EB-5, Familia | Lansdale PA",
      description: "Abogados de green cards y visas en Lansdale, PA. Green cards por familia y empleo, H-1B, L-1, O-1, EB-5, ajuste de estatus y trámite consular. Consultas disponibles.",
    },
    "citizenship-naturalization": {
      title: "Abogado de Naturalización y Ciudadanía | Lansdale, PA",
      description: "Abogados de naturalización y ciudadanía en Lansdale, PA. Solicitudes N-400, elegibilidad, el examen de ciudadanía y casos complejos. Más de 45 años. Consultas disponibles.",
    },
    "deportation-defense": {
      title: "Abogados de Defensa contra la Deportación en Pensilvania",
      description: "¿Enfrenta un proceso de remoción? Nuestros abogados de defensa contra la deportación representan clientes ante los tribunales de inmigración y la BIA. Más de 45 años. Consulta confidencial.",
    },
    "family-law": {
      title: "Abogados de Derecho Familiar y Divorcio en el Condado de Montgomery, PA",
      description: "Divorcio, custodia, manutención y acuerdos prenupciales en el condado de Montgomery y Lansdale, PA. Asesoría familiar discreta y firme. Consultas disponibles. Más de 45 años.",
    },
    "international-divorce": {
      title: "Abogados de Divorcio Internacional y Custodia Transfronteriza | PA",
      description: "Abogados de divorcio transfronterizo y custodia internacional. Casos del Convenio de La Haya, doble ciudadanía, bienes en el extranjero. Inmigración y derecho familiar bajo un mismo techo.",
    },
    "business-law": {
      title: "Abogados de Constitución de Empresas y LLC en Pensilvania",
      description: "Asesoría corporativa en Lansdale, PA: constitución de LLC y otras entidades, contratos y transacciones comerciales para empresas cerradas. Más de 45 años. Consultas disponibles.",
    },
    "real-estate-law": {
      title: "Abogados de Cierres Inmobiliarios y Títulos | Condado de Montgomery PA",
      description: "Abogados inmobiliarios para cierres residenciales y comerciales, trabajo de títulos y transacciones multiestatales. Experiencia en títulos en 18 estados. Consultas disponibles.",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const locale = (params.locale === "es" ? "es" : "en") as Locale;
  const meta = metaMap[locale][params.slug];
  if (!meta) return {};
  return pageMetadata({
    locale,
    path: `/practice-areas/${params.slug}`,
    title: meta.title,
    description: meta.description,
  });
}

export default function PracticeAreaDetailPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const locale = (params.locale === "es" ? "es" : "en") as Locale;
  const data = practiceAreasData[locale][params.slug];

  if (!data) {
    return notFound();
  }

  return <PracticeAreaClient data={data} />;
}

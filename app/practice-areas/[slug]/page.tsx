import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PracticeAreaClient from "./PracticeAreaClient";

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

const metaMap: Record<string, { title: string; description: string }> = {
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
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const meta = metaMap[params.slug];
  if (!meta) return {};
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical: `https://dobarialaw.com/practice-areas/${params.slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://dobarialaw.com/practice-areas/${params.slug}`,
      siteName: "Dobaria Law PC",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function PracticeAreaDetailPage({ params }: { params: { slug: string } }) {
  const data = practiceAreasData[params.slug];

  if (!data) {
    return notFound();
  }

  return <PracticeAreaClient data={data} />;
}

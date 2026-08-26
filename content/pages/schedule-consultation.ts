// content/pages/schedule-consultation.ts
export const scheduleConsultationContent = {
  hero: {
    eyebrow: "Schedule a Consultation",
    h1: "Talk to an Experienced Immigration Attorney",
    subhead:
      "For 45+ years, Dobaria Law PC has helped individuals, families, and employers across Philadelphia and Montgomery County. Tell us about your situation, and let's discuss how we can help.",
    trustBullets: [
      "Over four decades of experience.",
      "In-depth case evaluation with a qualified attorney.",
      "Clear, honest assessment of your options.",
    ],
  },
  form: {
    submitLabel: "Request My Consultation",
    microcopy: "We respond within 24 business hours. Your information is confidential and protected by attorney-client privilege.",
    callAlternative: "Prefer to call? 215-362-2478",
  },
  whyUs: {
    items: [
      { title: "Experience that matters", body: "More than four decades focused on immigration and nationality law." },
      { title: "Honest assessments", body: "We tell you clearly where you stand and what your options are." },
      { title: "Global reach", body: "We've represented clients from over 50 countries." },
      { title: "A boutique approach", body: "You aren't a file number; you work directly with your attorney." },
    ]
  },
  howItWorks: {
    h2: "What to expect",
    steps: [
      { step: 1, title: "Submit", body: "Submit the form (or call 215-362-2478)." },
      { step: 2, title: "Review", body: "We review your matter — an attorney or team member looks at your situation." },
      { step: 3, title: "Schedule", body: "We respond within 24 business hours to schedule your consultation." },
    ]
  },
  faq: [
    {
      q: "What happens during a consultation?",
      a: "You will speak with an attorney (or a senior paralegal for certain matters) to discuss your situation, understand your goals, and get a preliminary assessment of your options.",
    },
    {
      q: "Is it really free?",
      a: "Yes. The initial consultation is completely free and carries no obligation to hire us.",
    },
    {
      q: "Is my information confidential?",
      a: "Absolutely. Everything you share with us through this form or during your consultation is protected by attorney-client privilege.",
    },
  ],
  meta: {
    title: "Schedule an Immigration Consultation | Dobaria Law PC",
    description:
      "Schedule a consultation with the experienced immigration attorneys at Dobaria Law PC in Lansdale, PA. Tell us about your case today.",
  },
} as const;

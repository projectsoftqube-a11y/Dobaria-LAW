// content/pages/results.ts
export const resultsContent = {
  hero: {
    eyebrow: "Client Voices",
    h1: "What Our Clients Say",
    subhead:
      "For more than 45 years, clients have trusted us with the matters that matter most. Here's what some of them have shared — and the kinds of cases we handle.",
  },
  testimonials: {
    items: [
      { quote: "From the beginning it was a pleasure working with Marcia. I never had any doubts that she could deliver what she promised, and that was my wonderful wife from Ecuador.", name: "David", matterType: "Immigration Law" },
      { quote: "I can't recommend the firm enough. Marcia explained every step of my divorce proceedings in detail, kept me informed throughout the process, and provided personalized service that went above and beyond. Marcia and her staff were gracious, professional, and incredibly helpful.", name: "Alex", matterType: "Family Law" },
      { quote: "I moved from Canada to the United States and struggled with my immigration process for three years without legal help. After hiring Marcia, I received my Green Card in just seven months. She knew exactly what she was doing, was friendly, responsible, and I would absolutely recommend her.", name: "Rita", matterType: "Immigration Law" },
      { quote: "After spending over ten years working with multiple immigration firms, I was told my case was hopeless. Marcia and her team never gave up, guided me through every step, and worked tirelessly until my family's immigration case was successfully resolved. I couldn't be happier with the outcome.", name: "Shyrel", matterType: "Immigration Law" },
      { quote: "Our case was extremely difficult, but Marcia never gave up. She fought for my husband, helped with our immigration matters, expedited my citizenship, and stood by us every step of the way. We are incredibly grateful and highly recommend her.", name: "Jackie", matterType: "Immigration Law" },
      { quote: "When I was facing deportation, Marcia told me, 'I don't like to lose.' She fought my difficult case, helped me avoid deportation, and later guided me through becoming a U.S. citizen. Hiring her firm was worth every penny.", name: "Daniel", matterType: "Deportation Defense" },
    ],
    platformLinks: {
      google: "#"
    }
  },
  representativeMatters: {
    h2: "Representative Matters",
    items: [
      { title: "Family-Based Green Card", description: "Secured for a client after a prior removal order." },
      { title: "Naturalization", description: "Completed for a long-time lawful permanent resident with a complex travel history." },
      { title: "Cross-Border Custody", description: "Matter resolved involving two jurisdictions." },
      { title: "Commercial Real Estate", description: "Multi-state closing and title review." },
    ],
    disclaimer: "Prior results do not guarantee a similar outcome. Every case is different."
  },
  cta: {
    h2: "Ready to talk about your matter?",
    primaryCta: {
      label: "Schedule a Consultation",
      href: "/contact"
    },
    support: "Or call 215-362-2478"
  },
  meta: {
    title: "Client Results & Reviews | Dobaria Law PC, PA",
    description:
      "Read what clients say about Dobaria Law PC and see the kinds of immigration, family & business matters we handle in Lansdale, PA. Consultations available.",
  },
} as const;

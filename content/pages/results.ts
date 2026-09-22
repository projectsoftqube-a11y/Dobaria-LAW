// content/pages/results.ts
//
// Locale-keyed page content. Components read `resultsContent[locale]`.

const en = {
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
    platformLinks: { google: "#" },
  },
  representativeMatters: {
    h2: "Representative Matters",
    items: [
      { title: "Family-Based Green Card", description: "Secured for a client after a prior removal order." },
      { title: "Naturalization", description: "Completed for a long-time lawful permanent resident with a complex travel history." },
      { title: "Cross-Border Custody", description: "Matter resolved involving two jurisdictions." },
      { title: "Commercial Real Estate", description: "Multi-state closing and title review." },
    ],
    disclaimer: "Prior results do not guarantee a similar outcome. Every case is different.",
  },
  cta: {
    h2: "Ready to talk about your matter?",
    primaryCta: { label: "Schedule a Consultation", href: "/contact" },
    support: "Or call 215-362-2478",
  },
  meta: {
    title: "Client Results & Reviews | Dobaria Law PC, PA",
    description:
      "Read what clients say about Dobaria Law PC and see the kinds of immigration, family & business matters we handle in Lansdale, PA. Consultations available.",
  },
};

const es: typeof en = {
  hero: {
    eyebrow: "Voces de Nuestros Clientes",
    h1: "Lo Que Dicen Nuestros Clientes",
    subhead:
      "Durante más de 45 años, nuestros clientes nos han confiado los asuntos que más les importan. Esto es lo que algunos han compartido, y el tipo de casos que atendemos.",
  },
  testimonials: {
    items: [
      { quote: "Desde el principio fue un placer trabajar con Marcia. Nunca tuve dudas de que podría cumplir lo que prometía, y así fue: mi maravillosa esposa de Ecuador.", name: "David", matterType: "Ley de Inmigración" },
      { quote: "No puedo recomendar lo suficiente a esta firma. Marcia me explicó con detalle cada paso de mi proceso de divorcio, me mantuvo informado durante todo el trámite y brindó un servicio personalizado que superó mis expectativas. Marcia y su equipo fueron amables, profesionales e increíblemente serviciales.", name: "Alex", matterType: "Derecho Familiar" },
      { quote: "Me mudé de Canadá a Estados Unidos y batallé con mi proceso migratorio durante tres años sin ayuda legal. Después de contratar a Marcia, recibí mi Green Card en solo siete meses. Sabía exactamente lo que hacía, fue amable y responsable, y la recomendaría sin dudarlo.", name: "Rita", matterType: "Ley de Inmigración" },
      { quote: "Después de más de diez años trabajando con varias firmas de inmigración, me dijeron que mi caso no tenía solución. Marcia y su equipo nunca se rindieron, me guiaron en cada paso y trabajaron incansablemente hasta resolver con éxito el caso migratorio de mi familia. No podría estar más contento con el resultado.", name: "Shyrel", matterType: "Ley de Inmigración" },
      { quote: "Nuestro caso era sumamente difícil, pero Marcia nunca se rindió. Luchó por mi esposo, nos ayudó con nuestros asuntos migratorios, agilizó mi ciudadanía y nos acompañó en cada paso del camino. Estamos enormemente agradecidos y la recomendamos ampliamente.", name: "Jackie", matterType: "Ley de Inmigración" },
      { quote: "Cuando enfrentaba la deportación, Marcia me dijo: «No me gusta perder». Peleó mi caso difícil, me ayudó a evitar la deportación y después me guio para convertirme en ciudadano estadounidense. Contratar a su firma valió cada centavo.", name: "Daniel", matterType: "Defensa contra la Deportación" },
    ],
    platformLinks: { google: "#" },
  },
  representativeMatters: {
    h2: "Casos Representativos",
    items: [
      { title: "Green Card por Familia", description: "Obtenida para un cliente que tenía una orden de remoción previa." },
      { title: "Naturalización", description: "Completada para un residente permanente legal de muchos años con un historial de viajes complejo." },
      { title: "Custodia Transfronteriza", description: "Asunto resuelto entre dos jurisdicciones." },
      { title: "Bienes Raíces Comerciales", description: "Cierre multiestatal y revisión de título." },
    ],
    disclaimer: "Los resultados anteriores no garantizan un resultado similar. Cada caso es distinto.",
  },
  cta: {
    h2: "¿Listo para hablar sobre su asunto?",
    primaryCta: { label: "Agendar una Consulta", href: "/contact" },
    support: "O llame al 215-362-2478",
  },
  meta: {
    title: "Resultados y Reseñas de Clientes | Dobaria Law PC, PA",
    description:
      "Lea lo que dicen nuestros clientes sobre Dobaria Law PC y conozca los asuntos migratorios, familiares y corporativos que atendemos en Lansdale, PA. Consultas disponibles.",
  },
};

export const resultsContent = { en, es };

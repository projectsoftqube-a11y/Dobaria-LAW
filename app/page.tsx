'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import TrustMetrics from '@/components/sections/TrustMetrics';
import About from '@/components/sections/About';
import PracticeAreas from '@/components/sections/PracticeAreas';
import WhyUs from '@/components/sections/WhyUs';
import SuccessStories from '@/components/sections/SuccessStories';
import Attorneys from '@/components/sections/Attorneys';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { legalServiceSchema, organizationSchema, webSiteSchema, faqPageSchema } from '@/lib/schema';

const homepageFaqs = [
  { q: 'What types of cases does Dobaria Law PC handle?', a: 'Immigration, green cards & visas, citizenship & naturalization, deportation defense, family law, international divorce, business law, and real estate law.' },
  { q: 'How do I schedule an initial consultation?', a: 'You can schedule a consultation by completing our online contact form, calling our office directly, or sending us an email. We respond within 24 hours and offer flexible scheduling.' },
  { q: 'What is the cost of an initial consultation?', a: 'We offer an initial consultation for most practice areas, and we will confirm the fee when you reach out. It allows us to understand your situation and provide preliminary guidance on your options.' },
  { q: 'Do you work with clients outside of the local area?', a: 'Yes. Our firm regularly represents clients across multiple states and internationally. We leverage technology for remote consultations and are experienced in managing cross-border matters.' },
  { q: 'How long does a typical immigration case take?', a: 'Immigration timelines vary significantly depending on the case type and individual circumstances. Some matters can be resolved in weeks, while complex cases may take months to years. We provide clear timeline estimates after evaluating your situation.' },
  { q: 'Can the firm represent both businesses and individuals?', a: 'Absolutely. We represent sole proprietors, startups, established corporations, and individuals across all our practice areas. Our attorneys tailor their approach to the unique needs of each client.' },
  { q: 'What should I bring to my first consultation?', a: 'Bring any relevant documents related to your matter — contracts, correspondence, legal notices, identification, immigration documents, court filings, or financial records.' },
  { q: 'Do you offer payment plans or alternative fee arrangements?', a: 'We offer various fee structures including hourly billing, flat fees for defined matters, and payment plans for qualifying clients. All fee arrangements are discussed transparently at the outset.' },
];

export default function Home() {
  return (
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(homepageFaqs)) }} />
        <Navbar />
        <Hero />
        <TrustMetrics />
        <About />
        <PracticeAreas />
        <WhyUs />
        <SuccessStories />
        <Attorneys />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
  );
}

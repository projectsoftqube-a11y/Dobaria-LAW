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
import { useTranslations } from 'next-intl';
import { legalServiceSchema, organizationSchema, webSiteSchema, faqPageSchema } from '@/lib/schema';



export default function Home() {
  // Built from the same messages the FAQ section renders, so the structured
  // data search engines read always matches the page, in either language.
  const t = useTranslations('faq');
  const homepageFaqs = Array.from({ length: 8 }, (_, i) => ({
    q: t(`q${i + 1}`),
    a: t(`a${i + 1}`),
  }));

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

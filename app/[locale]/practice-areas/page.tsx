import { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n";
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import { JsonLd } from '@/components/JsonLd';
import { practiceAreasHub } from '@/content/pages/practice-areas';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArrowRight, Phone } from 'lucide-react';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "pageMeta" });
  return pageMetadata({
    locale: locale as Locale,
    path: "/practice-areas",
    title: t("practiceAreasTitle"),
    description: t("practiceAreasDescription"),
  });
}

export default async function PracticeAreasPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { hero, intro, groups, trustBand, helper, faqs, finalCta } =
    practiceAreasHub[(locale === "es" ? "es" : "en") as "en" | "es"];
  const t = await getTranslations({ locale, namespace: "practiceHub" });

  return (
    <main className="bg-[#F8F6F2] min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#0B0F17] to-[#1A2435]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Gold radial glow */}
        <div
          className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: 'radial-gradient(circle,#C29A3E 0%,transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(circle,#C29A3E 0%,transparent 65%)' }}
        />

        <div className="relative z-10 site-container">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Practice Areas', href: '/practice-areas' },
            ]}
          />

          <div className="mt-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">
                {hero.eyebrow}
              </span>
            </div>
            <h1
              className="text-white leading-[1.04] mb-7"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(44px,8vw,90px)',
                letterSpacing: '-0.01em',
              }}
            >
              {hero.h1}
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
              {hero.subhead}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-7 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                {hero.primaryCta.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-7 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="site-section bg-white border-b border-gray-100">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left — image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-[0_24px_60px_-16px_rgba(17,24,39,0.18)]">
                <img
                  src="/images/brand-panel-landscape.svg"
                  alt="Dobaria Law PC"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F17]/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#1B1E49] rounded-xl px-6 py-5 shadow-[0_16px_40px_-8px_rgba(17,24,39,0.3)]">
                <p
                  className="text-[#C29A3E] leading-none mb-1"
                  style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 42 }}
                >
                  45+
                </p>
                <p className="text-gray-400 text-[11px] uppercase tracking-[0.15em] font-semibold">Years of Counsel</p>
              </div>

              {/* Gold frame accent */}
              <div className="absolute -inset-3 border border-[#C29A3E]/20 rounded-xl pointer-events-none hidden lg:block" />
            </div>

            {/* Right — text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">About Our Practice</span>
              </div>
              <h2
                className="text-[#14163A] leading-[1.08] mb-7"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.01em' }}
              >
                {t('aboutHeadingFull')}
              </h2>
              <div className="space-y-5">
                {intro.map((para, idx) => (
                  <p key={idx} className="text-[#4B5563] text-[16px] leading-[1.8]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Trust items */}
              <div className="mt-9 grid grid-cols-2 gap-4">
                {trustBand.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C29A3E] flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-7 py-3.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  Schedule a Consultation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#C29A3E] text-[#374151] hover:text-[#C29A3E] px-7 py-3.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  About the Firm
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Practice Area Groups ── */}
      <section className="site-section bg-[#F8F6F2]">
        <div className="site-container space-y-16">
          {groups.map((group, gIdx) => {
            // offset for global numbering
            const offset = groups.slice(0, gIdx).reduce((sum, g) => sum + g.areas.length, 0);
            return (
              <div key={gIdx}>
                {/* Group heading */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-[1px] bg-[#C29A3E]" />
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C29A3E]">
                    {group.heading}
                  </h2>
                  <div className="flex-1 h-[1px] bg-gray-200" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {group.areas.map((area, aIdx) => {
                    const num = offset + aIdx + 1;
                    return (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="group flex flex-col bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_2px_20px_-8px_rgba(17,24,39,0.07)] hover:shadow-[0_16px_48px_-12px_rgba(17,24,39,0.13)] hover:-translate-y-0.5 transition-all duration-400"
                      >
                        {/* Top accent */}
                        <div className="h-[3px] bg-gradient-to-r from-[#C29A3E] to-[#9C7A26] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                        <div className="flex flex-col flex-grow p-7">
                          {/* Number */}
                          <span
                            className="text-[#C29A3E]/20 font-semibold leading-none mb-4 select-none"
                            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48 }}
                            aria-hidden
                          >
                            {String(num).padStart(2, '0')}
                          </span>

                          {/* Title */}
                          <h3 className="text-[24px] font-serif font-semibold text-[#14163A] mb-3 leading-snug group-hover:text-[#C29A3E] transition-colors duration-300">
                            {area.title}
                          </h3>

                          {/* Body */}
                          <p className="text-gray-500 text-[14px] leading-relaxed flex-grow">
                            {area.body}
                          </p>

                          {/* CTA */}
                          <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-2 text-[#C29A3E] text-[11px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                            Learn more <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Helper Block ── */}
      <section className="site-section bg-white border-t border-b border-gray-100">
        <div className="site-container">
          <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-[#EFE7DA] to-[#E8DDD0] p-10 sm:p-14 text-center relative overflow-hidden">
            <div
              className="absolute -right-10 -top-10 opacity-[0.07] pointer-events-none select-none"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 200, color: '#C29A3E', lineHeight: 1 }}
              aria-hidden
            >
              LAW
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-6 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Not Sure?</span>
                <span className="w-6 h-[1px] bg-[#C29A3E]" />
              </div>
              <h2
                className="text-[#14163A] mb-4"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(28px,5vw,48px)', letterSpacing: '0.01em' }}
              >
                {helper.h2}
              </h2>
              <p className="text-[#4B5563] text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
                {helper.body}
              </p>
              <Link
                href={helper.cta.href}
                className="inline-flex items-center gap-2 bg-[#1B1E49] hover:bg-[#0B0F17] text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                {helper.cta.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="site-section bg-[#F8F6F2]">
        <div className="site-container">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
            {/* Left label */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">FAQ</span>
              </div>
              <h2
                className="text-[#14163A] leading-snug mb-4"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.01em' }}
              >
                Common Questions
              </h2>
              <p className="text-[#6B7280] text-[15px] leading-relaxed">
                {t('faqIntroFull')}
              </p>
            </div>

            {/* Accordion */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-10">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <AccordionTrigger className="text-left text-[16px] font-serif font-semibold text-[#1B1E49] py-5 hover:text-[#C29A3E] hover:no-underline transition-colors [&[data-state=open]]:text-[#C29A3E]">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4B5563] text-[15px] leading-[1.75] pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="site-section bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 site-container text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Schedule a Consultation</span>
            <span className="w-8 h-[1px] bg-[#C29A3E]" />
          </div>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(36px,6vw,72px)', letterSpacing: '-0.01em' }}
          >
            {finalCta.h2}
          </h2>
          <p className="text-gray-400 text-[15px] mb-10 max-w-lg mx-auto">{finalCta.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={finalCta.cta.href}
              className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              {finalCta.cta.label} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:+12153622478"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call 215-362-2478
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dobarialaw.com' }, { '@type': 'ListItem', position: 2, name: 'Practice Areas', item: 'https://dobarialaw.com/practice-areas' }] }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://dobarialaw.com/practice-areas#collection',
        url: 'https://dobarialaw.com/practice-areas',
        name: 'Legal Practice Areas in Lansdale, PA | Dobaria Law PC',
        isPartOf: { '@id': 'https://dobarialaw.com/#website' },
        about: { '@id': 'https://dobarialaw.com/#organization' },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: groups
            .flatMap((g) => g.areas as ReadonlyArray<{ title: string; href: string }>)
            .map((area, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: area.title,
              url: `https://dobarialaw.com${area.href}`,
            })),
        },
      }} />
    </main>
  );
}


"use client";

import { motion } from "framer-motion";
import {
  Globe,
  FileCheck,
  BadgeCheck,
  Shield,
  Heart,
  Plane,
  Briefcase,
  Home,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import LenisProvider from "@/components/LenisProvider";
import { serviceSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const heroBadges = ["45+ Years of Counsel", "AILA Member 28+ Years", "Admitted in PA, NJ & NY", "Se Habla Español"];

const whyUsPoints = [
  { title: "45+ Years, One Focus", body: "Founded in 1981, our firm brings more than four decades of concentrated experience to every matter — the depth that lets us tell you early what a case will realistically require." },
  { title: "Cross-Practice Perspective", body: "Because we practice immigration alongside family, business, and real estate law, we catch the connections other firms miss — and protect clients from problems that cross practice lines." },
  { title: "Genuinely Multilingual", body: "Eight languages are spoken in-house — English, Spanish, Gujarati, Hindi, German, Arabic, French, and Korean — so you are understood in your own words. Se habla español." },
  { title: "A Boutique, Not a Mill", body: "You work directly with attorneys who know your case by name, with clear, plain-language counsel and steady communication at every step." },
];

const slugToIcon: Record<string, any> = {
  "immigration-law": Globe,
  "green-cards-visas": FileCheck,
  "citizenship-naturalization": BadgeCheck,
  "deportation-defense": Shield,
  "family-law": Heart,
  "international-divorce": Plane,
  "business-law": Briefcase,
  "real-estate-law": Home,
};

const categoryStats: Record<string, { top: string; bottom: string }[]> = {
  "Immigration & Citizenship": [
    { top: "45+ Years", bottom: "Established Legacy" },
    { top: "50+", bottom: "Countries Served" },
    { top: "6 Langs", bottom: "Multilingual Staff" },
    { top: "AILA", bottom: "28+ Yrs Member" },
  ],
  "Family Law": [
    { top: "45+ Years", bottom: "Established Legacy" },
    { top: "50+", bottom: "Countries Served" },
    { top: "6 Langs", bottom: "Multilingual Staff" },
    { top: "PA·NJ·NY", bottom: "States Admitted" },
  ],
  "Business & Property": [
    { top: "45+ Years", bottom: "Established Legacy" },
    { top: "18 States", bottom: "Title Experience" },
    { top: "PA·NJ·NY", bottom: "States Admitted" },
  ],
};

export default function PracticeAreaClient({ data }: { data: PracticeData }) {
  const PageIcon = slugToIcon[data.slug] || Globe;

  const svcSchema = serviceSchema({ name: data.title, description: data.heroSubtitle, url: `/practice-areas/${data.slug}` });
  const faqSchema = data.faqs.length > 0 ? faqPageSchema(data.faqs) : null;
  const bcSchema = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Practice Areas", path: "/practice-areas" }, { name: data.title, path: `/practice-areas/${data.slug}` }]);

  const stats = categoryStats[data.category] || categoryStats["Immigration & Citizenship"];

  return (
    <LenisProvider>
      <main className="min-h-screen bg-[#F8F6F2]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#0B0F17] to-[#1A2435]">
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Gold radial glow */}
          <div
            className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-[0.1] pointer-events-none"
            style={{ background: "radial-gradient(circle,#C29A3E 0%,transparent 65%)" }}
          />
          {/* Watermark icon */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.025] pointer-events-none hidden xl:block">
            <PageIcon size={500} strokeWidth={0.5} />
          </div>

          <div className="relative z-10 site-container">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[11px] text-gray-500 mb-10">
              <Link href="/" className="hover:text-[#C29A3E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/practice-areas" className="hover:text-[#C29A3E] transition-colors">Practice Areas</Link>
              <span>/</span>
              <span className="text-gray-400">{data.title}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">
                {data.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white leading-[1.04] mb-7 max-w-5xl"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(42px, 7vw, 84px)",
                letterSpacing: "-0.01em",
              }}
            >
              {data.h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            >
              {data.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-7 py-4 rounded-sm text-base font-semibold tracking-widest uppercase transition-colors"
              >
                Schedule a Consultation <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+12153622478"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-7 py-4 rounded-sm text-base font-semibold tracking-widest uppercase transition-colors"
              >
                <Phone size={14} /> Call 215-362-2478
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-x-8 gap-y-3"
            >
              {heroBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29A3E] flex-shrink-0" />
                  <span className="text-[11px] tracking-[0.15em] uppercase font-semibold text-gray-400">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Overview & Trust Metrics */}
        <section className="site-section bg-white border-b border-gray-100">
          <div className="site-container">
            <div className="grid lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-start">

              {/* Narrative */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-[1px] bg-[#C29A3E]" />
                  <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Overview</span>
                </div>
                <h2
                  className="text-[#14163A] leading-snug mb-7"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(30px,4vw,50px)", letterSpacing: "-0.01em" }}
                >
                  Legal Advocacy &amp; Overview
                </h2>
                <div className="space-y-5">
                  {data.overview.map((paragraph, i) => (
                    <p key={i} className="text-[#4B5563] text-[15px] leading-[1.8]">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Trust card */}
              <div className="lg:sticky lg:top-28">
                <div className="relative bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] rounded-xl overflow-hidden p-8 sm:p-10 shadow-[0_20px_60px_-16px_rgba(17,24,39,0.25)]">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C29A3E] to-[#9C7A26]" />
                  <div className="absolute -right-6 -bottom-6 text-white/[0.04] pointer-events-none">
                    <PageIcon size={180} strokeWidth={0.8} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-sm bg-[#C29A3E]/20 flex items-center justify-center text-[#C29A3E]">
                        <PageIcon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">Firm Stewardship</p>
                        <p className="text-gray-400 text-[11px]">Trusted for over 4 decades</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 pt-6 border-t border-white/10">
                      {stats.map((stat, idx) => (
                        <div key={idx}>
                          <p className="text-[#C29A3E] font-semibold leading-none mb-1" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32 }}>{stat.top}</p>
                          <p className="text-gray-400 text-[11px] leading-snug">{stat.bottom}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-7 pt-6 border-t border-white/10">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-5 py-3 rounded-sm text-base font-semibold tracking-widest uppercase transition-colors w-full justify-center"
                      >
                        Schedule a Consultation <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="site-section bg-[#F8F6F2]">
          <div className="site-container">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Practice Focus</span>
              <div className="flex-1 h-[1px] bg-gray-200" />
            </div>
            <h2
              className="text-[#14163A] leading-snug mb-10"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,52px)", letterSpacing: "-0.01em" }}
            >
              {data.servicesTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {data.services.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl border border-gray-100 p-7 shadow-[0_2px_20px_-8px_rgba(17,24,39,0.07)] hover:shadow-[0_12px_40px_-12px_rgba(17,24,39,0.12)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C29A3E] to-[#9C7A26] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out" />
                  <div className="flex items-start gap-4">
                    <span
                      className="text-[#C29A3E]/20 font-semibold leading-none flex-shrink-0 select-none"
                      style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40 }}
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[18px] font-serif font-semibold text-[#14163A] mb-2 leading-snug group-hover:text-[#C29A3E] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#4B5563] text-[16px] leading-[1.75]">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="site-section bg-white">
          <div className="site-container">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Methodology</span>
              <div className="flex-1 h-[1px] bg-gray-200" />
            </div>
            <h2
              className="text-[#14163A] leading-snug mb-12"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,52px)", letterSpacing: "-0.01em" }}
            >
              {data.processTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.process.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Connector line */}
                  {idx < data.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%-0px)] w-full h-[1px] bg-gradient-to-r from-[#C29A3E]/40 to-transparent z-0" />
                  )}
                  <div className="relative bg-[#F8F6F2] rounded-xl border border-gray-100 p-7 h-full">
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="text-[#C29A3E] leading-none"
                        style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48 }}
                      >
                        {step.step}
                      </span>
                      <div className="flex-1 h-[1px] bg-[#C29A3E]/20" />
                    </div>
                    <h3 className="text-[17px] font-serif font-semibold text-[#14163A] mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[#4B5563] text-[16px] leading-[1.75]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="site-section bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="relative z-10 site-container">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Why Dobaria Law PC</span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>
            <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start">
              {/* Left heading */}
              <div className="lg:sticky lg:top-28">
                <h2
                  className="text-white leading-snug mb-5"
                  style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,56px)", letterSpacing: "-0.01em" }}
                >
                  Why Clients Trust Us with {data.title}
                </h2>
                <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                  A boutique firm with the experience, reach, and range that matters most in a case like yours.
                </p>
                <Link
                  href="/why-choose-us"
                  className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
                >
                  More reasons clients choose us <ArrowRight size={13} />
                </Link>
              </div>
              {/* Right points */}
              <div className="grid sm:grid-cols-2 gap-5">
                {whyUsPoints.map((point, idx) => (
                  <div key={point.title} className="bg-white/[0.05] border border-white/10 rounded-xl p-7 hover:bg-white/[0.08] transition-colors duration-300">
                    <span
                      className="text-[#C29A3E]/30 leading-none block mb-4 select-none"
                      style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40 }}
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white text-[17px] font-serif font-semibold mb-3 leading-snug">{point.title}</h3>
                    <p className="text-gray-400 text-[14px] leading-[1.75]">{point.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {data.faqs.length > 0 && (
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
                    style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.01em" }}
                  >
                    Common Questions
                  </h2>
                  <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6">
                    Answers to questions clients ask us most about {data.title.toLowerCase()}.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
                  >
                    Ask a Question <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Accordion */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-10">
                  <Accordion type="single" collapsible className="w-full">
                    {data.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <AccordionTrigger className="text-left text-[16px] font-serif font-semibold text-[#1B1E49] py-5 hover:text-[#C29A3E] hover:no-underline transition-colors [&[data-state=open]]:text-[#C29A3E]">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-[#4B5563] text-[16px] leading-[1.75] pb-5">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* Related Pages */}
        {data.relatedPages.length > 0 && (
          <section className="py-12 bg-[#F8F6F2] border-t border-gray-100">
            <div className="site-container">
              <h2 className="text-[#1B1E49] text-xl font-semibold mb-6" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                Related Pages
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.relatedPages.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 bg-white border border-gray-200 rounded text-sm font-medium text-[#1B1E49] hover:border-[#C29A3E] hover:text-[#C29A3E] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Form Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />
      </main>
    </LenisProvider>
  );
}

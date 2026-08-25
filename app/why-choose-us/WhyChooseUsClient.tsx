"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Shield, MessageSquare, Users, Award, BookOpen, ArrowRight, Phone, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { whyChooseUsContent as content } from "@/content/pages/why-choose-us";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { JsonLd, getBreadcrumbSchema, getFaqSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function WhyChooseUsClient() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Why Choose Us", href: "/why-choose-us" },
  ]);

  const faqSchema = getFaqSchema(content.faqs.map((f) => ({ q: f.q, a: f.a })));

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ibrahimdobarialaw.com/why-choose-us#webpage",
    url: "https://ibrahimdobarialaw.com/why-choose-us",
    name: content.meta.title,
    description: content.meta.description,
    about: { "@id": "https://ibrahimdobarialaw.com/#organization" },
    isPartOf: { "@id": "https://ibrahimdobarialaw.com/#website" },
  };

  const icons = [Shield, Award, Globe, BookOpen, MessageSquare, Users];

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema, faqSchema]} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0B0F17] to-[#1A2435]">
        {/* Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Gold Radial Glow */}
        <div 
          className="absolute -top-32 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #C29A3E 0%, transparent 65%)",
            opacity: 0.1,
          }}
        ></div>

        {/* Watermark Icon */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.025] pointer-events-none hidden xl:block">
          <Users size={500} strokeWidth={0.5} />
        </div>

        <div className="site-container relative z-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Why Choose Us", href: "/why-choose-us" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-3xl"
          >
            {/* Eyebrow with inline gold line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] uppercase tracking-widest text-[11px] font-semibold">
                {content.hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Bebas_Neue',sans-serif] text-white mb-6 leading-[1.1]"
              style={{ fontSize: "clamp(42px, 7vw, 84px)" }}
            >
              {content.hero.h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-[16px] leading-relaxed mb-10 max-w-xl"
            >
              {content.hero.subhead}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 transition-colors text-base rounded-sm"
              >
                Schedule Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+12153622478"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-base rounded-sm"
              >
                <Phone className="w-5 h-5" />
                Call 215-362-2478
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - Premium 2-Column with Image */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image with overlay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/images/about-main.webp"
                  alt="Dobaria Law PC office"
                  fill
                  className="object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 via-[#0B0F17]/20 to-transparent"></div>
                
                {/* Bottom Stats Strip */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="font-['Bebas_Neue',sans-serif] text-white text-3xl leading-none">45+</p>
                      <p className="text-gray-300 text-[13px] mt-1">Years</p>
                    </div>
                    <div className="text-center border-x border-white/20">
                      <p className="font-['Bebas_Neue',sans-serif] text-white text-3xl leading-none">50+</p>
                      <p className="text-gray-300 text-[13px] mt-1">Countries</p>
                    </div>
                    <div className="text-center">
                      <p className="font-['Bebas_Neue',sans-serif] text-white text-3xl leading-none">6</p>
                      <p className="text-gray-300 text-[13px] mt-1">Languages</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Gold Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C29A3E] pointer-events-none hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C29A3E] pointer-events-none hidden md:block"></div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">About Our Firm</span>
              </div>

              <h2
                className="text-[#1B1E49] leading-snug mb-8"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,50px)", letterSpacing: "-0.01em" }}
              >
                Trust Built Over Four Decades of Focused Practice
              </h2>

              <p className="text-[16px] text-gray-700 leading-[1.85] mb-8">
                {content.intro}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C29A3E] flex-shrink-0" />
                  <span className="text-[16px] text-[#1B1E49] font-medium">Partner-led cases</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C29A3E] flex-shrink-0" />
                  <span className="text-[16px] text-[#1B1E49] font-medium">Free consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C29A3E] flex-shrink-0" />
                  <span className="text-[16px] text-[#1B1E49] font-medium">24-hour response</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C29A3E] flex-shrink-0" />
                  <span className="text-[16px] text-[#1B1E49] font-medium">6 languages spoken</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#F8F6F2] to-[#EFE7DA]">
        <div className="site-container">
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-12 bg-[#C29A3E] flex-shrink-0 mt-1"></div>
              <div>
                <h2 
                  className="font-['Bebas_Neue',sans-serif] text-[#1B1E49] mb-2"
                  style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
                >
                  What Sets Us Apart
                </h2>
                <p className="text-gray-600 text-[16px] max-w-2xl">
                  Six key reasons clients choose us for their legal matters.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.differentiators.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-5 bg-white border border-gray-100 rounded-lg hover:border-[#C29A3E]/30 hover:shadow-md transition-all"
                >
                  {/* Left Border Animation */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#C29A3E] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out origin-bottom"></div>

                  {/* Numbered Watermark */}
                  <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <p className="font-['Bebas_Neue',sans-serif] text-4xl text-[#C29A3E]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="w-10 h-10 bg-[#C29A3E]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#C29A3E]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#C29A3E]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1B1E49] mb-2 group-hover:text-[#C29A3E] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials Band */}
      <section className="py-12 bg-[#1B1E49]">
        <div className="site-container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white text-[16px] md:text-base font-semibold">
            {content.credentialsBand.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Practice Advantage */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Multi-Discipline Practice</span>
              </div>

              <h2
                className="text-[#1B1E49] leading-snug mb-6"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.01em" }}
              >
                {content.crossPractice.h2}
              </h2>

              <p className="text-[16px] text-gray-700 leading-[1.85] mb-8">
                {content.crossPractice.body}
              </p>

              {/* Practice areas grid */}
              <div className="grid grid-cols-2 gap-3">
                {["Immigration Law", "Family Law", "Business Law", "Real Estate Law"].map((area, i) => (
                  <div key={area} className="flex items-center gap-3 p-3 bg-[#F8F6F2] rounded-sm border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#C29A3E]"></span>
                    <span className="text-[14px] font-medium text-[#1B1E49]">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Scenario Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative bg-gradient-to-br from-[#0B0F17] to-[#1A2435] rounded-lg p-8 sm:p-10 overflow-hidden">
                {/* Grid texture */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                ></div>

                {/* Gold glow */}
                <div 
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, #C29A3E 0%, transparent 65%)", opacity: 0.08 }}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-6 h-[1px] bg-[#C29A3E]" />
                    <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.2em] uppercase">Real-World Example</span>
                  </div>

                  <p className="text-gray-300 text-[16px] leading-[1.85] mb-6">
                    {content.crossPractice.scenario}
                  </p>

                  <div className="pt-5 border-t border-white/10">
                    <p className="text-[#C29A3E] text-[14px] font-semibold">
                      One firm. One connected strategy. No gaps.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section - What you can expect from us */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#0B0F17] to-[#1B1E49]">
        {/* Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="site-container relative z-10">
          <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start">
            
            {/* Left - Sticky heading */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Our Commitment</span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>

              <h2
                className="text-white leading-snug mb-5"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,56px)", letterSpacing: "-0.01em" }}
              >
                {content.commitment.h2}
              </h2>

              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                Our promise is simple: honest counsel, clear communication, and meticulous preparation at every step.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                Experience it yourself <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right - Cards */}
            <div className="grid gap-6">
              {content.commitment.body.map((para, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group relative bg-white/[0.05] border border-white/10 rounded-xl p-8 hover:bg-white/[0.08] transition-colors duration-300"
                >
                  {/* Number watermark */}
                  <span
                    className="text-[#C29A3E]/30 leading-none block mb-4 select-none"
                    style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 48 }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="text-gray-300 text-[16px] leading-[1.85]">
                    {para}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-[#C29A3E]/40 via-[#C29A3E]/20 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multilingual Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="site-container max-w-3xl text-center">
          <Globe className="w-12 h-12 text-[#C29A3E] mx-auto mb-4" />
          <h2 
            className="font-['Bebas_Neue',sans-serif] text-[#1B1E49] mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            {content.multilingual.h2}
          </h2>
          <p className="text-[16px] text-gray-700 mb-8 leading-relaxed">
            {content.multilingual.body}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {content.multilingual.languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 bg-[#EFE7DA] border border-[#C29A3E]/30 rounded-full text-[16px] font-semibold text-[#1B1E49]"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="site-container">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">

            {/* Left Sticky Column */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">FAQ</span>
              </div>
              <h2
                className="text-[#1B1E49] leading-snug mb-4"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.01em" }}
              >
                Common Questions
              </h2>
              <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6">
                Answers to questions clients ask us most.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                Ask a Question <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right Accordion */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-10">
              <Accordion type="single" collapsible className="w-full">
                {content.faqs.map((faq, i) => (
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

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#0B0F17] to-[#1A2435]">
        {/* Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="site-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 
              className="font-['Bebas_Neue',sans-serif] text-white mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              {content.cta.h2}
            </h2>
            <p className="text-gray-400 text-[16px] max-w-2xl mx-auto mb-10">
              Ready to experience the difference a boutique firm can make? Schedule your free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={content.cta.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 transition-colors text-base rounded-sm"
              >
                {content.cta.primaryCta.label} <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+12153622478"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-base rounded-sm"
              >
                <Phone className="w-5 h-5" />
                {content.cta.support}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Scale, Phone, Trophy } from "lucide-react";
import Link from "next/link";
import { resultsContent as content } from "@/content/pages/results";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function ResultsClient() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Client Results", href: "/results" },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema]} />
      <Navbar />

      {/* Hero */}
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
          <Trophy size={500} strokeWidth={0.5} />
        </div>

        <div className="site-container relative z-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Client Results", href: "/results" },
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
              <p className="text-[#C29A3E] uppercase tracking-widest text-[11px] font-semibold">
                {content.hero.eyebrow}
              </p>
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
                href={content.cta.primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 transition-colors text-base rounded-sm"
              >
                {content.cta.primaryCta.label}
              </Link>
              <a
                href="tel:+12153622478"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-base rounded-sm"
              >
                <Phone className="w-5 h-5" />
                {content.cta.support}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-12 bg-[#C29A3E] flex-shrink-0 mt-1"></div>
              <div>
                <h2 
                  className="font-['Bebas_Neue',sans-serif] text-[#1B1E49] mb-2"
                  style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
                >
                  Client Testimonials
                </h2>
                <p className="text-gray-600 text-[16px] max-w-2xl">
                Hear directly from our clients about their experience working with our firm.
              </p>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {content.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                {/* Numbered Watermark */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <p className="font-['Bebas_Neue',sans-serif] text-6xl text-[#C29A3E]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#C29A3E] fill-[#C29A3E]" />
                  ))}
                </div>
                <p className="text-gray-700 text-[16px] italic mb-4 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[16px] font-semibold text-[#1B1E49]">
                    {item.name}
                  </p>
                  <p className="text-[14px] text-gray-500">
                    Verified Client · {item.matterType}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={content.testimonials.platformLinks.google}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#C29A3E] text-[#C29A3E] font-semibold hover:bg-[#C29A3E]/5 transition-colors text-base"
            >
              <ExternalLink className="w-4 h-4" />
              Read more reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Representative Matters Section */}
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
                  Representative Matters
                </h2>
                <p className="text-gray-600 text-[16px] max-w-2xl">
                Examples of cases and matters we've successfully handled for our clients.
              </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {content.representativeMatters.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg p-6 bg-white border border-gray-100 hover:border-[#C29A3E]/30 hover:shadow-md transition-all"
              >
                {/* Left Border Animation */}
                <div className="absolute left-0 top-0 h-full w-1 bg-[#C29A3E] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out origin-bottom"></div>

                {/* Numbered Watermark */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <p className="font-['Bebas_Neue',sans-serif] text-5xl text-[#C29A3E]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C29A3E]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C29A3E]/20 transition-colors">
                    <Scale className="w-5 h-5 text-[#C29A3E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B1E49] mb-2 group-hover:text-[#C29A3E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-[16px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[14px] text-gray-500 italic text-center">
            {content.representativeMatters.disclaimer}
          </p>
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
              Our team is ready to discuss your legal matter and explore how we can help you achieve the best possible outcome.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={content.cta.primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 transition-colors text-base"
              >
                {content.cta.primaryCta.label}
              </Link>
              <a
                href="tel:+12153622478"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-base"
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

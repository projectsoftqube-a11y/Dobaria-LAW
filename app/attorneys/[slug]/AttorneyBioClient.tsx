"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { AttorneyBio } from "@/content/attorneys";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LenisProvider from "@/components/LenisProvider";
import { JsonLd, getAttorneySchema, getBreadcrumbSchema } from "@/components/JsonLd";

interface Props {
  attorney: AttorneyBio;
}

export default function AttorneyBioClient({ attorney }: Props) {
  const schema = getAttorneySchema({
    name: attorney.name,
    jobTitle: attorney.title,
    url: `/attorneys/${attorney.slug}`,
    image: attorney.image,
    languages: attorney.languages,
    alumniOf: attorney.education[0] || "",
    memberOf: attorney.memberships[0] || "",
    knowsAbout: attorney.practiceFocus,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Attorneys", href: "/attorneys" },
    { name: attorney.name.replace(", Esq.", ""), href: `/attorneys/${attorney.slug}` },
  ]);

  return (
    <LenisProvider>
      <JsonLd data={[schema, breadcrumbSchema]} />
      <main className="min-h-screen bg-[#F8F6F2]">
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

          <div className="relative z-10 site-container">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[11px] text-gray-500 mb-10">
              <Link href="/" className="hover:text-[#C29A3E] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/attorneys" className="hover:text-[#C29A3E] transition-colors">Attorneys</Link>
              <span>/</span>
              <span className="text-gray-400">{attorney.name.replace(", Esq.", "")}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">
                {attorney.title}
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
              {attorney.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            >
              Dedicated legal counsel across immigration, family, business, and real estate matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
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
          </div>
        </section>

        {/* About & Photo Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-100">
          <div className="site-container">
            <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">

              {/* Narrative */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-[1px] bg-[#C29A3E]" />
                  <span className="text-[#C29A3E] text-[14px] font-semibold tracking-[0.25em] uppercase">Background</span>
                </div>
                <h2
                  className="text-[#14163A] leading-snug mb-5"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(30px,4vw,50px)", letterSpacing: "-0.01em" }}
                >
                  About {attorney.name.split(",")[0]}
                </h2>
                <div className="space-y-3">
                  {attorney.narrative.map((para, i) => (
                    <p key={i} className="text-[#4B5563] text-[16px] leading-[1.7]">{para}</p>
                  ))}
                </div>

                {/* Languages */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3
                    className="text-[#14163A] leading-snug mb-5"
                    style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.01em" }}
                  >
                    Languages Spoken
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {attorney.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-5 py-3 bg-[#F8F6F2] border border-gray-200 rounded-lg text-[16px] font-semibold text-[#14163A] hover:border-[#C29A3E] transition-colors"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practice Focus */}
                <div className="mt-8">
                  <h3
                    className="text-[#14163A] leading-snug mb-5"
                    style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.01em" }}
                  >
                    Practice Focus
                  </h3>
                  <ul className="space-y-3">
                    {attorney.practiceFocus.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-[#4B5563] text-[16px] leading-[1.75]">
                        <span className="text-[#C29A3E] font-bold flex-shrink-0 mt-0.5">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Photo Card */}
              <div className="lg:sticky lg:top-28">
                <div className="relative bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] rounded-xl overflow-hidden p-5 shadow-[0_20px_60px_-16px_rgba(17,24,39,0.25)]">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C29A3E] to-[#9C7A26]" />
                  <div className="relative z-10">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={attorney.image}
                        alt={attorney.name}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                    <h3 className="text-white text-2xl sm:text-[26px] font-semibold leading-tight mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.01em" }}>{attorney.name}</h3>
                    <p className="text-[#C29A3E] text-[15px] font-semibold tracking-wide mb-4">{attorney.title}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-4 py-2.5 rounded-sm text-base font-semibold tracking-widest uppercase transition-colors w-full justify-center"
                    >
                      Schedule Consultation <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Credentials & Languages Section */}
        <section className="site-section bg-[#F8F6F2]">
          <div className="site-container">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[14px] font-semibold tracking-[0.25em] uppercase">Qualifications</span>
              <div className="flex-1 h-[1px] bg-gray-200" />
            </div>
            <h2
              className="text-[#14163A] leading-snug mb-10"
              style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,52px)", letterSpacing: "-0.01em" }}
            >
              Education & Credentials
            </h2>
            <div className={`grid gap-8 ${attorney.admissions.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
              {/* Education */}
              <div className="bg-white rounded-xl border border-gray-100 p-7 shadow-[0_2px_20px_-8px_rgba(17,24,39,0.07)]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#C29A3E]/20 font-semibold leading-none select-none" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40 }} aria-hidden>01</span>
                  <h3 className="text-[18px] font-serif font-semibold text-[#14163A]">Education</h3>
                </div>
                <ul className="space-y-3">
                  {attorney.education.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-[#4B5563] text-[16px] leading-[1.75]">
                      <span className="text-[#C29A3E] font-bold flex-shrink-0 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bar Admissions */}
              {attorney.admissions.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-7 shadow-[0_2px_20px_-8px_rgba(17,24,39,0.07)]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#C29A3E]/20 font-semibold leading-none select-none" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40 }} aria-hidden>02</span>
                    <h3 className="text-[18px] font-serif font-semibold text-[#14163A]">Bar Admissions</h3>
                  </div>
                  <ul className="space-y-3">
                    {attorney.admissions.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-[#4B5563] text-[16px] leading-[1.75]">
                        <span className="text-[#C29A3E] font-bold flex-shrink-0 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Memberships */}
        {attorney.memberships.length > 0 && (
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
                <span className="text-[#C29A3E] text-[14px] font-semibold tracking-[0.25em] uppercase">Professional Standing</span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <h2
                className="text-white leading-snug mb-8"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,52px)", letterSpacing: "-0.01em" }}
              >
                Professional Memberships
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {attorney.memberships.map((membership, idx) => (
                  <div key={idx} className="bg-white/[0.05] border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] transition-colors">
                    <span className="text-[#C29A3E]/30 leading-none block mb-3 select-none" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32 }} aria-hidden>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-300 text-[16px] leading-[1.75]">{membership}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="site-section bg-[#F8F6F2] border-t border-gray-100">
          <div className="site-container text-center">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-[#14163A] leading-snug mb-4"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,56px)", letterSpacing: "-0.01em" }}
              >
                Ready to discuss your matter?
              </h2>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
                Schedule a free consultation with {attorney.name.split(",")[0]} today. We respond within 24 business hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1B1E49] hover:bg-[#0B0F17] text-white px-8 py-4 rounded-sm text-base font-semibold tracking-widest uppercase transition-colors"
                >
                  Schedule a Consultation <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+12153622478"
                  className="inline-flex items-center gap-2 border-2 border-[#C29A3E] text-[#C29A3E] hover:bg-[#C29A3E] hover:text-white px-8 py-4 rounded-sm text-base font-semibold tracking-widest uppercase transition-colors"
                >
                  <Phone size={14} /> Call 215-362-2478
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </LenisProvider>
  );
}

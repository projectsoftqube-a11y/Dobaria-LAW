"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Shield, Compass, BookOpen, Scale, ArrowRight, Phone, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import GlobalReach from "@/components/sections/GlobalReach";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { legalServiceSchema, breadcrumbSchema } from "@/lib/schema";

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  return (
    <main className="min-h-screen bg-[#F8F6F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])) }} />
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
          className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
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
              { name: "About", href: "/about" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] uppercase tracking-widest text-[11px] font-semibold">
                {t("k20")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-6 leading-[1.04]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 7vw, 84px)" }}
            >
              {t("k8")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-[16px] leading-relaxed mb-10 max-w-xl"
            >
              {t("heroIntro")}
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
                {t("k17")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-[720px]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">{t("k22")}</span>
              </div>

              <h2
                className="text-[#1B1E49] leading-snug mb-8"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,50px)", letterSpacing: "-0.01em" }}
              >
                {t("k9")}
              </h2>

              <div className="flex flex-col gap-5 text-gray-700 text-[16px] leading-[1.85]">
                <p>
                  Marcia Binder Ibrahim opened the doors of her solo practice in Lansdale, Pennsylvania in 1981.
                  Her founding vision was simple yet profound: to offer rigorous, precise legal representation
                  grounded in deep respect for the individuals and communities she served.
                </p>
                <p>
                  {t("k6")}
                  <strong> Dobaria Law PC</strong>. {t("partnersPara")}
                </p>
                <p>
                  {t("multilingualPara")}
                </p>
              </div>
            </motion.div>

            {/* Brand panel — stands in until the firm supplies its own photos */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-[340px] xl:w-[400px] aspect-[3/4] rounded-sm overflow-hidden shadow-[0_24px_60px_-20px_rgba(17,24,39,0.25)]">
                <Image
                  src="/images/brand-panel-portrait.svg"
                  alt="Dobaria Law PC"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative gold corners */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C29A3E] pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C29A3E] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="site-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="relative flex-shrink-0">
              <span className="text-[10rem] font-serif text-[#C29A3E]/20 leading-none select-none absolute -top-10 -left-4">&ldquo;</span>
            </div>
            <div>
              <p
                className="text-white text-2xl sm:text-3xl leading-snug mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "-0.01em" }}
              >
                {t("k7")}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#C29A3E]"></div>
                <div>
                  <span className="text-[#C29A3E] font-semibold text-[14px] tracking-wider uppercase block">
                    Marcia Binder Ibrahim, Esq.
                  </span>
                  <span className="text-white/50 text-[13px]">{t("k18")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global reach map + firm stats */}
      <GlobalReach />

      {/* Core Values Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#0B0F17] to-[#1B1E49]">
        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="site-container relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">{t("k19")}</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start">
            {/* Left heading */}
            <div className="lg:sticky lg:top-28">
              <h2
                className="text-white leading-snug mb-5"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,56px)", letterSpacing: "-0.01em" }}
              >
                {t("k10")}
              </h2>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                {t("k5")}
              </p>
              <Link
                href="/why-choose-us"
                className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                {t("whyClientsChooseUs")} <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Shield,
                  title: t("k15"),
                  description: t("k1")
                },
                {
                  icon: Compass,
                  title: t("k16"),
                  description: t("k3")
                },
                {
                  icon: BookOpen,
                  title: t("k13"),
                  description: t("k4")
                },
                {
                  icon: Scale,
                  title: t("k14"),
                  description: t("k2")
                }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/[0.05] border border-white/10 rounded-xl p-7 hover:bg-white/[0.08] transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-[#C29A3E]/10 rounded-lg flex items-center justify-center mb-5">
                    <value.icon size={24} className="text-[#C29A3E]" />
                  </div>
                  <h3 className="text-white text-[22px] font-semibold mb-3 leading-snug">{value.title}</h3>
                  <p className="text-gray-400 text-[14px] leading-[1.75]">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <Contact />

      <Footer />
    </main>
  );
}

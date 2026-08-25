"use client";

import { motion } from "framer-motion";
import { Shield, Compass, BookOpen, Scale, ArrowRight, Phone, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { legalServiceSchema, breadcrumbSchema } from "@/lib/schema";

export default function AboutPage() {
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
                About the Firm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-6 leading-[1.04]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 7vw, 84px)" }}
            >
              Forty-Five Years of Legal Stewardship
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-[16px] leading-relaxed mb-10 max-w-xl"
            >
              Established in 1981, Dobaria Law PC has built a reputation for
              delivering sophisticated legal solutions with the personal attention and
              integrity that families, employers, and entrepreneurs expect.
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

      {/* Our Story Section - 2 Column with Image */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/images/about-hero.png"
                  alt="Dobaria Law PC Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/70 via-transparent to-transparent"></div>

                {/* Bottom Stats */}
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

              {/* Decorative gold corners */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C29A3E] pointer-events-none hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C29A3E] pointer-events-none hidden md:block"></div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Our Story</span>
              </div>

              <h2
                className="text-[#1B1E49] leading-snug mb-8"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(30px,4vw,50px)", letterSpacing: "-0.01em" }}
              >
                A Legacy Built on Trust & Precision
              </h2>

              <div className="flex flex-col gap-5 text-gray-700 text-[16px] leading-[1.85]">
                <p>
                  Marcia Binder Ibrahim opened the doors of her solo practice in Lansdale, Pennsylvania in 1981.
                  Her founding vision was simple yet profound: to offer rigorous, precise legal representation
                  grounded in deep respect for the individuals and communities she served.
                </p>
                <p>
                  Today, alongside Managing Partner Vishal J. Dobaria, the firm continues that legacy as
                  <strong> Dobaria Law PC</strong>. Together, our partners bring over 50 years of combined legal experience.
                  While our roots remain firmly planted in Lansdale, our practice reaches far beyond —
                  representing U.S. immigration clients in all 50 states and handling sophisticated real estate, business,
                  and family law matters across Pennsylvania and New Jersey.
                </p>
                <p>
                  Because we represent clients from over fifty countries, clear and accessible communication is the
                  bedrock of our approach. Our multilingual staff provides services in English, Spanish, German, Arabic,
                  French, and Korean.
                </p>
              </div>
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
                If there is a solution, we will find it.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#C29A3E]"></div>
                <div>
                  <span className="text-[#C29A3E] font-semibold text-[14px] tracking-wider uppercase block">
                    Marcia Binder Ibrahim, Esq.
                  </span>
                  <span className="text-white/50 text-[13px]">Founding Partner</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="site-container">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left Sticky */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Milestones</span>
              </div>
              <h2
                className="text-[#1B1E49] leading-snug mb-4"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.01em" }}
              >
                Our Journey Through Time
              </h2>
              <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6">
                Over four decades of growth, evolution, and unwavering commitment to excellence.
              </p>
              <Link
                href="/attorneys"
                className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                Meet Our Team <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right Timeline Cards */}
            <div className="space-y-8">
              {[
                {
                  year: "1981",
                  title: "A Solo Practice is Born",
                  description: "Marcia Binder Ibrahim establishes the practice in Lansdale, Pennsylvania, specializing in family-based immigration, nationality, and local family law."
                },
                {
                  year: "2009",
                  title: "Expanding Practice Scope",
                  description: "The firm incorporates corporate transactional law, real estate development, and multi-state title operations into its primary services, meeting the needs of regional business owners."
                },
                {
                  year: "2026",
                  title: "Dobaria Law PC",
                  description: "Operating under the joint leadership of Marcia Binder Ibrahim and Vishal J. Dobaria, the firm manages matters nationwide, speaking 6 languages and serving clients from over 50 countries."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-white border border-gray-100 rounded-lg p-8 hover:border-[#C29A3E]/30 hover:shadow-md transition-all"
                >
                  {/* Left border animation */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#C29A3E] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out origin-bottom rounded-l-lg"></div>

                  {/* Watermark year */}
                  <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <p className="font-['Bebas_Neue',sans-serif] text-6xl text-[#C29A3E]">{item.year}</p>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="text-[#C29A3E] leading-none"
                      style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "36px" }}
                    >
                      {item.year}
                    </span>
                    <div className="flex-1 h-[1px] bg-[#C29A3E]/20"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B1E49] mb-3 group-hover:text-[#C29A3E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Core Principles</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start">
            {/* Left heading */}
            <div className="lg:sticky lg:top-28">
              <h2
                className="text-white leading-snug mb-5"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,56px)", letterSpacing: "-0.01em" }}
              >
                What Defines Our Advocacy
              </h2>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                Our approach to every consultation, transaction, and trial is guided by four fundamental principles.
              </p>
              <Link
                href="/why-choose-us"
                className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                Why clients choose us <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Shield,
                  title: "Thorough Precision",
                  description: "Every filing, application, and agreement is prepared with thorough documentation to meet the standards expected by courts and government agencies."
                },
                {
                  icon: Compass,
                  title: "Absolute Integrity",
                  description: "We give honest advice, set realistic expectations, and maintain open communication. You will always know where your case stands."
                },
                {
                  icon: BookOpen,
                  title: "Client-Centered Focus",
                  description: "We work to understand the personal goals and concerns of our clients, tailoring legal strategies to best support their futures."
                },
                {
                  icon: Scale,
                  title: "Relentless Advocacy",
                  description: "Whether representing an individual in removal proceedings or a developer in a commercial real estate closing, we fight without compromise."
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
                  <span
                    className="text-[#C29A3E]/30 leading-none block mb-4 select-none"
                    style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 40 }}
                    aria-hidden
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 bg-[#C29A3E]/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon size={20} className="text-[#C29A3E]" />
                  </div>
                  <h3 className="text-white text-[17px] font-semibold mb-3 leading-snug">{value.title}</h3>
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

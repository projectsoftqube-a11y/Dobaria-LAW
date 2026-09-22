"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, BookOpen, GraduationCap, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import { breadcrumbSchema } from "@/lib/schema";


export default function AttorneysPage() {
  const t = useTranslations("attorneysPage");

  const partners = [
    {
      id: "marcia-binder-ibrahim",
      name: "Marcia Binder Ibrahim, Esq.",
      title: t("k26"),
      img: "/images/attorneys/marcia.webp",
      bio: [
        t("k3"),
        t("k2")
      ],
      credentials: [
        t("k17"),
        t("k15"),
        t("k11"),
        t("k12"),
        t("k21"),
        t("k13")
      ],
      languages: ["English", "Spanish", "German"],
      knowsAbout: [t("k44"), t("k53"), t("k45")],
      focus: t("k6"),
      practiceAreas: [
        { name: t("k44"), href: "/practice-areas/immigration-law" },
        { name: t("k27"), href: "/practice-areas/citizenship-naturalization" },
        { name: t("k37"), href: "/practice-areas/deportation-defense" },
        { name: t("k53"), href: "/practice-areas/family-law" }
      ]
    },
    {
      id: "vishal-j-dobaria",
      name: "Vishal J. Dobaria, Esq.",
      title: t("k42"),
      img: "/images/attorneys/vishal.webp",
      bio: [
        t("k5"),
        t("k1")
      ],
      credentials: [
        t("k14"),
        t("k24"),
        t("k33"),
        t("k21"),
        t("k20"),
        t("k30")
      ],
      languages: ["English", "Gujarati", "Hindi"],
      knowsAbout: [t("k46"), t("k51"), t("k44")],
      focus: t("k4"),
      practiceAreas: [
        { name: t("k44"), href: "/practice-areas/immigration-law" },
        { name: t("k46"), href: "/practice-areas/real-estate-law" },
        { name: t("k51"), href: "/practice-areas/business-law" },
        { name: t("k35"), href: "/practice-areas/international-divorce" }
      ]
    },
    {
      id: "jose-m-lugo",
      name: "Jose M. Lugo, J.D., Ph.D.",
      title: t("k36"),
      img: "/images/attorneys/jose.png",
      bio: [
        t("k7"),
        t("k9")
      ],
      credentials: [
        t("k38"),
        t("k28"),
        t("k25"),
        t("k18"),
        t("k16")
      ],
      languages: ["English", "Spanish"],
      knowsAbout: [t("k44"), "Asylum", t("k37")],
      focus: t("k8"),
      practiceAreas: [
        { name: t("k44"), href: "/practice-areas/immigration-law" },
        { name: t("k39"), href: "/practice-areas/green-cards-visas" },
        { name: t("k37"), href: "/practice-areas/deportation-defense" },
        { name: t("k27"), href: "/practice-areas/citizenship-naturalization" }
      ]
    }
  ];
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring-2", "ring-[#C29A3E]/40", "ring-offset-4");
          setTimeout(() => {
            el.classList.remove("ring-2", "ring-[#C29A3E]/40", "ring-offset-4");
          }, 3000);
        }
      }, 600);
    }
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
      <main className="min-h-screen bg-[#F8F6F2]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Attorneys", path: "/attorneys" }])) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: partners.map((partner, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Attorney",
                  name: partner.name.replace(/,?\s*Esq\.$/, ""),
                  jobTitle: partner.title,
                  url: `https://dobarialaw.com/attorneys/${partner.id}`,
                  image: `https://dobarialaw.com${partner.img}`,
                  worksFor: { "@id": "https://dobarialaw.com/#organization" },
                  knowsLanguage: partner.languages,
                  knowsAbout: partner.knowsAbout,
                },
              })),
            }),
          }}
        />
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
              <span className="text-gray-400">Attorneys</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">
                {t("k55")}
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
              {t("k23")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl"
            >
              {t("k10")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                href="#marcia-binder-ibrahim"
                className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-7 py-4 rounded-sm text-base font-semibold tracking-widest uppercase transition-colors"
              >
                Meet the Team <ArrowRight size={14} />
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

        {/* Partners Bio Section */}
        <section className="site-section bg-white border-b border-gray-100">
          <div className="site-container flex flex-col gap-24">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                id={partner.id}
                className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-4 lg:sticky lg:top-28 h-fit flex justify-center ${
                    index % 2 === 1 ? "lg:order-last" : ""
                  }`}
                >
                  <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[8px] overflow-hidden shadow-lg border border-gray-100">
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E49]/50 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
                  <div>
                    <h2
                      className="text-[#1B1E49] text-3xl sm:text-4xl font-semibold"
                      style={{ fontFamily: "Bebas Neue, sans-serif" }}
                    >
                      {partner.name}
                    </h2>
                    <span className="text-[#C29A3E] font-semibold text-[16px] tracking-wider uppercase mt-1">
                      {partner.title}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 text-gray-600 text-[16px] sm:text-base leading-relaxed">
                    {partner.bio.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                    <p>{partner.focus}</p>
                  </div>

                  {/* Credentials Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                    {/* Admissions & Degrees */}
                    <div className="flex flex-col gap-3">
                      <h4 className="flex items-center gap-2 text-[#1B1E49] text-[16px] font-semibold uppercase tracking-wider">
                        <GraduationCap size={16} className="text-[#C29A3E]" />
                        <span>{t("k31")}</span>
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {partner.credentials.map((cred, cIdx) => (
                          <li key={cIdx} className="flex gap-2 text-gray-600 text-[16px]">
                            <span className="text-[#C29A3E] font-bold">&#8226;</span>
                            <span>{cred}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col gap-3">
                      <h4 className="flex items-center gap-2 text-[#1B1E49] text-[16px] font-semibold uppercase tracking-wider">
                        <Globe size={16} className="text-[#C29A3E]" />
                        <span>Languages</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 bg-[#F8F6F2] border border-gray-200/60 rounded-sm text-[14px] font-semibold text-gray-600 tracking-wide uppercase"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Practice Focus — links to service pages */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                    <h4 className="flex items-center gap-2 text-[#1B1E49] text-sm font-semibold uppercase tracking-wider">
                      <BookOpen size={16} className="text-[#C29A3E]" />
                      <span>{t("k47")}</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.practiceAreas.map((pa) => (
                        <Link
                          key={pa.href}
                          href={pa.href}
                          className="px-3 py-1.5 bg-white border border-[#C29A3E]/30 hover:border-[#C29A3E] hover:bg-[#C29A3E]/5 rounded-sm text-xs font-semibold text-[#9C7A26] tracking-wide uppercase transition-colors"
                        >
                          {pa.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/attorneys/${partner.id}`}
                      className="group flex items-center gap-2 border border-[#C29A3E] text-[#C29A3E] hover:bg-[#C29A3E] hover:text-white px-6 py-3 rounded-[4px] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 uppercase"
                    >
                      <span>{t("k50")}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="group flex items-center gap-2 bg-[#1B1E49] hover:bg-[#C29A3E] text-white px-6 py-3 rounded-[4px] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 uppercase"
                    >
                      <span>{t("discussWith", { name: partner.name.split(" ")[0] })}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Admissions summary */}
        <section className="bg-[#EFE7DA]/50 site-section border-b border-gray-200/40">
          <div className="site-container text-center">
            <h3
              className="text-[#1B1E49] text-2xl sm:text-3xl font-semibold mb-8"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              {t("k32")}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                t("k40"),
                t("k43"),
                t("k48"),
                t("k34"),
                t("k22")
              ].map((adm) => (
                <span
                  key={adm}
                  className="px-5 py-3.5 bg-white border border-gray-200/80 shadow-sm rounded-sm text-xs sm:text-sm font-semibold text-[#1B1E49] tracking-wide uppercase flex items-center gap-2"
                >
                  <ShieldCheck size={16} className="text-[#C29A3E]" />
                  <span>{adm}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />
      </main>
  );
}

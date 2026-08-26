"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ShieldAlert, ArrowUp, Lock, ScrollText, Scale } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const iconMap = {
  lock: Lock,
  scroll: ScrollText,
  scale: Scale,
} as const;

export type LegalIconName = keyof typeof iconMap;

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  lastUpdated?: string;
  intro?: React.ReactNode;
  notice?: { title: string; body: React.ReactNode };
  sections: LegalSection[];
  icon: LegalIconName;
  breadcrumbLabel: string;
  breadcrumbHref: string;
}

export default function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  notice,
  sections,
  icon,
  breadcrumbLabel,
  breadcrumbHref,
}: LegalPageProps) {
  const Icon = iconMap[icon];
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-[#F8F6F2]">
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#C29A3E] to-[#9C7A26] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0B0F17] to-[#1B1E49]">
        {/* Texture + grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C29A3E 0%, transparent 65%)" }}
        />
        {/* Watermark icon */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-white/[0.04] pointer-events-none hidden md:block">
          <Icon size={360} strokeWidth={1} />
        </div>

        <div className="relative z-10 site-container">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: breadcrumbLabel, href: breadcrumbHref }]} />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mt-8 mb-5"
          >
            <span className="w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white leading-[1.05]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(42px, 8vw, 84px)", letterSpacing: "-0.01em" }}
          >
            {title}
          </motion.h1>

          {lastUpdated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-gray-300 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C29A3E]" />
              Last updated: {lastUpdated}
            </motion.div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="site-section">
        <div className="site-container">
          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 items-start">
            {/* Table of contents */}
            <aside className="hidden lg:block sticky top-28">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C29A3E] mb-5">
                On this page
              </p>
              <nav className="flex flex-col gap-1 border-l border-gray-200">
                {sections.map((s, i) => {
                  const active = activeId === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`group relative -ml-px pl-4 py-1.5 text-sm transition-colors border-l-2 ${
                        active
                          ? "border-[#C29A3E] text-[#14163A] font-semibold"
                          : "border-transparent text-[#6B7280] hover:text-[#14163A]"
                      }`}
                    >
                      <span className="text-[#C29A3E]/70 text-[11px] font-mono mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  );
                })}
              </nav>
            </aside>

            {/* Content */}
            <div ref={contentRef} className="min-w-0">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.15)] p-7 sm:p-10 lg:p-14">
                {intro && (
                  <p className="text-lg sm:text-xl text-[#374151] leading-relaxed font-serif mb-4">
                    {intro}
                  </p>
                )}

                {notice && (
                  <div className="my-10 rounded-xl border border-[#C29A3E]/25 bg-[#C29A3E]/[0.06] p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1B1E49] flex items-center justify-center">
                        <ShieldAlert size={20} className="text-[#C29A3E]" />
                      </div>
                      <div>
                        <h3 className="text-[#14163A] font-semibold font-serif text-lg mb-1.5">
                          {notice.title}
                        </h3>
                        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                          {notice.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col divide-y divide-gray-100">
                  {sections.map((s, i) => (
                    <section key={s.id} id={s.id} className="scroll-mt-28 py-9 first:pt-2 last:pb-2">
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-[#C29A3E]/50 text-sm font-mono pt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl sm:text-[26px] font-semibold text-[#14163A] font-serif leading-snug">
                          {s.title}
                        </h2>
                      </div>
                      <div
                        className="pl-0 sm:pl-9 text-[#4B5563] text-[15px] sm:text-base leading-[1.75] space-y-4
                          [&_a]:text-[#C29A3E] [&_a]:font-medium [&_a:hover]:underline [&_a]:underline-offset-2
                          [&_strong]:text-[#14163A] [&_strong]:font-semibold
                          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-3 [&_ul]:marker:text-[#C29A3E]
                          [&_li]:pl-1"
                      >
                        {s.content}
                      </div>
                    </section>
                  ))}
                </div>

                {/* Contact card */}
                <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] p-7 sm:p-9 relative overflow-hidden">
                  <div
                    className="absolute -right-8 -bottom-10 text-white/[0.04] pointer-events-none"
                    aria-hidden
                  >
                    <Icon size={200} strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C29A3E] mb-2">
                      Questions?
                    </p>
                    <h3 className="text-white text-xl sm:text-2xl font-serif font-semibold mb-6">
                      Dobaria Law PC
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-5">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=2031+N.+Broad+Street+Unit+129+Lansdale+PA+19446"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 group"
                      >
                        <MapPin size={18} className="text-[#C29A3E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                          2031 N. Broad Street, Unit 129<br />Lansdale, PA 19446
                        </span>
                      </a>
                      <a href="tel:+12153622478" className="flex items-start gap-3 group">
                        <Phone size={18} className="text-[#C29A3E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                          215-362-2478
                        </span>
                      </a>
                      <a href="mailto:info@dobarialaw.com" className="flex items-start gap-3 group">
                        <Mail size={18} className="text-[#C29A3E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors break-words">
                          info@dobarialaw.com
                        </span>
                      </a>
                    </div>
                    <div className="mt-7 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-6 py-3 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
                      >
                        Schedule a Consultation
                      </Link>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-3 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back to top */}
              <div className="mt-8 flex justify-center lg:justify-end">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#C29A3E] text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  <ArrowUp size={14} /> Back to top
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

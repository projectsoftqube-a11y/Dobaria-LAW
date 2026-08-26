"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Home, Phone, Compass, Scale, Plane, IdCard, Users, UserSquare2, Award, CalendarCheck } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const popularLinks = [
  { label: "Immigration Law", href: "/practice-areas/immigration-law", hint: "Petitions, visas & consular processing", icon: Plane },
  { label: "Green Cards & Visas", href: "/practice-areas/green-cards-visas", hint: "Family & employment-based status", icon: IdCard },
  { label: "Family Law", href: "/practice-areas/family-law", hint: "Divorce, custody & support", icon: Users },
  { label: "Our Attorneys", href: "/attorneys", hint: "Meet the team behind your case", icon: UserSquare2 },
  { label: "Client Results", href: "/results", hint: "Outcomes we've secured", icon: Award },
  { label: "Schedule a Consultation", href: "/schedule-consultation", hint: "Talk to us — no cost", icon: CalendarCheck },
];

export default function NotFoundClient() {
  // Small parallax on the giant "404" that follows the cursor.
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-gradient-to-b from-[#0B0F17] via-[#111531] to-[#1A2140] min-h-screen flex items-center">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Gold radial glows */}
        <div
          className="absolute -top-40 -right-20 w-[620px] h-[620px] rounded-full opacity-[0.12] pointer-events-none"
          style={{ background: "radial-gradient(circle,#C29A3E 0%,transparent 65%)" }}
        />
        <div
          className="absolute -bottom-52 -left-24 w-[560px] h-[560px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(circle,#C29A3E 0%,transparent 68%)" }}
        />

        {/* Giant ghost 404 behind everything, parallaxing with cursor */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: "transform 250ms ease-out" }}
        >
          <span
            className="leading-none text-white/[0.03] whitespace-nowrap"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(220px, 42vw, 640px)" }}
          >
            404
          </span>
        </div>

        <div className="relative z-10 site-container py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.28em] uppercase">
                Error 404 — Off the Record
              </span>
            </motion.div>

            {/* Foreground 404 with the middle 0 as a gold monogram badge */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="flex items-center gap-2 sm:gap-4 mb-6"
            >
              <span
                className="text-white leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(84px, 16vw, 190px)", letterSpacing: "-0.02em" }}
              >
                4
              </span>
              <span
                className="relative flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "clamp(78px, 14vw, 168px)",
                  height: "clamp(78px, 14vw, 168px)",
                  background: "radial-gradient(circle at 30% 30%, #DEC067 0%, #C29A3E 45%, #9C7A26 100%)",
                  boxShadow: "0 20px 60px -12px rgba(194,154,62,0.5)",
                }}
              >
                <Scale
                  className="text-[#0B0F17]"
                  style={{ width: "46%", height: "46%" }}
                  strokeWidth={1.75}
                />
                <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
              </span>
              <span
                className="text-white leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(84px, 16vw, 190px)", letterSpacing: "-0.02em" }}
              >
                4
              </span>
            </motion.div>

            {/* Headline + copy */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="text-white leading-[1.05] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(30px, 5.5vw, 60px)", letterSpacing: "-0.01em" }}
            >
              This page has been <em className="not-italic text-[#C29A3E]">dismissed</em>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-9"
            >
              The address you followed may be outdated or entered incorrectly. Let&rsquo;s get you
              back to solid ground — head home, reach our team, or pick up where you left off below.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-[#0B0F17] hover:bg-[#F8F6F2] px-6 py-3.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Home size={15} /> Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-3.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Phone size={15} /> Contact the Firm
              </Link>
            </motion.div>
          </div>

          {/* Popular pages */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 lg:mt-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Compass size={16} className="text-[#C29A3E]" />
              <span className="text-white/70 text-[11px] font-semibold tracking-[0.22em] uppercase">
                Popular Destinations
              </span>
              <span className="flex-1 h-[1px] bg-white/10" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.44 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C29A3E]/50 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_-16px_rgba(194,154,62,0.35)]"
                    >
                      {/* Gold left accent bar — grows in on hover */}
                      <span className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 origin-center scale-y-0 rounded-full bg-gradient-to-b from-[#DEC067] to-[#9C7A26] transition-transform duration-300 group-hover:scale-y-100" />

                      {/* Icon chip */}
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-[#C29A3E]/25 bg-[#C29A3E]/10 text-[#C29A3E] transition-colors duration-300 group-hover:bg-[#C29A3E] group-hover:text-[#0B0F17]">
                        <Icon size={18} strokeWidth={1.9} />
                      </span>

                      <span className="flex min-w-0 flex-col">
                        <span className="text-[15px] font-semibold leading-snug text-white transition-colors group-hover:text-[#DEC067]">
                          {link.label}
                        </span>
                        <span className="mt-0.5 text-[12.5px] leading-snug text-white">{link.hint}</span>
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="ml-auto flex-shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C29A3E]"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

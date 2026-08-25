'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const commitments = [
  'A client-centered approach in every matter',
  'Clear, honest communication at each step',
  'Deep experience across immigration, family & business law',
  'Counsel that considers the full context of your situation',
];

export default function About() {
  return (
    <section id="about" className="site-section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F6F2 100%)' }}>

      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(17,24,39,0.08) 50%, transparent 100%)' }} />

      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 lg:gap-24 items-center">

          {/* LEFT — Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative w-full aspect-[3/4] max-w-[420px] rounded-sm overflow-hidden"
                style={{ boxShadow: '0 32px 64px rgba(17,24,39,0.1), 0 16px 32px rgba(17,24,39,0.06)' }}>
                <Image
                  src="/images/about-main.webp"
                  alt="Attorneys reviewing legal documents in Lansdale office"
                  width={420}
                  height={560}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(30,42,56,0.4) 100%)' }} />
              </div>

              {/* Second image — offset */}
              <div className="absolute -bottom-6 sm:-bottom-10 -right-4 sm:-right-8 w-28 sm:w-40 h-36 sm:h-52 rounded-sm overflow-hidden border-2 sm:border-4 border-white"
                style={{ boxShadow: '0 16px 40px rgba(17,24,39,0.12)' }}>
                <Image
                  src="/images/practice-areas-hero.png"
                  alt="Attorney having a consultation with a client"
                  width={160}
                  height={208}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-6 sm:top-8 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 rounded-sm -z-10 animate-float-slow"
              style={{ background: '#EFE7DA' }} />
            <div className="absolute -top-3 sm:-top-4 left-3 sm:left-4 border border-[#C29A3E]/20 w-full h-full rounded-sm -z-10"
              style={{ transform: 'translate(-6px, -6px)' }} />

            {/* Years badge */}
            <div className="absolute top-4 sm:top-8 -right-2 sm:-right-5 rounded-sm px-3 sm:px-5 py-3 sm:py-4 z-20"
              style={{ background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)', boxShadow: '0 8px 24px rgba(194, 154, 62,0.3)' }}>
              <p className="text-white text-2xl sm:text-3xl font-bold leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>45+</p>
              <p className="text-white/80 text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase mt-0.5 sm:mt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}>Years</p>
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col gap-5 sm:gap-8"
          >
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
                  style={{ fontFamily: 'Inter, sans-serif' }}>About the Firm</span>
              </div>

              <h2 className="text-[#14163A] leading-[1.1] font-semibold mb-4 sm:mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(30px, 6vw, 54px)',
                  letterSpacing: '-0.02em',
                }}>
                More Than Counsel —<br />
                <em className="not-italic" style={{ color: '#C29A3E' }}>A Steady Partner Since 1981</em>
              </h2>

              <p className="text-[#4B5563] leading-[1.75] sm:leading-[1.85] mb-3 sm:mb-5"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(14px, 2vw, 15px)' }}>
                Dobaria Law PC was founded in Lansdale in 1981. For more than four decades, we have
                represented individuals, families, and employers in the matters that shape their lives — from
                immigration and naturalization to family, business, and real estate law.
              </p>
              <p className="text-[#4B5563] leading-[1.75] sm:leading-[1.85]"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(13px, 2vw, 15px)' }}>
                Our approach is precise, transparent, and built around the people we represent. We take the time
                to understand the full context of a situation before we recommend a path, and we keep our clients
                informed in plain language at every step.
              </p>
            </div>

            {/* Commitments */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {commitments.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-2.5 sm:gap-3"
                >
                  <CheckCircle2 size={14} className="text-[#C29A3E] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4B5563] text-[12px] sm:text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="about-cta flex items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
              <Link
                href="/attorneys"
                className="group relative overflow-hidden px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase transition-all duration-400 inline-block"
                style={{
                  background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)',
                  color: '#F8F6F2',
                  borderRadius: '2px',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 8px 24px rgba(194, 154, 62,0.25)',
                }}
              >
                <span className="relative z-10">Our Attorneys</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #1B1E49 0%, #2A2F63 100%)' }} />
              </Link>

              <div className="flex flex-col">
                <span className="text-[#14163A] text-[12px] sm:text-sm font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}>Founding Partner</span>
                <span className="text-[#C29A3E] text-[11px] sm:text-xs italic"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>&ldquo;We will find a solution.&rdquo; — Marcia Binder Ibrahim</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

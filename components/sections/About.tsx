'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';

const commitmentKeys = ['c1', 'c2', 'c3', 'c4'];


export default function About() {
  const t = useTranslations('aboutSection');
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
            <div className="relative z-10 w-full max-w-[560px]">
              <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden"
                style={{ boxShadow: '0 32px 64px rgba(17,24,39,0.1), 0 16px 32px rgba(17,24,39,0.06)' }}>
                <Image
                  src="/images/brand-panel-portrait.svg"
                  alt="Dobaria Law PC"
                  width={420}
                  height={560}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(30,42,56,0.4) 100%)' }} />
              </div>

              {/* Years badge */}
              <div className="absolute top-4 sm:top-8 right-4 sm:-right-6 rounded-sm px-3 sm:px-5 py-3 sm:py-4 z-30"
                style={{ background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)', boxShadow: '0 8px 24px rgba(194, 154, 62,0.3)' }}>
                <p className="text-white text-2xl sm:text-3xl font-bold leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>45+</p>
                <p className="text-white/80 text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase mt-0.5 sm:mt-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{t('years')}</p>
              </div>

              {/* Second image — offset */}
              <div className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-10 w-28 sm:w-40 h-36 sm:h-52 rounded-sm overflow-hidden border-2 sm:border-4 border-white z-20"
                style={{ boxShadow: '0 16px 40px rgba(17,24,39,0.18)' }}>
                <Image
                  src="/images/brand-panel-accent.svg"
                  alt="Dobaria Law PC"
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
                  style={{ fontFamily: 'Inter, sans-serif' }}>{t('eyebrow')}</span>
              </div>

              <h2 className="text-[#14163A] leading-[1.1] font-semibold mb-4 sm:mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(30px, 6vw, 54px)',
                  letterSpacing: '-0.02em',
                }}>
                {t('headingBefore')}<br />
                <em className="not-italic" style={{ color: '#C29A3E' }}>{t('headingAccent')}</em>
              </h2>

              <p className="text-[#4B5563] leading-[1.75] sm:leading-[1.85] mb-3 sm:mb-5"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(14px, 2vw, 15px)' }}>
                {t('para1')}
              </p>
              <p className="text-[#4B5563] leading-[1.75] sm:leading-[1.85]"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(13px, 2vw, 15px)' }}>
                {t('para2')}
              </p>
            </div>

            {/* Commitments */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {commitmentKeys.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-2.5 sm:gap-3"
                >
                  <CheckCircle2 size={14} className="text-[#C29A3E] mt-0.5 flex-shrink-0" />
                  <span className="text-[#4B5563] text-[12px] sm:text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}>{t(key)}</span>
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
                <span className="relative z-10">{t('ourAttorneys')}</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #1B1E49 0%, #2A2F63 100%)' }} />
              </Link>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

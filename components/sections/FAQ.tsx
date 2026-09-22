'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqKeys = ['1', '2', '3', '4', '5', '6', '7', '8'];


export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="site-section relative overflow-hidden"
      style={{ background: '#FFFFFF' }}>

      <div className="site-container">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 sm:gap-12 lg:gap-16 lg:gap-24 items-start">

          {/* Left — header */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5"
            >
              <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}>{t('eyebrow')}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#14163A] leading-[1.1] font-semibold mb-4 sm:mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(30px, 6vw, 54px)',
                letterSpacing: '-0.02em',
              }}
            >
              {t('headingBefore')} <em className="not-italic text-[#C29A3E]">{t('headingAccent')}</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#4B5563] leading-[1.75] sm:leading-[1.8] mb-5 sm:mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 16px)' }}
            >
              {t('intro')}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase"
              style={{
                background: 'linear-gradient(135deg, #1B1E49 0%, #2A2F63 100%)',
                color: '#F8F6F2',
                borderRadius: '2px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <span className="relative z-10">{t('cta')}</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)' }} />
            </motion.button>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col divide-y divide-[rgba(17,24,39,0.07)]">
            {faqKeys.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-3 sm:gap-6 py-4 sm:py-6 text-left group"
                >
                  <span className="text-[#14163A] font-medium leading-snug group-hover:text-[#C29A3E] transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 16px)' }}>
                    {t(`q${faq}`)}
                  </span>
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-sm flex items-center justify-center mt-0.5 transition-all duration-300"
                    style={{
                      background: openIndex === i ? 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)' : 'rgba(17,24,39,0.04)',
                      border: '1px solid rgba(17,24,39,0.06)',
                    }}>
                    {openIndex === i
                      ? <Minus size={12} className="text-white sm:hidden" />
                      : <Plus size={12} className="text-[#4B5563] sm:hidden" />
                    }
                    {openIndex === i
                      ? <Minus size={14} className="text-white hidden sm:block" />
                      : <Plus size={14} className="text-[#4B5563] hidden sm:block" />
                    }
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 sm:pb-6 pr-8 sm:pr-12">
                        <p className="text-[#4B5563] leading-[1.75] sm:leading-[1.8] border-l-2 border-[#C29A3E] pl-3 sm:pl-4"
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(14px, 1.8vw, 15px)' }}>
                          {t(`a${faq}`)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

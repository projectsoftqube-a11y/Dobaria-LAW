'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Client names and ratings stay; the quotes live in messages.
const testimonials = [
  { key: 't1', author: 'David', practiceSlug: 'immigration-law', rating: 5 },
  { key: 't2', author: 'Alex', practiceSlug: 'family-law', rating: 5 },
  { key: 't3', author: 'Rita', practiceSlug: 'immigration-law', rating: 5 },
  { key: 't4', author: 'Shyrel', practiceSlug: 'immigration-law', rating: 5 },
  { key: 't5', author: 'Jackie', practiceSlug: 'immigration-law', rating: 5 },
  { key: 't6', author: 'Daniel', practiceSlug: 'deportation-defense', rating: 5 },
];


export default function Testimonials() {
  const t = useTranslations('testimonials');
  const tArea = useTranslations('practiceAreas');
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const advance = (dir: number) => {
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => advance(1), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoplay, current]);

  return (
    <section id="testimonials" className="site-section relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F8F6F2 0%, #FFFFFF 50%, #EFE7DA 100%)' }}>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C29A3E 0%, transparent 70%)' }} />
      </div>

      <div className="site-container">

        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}>{t('eyebrow')}</span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#14163A] leading-[1.1] font-semibold"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(30px, 6vw, 54px)',
              letterSpacing: '-0.02em',
            }}
          >
            {t('headingBefore')} <em className="not-italic text-[#C29A3E]">{t('headingAccent')}</em>
          </motion.h2>
        </div>

        {/* Main testimonial display */}
        <div className="relative max-w-[860px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative p-6 sm:p-10 lg:p-14 rounded-sm"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(194, 154, 62,0.12)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 40px rgba(17,24,39,0.07), 0 2px 8px rgba(17,24,39,0.04)',
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-10 opacity-10">
                <Quote size={40} className="text-[#C29A3E] sm:hidden" />
                <Quote size={64} className="text-[#C29A3E] hidden sm:block" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-[#C29A3E] sm:hidden" fill="#C29A3E" />
                ))}
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#C29A3E] hidden sm:block" fill="#C29A3E" />
                ))}
              </div>

              {/* Practice tag */}
              <span className="inline-block mb-4 sm:mb-6 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase rounded-sm"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(194, 154, 62,0.08)',
                  color: '#9C7A26',
                  border: '1px solid rgba(194, 154, 62,0.15)',
                }}>
                {tArea(`${testimonials[current].practiceSlug}.label`)}
              </span>

              <blockquote className="text-[#14163A] leading-[1.65] sm:leading-[1.75] mb-5 sm:mb-8"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(18px, 3vw, 26px)',
                  fontStyle: 'italic',
                }}>
                &ldquo;{t(`${testimonials[current].key}Quote`)}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[rgba(17,24,39,0.07)]">
                <img
                  src="/images/logo-badge.svg"
                  alt="Dobaria Law PC"
                  width={44}
                  height={44}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex-shrink-0"
                />
                <div>
                  <p className="text-[#14163A] font-semibold text-[12px] sm:text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}>{testimonials[current].author}</p>
                  <p className="text-[#4B5563] text-[10px] sm:text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t('verifiedClient')} · {tArea(`${testimonials[current].practiceSlug}.label`)}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i); }}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '6px',
                    height: '6px',
                    borderRadius: i === current ? '3px' : '50%',
                    background: i === current ? '#C29A3E' : 'rgba(194, 154, 62,0.25)',
                  }}
                />
              ))}
            </div>

            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => { setAutoplay(false); advance(-1); }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center border border-[rgba(17,24,39,0.1)] text-[#4B5563] hover:border-[#C29A3E] hover:text-[#C29A3E] transition-all duration-300"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => { setAutoplay(false); advance(1); }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center border border-[rgba(17,24,39,0.1)] text-[#4B5563] hover:border-[#C29A3E] hover:text-[#C29A3E] transition-all duration-300"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

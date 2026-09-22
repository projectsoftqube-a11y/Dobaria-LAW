'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const stories = [
  { key: 's1' },
  { key: 's2' },
  { key: 's3' },
  { key: 's4' },
];


export default function SuccessStories() {
  const t = useTranslations('successStories');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = window.innerWidth < 640 ? 300 : 420;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="stories" className="site-section relative overflow-hidden" style={{ background: '#1B1E49' }}>
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(194, 154, 62,0.4), transparent)' }} />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="absolute rounded-full opacity-[0.03]"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              background: 'radial-gradient(circle, #C29A3E 0%, transparent 70%)',
              left: `${i * 30}%`,
              top: '50%',
              transform: 'translateY(-50%)',
            }} />
        ))}
      </div>

      <div className="site-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 sm:gap-8 mb-8 sm:mb-14">
          <div>
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
              className="leading-[1.1] font-semibold"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(30px, 6vw, 54px)',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              {t('headingBefore')} <em className="not-italic text-[#C29A3E]">{t('headingAccent')}</em>
            </motion.h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={() => scroll('left')}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-sm flex items-center justify-center border border-[rgba(255,255,255,0.15)] text-white hover:border-[#C29A3E] hover:text-[#C29A3E] transition-all duration-300">
              <ArrowLeft size={14} />
            </button>
            <button onClick={() => scroll('right')}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-sm flex items-center justify-center border border-[rgba(255,255,255,0.15)] text-white hover:border-[#C29A3E] hover:text-[#C29A3E] transition-all duration-300">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-5 sm:mx-0 px-5 sm:px-0">
          {stories.map((story, i) => (
            <motion.div
              key={t(`${story.key}Title`)}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="flex-shrink-0 w-[280px] sm:w-[380px] flex flex-col gap-4 sm:gap-5 p-5 sm:p-8 group cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '4px',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(194, 154, 62,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(194, 154, 62,0.25)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.1em] uppercase text-[#C29A3E]"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{t(`${story.key}Category`)}</span>
                <span className="flex-shrink-0 px-2 py-0.5 text-[8px] sm:text-[9px] font-semibold tracking-[0.05em] uppercase rounded-full"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'rgba(194, 154, 62,0.1)',
                    color: '#DEC067',
                    border: '1px solid rgba(194, 154, 62,0.2)',
                  }}>
                  {t(`${story.key}Tag`)}
                </span>
              </div>

              <h3 className="font-semibold leading-snug text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(19px, 3vw, 24px)' }}>
                {t(`${story.key}Title`)}
              </h3>

              <div className="py-3 sm:py-4 border-t border-b border-[rgba(255,255,255,0.08)]">
                <p className="text-[#DEC067] font-medium text-[12px] sm:text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t(`${story.key}Result`)}
                </p>
              </div>

              <p className="text-[rgba(255,255,255,0.5)] text-[11px] sm:text-[13px] leading-[1.7] sm:leading-[1.75]"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                {t(`${story.key}Detail`)}
              </p>

              <div className="flex items-center gap-1.5 sm:gap-2 mt-auto text-[#C29A3E] group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{t('readCaseStudy')}</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(194, 154, 62,0.4), transparent)' }} />
    </section>
  );
}

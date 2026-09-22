'use client';

import { motion } from 'framer-motion';
import { Target, MessageSquare, Zap, Globe, Star, BookOpen } from 'lucide-react';
import { useTranslations } from 'next-intl';

const features = [
  { icon: Target, key: 'f1' },
  { icon: MessageSquare, key: 'f2' },
  { icon: Globe, key: 'f3' },
  { icon: Zap, key: 'f4' },
  { icon: Star, key: 'f5' },
  { icon: BookOpen, key: 'f6' },
];

export default function WhyUs() {
  const t = useTranslations('whyUs');
  return (
    <section id="why-us" className="site-section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F6F2 0%, #FFFFFF 100%)' }}>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #1B1E49 0%, transparent 70%)' }} />
      </div>

      <div className="site-container">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-8 mb-10 sm:mb-16">
          <div className="max-w-[540px]">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] leading-[1.75] sm:leading-[1.8] lg:max-w-[380px]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 16px)' }}
          >
            {t('intro')}
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={t(`${feature.key}Title`)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: 'easeOut' }}
                className="group relative p-6 sm:p-8 cursor-default"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(17,24,39,0.06)',
                  borderRadius: '4px',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(17,24,39,0.08), 0 4px 16px rgba(194, 154, 62,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(194, 154, 62,0.2)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(17,24,39,0.06)';
                }}
              >
                <span className="absolute top-5 sm:top-6 right-5 sm:right-6 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.15em] text-[rgba(17,24,39,0.12)]"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  0{i + 1}
                </span>

                <div className="flex flex-col gap-3 sm:gap-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(194, 154, 62,0.08) 0%, rgba(194, 154, 62,0.04) 100%)',
                      border: '1px solid rgba(194, 154, 62,0.15)',
                    }}>
                    <Icon size={16} className="text-[#C29A3E] sm:hidden" />
                    <Icon size={18} className="text-[#C29A3E] hidden sm:block" />
                  </div>

                  <div>
                    <h3 className="text-[#14163A] font-semibold mb-2 sm:mb-3 leading-snug"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(17px, 2.5vw, 20px)' }}>
                      {t(`${feature.key}Title`)}
                    </h3>
                    <p className="text-[#4B5563] leading-[1.65] sm:leading-[1.75]"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(12px, 1.5vw, 13px)' }}>
                      {t(`${feature.key}Desc`)}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full rounded-b-sm transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, #C29A3E, transparent)' }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

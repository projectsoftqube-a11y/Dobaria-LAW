'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Search, Lightbulb, Scale, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

gsap.registerPlugin(ScrollTrigger);

// Copy lives in messages; only the icon and step order stay here.
// Copy lives in messages; the step number, icon and colour stay here.
const steps = [
  { number: '01', icon: MessageCircle, key: 's1', color: '#1B1E49' },
  { number: '02', icon: Search, key: 's2', color: '#C29A3E' },
  { number: '03', icon: Lightbulb, key: 's3', color: '#6E7A64' },
  { number: '04', icon: Scale, key: 's4', color: '#1B1E49' },
  { number: '05', icon: CheckCircle, key: 's5', color: '#C29A3E' },
];



export default function Process() {
  const t = useTranslations('process');
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    // Animate the timeline progress line
    gsap.to(lineRef.current, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 30%',
        end: 'bottom 70%',
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="process" ref={sectionRef} className="site-section relative overflow-hidden" style={{ background: '#0B0F17' }}>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C29A3E] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1B1E49] rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="text-center max-w-[700px] mx-auto mb-20 px-6 lg:px-10 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#C29A3E]" />
          <span className="text-[#C29A3E] text-[14px] font-semibold tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('eyebrow')}</span>
          <span className="w-8 h-[1px] bg-[#C29A3E]" />
        </div>

        <h2 className="text-white leading-[1.1] font-semibold mb-6"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(40px, 7vw, 56px)',
            letterSpacing: '0.05em',
          }}>
          {t('headingBefore')} <em className="not-italic text-[#C29A3E]">{t('headingAccent')}</em>
        </h2>

        <p className="text-gray-400 leading-[1.8]"
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px' }}>
          {t('intro')}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative site-container">
        
        {/* Timeline Line (Desktop: Center, Mobile: Left) */}
        <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-800" />
        <div ref={lineRef} className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 w-[2px] bg-[#C29A3E]" style={{ height: '0%' }} />

        {/* Steps */}
        <div className="flex flex-col gap-12 lg:gap-16 relative pl-14 lg:pl-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <div key={step.number} className={`flex flex-col lg:flex-row items-center relative ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Card */}
                <div className={`w-full lg:w-[calc(50%-40px)] bg-[#151C28] border border-gray-800 rounded-2xl p-6 lg:p-8 hover:border-[#C29A3E]/50 transition-colors duration-500 relative ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    {/* Step Number and Title */}
                    <h3 className="font-semibold leading-tight text-white text-xl lg:text-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
                      {step.number}. {t(`${step.key}Title`)}
                    </h3>
                    
                    {/* Duration Badge */}
                    <span
                      className="px-3 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase rounded-full"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        background: 'rgba(194, 154, 62,0.1)',
                        color: '#C29A3E',
                        border: '1px solid rgba(194, 154, 62,0.3)',
                      }}
                    >
                      {t(`${step.key}Duration`)}
                    </span>
                  </div>

                  <p className="leading-[1.75] text-gray-300 text-sm lg:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {t(`${step.key}Desc`)}
                  </p>
                </div>

                {/* Timeline Dot/Icon (Desktop: Center, Mobile: Left) */}
                <div className="absolute left-[-2rem] lg:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0B0F17] border-2 border-[#C29A3E] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(194, 154, 62,0.3)]">
                  <Icon size={20} className="text-[#C29A3E]" />
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="process-cta flex justify-center mt-20 relative z-10">
        <Link
          href="/contact"
          className="group relative overflow-hidden flex items-center gap-3 px-10 py-5 text-[14px] font-semibold tracking-[0.15em] uppercase transition-all duration-400 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)',
            color: '#F8F6F2',
            borderRadius: '4px',
            fontFamily: 'Montserrat, sans-serif',
            boxShadow: '0 12px 40px rgba(194, 154, 62,0.3)',
          }}
        >
          <span className="relative z-10">{t('cta')}</span>
          <div className="absolute inset-0 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
            style={{ background: 'linear-gradient(135deg, #1B1E49 0%, #2A2F63 100%)' }} />
        </Link>
      </div>
    </section>
  );
}

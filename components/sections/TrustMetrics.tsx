'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface Metric {
  value: number;
  suffix: string;
  label: string;
  description: string;
  prefix?: string;
}

const defaultMetrics: Metric[] = [
  { value: 45, suffix: '+', label: 'Years of Trusted Counsel', description: 'Serving clients since 1981' },
  { value: 50, suffix: '+', label: 'Countries Served', description: 'Clients from around the world' },
  { value: 8, suffix: '', label: 'Languages Spoken', description: 'Multilingual legal team' },
  { value: 3, suffix: '', label: 'States Admitted', description: 'PA · NJ · NY' },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

function MetricItem({ metric, index, inView }: { metric: Metric; index: number; inView: boolean }) {
  const count = useCountUp(metric.value, 2000, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
      className="flex flex-col items-center lg:items-start gap-1.5 sm:gap-2 relative"
    >
      <div className="flex items-baseline gap-1">
        <span
          className="font-semibold leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(36px, 8vw, 72px)',
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
          }}
        >
          {metric.prefix}{count}
        </span>
        <span
          className="font-semibold"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(20px, 4vw, 40px)',
            color: '#C29A3E',
          }}
        >
          {metric.suffix}
        </span>
      </div>
      <div className="w-6 sm:w-8 h-[1px] bg-[#C29A3E] mb-0.5" />
      <p className="text-white text-[11px] sm:text-sm font-semibold tracking-[0.06em] sm:tracking-[0.08em] uppercase text-center lg:text-left"
        style={{ fontFamily: 'Inter, sans-serif' }}>{metric.label}</p>
      <p className="text-[rgba(255,255,255,0.5)] text-[10px] sm:text-xs leading-relaxed text-center lg:text-left"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>{metric.description}</p>
    </motion.div>
  );
}

export default function TrustMetrics({ customMetrics }: { customMetrics?: Metric[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const activeMetrics = customMetrics || defaultMetrics;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics" className="site-section relative overflow-hidden" style={{ background: '#1B1E49' }}>
      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, #C29A3E, transparent)' }} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C29A3E 0%, transparent 70%)' }} />
      </div>

      <div ref={ref} className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0">
          {activeMetrics.map((metric, i) => (
            <div key={metric.label} className="flex flex-col lg:flex-row items-stretch">
              <MetricItem metric={metric} index={i} inView={inView} />
              {i < activeMetrics.length - 1 && (
                <div className="hidden lg:block w-[1px] self-stretch mx-12 opacity-[0.12]"
                  style={{ background: 'linear-gradient(180deg, transparent, #C29A3E, transparent)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, #C29A3E, transparent)' }} />
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

/**
 * Global reach band.
 *
 * Carries the firm's headline figures (years, countries, languages) that used
 * to sit on top of the "Our Story" photo, plus a short note on the firm's
 * international client base.
 */

const STATS = [
  { value: '45+', label: 'Years of Counsel' },
  { value: '50+', label: 'Countries Served' },
  { value: '8', label: 'Languages Spoken' },
];

export default function GlobalReach() {
  return (
    <section className="hidden sm:block py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F8F6F2] relative overflow-hidden">
      {/* Subtle grid texture, tuned for the light ground */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(27,30,73,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(27,30,73,0.8) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="site-container relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[1px] bg-[#C29A3E]" />
          <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">
            Global Reach
          </span>
          <div className="flex-1 h-[1px] bg-[#1B1E49]/10" />
        </div>

        <div className="max-w-[760px] mb-12">
          <h2
            className="text-[#1B1E49] leading-snug mb-4"
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: 'clamp(30px,4vw,52px)',
              letterSpacing: '-0.01em',
            }}
          >
            Clients From Around the World
          </h2>
          <p className="text-[#4B5563] text-[16px] leading-[1.85]">
            From our Lansdale office we have represented individuals, families, and employers
            with ties to more than fifty countries — and we keep every client informed in a
            language they are comfortable with.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 bg-white px-6 py-8 text-center shadow-[0_4px_30px_-14px_rgba(17,24,39,0.12)]"
            >
              <p
                className="text-[#1B1E49] leading-none"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(38px,5vw,56px)' }}
              >
                {value}
              </p>
              <p className="text-[#6B7280] text-[12px] sm:text-[13px] tracking-[0.14em] uppercase mt-3">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, Shield, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [4, -4]);
  const rotateY = useTransform(springX, [-300, 300], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.9,
        ease: 'easeOut' as const,
      },
    }),
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F8F6F2 0%, #FFFFFF 50%, #EFE7DA 100%)' }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #C29A3E 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #1B1E49 0%, transparent 70%)' }} />

        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(17,24,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              background: '#C29A3E',
              opacity: 0.15 + (i % 4) * 0.05,
              left: `${15 + i * 14}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 site-container pt-24 sm:pt-28 pb-12 sm:pb-16 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

        {/* LEFT — Text content */}
        <div className="flex flex-col gap-5 sm:gap-8">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-eyebrow flex items-center gap-3"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Legal Excellence Since 1981
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col gap-1.5 sm:gap-3"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(38px, 8vw, 80px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.08,
              fontWeight: 400,
            }}
          >
            <span className="text-[#14163A] block">Immigration, Family{' '}</span>
            <span className="block" style={{
              background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>&amp; Business{' '}</span>
            <span className="text-[#14163A] block">Counsel</span>
            <span className="sr-only"> — Trusted for Over 45 Years</span>
          </motion.h1>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-[#4B5563] leading-[1.75] sm:leading-[1.8] max-w-[480px]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2.5vw, 16px)' }}
          >
            Dobaria Law PC delivers strategic legal counsel for individuals, families, entrepreneurs, and employers navigating immigration, family, business, and real estate matters. From our Lansdale office, we proudly serve clients throughout Montgomery County, the Greater Philadelphia region, and across the United States for immigration matters.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-4 text-[#F8F6F2] text-[10px] sm:text-[12px] font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase transition-all duration-400"
              style={{
                background: 'linear-gradient(135deg, #1B1E49 0%, #2A2F63 100%)',
                borderRadius: '2px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <span className="relative z-10">Schedule Consultation</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)' }} />
            </Link>

            <Link
              href="/practice-areas"
              className="group flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-4 text-[#14163A] text-[10px] sm:text-[12px] font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase transition-all duration-300 border border-[rgba(17,24,39,0.15)] hover:border-[#C29A3E]"
              style={{ borderRadius: '2px', fontFamily: 'Inter, sans-serif' }}
            >
              <span>Explore Practice Areas</span>
              <ArrowRight size={14} className="text-[#C29A3E] group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-stats flex items-center gap-6 sm:gap-8 pt-1 sm:pt-2"
          >
            {[
              { num: '45+', label: 'Years of Counsel' },
              { num: '50+', label: 'Countries Served' },
              { num: '8', label: 'Languages Spoken' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-[#14163A] font-semibold text-2xl sm:text-xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{item.num}</span>
                <span className="text-[#4B5563] text-[9px] sm:text-[11px] tracking-[0.06em] sm:tracking-[0.08em] uppercase"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Visual composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="relative hidden lg:flex items-center justify-center"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-full"
          >
            {/* Main image */}
            <div className="relative w-full aspect-[4/5] max-w-[480px] mx-auto">
              <div className="absolute inset-0 rounded-sm overflow-hidden"
                style={{ boxShadow: '0 40px 80px rgba(17,24,39,0.12), 0 20px 40px rgba(17,24,39,0.08)' }}>
                <Image
                  src="/images/hero-bg.webp"
                  alt="Dobaria Law PC partners providing professional legal counsel"
                  width={480}
                  height={600}
                  priority
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(17,24,39,0.3) 100%)' }} />
              </div>

              {/* Floating gold frame */}
              <div className="absolute -inset-3 border border-[#C29A3E]/20 rounded-sm pointer-events-none animate-float-slow" />

              {/* Accent square */}
              <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-sm animate-float-delayed"
                style={{ background: 'linear-gradient(135deg, #EFE7DA 0%, #F8F6F2 100%)', zIndex: -1 }} />
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-8 -right-8 glass-card rounded-sm px-4 py-3 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1B1E49 0%, #2A2F63 100%)' }}>
                  <Shield size={14} className="text-[#C29A3E]" />
                </div>
                <div>
                  <p className="text-[#14163A] text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Trusted Counsel</p>
                  <p className="text-[#4B5563] text-[10px]" style={{ fontFamily: 'Inter, sans-serif' }}>45+ Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="absolute bottom-8 -right-10 glass-card rounded-sm px-4 py-3 animate-float-delayed"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)' }}>
                  <Award size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[#14163A] text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Award Recognized</p>
                  <p className="text-[#4B5563] text-[10px]" style={{ fontFamily: 'Inter, sans-serif' }}>Top Legal Practice</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute top-1/3 -left-12 glass-card rounded-sm px-4 py-3 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6E7A64 0%, #5A6450 100%)' }}>
                  <Globe size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[#14163A] text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Global Reach</p>
                  <p className="text-[#4B5563] text-[10px]" style={{ fontFamily: 'Inter, sans-serif' }}>International Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hero-scroll absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#4B5563] text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase"
          style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
        <div className="w-[1px] h-10 sm:h-12 overflow-hidden bg-[rgba(17,24,39,0.1)]">
          <motion.div
            className="w-full h-1/2 bg-[#C29A3E]"
            animate={{ y: ['0%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

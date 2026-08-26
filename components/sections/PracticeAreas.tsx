'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Globe, FileCheck, BadgeCheck, Shield, Heart, Plane, Briefcase, Home, ArrowRight
} from 'lucide-react';

const practices = [
  {
    icon: Globe,
    title: 'Immigration Law',
    description: 'Decades of experience guiding individuals, families, and employers through every stage of U.S. immigration.',
    tags: ['Visas', 'Green Cards', 'Appeals'],
    color: '#1B1E49',
    href: '/practice-areas/immigration-law',
  },
  {
    icon: FileCheck,
    title: 'Green Cards & Visas',
    description: 'Family-based and employment-based green cards, consular processing, adjustment of status, and nonimmigrant visas.',
    tags: ['Family', 'Employment', 'Consular'],
    color: '#C29A3E',
    href: '/practice-areas/green-cards-visas',
  },
  {
    icon: BadgeCheck,
    title: 'Citizenship & Naturalization',
    description: 'Naturalization, derivative citizenship, and assistance with complex eligibility questions.',
    tags: ['Eligibility', 'Citizenship', 'Oaths'],
    color: '#6E7A64',
    href: '/practice-areas/citizenship-naturalization',
  },
  {
    icon: Shield,
    title: 'Deportation Defense',
    description: 'Vigorous representation in removal proceedings before immigration courts and the Board of Immigration Appeals.',
    tags: ['Removal', 'Hearings', 'Defense'],
    color: '#1B1E49',
    href: '/practice-areas/deportation-defense',
  },
  {
    icon: Heart,
    title: 'Family Law',
    description: 'Divorce, child custody, support matters, and prenuptial agreements handled with discretion and steady judgment.',
    tags: ['Divorce', 'Custody', 'Support'],
    color: '#C29A3E',
    href: '/practice-areas/family-law',
  },
  {
    icon: Plane,
    title: 'International Divorce',
    description: 'Cross-border divorce and custody matters involving foreign jurisdictions and international assets.',
    tags: ['Cross-Border', 'Dual Citizens', 'Assets'],
    color: '#6E7A64',
    href: '/practice-areas/international-divorce',
  },
  {
    icon: Briefcase,
    title: 'Business Law',
    description: 'Entity formation, contracts, commercial transactions, and ongoing counsel for closely held businesses.',
    tags: ['Formation', 'Contracts', 'Advisory'],
    color: '#1B1E49',
    href: '/practice-areas/business-law',
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Residential and commercial real estate transactions, title work, closings, and multi-state matters.',
    tags: ['Closings', 'Title Work', 'Deeds'],
    color: '#C29A3E',
    href: '/practice-areas/real-estate-law',
  },
];

export default function PracticeAreas() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="practice" className="site-section relative overflow-hidden" style={{ background: '#F8F6F2' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C29A3E 0%, transparent 70%)' }} />
      </div>

      <div className="site-container">

        {/* Header */}
        <div className="max-w-[640px] mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}>Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#14163A] leading-[1.1] font-semibold mb-3 sm:mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(30px, 6vw, 54px)',
              letterSpacing: '-0.02em',
            }}
          >
            Comprehensive Legal <em className="not-italic text-[#C29A3E]">Practice Areas</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#4B5563] leading-[1.75] sm:leading-[1.8]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 16px)' }}
          >
            For more than four decades, we have represented individuals, families, and employers across
            immigration, family, business, and real estate law — with the depth that comes from genuine experience.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {practices.map((practice, i) => {
            const Icon = practice.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: 'easeOut' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="practice-card group relative flex flex-col gap-3 sm:gap-5 p-5 sm:p-7"
                style={{
                  background: isHovered ? practice.color : '#FFFFFF',
                  border: `1px solid ${isHovered ? 'transparent' : 'rgba(17,24,39,0.07)'}`,
                  borderRadius: '4px',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: isHovered
                    ? `0 24px 60px rgba(17,24,39,0.15), 0 8px 24px rgba(194, 154, 62,0.1)`
                    : '0 2px 12px rgba(17,24,39,0.04)',
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center transition-all duration-400"
                  style={{
                    background: isHovered ? 'rgba(255,255,255,0.1)' : `${practice.color}12`,
                    border: `1px solid ${isHovered ? 'rgba(255,255,255,0.2)' : `${practice.color}25`}`,
                  }}>
                  <Icon size={18} style={{ color: isHovered ? '#DEC067' : practice.color }} />
                </div>

                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3 className="font-semibold leading-tight transition-colors duration-300"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(17px, 2.5vw, 20px)',
                      color: isHovered ? '#FFFFFF' : '#14163A',
                    }}>
                    {practice.title}
                  </h3>

                  <p className="leading-[1.65] sm:leading-[1.7] transition-colors duration-300"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(14px, 1.5vw, 15px)',
                      color: isHovered ? 'rgba(255,255,255,0.75)' : '#4B5563',
                    }}>
                    {practice.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-auto">
                    {practice.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] tracking-[0.06em] sm:tracking-[0.08em] uppercase font-medium rounded-sm transition-all duration-300"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          background: isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(17,24,39,0.04)',
                          color: isHovered ? 'rgba(255,255,255,0.8)' : '#4B5563',
                          border: `1px solid ${isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(17,24,39,0.06)'}`,
                        }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={practice.href} className="inline-flex items-center gap-1.5 sm:gap-2 py-2.5 sm:py-0 transition-all duration-300"
                  style={{ color: isHovered ? '#DEC067' : '#C29A3E' }}>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase"
                    style={{ fontFamily: 'Inter, sans-serif' }}>Learn More</span>
                  <ArrowRight size={12} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </Link>

                {isHovered && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-sm"
                    style={{ background: 'linear-gradient(90deg, #C29A3E, #DEC067)' }} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const attorneys = [
  {
    name: 'Vishal J. Dobaria, Esq.',
    title: 'Managing Attorney',
    specialties: ['Real Estate Law', 'Business Law', 'Immigration'],
    bio: "Vishal J. Dobaria leads the firm's day-to-day practice across immigration, real estate, business, and family law, with over a decade of experience and title work spanning eighteen states.",
    img: '/images/attorneys/vishal.webp',
    bar: 'PA & NJ Bar',
    href: '/attorneys/vishal-j-dobaria',
  },
  {
    name: 'Marcia Binder Ibrahim, Esq.',
    title: 'Founding Member & Of Counsel',
    specialties: ['Immigration Law', 'Family Law', 'Federal Appeals'],
    bio: 'Marcia Binder Ibrahim is a founding member of the firm with 35+ years in U.S. immigration and family law, admitted before the U.S. Supreme Court and an AILA member for 28 years.',
    img: '/images/attorneys/marcia.webp',
    bar: 'U.S. Supreme Court',
    href: '/attorneys/marcia-binder-ibrahim',
  },
  {
    name: 'Jose M. Lugo, J.D., Ph.D.',
    title: 'Immigration Attorney',
    specialties: ['Immigration', 'Asylum', 'Deportation Defense'],
    bio: 'Jose M. Lugo brings a J.D. and a Ph.D. in Political Science to the firm’s immigration practice. Bilingual in English and Spanish, he focuses on visas, green cards, asylum, and citizenship.',
    img: '/images/attorneys/jose.png',
    bar: 'Bilingual EN / ES',
    href: '/attorneys/jose-m-lugo',
  },
];

export default function Attorneys() {
  return (
    <section id="attorneys" className="site-section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F6F2 100%)' }}>

      <div className="site-container">

        {/* Header */}
        <div className="max-w-[600px] mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}>Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#14163A] leading-[1.1] font-semibold mb-3 sm:mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(30px, 6vw, 54px)',
              letterSpacing: '-0.02em',
            }}
          >
            Meet Our <em className="not-italic text-[#C29A3E]">Attorneys</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] leading-[1.75] sm:leading-[1.8]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(13px, 2vw, 15px)' }}
          >
            Our attorneys bring deep legal expertise, unwavering integrity, and decades of
            combined legal guidance to every client matter.
          </motion.p>
        </div>

        {/* Attorneys grid — 3 attorneys */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {attorneys.map((attorney, i) => (
            <motion.div
              key={attorney.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: 'easeOut' }}
              className="group relative flex flex-col h-full"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(17,24,39,0.06)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Link href={attorney.href} aria-label={`Read the full bio of ${attorney.name}`} className="block w-full h-full">
                  <img
                    src={attorney.img}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  />
                </Link>
                <div className="absolute inset-0 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(17,24,39,0.8) 100%)' }} />

                {/* Overlay actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'rgba(30,42,56,0.9)' }}>
                  <Link
                    href="/contact"
                    className="w-10 h-10 rounded-sm flex items-center justify-center border border-[rgba(194, 154, 62,0.4)] text-[#DEC067] hover:bg-[#C29A3E] hover:text-white transition-all duration-300"
                  >
                    <Mail size={16} />
                  </Link>
                  <a
                    href="tel:215-362-2478"
                    className="w-10 h-10 rounded-sm flex items-center justify-center border border-[rgba(194, 154, 62,0.4)] text-[#DEC067] hover:bg-[#C29A3E] hover:text-white transition-all duration-300"
                  >
                    <Phone size={16} />
                  </a>
                </div>

                {/* Bar badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[9px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase rounded-sm"
                  style={{
                    background: 'rgba(194, 154, 62,0.9)',
                    color: '#FFF',
                    fontFamily: 'Inter, sans-serif',
                  }}>
                  {attorney.bar}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1.5 sm:gap-3 p-3 sm:p-5 flex-1">
                <div>
                  <h3 className="text-[#14163A] font-semibold leading-tight text-xl sm:text-2xl"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    <Link href={attorney.href} className="hover:text-[#C29A3E] transition-colors duration-200">
                      {attorney.name}
                    </Link>
                  </h3>
                  <p className="text-[#C29A3E] text-xs font-semibold tracking-wider uppercase mt-0.5"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {attorney.title}
                  </p>
                </div>

                <p className="text-[#4B5563] text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {attorney.bio}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                  {attorney.specialties.map(s => (
                    <span key={s} className="px-1.5 sm:px-2 py-0.5 text-[10px] tracking-wider rounded-sm uppercase font-semibold"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        background: 'rgba(194, 154, 62,0.08)',
                        color: '#9C7A26',
                        border: '1px solid rgba(194, 154, 62,0.15)',
                      }}>
                      {s}
                    </span>
                  ))}
                </div>

                <Link href={attorney.href} className="flex items-center gap-1.5 mt-auto pt-2 text-[#1B1E49] hover:text-[#C29A3E] transition-colors duration-200">
                  <span className="text-xs font-bold uppercase tracking-wider">Read Full Bio</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(90deg, #C29A3E, transparent)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

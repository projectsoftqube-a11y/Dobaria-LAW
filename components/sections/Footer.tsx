'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Facebook, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const practiceLinks = [
  { label: 'Immigration Law', href: '/practice-areas/immigration-law' },
  { label: 'Green Cards & Visas', href: '/practice-areas/green-cards-visas' },
  { label: 'Citizenship & Naturalization', href: '/practice-areas/citizenship-naturalization' },
  { label: 'Deportation Defense', href: '/practice-areas/deportation-defense' },
  { label: 'Family Law', href: '/practice-areas/family-law' },
  { label: 'International Divorce', href: '/practice-areas/international-divorce' },
  { label: 'Business Law', href: '/practice-areas/business-law' },
  { label: 'Real Estate Law', href: '/practice-areas/real-estate-law' },
];

const quickLinks = [
  { label: 'About the Firm', href: '/about' },
  { label: 'Our Attorneys', href: '/attorneys' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Client Results', href: '/results' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Free Consultation', href: '/free-consultation' },
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer style={{ background: '#14163A' }}>
      <div className="h-[1px] w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(194, 154, 62,0.4), transparent)' }} />

      {/* Top CTA band */}
      <div className="border-b border-[rgba(255,255,255,0.06)]">
        <div className="site-container py-8 sm:py-10 lg:py-14 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          <div className="text-center sm:text-left">
            <p className="text-[#C29A3E] text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-1 sm:mb-2"
              style={{ fontFamily: 'Inter, sans-serif' }}>Ready to Begin?</p>
            <h3 className="text-white leading-tight font-semibold"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(24px, 5vw, 40px)' }}>
              Your Legal Journey Starts <em className="not-italic text-[#C29A3E]">Here</em>
            </h3>
          </div>
          <Link
            href="/contact"
            className="group relative overflow-hidden flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 flex-shrink-0 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase"
            style={{
              background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)',
              color: '#FFFFFF',
              borderRadius: '2px',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 32px rgba(194, 154, 62,0.25)',
            }}
          >
            <span>Schedule Consultation</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="site-container py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4 sm:gap-6 col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center" aria-label="Dobaria Law PC — Home">
              <Image
                src="/images/logo-light.svg"
                alt="Dobaria Law PC"
                width={222}
                height={160}
                className="h-20 sm:h-24 w-auto"
              />
            </Link>

            <p className="text-[rgba(255,255,255,0.5)] text-[11px] sm:text-[13px] leading-[1.75] sm:leading-[1.8]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              Trusted immigration, family, business & real estate counsel serving Lansdale, Montgomery County, and Philadelphia since 1981.
            </p>

            {/* Contact quick */}
            <div className="flex flex-col gap-2 sm:gap-3">
              {[
                { icon: Phone, text: '215-362-2478' },
                { icon: Mail, text: 'info@ibrahimdobarialaw.com' },
                { icon: MapPin, text: '2031 N. Broad Street, Unit 129, Lansdale, PA 19446' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 sm:gap-2.5">
                  <item.icon size={11} className="text-[#C29A3E] flex-shrink-0 sm:hidden" />
                  <item.icon size={12} className="text-[#C29A3E] flex-shrink-0 hidden sm:block" />
                  <span className="text-[rgba(255,255,255,0.5)] text-[10px] sm:text-[12px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2 sm:gap-2.5">
              {socials.map(({ icon: Icon, label }) => (
                <button key={label} aria-label={label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(194, 154, 62,0.2)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(194, 154, 62,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <Icon size={12} className="text-[rgba(255,255,255,0.6)] sm:hidden" />
                  <Icon size={14} className="text-[rgba(255,255,255,0.6)] hidden sm:block" />
                </button>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-5"
              style={{ fontFamily: 'Inter, sans-serif' }}>Practice Areas</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              {practiceLinks.map(link => (
                <Link key={link.label}
                  href={link.href}
                  className="text-[rgba(255,255,255,0.5)] text-[10px] sm:text-[12px] luxury-link hover:text-[#C29A3E] transition-colors duration-300 w-fit"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-5"
              style={{ fontFamily: 'Inter, sans-serif' }}>Quick Links</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              {quickLinks.map(link => (
                <Link key={link.label}
                  href={link.href}
                  className="text-[rgba(255,255,255,0.5)] text-[10px] sm:text-[12px] luxury-link hover:text-[#C29A3E] transition-colors duration-300 w-fit"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-5"
              style={{ fontFamily: 'Inter, sans-serif' }}>Legal Insights</h4>
            <p className="text-[rgba(255,255,255,0.5)] text-[10px] sm:text-[12px] leading-[1.7] sm:leading-[1.75] mb-4 sm:mb-5"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Subscribe for legal updates, firm news, and insights from our attorneys.
            </p>

            {subscribed ? (
              <div className="p-2.5 sm:p-3 rounded-sm text-center"
                style={{ background: 'rgba(194, 154, 62,0.1)', border: '1px solid rgba(194, 154, 62,0.2)' }}>
                <p className="text-[#C29A3E] text-[11px] sm:text-xs font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}>You&apos;re subscribed!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 min-w-0 px-3 py-2 sm:py-2.5 text-[11px] sm:text-xs text-white placeholder-[rgba(255,255,255,0.3)] outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRight: 'none',
                    borderRadius: '2px 0 0 2px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
                <button type="submit"
                  className="px-3 sm:px-4 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)',
                    borderRadius: '0 2px 2px 0',
                  }}>
                  <ArrowRight size={14} className="text-white" />
                </button>
              </form>
            )}

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <p className="text-[rgba(255,255,255,0.3)] text-[9px] sm:text-[10px] leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                Attorney Advertising. Prior results do not guarantee a similar outcome. The information on this website is for general information purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container py-4 sm:py-5">
          <p className="text-[rgba(255,255,255,0.3)] text-[10px] sm:text-[11px] text-center mb-3"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            Attorney Advertising. Prior results do not guarantee a similar outcome. The information on this website is for general information purposes only.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <p className="text-[rgba(255,255,255,0.3)] text-[10px] sm:text-[11px]"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              &copy; {new Date().getFullYear()} Dobaria Law PC. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-5">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map(link => (
                <a key={link.label}
                  href={link.href}
                  className="text-[rgba(255,255,255,0.3)] text-[10px] sm:text-[11px] hover:text-[#C29A3E] transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-[rgba(255,255,255,0.3)] text-[10px] sm:text-[11px]">
              Design and developed by <a href="https://softqubes.com" target="_blank" rel="noopener noreferrer" className="text-[#C29A3E] hover:underline">Softqubes Technologies</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

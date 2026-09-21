'use client';

import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
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
  { label: 'Schedule a Consultation', href: '/schedule-consultation' },
];

/**
 * Brand marks for the social links. Defined inline as filled paths because
 * lucide ships no X logo (only the retired bird) and its outline icons read
 * too thin at this size — this keeps all four visually consistent.
 */
type IconProps = { className?: string };

const LinkedInIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.39C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.39 2.12.66.67 1.33 1.09 2.12 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.39.67-.66 1.09-1.33 1.39-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.39-2.12C21.32 1.35 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z" />
  </svg>
);

// Social profiles. Update each href once the firm's accounts are live;
// entries left blank are dropped instead of rendering as dead links.
const socials = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/ibrahim-dobaria-law-pllc' },
  { icon: InstagramIcon, label: 'Instagram', href: '' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/p/Law-Office-of-Marcia-Binder-Ibrahim-100043954827038/' },
  { icon: XIcon, label: 'X', href: '' },
].filter(social => social.href);

export default function Footer() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4 sm:gap-6 sm:col-span-2 lg:col-span-1">
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

          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-5"
              style={{ fontFamily: 'Inter, sans-serif' }}>Practice Areas</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              {practiceLinks.map(link => (
                <Link key={link.label}
                  href={link.href}
                  className="inline-block text-[rgba(255,255,255,0.5)] text-[11px] sm:text-[12px] luxury-link hover:text-[#C29A3E] transition-colors duration-300 w-fit py-2.5 sm:py-0.5"
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
                  className="inline-block text-[rgba(255,255,255,0.5)] text-[11px] sm:text-[12px] luxury-link hover:text-[#C29A3E] transition-colors duration-300 w-fit py-2.5 sm:py-0.5"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-5"
              style={{ fontFamily: 'Inter, sans-serif' }}>Get In Touch</h4>

            <div className="flex flex-col gap-2 sm:gap-3">
              {[
                { icon: Phone, text: '215-362-2478', href: 'tel:+12153622478' },
                { icon: Mail, text: 'notice@dobarialaw.com', href: 'mailto:notice@dobarialaw.com' },
                { icon: MapPin, text: '2031 N. Broad Street, Unit 129, Lansdale, PA 19446', href: 'https://www.google.com/maps/search/?api=1&query=2031+N.+Broad+Street+Unit+129+Lansdale+PA+19446', external: true },
              ].map(item => (
                <a key={item.text} href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-start gap-2 sm:gap-2.5 group py-2 sm:py-1">
                  <item.icon size={12} className="text-[#C29A3E] flex-shrink-0 mt-[3px]" />
                  <span className="text-[rgba(255,255,255,0.5)] text-[10px] sm:text-[12px] leading-[1.6] group-hover:text-[#C29A3E] transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}>{item.text}</span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2 sm:gap-2.5 mt-5 sm:mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  target="_blank" rel="noopener noreferrer"
                  className="group w-8 h-8 sm:w-9 sm:h-9 rounded-sm flex items-center justify-center transition-all duration-300"
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
                  <Icon className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] text-[rgba(255,255,255,0.6)] group-hover:text-[#C29A3E] transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.06)]">
        <div className="site-container py-4 sm:py-5">
          <p className="text-[rgba(255,255,255,0.3)] text-[10px] sm:text-[11px] text-left sm:text-center mb-3 max-w-3xl sm:mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            Attorney Advertising. Prior results do not guarantee a similar outcome. The information on this website is for general information purposes only.
          </p>
          <div className="footer-legal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
            <p className="text-[rgba(255,255,255,0.3)] text-[10px] sm:text-[11px]"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              &copy; {new Date().getFullYear()} Dobaria Law PC. All rights reserved.
            </p>
            <div className="footer-legal-links flex items-center gap-4 sm:gap-5">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map(link => (
                <a key={link.label}
                  href={link.href}
                  className="inline-block py-2.5 sm:py-1 text-[rgba(255,255,255,0.3)] text-[10px] sm:text-[11px] hover:text-[#C29A3E] transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-[rgba(255,255,255,0.3)] text-[10px] sm:text-[11px]">
              Design and developed by <a href="https://softqubes.com" target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 text-[#C29A3E] hover:underline">Softqubes Technologies</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

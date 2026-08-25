"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Plane,
  IdCard,
  Landmark,
  ShieldAlert,
  Users,
  HeartCrack,
  Briefcase,
  Home as HomeIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Practice Areas", href: "/practice-areas", hasDropdown: true, menu: "practice" as const },
  { label: "Attorneys", href: "/attorneys", hasDropdown: true, menu: "attorneys" as const },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const practiceDropdownData = [
  {
    category: "Immigration",
    items: [
      { label: "Immigration Law", desc: "Petitions, waivers & consular processing", href: "/practice-areas/immigration-law", icon: Plane },
      { label: "Green Cards & Visas", desc: "Family & employment-based status", href: "/practice-areas/green-cards-visas", icon: IdCard },
      { label: "Citizenship & Naturalization", desc: "Become a U.S. citizen", href: "/practice-areas/citizenship-naturalization", icon: Landmark },
      { label: "Deportation Defense", desc: "Removal defense & appeals", href: "/practice-areas/deportation-defense", icon: ShieldAlert },
    ],
  },
  {
    category: "Family",
    items: [
      { label: "Family Law", desc: "Divorce, custody & support", href: "/practice-areas/family-law", icon: Users },
      { label: "International Divorce", desc: "Cross-border family matters", href: "/practice-areas/international-divorce", icon: HeartCrack },
    ],
  },
  {
    category: "Business & Property",
    items: [
      { label: "Business Law", desc: "Formation, contracts & counsel", href: "/practice-areas/business-law", icon: Briefcase },
      { label: "Real Estate Law", desc: "Closings & title, 18 states", href: "/practice-areas/real-estate-law", icon: HomeIcon },
    ],
  },
];

const attorneysDropdownData = [
  { label: "Vishal J. Dobaria, Esq.", role: "Managing Attorney", href: "/attorneys/vishal-j-dobaria", img: "/images/attorneys/vishal.webp" },
  { label: "Marcia Binder Ibrahim, Esq.", role: "Founding Member & Of Counsel", href: "/attorneys/marcia-binder-ibrahim", img: "/images/attorneys/marcia.webp" },
  { label: "Jose M. Lugo, J.D., Ph.D.", role: "Immigration Attorney", href: "/attorneys/jose-m-lugo", img: "/images/attorneys/jose.png" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "practice" | "attorneys">(null);
  const [mobileSection, setMobileSection] = useState<null | "practice" | "attorneys">(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pause Lenis smooth-scroll (and lock the body) while the mobile menu is open,
  // so scrolling happens inside the menu instead of the page behind it.
  useEffect(() => {
    const lenis = (typeof window !== "undefined" ? (window as any).lenis : undefined) as
      | { start: () => void; stop: () => void }
      | undefined;
    if (mobileOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      setMobileSection(null); // reset accordions when the menu closes
    }
    return () => {
      (window as any).lenis?.start();
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-gray-100 ${
          scrolled
            ? "py-3 shadow-[0_4px_32px_rgba(17,24,39,0.06)]"
            : "py-5"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Dobaria Law PC — Home">
            <Image
              src="/images/logo-dark.svg"
              alt="Dobaria Law PC"
              width={222}
              height={160}
              priority
              className={`w-auto transition-all duration-500 ${scrolled ? "h-14" : "h-16"}`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

              if (link.hasDropdown) {
                const isAttorneys = link.menu === "attorneys";
                const dropdownData = isAttorneys ? attorneysDropdownData : practiceDropdownData;
                const isOpen = openMenu === link.menu;

                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => setOpenMenu(link.menu)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link
                      href={link.href}
                      className={`luxury-link font-semibold !flex !flex-row items-center gap-1.5 transition-colors duration-300 ${
                        isActive ? "text-[#C29A3E]" : "text-[#1B1E49] hover:text-[#C29A3E]"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <span className="nav-link-text uppercase font-medium">{link.label}</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#C29A3E]" : "text-[#1B1E49]"
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className={`absolute top-full left-0 pt-4 z-50 ${
                            isAttorneys ? "w-[340px]" : "w-[600px]"
                          }`}
                        >
                          {isAttorneys ? (
                            /* ============ ATTORNEYS MENU ============ */
                            <div className="bg-white rounded-[14px] border border-black/[0.06] shadow-[0_20px_50px_-14px_rgba(27,30,73,0.20)] overflow-hidden">
                              <div className="p-2.5 flex flex-col">
                                {attorneysDropdownData.map((att) => (
                                  <Link
                                    key={att.href}
                                    href={att.href}
                                    onClick={() => setOpenMenu(null)}
                                    className="group flex items-center gap-3.5 px-3 py-2.5 rounded-lg hover:bg-[#F8F6F2] transition-colors duration-200"
                                  >
                                    <span className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-black/[0.06]">
                                      <Image src={att.img} alt={att.label} fill className="object-cover object-top" sizes="40px" />
                                    </span>
                                    <span className="flex flex-col min-w-0">
                                      <span className="text-[#1B1E49] text-[13.5px] font-semibold leading-snug group-hover:text-[#C29A3E] transition-colors truncate">
                                        {att.label}
                                      </span>
                                      <span className="text-[#9A9CAB] text-[11.5px] leading-snug truncate">{att.role}</span>
                                    </span>
                                  </Link>
                                ))}
                              </div>
                              <Link
                                href="/attorneys"
                                onClick={() => setOpenMenu(null)}
                                className="flex items-center justify-between px-5 py-3 border-t border-black/[0.05] text-[#1B1E49] hover:text-[#C29A3E] text-[12px] font-semibold tracking-wide transition-colors"
                              >
                                <span>Meet the full team</span>
                                <ArrowRight size={13} />
                              </Link>
                            </div>
                          ) : (
                            /* ============ PRACTICE AREAS — CLEAN 3-COLUMN ============ */
                            <div className="bg-white rounded-[14px] border border-black/[0.06] shadow-[0_20px_50px_-14px_rgba(27,30,73,0.20)] overflow-hidden">
                              <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 p-3">
                                {practiceDropdownData.flatMap((c) => c.items).map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setOpenMenu(null)}
                                      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F8F6F2] transition-colors duration-200"
                                    >
                                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1B1E49]/[0.05] text-[#1B1E49] group-hover:bg-[#C29A3E] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                                        <Icon size={16} strokeWidth={1.9} />
                                      </span>
                                      <span className="flex flex-col min-w-0">
                                        <span className="text-[#1B1E49] text-[13.5px] font-semibold leading-snug group-hover:text-[#C29A3E] transition-colors">
                                          {item.label}
                                        </span>
                                        <span className="text-[#9A9CAB] text-[11.5px] leading-snug truncate">{item.desc}</span>
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                              <Link
                                href="/practice-areas"
                                onClick={() => setOpenMenu(null)}
                                className="flex items-center justify-between px-5 py-3 border-t border-black/[0.05] text-[#1B1E49] hover:text-[#C29A3E] text-[12px] font-semibold tracking-wide transition-colors"
                              >
                                <span>View all practice areas</span>
                                <ArrowRight size={13} />
                              </Link>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`luxury-link font-semibold transition-colors duration-300 ${
                    isActive ? "text-[#C29A3E]" : "text-[#1B1E49] hover:text-[#C29A3E]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="nav-link-text uppercase font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-8">
            <a
              href="tel:215-362-2478"
              className="flex items-center gap-2 text-sm font-semibold text-[#1B1E49] hover:text-[#C29A3E] transition-colors duration-300"
            >
              <Phone size={16} className="text-[#1B1E49] fill-[#1B1E49] stroke-[2]" />
              <span className="font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>215-362-2478</span>
            </a>

            <Link
              href="/contact"
              className="px-6 py-3 bg-[#1B1E49] hover:bg-[#C29A3E] text-white rounded-[4px] transition-colors duration-300 font-bold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="cta-button-text uppercase font-medium">Schedule Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-[#1B1E49]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 glass flex flex-col"
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-8 border-b border-[rgba(17,24,39,0.08)]">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center" aria-label="Dobaria Law PC — Home">
                <Image
                  src="/images/logo-dark.svg"
                  alt="Dobaria Law PC"
                  width={222}
                  height={160}
                  className="h-14 w-auto"
                />
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={22} className="text-[#1B1E49]" />
              </button>
            </div>
            <div className="flex flex-col px-6 py-8 gap-6 overflow-y-auto overscroll-contain flex-1" data-lenis-prevent>
              {navLinks.map((link, i) => {
                if (link.hasDropdown) {
                  const isAttorneysMenu = link.menu === "attorneys";
                  const isSectionOpen = mobileSection === link.menu;
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileSection((s) => (s === link.menu ? null : link.menu))}
                        aria-expanded={isSectionOpen}
                        className="w-full text-left text-[#1B1E49] text-2xl font-medium tracking-tight border-b border-[rgba(17,24,39,0.06)] pb-4 flex justify-between items-center"
                        style={{ fontFamily: "Bebas Neue, sans-serif" }}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={20}
                          className={`text-[#C29A3E] transition-transform duration-300 ${isSectionOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isSectionOpen && (
                          <motion.div
                            key="section"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            {isAttorneysMenu ? (
                              <div className="pl-4 pt-4 flex flex-col gap-2 border-l border-[#C29A3E]/20">
                                {attorneysDropdownData.map((att) => (
                                  <Link
                                    key={att.href}
                                    href={att.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-1.5"
                                  >
                                    <span className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-black/[0.06]">
                                      <Image src={att.img} alt={att.label} fill className="object-cover object-top" sizes="36px" />
                                    </span>
                                    <span className="flex flex-col">
                                      <span className="text-[#1B1E49] text-sm font-semibold leading-snug">{att.label}</span>
                                      <span className="text-[#8A8D9F] text-[11px] leading-snug">{att.role}</span>
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <div className="pl-4 pt-4 flex flex-col gap-4 border-l border-[#C29A3E]/20">
                                {practiceDropdownData.map((category) => (
                                  <div key={category.category} className="flex flex-col gap-2">
                                    <span className="text-[#C29A3E] text-xs font-bold tracking-wider uppercase">
                                      {category.category}
                                    </span>
                                    <div className="flex flex-col gap-1 pl-1">
                                      {category.items.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                          <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2.5 text-left text-gray-600 text-sm font-medium hover:text-[#1B1E49] py-1.5"
                                          >
                                            <Icon size={15} strokeWidth={1.9} className="text-[#C29A3E] flex-shrink-0" />
                                            <span>{item.label}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-left text-[#1B1E49] text-2xl font-medium tracking-tight border-b border-[rgba(17,24,39,0.06)] pb-4"
                      style={{ fontFamily: "Bebas Neue, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <a
                href="tel:215-362-2478"
                className="flex items-center gap-3 text-lg font-semibold text-[#1B1E49] border-b border-[rgba(17,24,39,0.06)] pb-4 mt-2"
              >
                <Phone size={18} className="text-[#1B1E49] fill-[#1B1E49] stroke-[2]" />
                <span>215-362-2478</span>
              </a>
            </div>
            <div className="px-6 pb-8">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-4 text-sm font-semibold tracking-wider text-[#F8F6F2] bg-[#1B1E49] hover:bg-[#C29A3E] transition-all duration-300 rounded-[6px] text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

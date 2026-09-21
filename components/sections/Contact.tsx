'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { formatUSPhone } from '@/lib/phone';
import {
  EMPTY_ENQUIRY,
  PRACTICE_OPTIONS,
  validateEnquiry,
  toContactPayload,
  focusFirstError,
} from '@/lib/formValidation';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: '2031 N. Broad Street, Unit 129\nLansdale, PA 19446',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '215-362-2478',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'notice@dobarialaw.com',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri: 9:00 AM – 5:30 PM\nSat-Sun: Closed',
  },
];


export default function Contact() {
  const [form, setForm] = useState({
    ...EMPTY_ENQUIRY,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: "" }));
  };

  /** Validate, publish the messages, and hand them back for focus handling. */
  const validateForm = () => {
    const newErrors = validateEnquiry(form);
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const found = validateForm();
    if (Object.keys(found).length > 0) {
      focusFirstError(found, "home-contact");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toContactPayload(form, "Contact section")),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
          focusFirstError(data.errors, "home-contact");
        }
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      setForm({ ...EMPTY_ENQUIRY });
    } catch {
      setSubmitError("We couldn't send your message. Please call the office or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="site-section relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F6F2 0%, #FFFFFF 100%)' }}>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C29A3E 0%, transparent 70%)' }} />
      </div>

      <div className="site-container">

        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}>Get in Touch</span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#C29A3E]" />
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
            Begin Your Legal <em className="not-italic text-[#C29A3E]">Consultation</em> Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B5563] leading-[1.75] sm:leading-[1.8]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 16px)' }}
          >
            Take the first step toward resolution. Our team will review your matter and respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 sm:gap-10 lg:gap-12 lg:gap-16">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5 sm:gap-8"
          >
            {/* Stunning Design: Full-height Image with Floating Glass Card.
                Mobile (<lg): image banner + card stacked so nothing is cropped.
                Desktop (lg+): card floats over a full-cover image (original design). */}
            <div className="relative flex flex-col lg:block lg:h-full lg:min-h-[500px] rounded-sm overflow-hidden border border-[rgba(194, 154, 62,0.15)]">
              {/* Background Image */}
              <div className="relative h-[220px] sm:h-[300px] lg:absolute lg:inset-0 lg:h-full">
                <Image
                  src="/images/philadelphia-skyline.webp"
                  alt="Philadelphia skyline at dusk"
                  width={941}
                  height={1672}
                  priority={false}
                  className="w-full h-full object-cover object-[center_30%]"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/40 to-transparent" />
              </div>

              {/* Glassmorphic Card — stacked below image on mobile, floating on desktop */}
              <div className="relative lg:absolute lg:bottom-6 lg:left-6 lg:right-6 p-5 sm:p-6 backdrop-blur-md bg-[#0B0F17]/75 border-t lg:border border-[rgba(194, 154, 62,0.3)] rounded-none lg:rounded-sm flex flex-col gap-5">
                
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>Contact Information</h3>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#C29A3E] bg-[#C29A3E]/10 rounded-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Lansdale, PA</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90">
                  
                  {/* Address */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[#C29A3E] text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Office Address</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=2031+N.+Broad+Street+Unit+129+Lansdale+PA+19446"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-relaxed hover:text-[#C29A3E] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      2031 N. Broad Street, Unit 129<br />Lansdale, PA 19446
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[#C29A3E] text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Phone</p>
                    <a href="tel:+12153622478" className="text-sm leading-relaxed hover:text-[#C29A3E] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>215-362-2478</a>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[#C29A3E] text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Email</p>
                    <a href="mailto:notice@dobarialaw.com" className="text-sm leading-relaxed break-words hover:text-[#C29A3E] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>notice@dobarialaw.com</a>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[#C29A3E] text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Office Hours</p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Mon–Fri: 9:00 AM – 5:30 PM<br />Sat–Sun: Closed
                    </p>
                  </div>

                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-[11px] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    We ensure a timely response to every inquiry.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center min-h-[300px]">
                <div className="text-center py-10 sm:py-16">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6"
                    style={{ background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)' }}>
                    <CheckCircle size={24} className="text-white sm:hidden" />
                    <CheckCircle size={28} className="text-white hidden sm:block" />
                  </div>
                  <h3 className="text-[#14163A] font-semibold mb-2 sm:mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(24px, 4vw, 28px)' }}>
                    Message Received
                  </h3>
                  <p className="text-[#4B5563] text-[12px] sm:text-sm leading-relaxed max-w-[320px] mx-auto"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    Thank you for reaching out. A member of our team will contact you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-10 lg:p-14"
                style={{ background: '#FFFFFF', border: '1px solid rgba(17,24,39,0.08)', borderRadius: '4px' }}>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label htmlFor="home-contact-firstName" className="text-[9px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#14163A]"
                      style={{ fontFamily: 'Inter, sans-serif' }}>First Name *</label>
                    <input
                      id="home-contact-firstName"
                      name="firstName"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "home-contact-firstName-error" : undefined}
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className={`premium-input ${errors.firstName ? "border-red-500" : ""}`}
                      style={{ padding: '10px 14px' }}
                    />
                    {errors.firstName && <p id="home-contact-firstName-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label htmlFor="home-contact-lastName" className="text-[9px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#14163A]"
                      style={{ fontFamily: 'Inter, sans-serif' }}>Last Name *</label>
                    <input
                      id="home-contact-lastName"
                      name="lastName"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "home-contact-lastName-error" : undefined}
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className={`premium-input ${errors.lastName ? "border-red-500" : ""}`}
                      style={{ padding: '10px 14px' }}
                    />
                    {errors.lastName && <p id="home-contact-lastName-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label htmlFor="home-contact-email" className="text-[9px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#14163A]"
                      style={{ fontFamily: 'Inter, sans-serif' }}>Email Address *</label>
                    <input
                      id="home-contact-email"
                      name="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "home-contact-email-error" : undefined}
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`premium-input ${errors.email ? "border-red-500" : ""}`}
                      style={{ padding: '10px 14px' }}
                    />
                    {errors.email && <p id="home-contact-email-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label htmlFor="home-contact-phone" className="text-[9px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#14163A]"
                      style={{ fontFamily: 'Inter, sans-serif' }}>Phone Number</label>
                    <input
                      id="home-contact-phone"
                      name="phone"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "home-contact-phone-error" : undefined}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm(f => ({ ...f, phone: formatUSPhone(e.target.value) }));
                        if (errors.phone) setErrors(er => ({ ...er, phone: "" }));
                      }}
                      placeholder="(555) 123-4567"
                      maxLength={14}
                      className={`premium-input ${errors.phone ? "border-red-500" : ""}`}
                      style={{ padding: '10px 14px' }}
                    />
                    {errors.phone && <p id="home-contact-phone-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label htmlFor="home-contact-practice" className="text-[9px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#14163A]"
                    style={{ fontFamily: 'Inter, sans-serif' }}>Practice Area *</label>
                  <select
                    id="home-contact-practice"
                    name="practice"
                    aria-invalid={!!errors.practice}
                    aria-describedby={errors.practice ? "home-contact-practice-error" : undefined}
                    value={form.practice}
                    onChange={handleChange}
                    className={`premium-input ${errors.practice ? "border-red-500" : ""}`}
                    style={{ padding: '10px 14px 10px 14px', paddingRight: '40px', appearance: 'none', cursor: 'pointer', backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%234B5563" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '20px' }}
                  >
                    <option value="">Select a practice area</option>
                    {PRACTICE_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.practice && <p id="home-contact-practice-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.practice}</p>}
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label htmlFor="home-contact-message" className="text-[9px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#14163A]"
                    style={{ fontFamily: 'Inter, sans-serif' }}>Brief Description *</label>
                  <textarea
                    id="home-contact-message"
                    name="message"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "home-contact-message-error" : undefined}
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Please briefly describe your legal matter..."
                    className={`premium-input resize-none ${errors.message ? "border-red-500" : ""}`}
                    style={{ padding: '10px 14px' }}
                  />
                  {errors.message && <p id="home-contact-message-error" role="alert" className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                </div>

                {/* Honeypot — hidden from people, filled in by bots. */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <p className="text-[#4B5563] text-[10px] sm:text-[11px] leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  All communications are protected by attorney-client privilege and kept strictly confidential.
                </p>

                {submitError && (
                  <p role="alert" className="text-red-600 text-[12px] sm:text-[13px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 text-[10px] sm:text-[12px] font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all duration-400 mt-1 sm:mt-2"
                  style={{
                    background: loading ? '#9C7A26' : 'linear-gradient(135deg, #1B1E49 0%, #2A2F63 100%)',
                    color: '#F8F6F2',
                    borderRadius: '2px',
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 8px 32px rgba(17,24,39,0.15)',
                  }}
                >
                  <span className="relative z-10">
                    {loading ? 'Submitting...' : 'Submit Consultation Request'}
                  </span>
                  {!loading && <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />}
                  {!loading && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: 'linear-gradient(135deg, #C29A3E 0%, #9C7A26 100%)' }} />
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

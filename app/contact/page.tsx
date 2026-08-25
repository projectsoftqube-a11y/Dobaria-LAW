"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Globe, ArrowRight, CheckCircle, Mail as MailIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LenisProvider from "@/components/LenisProvider";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { legalServiceSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { formatUSPhone } from "@/lib/phone";

const contactFaqs = [
  { q: "What does the initial consultation cost?", a: "The initial consultation is free. It is a confidential conversation where we learn about your matter and give you an honest assessment of your options before any financial commitment." },
  { q: "What should I bring to my first consultation?", a: "Bring any documents relevant to your matter — identification, immigration paperwork, contracts, correspondence, legal notices, court filings, or financial records. If you are not sure what is relevant, bring what you have and we will sort through it together." },
  { q: "How quickly will you respond?", a: "We respond to every inquiry within one business day. If your matter is urgent, call our office directly at 215-362-2478." },
  { q: "Do you take clients outside Pennsylvania?", a: "Yes. We represent immigration clients nationwide, and we are licensed in Pennsylvania and New Jersey for other matters. Consultations can be held by phone or video." },
];

const practiceOptions = [
  "Immigration Law",
  "Green Cards & Visas",
  "Citizenship & Naturalization",
  "Deportation Defense",
  "Family Law",
  "International Divorce",
  "Business Law",
  "Real Estate Law",
  "Other"
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    matter: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: "" }));
  };


  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Please enter a valid email";
    if (!form.matter.trim()) newErrors.matter = "Please select a matter type";
    if (!form.message.trim()) newErrors.message = "Please describe your matter";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          practice: form.matter,
          message: form.message,
          source: "Contact page",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors({ ...data.errors, matter: data.errors.matter });
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("We couldn't send your message. Please call the office or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LenisProvider>
      <main className="min-h-screen bg-[#F8F6F2]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(contactFaqs)) }} />
        <Navbar />

      {/* Hero Section - Premium Dark */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0B0F17] to-[#1A2435]">
        {/* Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Gold Radial Glow */}
        <div 
          className="absolute -top-32 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #C29A3E 0%, transparent 65%)",
            opacity: 0.1,
          }}
        ></div>

        {/* Watermark Icon */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.025] pointer-events-none hidden xl:block">
          <MailIcon size={500} strokeWidth={0.5} />
        </div>

        <div className="site-container relative z-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-3xl"
          >
            {/* Eyebrow with inline gold line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] uppercase tracking-widest text-[11px] font-semibold">
                Get in Touch
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Bebas_Neue',sans-serif] text-white mb-6 leading-[1.1]"
              style={{ fontSize: "clamp(42px, 7vw, 84px)" }}
            >
              Contact Our Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-[16px] leading-relaxed mb-10 max-w-xl"
            >
              Initial consultations are free and confidential. We respond to every inquiry within 24 business hours.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#form"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 transition-colors text-base rounded-sm"
              >
                Send Message
              </a>
              <a
                href="tel:+12153622478"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-base rounded-sm"
              >
                <Phone className="w-5 h-5" />
                Call 215-362-2478
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-[1px] bg-[#C29A3E]" />
                  <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">
                    Contact Info
                  </span>
                </div>
                <h2 
                  className="text-[#14163A] leading-snug mb-4"
                  style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.01em" }}
                >
                  Lansdale Office
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#C29A3E] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <span className="text-[#6B7280] text-[11px] font-semibold tracking-wider uppercase mb-2">Address</span>
                    <p className="text-[#14163A] text-[16px] leading-relaxed">
                      2031 N. Broad Street, Unit 129<br />Lansdale, PA 19446
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-[#C29A3E] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <span className="text-[#6B7280] text-[11px] font-semibold tracking-wider uppercase mb-2">Phone</span>
                    <a href="tel:215-362-2478" className="text-[#14163A] text-[16px] font-semibold hover:text-[#C29A3E] transition-colors">
                      215-362-2478
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MailIcon size={20} className="text-[#C29A3E] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <span className="text-[#6B7280] text-[11px] font-semibold tracking-wider uppercase mb-2">Email</span>
                    <a href="mailto:info@ibrahimdobarialaw.com" className="text-[#14163A] text-[16px] font-semibold hover:text-[#C29A3E] transition-colors">
                      info@ibrahimdobarialaw.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-[#C29A3E] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <span className="text-[#6B7280] text-[11px] font-semibold tracking-wider uppercase mb-2">Office Hours</span>
                    <p className="text-[#14163A] text-[16px] leading-relaxed">
                      Mon–Fri: 9:00 AM – 5:30 PM<br />
                      <span className="text-gray-500">Closed Saturday & Sunday</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe size={20} className="text-[#C29A3E] flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <span className="text-[#6B7280] text-[11px] font-semibold tracking-wider uppercase mb-2">Languages</span>
                    <p className="text-[#14163A] text-[16px]">English · Spanish · German · Arabic · French · Korean</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id="form"
            >
              <div className="bg-gradient-to-br from-white to-[#F8F6F2] border border-gray-100 rounded-lg p-8 sm:p-10 shadow-lg">
                {submitted ? (
                  <div className="text-center py-12 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C29A3E] to-[#9C7A26] flex items-center justify-center">
                      <CheckCircle size={28} className="text-white" />
                    </div>
                    <h3 className="text-[#1B1E49] text-2xl font-semibold" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                      Thank You!
                    </h3>
                    <p className="text-gray-600 text-[16px] leading-relaxed max-w-sm">
                      We've received your message and will contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-[#1B1E49] text-xl font-semibold mb-2">Send us a Message</h2>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-semibold uppercase tracking-wider text-[#14163A]">
                          First Name *
                        </label>
                        <input
                          name="firstName"
                          type="text"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Jane"
                          className={`w-full px-4 py-3 text-sm rounded-sm font-sans transition-all border ${
                            errors.firstName ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-200 bg-white focus:border-[#C29A3E] focus:ring-1 focus:ring-[#C29A3E]"
                          } focus:outline-none`}
                        />
                        {errors.firstName && <p className="text-red-500 text-[12px]">{errors.firstName}</p>}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-semibold uppercase tracking-wider text-[#14163A]">
                          Last Name *
                        </label>
                        <input
                          name="lastName"
                          type="text"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className={`w-full px-4 py-3 text-sm rounded-sm font-sans transition-all border ${
                            errors.lastName ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-200 bg-white focus:border-[#C29A3E] focus:ring-1 focus:ring-[#C29A3E]"
                          } focus:outline-none`}
                        />
                        {errors.lastName && <p className="text-red-500 text-[12px]">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold uppercase tracking-wider text-[#14163A]">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 text-sm rounded-sm font-sans transition-all border ${
                          errors.email ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-200 bg-white focus:border-[#C29A3E] focus:ring-1 focus:ring-[#C29A3E]"
                        } focus:outline-none`}
                      />
                      {errors.email && <p className="text-red-500 text-[12px]">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold uppercase tracking-wider text-[#14163A]">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: formatUSPhone(e.target.value) }))}
                        placeholder="(555) 123-4567"
                        maxLength={14}
                        className="w-full px-4 py-3 text-sm rounded-sm font-sans transition-all border border-gray-200 bg-white focus:border-[#C29A3E] focus:ring-1 focus:ring-[#C29A3E] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold uppercase tracking-wider text-[#14163A]">
                        Matter Type *
                      </label>
                      <select
                        name="matter"
                        value={form.matter}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 pr-10 text-sm rounded-sm font-sans transition-all border cursor-pointer appearance-none bg-no-repeat ${
                          errors.matter ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-200 bg-white focus:border-[#C29A3E] focus:ring-1 focus:ring-[#C29A3E]"
                        } focus:outline-none`}
                        style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23111827" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`, backgroundPosition: 'right 8px center', backgroundSize: '20px' }}
                      >
                        <option value="">Choose a practice area</option>
                        {practiceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.matter && <p className="text-red-500 text-[12px]">{errors.matter}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold uppercase tracking-wider text-[#14163A]">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Briefly describe your legal matter..."
                        className={`w-full px-4 py-3 text-sm rounded-sm font-sans transition-all border resize-none ${
                          errors.message ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-200 bg-white focus:border-[#C29A3E] focus:ring-1 focus:ring-[#C29A3E]"
                        } focus:outline-none`}
                      />
                      {errors.message && <p className="text-red-500 text-[12px]">{errors.message}</p>}
                    </div>

                    {submitError && (
                      <p className="text-red-600 text-[13px]">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 disabled:opacity-50 transition-colors text-base rounded-sm mt-2"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-gray-500 text-[12px] text-center">
                      We never share your information. Submitting does not create an attorney-client relationship.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section - Common Questions */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F6F2]">
        <div className="site-container">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">

            {/* Left Sticky Column */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-[#C29A3E]" />
                <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">FAQ</span>
              </div>
              <h2
                className="text-[#14163A] leading-snug mb-4"
                style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.01em" }}
              >
                Before You Reach Out
              </h2>
              <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6">
                Answers to questions clients ask us most about our consultation process.
              </p>
              <a
                href="#form"
                className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                Send a Message <ArrowRight size={14} />
              </a>
            </div>

            {/* Right Accordion */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-10">
              <Accordion type="single" collapsible className="w-full">
                {contactFaqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <AccordionTrigger className="text-left text-[16px] font-serif font-semibold text-[#1B1E49] py-5 hover:text-[#C29A3E] hover:no-underline transition-colors [&[data-state=open]]:text-[#C29A3E]">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4B5563] text-[16px] leading-[1.75] pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
    </LenisProvider>
  );
}

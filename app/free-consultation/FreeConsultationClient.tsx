"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Shield, Globe, Users, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { freeConsultationContent as content } from "@/content/pages/free-consultation";
import { JsonLd, getLegalServiceSchema, getBreadcrumbSchema } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { formatUSPhone } from "@/lib/phone";

export default function FreeConsultationClient() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

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
        body: JSON.stringify({ ...formData, source: "Free Consultation" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitError("We couldn't send your message. Please call the office or try again.");
    } finally {
      setLoading(false);
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Free Consultation", href: "/free-consultation" },
  ]);

  return (
    <>
      <JsonLd data={[getLegalServiceSchema(), breadcrumbSchema]} />
      <Navbar />

      {/* Hero Section */}
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
          <Globe size={500} strokeWidth={0.5} />
        </div>

        <div className="site-container relative z-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Free Consultation", href: "/free-consultation" },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start mt-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                  {content.hero.eyebrow}
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-['Bebas_Neue',sans-serif] text-white mb-6 leading-[1.1]"
                style={{ fontSize: "clamp(42px, 7vw, 84px)" }}
              >
                {content.hero.h1}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-400 text-[16px] leading-relaxed mb-8"
              >
                {content.hero.subhead}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                {content.hero.trustBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-gray-300 text-[16px]">
                    <CheckCircle className="w-5 h-5 text-[#C29A3E] mt-1 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                href="#form"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 transition-colors text-base rounded-sm"
              >
                Start Your Consultation <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            {/* Right Form - Max 700px */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[700px]"
            >
              <div className="bg-white/[0.08] border border-white/10 backdrop-blur-sm rounded-lg p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-[#C29A3E] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
                    <p className="text-gray-400 text-[16px]">
                      We&apos;ll be in touch within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form
                    id="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-semibold text-white mb-6">Get Your Free Consultation</h2>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold uppercase tracking-wider text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => {
                            setFormData({ ...formData, firstName: e.target.value });
                            if (errors.firstName) setErrors({ ...errors, firstName: "" });
                          }}
                          className={`w-full px-4 py-3 bg-white/[0.05] border rounded-sm text-white text-[16px] placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.firstName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-[#C29A3E] focus:ring-[#C29A3E]"
                          }`}
                          placeholder="John"
                        />
                        {errors.firstName && <p className="text-red-500 text-[13px] mt-1.5">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold uppercase tracking-wider text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => {
                            setFormData({ ...formData, lastName: e.target.value });
                            if (errors.lastName) setErrors({ ...errors, lastName: "" });
                          }}
                          className={`w-full px-4 py-3 bg-white/[0.05] border rounded-sm text-white text-[16px] placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.lastName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-[#C29A3E] focus:ring-[#C29A3E]"
                          }`}
                          placeholder="Doe"
                        />
                        {errors.lastName && <p className="text-red-500 text-[13px] mt-1.5">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full px-4 py-3 bg-white/[0.05] border rounded-sm text-white text-[16px] placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-[#C29A3E] focus:ring-[#C29A3E]"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-[13px] mt-1.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData((f) => ({ ...f, phone: formatUSPhone(e.target.value) }));
                          if (errors.phone) setErrors((er) => ({ ...er, phone: "" }));
                        }}
                        maxLength={14}
                        className={`w-full px-4 py-3 bg-white/[0.05] border rounded-sm text-white text-[16px] placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-[#C29A3E] focus:ring-[#C29A3E]"
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-500 text-[13px] mt-1.5">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        How can we help? *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        rows={4}
                        className={`w-full px-4 py-3 bg-white/[0.05] border rounded-sm text-white text-[16px] placeholder-gray-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                          errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-white/10 focus:border-[#C29A3E] focus:ring-[#C29A3E]"
                        }`}
                        placeholder="Describe your legal matter..."
                      />
                      {errors.message && <p className="text-red-500 text-[13px] mt-1.5">{errors.message}</p>}
                    </div>

                    {submitError && (
                      <p className="text-red-500 text-[13px] text-center">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 disabled:opacity-50 transition-colors text-base rounded-sm"
                    >
                      {loading ? "Sending..." : content.form.submitLabel}
                    </button>

                    <p className="text-[13px] text-gray-500 text-center">
                      {content.form.microcopy}
                    </p>
                    <p className="text-[16px] text-gray-400 text-center">
                      {content.form.callAlternative}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-[#F8F6F2]">
        <div className="site-container">
          <div className="flex flex-wrap justify-center gap-8 text-[#1B1E49] text-[16px] font-semibold">
            <span>45+ Years</span>
            <span className="text-gray-400">·</span>
            <span>AILA Members</span>
            <span className="text-gray-400">·</span>
            <span>U.S. Supreme Court</span>
            <span className="text-gray-400">·</span>
            <span>50+ Countries</span>
            <span className="text-gray-400">·</span>
            <span>Se habla español</span>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-12 bg-[#C29A3E] flex-shrink-0 mt-1"></div>
              <div>
                <h2 
                  className="font-['Bebas_Neue',sans-serif] text-[#1B1E49] mb-2"
                  style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
                >
                  Why Choose Us
                </h2>
                <p className="text-gray-600 text-[16px] max-w-2xl">
                  Experienced counsel you can trust with the matters that matter most.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whyUs.items.map((item, i) => {
              const icons = [Shield, Clock, Globe, Users];
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-6 bg-white border border-gray-100 rounded-lg hover:border-[#C29A3E]/30 hover:shadow-md transition-all"
                >
                  {/* Numbered Watermark */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <p className="font-['Bebas_Neue',sans-serif] text-5xl text-[#C29A3E]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="w-12 h-12 bg-[#C29A3E]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C29A3E]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#C29A3E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B1E49] mb-2 group-hover:text-[#C29A3E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#F8F6F2] to-[#EFE7DA]">
        <div className="site-container">
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-12 bg-[#C29A3E] flex-shrink-0 mt-1"></div>
              <div>
                <h2 
                  className="font-['Bebas_Neue',sans-serif] text-[#1B1E49] mb-2"
                  style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
                >
                  {content.howItWorks.h2}
                </h2>
                <p className="text-gray-600 text-[16px] max-w-2xl">
                  A streamlined process designed for your convenience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.howItWorks.steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="w-14 h-14 bg-[#C29A3E] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold font-['Bebas_Neue',sans-serif]">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-[#1B1E49] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed">
                  {step.body}
                </p>

                {/* Connecting Line */}
                {i < content.howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-7 w-8 h-1 bg-gradient-to-r from-[#C29A3E] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Common Questions
              </h2>
              <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6">
                Answers to questions clients ask us most about scheduling a free consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#C29A3E] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                Ask a Question <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right Accordion */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-10">
              <Accordion type="single" collapsible className="w-full">
                {content.faq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <AccordionTrigger className="text-left text-[16px] font-serif font-semibold text-[#1B1E49] py-5 hover:text-[#C29A3E] hover:no-underline transition-colors [&[data-state=open]]:text-[#C29A3E]">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4B5563] text-[16px] leading-[1.75] pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#0B0F17] to-[#1A2435]">
        {/* Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="site-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 
              className="font-['Bebas_Neue',sans-serif] text-white mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 text-[16px] max-w-2xl mx-auto mb-10">
              Schedule your free consultation today. There&apos;s no obligation, and we&apos;ll provide honest, straightforward advice about your legal matter.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#form"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#C29A3E] text-white font-semibold hover:bg-[#C29A3E]/90 transition-colors text-base rounded-sm"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+12153622478"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-base rounded-sm"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}


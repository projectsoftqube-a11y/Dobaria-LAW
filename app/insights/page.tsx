"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { insightsContent as content } from "@/content/pages/insights";
import { blogPosts } from "@/content/insights";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);




  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://dobarialaw.com/insights#blog",
    name: "Legal Insights — Dobaria Law PC",
    url: "https://dobarialaw.com/insights",
    publisher: { "@id": "https://dobarialaw.com/#organization" },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://dobarialaw.com/insights/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
        url: `https://dobarialaw.com/attorneys/${post.authorSlug}`,
      },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://dobarialaw.com/insights/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, blogSchema, itemListSchema]} />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#0B0F17] to-[#1A2435]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gold radial glow */}
        <div
          className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full opacity-[0.12] pointer-events-none"
          style={{ background: "radial-gradient(circle,#C29A3E 0%,transparent 65%)" }}
        />
        <div
          className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: "radial-gradient(circle,#C29A3E 0%,transparent 65%)" }}
        />

        {/* Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.03] pointer-events-none hidden xl:block">
          <BookOpen size={480} strokeWidth={0.6} />
        </div>

        <div className="relative z-10 site-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Insights", href: "/insights" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mt-10 max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#C29A3E]" />
              <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">
                {content.hero.eyebrow}
              </span>
            </div>

            <h1
              className="text-white leading-[1.04] mb-7"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(46px,9vw,96px)",
                letterSpacing: "-0.01em",
              }}
            >
              {content.hero.h1}
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl">
              {content.hero.subhead}
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── Sticky Category Filter ── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-[0_1px_12px_rgba(0,0,0,0.04)]">
        <div className="site-container">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {allCategories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2 text-[14px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 rounded-full border ${
                    active
                      ? "bg-[#1B1E49] text-white border-[#1B1E49] shadow-sm"
                      : "bg-transparent text-[#6B7280] border-gray-200 hover:border-[#C29A3E] hover:text-[#C29A3E]"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className={`ml-1.5 text-[10px] ${active ? "text-white/60" : "text-gray-400"}`}>
                      ({blogPosts.filter((p) => p.category === cat).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Articles ── */}
      <section className="site-section bg-[#F8F6F2]">
        <div className="site-container">
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-400 py-20 text-lg"
              >
                No articles in this category yet.
              </motion.p>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredPosts.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="group"
                  >
                    <Link
                      href={`/insights/${post.slug}`}
                      className="flex flex-col h-full bg-white rounded-xl border border-gray-100 overflow-hidden shadow-[0_2px_20px_-8px_rgba(17,24,39,0.08)] hover:shadow-[0_16px_48px_-12px_rgba(17,24,39,0.13)] hover:-translate-y-0.5 transition-all duration-500"
                    >
                      {/* Top accent bar */}
                      <div className="h-[3px] bg-gradient-to-r from-[#C29A3E] to-[#9C7A26] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                      <div className="flex flex-col flex-grow p-7">
                        {/* Meta */}
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-[9px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border border-[#C29A3E]/30 bg-[#C29A3E]/[0.06] text-[#C29A3E]">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-[11px] flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title & excerpt */}
                        <div className="flex-grow">
                          <h2 className="text-[28px] font-serif font-semibold text-[#14163A] mb-3 leading-snug group-hover:text-[#C29A3E] transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                          <p className="text-gray-400 text-[11px]">
                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </p>
                          <span className="flex items-center gap-1.5 text-[#C29A3E] text-[11px] font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300">
                            Read <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="site-section bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none"
          style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 300, color: "#C29A3E", lineHeight: 1 }}
          aria-hidden
        >
          LAW
        </div>
        <div className="relative z-10 site-container text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Schedule a Consultation</span>
            <span className="w-8 h-[1px] bg-[#C29A3E]" />
          </div>
          <h2
            className="text-white mb-8"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(34px,6vw,68px)", letterSpacing: "-0.01em" }}
          >
            {content.cta.h2}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={content.cta.primaryCta.href}
              className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              {content.cta.primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Explore Practice Areas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

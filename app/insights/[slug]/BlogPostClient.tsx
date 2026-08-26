"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, type BlogPost } from "@/content/insights";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { JsonLd, getBlogPostSchema, getBreadcrumbSchema, getFaqSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  post: BlogPost;
}

const AUTHOR_META: Record<string, { image: string; jobTitle: string; blurb: string }> = {
  "marcia-binder-ibrahim": {
    image: "/images/attorneys/marcia.webp",
    jobTitle: "Founding Partner",
    blurb:
      "Marcia Binder Ibrahim founded the firm in 1981 and has spent more than four decades in immigration and nationality law. She is admitted to the U.S. Supreme Court and has been an AILA member for 28+ years.",
  },
  "vishal-j-dobaria": {
    image: "/images/attorneys/vishal.webp",
    jobTitle: "Managing Partner",
    blurb:
      "Vishal J. Dobaria leads the firm's day-to-day practice across immigration, real estate, business, and family law, with real estate title experience spanning 18 states.",
  },
};

/** Turn "## Heading" text into a stable anchor id for deep links. */
const slugifyHeading = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

/** Inline markdown: bold, then italic. */
const inline = (s: string) =>
  s
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#14163A]">$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');

export default function BlogPostClient({ post }: Props) {
  const authorMeta = AUTHOR_META[post.authorSlug];
  const authorImage = post.authorImage || authorMeta?.image;

  const blogSchema = getBlogPostSchema({
    title: post.title,
    description: post.excerpt,
    url: `/insights/${post.slug}`,
    datePublished: post.date,
    dateModified: post.dateModified,
    author: post.author,
    authorUrl: `/attorneys/${post.authorSlug}`,
    image: post.heroImage,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
    { name: post.title, href: `/insights/${post.slug}` },
  ]);

  const schemas: Record<string, unknown>[] = [blogSchema, breadcrumbSchema];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push(getFaqSchema(post.faqs));
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const blocks = post.content.split("\n\n");

  const recentPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  // Thin reading-progress bar under the navbar.
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <JsonLd data={schemas} />
      <Navbar />

      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#C29A3E] to-[#9C7A26] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 bg-gradient-to-b from-[#0B0F17] to-[#1B1E49] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="site-container relative z-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Insights", href: "/insights" },
              { name: post.title, href: `/insights/${post.slug}` },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[900px] mt-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-[#C29A3E]/30 bg-[#C29A3E]/[0.1] text-[#C29A3E]">
                {post.category}
              </span>
            </div>

            <h1
              className="text-white leading-[1.12] mb-5"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(34px,5.2vw,60px)",
                letterSpacing: "-0.005em",
              }}
            >
              {post.title}
            </h1>

            <p className="text-gray-300 text-[16px] sm:text-[17px] leading-[1.7] mb-7">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-gray-400 text-[13px]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <article className="bg-[#F8F6F2] pt-12 sm:pt-14 pb-20 sm:pb-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10 xl:gap-16">
            <div className="min-w-0">
              {/* Hero image — sits at the top of the article rather than
                  pushing the headline off the screen. */}
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="relative mb-12 rounded-xl overflow-hidden shadow-[0_16px_40px_-20px_rgba(17,24,39,0.3)]"
              >
                <div className="relative w-full aspect-[21/9] bg-[#1B1E49]">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-cover"
                  />
                </div>
              </motion.figure>

              {/* Prose */}
              <div>
                {blocks.map((block, i) => {
                  if (block.startsWith("## ")) {
                    const text = block.replace("## ", "").trim();
                    return (
                      <h2
                        key={i}
                        id={slugifyHeading(text)}
                        className="scroll-mt-28 text-[#14163A] font-serif font-semibold text-[26px] sm:text-[30px] leading-snug mt-12 mb-4 first:mt-0"
                      >
                        {text}
                      </h2>
                    );
                  }

                  if (block.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="text-[#1B1E49] font-serif font-semibold text-[20px] sm:text-[22px] leading-snug mt-9 mb-3"
                      >
                        {block.replace("### ", "")}
                      </h3>
                    );
                  }

                  if (block.match(/^[-*] /m)) {
                    const items = block.split("\n").filter(Boolean);
                    return (
                      <ul key={i} className="my-6 space-y-3">
                        {items.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3.5 text-[#374151] text-[17px] leading-[1.8]"
                          >
                            <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-[#C29A3E] flex-shrink-0" />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: inline(item.replace(/^[-*] /, "")),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.match(/^\d+\. /m)) {
                    const items = block.split("\n").filter(Boolean);
                    return (
                      <ol key={i} className="my-6 space-y-3">
                        {items.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3.5 text-[#374151] text-[17px] leading-[1.8]"
                          >
                            <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#C29A3E]/12 text-[#9C7A26] text-[12px] font-bold flex items-center justify-center">
                              {j + 1}
                            </span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: inline(item.replace(/^\d+\. /, "")),
                              }}
                            />
                          </li>
                        ))}
                      </ol>
                    );
                  }

                  if (block.startsWith("> ")) {
                    return (
                      <blockquote
                        key={i}
                        className="my-9 border-l-[3px] border-[#C29A3E] pl-6 py-2 text-[#1B1E49] text-[19px] leading-[1.65] font-serif italic"
                      >
                        {block.replace(/^> /gm, "")}
                      </blockquote>
                    );
                  }

                  return (
                    <p
                      key={i}
                      className="text-[#374151] text-[17px] leading-[1.85] mb-6"
                      dangerouslySetInnerHTML={{ __html: inline(block) }}
                    />
                  );
                })}
              </div>

              {/* FAQ */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-14 bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-12px_rgba(17,24,39,0.1)] p-7 sm:p-9">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-[1px] bg-[#C29A3E]" />
                    <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.2em] uppercase">
                      FAQ
                    </span>
                  </div>
                  <h2 className="text-[#14163A] font-serif font-semibold text-[24px] sm:text-[28px] mb-6 leading-snug">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {post.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <AccordionTrigger
                          variant="boxed"
                          className="text-[17px] font-semibold text-[#14163A] hover:text-[#C29A3E] hover:no-underline [&[data-state=open]]:text-[#14163A]"
                        >
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 pt-1">
                          <p className="border-l-2 border-[#C29A3E] pl-5 text-[#4B5563] text-[16px] leading-[1.8]">
                            {faq.a}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Author card — only when the byline maps to an attorney */}
              {authorMeta && (
                <div className="mt-8 bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-12px_rgba(17,24,39,0.1)] p-7 sm:p-9 flex flex-col sm:flex-row gap-6">
                  <Link href={`/attorneys/${post.authorSlug}`} className="shrink-0">
                    <img
                      src={authorImage}
                      alt={post.author}
                      className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#C29A3E]/30"
                    />
                  </Link>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C29A3E] font-semibold mb-1.5">
                      Written by
                    </p>
                    <Link
                      href={`/attorneys/${post.authorSlug}`}
                      className="text-xl font-serif font-semibold text-[#14163A] hover:text-[#C29A3E] transition-colors"
                    >
                      {post.author}
                    </Link>
                    <p className="text-[15px] text-gray-400 mb-3">
                      {authorMeta.jobTitle}, Dobaria Law PC
                    </p>
                    <p className="text-[#4B5563] leading-relaxed text-[16px]">{authorMeta.blurb}</p>
                  </div>
                </div>
              )}

              {/* Related practice areas */}
              {post.relatedLinks && post.relatedLinks.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#1B1E49]/10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C29A3E] mb-4">
                    Related practice areas
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {post.relatedLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#1B1E49]/15 bg-white text-[13px] font-medium text-[#1B1E49] hover:border-[#C29A3E] hover:text-[#C29A3E] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom nav */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 py-2 text-[#1B1E49] hover:text-[#C29A3E] text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Insights
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1B1E49] hover:bg-[#C29A3E] text-white px-6 py-3 rounded-sm text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* ── Sidebar ─────────────────────────────────────────────────── */}
            <aside className="lg:pt-4">
              <div className="lg:sticky lg:top-28 flex flex-col gap-6">
                {/* Consultation prompt */}
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] p-7 text-white">
                  <h3 className="text-white text-[21px] font-serif font-semibold leading-snug mb-3">
                    Have a question about your own matter?
                  </h3>
                  <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
                    Every case turns on its own facts. Speak with an attorney about yours.
                  </p>
                  <Link
                    href="/contact"
                    className="group flex items-center justify-center gap-2 w-full bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-5 py-3.5 rounded-lg text-[13px] font-semibold tracking-[0.04em] transition-colors"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Recent articles */}
                {recentPosts.length > 0 && (
                  <div className="rounded-xl border border-gray-100 bg-white shadow-[0_4px_30px_-14px_rgba(17,24,39,0.12)] overflow-hidden">
                    <div className="h-[3px] bg-gradient-to-r from-[#C29A3E] to-[#9C7A26]" />
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="text-[#14163A] text-[18px] font-serif font-semibold">
                          Recent Articles
                        </h3>
                        <span className="text-[9px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-[#C29A3E]/10 text-[#9C7A26]">
                          Latest
                        </span>
                      </div>

                      <div className="flex flex-col divide-y divide-gray-100">
                        {recentPosts.map((p) => (
                          <Link key={p.slug} href={`/insights/${p.slug}`} className="group py-4 first:pt-0 last:pb-0">
                            <div className="flex items-center gap-2.5 mb-2">
                              <span className="text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-1 rounded bg-[#EFE7DA] text-[#9C7A26]">
                                {p.category}
                              </span>
                              <span className="text-gray-400 text-[11px]">{p.readTime}</span>
                            </div>
                            <p className="text-[#14163A] text-[15px] font-semibold leading-snug group-hover:text-[#C29A3E] transition-colors">
                              {p.title}
                            </p>
                            <p className="text-gray-400 text-[12px] mt-1.5">
                              {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                            </p>
                          </Link>
                        ))}
                      </div>

                      <Link
                        href="/insights"
                        className="group inline-flex items-center gap-1.5 mt-5 pt-5 border-t border-gray-100 w-full text-[12px] font-semibold uppercase tracking-[0.08em] text-[#C29A3E]"
                      >
                        View all insights
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}

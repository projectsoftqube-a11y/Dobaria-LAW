"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/content/insights";
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
    image: authorImage,
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

  return (
    <>
      <JsonLd data={schemas} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0B0F17] to-[#1B1E49]">
        <div className="site-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Insights", href: "/insights" },
              { name: post.title, href: `/insights/${post.slug}` },
            ]}
          />
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C29A3E] transition-colors mb-6 mt-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-[#C29A3E]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-[#C29A3E]/30 bg-[#C29A3E]/[0.08] text-[#C29A3E]">
                {post.category}
              </span>
            </div>
            <h1
              className="text-[#C29A3E] mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px,6vw,72px)", letterSpacing: "-0.01em" }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-[16px]">
              <Link
                href={`/attorneys/${post.authorSlug}`}
                className="flex items-center gap-2.5 group/author"
              >
                {authorImage ? (
                  <img
                    src={authorImage}
                    alt={post.author}
                    className="w-9 h-9 rounded-full object-cover object-top border border-[var(--gold)]/40"
                  />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span className="flex flex-col leading-tight">
                  <span className="text-white font-semibold group-hover/author:text-[var(--gold)] transition-colors">
                    {post.author}
                  </span>
                  {authorMeta && (
                    <span className="text-gray-400 text-xs">{authorMeta.jobTitle}</span>
                  )}
                </span>
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="site-section bg-[#F8F6F2]">
        <div className="site-container">

            {/* Content blocks */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-12 lg:p-14">
              {post.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl sm:text-[28px] font-serif font-semibold text-[#14163A] mt-12 mb-5 leading-snug first:mt-0"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-xl sm:text-[22px] font-serif font-semibold text-[#1B1E49] mt-9 mb-4 leading-snug"
                    >
                      {block.replace("### ", "")}
                    </h3>
                  );
                }
                if (block.match(/^[-*] /m)) {
                  const items = block.split("\n").filter(Boolean);
                  return (
                    <ul key={i} className="my-6 space-y-3 pl-0">
                      {items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-[#374151] text-[16px] leading-[1.75]">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C29A3E] flex-shrink-0" />
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item
                                .replace(/^[-*] /, "")
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#14163A] font-semibold">$1</strong>'),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.startsWith("> ")) {
                  return (
                    <blockquote
                      key={i}
                      className="my-8 border-l-4 border-[#C29A3E] pl-6 py-1 italic text-[#4B5563] text-[16px] leading-relaxed bg-[#C29A3E]/[0.04] rounded-r-lg"
                    >
                      {block.replace(/^> /gm, "")}
                    </blockquote>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[#374151] text-[16px] sm:text-base leading-[1.8] mb-5"
                    dangerouslySetInnerHTML={{
                      __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#14163A] font-semibold">$1</strong>'),
                    }}
                  />
                );
              })}
            </div>

            {/* FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-8 bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-12 lg:p-14">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-6 h-[1px] bg-[#C29A3E]" />
                  <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.2em] uppercase">FAQ</span>
                </div>
                <h2 className="text-2xl sm:text-[28px] font-serif font-semibold text-[#14163A] mb-8 leading-snug">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {post.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <AccordionTrigger className="text-left text-[17px] font-serif font-semibold text-[#1B1E49] py-5 hover:text-[#C29A3E] hover:no-underline transition-colors [&[data-state=open]]:text-[#C29A3E]">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#4B5563] text-[16px] leading-[1.75] pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {/* Author Bio Card */}
            {authorMeta && (
              <div className="mt-8">
                <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
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
                    <p className="text-[16px] text-gray-400 mb-3">{authorMeta.jobTitle}, Dobaria Law PC</p>
                    <p className="text-[#4B5563] leading-relaxed text-[16px]">{authorMeta.blurb}</p>
                    <Link
                      href={`/attorneys/${post.authorSlug}`}
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold uppercase tracking-wider text-[#C29A3E] hover:gap-2.5 transition-all duration-200"
                    >
                      View full bio <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Related Links */}
            {post.relatedLinks && post.relatedLinks.length > 0 && (
              <div className="mt-8 bg-white rounded-xl border border-gray-100 shadow-[0_4px_30px_-8px_rgba(17,24,39,0.08)] p-8 sm:p-10">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C29A3E] mb-5">
                  Related Reading
                </h3>
                <div className="flex flex-wrap gap-3">
                  {post.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 bg-[#EFE7DA] text-[#1B1E49] rounded-sm text-xs font-semibold uppercase tracking-wider hover:bg-[#C29A3E] hover:text-white transition-colors"
                    >
                      {link.label}
                  </Link>
                  ))}
                </div>
              </div>
            )}

        </div>
      </article>

      {/* CTA */}
      <section className="site-section bg-gradient-to-br from-[#0B0F17] to-[#1B1E49] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 site-container text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#C29A3E]" />
            <span className="text-[#C29A3E] text-[11px] font-semibold tracking-[0.25em] uppercase">Schedule a Consultation</span>
            <span className="w-8 h-[1px] bg-[#C29A3E]" />
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(32px,5vw,60px)", letterSpacing: "-0.01em" }}
          >
            Have a question about your own matter?
          </h2>
          <p className="text-gray-400 text-[15px] mb-10 max-w-lg mx-auto">
            Schedule a consultation with our attorneys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C29A3E] hover:bg-[#9C7A26] text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Back to Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

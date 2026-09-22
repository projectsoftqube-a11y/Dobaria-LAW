import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/insights";
import BlogPostClient from "./BlogPostClient";
import { localizedUrl } from "@/lib/seo";
import type { Locale } from "@/i18n";

export async function generateStaticParams() {
  // Slugs are identical in both languages.
  return blogPosts.en.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const locale = (params.locale === "es" ? "es" : "en") as Locale;
  const post = blogPosts[locale].find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: { absolute: post.meta.title },
    description: post.meta.description,
    alternates: {
      canonical: localizedUrl(locale, `/insights/${params.slug}`),
      languages: {
        "en-US": localizedUrl("en", `/insights/${params.slug}`),
        "es-US": localizedUrl("es", `/insights/${params.slug}`),
        "x-default": localizedUrl("en", `/insights/${params.slug}`),
      },
    },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      url: localizedUrl(locale, `/insights/${params.slug}`),
      siteName: "Dobaria Law PC",
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const locale = (params.locale === "es" ? "es" : "en") as Locale;
  const post = blogPosts[locale].find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return <BlogPostClient post={post} />;
}

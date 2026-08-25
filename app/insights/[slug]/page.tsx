import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/insights";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: { absolute: post.meta.title },
    description: post.meta.description,
    alternates: {
      canonical: `https://ibrahimdobarialaw.com/insights/${params.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      url: `https://ibrahimdobarialaw.com/insights/${params.slug}`,
      siteName: "Dobaria Law PC",
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return <BlogPostClient post={post} />;
}

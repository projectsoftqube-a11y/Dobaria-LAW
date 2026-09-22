// app/sitemap.ts
import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/insights";

const BASE = "https://dobarialaw.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/practice-areas", priority: 0.9, changeFrequency: "monthly" },
    { path: "/practice-areas/immigration-law", priority: 0.9, changeFrequency: "monthly" },
    { path: "/practice-areas/green-cards-visas", priority: 0.9, changeFrequency: "monthly" },
    { path: "/practice-areas/citizenship-naturalization", priority: 0.8, changeFrequency: "monthly" },
    { path: "/practice-areas/deportation-defense", priority: 0.8, changeFrequency: "monthly" },
    { path: "/practice-areas/family-law", priority: 0.8, changeFrequency: "monthly" },
    { path: "/practice-areas/international-divorce", priority: 0.8, changeFrequency: "monthly" },
    { path: "/practice-areas/business-law", priority: 0.8, changeFrequency: "monthly" },
    { path: "/practice-areas/real-estate-law", priority: 0.8, changeFrequency: "monthly" },
    { path: "/attorneys", priority: 0.7, changeFrequency: "monthly" },
    { path: "/attorneys/marcia-binder-ibrahim", priority: 0.7, changeFrequency: "yearly" },
    { path: "/attorneys/vishal-j-dobaria", priority: 0.7, changeFrequency: "yearly" },
    { path: "/attorneys/jose-m-lugo", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/schedule-consultation", priority: 0.8, changeFrequency: "yearly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/results", priority: 0.6, changeFrequency: "monthly" },
    { path: "/why-choose-us", priority: 0.6, changeFrequency: "yearly" },
    { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
  ];

  // Slugs are identical in both languages.
  const posts = blogPosts.en.map((p) => p.slug);

  return [
    ...staticRoutes.map((r) => ({
      url: `${BASE}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...posts.map((slug) => ({
      url: `${BASE}/insights/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

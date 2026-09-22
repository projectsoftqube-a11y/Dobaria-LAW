import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { attorneyBios } from "@/content/attorneys";
import AttorneyBioClient from "./AttorneyBioClient";

export async function generateStaticParams() {
  // Slugs are identical in both languages, so either list works here.
  return attorneyBios.en.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }): Promise<Metadata> {
  const locale = (params.locale === "es" ? "es" : "en") as "en" | "es";
  const attorney = attorneyBios[locale].find((a) => a.slug === params.slug);
  if (!attorney) return {};
  return {
    title: { absolute: attorney.meta.title },
    description: attorney.meta.description,
    alternates: {
      canonical: `https://dobarialaw.com/attorneys/${params.slug}`,
    },
    openGraph: {
      title: attorney.meta.title,
      description: attorney.meta.description,
      url: `https://dobarialaw.com/attorneys/${params.slug}`,
      siteName: "Dobaria Law PC",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function AttorneyBioPage({ params }: { params: { slug: string; locale: string } }) {
  const locale = (params.locale === "es" ? "es" : "en") as "en" | "es";
  const attorney = attorneyBios[locale].find((a) => a.slug === params.slug);

  if (!attorney) {
    return notFound();
  }

  return <AttorneyBioClient attorney={attorney} />;
}

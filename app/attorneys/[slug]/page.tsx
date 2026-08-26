import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { attorneyBios } from "@/content/attorneys";
import AttorneyBioClient from "./AttorneyBioClient";

export async function generateStaticParams() {
  return attorneyBios.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const attorney = attorneyBios.find((a) => a.slug === params.slug);
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

export default function AttorneyBioPage({ params }: { params: { slug: string } }) {
  const attorney = attorneyBios.find((a) => a.slug === params.slug);

  if (!attorney) {
    return notFound();
  }

  return <AttorneyBioClient attorney={attorney} />;
}

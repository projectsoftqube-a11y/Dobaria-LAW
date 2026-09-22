import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "pageMeta" });
  return pageMetadata({
    locale: locale as Locale,
    path: "/practice-areas",
    title: t("practiceAreasTitle"),
    description: t("practiceAreasDescription"),
  });
}

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

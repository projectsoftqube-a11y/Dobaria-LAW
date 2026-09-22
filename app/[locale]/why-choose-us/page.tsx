import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n";
import WhyChooseUsClient from "./WhyChooseUsClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "pageMeta" });
  return pageMetadata({
    locale: locale as Locale,
    path: "/why-choose-us",
    title: t("whyChooseUsTitle"),
    description: t("whyChooseUsDescription"),
  });
}

export default function WhyChooseUsPage() {
  return <WhyChooseUsClient />;
}

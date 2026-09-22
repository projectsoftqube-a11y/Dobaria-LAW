import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n";
import ScheduleConsultationClient from "./ScheduleConsultationClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "pageMeta" });
  return pageMetadata({
    locale: locale as Locale,
    path: "/schedule-consultation",
    title: t("scheduleTitle"),
    description: t("scheduleDescription"),
  });
}

export default function ScheduleConsultationPage() {
  return <ScheduleConsultationClient />;
}

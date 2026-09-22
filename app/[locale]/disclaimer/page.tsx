import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "pageMeta" });
  return pageMetadata({
    locale: locale as Locale,
    path: "/disclaimer",
    title: t("disclaimerTitle"),
    description: t("disclaimerDescription"),
  });
}


export default async function DisclaimerPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "disclaimerPage" });

  const sections: LegalSection[] = [
    {
      id: "attorney-advertising",
      title: t("k10"),
      content: (
        <p>
          {t("k5")}
        </p>
      ),
    },
    {
      id: "no-legal-advice",
      title: t("k11"),
      content: (
        <p>
          {t("k3")}
        </p>
      ),
    },
    {
      id: "testimonials-and-results",
      title: t("k9"),
      content: (
        <p>
          {t("k4")}
        </p>
      ),
    },
    {
      id: "jurisdiction",
      title: "Jurisdiction",
      content: (
        <p>
          {t("k1")}
        </p>
      ),
    },
  ];
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer | Dobaria Law PC",
    description: t("k7"),
    url: "https://dobarialaw.com/disclaimer",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema]} />
      <Navbar />
      <LegalPage
        eyebrow={t("k13")}
        title="Disclaimer"
        lastUpdated={t("k12")}
        icon="scale"
        breadcrumbLabel="Disclaimer"
        breadcrumbHref="/disclaimer"
        intro={
          <>
            {t("k6")}
          </>
        }
        notice={{
          title: t("k8"),
          body: (
            <>
              {t("k2")}
            </>
          ),
        }}
        sections={sections}
      />
      <Footer />
    </>
  );
}

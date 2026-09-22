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
    path: "/terms",
    title: t("termsTitle"),
    description: t("termsDescription"),
  });
}


export default async function TermsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "termsPage" });

  const sections: LegalSection[] = [
    {
      id: "no-legal-advice",
      title: t("k15"),
      content: (
        <p>
          {t("k1")}
        </p>
      ),
    },
    {
      id: "intellectual-property",
      title: t("k13"),
      content: (
        <p>
          {t("k2")}
        </p>
      ),
    },
    {
      id: "third-party-links",
      title: t("k14"),
      content: (
        <p>
          {t("k6")}
        </p>
      ),
    },
    {
      id: "disclaimer-of-warranties",
      title: t("k11"),
      content: (
        <p>
          {t("warrantiesFull")}
        </p>
      ),
    },
    {
      id: "limitation-of-liability",
      title: t("k12"),
      content: (
        <p>
          {t("k5")}
        </p>
      ),
    },
    {
      id: "governing-law",
      title: t("k17"),
      content: (
        <p>
          {t("k7")}
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes",
      content: (
        <p>
          {t("k8")}
        </p>
      ),
    },
  ];
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: t("k19"), href: "/terms" },
  ]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Use | Dobaria Law PC",
    description: t("k9"),
    url: "https://dobarialaw.com/terms",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema]} />
      <Navbar />
      <LegalPage
        eyebrow={t("k18")}
        title={t("k19")}
        lastUpdated={t("k16")}
        icon="scroll"
        breadcrumbLabel={t("k19")}
        breadcrumbHref="/terms"
        intro={
          <>
            {t("k4")}
          </>
        }
        notice={{
          title: t("k10"),
          body: (
            <>
              {t("k3")}
            </>
          ),
        }}
        sections={sections}
      />
      <Footer />
    </>
  );
}

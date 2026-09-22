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
    path: "/privacy-policy",
    title: t("privacyTitle"),
    description: t("privacyDescription"),
  });
}


export default async function PrivacyPolicyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "privacyPage" });

  const sections: LegalSection[] = [
    {
      id: "information-we-collect",
      title: t("k11"),
      content: (
        <ul>
          <li>
            <strong>{t("k10")}</strong> &mdash; {t("provideDetail")}
          </li>
          <li>
            <strong>{t("k9")}</strong> &mdash; {t("autoDetail")}
          </li>
        </ul>
      ),
    },
    {
      id: "how-we-use",
      title: t("k12"),
      content: (
        <p>
          {t("k1")}
        </p>
      ),
    },
    {
      id: "sharing",
      title: t("k13"),
      content: (
        <p>
          {t("k2")}
        </p>
      ),
    },
    {
      id: "cookies",
      title: t("k15"),
      content: (
        <p>
          {t("k3")}
        </p>
      ),
    },
    {
      id: "data-security",
      title: t("k18"),
      content: (
        <p>
          {t("k4")}
        </p>
      ),
    },
    {
      id: "your-choices",
      title: t("k20"),
      content: (
        <p>
          {t("choicesLead")}{" "}
          <a href="mailto:notices@dobarialaw.com">notices@dobarialaw.com</a>.
        </p>
      ),
    },
    {
      id: "changes",
      title: t("k14"),
      content: (
        <p>
          {t("k5")}
        </p>
      ),
    },
  ];
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: t("k17"), href: "/privacy-policy" },
  ]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Dobaria Law PC",
    description: t("k6"),
    url: "https://dobarialaw.com/privacy-policy",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema]} />
      <Navbar />
      <LegalPage
        eyebrow={t("k16")}
        title={t("k17")}
        lastUpdated={t("k19")}
        icon="lock"
        breadcrumbLabel={t("k17")}
        breadcrumbHref="/privacy-policy"
        intro={
          <>
            {t("introFull")}
          </>
        }
        notice={{
          title: t("k7"),
          body: (
            <>
              {t("noticeBefore")} <strong>{t("noticeNot")}</strong> {t("noticeAfter")}
            </>
          ),
        }}
        sections={sections}
      />
      <Footer />
    </>
  );
}

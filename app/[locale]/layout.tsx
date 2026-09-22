import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n";
import LenisProvider from "@/components/LenisProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/** Pre-render both languages at build time rather than on first request. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(locale)) notFound();

  const t = await getTranslations({ locale, namespace: "meta" });
  const base = "https://dobarialaw.com";

  // English keeps the bare URLs it is already indexed under; Spanish sits
  // under /es. hreflang lets search engines pair the two rather than treating
  // them as duplicates.
  const canonical = locale === "en" ? base : `${base}/es`;

  return {
    metadataBase: new URL(base),
    title: {
      default: t("defaultTitle"),
      template: "Dobaria Law PC | %s",
    },
    description: t("description"),
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_US" : "en_US",
      siteName: "Dobaria Law PC",
      title: t("defaultTitle"),
      description: t("ogDescription"),
      url: canonical,
      images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Dobaria Law PC" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("defaultTitle"),
      description: t("ogDescription"),
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        "en-US": base,
        "es-US": `${base}/es`,
        "x-default": base,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(locale)) notFound();

  // Required for static rendering — without it next-intl opts the whole tree
  // into dynamic rendering and the 48 static pages become server-rendered.
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LenisProvider>{children}</LenisProvider>
          <LanguageSwitcher currentLocale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

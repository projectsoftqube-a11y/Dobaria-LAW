// lib/seo.ts
// Builds per-page metadata that is correct in both languages.
//
// English keeps its existing unprefixed URLs so nothing already indexed moves;
// Spanish is served under /es. Every page advertises both through hreflang so
// search engines pair them instead of treating them as duplicate content.

import type { Metadata } from "next";
import type { Locale } from "@/i18n";

export const SITE_URL = "https://dobarialaw.com";

/** Absolute URL for a path in a given locale. */
export function localizedUrl(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === "en" ? `${SITE_URL}${clean}` : `${SITE_URL}/es${clean}`;
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = localizedUrl(locale, path);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-US": localizedUrl("en", path),
        "es-US": localizedUrl("es", path),
        "x-default": localizedUrl("en", path),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Dobaria Law PC",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
    },
  };
}

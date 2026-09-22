// i18n.ts
// Locale configuration shared by the middleware, the navigation helpers and
// the server-side message loader.

import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Spanish",
};

/** Flag artwork for the switcher, served from /public/flags. */
export const localeFlags: Record<Locale, string> = {
  en: "/flags/en.svg",
  es: "/flags/es.svg",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  // A request for an unknown locale is a 404 rather than a silent fallback,
  // so a broken link never renders half-translated.
  if (!requested || !isLocale(requested)) notFound();

  return {
    locale: requested,
    messages: (await import(`./messages/${requested}.json`)).default,
  };
});

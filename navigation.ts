// navigation.ts
// Locale-aware replacements for next/link and next/navigation. Importing Link
// from here keeps the visitor in their current language when they navigate.

import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./i18n";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    // English keeps its existing unprefixed URLs (/contact), so nothing that is
    // already indexed or linked breaks. Spanish is served under /es/contact.
    localePrefix: "as-needed",
  });

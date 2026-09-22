// middleware.ts
// Resolves the visitor's locale and rewrites to the matching route tree.

import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale,
  // English keeps its existing unprefixed URLs (/contact), so nothing already
  // indexed or linked moves. Spanish is served under /es/contact.
  localePrefix: "as-needed",
});

export const config = {
  // Run on every path except API routes, Next internals, and anything with a
  // file extension (images, the sitemap, robots.txt).
  //
  // The "\\." below must stay escaped: unescaped, the pattern collapses to
  // ".*..*", which matches nearly every path and so excludes the whole site
  // from the middleware — English routes then 404 because they only exist
  // under app/[locale].
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

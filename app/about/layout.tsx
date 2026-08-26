import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About Dobaria Law PC — Trusted Since 1981" },
  description:
    "Learn about Dobaria Law PC — a boutique firm in Lansdale, PA representing clients in immigration, family, business & real estate law since 1981.",
  alternates: {
    canonical: "https://dobarialaw.com/about",
  },
  openGraph: {
    title: "About Dobaria Law PC — Trusted Since 1981",
    description: "Learn about Dobaria Law PC — a boutique firm in Lansdale, PA representing clients in immigration, family, business & real estate law since 1981.",
    url: "https://dobarialaw.com/about",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

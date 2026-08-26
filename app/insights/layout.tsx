import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Legal Insights & Immigration Blog | Dobaria Law PC" },
  description:
    "Plain-language guidance on immigration, family, business & real estate law from the attorneys at Dobaria Law PC in Lansdale, PA. Read our latest insights.",
  alternates: {
    canonical: "https://dobarialaw.com/insights",
  },
  openGraph: {
    title: "Legal Insights & Immigration Blog | Dobaria Law PC",
    description: "Plain-language guidance on immigration, family, business & real estate law from the attorneys at Dobaria Law PC in Lansdale, PA.",
    url: "https://dobarialaw.com/insights",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

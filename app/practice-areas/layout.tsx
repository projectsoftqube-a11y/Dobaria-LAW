import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Legal Practice Areas in Lansdale, PA | Dobaria Law PC" },
  description:
    "Immigration, green cards, citizenship, deportation defense, family, business & real estate law — trusted counsel in Lansdale & Montgomery County for 45+ years.",
  alternates: {
    canonical: "https://dobarialaw.com/practice-areas",
  },
  openGraph: {
    title: "Legal Practice Areas in Lansdale, PA | Dobaria Law PC",
    description: "Immigration, green cards, citizenship, deportation defense, family, business & real estate law — trusted counsel in Lansdale & Montgomery County for 45+ years.",
    url: "https://dobarialaw.com/practice-areas",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

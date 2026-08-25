import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Our Attorneys | Dobaria Law PC, Lansdale PA" },
  description:
    "Meet the attorneys of Dobaria Law PC — Marcia Binder Ibrahim and Vishal J. Dobaria. 45+ years of immigration, family, business & real estate counsel.",
  alternates: {
    canonical: "https://ibrahimdobarialaw.com/attorneys",
  },
  openGraph: {
    title: "Our Attorneys | Dobaria Law PC, Lansdale PA",
    description: "Meet the attorneys of Dobaria Law PC — Marcia Binder Ibrahim and Vishal J. Dobaria. 45+ years of immigration, family, business & real estate counsel.",
    url: "https://ibrahimdobarialaw.com/attorneys",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function AttorneysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

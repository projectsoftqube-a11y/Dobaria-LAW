import type { Metadata } from "next";
import WhyChooseUsClient from "./WhyChooseUsClient";

export const metadata: Metadata = {
  title: { absolute: "Why Choose Dobaria Law PC | Immigration, PA" },
  description:
    "45+ years, six languages, clients from 50+ countries, and attorneys admitted to the U.S. Supreme Court. See why clients choose Dobaria Law PC.",
  alternates: {
    canonical: "https://ibrahimdobarialaw.com/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Dobaria Law PC | Immigration, PA",
    description: "45+ years, six languages, clients from 50+ countries, and attorneys admitted to the U.S. Supreme Court. See why clients choose Dobaria Law PC.",
    url: "https://ibrahimdobarialaw.com/why-choose-us",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function WhyChooseUsPage() {
  return <WhyChooseUsClient />;
}

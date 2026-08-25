import type { Metadata } from "next";
import FreeConsultationClient from "./FreeConsultationClient";

export const metadata: Metadata = {
  title: { absolute: "Free Immigration Consultation | Dobaria Law PC, PA" },
  description:
    "Book a free consultation with an experienced immigration attorney serving Philadelphia & Montgomery County. Response within 24 hours. Se habla español.",
  alternates: {
    canonical: "https://ibrahimdobarialaw.com/free-consultation",
  },
  openGraph: {
    title: "Free Immigration Consultation | Dobaria Law PC, PA",
    description: "Book a free consultation with an experienced immigration attorney serving Philadelphia & Montgomery County. Response within 24 hours.",
    url: "https://ibrahimdobarialaw.com/free-consultation",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function FreeConsultationPage() {
  return <FreeConsultationClient />;
}

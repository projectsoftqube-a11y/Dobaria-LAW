import type { Metadata } from "next";
import ScheduleConsultationClient from "./ScheduleConsultationClient";

export const metadata: Metadata = {
  title: { absolute: "Schedule an Immigration Consultation | Dobaria Law PC, PA" },
  description:
    "Book a consultation with an experienced immigration attorney serving Philadelphia & Montgomery County. Response within 24 hours. Se habla español.",
  alternates: {
    canonical: "https://dobarialaw.com/schedule-consultation",
  },
  openGraph: {
    title: "Schedule an Immigration Consultation | Dobaria Law PC, PA",
    description: "Book a consultation with an experienced immigration attorney serving Philadelphia & Montgomery County. Response within 24 hours.",
    url: "https://dobarialaw.com/schedule-consultation",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function ScheduleConsultationPage() {
  return <ScheduleConsultationClient />;
}

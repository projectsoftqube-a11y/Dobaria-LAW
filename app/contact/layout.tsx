import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact Us — Free Consultation | Dobaria Law PC" },
  description:
    "Contact Dobaria Law PC in Lansdale, PA for a free consultation. Call 215-362-2478 or send a message — response within 24 business hours. Se habla español.",
  alternates: {
    canonical: "https://ibrahimdobarialaw.com/contact",
  },
  openGraph: {
    title: "Contact Us — Free Consultation | Dobaria Law PC",
    description: "Contact Dobaria Law PC in Lansdale, PA for a free consultation. Call 215-362-2478 or send a message — response within 24 business hours.",
    url: "https://ibrahimdobarialaw.com/contact",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

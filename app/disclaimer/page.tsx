import type { Metadata } from "next";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Disclaimer | Dobaria Law PC" },
  description: "Legal disclaimer and attorney advertising notice for Dobaria Law PC.",
  alternates: { canonical: "https://dobarialaw.com/disclaimer" },
  openGraph: {
    title: "Disclaimer | Dobaria Law PC",
    description: "Legal disclaimer and attorney advertising notice for Dobaria Law PC.",
    url: "https://dobarialaw.com/disclaimer",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

const sections: LegalSection[] = [
  {
    id: "attorney-advertising",
    title: "Attorney advertising",
    content: (
      <p>
        This website may be considered attorney advertising in some jurisdictions. Prior results do not guarantee a similar outcome.
      </p>
    ),
  },
  {
    id: "no-legal-advice",
    title: "No legal advice",
    content: (
      <p>
        The information provided on this website is for general informational purposes only and is not legal advice. Laws change and vary by jurisdiction and by the facts of each situation. You should consult a qualified attorney for advice regarding your specific circumstances.
      </p>
    ),
  },
  {
    id: "testimonials-and-results",
    title: "Testimonials and results",
    content: (
      <p>
        Any case results or client testimonials described on this website reflect specific facts and circumstances. They are not a promise or guarantee of a particular outcome, and prior results do not guarantee a similar outcome.
      </p>
    ),
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction",
    content: (
      <p>
        The attorneys of Dobaria Law PC are licensed to practice in Pennsylvania and New Jersey. We represent immigration clients nationwide as permitted by federal immigration practice. Nothing on this site is an offer to represent you in a jurisdiction where our attorneys are not authorized to practice.
      </p>
    ),
  },
];

export default function DisclaimerPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer | Dobaria Law PC",
    description: "Legal disclaimer for the Dobaria Law PC website, including attorney advertising and no-legal-advice notices.",
    url: "https://dobarialaw.com/disclaimer",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema]} />
      <Navbar />
      <LegalPage
        eyebrow="Legal Notice"
        title="Disclaimer"
        lastUpdated="July 10, 2026"
        icon="scale"
        breadcrumbLabel="Disclaimer"
        breadcrumbHref="/disclaimer"
        intro={
          <>
            The following notices govern your use of this website and the information it contains. Please read them carefully.
          </>
        }
        notice={{
          title: "No attorney-client relationship",
          body: (
            <>
              Viewing this website, or contacting Dobaria Law PC through it, does not create an attorney-client relationship. Such a relationship is established only through a signed written agreement. Please do not send confidential information to us until an attorney-client relationship has been established.
            </>
          ),
        }}
        sections={sections}
      />
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Terms of Use | Dobaria Law PC" },
  description: "Terms of Use for the Dobaria Law PC website.",
  alternates: { canonical: "https://ibrahimdobarialaw.com/terms" },
  openGraph: {
    title: "Terms of Use | Dobaria Law PC",
    description: "Terms of Use for the Dobaria Law PC website.",
    url: "https://ibrahimdobarialaw.com/terms",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

const sections: LegalSection[] = [
  {
    id: "no-legal-advice",
    title: "No legal advice",
    content: (
      <p>
        The content on this website is provided for general informational purposes only and does not constitute legal advice. You should not act or rely on any information on this site without seeking the advice of a qualified attorney licensed in the appropriate jurisdiction.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <p>
        The content, design, and materials on this website are owned by or licensed to Dobaria Law PC and are protected by applicable intellectual property laws. You may not reproduce or distribute them without permission.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    content: (
      <p>
        This website may contain links to third-party sites. We are not responsible for the content or practices of those sites.
      </p>
    ),
  },
  {
    id: "disclaimer-of-warranties",
    title: "Disclaimer of warranties",
    content: (
      <p>
        This website is provided &quot;as is&quot; without warranties of any kind, express or implied, to the fullest extent permitted by law.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the fullest extent permitted by law, Dobaria Law PC is not liable for any damages arising from your use of this website.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: (
      <p>
        These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict-of-laws principles.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    content: (
      <p>
        We may update these Terms from time to time. Continued use of the site constitutes acceptance of the updated Terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Terms of Use", href: "/terms" },
  ]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Use | Dobaria Law PC",
    description: "The terms governing your use of the Dobaria Law PC website.",
    url: "https://ibrahimdobarialaw.com/terms",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema]} />
      <Navbar />
      <LegalPage
        eyebrow="Website Terms"
        title="Terms of Use"
        lastUpdated="July 10, 2026"
        icon="scroll"
        breadcrumbLabel="Terms of Use"
        breadcrumbHref="/terms"
        intro={
          <>
            Welcome to the website of Dobaria Law PC. By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the site.
          </>
        }
        notice={{
          title: "No attorney-client relationship",
          body: (
            <>
              Using this website, or contacting us through it, does not create an attorney-client relationship. An attorney-client relationship is formed only when we agree in writing to represent you.
            </>
          ),
        }}
        sections={sections}
      />
      <Footer />
    </>
  );
}

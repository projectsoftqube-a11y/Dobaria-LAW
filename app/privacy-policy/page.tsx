import type { Metadata } from "next";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Dobaria Law PC" },
  description: "Privacy Policy for Dobaria Law PC. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://dobarialaw.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Dobaria Law PC",
    description: "Privacy Policy for Dobaria Law PC. How we collect, use, and protect your personal information.",
    url: "https://dobarialaw.com/privacy-policy",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <ul>
        <li>
          <strong>Information you provide</strong> &mdash; when you complete our contact or consultation form, we collect the name, email, phone number, and any details you choose to share about your matter.
        </li>
        <li>
          <strong>Automatically collected information</strong> &mdash; like most websites, we may collect standard technical data (such as IP address, browser type, and pages visited) through cookies and analytics tools.
        </li>
      </ul>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use information",
    content: (
      <p>
        We use the information you provide to respond to your inquiry, evaluate a potential matter, and communicate with you. We use automatically collected data to operate and improve the website.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of information",
    content: (
      <p>
        We do not sell your personal information. We may share information with service providers who help us operate the website or communicate with you, and as required by law.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    content: (
      <p>
        We may use cookies and third-party analytics (for example, Google Analytics) to understand site usage. You can control cookies through your browser settings.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data security",
    content: (
      <p>
        We take reasonable measures to protect information submitted through the website, though no method of transmission over the internet is completely secure.
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices",
    content: (
      <p>
        You may request that we update or delete information you&apos;ve submitted by contacting us at{" "}
        <a href="mailto:notice@dobarialaw.com">notice@dobarialaw.com</a>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. Changes will be posted on this page with an updated date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Dobaria Law PC",
    description: "How Dobaria Law PC collects, uses, and protects information submitted through this website.",
    url: "https://dobarialaw.com/privacy-policy",
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, webPageSchema]} />
      <Navbar />
      <LegalPage
        eyebrow="Your Privacy Matters"
        title="Privacy Policy"
        lastUpdated="July 10, 2026"
        icon="lock"
        breadcrumbLabel="Privacy Policy"
        breadcrumbHref="/privacy-policy"
        intro={
          <>
            Dobaria Law PC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect through this website and how we use it.
          </>
        }
        notice={{
          title: "This form does not create an attorney-client relationship",
          body: (
            <>
              Submitting information through this website does <strong>not</strong> create an attorney-client relationship. Please do not send confidential or time-sensitive information through the form until an attorney-client relationship has been established in writing.
            </>
          ),
        }}
        sections={sections}
      />
      <Footer />
    </>
  );
}

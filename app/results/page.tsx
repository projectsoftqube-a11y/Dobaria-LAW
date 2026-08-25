import type { Metadata } from "next";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: { absolute: "Client Results & Reviews | Dobaria Law PC, PA" },
  description:
    "Read what clients say about Dobaria Law PC and see the kinds of immigration, family & business matters we handle in Lansdale, PA. Free consultation.",
  alternates: {
    canonical: "https://ibrahimdobarialaw.com/results",
  },
  openGraph: {
    title: "Client Results & Reviews | Dobaria Law PC, PA",
    description: "Read what clients say about Dobaria Law PC and see the kinds of immigration, family & business matters we handle in Lansdale, PA.",
    url: "https://ibrahimdobarialaw.com/results",
    siteName: "Dobaria Law PC",
    locale: "en_US",
    type: "website",
  },
};

export default function ResultsPage() {
  return <ResultsClient />;
}

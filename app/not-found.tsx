import type { Metadata } from "next";
import NotFoundClient from "./not-found-client";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for couldn't be found. Explore our practice areas or contact Dobaria Law PC for immigration, family, business, and real estate counsel.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundClient />;
}

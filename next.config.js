/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/practice-areas/green-cards-and-visas",
        destination: "/practice-areas/green-cards-visas",
        permanent: true,
      },
      {
        source: "/practice-areas/citizenship-and-naturalization",
        destination: "/practice-areas/citizenship-naturalization",
        permanent: true,
      },
      {
        // The firm does not offer free consultations; the page moved to a
        // neutral URL. Keep this redirect so existing links keep resolving.
        source: "/free-consultation",
        destination: "/schedule-consultation",
        permanent: true,
      },
      // Retired insight posts, replaced by the firm's published articles.
      // Redirect the old URLs so existing links keep resolving.
      {
        source: "/insights/h1b-2026-cap-season",
        destination: "/insights/understanding-us-immigration-law",
        permanent: true,
      },
      {
        source: "/insights/green-card-process-timeline",
        destination: "/insights/marriage-based-green-card-interview",
        permanent: true,
      },
      {
        source: "/insights/international-custody-cases",
        destination: "/insights/child-custody-101",
        permanent: true,
      },
      {
        source: "/insights/forming-an-llc-in-pa",
        destination: "/insights/legal-counsel-business-transactions",
        permanent: true,
      },
      {
        source: "/insights/deportation-defense-guide",
        destination: "/insights/deportation-legal-options",
        permanent: true,
      },
      {
        source: "/insights/eb5-investor-visa-guide",
        destination: "/insights/understanding-us-immigration-law",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

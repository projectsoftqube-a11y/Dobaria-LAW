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
    ];
  },
};

module.exports = nextConfig;

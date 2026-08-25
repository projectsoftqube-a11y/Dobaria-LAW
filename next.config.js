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
    ];
  },
};

module.exports = nextConfig;

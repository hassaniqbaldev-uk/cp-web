/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  experimental: {
    inlineCss: true,
  },
  // Service slug renames applied during Batch A (from the CP-15 redirect map, brought forward with the
  // renames so the old URLs never 404). ppc -> paid-media (D41), maintenance -> growth-and-support (D42).
  async redirects() {
    return [
      {
        source: "/services/ppc",
        destination: "/services/paid-media",
        permanent: true,
      },
      {
        source: "/services/maintenance",
        destination: "/services/growth-and-support",
        permanent: true,
      },
      // CP-07: Scale Marketing merged into Increase Leads (D39).
      {
        source: "/solutions/scale-marketing",
        destination: "/solutions/increase-leads",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

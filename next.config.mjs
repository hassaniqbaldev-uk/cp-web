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
      // CP-08: legacy industry-as-solution URLs redirect to their Industries pages (D4/D44, IA §4).
      // Wired here as each target page goes live. Ecommerce Brands is live now; the other four
      // shipping industries (b2b-services, technology-saas, charities-non-profits,
      // home-improvement-interiors) are wired with their pages in the next batch.
      {
        source: "/solutions/ecommerce-brands",
        destination: "/industries/ecommerce-brands",
        permanent: true,
      },
      {
        source: "/solutions/b2b-services",
        destination: "/industries/b2b-services",
        permanent: true,
      },
      {
        source: "/solutions/saas-companies",
        destination: "/industries/technology-saas",
        permanent: true,
      },
      {
        source: "/solutions/charities-and-foundation",
        destination: "/industries/charities-non-profits",
        permanent: true,
      },
      {
        source: "/solutions/interiors-and-furnishings",
        destination: "/industries/home-improvement-interiors",
        permanent: true,
      },
      // The three HELD industries (hasPage:false) point at Web Design & Development until Hassan
      // decides whether we chase those verticals; turning one on repoints it to its own page.
      {
        source: "/solutions/driving-schools",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/solutions/pharmacies",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/solutions/restaurants",
        destination: "/services/web-design-development",
        permanent: true,
      },
      // SME Founders is audience positioning, not an industry — no single page owns it.
      {
        source: "/solutions/sme-founders",
        destination: "/solutions",
        permanent: true,
      },
      // Retired pages (IA §4). Agencies folds into Partner With Us; the WordPress landing page is
      // superseded by the Web Design & Development service page.
      {
        source: "/agencies",
        destination: "/partner-with-us",
        permanent: true,
      },
      {
        source: "/wordpress-web-development",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/wordpress-web-development/thank-you",
        destination: "/services/web-design-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

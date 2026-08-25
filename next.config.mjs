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
      // KNOWN SEO LOSS (CP-15, accepted 25 Aug 2026): these three legacy industry-solution URLs carry
      // sector-specific search value that a generic service page does not recover. Publishing the three
      // industry pages (hasPage:true) and repointing here would recover it. See redirect-map.md flag 3.
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
      // Restaurants now has an honest industry home: Travel, Hospitality & Leisure covers food/drink
      // (CP-12, 25 Aug 2026), so it points there instead of the generic service, recovering sector value.
      {
        source: "/solutions/restaurants",
        destination: "/industries/travel-hospitality",
        permanent: true,
      },
      // SME Founders is audience positioning, not an industry — no single page owns it. Points at the
      // Increase Leads goal solution (the most common SME intent), not the hub (CP-15, 25 Aug 2026).
      {
        source: "/solutions/sme-founders",
        destination: "/solutions/increase-leads",
        permanent: true,
      },
      // Legacy combined "Custom Apps & AI" page split into two services; the head term (custom apps)
      // is the page a prospect on the old URL most likely wanted (CP-15, 25 Aug 2026).
      {
        source: "/services/custom-apps-and-ai",
        destination: "/services/custom-app-development",
        permanent: true,
      },
      // NOTE: /About cannot be handled here — Next matches redirect sources case-INSENSITIVELY, so a
      // "/About" -> "/about" entry also matches "/about" and creates an infinite loop. A case-only redirect
      // needs middleware (case-sensitive) or is left to 404. Flagged for Hassan (see redirect-map.md).
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
      // The retired LP's form-confirmation page goes to the generic thank-you, not a service page.
      {
        source: "/wordpress-web-development/thank-you",
        destination: "/thank-you",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

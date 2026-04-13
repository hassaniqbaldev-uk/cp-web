export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/hassan-test",
          "/review-test",
          "/testing-testimonials",
          "/lp/",
        ],
      },
    ],
    sitemap: "https://creativepixels.agency/sitemap.xml",
  };
}

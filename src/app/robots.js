export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/hassan-test", "/review-test", "/testing-testimonials"],
      },
    ],
    sitemap: "https://creativepixels.agency/sitemap.xml",
  };
}

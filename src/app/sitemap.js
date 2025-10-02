import { fetchAPI } from "@/lib/strapi";

export default async function sitemap() {
  const siteUrl = "https://cp-web-taupe.vercel.app/"; // replace with your real domain

  // Fetch dynamic slugs from Strapi
  const response = await fetchAPI("/api/case-studies", {
    fields: ["slug", "updatedAt"],
  });

  const caseStudies = response.data || [];

  const caseStudyUrls = caseStudies.map((item) => ({
    url: `${siteUrl}/case-studies/${item.slug}`,
    lastModified: item.updatedAt,
  }));

  // Add static pages too
  const staticUrls = [
    { url: siteUrl, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/contact`, lastModified: new Date().toISOString() },
  ];

  return [...staticUrls, ...caseStudyUrls];
}

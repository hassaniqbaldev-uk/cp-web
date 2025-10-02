import { fetchAPI } from "@/lib/strapi";

// ✅ Enable ISR so build won’t fail if Strapi is unreachable
export const revalidate = 60; // re-generate every 60 seconds

export default async function sitemap() {
  const siteUrl = "https://cp-web-taupe.vercel.app/"; // replace with your real domain

  let caseStudies = [];

  try {
    // Try fetching dynamic slugs from Strapi
    const response = await fetchAPI("/api/case-studies", {
      fields: ["slug", "updatedAt"],
    });

    caseStudies = response?.data || [];
  } catch (error) {
    console.error("❌ Strapi API error in sitemap:", error);
    // fallback: just return static pages
  }

  const caseStudyUrls = caseStudies.map((item) => ({
    url: `${siteUrl}case-studies/${item.slug}`, // ✅ fixed missing `/`
    lastModified: item.updatedAt || new Date().toISOString(),
  }));

  // Static pages
  const staticUrls = [
    { url: siteUrl, lastModified: new Date().toISOString() },
    { url: `${siteUrl}about`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}services`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}contact`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}case-studies`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}agencies`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}privacy-policy`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}cookies-policy`, lastModified: new Date().toISOString() },
  ];

  return [...staticUrls, ...caseStudyUrls];
}

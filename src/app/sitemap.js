import { BLOG_SITEMAP_QUERY } from "@/sanity/queries.blog";
import { CASE_STUDY_SITEMAP_QUERY } from "@/sanity/queries.caseStudies";
import { SERVICES_SITEMAP_QUERY } from "@/sanity/queries.services";
import { SOLUTIONS_SITEMAP_QUERY } from "@/sanity/queries.solutions";
import { blogClient } from "@/sanity/sanity.blog";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { servicesClient } from "@/sanity/sanity.services";
import { solutionsClient } from "@/sanity/sanity.solutions";

const SITE_URL = "https://creativepixels.agency/";

export default async function sitemap() {
  // Fetch everything in parallel (fast + scalable)
  const [blogs, caseStudies, services, solutions] = await Promise.all([
    blogClient.fetch(BLOG_SITEMAP_QUERY),
    caseStudiesClient.fetch(CASE_STUDY_SITEMAP_QUERY),
    servicesClient.fetch(SERVICES_SITEMAP_QUERY),
    solutionsClient.fetch(SOLUTIONS_SITEMAP_QUERY),
  ]);

  return [
    // 🟢 Static pages
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}audit`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}about`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}how-we-work`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}careers`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}partner-with-us`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}contact`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}blog`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}case-studies`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}services`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}solutions`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/terms`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/cookies-policy`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/acceptable-use-policy`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/gdpr`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/project-agreement`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/retainer-agreement`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/nda-template`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/payment-terms`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/intellectual-property`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}legal/complaints-procedure`,
      lastModified: new Date(),
    },

    // 🟣 Blog posts
    ...blogs.map((post) => ({
      url: `${SITE_URL}blog/${post.slug}`,
      lastModified: post._updatedAt,
    })),

    // 🔵 Case studies
    ...caseStudies.map((item) => ({
      url: `${SITE_URL}case-studies/${item.slug}`,
      lastModified: item._updatedAt,
    })),

    // 🟠 Services
    ...services.map((item) => ({
      url: `${SITE_URL}services/${item.slug}`,
      lastModified: item._updatedAt,
    })),

    // 🟡 Solutions
    ...solutions.map((item) => ({
      url: `${SITE_URL}solutions/${item.slug}`,
      lastModified: item._updatedAt,
    })),
  ];
}

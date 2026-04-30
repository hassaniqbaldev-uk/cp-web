import { BLOG_SITEMAP_QUERY } from "@/sanity/queries.blog";
import { CASE_STUDY_SITEMAP_QUERY } from "@/sanity/queries.caseStudies";
import { LEGAL_SITEMAP_QUERY } from "@/sanity/queries.legal";
import { SERVICES_SITEMAP_QUERY } from "@/sanity/queries.services";
import { SOLUTIONS_SITEMAP_QUERY } from "@/sanity/queries.solutions";
import { blogClient } from "@/sanity/sanity.blog";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { legalClient } from "@/sanity/sanity.legal";
import { servicesClient } from "@/sanity/sanity.services";
import { solutionsClient } from "@/sanity/sanity.solutions";

const SITE_URL = "https://creativepixels.agency/";

export default async function sitemap() {
  let blogs = [];
  let caseStudies = [];
  let services = [];
  let solutions = [];
  let legalPages = [];

  try {
    [blogs, caseStudies, services, solutions, legalPages] = await Promise.all([
      blogClient.fetch(BLOG_SITEMAP_QUERY),
      caseStudiesClient.fetch(CASE_STUDY_SITEMAP_QUERY),
      servicesClient.fetch(SERVICES_SITEMAP_QUERY),
      solutionsClient.fetch(SOLUTIONS_SITEMAP_QUERY),
      legalClient.fetch(LEGAL_SITEMAP_QUERY),
    ]);
  } catch (error) {
    console.error("Failed to fetch sitemap data:", error);
  }

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

    // ⚖️ Legal pages
    ...legalPages.map((item) => ({
      url: `${SITE_URL}legal/${item.slug}`,
      lastModified: item._updatedAt,
    })),
  ];
}

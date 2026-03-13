import { createClient } from "next-sanity";

export const blogClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_BLOG_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_BLOG_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_BLOG_API_VERSION,
  useCdn: false,
});

import { createClient } from "next-sanity";

export const solutionsClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_SOLUTIONS_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_SOLUTIONS_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_SOLUTIONS_API_VERSION,
  useCdn: false,
});

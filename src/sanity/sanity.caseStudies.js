import { createClient } from "next-sanity";

export const caseStudiesClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_CASE_STUDIES_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_CASE_STUDIES_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_CASE_STUDIES_API_VERSION,
  useCdn: false,
});

import { createClient } from "next-sanity";

export const legalClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_LEGAL_HUB_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_LEGAL_HUB_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_LEGAL_HUB_API_VERSION,
  useCdn: false,
});

import { createClient } from "next-sanity";

export const servicesClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_SERVICES_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_SERVICES_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_SERVICES_API_VERSION,
  useCdn: false,
});

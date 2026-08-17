import { createClient } from "next-sanity";

// Single consolidated Sanity client (CP-00K). Replaces the five per-project clients.
// The dataset is PRIVATE, so a server-side read token is required; there is no public
// fallback. All fetches in this app are server-side (RSC), so the token stays server-only.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  // Private dataset: without a token every fetch 401s. Fail loud at startup rather than
  // returning empty pages silently.
  console.error(
    "[sanity] SANITY_API_READ_TOKEN is missing. The dataset is private; reads will fail.",
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // private + token; also required for fresh/draft reads
  token,
  perspective: "published",
});

// Draft-mode client: returns draft content when Next.js draftMode() is enabled (preview).
export const previewClient = client.withConfig({
  perspective: "previewDrafts",
  useCdn: false,
  token,
  ignoreBrowserTokenWarning: true,
});

// Pick the right client for a request based on draft mode.
export const getClient = (preview) => (preview ? previewClient : client);

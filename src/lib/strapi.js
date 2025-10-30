import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

const strapi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    // Optional: for migrating temporarily
    // "Strapi-Response-Format": "v4",
  },
});

strapi.interceptors.request.use((config) => {
  if (process.env.STRAPI_API_TOKEN) {
    config.headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
  }
  return config;
});

export async function fetchAPI(path, params = {}) {
  try {
    const res = await strapi.get(path, { params });
    return res.data;
  } catch (err) {
    console.error("Strapi API error:", err.response?.data || err.message);
    throw err;
  }
}

export function getStrapiMedia(media) {
  if (!media) return null;

  // Strapi 5 media has url directly
  const url = media.url || media?.attributes?.url;
  if (!url) return null;

  return url.startsWith("http") ? url : `${API_URL}${url}`;
}

/**
 * Universal Strapi API fetch helper for Next.js (App Router)
 * Supports populate, filters, sort, and pagination.
 */

// import qs from "qs";

// export async function getCaseStudies(slug) {
//   const baseUrl =
//     process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";

//   const path = "/api/case-studies";

//   const url = new URL(path, baseUrl);

//   url.search = qs.stringify({
//     populate: {
//       ThumbnailImage: {
//         fields: ["alternativeText", "name", "url"],
//       },
//       Tags: {
//         fields: ["Tag"],
//       },
//       Technologies: {
//         populate: {
//           Technology: {
//             fields: ["alternativeText", "name", "url"],
//           },
//         },
//       },
//       // CaseStudyDetails: {
//       //   on: {
//       //     "case-study-details.case-study-hero-section": {
//       //       populate: "*",
//       //     },
//       //   },
//       // },
//       CaseStudyDetails: {
//         on: {
//           "case-study-details.case-study-hero-section": {
//             populate: {
//               ToolsColumn: {
//                 fields: ["alternativeText", "name", "url"],
//               },
//               BadgeImage: {
//                 fields: ["alternativeText", "name", "url"],
//               },
//               FeaturedImage: {
//                 fields: ["alternativeText", "name", "url"],
//               },
//             },
//           },
//         },
//       },
//     },
//     filters: {
//       Slug: {
//         $eq: slug, // This is the slug for our team member
//       },
//     },
//   });

//   const res = await fetch(url);

//   if (!res.ok) throw new Error("Failed to fetch Case Studies");

//   const data = await res.json();

//   console.log(data);

//   return data;
// }

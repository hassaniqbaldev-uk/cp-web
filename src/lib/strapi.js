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

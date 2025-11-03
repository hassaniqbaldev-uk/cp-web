// lib/getStrapiMedia.js
export function getStrapiMedia(url) {
  if (!url) return null;

  // If it's already absolute (starts with http/https), return as-is
  if (url.startsWith("http")) return url;

  // Otherwise prepend your environment base URL
  const baseUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";

  return `${baseUrl}${url}`;
}

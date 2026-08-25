import { caseStudiesClient } from "@/sanity/sanity.caseStudies";

// Founder photo from the Sanity author doc, shared by the homepage and the About page. `fit=max` caps at
// the source's dimensions, so it stays crisp and automatically serves a larger image the day a
// higher-resolution photo is uploaded (no code change). Returns null on failure so callers fall back.
export async function getFounderImage() {
  try {
    const author = await caseStudiesClient.fetch(
      `*[_type == "author"][0]{ "img": image.asset->url }`,
      {},
      { next: { revalidate: 3600 } },
    );
    return author?.img ? `${author.img}?w=640&fit=max&auto=format&q=80` : null;
  } catch (error) {
    console.error("Failed to fetch founder image:", error);
    return null;
  }
}

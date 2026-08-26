import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { TESTIMONIALS_QUERY } from "@/sanity/queries.testimonials";

// Server-side, cached (revalidate 3600). Image URLs are resolved HERE (server) so the client
// testimonial components receive plain strings and never pull the Sanity client into their bundle.
// Avatars are SVG (Sanity serves them as-is; no transform). The featured image is a raster crop.
// Returns [] on failure so the sections degrade gracefully.
export async function getTestimonials() {
  try {
    const rows = await client.fetch(
      TESTIMONIALS_QUERY,
      {},
      { next: { revalidate: 3600 } },
    );
    return (rows || []).map((t) => ({
      _id: t._id,
      name: t.name,
      company: t.company,
      quote: t.quote,
      rating: t.rating || 5,
      featured: !!t.featured,
      order: t.order,
      avatarUrl: t.avatar ? urlFor(t.avatar)?.url() : null,
      featuredImageUrl: t.featuredImage
        ? urlFor(t.featuredImage)?.width(640).height(400).fit("crop").url()
        : null,
    }));
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// NEW DOCUMENT TYPE: testimonial
// Add to your Studio schema's document type list. Fully self-contained (no custom
// object types needed). The site already reads this type — 11 documents exist in the
// `staging` dataset — so once this is in the Studio, editors can manage them immediately.
//
// The query the site uses: order(order asc); `featured` picks the one that leads the
// homepage bento + the /testimonials page; avatar is shown on every card; featuredImage
// is only used on the single featured card (large image at the top of the tall card).
// ─────────────────────────────────────────────────────────────────────────────
import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client name",
      type: "string",
      description: "The person quoted, e.g. \"Brendan Torazzi\" or a first name.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      description:
        "Their company, spelled the way the client writes it (e.g. \"AlertForce\", \"SafetyRAC\", \"Casa Botanica\"). Shown under the name.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 5,
      description: "The review text, in the client's words. No surrounding quotation marks — the design adds none.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      description: "Number of stars shown (1–5).",
      validation: (r) => r.required().min(1).max(5).integer(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
      description:
        "Small round avatar shown on every card. Required — a card with no avatar renders an empty circle.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      options: { hotspot: true },
      description:
        "Large image shown ONLY on the featured testimonial's tall card (homepage bento + /testimonials). Leave empty on every non-featured testimonial. Only meaningful when \"Featured\" below is on.",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description:
        "Turn on for the ONE testimonial that should lead — it takes the tall left card (with its Featured image) on both the homepage and the /testimonials page. Keep exactly one testimonial featured. If none is featured, the first by Order is used and no large image shows.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Sequence across the site (ascending). The homepage bento uses the first four in this order; the featured one should be first. Lower = earlier.",
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: "Order (ascending)",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "company", media: "avatar", featured: "featured" },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: featured ? `★ ${title}` : title,
        subtitle,
        media,
      };
    },
  },
});

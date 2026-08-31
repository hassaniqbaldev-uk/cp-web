// ─────────────────────────────────────────────────────────────────────────────
// SUPPLEMENTARY — the page CONTENT fields shared by services, solutions and industries.
// These existed in the data BEFORE this pack (the site rendered from them), so a base
// Studio schema for these types almost certainly already defines them. Add a field from
// here ONLY if your existing type does not already have it. Do NOT create a second field
// with the same name. Use the README's manifest to check field-by-field.
//
// Requires object types from ./objectTypes.js: sectionHeading, bulletPoint, expertiseCard,
// methodologyStep, partnerCard, faqItem.
// ─────────────────────────────────────────────────────────────────────────────
import { defineField } from "sanity";

// Base document fields (every doc has these — almost certainly already defined):
export const baseDocFields = [
  defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
  defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
  defineField({
    name: "seo",
    title: "SEO",
    type: "object",
    fields: [
      defineField({ name: "metaTitle", title: "Meta title", type: "string", description: "Browser tab + search-result title. ~60 chars." }),
      defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 2, description: "Search-result snippet. ~150 chars." }),
    ],
  }),
  defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 2, description: "Short summary (cards / SEO-adjacent)." }),
  defineField({ name: "icon", title: "Icon", type: "image", description: "Small icon used in the mega-menu / cards." }),
];

// The section content objects. Each `heading` sub-field is a build-added override
// (see the per-type custom-fields files); the rest is base content.
export const sharedContentFields = [
  defineField({
    name: "detailHero",
    title: "Detail hero",
    type: "object",
    description: "The page hero (eyebrow, H1, intro).",
    fields: [
      defineField({ name: "label", title: "Eyebrow label", type: "string", description: "Small label above the H1. Defaults to \"Our Expertise\" if blank." }),
      defineField({ name: "title", title: "Heading (H1)", type: "string", validation: (r) => r.required() }),
      defineField({ name: "description", title: "Intro", type: "text", rows: 3 }),
      defineField({ name: "caseStudiesLink", title: "Case studies link", type: "string", description: "Where the hero's \"See case studies\" points, e.g. /case-studies." }),
      defineField({ name: "heroImage", title: "Hero image", type: "image", description: "Used on industry heroes (optional elsewhere)." }),
    ],
  }),
  defineField({
    name: "partnerWithUs",
    title: "Why it matters / problems",
    type: "object",
    fields: [
      defineField({ name: "heading", title: "Section heading (override)", type: "sectionHeading" }),
      defineField({ name: "card", title: "Cards", type: "array", of: [{ type: "partnerCard" }] }),
    ],
  }),
  defineField({
    name: "expertise",
    title: "What we do / what we build",
    type: "object",
    fields: [
      defineField({ name: "heading", title: "Section heading (override)", type: "sectionHeading" }),
      defineField({ name: "card", title: "Cards", type: "array", of: [{ type: "expertiseCard" }] }),
    ],
  }),
  defineField({
    name: "methodology",
    title: "How it works",
    type: "object",
    fields: [
      defineField({ name: "heading", title: "Section heading (override)", type: "sectionHeading" }),
      defineField({ name: "card", title: "Steps", type: "array", of: [{ type: "methodologyStep" }] }),
    ],
  }),
  defineField({
    name: "projectShowcase",
    title: "Is this right for you (fit / not-fit)",
    type: "object",
    fields: [
      defineField({ name: "heading", title: "Section heading (override)", type: "sectionHeading" }),
      defineField({ name: "fitCard", title: "Good fit if…", type: "array", of: [{ type: "bulletPoint" }] }),
      defineField({ name: "notFitCard", title: "Not a fit if…", type: "array", of: [{ type: "bulletPoint" }] }),
    ],
  }),
  defineField({
    name: "faqs",
    title: "FAQs",
    type: "array",
    of: [{ type: "faqItem" }],
  }),
];

// SERVICES ONLY — the Investment section's "what's included" list. (`options` also held a
// legacy `pricingCard` that is NO LONGER READ — pricing comes from code; do not rely on it.)
export const servicesOptionsField = defineField({
  name: "options",
  title: "Investment",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Section heading (override)", type: "sectionHeading" }),
    defineField({ name: "includeCard", title: "What's included", type: "array", of: [{ type: "bulletPoint" }] }),
  ],
});

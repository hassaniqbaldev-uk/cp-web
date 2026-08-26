// ─────────────────────────────────────────────────────────────────────────────
// Reusable OBJECT types — register these BEFORE the document types that use them.
// Add each to your Studio schema's type list (e.g. schemaTypes array in
// `sanity.config.ts` / `schema/index.ts`). These are shared building blocks
// referenced by services, solutions, industries and caseStudies custom fields.
//
// Sanity v3 syntax. If your Studio is JS not TS, drop the type imports and the
// `defineType`/`defineField` wrappers are still valid.
// ─────────────────────────────────────────────────────────────────────────────
import { defineType, defineField } from "sanity";

// { label, title, description } — the standard header block a section shows above
// its content. Used by partnerWithUs.heading, expertise.heading, methodology.heading,
// projectShowcase.heading, options.heading, and specialistLinksHeading.
// ALL fields optional: when the whole object is omitted the COMPONENT renders its own
// default copy, so only fill what you want to override.
export const sectionHeading = defineType({
  name: "sectionHeading",
  title: "Section heading",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Eyebrow label",
      type: "string",
      description: "Small label above the title (e.g. \"Our Process\"). Optional.",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main section heading. Optional — omit to use the component default.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Supporting sentence under the title. Optional.",
    }),
  ],
  preview: { select: { title: "title", subtitle: "label" } },
});

// { label, href, description } — a single cross-link. Used by specialistLinks[] (the
// related-services band) and by parentService (the single "part of a bigger offer" link).
export const linkCard = defineType({
  name: "linkCard",
  title: "Link card",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "href",
      title: "Link (href)",
      type: "string",
      description: "Internal path like /services/wordpress, or a full URL.",
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

// { label } — one bullet. Used inside caseHighlight.points and decisionBlock.points.
// A named object (not a plain string) so the array item has a stable _key and a tidy
// Studio row.
export const bulletPoint = defineType({
  name: "bulletPoint",
  title: "Bullet point",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Text", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "label" } },
});

// The single focused evidence block for a page that has ONE strong case study rather
// than a set (e.g. AI & Automation → Biome4Pets). Used by services/solutions/industries
// `caseHighlight`. Render-when-populated: the section only shows when this object is filled.
export const caseHighlight = defineType({
  name: "caseHighlight",
  title: "Case highlight",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "context", title: "Context", type: "text", rows: 3, description: "The situation / what the client faced." }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "bulletPoint" }],
      description: "Key things done, as short bullets.",
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "text",
      rows: 2,
      description: "The confirmed outcome. Only state facts the client can stand behind — never invent a metric.",
    }),
    defineField({
      name: "href",
      title: "Link to the case study",
      type: "string",
      description: "e.g. /case-studies/biome4pets",
    }),
  ],
  preview: { select: { title: "title", subtitle: "eyebrow" } },
});

// { title, description, points[] } — a "Design decisions" / "Technical decisions" block on
// a case-study detail page. Used by caseStudies.designDecisions and caseStudies.technicalDecisions.
// Render-when-populated: the section shows only when filled.
export const decisionBlock = defineType({
  name: "decisionBlock",
  title: "Decision block",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "bulletPoint" }],
      description: "The specific choices and why, as short bullets.",
    }),
  ],
  preview: { select: { title: "title" } },
});

export const sharedObjectTypes = [
  sectionHeading,
  linkCard,
  bulletPoint,
  caseHighlight,
  decisionBlock,
];

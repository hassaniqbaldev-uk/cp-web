// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM FIELDS for the existing `industries` DOCUMENT TYPE.
// IMPORTANT: the running registry listed only `hasPage` for industries, but the site
// reads the SAME shared content fields on industries as on services/solutions (audited
// from queries.industries.js): detailHero, partnerWithUs, expertise (heading + card[]),
// methodology, projectShowcase, caseHighlight, workSlugs, faqs, seo — plus icon, excerpt,
// title. If the industries type in your Studio does not already define those, editors
// cannot edit the sector-specific page content (the problems / "what we build" / FAQs)
// until it does. See the README's editability section.
//
// Requires object types from ./objectTypes.js (sectionHeading, caseHighlight).
// ─────────────────────────────────────────────────────────────────────────────
import { defineField } from "sanity";

// ── TOP-LEVEL fields to add to industries.fields[] ─────────────────────────────
export const industriesCustomFields = [
  defineField({
    name: "hasPage",
    title: "Has a live page",
    type: "boolean",
    initialValue: false,
    description:
      "REQUIRED to surface the industry. ON = the industry has a live page — it appears in the /industries hub and gets a route. OFF/absent = it is a taxonomy tag only (used to categorise case studies), no page, no route. Turning one ON is how you launch a new sector page.",
  }),
  defineField({
    name: "caseHighlight",
    title: "Case highlight",
    type: "caseHighlight",
    description: "A single focused evidence block (render-when-populated). Optional.",
  }),
  defineField({
    name: "workSlugs",
    title: "Work slugs (curated case studies)",
    type: "array",
    of: [{ type: "string" }],
    description:
      "Curated case studies by slug, order preserved — the sector's genuine work. Absent/empty = the honest \"Recent work\" fallback (newest across sectors), never a fake vertical.",
  }),
];

// ── NESTED additions (same shapes as services): if not already present on the industries
//    type, add `label` (string) to detailHero, and a `heading` (type: sectionHeading) to
//    partnerWithUs, expertise and methodology (and projectShowcase if used). Reuse
//    `detailHeroLabelField` / `sectionHeadingField` from ./customFields.services.js.
//
//    `title`, `excerpt`, `icon` (image), `seo`, `faqs`, `detailHero`, `expertise.card[]`
//    are base content fields — include them in the industries type if not already defined.

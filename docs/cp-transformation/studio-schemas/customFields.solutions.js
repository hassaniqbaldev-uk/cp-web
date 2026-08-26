// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM FIELDS for the existing `solutions` DOCUMENT TYPE.
// NOTE: the running registry did not document solutions, but the site reads the same
// shared content fields on solutions as on services (audited from queries.solutions.js).
// Solutions have NO pricing (a goal is reached via services, not priced on its own) and
// NO parentService, so those service fields are intentionally omitted here.
//
// Requires object types from ./objectTypes.js (sectionHeading, linkCard, caseHighlight).
// ─────────────────────────────────────────────────────────────────────────────
import { defineField } from "sanity";

// ── TOP-LEVEL fields to add to solutions.fields[] ──────────────────────────────
export const solutionsCustomFields = [
  defineField({ name: "modularLayout", title: "Modular layout", type: "boolean", initialValue: false, description: "ON = the modular layout (same gate as services; a goal page omits the Investment/pricing section). All current solutions are ON." }),
  defineField({
    name: "specialistLinks",
    title: "Specialist links",
    type: "array",
    of: [{ type: "linkCard" }],
    description: "The related-services band — on a solution these point at the SERVICES that deliver the goal. Hidden unless 2+ links.",
  }),
  defineField({
    name: "specialistLinksHeading",
    title: "Specialist links heading",
    type: "sectionHeading",
    description: "Overrides the header above the specialist-links band. Only meaningful with 2+ links.",
  }),
  defineField({
    name: "caseHighlight",
    title: "Case highlight",
    type: "caseHighlight",
    description: "A single focused evidence block (render-when-populated).",
  }),
  defineField({
    name: "workSlugs",
    title: "Work slugs (curated case studies)",
    type: "array",
    of: [{ type: "string" }],
    description: "Curated case studies by slug, order preserved. Absent = generic set. Empty array = no work section.",
  }),
];

// ── NESTED additions (same as services): add a `heading` (type: sectionHeading) sub-field to
//    the existing detailHero (as `label` string), partnerWithUs, expertise, methodology and
//    projectShowcase objects. Reuse `detailHeroLabelField` and `sectionHeadingField` from
//    ./customFields.services.js — they are identical here. Solutions have no `options` object.

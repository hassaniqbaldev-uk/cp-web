// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM FIELDS for the existing `services` DOCUMENT TYPE.
// These were added during the build and the site already reads them; add them to the
// Studio so editors can manage them. Paste the TOP-LEVEL fields into the services
// type's `fields` array. For the NESTED additions, add the named sub-field to the
// existing object field (detailHero, partnerWithUs, expertise, methodology,
// projectShowcase, options) — do NOT create a second object.
//
// Requires object types from ./objectTypes.js (sectionHeading, linkCard, caseHighlight).
// ─────────────────────────────────────────────────────────────────────────────
import { defineField } from "sanity";

// ── TOP-LEVEL fields to add to services.fields[] ───────────────────────────────
export const servicesCustomFields = [
  // Navigation / mega-menu
  defineField({
    name: "category",
    title: "Category",
    type: "string",
    description:
      "Legacy grouping bucket for the service (\"design-development\", \"growth\", \"support\"). Present on every service in the data. Mega-menu grouping is driven by `pillar` (below), not this — keep `category` in sync if you rely on it anywhere, otherwise it is informational.",
    options: {
      list: [
        { title: "Design & Development", value: "design-development" },
        { title: "Growth", value: "growth" },
        { title: "Support", value: "support" },
      ],
      layout: "radio",
    },
    group: "nav",
  }),
  defineField({ name: "navLabel", title: "Nav label", type: "string", description: "Mega-menu / footer label for the service. Optional — falls back to the document title.", group: "nav" }),
  defineField({ name: "navExcerpt", title: "Nav excerpt", type: "string", description: "Short tagline under the label in the mega-menu. Optional.", group: "nav" }),
  defineField({ name: "navOrder", title: "Nav order", type: "number", description: "Order within its pillar column in the mega-menu. Optional — unset sorts last, then alphabetical.", group: "nav" }),
  defineField({
    name: "pillar",
    title: "Pillar",
    type: "string",
    description: "Groups the service into a pillar (mega-menu + services hub). REQUIRED for the service to appear in the pillar nav — without it the service has no menu home.",
    options: {
      list: [
        { title: "Brand & Experience", value: "brand-experience" },
        { title: "Web & Ecommerce", value: "web-ecommerce" },
        { title: "Growth & Performance", value: "growth-performance" },
        { title: "AI & Automation", value: "ai-automation" },
      ],
      layout: "radio",
    },
    group: "nav",
  }),
  defineField({ name: "specialist", title: "Specialist service", type: "boolean", initialValue: false, description: "Splits pillar display: OFF = primary (leads the pillar card); ON = specialist (shown in the capabilities band). Defaults to primary.", group: "nav" }),

  // Layout / behaviour
  defineField({ name: "modularLayout", title: "Modular layout", type: "boolean", initialValue: false, description: "ON = the modular pillar layout (ProjectShowcase + Investment on; the generic mid-page CTA + global Testimonials off). OFF/absent = the legacy layout. All current services are ON.", group: "layout" }),
  defineField({ name: "warrantyApplies", title: "Warranty applies", type: "boolean", initialValue: true, description: "Whether the post-launch warranty shows (Investment warranty strip + closing-CTA warranty line). Set OFF for services the warranty does not cover (e.g. Branding — a brand does not \"break\"). Defaults ON.", group: "layout" }),

  // Related-services band (cross-links)
  defineField({
    name: "specialistLinks",
    title: "Specialist links",
    type: "array",
    of: [{ type: "linkCard" }],
    description: "The related-services band (links down/sideways). HIDDEN unless there are 2+ links — a single link renders nothing.",
    group: "content",
  }),
  defineField({
    name: "specialistLinksHeading",
    title: "Specialist links heading",
    type: "sectionHeading",
    description: "Overrides the header above the specialist-links band. Leave blank on a specialist page (WordPress/Shopify) for the default \"part of this offer\" framing; set it on a PEER page (e.g. Custom App Development) so its cross-links read as related services, not sub-parts. Only meaningful when specialistLinks has 2+ items.",
    group: "content",
  }),
  defineField({
    name: "parentService",
    title: "Parent service",
    type: "linkCard",
    description: "The \"part of a bigger offer\" band on a SPECIALIST page — links UP to its parent (WordPress → Web Design & Development, Shopify → Ecommerce). Omit on parent/peer pages. Band not rendered if empty.",
    group: "content",
  }),
  defineField({
    name: "caseHighlight",
    title: "Case highlight",
    type: "caseHighlight",
    description: "A single focused evidence block for a page with ONE strong case study rather than a set (e.g. AI & Automation → Biome4Pets). Render-when-populated. Alternative to the Work carousel, not in addition.",
    group: "content",
  }),
  defineField({
    name: "workSlugs",
    title: "Work slugs (curated case studies)",
    type: "array",
    of: [{ type: "string" }],
    description: "Curated case studies for the Work section, by case-study slug, ORDER PRESERVED. Leave the field ABSENT for the generic flagship→supporting→newest set. An EMPTY array means intentionally NO work section (honest opt-out where there is no credible standalone evidence, e.g. CRO). Tip: consider a reference to caseStudies instead of raw slugs if you prefer a picker (would need a small query change).",
    group: "content",
  }),
];

// ── NESTED additions — add each as a sub-field of the NAMED existing object field ──
// detailHero (existing object) → add:
export const detailHeroLabelField = defineField({
  name: "label",
  title: "Hero eyebrow label",
  type: "string",
  description: "Hero eyebrow above the H1. Optional — defaults to \"Our Expertise\".",
});
// partnerWithUs (existing object) → add: { name: "heading", type: "sectionHeading" }
// expertise (existing object, holds `card[]`) → add: { name: "heading", type: "sectionHeading" }
// methodology (existing object) → add: { name: "heading", type: "sectionHeading" }
// projectShowcase (existing object) → add: { name: "heading", type: "sectionHeading" }
// options (existing object) → add: { name: "heading", type: "sectionHeading" }
export const sectionHeadingField = defineField({
  name: "heading",
  title: "Section heading (override)",
  type: "sectionHeading",
  description: "Overrides this section's header. Omit to use the component default.",
});

// Optional field groups for a tidier editor (add to the type's `groups`):
export const servicesFieldGroups = [
  { name: "nav", title: "Navigation" },
  { name: "layout", title: "Layout" },
  { name: "content", title: "Content" },
];

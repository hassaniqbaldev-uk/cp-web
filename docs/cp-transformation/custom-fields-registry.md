# Custom Sanity fields — running registry (Studio setup handover)

**Purpose.** The single, authoritative list of every custom field we add to the Sanity schema during the
build. Content-editing decision (21 Aug 2026): **Option 2 — build everything first, then one Studio setup
pass at the end.** No Studio field definitions are added during the build. This document IS the handover
for that pass, so it must be **kept complete as fields are added**, not reconstructed later.

**How these fields work today.** The data is written to the `staging` dataset via the mutate API and the
GROQ queries read it, so the **site renders correctly**. But because the Studio schema has no definitions
for them yet, **editors cannot see or change them in Sanity Studio** until the setup pass. Until then,
**all copy changes go through Claude, not the Studio** (see the status log).

**Legend.** Required = the feature breaks / the doc misbehaves without it. Optional = safe to omit
(documented fallback applies).

---

## `services`

| Field | Type | Controls | Required? | Fallback if absent |
| --- | --- | --- | --- | --- |
| `navLabel` | string | Mega-menu / footer label for the service | Optional | Falls back to `title` |
| `navExcerpt` | string | Short menu tagline under the label | Optional | Empty string |
| `navOrder` | number | Order within its mega-menu / pillar column | Optional | Sorts last (9999), then alphabetical |
| `pillar` | string enum: `brand-experience` \| `web-ecommerce` \| `growth-performance` \| `ai-automation` | Groups the service into a pillar (mega-menu + services hub) | **Required** to appear in the pillar nav | Not grouped → absent from pillar nav |
| `specialist` | boolean | Splits pillar display: `false` = primary (leads the pillar card), `true` = specialist (capabilities band) | Optional | Treated as `false` (primary) |
| `modularLayout` | boolean | `true` = CP-05 modular pillar layout (ProjectShowcase + Investment on; generic Cta2 + global Testimonials off). `false`/absent = legacy layout | Optional | Legacy layout (the pre-CP-05 pages) |
| `specialistLinks` | array of object `{ label: string, href: string, description: text }` | The related-services band (down/sideways links). **Hidden unless there are 2+ links** | Optional | Section not rendered (0 or 1 link) |
| `specialistLinksHeading` | object `{ label: string, title: string, description: text }` | Overrides the specialist-links band header. Specialist pages (WordPress/Shopify) leave it blank → default "part of this offer" framing; a PEER page (e.g. Custom App Development) sets it to a "related services" framing so its cross-links do not read as sub-parts of its own offer | Optional | Component default ("Specialisms built into this service") |
| `parentService` | object `{ label: string, href: string, description: text }` | The "part of a bigger offer" band on a SPECIALIST page — links UP to its parent (e.g. WordPress → Web Design & Development, Shopify → Ecommerce), so a specialist page reads as part of the parent, not a competitor | Optional | Band not rendered |
| `caseHighlight` | object `{ eyebrow: string, title: string, context: text, points: array of {label}, result: text, href: string }` | A single focused evidence block for a page with ONE strong case study rather than a set (e.g. AI & Automation → Biome4Pets). Presents the confirmed story with weight where the Work carousel (needs several thumbnailed items) cannot | Optional | Not rendered |
| `workSlugs` | array of string (case-study `slug.current` values) | Curated case studies for the Work section, order preserved. **Empty array = intentionally NO work section** (honest opt-out where there is no credible standalone evidence, e.g. CRO) | Optional | Absent → generic flagship→supporting→newest set |
| `warrantyApplies` | boolean | Whether the post-launch warranty shows (Investment warranty strip + closing-CTA warranty line). Set `false` for services the warranty does not cover (e.g. Branding) | Optional | Treated as `true` (warranty shown) |
| `detailHero.label` | string | Hero eyebrow label | Optional | `"Our Expertise"` |
| `partnerWithUs.heading` | object `{ label: string, title: string, description: text }` | Partner-With-Us section header | Optional | Component default (compliant copy) |
| `expertise.heading` | object `{ label, title, description }` | Expertise section header | Optional | Component default |
| `methodology.heading` | object `{ label, title, description }` | Methodology section header | Optional | Component default |
| `projectShowcase.heading` | object `{ label, title, description }` | Good-fit / not-a-fit section header | Optional | Component default |
| `options.heading` | object `{ label, title, description }` | Investment section header | Optional | Component default |

> `projectShowcase` and `options` already existed in the schema (as array containers). The **`.heading`
> objects on them are new.** `options.pricingCard` still exists in the schema but is **no longer read** —
> pricing comes from `src/content/servicePricing.js` (a code single-source; moves to a Sanity pricing
> singleton in a later pass).

## `caseStudies`

| Field | Type | Controls | Required? | Fallback if absent |
| --- | --- | --- | --- | --- |
| `designation` | string enum: `flagship` \| `supporting` \| `archive` | Relevant-work fallback order (tagged → flagship → supporting → newest). `archive` never surfaces via fallback | Optional | Treated as un-designated (sorts after flagship/supporting) |
| `designDecisions` | object `{ title: string, description: text, points: array of {label} }` | The "Design decisions" section on the detail page (CP-12) — the key design choices and why. **Render-when-populated**: the section shows only when this is filled | Optional | Section not rendered |
| `technicalDecisions` | object `{ title: string, description: text, points: array of {label} }` | The "Technical decisions" section on the detail page (CP-12) — the key technical/architecture choices and why. **Render-when-populated** | Optional | Section not rendered |

## `industries`

| Field | Type | Controls | Required? | Fallback if absent |
| --- | --- | --- | --- | --- |
| `hasPage` | boolean | Whether the industry has a live page (appears in nav + gets a route at CP-08) | **Required** to surface the industry | Not shown |

---

_Last updated: 21 Aug 2026 (added `warrantyApplies` for the Branding migration). Update this table in the
same commit as any new field._

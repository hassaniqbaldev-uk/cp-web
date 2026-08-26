# Studio schema handover

Paste-ready Sanity **v3** schema for every custom field the cp-web build added, plus the
new `testimonial` type. Written for someone with **no context on this project**. The site
already reads all of this from the `staging` dataset, so the site renders correctly today —
this pack is only about making the same content **editable in Sanity Studio**.

## Files

| File | What it is |
| --- | --- |
| `objectTypes.js` | 5 reusable **object** types (`sectionHeading`, `linkCard`, `bulletPoint`, `caseHighlight`, `decisionBlock`). Register these first. |
| `testimonial.js` | A complete **new document type**. 11 documents already exist in `staging`. |
| `customFields.services.js` | Fields to add to the existing **services** document type. |
| `customFields.solutions.js` | Fields to add to the existing **solutions** document type. |
| `customFields.industries.js` | Fields to add to the existing **industries** document type. |
| `customFields.caseStudies.js` | Fields to add to the existing **caseStudies** document type. |

## How to apply

1. **Register the object types.** Add the five exports from `objectTypes.js` to your Studio's
   schema type list (the array in `sanity.config.*` / `schema/index.*`).
2. **Add the `testimonial` document type** (default export of `testimonial.js`) to the same list.
3. **Merge the custom fields** into each existing document type's `fields` array:
   - *Top-level fields* (the exported arrays, e.g. `servicesCustomFields`) paste straight into `fields[]`.
   - *Nested additions* (noted in comments): add the named sub-field to the **existing** object field —
     e.g. add `heading` (type `sectionHeading`) to the existing `expertise` object; add `label`
     (string) to the existing `detailHero` object. **Do not create a second object of the same name.**
4. Optionally add the field `groups` (services file exports `servicesFieldGroups`) for a tidier editor.

## Which document types get which fields

| Field | services | solutions | industries | caseStudies |
| --- | :--: | :--: | :--: | :--: |
| `navLabel`, `navExcerpt`, `navOrder`, `pillar`, `specialist` | ✓ | – | – | – |
| `modularLayout` | ✓ | ✓ | – | – |
| `warrantyApplies` | ✓ | – | – | – |
| `specialistLinks`, `specialistLinksHeading` | ✓ | ✓ | – | – |
| `parentService` | ✓ | – | – | – |
| `caseHighlight` | ✓ | ✓ | ✓ | – |
| `workSlugs` | ✓ | ✓ | ✓ | – |
| `detailHero.label` (nested) | ✓ | ✓ | ✓ | – |
| `partnerWithUs.heading` (nested) | ✓ | ✓ | ✓ | – |
| `expertise.heading` (nested; `expertise.card[]` is base content) | ✓ | ✓ | ✓ | – |
| `methodology.heading` (nested) | ✓ | ✓ | ✓ | – |
| `projectShowcase.heading` (nested) | ✓ | ✓ | ✓ | – |
| `options.heading` (nested) | ✓ | – | – | – |
| `hasPage` | – | – | ✓ | – |
| `designation` | – | – | – | ✓ |
| `designDecisions`, `technicalDecisions` | – | – | – | ✓ |

> **Registry correction.** The build's running registry (`custom-fields-registry.md`) documented
> the shared content fields under **services only** and listed **industries** as just `hasPage`, and
> did not cover **solutions** at all. The table above is the audited truth: industries and solutions
> read the same shared content fields as services. If your existing industries/solutions types don't
> already define `detailHero`, `expertise.card[]`, `partnerWithUs`, `methodology`, `projectShowcase`,
> `faqs`, `seo`, add those too (they are the same shapes as on services) — otherwise the sector/solution
> page bodies stay uneditable.

## Desk structure / navigation

- **Testimonials** are a flat list — add a list pane sorted by the `order` field (the type ships an
  `orderAsc` ordering). No nesting or references needed.
- No other desk changes are required; the custom fields live inside document types that already have
  desk entries.

## Data population — does anything need data before it works?

- **testimonial** — 11 documents already exist. Keep **exactly one** `featured` (currently AlertForce),
  and keep `order` contiguous; the homepage bento uses the first four by order.
- **workSlugs / parentService / specialistLinks[].href** hold raw strings that must match real
  case-study slugs / routes. There is no referential integrity — a typo silently drops the item.
- **pillar** (services) must be set or the service vanishes from the mega-menu.
- Everything else is optional and has a component default, so blank is safe.

## Cross-field dependencies (call these out to editors)

- `specialistLinksHeading` only shows when `specialistLinks` has **2+** items.
- `featuredImage` (testimonial) only shows on the **`featured`** testimonial's card.
- `workSlugs` **absent** = generic set; **empty array** = *no* work section (deliberate). These are different.
- `caseHighlight` is an **alternative** to the Work carousel, not shown in addition.
- `parentService` (up-link) and `specialistLinks` (down/side-links) are opposite ends — a specialist page
  sets `parentService`; a parent/peer page sets `specialistLinks`.

## What this makes editable — and what still needs a developer

**Editable in Studio after this pack** (document content that already comes from Sanity):
services, solutions, industries and case-study pages (their titles, SEO, hero, section headings, the
"what we do / build" cards, methodology, fit section, FAQs, curated work, case highlights, decisions),
legal pages, blog posts, the author/founder, and now **testimonials**.

**Still in code — a developer is required to change these** (they are NOT in Sanity):

| Area | Where it lives |
| --- | --- |
| **The entire homepage copy** — hero, the pillar feature blocks, "Why CreativePixels" (the four cards), founder blurb, stats | `src/app/(home)/home/HomePage.jsx`, `src/components/sections/**` (e.g. `established/Established.jsx`) |
| **Footer + mobile navigation, and the Solutions/About mega-menus** | `src/contants/navigation.js` (MAIN_NAV, DESIGN/GROWTH/SUPPORT_SERVICE_NAV, GOAL/SECTOR_SOLUTION_NAV, COMPANY_ABOUT_NAV). *Only the Services mega-menu is Sanity-driven; the rest are hardcoded constants.* |
| **Footer contact details + social links** | `src/components/layout/Footer.jsx`, `src/contants/{contact,social}.js` |
| **Service/solution pricing** | `src/content/servicePricing.js` |
| **Company facts** (founded year, years in business, projects delivered, team size) | `src/content/company.js` |
| **Every section's DEFAULT copy** (the fallback headings the Sanity `heading` fields override) | the section components in `src/components/sections/**` |
| **Per-route metadata** (homepage, /case-studies hub, etc. `<title>`/description) and **redirects** | each route's `generateMetadata`, `next.config.mjs` |
| **Homepage curated work selection** | `src/content/homepage.js` (SELECTED_WORK_SLUGS) |

**Bottom line:** adding this pack makes the **per-page document content** (services, solutions,
industries, case studies, blog, legal, testimonials) fully editable without a developer. But a
meaningful layer — the **whole homepage**, the **footer/mobile nav and contact details**, **pricing**,
**company facts**, **section default copy**, **route metadata** and **redirects** — is still code, and
changing any of it needs a developer. Moving those into Sanity (a homepage singleton, a navigation/settings
singleton, a pricing singleton) would be a separate, larger piece of work, not part of this pack.

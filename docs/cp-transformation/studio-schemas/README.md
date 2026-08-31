# Studio schema handover — verified against the staging data

Paste-ready Sanity **v3** schema for the CreativePixels site (project `4m0eqoi1`, dataset `staging`).
Written for someone with **no prior context**. The site already reads all of this from the dataset, so the
site renders correctly today — this pack is only about making the same content **editable in Sanity Studio**.

Every field here was **cross-checked against the actual documents in `staging`** (introspected 18 services,
4 solutions, 42 industries, 33 case studies, 11 testimonials). Findings are in "Verification" below.

---

## Files

| File | What it is | When to use |
| --- | --- | --- |
| `objectTypes.js` | Reusable **object** types. `sharedObjectTypes` (sectionHeading, linkCard, bulletPoint, caseHighlight, decisionBlock) + `contentObjectTypes` (expertiseCard, methodologyStep, partnerCard, faqItem). | Always register `sharedObjectTypes`. Register `contentObjectTypes` only if you also add the content fields (below). |
| `testimonial.js` | Complete **new document type**. 11 docs already exist. | Always. |
| `customFields.services.js` | **Custom** fields to add to the existing `services` type. | Always. |
| `customFields.solutions.js` | **Custom** fields for `solutions`. | Always. |
| `customFields.industries.js` | **Custom** fields for `industries`. | Always. |
| `customFields.caseStudies.js` | **Custom** fields for `caseStudies`. | Always. |
| `contentFields.shared.js` | **Content** fields shared by services/solutions/industries (hero, cards, FAQs…). | **Only if** your base type doesn't already define them — see Verification. |

---

## Verification (what was checked, and what changed)

**1. Every custom field in the data is now in the pack.** Cross-checking the live documents against the
files turned up **two custom fields that existed in the data but were missing from the pack** — both now
added:

- **`category`** — on services, solutions and industries. It is **live-used**: the `/solutions` hub filters
  on `category == "goal"` / `"industry"` and the mega-menu's goal list reads it. Missing it would leave those
  documents un-bucketable in Studio. Added to all three custom-fields files (a required radio on solutions).
- **`order`** — a numeric sort field on industries and case studies (testimonials already had it). Added.

Everything else the pack already covered is present in the data (navLabel/navExcerpt/navOrder/pillar/
specialist/modularLayout/warrantyApplies/workSlugs/specialistLinks/specialistLinksHeading/parentService/
caseHighlight on services; the same minus the service-only ones on solutions; hasPage on industries;
designation/designDecisions/technicalDecisions on caseStudies; the whole testimonial type).

**2. Field names match what the queries expect — confirmed.** Sanity stores document data by field **key**,
independent of any schema. The site's GROQ queries read these exact keys and render, which proves the keys.
Every schema field `name` in this pack is spelled to match that key exactly (e.g. `workSlugs`,
`specialistLinksHeading`, `caseHighlight`, `parentService`, and the nested `expertise.card` / `.heading`).
**This is the thing that makes the existing content connect** — a wrong name would show an empty field in
Studio and leave the real data as a hidden "unknown field."

**3. The one thing this pack cannot self-verify.** The pack's four `customFields.*` files are the fields the
**build added** (no Studio definition yet). They assume the **base content objects already exist in your
Studio schema** — `detailHero`, `expertise.card`, `methodology.card`, `partnerWithUs.card`,
`projectShowcase` (fit/not-fit), `options.includeCard`, `faqs`, `excerpt`, `icon`, and on case studies
`clientOverview`/`theChallenge`/`ourApproach`/`theSolution`/`thumbnailImage`/`detailHero`/the reference
arrays/the colour fields. The registry and build treated these as pre-existing (the `.heading`/`.label`
custom fields were *added to* them), and the site renders from them. **I could not confirm this without the
Studio repo.** So: use the manifest below to check your base type field-by-field. If a content field is
missing (or there is no base type at all), add it from `contentFields.shared.js` (shared types) — the
case-study content objects are listed in the manifest if you need them authored, ask.

---

## What happens to existing content when these are added

**The values already in the data appear in the new fields automatically. Nothing needs re-saving.**

Sanity stores each document's data as JSON keyed by field name; the schema only tells Studio how to *render*
those keys. The moment a schema field whose `name` matches an existing key is deployed, that value shows up
in Studio, editable, on every existing document — no migration, no re-publish.

Two caveats, both handled here:
- **Type must match the shape.** If you declared `workSlugs` as a `string` but the data is an array, the
  field shows but can't edit correctly. The types in this pack match the data shapes (verified).
- **Name must match the key.** A mismatch = empty new field + the real value hidden as an "unknown field."
  All names here match (point 2 above).

The only content that will *not* appear is content that isn't in the data yet — e.g. `designDecisions` /
`technicalDecisions` are defined but **empty on all 33 case studies**, so those sections stay hidden until
someone fills them (by design).

---

## Field manifest (verify your base type against this)

Legend: **[pack]** = a `customFields.*` file in this pack defines it · **[content]** = pre-dates the build,
must exist in your base type (definition in `contentFields.shared.js` if missing) · **[base]** = a standard
field every Studio type already has.

### services
`title`[base] · `slug`[base] · `seo`[content] · `excerpt`[content] · `icon`[content] · `category`[pack] ·
`detailHero`{label[pack],title,description,caseStudiesLink}[content] · `partnerWithUs`{heading[pack],card[]}[content] ·
`expertise`{heading[pack],card[]}[content] · `methodology`{heading[pack],card[]}[content] ·
`projectShowcase`{heading[pack],fitCard[],notFitCard[]}[content] · `options`{heading[pack],includeCard[]}[content] ·
`faqs[]`[content] · `caseHighlight`[pack] · `workSlugs`[pack] · `specialistLinks`[pack] ·
`specialistLinksHeading`[pack] · `parentService`[pack] · `navLabel`·`navExcerpt`·`navOrder`·`pillar`·`specialist`[pack] ·
`modularLayout`·`warrantyApplies`[pack]

### solutions
Same as services **minus** `options`, `parentService`, `pillar`, `specialist`, `warrantyApplies`. `category`[pack]
is **required** here (drives hub grouping). Has `navLabel/navExcerpt/navOrder`[pack], `modularLayout`[pack],
`specialistLinks`/`specialistLinksHeading`[pack], `caseHighlight`[pack], `workSlugs`[pack].

### industries
`title`·`slug`·`seo`·`excerpt`·`icon`[content/base] · `category`[pack] · `order`[pack] · `hasPage`[pack] ·
`detailHero`{label[pack],title,description,caseStudiesLink,heroImage}[content] · `partnerWithUs`[content] ·
`expertise`[content] · `methodology`[content] · `projectShowcase`[content] · `faqs[]`[content] ·
`caseHighlight`[pack] · `workSlugs`[pack]

### caseStudies
`title`·`slug`·`seo`·`excerpt`[content/base] · `thumbnailImage`(image)[content] · `designation`[pack] ·
`designDecisions`[pack] · `technicalDecisions`[pack] · `order`[pack] ·
`detailHero`{ctaButton,heroElement,heroImage}[content] · `clientOverview`{title,description,cardImage}[content] ·
`theChallenge`{title,description,points,cardImage1,cardImage2}[content] · `ourApproach`{title,description,points,cardImage}[content] ·
`theSolution`{title,description,cardImage}[content] · `capabilities[]`→capability · `services[]`→services ·
`technologies[]`→technology · `industries[]`→industries (all reference arrays)[content] ·
`customCode`·`iconBg`·`iconColor`·`primaryColor`·`secondaryColor`[content]

### testimonial — fully defined in `testimonial.js`
`name`·`company`·`quote`·`rating`·`avatar`·`featuredImage`·`featured`·`order`

### Other document types the site uses (not in this pack)
`blog`, `legalPage`, `author`, `capability`, `technology` also exist and render. They are base content types
(the original schema); this pack does not touch them. If any lacks a Studio definition, editors can't edit
it — verify. Their data fields: **blog** = title, slug, seo, excerpt, author, category, content, coverImage,
featured, pillar, publishedAt, readTime, tags. **legalPage** = title, slug, seo, category, color, icon,
introText, sections, excerpt. **author** = name, role, image. **capability/technology** = title, slug, hasPage.

---

## How to apply (step by step)

1. **Register object types** in your Studio schema list (`schema.types` in `sanity.config.*`, or the array
   in `schema/index.*`): the five in `sharedObjectTypes`. Add the four in `contentObjectTypes` **only if**
   you also add the shared content fields.
2. **Add the `testimonial` document type** (default export of `testimonial.js`) to the same list.
3. **Merge the custom fields** into each existing document type's `fields` array:
   - Top-level exports (`servicesCustomFields`, `solutionsCustomFields`, `industriesCustomFields`,
     `caseStudiesCustomFields`) paste straight in.
   - The **nested** additions (commented in each file): add the named sub-field to the **existing** object
     field — e.g. add `heading` (type `sectionHeading`) to the existing `expertise` object, `label` to
     `detailHero`. Do **not** create a second object of the same name.
   - Optional: add the field `groups` (services exports `servicesFieldGroups`) for a tidier editor.
4. **Only if the manifest shows your base type is missing a `[content]` field:** add it from
   `contentFields.shared.js` (and register `contentObjectTypes`).
5. **Desk / structure:** add a **Testimonials** list pane sorted by the `order` field (the type ships an
   `orderAsc` ordering). No other desk change is required.
6. Deploy the Studio to the same project/dataset (`4m0eqoi1` / `staging`).

## What to check after deploying (confirm it worked)

1. Open an existing **service** (e.g. WordPress), **solution**, **industry**, **case study**, and a
   **testimonial**. The existing values must already be **filled in** the new fields — not blank.
2. There should be **no "unknown field" / "field not defined in schema"** warnings on those documents for
   the fields in this pack. (Warnings on `blog`/`legalPage` mean those base types still need schemas.)
3. On a **solution**, confirm `category` shows its value (goal/industry) and is a dropdown.
4. Edit one field (e.g. a service FAQ answer), **publish**, then load that page on the site after the ISR
   window (revalidate is 3600s, or trigger a redeploy) and confirm the change shows.
5. Confirm the site still renders everything (no field was accidentally renamed).

## What could break the existing Studio if done wrong

- **Duplicate field name.** If your base type *already* defines a field this pack adds (most likely a
  `[content]` field, or `seo`/`excerpt`/`icon`), adding it again throws a "duplicate field" schema error and
  the Studio won't start. Fix: add each field **once** — diff against the base using the manifest.
- **Type mismatch.** Declaring a field with a different `type` than the data shape (e.g. `workSlugs` as
  string not array) makes the value unreadable in Studio. Use the types as written.
- **Renaming/removing a base field.** If you replace a base object wholesale and drop a sub-field that has
  data, that data is orphaned (still in the document, hidden). Only add; don't remove.
- **Wrong project/dataset.** Deploy to `4m0eqoi1` / `staging`. Pointing the Studio at a different dataset
  shows empty documents and looks like data loss.
- **Object type not registered.** A field of `type: "sectionHeading"` (etc.) with the object type not in the
  schema list throws "unknown type". Register the object types first (step 1).
- **None of this touches the data.** Adding schema is safe for content — the worst case is a Studio that
  won't start (a code fix), never lost documents.

---

## What is editable after this — and what still is not

**Editable in Studio after this pack** (per-document content that comes from the dataset):
services, solutions, industries and case-study pages — their **hero, section headings, the "what we do /
build" cards, the process steps, the fit/not-fit lists, FAQs, investment "what's included", curated work,
case highlights, SEO, nav labels, pillar/category grouping, and (case studies) the challenge/approach/
solution/decisions** — plus **testimonials**, and the base **blog / legal / author** types (assuming their
schemas exist). In short: the individual pages under /services, /solutions, /industries, /case-studies,
/blog, /legal, and the testimonials, become editable without a developer.

**Still in code — a developer is required** (NOT in Sanity):

| Area | Where it lives |
| --- | --- |
| The entire **homepage** (hero, pillar blocks, "why" cards, founder blurb, stats) | `src/app/(home)/home/HomePage.jsx`, `src/components/sections/**` |
| **Footer + mobile navigation, and the Solutions/About mega-menus** (only the Services mega-menu is data-driven) | `src/contants/navigation.js` |
| **Footer contact details + social links** | `src/components/layout/Footer.jsx`, `src/contants/*` |
| **Pricing** | `src/content/servicePricing.js` |
| **Company facts** (founded year, projects, team size) | `src/content/company.js` |
| Each section's **default copy** (the fallback headings the Sanity `heading` fields override) | `src/components/sections/**` |
| **Per-route metadata** and **redirects** | each route's `generateMetadata`, `next.config.mjs` |

**Bottom line:** this makes the document-driven pages (services, solutions, industries, case studies,
testimonials, blog, legal) fully editable. The **homepage, the footer/mobile navigation, pricing, company
facts, section defaults, route metadata and redirects stay in code** and need a developer until they are
migrated separately (there is a homepage-migration plan for the first of those).

# CP-00K — Migration plan (Step 2a)

**Status:** Planning only. Nothing migrated, no schema changed, no new Sanity project
created. This document is the artefact Hassan signs off before any transform runs.
**Blocks:** Step 2b (the migration itself).
**Prepared:** 13 August 2026, from live queries of all five production datasets.

Cross-references: `CP-00K-content-platform-decision.md` (O8, Option A),
`CP-00K-taxonomy-reconciliation.md` (O11 ruleset), `CP-00K-validation.md`.

Where this plan disagrees with the O11 ruleset, section 5 says so plainly.

---

## 1. Reconciliation mapping table

This is the sign-off artefact. The transform script is written against this table, not
against judgement calls that only exist in conversation. All data captured live on
13 Aug 2026.

### 1a. Case-study service tags → target (20 tags, project `6qygzc2z`)

Rule: tags that match a real service reference that service; the rest become
`technology` or `capability` per D28. **No tag maps to nothing.**

| CS service tag | Target type | Target | Notes |
| --- | --- | --- | --- |
| `accessibility` | service | `accessibility` | |
| `analytics` | service | `analytics` | |
| `branding` | service | `branding` | |
| `cro` | service | `cro` | |
| `custom-apps-and-ai` | service | **`custom-app-development`** | D15 split; existing users are app builds, not AI. See note. |
| `email` | service | `email` | |
| `maintenance` | service | `maintenance` | |
| `migrations` | service | `migrations` | |
| `ppc` | service | `ppc` | |
| `security` | service | `security` | |
| `seo` | service | `seo` | |
| `shopify` | service | `shopify` | also a `technology` (D28 dual, intended) |
| `speed` | service | `speed` | |
| `ui-ux-design` | service | `ui-ux-design` | |
| `wordpress` | service | `wordpress` | also a `technology` (D28 dual, intended) |
| `webflow` | technology | `webflow` | `hasPage:false` |
| `woocommerce` | technology | `woocommerce` | `hasPage:false` |
| `brochure` | capability | `brochure` | `hasPage:false` |
| `custom-forms` | capability | `custom-forms` | `hasPage:false` |
| `print` | capability | `print` | `hasPage:false` |

**`custom-apps-and-ai` note.** After the D15 split there are two services,
`custom-app-development` (Web & Ecommerce) and `ai-automation` (AI & Automation). The
only case study using this tag is Anthony Walker Foundation (an LMS platform, i.e. a
custom app), so the tag repoints to `custom-app-development`. No existing case study is
an AI/automation project, so `ai-automation` starts with zero case-study references.

**Recorded finding (approved 13 Aug):** `ai-automation` will have **zero case studies**
after migration. This is a **commercial** finding for CP-05 (service page) and CP-12
(proof), not a migration problem. Do not invent case-study tags to populate it.

### 1b. Industries, deduplicated (35 CS + 9 solution → 33 canonical)

Rule (D28): nothing deleted, every industry gets `hasPage`, default `false`, `true`
only for the four CP-08 candidates. The 9 solution industries (D29) migrate into this
type. CS industries are descriptive metadata for the work hub.

**Commercial industries (merged from both sources):**

| Canonical slug | Title | hasPage | Merged from |
| --- | --- | --- | --- |
| `b2b-services` | B2B & Professional Services | **true** | sol `b2b-services`, cs `b2b` |
| `technology-and-saas` | Technology & SaaS | **true** | sol `saas-companies`, cs `saas`, cs `technology` |
| `ecommerce-brands` | Ecommerce Brands | **true** | sol `ecommerce-brands`, cs `ecommerce` |
| `charities-and-non-profits` | Charities & Non-profits | **true** | sol `charities-and-foundation`, cs `charity-non-profit` |
| `interiors-and-furnishings` | Interiors & Furnishings | false (O6) | sol `interiors-and-furnishings`, cs `interiors`, cs `interiors-and-furnishings` |
| `driving-schools` | Driving Schools | false (O6) | sol `driving-schools`, cs `driving-schools` |
| `pharmacies` | Pharmacies | false (O6) | sol `pharmacies`, cs `pharmacies` |
| `restaurants` | Restaurants | false (O6) | sol `restaurants`, cs `restaurants` |
| `sme-founders` | SME Founders | false | sol `sme-founders`, cs `smes` (segment, not strictly an industry) |

**Descriptive-only industries (CS metadata, all `hasPage:false`), 24:**
`photography`, `hospitality`, `leisure`, `media-and-publishing`, `fashion`,
`home-improvement`, `property-marketing`, `food`, `training`, `education`, `housing`,
`gaming`, `financial-services`, `events`, `entertainment`, `family-entertainment`,
`travel`, `children`, `retail`, `public-sector` (slug fix), `energy` (slug fix),
`creative`, `jewellery`, `startup`.

The four `hasPage:true` merges (b2b, technology/saas, ecommerce, charities) are the
CP-08 candidates. O6 (interiors, driving-schools, pharmacies, restaurants) are `false`
and flippable per D28 once Hassan decides. Every proposed merge above is a judgement
call for Hassan to confirm; the granular tags are preserved either way (nothing lost).

### 1c. Tools → technology (6 entries, project `6qygzc2z`)

`tools` has only `toolImage` + `altText` today (no title, no slug), so D33 adds both.

| Current `altText` | Proposed title | Proposed slug |
| --- | --- | --- |
| Elementor | Elementor | `elementor` |
| Adobe Illustrator | Adobe Illustrator | `adobe-illustrator` |
| Figma | Figma | `figma` |
| Shopify | Shopify | `shopify` |
| Webflow | Webflow | `webflow` |
| Wordpress | WordPress | `wordpress` (title casing fixed) |

**Unified `technology` taxonomy** = these 6 tools + the 2 tag-derived techs
(`webflow`, `woocommerce`) → **7 unique**: `elementor`, `adobe-illustrator`, `figma`,
`shopify`, `webflow`, `wordpress`, `woocommerce`. `shopify`/`wordpress`/`webflow` are
deduplicated to one technology doc each (they appear in both `tools` and the tags), and
`shopify`/`wordpress` also keep their service pages (D28 dual). Note: Figma and Adobe
Illustrator are design tools rather than delivery platforms; they are fine as
`technology` per D33, but flag if you want a tool/platform distinction later.

### 1d. Blog categories → pillars (project `dgx0l3po`)

**The blog has 4 categories, not 8.** Distinct live values: `STRATEGY`, `DESIGN`,
`DEVELOPMENT`, `GROWTH`. Proposed pillar mapping:

| Blog category | Pillar |
| --- | --- |
| `DESIGN` | Brand & Experience |
| `DEVELOPMENT` | Web & Ecommerce |
| `GROWTH` | Growth & Performance |
| `STRATEGY` | Growth & Performance (default; strategy posts are positioning/growth) |

**Gap (flagged): no category maps to AI & Automation.** The one AI post ("AI Automation
in 2026: What Businesses Need to Know") is currently `GROWTH`. A pure category→pillar map
cannot pillar-tag it as AI. Recommendation: replace the blog `category` enum with the
four pillar values directly and manually re-tag that one post to AI & Automation during
the transform (a single per-document override). See section 5, disagreement 1.

### 1e. Case studies that end with zero service references

After reconciliation, a case study is serviceless only if all its tags are
`capability`/`technology`. Checked all 31 against their live tags:

- **UNICEF** — tags `brochure` + `print`, both `capability`. **Zero service references.**

This is consistent with the crawl finding that UNICEF is a fundraising-event print
suite, not a web build. **Decision (Hassan, 13 Aug): leave UNICEF with zero service
references.** Assigning a service to fill an empty field would invent a service
association, which the truth constraint prohibits. UNICEF stays as a logo and
credibility proof, keeps its `brochure`/`print` capabilities, and is **excluded from the
relevant-work module on service pages** (it has no service to be relevant to).

**A case study may legitimately hold zero service references.** This is a valid state,
not an error to be fixed. The migration must not force a service onto any serviceless
case study, and the verification step must not treat zero-service as a failure. UNICEF
is the only such case today; others may arise as tags are curated.

### 1f. Malformed slugs → normalised

| Current slug | Normalised | Type |
| --- | --- | --- |
| `Energy` | `energy` | cs industry |
| `Public Sector` | `public-sector` | cs industry |

Trailing-whitespace **titles** to trim (slugs are already valid): "Leisure ",
"Media & Publishing ", and the case-study title "West Midlands Racial Justice
Initiative ".

**O12 satisfied:** no `/industries/` routes exist today and industries are not URL
segments anywhere (they are reference tags only), so normalising these slugs breaks no
live URL. Confirmed against the route inventory in `03-url-audit.md`.

---

## 2. Services / Solutions merge recommendation

**Recommendation: keep two document types (`services`, `solutions`) sharing extracted
object/field definitions. Do not merge into one discriminated type.**

Context: the schemas are structurally identical (same 18 fields including the
`partnerWithUs2`/`expertise3` artefacts; only `category` differs). After D29 the 9
industry-solutions leave for the `industry` type, so `solutions` shrinks to the 5
goal-based entries.

Reasoning, including routing:

- **Routing stays clean and unchanged.** `/services/[slug]` and `/solutions/[slug]` are
  separate routes today and stay separate (no URL change before CP-15). With two types,
  each route queries its own `_type` by slug: simple and unambiguous. With one
  discriminated type, both routes query the same type filtered by a `kind` discriminator,
  so every query must remember the filter, and a missed filter renders a solution at
  `/services/...` or vice versa.
- **Slug integrity.** Sanity uniqueness is per document type. Two types namespace slugs
  cleanly. Under one type, a service and a goal-solution could both take slug
  `wordpress` and collide, with nothing to warn the editor.
- **Fields will diverge.** Services get `pillar` and the investment module; goal-solutions
  are outcome entry points that will grow different fields. A discriminated type forces
  conditional `hidden`/`readOnly` field logic; two types keep each schema honest.
- **The IA already separates them** (CP-06 Services Hub vs CP-07 Solutions), and
  industries are becoming their own type. A merged service/solution type would be the
  outlier.
- **Migration is lighter** with two types: keep `_type:"services"` and
  `_type:"solutions"`, move only the 9 industry docs out. A merged type means rewriting
  every service and solution `_type` plus adding a discriminator.

The only argument for merging is DRY across the 18 shared fields, and that is solved by
**extracting the shared fields/objects into reusable schema definitions** spread into
both types. Do the `partnerWithUs2`/`expertise3` renames once, in those shared
definitions. Also note (from the schema export) **`solutions` has zero reference fields
today** — real references (to services, industries, case studies) are added during
consolidation regardless of this decision.

---

## 3. Confirmed estimate

**Confirmed range 6 to 8 days is right; plan for 8, with a 1-day buffer to 9.** The
schema review de-risked the collision and reference work, but three items keep it at the
top of the range: the two brand-new taxonomies (`technology`, `capability`), adding
references to `solutions` (it has none today), and the D25 draft/preview/webhook
revalidation work, plus the 852-asset import.

| Step | Work | Days |
| --- | --- | --- |
| 1 | New project + datasets (`production`, `staging`), private + read token (D24); author the unified schema (shared service/solution objects, `pillar`, `technology`, `capability`, `industry` with `hasPage`, `title`/`slug` on ex-tools, D15 split, field renames, real solution references) | 1.5 |
| 2 | Export all five projects **with assets** as backups; stand up Studio | 0.5 |
| 3 | Transform scripts against the section-1 table (drop `services` stub + repoint refs by slug; 9 solutions→industry; dedupe industries + `hasPage`; tools→technology; blog category→pillar + AI re-tag; slug normalisation; custom-apps-and-ai split; UNICEF flag) + **dry run** with counts | 2 |
| 4 | Import into the new project (assets via `dataset import`) + integrity verification | 1 |
| 5 | Code refactor: five clients → one, rewrite all GROQ, consolidate env vars, add draft mode / preview / webhook on-demand revalidation (D25) | 1.5–2 |
| 6 | Full verification, cutover, buffer | 0.5–1 |

**Total: 7 to 9 days.** The asset import (step 4) and the D25 preview/webhook work
(step 5) are the overrun risks, not the taxonomy, now that the mapping table exists.

---

## 4. Migration plan (order of operations)

Principle: build the new project alongside the old five; never migrate in place; make
cutover a config change, not a restore.

1. **Backups first.** `sanity dataset export` each of the five projects (includes asset
   binaries) to dated archives. Nothing else starts until the five archives exist and
   their document/asset counts are recorded.
2. **Stand up the new project.** One project, two datasets (`production`, `staging`),
   both **private**, with a server-side read token (D24). Author the unified schema
   (section 3, step 1). No content yet.
3. **Write the transform**, driven entirely by the section-1 table: rename/drop the
   `services` stub and repoint case-study refs by slug; move the 9 industry-solutions to
   `industry`; dedupe industries and set `hasPage`; convert tools to `technology` with
   title/slug; map blog category to pillar and re-tag the AI post; normalise the two
   slugs; split `custom-apps-and-ai`; leave asset references untouched (the import
   remaps them).
4. **Dry run into `staging`.** Import transformed NDJSON + assets into the new project's
   **staging** dataset. Verify counts and spot-check before touching production-equivalent
   data. Fix the transform and re-run until clean. (Staging here is the new project's
   staging, which is isolated, unlike the old projects.)
5. **Production import.** Once the dry run is clean, import into the new project's
   `production` dataset.
6. **Wire the code on a branch.** One `sanity` client, rewritten GROQ, consolidated env
   vars, draft mode + preview + webhook revalidation. Point env vars at the **new**
   project. Deploy to a Vercel preview and run the QA checklist.
7. **Cutover by env var.** Flip the production Vercel environment's Sanity env vars from
   the five old projects to the new project. Because selection is env-var driven, cutover
   and rollback are config changes, not restores.
8. **Rollback path.** If anything fails post-cutover, revert the Vercel env vars to the
   five old projects (kept read-only, not deleted) and redeploy. No data restore needed.
9. **Decommission gate.** Keep the five old projects **read-only for 30 days** after
   cutover. Only then archive them.

**Verified before decommissioning the old projects:**

- Document counts match the transform's expected output (content docs, per type).
- Asset counts match (852 images expected) and a sample of rendered images resolve via
  the new project's CDN.
- Every dynamic route renders for a sampled slug per type (`services`, `solutions`,
  `industry` pages that are `hasPage:true`, `case-studies`, `blog`, `legal`).
- No case study is unintentionally serviceless except the known UNICEF flag.
- All 26 hardcoded nav deep-links still resolve (per `03-url-audit.md`).
- `next build` clean; sitemap regenerates from the new project; no broken references
  (Sanity reference integrity holds within the single project).
- Draft mode / preview / webhook revalidation work in the Vercel preview.

---

## 5. Where I disagree with `CP-00K-taxonomy-reconciliation.md`

Neither is a blocker; both are cheaper to fix now than mid-migration.

1. **Blog is described as a "fourth taxonomy" that maps to the four pillars, but its 4
   categories do not cover AI & Automation.** A straight category→pillar map silently
   drops AI content into another pillar. Fix: replace the blog `category` enum with the
   four pillar values and manually re-tag the single AI post during the transform, rather
   than treating it as a clean 1:1 map. (The ruleset also implies "8 categories"; there
   are 4.)
2. **The technology examples in the ruleset (Laravel, React, Next.js, LearnDash) do not
   exist in the data.** The actual `technology` seed is 7 entries (section 1c). Not a
   problem, but the migration seeds `technology` from the real tools + 2 tags, and any
   broader tech list is net-new content to be added later, not migrated.
3. **UNICEF becomes serviceless** under the ruleset's own rules (its only tags are
   capabilities). I originally recommended assigning `branding`; **Hassan overruled that
   (13 Aug)** on the correct grounds that assigning a service to fill an empty field
   invents an association. UNICEF stays with zero service references (see 1e). Zero
   service references is a legitimate state, not an error.

Everything else in the ruleset holds: the four-taxonomy model, nothing-deleted +
`hasPage`, the 9 solutions → `industry`, and slug normalisation are all correct and
supported by the data.

---

## 6. Decision

**Signed off by Hassan, 13 August 2026**, with one amendment:

- **Mapping table:** approved. Amendment: UNICEF stays with zero service references (not
  assigned `branding`); zero service references is a legitimate state (sections 1e, 5).
- **Services/Solutions:** two types sharing objects (approved; slug-collision and
  wrong-route arguments accepted).
- **Blog:** enum replaced with the four pillars; AI post manually re-tagged (approved).
- **Estimate:** plan for 8 days, buffer to 9 (approved).
- **Migration plan:** approved as written (backups-first, dry-run to staging, env-var
  cutover, env-var rollback, 30-day read-only gate before decommission).
- **Industry mapping + `hasPage`, tools→technology titles/slugs, slug normalisation
  (O12 safe):** approved.

Step 2b (the migration) may now begin, stopping for review after the backups and the
dry-run into the new project's staging dataset, before anything touches production.

---

## 7. Step 2b run log

### Backups — DONE (17 Aug 2026)

All five projects exported with assets via `sanity dataset export` (authenticated CLI,
`hassan.iqbal@cp.agency`, which owns all five projects). Archives are dated tarballs
(documents + `assets.json` + `images/` + `files/`). Read-only to Sanity; nothing was
written to any production dataset.

| Project | Project ID | Archive size | Assets |
| --- | --- | --- | --- |
| Legal hub | `pz9kcb6n` | 63 KB | 12 |
| Services | `cqbs7syw` | 4.1 MB | 229 |
| Solutions | `z2m53qom` | 1.3 MB | 171 |
| Blog | `dgx0l3po` | 107 MB | 75 |
| Case studies | `6qygzc2z` | 165 MB | 365 |
| **Total** | | **~277 MB** | **852** |

Note: the archives were written to the session scratchpad to validate the step and read
counts. **Before the real migration they must be re-exported to durable, dated storage**
(the scratchpad is ephemeral). This does not change the counts below.

### Source verification counts (from the authenticated exports — the dry-run baseline)

| Project | Content docs | Published | Drafts | Breakdown (published) |
| --- | --- | --- | --- | --- |
| Legal | 7 | 7 | 0 | 7 legalPage |
| Services | 15 | 15 | 0 | 15 services |
| Solutions | 15 | 14 | 1 | 14 solutions |
| Blog | 48 | 10 | 38 | 9 blog + 1 author |
| Case studies | 101 | 92 | 9 | 40→31 caseStudies + 35 industries + 20 service-tags + 6 tools |
| **Total** | **186** | **138** | **48** | plus 852 image assets |

Published content = 138 (matches the earlier estimate). The dry-run's post-transform
counts will be checked against these.

### Correction: there ARE drafts (48), not zero

Earlier (`CP-00K-validation.md`, `13-implementation-status.md`) I recorded "0 drafts",
based on the **anonymous** public API, which does not return draft documents. The
**authenticated** export reveals **48 drafts**: 38 in blog (draft versions plus
unpublished posts), 9 case studies, 1 solution. This corrects the record. It does not
change the D24/D25 rationale, but it does add a migration decision (below). (Note: the
draft-exposure wording in D24 is also worth revisiting — anonymous reads on a public
dataset return published docs only; drafts require a token. The public-dataset risk is
real for published content and for anyone issued a token, but drafts are not anonymously
readable.)

### Open before the dry-run (two inputs + one decision)

The dry-run requires standing up the new project, which is **billable infrastructure on
your Sanity account** plus an **API token** (a credential). I have paused before
provisioning it to confirm what I should not guess:

1. **Sanity organisation** to create the new project under (the CLI's
   `organizations list` is not a command in 6.4.0; the org needs confirming from the
   Sanity manage UI or an org id).
2. **New project name** (e.g. "CreativePixels" or "CP Content").
3. **Drafts decision:** migrate the 48 drafts (preserves editor work-in-progress, fits
   D25 draft mode) or migrate published-only (`--no-drafts`, clean slate)? This changes
   the transform, so it should be settled before the transform is written. My lean:
   migrate drafts, since draft mode is a goal, but the 38 blog drafts may include
   abandoned experiments worth pruning first.

Once these are settled I will build the transform against the section-1 table, create
the new project + private `production`/`staging` datasets + read token, dry-run into
**staging**, and report the post-transform counts against the baseline above, before
anything touches production.

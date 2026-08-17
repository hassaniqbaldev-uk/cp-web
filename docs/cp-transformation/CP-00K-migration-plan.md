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

**Durable location (outside the repo, not in git):**
`C:/Users/tahab/cp-sanity-backups/2026-08-17/`. Re-exported 17 Aug after the first run
went to the ephemeral scratchpad. SHA-256 checksums (verify before anything is created):

| Archive | SHA-256 | Docs |
| --- | --- | --- |
| `legal-hub-pz9kcb6n-production-2026-08-17.tar.gz` | `c71d610b6e643a98bafcddc0ae3fa58244ccdbbfa60a8fc3e228793a05dc545d` | 7 |
| `services-cqbs7syw-production-2026-08-17.tar.gz` | `02b2fa30c84c0d929b04e0e80bc478a843cd0ccc2786e4f450d41ba478e23e53` | 15 |
| `solutions-z2m53qom-production-2026-08-17.tar.gz` | `17506f9a90e05c6ca3ce66faf8d0d80b406481ad2097d6fe1d75cb564c09cdf9` | 15 |
| `blog-dgx0l3po-production-2026-08-17.tar.gz` | `669457abc7c43edd07c883d2e97d51fa5f4c36bd1aee909c826524c62be365fa` | 48 |
| `case-studies-6qygzc2z-production-2026-08-17.tar.gz` | `6d6f4b8357b4613c8d92b49770c2c4198cdaf4c61141eef39e63ec00e93294b6` | 101 |

Doc counts include drafts (lossless). Total ~277 MB, 852 assets.

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

### Correction: there ARE drafts (48), not zero — but they are NOT anonymously exposed

Earlier (`CP-00K-validation.md`, `13-implementation-status.md`) I recorded "0 drafts",
based on the **anonymous** public API. The **authenticated** export reveals **48 drafts**:
38 blog (draft versions plus unpublished posts), 9 case studies, 1 solution. That
corrects the count. Those two docs are superseded on this point.

**Drafts-exposure test (D24), run 17 Aug.** Queried each of the five projects
**anonymously, no token**, against the live (non-CDN) API with the explicit drafts path
`*[_id in path("drafts.**")]`, exactly as an internet user holding only the public
project ID. **Result: 0 drafts on all five; empty samples.** The same drafts exist under
an authenticated export. Sanity serves anonymous callers the `published` perspective, so
drafts are token-gated.

**Verdict: D24 is NOT a live anonymous data exposure.** The `NEXT_PUBLIC_*` project IDs
do not let anyone read the 48 unpublished documents. D24 stays as **hygiene**: private
datasets + a server-side read token are still worth doing before drafting sensitive new
positioning/pricing, and any *issued* token is powerful, but there is no urgent leak.
(This holds for these 2024-api-version datasets; older datasets could behave differently,
which is why the direct test mattered.)

**Caveat (for the record):** the authenticated *control* half of the test did not
successfully execute. The `sanity documents query` control ran on the default
`published` perspective, which itself excludes drafts, so it returned 0 rather than the
expected 48 and did not serve as an independent authenticated confirmation. The verdict
therefore rests on (a) the clean anonymous result across all five projects and (b) the
authenticated `dataset export`, which does surface all 48 drafts. A stricter re-test
would query with `perspective=raw` and a token; not blocking, but noted.

**Plan (checked 17 Aug):** all five projects are on the **Free** plan (their Growth
Trials expired Feb–May 2026). Free per-project quotas: 2 datasets, 10,000 documents,
100 GB assets/bandwidth, 20 non-viewer users. The consolidated project (2 datasets,
~1,038 docs incl. assets, ~277 MB) fits, with the 2-dataset limit the only tight one.
Private datasets are not plan-gated, so D24's private datasets work on Free. No ceiling.

### Decisions (Hassan, 17 Aug) and the one remaining input

- **Project name:** `CreativePixels`.
- **Drafts:** migrate **all 48**, no pruning during migration. Migration is lossless;
  the transform runs **without** `--no-drafts` and drafts are included in the dry-run
  counts. Pruning the 38 blog drafts is a content decision Hassan makes afterwards in the
  new Studio, where they are readable and deletion is reversible from these backups.
- **Still needed before I create anything: the Sanity organisation id.** Hassan is
  fetching it from sanity.io/manage. Creating the project is **billable infrastructure +
  an API token (a credential)** on Hassan's account, so I will not create it until the
  org id is given.

Once the org id arrives I will: build the transform against the section-1 table, create
the `CreativePixels` project + private `production`/`staging` datasets + read token,
dry-run (drafts included) into **staging**, and report post-transform counts against the
baseline above, before anything touches production.

### Dry-run executed — 17 Aug (staging only, production untouched)

**Project created:** `CreativePixels` = `4m0eqoi1`, org `ostkePt9R`. `production` +
`staging` datasets **private** (confirms private datasets on Free). Viewer read token
written outside the repo.

**Raw import into staging (lossless):** 186 content docs = **138 published + 48 drafts**;
**845 unique image assets** (852 source; 7 identical images shared across projects were
deduped by content hash, expected); plus 12 Sanity-managed `system.*` docs (dataset
infrastructure, not content).

**Migration finding (caught by the dry run):** Sanity treats `_type` as **immutable** —
neither `patch` nor `createOrReplace` can change a document's type in place. The first
transform attempt failed on the tools→technology and solution→industry conversions, and
the transaction rollback cascaded. The corrected transform does type changes as
**new-id + reference-rewrite + delete-old**, in **three phases** (create targets → rewrite
case-study refs → delete old docs) so referenced docs exist before they are referenced.
The real migration must follow this pattern; note the new ids are internal (no URL/redirect
impact).

**Post-transform counts (staging):**

| Type | Before | After | Note |
| --- | --- | --- | --- |
| services | 35 | **16** | 15 real minus `custom-apps-and-ai` (renamed `custom-app-development`) plus new `ai-automation`; 20 stubs deleted |
| technology | 0 | **7** | 6 ex-tools + `woocommerce` |
| capability | 0 | **3** | brochure, custom-forms, print |
| tools | 6 | **0** | all converted |
| industries | 35 | **45** | 35 cs + 10 moved solution-industries (dedup to 33 deferred, see below) |
| solutions | 15 | **5** | goal-only after 10 industry-solutions moved |
| caseStudies / blog / author / legalPage | 40 / 47 / 1 / 7 | unchanged | |
| services with `pillar` | 0 | **16** (all) | |
| blog with `pillar` | 0 | **47** (all) | incl. AI post re-tagged to AI & Automation |
| industries `hasPage:true` | 0 | **5** | 4 CP-08 candidates + 1 draft of one of them |

**Every reference resolved: 0 failures.** 0 orphan refs during transform; post-transform,
every case-study `services`/`technologies`/`capabilities`/`industries` reference
dereferences (checked with `!defined(@->)`).

**Documents that changed type:** 6 `tools`→`technology`; 10 `solutions`(industry)→
`industries` (9 published + 1 draft); 20 stub `services` deleted with their case-study
refs repointed; `custom-apps-and-ai` split into `custom-app-development` + `ai-automation`.

**UNICEF:** ends with **0 services**, 2 capabilities (brochure, print), 1 technology —
the zero-service state, as decided. No service was invented.

**Lossless check:** content-doc count 186→171 is **intended consolidation, not loss**.
The removed docs are 20 redundant stub-service duplicates (title/slug/order only, their
tagging preserved as refs to the real services) plus the tools/solutions converted to new
types; net of 21 created canonical docs. No unique content was destroyed; drafts held at
48; all real services, case studies, blog, legal intact.

**Deferred (as the section-1 table said Hassan confirms per-merge):** the industry
**dedup merges** (44→33) were not applied; the dry run keeps industries un-merged (45).
Merges are reversible content decisions that do not affect reference integrity, so they
belong in the new Studio, not the transform. Field renames (`partnerWithUs2`,
`expertise3`) were also not applied in the dry run (schema-authoring step, no data impact).

**Industry merges — deferred and owned by Hassan (approved).** Production will go live
with **45 industries, including ~12 duplicates** (each solution-industry that means the
same as a case-study industry, e.g. `b2b`/`b2b-services`, `saas`/`saas-companies`,
`ecommerce`/`ecommerce-brands`, `charity-non-profit`/`charities-and-foundation`,
`driving-schools`, `pharmacies`, `restaurants`, `interiors`/`interiors-and-furnishings`,
`smes`/`sme-founders`). The dedup-and-rename to 33 canonical industries is a **follow-up
content task Hassan owns**, done in the new Studio (reversible, no reference-integrity
impact). Note: the 5 `hasPage:true` industries currently carry their original solution
titles (e.g. "SaaS Companies", "Charities & Foundation"), not the mapping-table canonical
titles, because the rename is part of that deferred merge. One of the 5 is a **draft
duplicate** of SaaS Companies (the migrated draft solution-industry), which resolves when
Hassan publishes or discards it.

**Content-review findings (from reading real dereferenced titles):**

- **Technology refs can duplicate.** Now Press Play resolves to technologies
  `[Webflow, Figma, Webflow]` — Webflow appears twice because the case study had `webflow`
  as both a service-tag and a tool, and both mapped to `technology-webflow`. The
  production transform must **dedup each case study's `technologies` array by `_ref`**.
  Not a data-integrity issue (both resolve), but a cleanup the dry run surfaced.
- **Freeze on the new project.** `4m0eqoi1` is on a **Growth Trial until 16 Sep 2026**,
  so it currently has `privateDataset`, scheduled publishing, roles, comments and **no
  `automaticDatasetFreezing`**. When the trial lapses it reverts to **Free with freeze
  enabled**, the same fate the five existing projects already hit. So the Free-tier freeze
  availability risk applies to the consolidated project too, ~30 days out — an input to
  the separate upgrade decision.

Nothing touched production or the live site. Awaiting review of this content before the
production run.

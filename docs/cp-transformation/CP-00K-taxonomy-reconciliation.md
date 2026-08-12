# CP-00K — Taxonomy reconciliation ruleset

**Status:** Recommendation. Needs Hassan's sign-off before migration scripting begins.
**Blocks:** The Option A consolidation, and therefore CP-01.
**Raised:** 12 August 2026, after CP-00K validation identified reconciliation as the
real overrun risk.

---

## 1. Why this document exists

The consolidation validation established that taxonomy reconciliation, not asset
transfer, is the step that will overrun. Assets are slow but predictable. Taxonomy is
a content decision, and it cannot be scripted until the decision is made.

Confirmed divergence across the five projects:

- `services` is a **hard type-name collision**: a rich document type in the services
  project, a lightweight tag type in the case-studies project
- Case-study service tags include `webflow`, `woocommerce`, `brochure`, `print`,
  `custom-forms`, none of which map to a real service
- **35** case-study industries against **9** solution industries
- Malformed slugs in the case-studies taxonomy: `Energy`, `Public Sector`, trailing
  whitespace
- Industries are modelled two different ways in two projects
- D15's `custom-apps-and-ai` split adds a further reference-rewrite rule

---

## 2. The framing error to avoid

Do not merge these into one taxonomy.

Case-study tags are **descriptive metadata**: what this project involved, what sector
the client operated in. Service and industry pages are **commercial SEO assets** with
one primary intent each, owned per CP-09.

Forcing one taxonomy to serve both purposes is what produced the divergence in the
first place. Merging them naively fails in both directions: promote all 35 industries
and you get 35 thin pages, which CP-05 and CP-08 both prohibit; collapse to 9 and you
destroy filtering metadata that makes the work hub useful.

The resolution is separate taxonomies for separate jobs, plus a flag rather than a
deletion where one taxonomy has to serve both.

---

## 3. Ruleset

### Three taxonomies

**`service`** — real commercial services only. 15 today, 16 after the D15 split.
Case studies reference these. Only these get service pages. This is the surviving
type in the name collision; the case-studies `services` tag type is dropped and its
tags become references to this type.

**`technology`** — new document type. Absorbs `webflow`, `woocommerce`, plus Laravel,
React, Next.js, Shopify, WordPress, LearnDash and similar.

Justification is already in the brief: the supporting technologies list is explicitly
marked "not all of these require dedicated SEO pages", and CP-11 specifies a
TechnologyGrid module. Technologies are real, displayable, and worth filtering on, but
they are not services. Referenced by both services and case studies.

Note the deliberate exception: WordPress and Shopify exist as **both** a service page
and a technology, because CP-03 gives them specialist service pages. That is intended,
not a duplication bug. Everything else in this taxonomy is technology only.

**`industry`** — one taxonomy, kept granular, with a **`hasPage` boolean**.

All 35 survive as descriptive metadata. The flag marks the small subset that becomes a
commercial page. This gives one source of truth, preserves case-study filtering, and
turns O6 into toggling flags rather than deleting data, which is reversible.

Initial `hasPage: true` set, from CP-08: B2B & Professional Services, Technology &
SaaS, Ecommerce Brands, Charities & Non-profits. Under review and defaulting to false
until O6 closes: Interiors & Furnishings, Driving Schools, Pharmacies, Restaurants.

**`capability`** — new document type. Absorbs anything that describes the work but is
neither a commercial service nor a technology: `brochure`, `print`, `custom-forms`.

### One rule, applied everywhere

**Nothing is deleted. Every taxonomy document gets a `hasPage` boolean.**

This replaces the earlier "drop the tag" recommendation, which was wrong. Dropping
tags destroys data to solve a problem a flag solves reversibly, and it forces a
page-or-not decision now that belongs in CP-09 with search evidence.

| Tag | Taxonomy | `hasPage` | Note |
| --- | --- | --- | --- |
| `webflow`, `woocommerce` | `technology` | false | Supporting technologies. Brief already states not all need pages |
| `brochure` | `capability` | false | Likely folds into Web Design & Development. Revisit at CP-09 |
| `print` | `capability` | false | Contradicts the digital positioning in section 2. Unlikely ever to get a page |
| `custom-forms` | `capability` | false | A feature bullet, not a service |

Exception worth noting: WordPress and Shopify exist as **both** a service page and a
technology, because CP-03 gives them specialist service pages. Intended, not a
duplication bug.

No case study loses a tag. If a case study ends up with no `service` reference after
reconciliation, flag it for manual assignment rather than leaving it orphaned.

### Slug normalisation

Normalise `Energy`, `Public Sector` and trailing-whitespace slugs during the
transform. Verify first that no case-study taxonomy slug appears in a live URL. No
`/industries/` routes exist today, so this is expected to be safe, but confirm before
normalising rather than after.

### The nine industry solutions

The solutions schema carries `category` as a string union of `industry` | `goal`, and
9 of the 14 solutions are tagged `industry`.

Those 9 are industry pages sitting in the wrong document type. Migrate them into the
new `industry` type with `hasPage: true`, rather than carrying them across as
solutions. CP-08 separates industries from solutions conceptually and the data already
reflects the split; this makes the model match.

That leaves 5 genuine goal-based solutions, which is consistent with CP-07.

---

## 4. Confirmed from the schema exports, 12 August 2026

All five schemas reviewed. The picture is better than the validation assumed.

- **One real collision only.** `services` exists in both projects: 18 fields in the
  services project, 3 (`title`, `slug`, `order`) in the case-studies stub. Delete the
  stub, repoint the references.
- **Cross-references already work.** `caseStudies` uses genuine
  `services.reference`, `industries.reference` and `tools.reference` arrays. The
  pattern is in place and only needs redirecting at the real types.
- **`services` and `solutions` are structurally identical.** Same 18 fields, same
  names, including the same `partnerWithUs2` / `expertise3` artefacts. Only `category`
  differs (`design-development|growth|support` vs `industry|goal`). Merging is close to
  trivial.
- **`tools` cannot function as a taxonomy.** Only `toolImage` and `altText`. No title,
  no slug, so it cannot be queried or filtered. Add title and slug when it becomes
  `technology`.
- **`blog` carries a fourth taxonomy.** `category` is
  `STRATEGY|DESIGN|DEVELOPMENT|GROWTH`, matching neither the services categories nor
  the four pillars. CP-14 requires pillar alignment, so this maps to pillars in the
  same pass. **Approved.**
- `legalPage` and `author` are clean. No reconciliation needed.

Effort revised down to **6 to 8 days** on this basis.

---

## 5. Related schema decisions to take in the same pass

**Add `pillar` to services** (D15). The current three-category taxonomy,
`design-development` / `growth` / `support`, does not map to the four pillars and is
replaced by it.

**Solutions has zero reference fields.** Confirmed from the schema export: nothing but
image assets. The entire Solutions/Industries distinction currently has no referential
integrity. Add real references during consolidation.

**Rename the incrementing fields.** `partnerWithUs2`, `expertise3` and similar are
ad-hoc evolution artefacts. They will confuse whoever builds the CP-11 modules. Rename
while the schema is already being rewritten; doing it later is a second migration.

---

## 5. What this does to the estimate

Reconciliation moves out of the "1 day schema unification" line and becomes its own
item. It is content work with an engineering tail, not the reverse.

Sequence: Hassan approves this ruleset → mapping table written per tag and per
industry → dry-run transform on an export → counts and spot-checks verified → only
then does the real migration run.

The mapping table is the artefact that makes this safe. Do not script a transform
against judgement calls that only exist in a conversation.

---

## 6. Decision

**Approved as written / with amendments:**

**Amendments:**

**Signed off by:**

**Date:**

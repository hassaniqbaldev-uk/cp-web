# CP-00K — Consolidation validation (input to O8 sign-off)

Prepared 12 August 2026, after inspecting the five live schemas and querying the five
public datasets directly. This validates `CP-00K-content-platform-decision.md` before
Hassan signs it off. No migration performed, no schema changed, no CP-01 work started.

**Bottom line: I agree with Option A (consolidate all five, now).** The timing
argument is correct and two new facts reinforce it (0 drafts today, no staging dataset
exists). But the decision doc **misattributes the risk**: asset migration is the slow
step, not the uncertain one. The real overrun risk is reconciling the already-diverged
duplicate taxonomies, and that needs a Hassan content decision *before* scripting can
be finalised. Revised realistic estimate: **8 to 10 days**, not 5 to 6.

---

## 1. Ground-truth measurements (queried live, 12 Aug 2026)

| Project | Content docs (published) | Image assets | File assets | Drafts |
| --- | --- | --- | --- | --- |
| Case studies `6qygzc2z` | 92 (31 case studies + 35 industries + ~20 service-tags + tools) | 365 | 0 | 0 |
| Services `cqbs7syw` | 15 | 229 | 0 | 0 |
| Solutions `z2m53qom` | 14 | 171 | 0 | 0 |
| Blog `dgx0l3po` | 10 (9 posts + 1 author) | 75 | 0 | 0 |
| Legal `pz9kcb6n` | 7 | 12 | 0 | 0 |
| **Total** | **~138** | **852** | **0** | **0** |

Two corrections to the decision doc's assumptions:

- It says "roughly 75 documents." The real content-doc count is **~138**, because the
  taxonomy/tag/author docs (35 industries, ~20 service-tags, tools, author) are what
  generate the migration work and were not counted. Plus **852 image assets**.
- **0 drafts exist in any project today.** That matters twice: the D24 public-draft
  exposure is currently a *prospective* risk (nothing is being leaked yet), and the
  migration is at its cheapest right now, before drafting the new positioning, pricing
  and case studies begins.

---

## 2. Effort estimate check (decision doc section 5: "5 to 6 days")

**Verdict: achievable only if taxonomy reconciliation is pulled out as a separate,
up-front, Hassan-gated decision. Fold it into the migration and it is 8 to 10 days.
The risk is misattributed: assets are slow but low-uncertainty; reconciliation is the
swing.**

| Decision-doc step | Their cost | My view |
| --- | --- | --- |
| Unify schemas, add `pillar`, "resolve duplicate services/industries" | 1 day | Schema unify + pillar + D15 split is ~1 day. But "resolve duplicate services/industries" is not a mechanical dedupe, it is a content-model reconciliation of divergent taxonomies (section 5). **Budget +1 to 2 days and it needs Hassan decisions first.** |
| Export all five as backups | 0.5 day | Correct. |
| Migration scripts, assets + ref rewriting, dry run | 1.5 days | Reasonable **if** using dataset export/import for assets (section 3). Cross-type reference rewriting depends on the reconciliation map. Keep 1.5 to 2 days. |
| Code refactor: 5 clients to 1, GROQ, env | 1 to 1.5 days | Reasonable. ~20 to 25 files (5 `sanity.*.js`, 5 `*.image.js`, `queries.*.js`, every page import, env). |
| Studio, staging, private + token, draft mode, revalidation (D23/D24/D25) | 1 day | Optimistic. Private datasets + server-side token wiring + `draftMode` route + preview + Sanity webhook + revalidation route + tag strategy is **1.5 to 2 days**. |
| Verification | 0.5 day | With 852 assets + 138 docs + every route, closer to 1 day. |

**Revised realistic total: 8 to 10 days**, with a hard dependency: the taxonomy
reconciliation decisions gate the migration script. The 5 to 6 figure is not reckless,
but it assumes the reconciliation is trivial, and it is not.

---

## 3. Asset migration: tooling or scripted re-upload? (and failure modes)

**The premise in the decision doc needs one correction.** "Images live in each
project's asset store and do not travel with a document export" is true for a
*document-level* NDJSON export, but **not** for a full **`sanity dataset export`**,
which produces a `.tar.gz` containing `data.ndjson` **plus the asset binaries**. The
matching **`sanity dataset import`** re-uploads those binaries into the target project
and **rewrites the asset references automatically** (assets get new `_id`s in the
target). So assets *do* travel, if you use dataset-level export/import.

**Recommended mechanism (both, on different reference classes):**

1. **Assets and asset-references: Sanity's own `dataset export` / `dataset import`.**
   Do not hand-script asset re-upload. Import handles binary upload, sha1 dedupe, and
   asset-ref rewriting, including assets embedded in portable-text blocks (blog/legal
   content, case-study rich fields).
2. **Document type collisions, cross-type references, taxonomy reconciliation, and the
   D15 split: a scripted transform on the exported NDJSON**, run between export and
   import (`@sanity/migrate` or a plain Node pass). This is where the bespoke work is:
   rename the colliding `services` type, repoint case-study tags to the real services
   by slug, collapse the divergent industries, split `custom-apps-and-ai`.

So: **tooling for assets, script for document/taxonomy references.** The "scripted
re-upload with reference rewriting" Hassan asked about is only forced if you take the
document-only export route, which you should not.

**Failure modes to design against:**

1. **Do not let the transform touch asset refs.** Rewrite document cross-type refs in
   the script; leave asset refs for import to remap. Mixing the two is the classic bug.
2. **Dangling asset binaries.** An asset doc whose binary was purged breaks import.
   Pre-check that every *referenced* asset downloads before cutover (852 assets; many
   may be unreferenced uploads that can be skipped).
3. **Strong references to dropped taxonomy.** Case-study `services`/`industries`/`tools`
   refs are strong. If a referenced taxonomy doc is merged away during reconciliation,
   import fails on the dangling strong ref unless it is repointed first. Rewrite refs to
   the surviving docs before import.
4. **`_id` collisions** across the five sources on merge. Sanity ids are random so
   unlikely at the document level; the real collision is at the *type* level (`services`).
   Namespace or check ids during the transform.
5. **Portable-text inline assets** (blog `content[]` image blocks, case-study rich
   fields) carry asset refs inside arrays. Dataset export/import handles these; a
   document-only migration would miss them. Another reason to use dataset export/import.
6. **Drafts.** Zero today, so no draft-migration complexity now. If migration slips and
   drafting starts, exporting drafts needs a project token (public export excludes
   drafts). Do it while drafts = 0.
7. **Throughput.** 852 assets; the import is the long pole (Hassan's instinct that this
   step is slow is right; it is slow, not error-prone, with tooling). Run off-peak.
8. **Asset URL churn is transparent.** New project id changes `cdn.sanity.io/images/...`
   URLs, but code always derives URLs via `urlFor()` / `asset->url` at render, with no
   hardcoded asset URLs (verified). So asset-id churn needs no code changes.

---

## 4. Staging dataset / D23 (what I could and could not confirm)

**Could not confirm directly:** the Vercel CLI is not available in this environment and
the repo is not linked to Vercel (no `.vercel/`), so I cannot read the staging
environment's env-var values from here. Reading them needs `vercel env ls` on a linked
project, or the dashboard.

**Confirmed indirectly, and it settles the substance:** I queried each project for a
`staging` dataset. **All five return `404 Dataset not found`; only `production` exists.**
Therefore staging cannot be isolated at the data layer regardless of the env-var value:
if the staging environment's `NEXT_PUBLIC_SANITY_*_DATASET` were set to `staging`, every
Sanity fetch would 404 and the staging site would be empty. Since staging is described
as a working mirror, its dataset vars must resolve to `production`.

**So D23 is fact in substance:** there is no staging dataset in any project, so every
edit on the staging deployment writes production content, and a staging dataset must be
provisioned before any CP-01 content work. To state it with zero inference, Hassan can
confirm the five `*_DATASET` values on the Vercel staging environment equal `production`;
the conclusion does not change either way.

---

## 5. What changes under Option C (leave the legal hub separate)

Legal facts from the live data: **7 documents, 12 image assets** (the `legalPage.icon`
images, so it is not strictly text-only as the decision doc says, but close),
**references nothing and is referenced by nothing**, no cross-type edges at all.

- **Saved by Option C:** ~7 docs + 12 assets, about 2 to 3 percent of the estate.
  Genuinely trivial, and no cross-linking capability is lost because legal has no edges.
- **Cost added by Option C (the part that matters):** the code keeps `legalClient` +
  `NEXT_PUBLIC_SANITY_LEGAL_HUB_*` + `legal.image.js` + `queries.legal.js`, so "5 clients
  to 1" becomes "5 to 2". More importantly, **D23/D24/D25 must be done twice** — a second
  staging dataset, a second private-dataset + read token, and a second draft/preview/
  revalidation + webhook wiring, plus a second Studio and permission set. That is a
  permanent second-project tax landing on exactly the security/preview workstream you are
  consolidating to simplify.
- **Net:** Option C saves a trivial one-off and adds recurring cost to the D23/D24/D25
  bundle. Only worth it if legal must stay organisationally separate (different owners or
  permissions). Absent that reason, fold legal in. I agree with the decision doc's "still
  consolidate it."

---

## 6. Schema facts that make Option A harder than the decision doc assumes

1. **`services` is a hard type-name collision.** It is a document type in **both** the
   services project (rich: `detailHero`, `projectShowcase`, `expertise3`, `methodology`,
   `options`, `faqs`, `category`) and the case-studies project (lightweight tag: `title`,
   `slug`, `order`). One merged project cannot hold two `services` types. One must be
   renamed (case-study tag to `serviceTag`) or, better, replaced by references to the
   real `services` docs. The decision doc's one-line "resolve the duplicate types" hides
   this; it is the single biggest piece of hidden work.
2. **The taxonomies are divergent, not merely duplicated.** The case-studies service-tag
   list includes **`webflow`, `woocommerce`, `brochure`, `print`, `custom-forms`** — five
   tags with no equivalent in the real 15-service pillar set. Case-studies `industries`
   has **35** entries against solutions' **9** industry-category entries, with different
   slugs and meanings. Reconciling these is a content-model decision (do webflow/
   woocommerce become a separate tech/tools taxonomy? which of the 35 case-study
   industries survive, which overlaps O6?). **This must be decided by Hassan before the
   transform script can map references.** It is the true long pole.
3. **Malformed slugs in the case-studies taxonomy.** Live values include `Energy`
   (capitalised), `Public Sector` (space + capitals), and titles with trailing spaces
   (`Leisure `). These are invalid as clean slugs and as stable reference keys and must
   be normalised during migration.
4. **"Industries" is modelled two different ways in two projects.** Solutions encodes
   industries as `solutions` docs with `category: "industry"` (9); case-studies has a
   dedicated `industries` doc type (35). D4 and the pillar architecture want one
   industries source of truth, so consolidation is the moment to unify them, but that
   unification drags O6 (which industry pages survive) forward.
5. **D15 interacts with the migration.** Splitting `custom-apps-and-ai` into two service
   documents means creating a second doc and repointing any case-study tag that
   referenced the fused one. Same transform, another rewrite rule.
6. **Everything else is genuinely easy.** `blog`/`author`, `solutions`, `legalPage`,
   `tools` have unique type names and clean references; the system types (`slug`,
   `geopoint`, `sanity.*`) are identical across projects; no file assets; no drafts; no
   hardcoded asset URLs in code. These do not add risk.

---

## 7. Recommendation to Hassan

Proceed with **Option A**, and:

1. **Treat the taxonomy reconciliation as a decision, not a migration step.** Make the
   services-tag and industries reconciliation calls (points 2 and 4 above) up front;
   they gate the script and drag O6 forward. This is where 5 to 6 days becomes 8 to 10.
2. **Use `dataset export` / `dataset import` for assets** and a scripted NDJSON transform
   for the type collision, cross-type references, taxonomy merge and D15 split.
3. **Do it now**, while drafts = 0 and no rebuild sits on top of the fragmentation.
4. **Bundle D23/D24/D25 into the same cutover**, which is cheaper under full Option A
   than under Option C.
5. Revise the section-5 estimate to **8 to 10 days** and label the reconciliation, not
   the assets, as the overrun risk.

I do not disagree with Option A. The only correction is to the risk framing and the
day count.

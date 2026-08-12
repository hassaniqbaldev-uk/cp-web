# CP-00K — Content platform decision (O8)

**Status:** Open. Needs Hassan's sign-off.
**Blocks:** CP-01 and everything after it.
**Raised:** 12 August 2026, following the CP-00 audit.

---

## 1. What CP-00 found

Five **independent Sanity projects**, not one project with five document types.

| Content type | Project ID | Dataset | Documents |
| --- | --- | --- | --- |
| Case studies | `6qygzc2z` | production | 31 |
| Services | `cqbs7syw` | production | 15 |
| Solutions | `z2m53qom` | production | 14 |
| Blog | `dgx0l3po` | production | 8 |
| Legal hub | `pz9kcb6n` | production | ~7 |

Five clients in code. Five sets of `NEXT_PUBLIC_SANITY_*` env vars. All datasets
public and tokenless. No staging dataset in any project.

Total estate: **roughly 75 documents.**

---

## 2. Why this blocks the programme

**Sanity references cannot cross projects.** Every cross-type relationship the
architecture depends on is therefore impossible as a reference:

- Relevant-work module on every service page (services → case studies)
- Related-services module on every case study (case studies → services)
- The CP-15 internal linking map, which is entirely cross-type
- Solutions → services, industries → case studies
- A four-pillar taxonomy shared as one source of truth across services, solutions,
  industries and case studies

**The workaround has already failed once, before the work started.** The
case-studies project has grown its own duplicate `services` and `industries`
document types so it can tag things, and CP-00 found those have already diverged
from the real ones. That is the predicted failure mode, arriving early.

**Two secondary problems live in the same finding.** All five datasets are public and
tokenless, which means draft documents are readable by anyone holding the project ID,
and the IDs ship to the browser. And there is no staging dataset in any project, so
every content edit on staging is a production edit. CP-00 hit this in practice and
correctly declined to fix a one-word meta description because of it.

---

## 3. Options

### Option A — Consolidate all five into one project

One project. Two datasets, `production` and `staging`. All content types become
document types with real references between them.

**For**

- Cross-type references work, which is the actual requirement
- One pillar taxonomy, defined once, referenced everywhere
- One Studio for editors instead of five
- One `next-sanity` client instead of five, and one set of env vars
- A single GROQ query can fetch a service with its case studies. Under Option B that
  is two round trips to two different APIs, on every commercial page
- Referential integrity: Sanity warns before deleting a referenced document. Slug
  strings do not
- One staging dataset to provision, not five
- Likely lower Sanity cost, since pricing is per project and per seat

**Against**

- It is a content migration on live production content
- Asset migration is the real work. Images live in each project's asset store and do
  not move with a document export. This needs the Sanity migration tooling or a
  scripted re-upload with reference rewriting, and it is the most error-prone part
- Requires rewriting every GROQ query and all five client configs
- Must happen now. Doing it after content work means redoing the content work

### Option B — Keep five projects, cross-link by slug convention in code

**For**

- No migration. Zero immediate cost
- Nothing currently broken stops working

**Against**

- Cross-linking becomes hand-matched slug strings. When an editor changes a slug, the
  link breaks silently and nothing warns anyone
- The pillar taxonomy is maintained in up to five places and will drift, exactly as
  the case-studies duplicate taxonomy already has
- Every relevant-work and related-services module needs two API calls to two projects,
  joined in application code. That is a permanent performance and complexity tax on
  the highest-value commercial pages
- Five Studios, five permission sets, five sets of env vars, five staging datasets to
  provision for D23
- The cost is not avoided, it is deferred and paid with interest every time a page is
  built on top of it

### Option C — Consolidate four, leave the legal hub separate

Services, solutions, case studies and blog into one project. Legal hub stays where it
is.

**For**

- Legal documents genuinely reference nothing and are edited by different people at
  different times, so separating them is defensible
- Reduces migration scope by roughly one fifth
- Legal content is text-only, so the asset migration problem does not apply to it

**Against**

- Two Studios forever, for a project holding about seven documents
- Two staging datasets, two permission models
- The saved effort is small, because legal is the smallest and simplest project

---

## 4. Recommendation

**Option A. Consolidate all five, now.**

The deciding argument is timing. The estate is about 75 documents, which is genuinely
small, and the site has not yet been rebuilt on top of the fragmentation. Every week
of content work makes this migration bigger, and the moment new pages start consuming
cross-project data through slug-matching, the workaround becomes load-bearing and the
migration becomes a rewrite.

The secondary argument is that Option B does not avoid the cost. It converts a
one-time four-to-five-day migration into a permanent tax on every commercial page,
paid in extra API calls, silent link breakage and duplicated taxonomy. The
already-diverged case-studies taxonomy is evidence of what that looks like in practice.

Option C is the acceptable fallback if migration budget is tight. Legal is the one
project with a real independence argument. I would still consolidate it, because
seven text-only documents cost almost nothing to move and a second Studio costs
something forever.

### Do these in the same workstream

Consolidation touches the same configuration as three other confirmed decisions, so
bundle them rather than doing four separate migrations:

- **D23** — provision a `staging` dataset alongside `production`
- **D24** — private datasets with a server-side read token, closing the public draft
  exposure
- **D25** — draft mode, preview, and webhook-driven on-demand revalidation, replacing
  the current one-hour ISR wait
- **D15** — add the `pillar` field to the services document type and split
  `custom-apps-and-ai` into two documents

---

## 5. Effort and sequencing

Indicative, to be confirmed by Claude Code against the actual schemas.

| Step | Effort |
| --- | --- |
| Unify the five schemas into one, add `pillar`, resolve the duplicate services/industries types | 1 day |
| Export all five projects as backups, before anything else | 0.5 day |
| Migration scripts, including asset migration and reference rewriting, with a dry run | 1.5 days |
| Refactor code: five clients → one, rewrite GROQ queries, consolidate env vars | 1–1.5 days |
| Studio setup, staging dataset, private datasets and read token, draft mode and revalidation | 1 day |
| Verification: document counts, asset integrity, every route rendering, build clean | 0.5 day |

**Total: roughly 5 to 6 days.** The asset migration is the step most likely to
overrun.

### Risk controls

- Export all five projects first. Nothing starts before the backups exist
- Build the new project alongside the old ones. Do not migrate in place
- Cut over by env var, which makes rollback a config change rather than a restore
- Keep the five old projects read-only for 30 days after cutover, then archive
- Verify document and asset counts match before decommissioning anything

---

## 6. Decision

**Chosen option:**

**Signed off by:**

**Date:**

Record the outcome here, then update `00-context.md` to close O8 and add the
corresponding D-number.

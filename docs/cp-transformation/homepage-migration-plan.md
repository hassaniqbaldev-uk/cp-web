# Homepage content → Sanity: migration plan (plan only, not built)

The homepage is the most-visited page and every headline, pillar description and the founder bio
currently needs a developer. This plans moving that copy into Sanity. Same discipline as the
testimonial migration: **swap the data source, never the structure.**

## 1. The shape — a structured singleton, NOT a page builder

**Recommendation: one `homepage` singleton document, with a fixed field per section — copy only.**

Two shapes were possible:

- **Flexible section builder** (an array of section blocks editors add/reorder/remove). Rejected. It hands
  editors the power to reorder or delete sections and change the page structure — exactly the tuned layout
  we just spent a session proving survives untouched. It would trade the layout guarantee for flexibility
  nobody has asked for.
- **Structured singleton with fixed sections** (chosen). One "Homepage" entry in Studio. Each section is a
  named object holding only its **text and links** — no layout, no order, no on/off. Section order,
  the bento/grid, animations, gradients and spacing stay in code. Editors change words; they cannot break
  the design.

So: **the layout stays structural in code; only copy becomes editable.** That is the whole point.

Studio desk: a single **Homepage** item (a singleton, not a list) — one document, fixed id `homepage`.

## 2. Editable vs structural, section by section

| Section | Becomes editable (Sanity fields) | Stays structural (code) |
| --- | --- | --- |
| **Hero** | eyebrow badge, headline line 1, headline line 2, **gradient line** (its own field so the gradient styling stays in code), subhead, primary-CTA label | the 3-line split, which line gets the gradient, the CTA destination, decorative shapes/animation |
| **Selected work** | heading, description | which case studies show (already Sanity + `SELECTED_WORK_SLUGS`), the card grid |
| **Four pillars** | *(nothing new)* | already data-driven from Sanity services — leave as is |
| **AI & Automation feature** | eyebrow, title, description, capability labels + links, proof text + link, CTA label | the block layout, the tint background |
| **Why CreativePixels** | label, title, description, the **four reason cards** (title + text each), CTA label | the 2×2 grid, card styling. Count fixed at 4 (see risk) |
| **Founder** | label, title, **bio**, name, role, (optionally the photo as a Sanity image) | the layout; the small inline avatar asset |
| **Investment** | label, title, description | the price **figures** (stay from the pricing source — see §5), the card layout |
| **Contact** | label, title, description | the form itself, fields, submit, the "what happens next" list is optional to expose |

Everything in the left column is copy. Everything in the right column is design. The migration only touches
the left column.

## 3. What it takes, and roughly how long

Scope is well-bounded — one page, ~8 sections, copy only:

1. **Schema** — one `homepage` singleton type: ~8 section objects (3–6 fields each) plus two small arrays
   (Why reasons, AI capabilities). Reuses the `sectionHeading` object from the schema pack. ~1 file.
2. **Seed** — create the single `homepage` document in `staging`, pre-filled with the exact current copy
   (lifted from the components, so the page is unchanged on day one). Via `safe-mutate`.
3. **Wire** — `(home)/page.jsx` fetches the `homepage` doc and threads it to `HomePage`; each section
   component (HomeHero, the two `PillarFeature` calls, `Established`, `Founder`, the `Work`/`Investment`/
   `Contact` headings) reads props with the **current hardcoded values as fallbacks**, so a missing field
   degrades to today's copy rather than blank.
4. **Verify** — before/after measurement at 375/768/1440 on the whole homepage (not just one section),
   same rigor as the bento: section offsets and no-overflow, because we touch every section.
5. **Studio** — add the singleton desk entry + document the fields (extend the schema pack).

**Rough time: one focused, reviewed session** — comparable to the testimonial migration. The schema and
seed are quick; the care goes into wiring each section without disturbing layout and re-measuring. I would
do it **section by section with a checkpoint**, not all-at-once, so you can see the hero land before the
rest follows.

## 4. Layout risk

**The migration itself is low risk** — it is a string-for-prop swap inside unchanged JSX, exactly the move
that left the bento pixel-identical. The real risks are two, and both are about *what editors type later*,
not the migration:

- **Copy that doesn't fit.** A very long hero headline or reason-card text can overflow a design tuned for
  specific lengths. Mitigation: field `description`s with length guidance, and `validation` max lengths on
  the tight fields (hero lines, card titles).
- **Counts the layout depends on.** The Why grid is 2×2 for **four** reasons; a fifth would orphan a row.
  Mitigation: `validation` fixing the reasons array to exactly 4 (and capabilities to its current count),
  so the grid can't be broken from Studio.

With those guards, an editor can rewrite every word safely and cannot break the page. I would also keep the
**gradient line as its own field** (not parse it out of a headline) so the styling never depends on editor input.

## 5. The rest of the developer-only list — my view on each

| Item | Migrate? | My view |
| --- | --- | --- |
| **Homepage copy** | **Yes — first** | Highest value; this plan. |
| **Pricing** (`servicePricing.js`) | **Yes** | Already a clean single source read by service pages + the homepage Investment. Changes over time. A small `pricing` singleton (or price fields per service) makes it editable with low effort. Worth it. |
| **Company facts** (`company.js`: founded year, projects delivered, team size) | **Yes** | Site-wide (footer, stats, hero badges, about) and they change — team size especially (the "15+" you're confirming lives here). Small `siteSettings` singleton. Keep *years-in-business* computed in code from the founded year; store only the inputs. Cheap, good value. |
| **Footer contact details + social links** | **Yes, cheap** | Simple values (phone, email, address, social URLs) that change. Fold them into the same `siteSettings` singleton. Small job. |
| **Footer / mobile nav + Solutions/About mega-menus** (`contants/navigation.js`) | **Eventually** | There's a real inconsistency: the **Services** mega-menu is Sanity-driven, but the footer, mobile nav and the Solutions/About menus are hardcoded constants — so they can drift. Unifying nav onto one Sanity source is genuinely worth it for consistency, but it's structural and medium-high effort. Lower priority than homepage/pricing/facts; a separate project. |
| **Section default copy** (component fallbacks) | **No** | These are the safety-net defaults the Sanity `heading` override fields already cover once the schema pack is in. Leave in code. |
| **Per-route metadata** (`generateMetadata`) | **Split** | The mechanics (canonical, OG image, templating) should **stay in code** — agreed. The one exception: the **homepage's own title + description** are high-value SEO copy that changes, so put those two on the homepage singleton. Every document-driven page already has SEO fields; this just gives the homepage the same. |
| **Redirects** (`next.config.mjs`) | **No — keep in code** | Agreed. Redirects are routing infrastructure, not content; a wrong one edited in Studio could take the site down. They belong in the repo, reviewed like code. |

**Suggested order if you want more than the homepage:** homepage → company facts + footer details (one
small `siteSettings` singleton, cheap) → pricing singleton → (later, separately) unify navigation. Metadata
mechanics and redirects stay in code.

## What I'd want confirmed before building

- Singleton shape approved (structured, fixed sections — not a page builder).
- Whether the **founder photo** should become a Sanity image (the /about page already uses the Sanity author
  image; the homepage founder currently uses a static asset) — a small add if yes.
- Whether to fold company facts + footer details into the **same** `siteSettings` singleton in this pass or
  keep the homepage strictly to homepage copy. My lean: keep this pass homepage-only, do `siteSettings` next.

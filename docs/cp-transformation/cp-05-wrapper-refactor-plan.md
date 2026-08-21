# CP-05 — Service-wrapper refactor plan (report before implementing)

**Status:** Plan for approval. Nothing built. Reported because scope is larger than it first looked
(schema changes on an external Studio + content decisions only Hassan can make).
**Branch/data:** `development`, `staging` dataset. No push, no main, no production, five old projects untouched.

The goal (from Hassan): don't build two bespoke pages. Refactor the shared Sanity section wrappers so
they are prop-driven, presence-gated, banned-phrase-free, Book-a-Call-free, and asset-optional — then
build both new pages as `services` documents on `/services/[slug]`, so all sixteen pages share the
modules and stay editable in Studio.

---

## 1. What the investigation found (staging, read-only)

Queried all 16 `services` docs. Material findings:

1. **Section headers have NO content fields.** `partnerWithUs`, `expertise`, `methodology` each hold
   only `card[]`. Every section label/title/description is **hardcoded in the component**. Making copy
   content-driven therefore **requires new schema fields**, not just component edits.
2. **No Sanity Studio schema in this repo.** The Studio is external. New fields are added there by
   Hassan (the O13 pattern: I provide the spec + populate via API; he adds the Studio definition so
   it's editable).
3. **`projectShowcase` is populated on all 15 real docs but is a repeated placeholder** — the same
   trio (Smokey Carter / Game Art Brain / Ivy & Duke) on nearly every service. Not curated per service.
4. **`options.pricingCard` is populated on all 15 but holds inconsistent, UNAPPROVED pricing**
   (e.g. wordpress £1,995/£4,995/£12,000; shopify £2,495/£5,995/£15,000; seo £1k/mo…). None of it is
   the approved single-source figures (£1,500 / £3,500).
5. **Neither `projectShowcase` nor `options` is rendered today.** Good — "activating" them naively
   would surface the placeholder work-set and old prices on all 16 live pages.
6. **`wordpress` doc is cross-contaminated** — its `fit`/`notFit`/`options` copy is UI/UX-design content
   ("MVP design to raise capital", "just a logo — see Branding"). At least one doc has wrong content
   pasted in. (Record for the later content-cleanup pass; not fixed in CP-05.)
7. **Card counts already vary** — wordpress has 4 partner cards, seo has 7 expertise cards — so the
   `grid-cols-3` wrappers already wrap to multiple rows. Flexibility work is small.
8. **The hero hardcodes Cal.com "Book a Call"** and **requires `heroImage`** (crashes on null).
   Expertise/Methodology **require icon asset URLs** (crash on null).

> **New finding to record in 00-context §8** (data integrity): across the service docs,
> `projectShowcase` is placeholder and `options.pricingCard` is unapproved/inconsistent; both are
> currently hidden. This caps CP-05 (author correct data for the two new pages only) and flags a
> later content-cleanup job for the other 14.

---

## 2. The refactor — per wrapper

**Guiding rule — "default to the current string."** Every hardcoded header becomes
`content ?? "<current hardcoded string>"`. Existing 16 pages then render **byte-identical** unless we
deliberately change the default. Only the two new docs supply their own header content. This is what
keeps the 14 non-CP-05 pages safe without a copy pass on them now.

| Wrapper | Change | Applies to all 16? |
|---|---|---|
| **ServicesDetailHero** | Remove Cal.com **Book a Call**; primary CTA becomes **Start a project → /contact** (D40). Make `heroImage` **optional** (text-only centred hero when absent, like the hub hero). Label/title/description already from content; keep. Secondary "See Case Studies" only when `caseStudiesLink` present. | **Yes** (Book-a-Call removal is intended site-wide) |
| **PartnerWithUs2** | Replace hardcoded **banned** header ("Stop losing money to…" / "We identify and fix the bottlenecks…") with content fields, **default to a new compliant string**. Make the desktop grid adaptive (handles 3 and 4). Icons already optional. | **Yes** (kills the banned phrase everywhere) |
| **Expertise3** | Hardcoded label/title/description → content fields with current defaults. Make card `icon` **optional** (currently crashes on null in the `slideData` map). Adaptive grid for counts ≠ 3. | Defaults keep 16 unchanged |
| **Methodology** | Hardcoded label/title/description → content fields with current defaults. Make step `icon` **optional** (numbered steps render without it). | Defaults keep 16 unchanged |
| **DynamicQuestions** | Already prop-driven (array of Q/A). Header "Common Questions" is clean (not banned). Optionally make header a prop with default. Minimal. | No change |

**Two modules have no render component today — build them (presence + gate controlled):**

- **`ProjectShowcase`** (new) — renders `projectShowcase.projects[]` + `fitCard[]`/`notFitCard[]`
  ("good fit / not a fit"). Gated OFF for the 16 (their data is placeholder); ON only for docs with
  the layout flag (§3), where we author curated work.
- **`Investment`** (new) — renders `options.includeCard[]` (what's included) + the **single approved
  "from" price** (from the shared source in §4, **not** the doc's unapproved `pricingCard`) + the
  **warranty** line. Gated the same way. We deliberately **do not** render `options.pricingCard`.

---

## 3. Gating (drop Testimonials + generic Cta2 on the new pages; turn new modules on)

Presence can't distinguish "curated" from "placeholder," and `Testimonials` is global (no per-doc
data), so an **explicit per-document flag** is needed.

**Recommendation:** add one boolean `modularLayout` (default false) to the `services` doc.
- `true` → render `ProjectShowcase` + `Investment`; **hide** the generic mid-page `Cta2` and the global
  `Testimonials`; hero uses Start-a-project (already universal).
- `false` (all existing 16) → today's layout exactly (minus the two universal fixes).

Alternative if you prefer finer control: `enabledModules: string[]` (array of module keys). More
flexible, slightly more schema. I recommend the boolean for now.

---

## 4. Pricing — single source

Create **`src/content/servicePricing.js`** — one map keyed by slug with the approved "from" figure and
its framing, plus the warranty copy constant. The `Investment` module imports it. This is the single
source; it is **not** duplicated per page and **not** the unapproved `options.pricingCard`.

```
web-design-development → from £1,500 — "Web projects from £1,500 — from focused business
                                        websites through to larger custom builds."
ecommerce             → from £3,500 — scoped by platform, catalogue size and integrations.
warranty              → "three months of free support after launch on what we built…"
```

Alternative: a Sanity **pricing singleton** (editable in Studio). More schema/Studio work; propose only
if you want non-developers to edit prices. Recommend the code module now.

---

## 5. Schema additions needed (Studio spec for Hassan — external)

New fields on the `services` type (I populate via API + project in GROQ now; you add the Studio
definitions so they're editable — O13 pattern):

1. Section header fields — a small `heading { label, title, description }` object on `partnerWithUs`,
   `expertise`, `methodology` (and reuse for the new modules).
2. `specialistLinks` — array of `{ label, href }` (or references to other `services`) for the
   cross-links (Web → WordPress, Migrations, Accessibility, Speed; Ecommerce → Shopify), rendered as a
   band that reads as **part of the parent offer**, not competing services.
3. `modularLayout` boolean (or `enabledModules[]`) — the §3 gate.

`projectShowcase` and `options` already exist in the schema.

---

## 6. Impact on the 16 existing pages (must still render)

| Change | Effect on the 14 non-CP-05 pages |
|---|---|
| Book a Call → Start a project | **Changes all 16** — intended (D40). |
| Banned partner header → compliant default | **Changes all 16** — intended. |
| Hardcoded headers → content-with-default | **No visual change** (defaults = current strings). |
| Optional icons/images | No change (they all have assets). |
| Adaptive grids | No change (counts unchanged; already wrap). |
| ProjectShowcase / Investment | **Stay OFF** (`modularLayout` false) — placeholder data stays hidden. |
| Cta2 + Testimonials | **Stay ON** (`modularLayout` false) — no change. |

**Nothing depends on behaviour being removed** except the two universal fixes you asked for. The
`options.pricingCard` and `projectShowcase` placeholder data remain unrendered, same as today.

---

## 7. Wrappers that need a genuine structural change (flagged, per your instruction)

- **ServicesDetailHero** — cannot serve the CP-05 pages without structural edits: it hardcodes
  Book-a-Call and *requires* a hero image. Both are fixable inside the refactor (remove; make optional).
  Not a blocker, but it is a real edit to a shared component — calling it out.
- **Investment vs `options.pricingCard`** — the existing pricing data is unapproved and inconsistent, so
  the new `Investment` module must **ignore** `pricingCard` and read the single source. This is a
  deliberate structural decision (don't surface existing pricing data), not a workaround — confirming it
  with you.

No wrapper is a hard blocker; both structural items are handled above.

---

## 8. Open decisions for Hassan (gate before I implement)

1. **Gating field** — OK to add `modularLayout` boolean (recommended), or prefer `enabledModules[]`?
2. **Pricing source** — code module `servicePricing.js` (recommended now) or Sanity pricing singleton?
3. **Studio fields** — confirm you'll add the §5 field definitions in Studio (I'll hand you the spec)
   so the new copy + specialist links + gate are editable.
4. **The 14 other docs** — leave their placeholder `projectShowcase` + unapproved `options.pricingCard`
   hidden (recommended; clean in a later content pass), or address now?
5. **Universal changes** — confirm removing Book a Call and replacing the banned partner header on all
   16 now, as part of this refactor.

---

## 9. Sequence (after approval)

1. Refactor the 5 wrappers (content-with-default, optional assets, adaptive grids, no Book a Call, no
   banned phrase). Build `ProjectShowcase` + `Investment`. Add the `modularLayout` gate in `page.jsx`.
2. Extend the GROQ query with the new fields; create `servicePricing.js`.
3. **Verify all 16 existing pages still render** (prod build + spot-check a few at 375/768/1440).
4. Author the `web-design-development` doc (staging) covering the 10 commercial-page questions +
   specialist links; wire; verify at 3 breakpoints; **commit; stop for review.**
5. Author the `ecommerce` doc; verify; commit.
6. Hand Hassan the Studio schema spec for the new fields.

Nothing here is pushed. Status log updated as work proceeds.

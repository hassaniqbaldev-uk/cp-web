# 13 — Implementation Status Log

Running log for the CreativePixels transformation programme. Newest entries at the
top of each section. This file is the source of truth for "what has actually been
done to the repo", as opposed to the plan. A future session with no chat history
should be able to reconstruct the state of play from here.

---

## Programme state

| Item | Value |
| --- | --- |
| Current task | **Step 1 site hygiene (D34) — COMPLETE.** Next: Step 2 (consolidation) after O8/O11 sign-off |
| Branch | `development` |
| Started | 12 August 2026 |
| Sign-off authority | Hassan |
| Status | CP-00 done. Step 1 (keyboard nav, carousel pause controls, real dialog) implemented, build- and browser-verified. **Awaiting Hassan's O8/O11 sign-off before Step 2 / consolidation.** No migration/schema change performed |

Do not start Step 2 (the Sanity consolidation) or CP-01 until Hassan signs off O8
(platform consolidation) and O11 (taxonomy reconciliation ruleset).

---

## Step 1 — Site hygiene (D34), 12 August 2026

Three accessibility fixes, each its own commit, each build- and browser-verified. Built
as reusable bases for the later rebuild (Steps 2–3), not throwaway patches.

| # | Fix | What & why | Verification | Commit |
| --- | --- | --- | --- | --- |
| 1.1 | Keyboard-accessible mega menu | Replaced the mouse-only, ARIA-less dropdowns with Radix `NavigationMenu` (`MainNav`, used by both `Header` and `HomeHeader`). Triggers are buttons with `aria-expanded`/`aria-controls`; panels open on click/hover/keyboard, close on Escape, are Tab-reachable; focus-visible rings added. Fixes WCAG 2.1.1/4.1.2 on primary nav | Browser: `aria-expanded` toggles, panel opens with all 16 links, correct 127.2rem geometry | `97d1aaf` |
| 1.2 | Carousel pause controls | One reusable accessible control (`CarouselAutoplayControl`, via Swiper `container-end` slot) toggling autoplay with `aria-pressed`; starts paused under `prefers-reduced-motion`. Wired into all 30 autoplay carousels. Fixes WCAG 2.2.2 | Browser: control stops/restarts autoplay on homepage and services (5 controls) | `21820b3` |
| 1.3 | Real modal dialog | Job-application modal moved from an opacity-toggled `<div>` to Radix `Dialog`: `role="dialog"`, focus trap, Escape, focus return to the Apply button, scroll lock, screen-reader title | Browser (`/careers`): role/name/focus-trap confirmed, focus returns on close, clean unmount | `4d7bdbc` |

Added deps: `@radix-ui/react-navigation-menu ^1.2.22`, `@radix-ui/react-dialog ^1.1.23`.

Not throwaway: `MainNav` is the base for the rebuilt navigation; `CarouselAutoplayControl`
carries into the consolidated slider in Step 3; the `Dialog` pattern is reused for the
enquiry flow.

---

## O8 / O11 — Content platform (validated; awaiting sign-off)

- **O8 (consolidate five Sanity projects → one, Option A):** validated in
  `CP-00K-validation.md`. Confirmed: no `staging` dataset exists (all five 404), 0 drafts
  today, ~138 content docs + 852 image assets.
- **O11 (taxonomy reconciliation ruleset):** four taxonomies (service/technology/
  industry/capability), nothing deleted, `hasPage` flags. See
  `CP-00K-taxonomy-reconciliation.md`.
- **Effort (D31, 6–8 days): confirmed reasonable** on the schema findings, with the
  reconciliation as the swing. See the completion report / validation doc.
- **`services` vs `solutions` modelling recommendation: keep TWO document types sharing
  extracted object/field definitions, not one discriminated type.** Rationale recorded in
  the completion report. They have different URL namespaces, nav, SEO intent (CP-09), and
  taxonomies (services get `pillar`; the 9 industry-solutions move out to `industry` per
  D29), and industries/case-studies are already becoming distinct types, so a shared
  polymorphic type would fight the IA and complicate every query.

---

## CP-00J — Phase 0 fix log (earlier)

| # | Date | File(s) | Change | Commit |
| --- | --- | --- | --- | --- |
| 1 | 12 Aug | solutions/[slug], call | Emit top-level `alternates.canonical` | `392145b` |
| 2 | 12 Aug | contants/index.js, caseStudiesCard.js | Remove dead constant + `export *` | `e6f41ee` |
| 3 | 12 Aug | package.json | Declare `@radix-ui/react-switch` | `f6de026` |
| 4 | 12 Aug | legal/[slug] | Fix "leagal" typo | `edb0153` |
| 5 | 12 Aug | legal/[slug] | Title `h4`→`h1`, sections `h5`→`h2` (D22) | `e39aa60` |
| 6 | 12 Aug | 3 routes + 2 components + robots/Header | Delete test routes (D16) | `5d83229` |

---

## Milestones

- CP-00 audit + crawl + Phase 0 fixes (see `01`/`02`/`03`, crawl in `03-crawl-raw.jsonl`).
- Hassan D15–D34 intake; `CP-00K-content-platform-decision.md`,
  `CP-00K-taxonomy-reconciliation.md`, `CP-00K-validation.md` in repo.
- **Step 1 hygiene complete** (`97d1aaf`, `21820b3`, `4d7bdbc`).

---

## Outstanding / blocked

- **Hassan sign-off:** O8 (Option A), O11 (taxonomy ruleset). These gate Step 2.
- **O12** (Claude Code): confirm no case-study taxonomy slug appears in a live URL before
  normalising the malformed ones — do during the migration prep.
- **O9** (Hassan): Cal.com link views before treating D8 as settled.
- **www → apex (D21)**, secrets rotation, `/solutions/saas-companies` blank meta
  description (content edit, deferred to the D23/D24 workstream): Hassan / later phases.

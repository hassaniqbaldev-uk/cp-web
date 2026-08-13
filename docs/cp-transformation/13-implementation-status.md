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

Three accessibility fixes, each build- and browser-verified. **1.1 and 1.2 were first
implemented with Radix NavigationMenu and a flow-level carousel control; both caused
visual regressions and were reverted (`a1914dd`), then reimplemented behaviour-only on
the original markup.** The dialog (1.3) was kept as-is (no regression).

| # | Fix | Final approach | Commit(s) |
| --- | --- | --- | --- |
| 1.1 | Keyboard mega menu | Keyboard/ARIA added to the **existing** dropdown markup (no DOM/class change, no Radix): `aria-expanded`/`aria-controls`/`id`, ArrowDown/Enter/Space open, Escape closes + returns focus to trigger, `onBlur` closes on Tab-out. Disclosure pattern (focus stays on trigger, Tab enters panel). | first `97d1aaf` → revert `a1914dd` → redo `5705963` |
| 1.2 | Carousel pause controls | One reusable `CarouselAutoplayControl` (Swiper `container-end` slot + `useSwiper`), **absolutely positioned** so it adds no layout space; `aria-pressed`, starts paused under `prefers-reduced-motion`. No Swiper layout config changed. All 30 autoplay carousels. | first `21820b3` → revert `a1914dd` → redo `16edbfa` |
| 1.3 | Real modal dialog | Job-application modal on Radix `Dialog`: `role="dialog"`, focus trap, Escape, focus return to the Apply button, scroll lock, SR title. | `4d7bdbc` (kept) |

Why the first attempt regressed: 1.1 replaced the dropdown DOM with `NavigationMenu`
(new `nav>ul>li` nesting, panel moved into an `li`, flex/centering classes moved off the
`<nav>`), shifting menu-item layout and mega-panel alignment; 1.2's control was a
flow-level block that added vertical space below carousels. Neither changed Swiper config.

Deps: `@radix-ui/react-dialog ^1.1.23` (dialog). `@radix-ui/react-navigation-menu` was
added then removed with the revert.

Verification: nav markup/classes confirmed byte-identical to original, `aria-expanded`
toggles, panel opens, Escape returns focus; carousels verified at 375 / 768 / 1440 with
controls out of flow, in-bounds, autoplay toggling, and no horizontal overflow. Builds
clean throughout.

Reusable bases retained: `CarouselAutoplayControl` carries into the Step 3 consolidated
slider; the `Dialog` pattern is reused for the enquiry flow. (The nav is now a
behaviour-only layer on the existing components rather than a new `MainNav`.)

### Step 1 verification pass (post-review, 13 Aug 2026)

Reviewed against three concerns. **No code changes were needed — all three were already
correct.** Verified with trusted (CDP) input on a local production build:

- **Tab from trigger into panel does not close it.** `handleClose` (the `onBlur`) checks
  `relatedTarget`: if focus moves to an element inside the panel or back to the trigger,
  it returns without closing. Real Tab moved focus onto `/services/branding` with the
  menu staying open (`aria-expanded` remained true).
- **Escape from inside the panel** closes it and returns focus to the trigger. The
  panel's `onKeyDown` handles Escape and `keydown` bubbles from any focused panel link.
  Real Escape from a focused panel link closed the menu and refocused the trigger.
- **prefers-reduced-motion** is honoured: the carousel control reads
  `matchMedia("(prefers-reduced-motion: reduce)")` on mount and calls
  `swiper.autoplay.stop()` + shows the Play state when it matches. Verified the stop path
  against a live running carousel (`running: true → false`). OS-level emulation is not
  available in the test pane, so the query→stop path was confirmed by code plus a
  concrete run rather than by toggling the OS setting.

Outside-click: the original mega menu had **no document click-outside listener**; it
closed via `onMouseLeave` (pointer leaving the panel), plus link click, re-toggle and the
header's scroll handler. That `onMouseLeave` is preserved unchanged, so mouse
close-behaviour is identical to before; the added `onBlur` additionally closes it when
keyboard focus leaves. No dedicated click-outside handler was added (there was never one).

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

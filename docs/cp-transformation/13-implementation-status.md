# 13 — Implementation Status Log

Running log for the CreativePixels transformation programme. Newest entries at the
top of each section. This file is the source of truth for "what has actually been
done to the repo", as opposed to the plan. A future session with no chat history
should be able to reconstruct the state of play from here.

---

## Programme state

| Item | Value |
| --- | --- |
| Current task | **Step 3 in progress — forms.** Shared `Form` core built + proven on ContactForm; awaiting review before migrating the other 3. Headers/nav after. Sliders COMPLETE (30 migrated) |
| Branch | `development`, reading the new project's **staging** dataset (`4m0eqoi1` / `staging`). Not merged to main |
| Started | 12 August 2026 |
| Sign-off authority | Hassan |
| Status | CP-00 + Step 1 done. O8/O11 signed off. **CP-00K consolidation executed on `development` against staging**: five Sanity projects → one, code wired to one client, field renames, draft-mode + revalidation routes, nav regression + dead-end fixes, form spam fix. Production still reads the five old projects. Nothing merged; no Vercel production change |

### Standing working rules (apply every task)

All work stays on `development` reading the **staging** dataset until the full brief is
complete and Hassan signs off final cutover.

- Commit to `development`, never to `main`. Never merge to `main`; never ask whether to.
- Never change a Vercel **production** environment variable.
- Never write to the five old Sanity projects — they stay read-only as the rollback path.
- The live site keeps reading the old projects until final cutover.
- Keep `development` up to date with `main` as work proceeds; flag conflicts that need Hassan.
- Keep this file current with every task.
- At the end of each task, state plainly what is safe to review on staging and what is unfinished.

---

## Step 3 — component cleanup (in progress), August 2026

Plan `step-3-component-cleanup-plan.md` approved as written (schema fields for nav labels,
5–7 days, header merge + data-driven nav last). Working in order: **sliders → forms →
headers/nav**, stopping after each for Hassan's review.

### Forms — shared `Form` core built + proven on ContactForm (checkpoint, `e383c87`)

- **`src/lib/analytics/events.js`** — one GA4 event-name registry + safe-no-op `track()`.
  `enquiry_step_2`/`step_3` and `industry_selected` are marked **PENDING host UI** (the
  multi-step enquiry flow and CP-08 industry routes do not exist), so they are wired-ready
  but must not be claimed live.
- **`src/components/forms/Form.jsx`** — **headless** shared core. Each form keeps its own
  field markup (as children); it inherits by default: honeypot spam protection
  (auto-injected + checked — impossible to omit), a11y (role=alert aria-live announcement,
  focus-to-first-invalid on failed submit, `aria-invalid`/`aria-describedby` via
  `fieldProps`), and GA4 `enquiry_started` + `enquiry_submitted`. Transport `json` |
  `multipart` (for the job form's file upload).
- **ContactForm migrated** and its a11y bugs fixed (service `<label>` now associated with
  the Radix Select via `id="service"`; per-field errors announced + wired). Markup,
  endpoint (`/api/contact`) and success redirect preserved.

**Current-form a11y defects the core fixes (measured):** (1) no SR error announcement
(plain `<p>`, no live region) — all 4; (2) no focus move to the first invalid field — all
4; (3) no `aria-invalid`/`aria-describedby` — all 4; (4) broken/missing label association —
ContactForm `htmlFor="service"`→nothing, AuditForm `htmlFor="revenue-range"`→nothing,
JobApplicationForm has no `htmlFor`/`id` at all; (5) decorative `*` not tied to required.

**Verified (fetch stubbed → no real email sent):** invalid submit announces + moves focus +
sets `aria-invalid`; valid submit posts the correct `/api/contact` payload incl the
`website` honeypot; `enquiry_started` + `enquiry_submitted` fire into `dataLayer`. Observed
`gtm.*` auto-events → a **GTM/dataLayer is already present** on the site (relevant to O7 /
CP-00L: wired events reach the dataLayer today; GA4 forwarding depends on GTM tag config).

**Design decision flagged (rule #6):** a single *declarative field-rendering* form component
would force a redesign of four visually-distinct forms (custom inputs, Radix Select, file
dropzone, differing buttons/success flows) — a design change, not a refactor. So the shared
piece is a **headless core** (logic + honeypot + a11y + GA4), and each form keeps its
markup. Confirm this shape before the remaining three are migrated.

**Not yet done (held for review):** AuditForm (real `websiteUrl` field alongside the
honeypot), LpAuditForm, JobApplicationForm (multipart + file upload + modal-close success).

### Sliders — `Carousel` primitive built + proven (checkpoint, awaiting review)

- **New `src/components/ui/Carousel.jsx`** — shared primitive replacing the ~30
  near-identical Swiper wrappers. Emits the same DOM/classes (`<Swiper className="mySwiper">`
  + `<SwiperSlide>`), auto-derives modules, and **auto-renders `CarouselAutoplayControl` at
  `slot="container-end"` whenever autoplay is on** — so every autoplay carousel inherits the
  pause control, `prefers-reduced-motion` handling and the visually-hidden-until-focus
  treatment by default, with no per-slider work. Slides via `items` + `renderItem` (raw
  `<SwiperSlide>` children also accepted); outlier props (`effect`, `centeredSlides`) pass
  through `swiperProps` / `extraModules`.
- **Migrated 2 proof sliders:** `LightFeatureCardSlider1`, `TestimonialsSlider`. Public
  props and slide markup unchanged.
- **Verified** (dev build vs staging, mobile): the migrated slider emits `.swiper.mySwiper`
  with slides carrying the exact `!flex !h-auto !justify-center px-…` classes, clickable
  pagination (bullet count = slide count), autoplay running, and the pause control present
  **with `sr-only-focusable`**. Build green.
### Sliders — ALL 30 migrated (7 batches, each a separate commit)

Rollout complete. Every component that rendered a `<Swiper>` now renders `<Carousel>`;
the real `<Swiper>` lives only in the primitive. 30 files import `Carousel`.

| Batch | Commit | Sliders |
| --- | --- | --- |
| proof | `7b37389` | LightFeatureCardSlider1, TestimonialsSlider |
| 1 cards | `d3c…`* | GlassFeatureCardSlider, LightFeatureCardSlider2, Expertise2Slider, Expertise3Slider, Values2Slider |
| 2 testimonials | — | Testimonials2Slider, LpTestimonialSlider |
| 3a | — | DifferenceSlider, DifferenceSlider2, PartnerWithUs2Slider, PoliciesSlider, ResourcesSlider |
| 3b | — | SectorSlider, SupportSlider, WorkSlider, LpResultSlider, LpServicesSlider |
| 4 heroes | — | AboutHeroSlider, CaseStudiesHeroSlider, ContactHeroSlider |
| 5 process | — | ProcessSlider, Process3Slider, Process4Slider, LpProcessSection |
| 6 sections | — | Options, Methodology, ClientOverview |
| 7 outlier | — | LpHeroSlider |

*(exact hashes in `git log`; batches committed sequentially after `7b37389`.)*

**Corrections to the earlier count (rule #6 — flagged, not forced):**
- There are **30** sliders, not 32. The earlier "33 Swiper files / 32 autoplay + 1
  non-autoplay" counted non-sliders.
- **`Testimonials2.jsx` is NOT a slider** — it renders `<Testimonials2Slider>` (already
  migrated) inside a bento section. So there is **no non-autoplay slider**; every one of
  the 30 uses autoplay and therefore carries the inherited control. The primitive's
  "autoplay off → no control" branch is correct by construction but currently unused.
- **`Blog.jsx` is NOT a slider** — it imports Swiper but renders a sticky stacked list on
  mobile (no `<Swiper>`). Its swiper imports (lines 7–10) are dead. Left untouched pending
  Hassan's decision (remove dead imports vs make it a real carousel).

**Outliers handled via props (fit the primitive, not special-cased):** `LpHeroSlider`
(fractional slidesPerView + `centeredSlides` via `swiperProps`), `LpResultSlider`
(`allowTouchMove`/`simulateTouch`/`slideToClickedSlide` via `swiperProps`), `AboutHeroSlider`
(custom className + `onSwiper` for its arrows), the Difference sliders (no pagination,
spaceBetween 10), Options (767-only breakpoint). None use Swiper `navigation` arrows; the
control is always `slot="container-end"`.

**Verification:** build green after every batch. Browser spot-check (dev vs staging) of the
visually-distinct ones — `/about` AboutHeroSlider (custom arrows + no pagination, 6 slides),
`/case-studies` CaseStudiesHeroSlider (3 slides + pagination), `/services/wordpress` mobile
(4 sliders incl. Options/Methodology/Expertise3/PartnerWithUs2), `/how-we-work` process
slider — every carousel had the pause control with `sr-only-focusable`, pagination bullets =
slide count, autoplay running; 0 controls missing the treatment. The remaining standard-shape
sliders were taken on trust (build-verified + DOM-identical by construction).

---

## CP-00K — consolidation executed + wired to staging (August 2026)

Five Sanity projects consolidated into one new project **CreativePixels** (`4m0eqoi1`).
Migration ran into that project's **production** dataset (lossless, verified) and the code
branch reads its **staging** dataset. Production site untouched — still reads the five old
projects. Rollback = revert Vercel env vars (restores to the cutover snapshot; new-project
edits are lost on rollback, no back-sync). Full plan + run results in
`CP-00K-migration-plan.md`.

### Code wiring (branch `development`, staging)

| Area | Change | Commit |
| --- | --- | --- |
| Sanity client | Five per-project clients → one `src/sanity/client.js` (+ `previewClient`, `getClient`) and one `image.js`; the five `sanity.<type>.js` / `<type>.image.js` kept as re-export shims so imports resolve unchanged | `5c50867` |
| Field renames | `partnerWithUs2` → `partnerWithUs`, `expertise3` → `expertise` in queries + detail pages (component names unchanged); data renamed on 30 docs | `5c50867` |
| Case-study taxonomy | Dropped removed `tools[]->`; added `technologies[]->` + `capabilities[]->`; ClientOverview "Tools Used" logos → "Technologies" text pills; null-guarded all four taxonomy arrays | `5c50867` |
| Detail-page guards | services/solutions detail pages 404 (not crash) on a stub doc with no `detailHero` (e.g. `ai-automation`) | `5c50867` |
| D25 routes | `/api/draft`, `/api/disable-draft` (draft mode), `/api/revalidate` (secret-checked webhook) | `5c50867` |

### Nav regression + dead-end fixes (CP-00K side-effects)

The hardcoded nav (`src/contants/navigation.js`) had drifted from the migrated data.

| Fix | Detail | Commit |
| --- | --- | --- |
| Repoint / drop nav links | `custom-apps-and-ai` → `custom-app-development`; removed six routeless sector links | `0b24dac` |
| Remove dead-end content links | Five homepage `EXPERTISE_CARD` "Explore Solutions" CTAs to routeless industries; "View all industries" → empty `/solutions/#sector` | `f611af3` |
| Hide empty-state chrome | Guard "By Sector" column/accordion (SolutionsDropdown, Footer, MobileMenu) + `/solutions` `<Sector>` on empty source; dropped Agencies card CTA for consistency | `7cdb856` |
| Docs | Nav regression + data-driven-nav scope + dead-end-vs-404 distinction into `00-context.md` §14 | `43bdbf9`, `b6e8472` |

Verified: build green throughout; every `navigation.js` href resolves (0/31 404s);
dead-end sweep clean except the two guarded empty states. blog 9 / case-studies 31 /
services 16 / solutions 5 / legal 7 pages build from staging (draft-only docs correctly
excluded by `perspective: "published"`).

### Form spam protection (standalone production-relevant fix)

`ContactForm`, `AuditForm`, `JobApplicationForm` had no honeypot while `LpAuditForm` did.
Added the same honeypot (client hidden `website` field + server `if (website) success`) to
all three + their API routes. Self-contained (6 files), no deps, no user-facing change.
Committed alone (`c86e629`).

**Deliberately held on `development` at Hassan's instruction (18 Aug 2026).** Although this
is a live-production defect and the commit is self-contained enough to cherry-pick, Hassan
directed that nothing goes to production until final cutover: no hotfix branch, no
cherry-pick, no PR. The fix ships with everything else at cutover. Recorded here so it is
not later mistaken for forgotten or lost work.

### Step 3 — plan only

Component cleanup plan written to `step-3-component-cleanup-plan.md` (`b5e160d`), awaiting
sign-off. Measured inventory: 33 sliders, 4 forms, 3 headers. No component work started.

### Carousel pause control → visually hidden but keyboard/SR accessible (18 Aug 2026)

The shared `CarouselAutoplayControl` (all autoplay carousels) is now visually hidden by
default and appears on keyboard focus. Added one unlayered `.sr-only-focusable:not(:focus)`
utility to `globals.css` (clip + 1px, **not** `display:none`/`visibility:hidden`) and the
`sr-only-focusable` class to the shared button — implemented once, inherited everywhere.
Nothing else changed: autoplay, `prefers-reduced-motion`, hover and touch behaviour are
untouched. **WCAG 2.2 SC 2.2.2 still met** (control stays focusable + announced).

Verified on a dev build against staging (mobile viewport, live carousel): resting state
1×1 with `clip: rect(0,0,0,0)`, `display:flex`, `visibility:visible`, in the a11y tree;
focused/revealed state 30×30 with `clip:auto` (its own `size-[3rem]`); activating the
control stops autoplay (`swiper.autoplay.running: true → false`). The reveal-on-real-focus
could not be shown through the automation pane (`document.hasFocus() === false`, so CSS
`:focus` never matches programmatic focus) — an environment limit, confirmed by reproducing
the exact `:focus` cascade via class removal.

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

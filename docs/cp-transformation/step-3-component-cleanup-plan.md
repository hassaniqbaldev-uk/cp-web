# Step 3 — Component cleanup plan

**Status:** plan for approval. No code written. Nothing in this document is implemented.
**Scope owner:** section 14 of `00-context.md` ("good standing", step 3).
**Branch:** `development` (not merged). No Vercel production change.

The goal of Step 3 is to collapse near-identical components into a small set of shared
primitives, and to build the D14 analytics, the consent layer, WCAG 2.2 AA behaviour, and
data-driven navigation **into those primitives as they are written** — not retrofit them.
Everything a page inherits from a primitive is something we never have to fix per-page
again.

---

## 0. Corrected inventory (measured, not estimated)

The section 14 estimate of "~19 sliders, 3 forms, 3 headers" undercounts the sliders. The
actual duplication, measured from the codebase:

| Family | Count | Files (representative) |
| --- | --- | --- |
| **Sliders (Swiper)** | **33 files** | 32 dedicated `*Slider` + 4 section-embedded (`Blog`, `ClientOverview`, `Methodology`, `Options`); `CarouselAutoplayControl` is the shared Step-1 control and is kept |
| — of which use autoplay | **32** | every slider except one — all need the Step-1 pause control + reduced-motion |
| **Forms** | **4** | `ContactForm`, `AuditForm`, `JobApplicationForm`, `LpAuditForm` (Audit + LpAudit are near-duplicates) |
| **Headers** | **3** | `Header` (secondary pages), `HomeHeader` (transparent/hero), `LpHeader` (landing) |
| **CTAs / buttons** | ~7 | `Cta`, `Cta2`, `StickyCta`, `LpCtaSection`, `PrimaryButton`, `GradientButton`, `LpPrimaryButton` |

**Implication for the estimate:** 32 sliders rather than 19 pushes the slider migration
from the largest single task to roughly 1.5× the section-14 assumption. The revised total
(§5) is ~5–7 days, above the §14 "3–5 days". Flagging now, not at the end.

---

## 1. Which components merge, what the shared version must handle, where trouble is

### 1a. One `<Carousel>` primitive replaces 33 sliders

Config surface measured across the 33 files (occurrence counts): `pagination` ×51,
`autoplay` ×36, `loop` ×30, `slidesPerView` ×28, `breakpoints` ×28, `spaceBetween` ×27,
`navigation` ×6, `centeredSlides` ×1.

**The primitive must parametrize:** `modules`, `slidesPerView` + responsive `breakpoints`,
`spaceBetween`, `loop`, `autoplay` (with `delay`), `pagination` (on/off + style),
`navigation` (on/off), `centeredSlides`, and **slide content via children / render-prop**
so each caller keeps its own markup. Autoplay sliders inherit the Step-1 pause control and
reduced-motion behaviour automatically.

**Where trouble is expected:**
- **Two migration shapes.** 28 are standalone `*Slider` components; 4 (`Blog`,
  `ClientOverview`, `Methodology`, `Options`) embed Swiper *inside* a section component.
  The section-embedded ones are more entangled with surrounding layout.
- **Bespoke breakpoints and slide markup.** Each slider has its own `slidesPerView` per
  breakpoint. The content API must be flexible enough to not force a single card shape.
- **The card-tied sliders.** `LightFeatureCardSlider1/2`, `GlassFeatureCardSlider`,
  `Expertise2/3Slider` render specific card components — migrating the slider and the card
  are coupled.
- **SSR.** Several sliders are `dynamic(..., { ssr: false })`. The primitive must preserve
  that per-caller, or hydration/layout shifts appear.
- **Outliers.** `centeredSlides` (1) and `navigation` arrows (6) are minority configs that
  still must be supported, not dropped.

**Risk class: mostly behaviour-preserving, but structural if the DOM/classes change** —
see §6. Mitigation: the primitive must emit the **same DOM structure and class names** as
Swiper does today; migrate **one** slider first, visually diff at 3 breakpoints, then roll
out. This is the exact failure mode from Step 1's carousel.

### 1b. One `<Form>` primitive replaces 4 forms

Each form POSTs to its own endpoint: `/api/contact`, `/api/audit`, `/api/job-application`,
`/api/lp-audit`.

**The primitive must handle:** a field schema (per form), the target endpoint, validation
rules, submit/pending/success/error state, a **honeypot standardized across all four**
(only `LpAuditForm` has one today — a real spam gap on the others), success/thank-you
behaviour, the D14 enquiry events (§3), and **UTM preservation into the payload**.

**Where trouble is expected:**
- **`ContactForm` is not a peer** — it is the multi-step enquiry flow (Steps 1/2/3, each a
  separate GA4 event). It is richer than the audit/job forms and drives the funnel. The
  primitive needs a multi-step mode, not just single-submit.
- **`JobApplicationForm` has file upload** — a field type the others don't have.
- **Different payloads/endpoints** — the shared layer abstracts transport, not shape.

**Risk class: behaviour-only** (no layout DOM depends on form internals), but the enquiry
flow's step logic is the highest-value, highest-care part.

### 1c. One `<SiteHeader variant>` replaces 3 headers

`Header`, `HomeHeader`, `LpHeader` differ by variant styling (transparent-over-hero vs
solid), which nav they expose, and sticky/hide-on-scroll behaviour.

**The primitive must handle:** a `variant` prop (`default` / `home` / `lp`), sticky + hide
behaviour, and the **Step-1 disclosure mega-menu** as its single nav implementation.

**Where trouble is expected: this is the highest-risk merge in Step 3.** It is the
mega-menu that broke in Step 1 when the DOM changed. Merging three headers into one
necessarily touches that DOM. Treat as structural (§6): behaviour-preserving only, keep the
Step-1 disclosure markup exactly, verify at 375/768/1440 before commit, and do it **last**
so the rest of Step 3 is already stable.

---

## 2. Navigation becomes data-driven

**Problem being solved:** navigation is a hardcoded constants file (`src/contants/
navigation.js`), which silently drifted from the dataset during CP-00K and produced 7
broken links + 2 empty-state dead ends. Hardcoding guarantees this recurs every phase.

**Source of truth:** a server component fetches, at build time (with the D25 on-demand
revalidation already wired), from the consolidated dataset:
- `services` → `title`, `slug`, `pillar`, `category`, `hasPage`
- `industries` → `title`, `slug`, `hasPage`

It groups services by pillar/category for the mega-menu columns, and lists
`industries[hasPage == true]` for the sector column. The result is passed to the shared
`SiteHeader`, `Footer`, and `MobileMenu`. A renamed slug, an unpublished doc, or a
`hasPage: false` flag propagates automatically — **content changes can no longer break a
link**, because the link no longer exists independently of the content.

**Empty states are handled by default, not as an afterthought.** The shared `NavColumn`
primitive renders **nothing** — heading, icon, wrapper included — when its source array is
empty. That single rule, baked into the primitive, is what makes "By Sector with zero
industries" impossible to ship. This is the CP-00K dead-end lesson encoded structurally:
"zero 404s" and "no dead ends" are different tests, and the second lives in the render.

**Schema dependency (must decide before building):** the current nav carries `label` and
`excerpt` strings not present on the Sanity docs. Either (a) add `navLabel` / `navExcerpt`
fields to `service` / `industry`, or (b) derive label from `title` and drop the excerpt.
Recommend (a) for editorial control. This is a small schema addition to agree first.

**Risk class: structural (mega-menu DOM) — high.** Same surface as Step 1. See §6.

---

## 3. GA4 events — attach point, component by component

**Foundation first (ships before any event fires):**
- **One shared constant** for event names (`analytics/events.js`). Never string literals at
  call sites — a typo is a silent failure (§10 implementation note).
- **Consent layer** — a privacy-preserving banner (decline non-essential by default). GA4
  loads **only after consent**. Whether GA4 is direct or via GTM, and property reuse, is
  the CP-00L / O7 decision; the consent gate is built regardless.
- **UTM capture** on entry, preserved through the enquiry steps into the submitted payload.

| Event | Attaches in | Fires when |
| --- | --- | --- |
| `cta_click` | shared **Button/CTA primitive** (`Cta`/`Cta2`/`StickyCta`/`PrimaryButton`/`GradientButton`) | any CTA click — routing every CTA through the primitive gives `cta_label` + `cta_position` for free |
| `enquiry_started` | shared **Form** (enquiry mode), Step 1 | first interaction with Step 1 |
| `enquiry_step_2` / `enquiry_step_3` | shared Form, step transitions | step reached |
| `enquiry_submitted` | shared Form, submit success | `/api/contact` succeeds |
| `call_booking_clicked` | **Book-a-call control** | clicked from thank-you state or `/contact` |
| `case_study_view` | **case-study detail page** | page viewed |
| `service_selected` / `solution_selected` / `industry_selected` | **data-driven nav link** + hub cards | chosen from nav / hub / card |
| `pricing_view` | **`Options` / pricing module** | module enters viewport (IntersectionObserver) |
| `email_click` / `phone_click` | shared **contact-link** component | link clicked |

Parameters per §10: `page_path`, `page_type`, `service_pillar`, `service`, `solution`,
`industry`, `cta_label`, `cta_position`, `device`, `source`/`medium`/`campaign`. Every
event verified in **GA4 DebugView before the phase closes**, not at launch.

Because events live in the primitives (CTA, Form, nav link, contact-link), pages inherit
them — no page-by-page retrofit.

---

## 4. Where WCAG 2.2 AA behaviour lives (inherited, not repeated)

Each behaviour is built into the primitive so every caller inherits it:

| Primitive | 2.2 AA behaviour it owns |
| --- | --- |
| `<Carousel>` | Step-1 pause control; keyboard operation; `aria-roledescription="carousel"` + slide labels; **respects `prefers-reduced-motion`** (no autoplay); focus stays on-screen when slides change |
| `<Form>` | label association; `aria-invalid` + `aria-describedby` errors; focus moves to first error; required indication; `aria-live` success announcement |
| `<SiteHeader>` nav | Step-1 disclosure pattern (keyboard, Escape, outside-click, focus return); `aria-expanded`; **target size ≥ 24×24 (2.2)**; **focus not obscured by sticky header (2.2)** |
| `<Dialog>` | Step-1 real dialog (focus trap, Escape, `aria-labelledby`) |
| Button / link | visible focus indicator; accessible name; not conveyed by colour alone |

New-in-2.2 criteria to watch specifically: **2.4.11 Focus Not Obscured** (the sticky/
hide-on-scroll header must not cover a focused element), **2.5.8 Target Size (Minimum)**
24×24, and **3.3.8 Accessible Authentication** (no cognitive test in forms — relevant to
the enquiry flow). The site sells accessibility at `/services/accessibility`, so this is
credibility, not just compliance.

---

## 5. Order and rough estimates

Dependencies drive the order: primitives before migrations; the risky header merge last.

| # | Work | Depends on | Est. |
| --- | --- | --- | --- |
| 5a | **Foundation:** event-name constants, consent layer, analytics wrapper, UTM capture | — | 0.5–1 d |
| 5b | **`<Carousel>` primitive** + migrate 33 sliders (one first, diff, then roll out) | 5a (for `pricing_view` etc.) | 1.5–2 d |
| 5c | **`<Form>` primitive** + migrate 4 forms + enquiry events + honeypot everywhere | 5a | 1 d |
| 5d | **Data-driven nav**: schema fields, fetch, `NavColumn` empty-state rule | schema decision (§2) | 1–1.5 d |
| 5e | **Header merge** (`SiteHeader variant`) — behaviour-preserving, last | 5d | 0.5–1 d |
| 5f | **Verification**: GA4 DebugView for every event; WCAG pass at 375/768/1440 | all | 0.5 d |

**Total ~5–7 days** (vs the §14 "3–5 days"; the delta is the 32-vs-19 slider count and the
consent layer). Each sub-step is committed separately and build-verified, matching how
CP-00K was run.

---

## 6. Layout risk — behaviour-only vs structural

Step 1's lesson: the mega menu broke when the **DOM structure changed**, and layout broke
when a control moved into the flow. The mitigation is a hard rule — **reproduce exact
markup and class names, no DOM restructuring, visual-diff at 375/768/1440 before commit,
migrate one instance before rolling out.**

**Behaviour-only (LOW risk)** — no layout DOM depends on these:
- Form validation, submit state, enquiry events, honeypot.
- GA4 attach points in CTA/Form/nav-link/contact-link primitives.
- Consent layer.
- Slider a11y (pause, keyboard, reduced-motion) **provided the primitive emits the same
  DOM/classes** per caller.

**Structural (HIGH risk)** — these change DOM and must be treated as such:
- **Header merge (5e).** The mega-menu DOM that broke in Step 1. Highest risk. Do last,
  behaviour-preserving, verify at 3 breakpoints.
- **Data-driven nav (5d).** Moves nav from static arrays to fetched data — same mega-menu
  DOM. High risk. The `NavColumn` empty-state rule must be proven on one column first.
- **`<Carousel>` primitive (5b) if it alters DOM/classes.** Same failure mode as the Step-1
  carousel. Neutralised only by emitting identical structure and diffing one slider before
  the other 32.

**Explicitly low-danger structural:** the `<Form>` and CTA primitives — their internal DOM
is self-contained and not depended on by page layout.

---

## What I am asking approval for

1. The three shared primitives (`Carousel`, `Form`, `SiteHeader`) and the merge scope in §1.
2. The data-driven nav approach in §2, **including the small schema addition** (`navLabel`
   / `navExcerpt` on `service` / `industry`) — or a decision to derive from `title`.
3. The GA4 + consent build-in from §3 (with GTM-vs-direct deferred to CP-00L / O7).
4. The order and ~5–7 day estimate in §5, above the §14 figure.
5. The risk posture in §6: header merge and data-driven nav are structural and go last,
   behaviour-preserving, verified at three breakpoints.

No component work begins until this is signed off.

# 02 — Component Map (CP-00C) with KEEP / REFACTOR / REPLACE and per-component A11y (CP-00H)

Scope: `src/components/**` (165 `.jsx` components) plus the button/section primitives.
Framework: Next.js 16 App Router, Tailwind v4, JSX. Data sources: five Sanity
projects (via `urlFor`), `@/contants` constants, Zustand stores (`mobileMenuStore`,
`useServiceStore`), and large hardcoded in-file arrays. Cal.com booking is wired to
one personal slug `hassan-iqbal-mznzu9/15min` in ~13 components.

Decision legend: **KEEP** (good, reusable, accessible enough, on-brand), **REFACTOR**
(useful but duplicated/fragile/inaccessible), **REPLACE** (blocks new architecture,
dead, or fundamentally wrong).

Headline: the component layer works and looks consistent, but it is **heavily
duplicated** (same job done 2 to 19 times), **almost entirely client-rendered** (140
of 165 files carry `"use client"`), and **systematically inaccessible** (6 `aria-*`
attributes in the whole tree, 0 `prefers-reduced-motion`, autoplay carousels with no
pause control, mouse-only mega-menus). None of this blocks CP-01, but the CTA and card
components must be touched anyway for D7/D8/D14, so that is the moment to fix them.

---

## 1. CTA-rendering components (feeds CP-00I and D7/D8/D14)

Every component below renders a call-to-action and will need the new CTA labels and
the D14 analytics events wired in. This is the instrumentation checklist.

**Booking (Cal.com `hassan-iqbal-mznzu9/15min`):** `Header`, `HomeHeader`, `Footer`,
`MobileMenu`, `GradientButton`, `AgenciesHero`, `CallHero`, `ContactHero`,
`ContactHeroSlider`, `HomeHero`, `ServicesHero`, `SolutionsHero`, `TestimonialsHero`,
`ServicesDetailHero`, `Cta`, `Cta2`, `LpFooter`, `LpHeader`. (`LegalHero` initialises
Cal but renders no booking button, a dead effect.)

**Audit lead-gen (`/audit` or `/api/[lp-]audit`):** `Header`, `HomeHeader`,
`MobileMenu`, `AuditHero` + `AuditForm`, `ServicesDropdown`, `FeaturedCaseStudies`,
`LpAuditForm`, and the LP CTA sections.

**Contact / enquiry / proposal:** `ContactForm` (`/api/contact`), `Contact`,
`MobileMenu` ("Contact Us" → `/contact`), `Cta` ("Book a Call" → `/contact`),
`StickyCta` (dead, → `/call`), `TheSolution` ("Book a Call" → `/call`), `Process`
("Start Your Project" → `/contact`), `Options` ("Request Proposal" → `/contact`),
`Questions` / `DynamicQuestions` ("Have More Questions?" → `/contact`),
`Opportunities` + `JobApplicationForm` (`/api/job-application`), `CaseStudiesDetailHero`
(CMS `ctaButton`).

**Contact detail links (tel/mailto):** `Footer`, `MobileMenu`, `ContactHero`,
`ContactHeroSlider`, `LpHeader`, `LpFooter`.

**Label / destination inconsistencies to resolve at D7/D8:**
- "Book a Call" resolves to three different destinations: Cal.com (header/footer/
  mobile/heroes), `/contact` (`Cta.jsx:105`), and the dead `/call` (`StickyCta.jsx:72`,
  `TheSolution.jsx:78`).
- "Get Free Consultation" (`Cta.jsx`, `Cta2.jsx`, `Footer.jsx:86`) and "Book a
  Strategy Call" (three heroes) are extra booking labels outside the approved set.
- Per D8, Book a Call must be demoted to the enquiry thank-you state and `/contact`
  only. It currently appears on every page in header, footer, and mobile menu.

Full CTA text/destination/position table is in `01-codebase-audit.md` section 8
(CP-00I).

---

## 2. Inventory by folder, with decisions

### `layout/`

| Component | Client | Data / CTA | A11y defects (file:line) | Decision |
| --- | --- | --- | --- | --- |
| `Header.jsx` | yes | `usePathname`, `mobileMenuStore`; **Free Audit** (:182), **Book a Call** Cal (:220) | icon-only hamburger no `aria-label` (:211); `onClick` on `<div>` (:219); dropdowns expose no expanded state | REFACTOR (share a `<SiteHeader variant>` + `useCalcom()` with HomeHeader/LpHeader) |
| `HomeHeader.jsx` | yes | near-duplicate of Header + loader anim | icon-only hamburger (:233); duplicate logic | REFACTOR (merge with Header) |
| `Footer.jsx` | yes | `@/contants` nav, `FOOTER_CARD`; **tel** (:99), **mailto** (:130), **Book a Call** Cal (:161), **Get Free Consultation** (:86) | icon-only social links unlabeled, `alt="Icon"`; **empty `href=""`** (:758); hardcoded contact/address/copyright | KEEP; REFACTOR duplicated nav + move hardcoded data to constants |
| `MobileMenu.jsx` | yes | `mobileMenuStore`, nav constants; **Free Audit**, **Contact Us**, tel/mailto, **Book a Call** | overlay `<div onClick>` close, no Esc, no focus trap (:69); close btn icon-only (:100) | KEEP; REFACTOR (add focus trap + Esc) |
| `Navigation.jsx` | no | none | dead stub: returns `<div>Navigation</div>`, imported nowhere | **REPLACE/DELETE** |

### `ui/` primitives

| Component | Client | Notes | A11y | Decision |
| --- | --- | --- | --- | --- |
| `PrimaryButton.jsx` | yes | canonical pill, `next/link` | no `focus-visible`; `target` set without `rel` | KEEP (canonical) |
| `SecondaryButton.jsx` | yes | `motion.button`, spreads `data-cal-*` | no `focus-visible` | KEEP |
| `GradientButton.jsx` | yes | hardcoded Cal book-with-Hassan | avatar `alt="Avatar Image"`; no focus style | KEEP (niche) |
| `SectionTitle/Label/Description.jsx` | no | h2 / uppercase span / p, `textColor` prop | `SectionTitle` hardwired to `<h2>` regardless of context, causes heading-order issues | KEEP; REFACTOR (configurable heading level) |
| `accordion.jsx` | yes | Radix wrapper | keyboard/aria compliant | KEEP |
| `select.jsx` | yes | shadcn/Radix | references **undefined** shadcn CSS vars; malformed variant `data-[state=closed] :animate-out` (:46); `shadow-01` undefined | REFACTOR (fix bug + define tokens) |
| `dropdown-menu.jsx`, `tabs.jsx` | yes | shadcn wrappers | **imported nowhere** (dead) | REPLACE/DELETE (+ drop deps) |
| `switch.jsx` | yes | Radix | ships unlabeled; **`@radix-ui/react-switch` missing from package.json** | REFACTOR (declare dep, add label) |
| `Counter.jsx`, `StatsCounter.jsx` | yes | framer count-up | no `aria-live`/static fallback; near-duplicates | REFACTOR (merge) |

### `ui/` forms

| Component | Endpoint | A11y | Decision |
| --- | --- | --- | --- |
| `ContactForm.jsx` | `/api/contact` → `/thank-you` | labels associated (good); `outline-0` kills focus ring (:101…); `<fieldset>` without `<legend>`; status `<p>` no `role="alert"`/`aria-live` (:270) | REFACTOR (focus + aria-live + one shared `<LeadForm>`) |
| `AuditForm.jsx` | `/api/audit` → `/thank-you` | as ContactForm; Select trigger missing `aria-label` (:171) | REFACTOR (merge into `<LeadForm>`) |
| `JobApplicationForm.jsx` | `/api/job-application` | close btn has `aria-label` (best); but labels lack `htmlFor`/`id`; dropzone `<div onClick>` file picker, no keyboard/role (:287) | REFACTOR |

### `ui/` cards and sliders

| Component | Client | Notes | A11y | Decision |
| --- | --- | --- | --- | --- |
| `BlogCard.jsx` | no | "Read Article" → link | `alt="Card Image"` generic (:29) | KEEP |
| `CaseStudyCard.jsx` | no | whole card `<Link>` | `alt="Card Image"` (:20) | KEEP (feeds CP-12) |
| `*Dropdown.jsx` (Services/Solutions/About) | yes | mega-menu nav; **Get My Audit** in Services (:223) | **no `aria-expanded`/`aria-haspopup`, no keyboard, mouse-only close; `<div onClick>`** | **REFACTOR/REPLACE** (use vendored Radix dropdown; hard WCAG 2.1.1/4.1.2 fail on primary nav) |
| ~19 Swiper wrappers (`*Slider.jsx`) | yes | byte-identical Swiper config (autoplay 2500, loop, breakpoints 767:2/1024:3) | **no pause/stop control → WCAG 2.2.2 fail**; raw `<img>` in feature cards; generic alt | **REFACTOR → one `<CardSlider items render>`** (highest ROI) |
| `AboutHeroSlider.jsx` | yes | custom nav, aria-labeled | the one accessible slider | KEEP |
| `DifferenceSlider.jsx` / `DifferenceSlider2.jsx` | yes | identical but data+bg; data also re-declared in `Difference.jsx` (3 copies) | — | REFACTOR (one slider, data as prop) |

### `sections/hero/` (19)

Shared issues: the exact Cal `getCalApi("15min")` `useEffect` is copy-pasted in 9
heroes; heading jumps h1→h4 on several; generic `alt="Background Image"`.

- `SolutionsDetailHero.jsx` — **empty stub `<div>SolutionsDetailHero</div>`**, and the
  only unmarked server component in the set. On `/solutions/[slug]` it renders nothing.
  **REPLACE/implement.**
- `ServicesHero` / `SolutionsHero` / `TestimonialsHero` — near-identical (same imports,
  bg, shape coords, `SectionLabel → h1 → SectionDescription → PrimaryButton "See Case
  Studies" + "Book a Strategy Call"`). REFACTOR into one parameterised hub hero.
- `ServicesDetailHero` / `CaseStudiesDetailHero`, `BlogHero` / `BlogDetailHero` — CMS-prop
  pairs, reasonable. KEEP; align on shared primitive.
- `HomeHero` — bespoke (client logos, cursor follower). KEEP; protect (homepage).
- `CaseStudiesDetailHero:79` — `target="_blank"` without `rel`.

### `sections/` (remaining, 40)

- `Contact.jsx` — embeds `ContactForm`; contains a **permanently hidden chat mock
  (`className="flex hidden"`)** with an unlabeled `<input>` (:151) and icon-only
  buttons. REFACTOR (delete the dead chat mock).
- `Options.jsx` — pricing grid + Swiper; **"Request Proposal" → `/contact`** on every
  card; dead unused `pricingCards` array (:12-61). Relevant to the D9 investment
  module. REFACTOR.
- `Questions.jsx` — the real FAQ (Radix accordion, keyboard-accessible). KEEP.
- `DynamicQuestions.jsx` — Sanity-driven FAQ, near-dup of Questions; **"Have More
  Questions?" → `/contact`**. REFACTOR (merge with Questions).
- `Cta.jsx` / `Cta2.jsx` — the mid-page CTA bands. **"Get Free Consultation" (Cal) +
  "Book a Call" (→ `/contact`)**. Central to D7/D8; do not change now, but this is
  where the new CTA + microcopy + events land. REFACTOR (later).
- `Process.jsx` / `Process2/3/4` + `Methodology.jsx` — 4+1 overlapping layouts; Process4
  mirrors Methodology. `Process` has "Start Your Project" → `/contact`. REFACTOR (consolidate).
- `PartnerWithUs.jsx` vs `PartnerWithUs2.jsx` — name-only overlap, genuinely different.
  KEEP both, rename for clarity.
- `Difference.jsx` — Switch-toggled comparison; **Switch has no accessible label**
  (:186). REFACTOR.
- `Opportunities.jsx` — careers list; **"Apply Now" opens a plain `<div>` modal with no
  `role="dialog"`, `aria-modal`, focus trap, or Esc** (:32). REFACTOR (real dialog).
- `TheSolution.jsx` — "Book a Call" → `/call` (dead route). REFACTOR.
- `CustomCode.jsx` — **unsanitised `dangerouslySetInnerHTML` of Sanity HTML** (:8). XSS
  surface. REFACTOR (sanitise or constrain source).
- `Work.jsx` — brittle hardcoded CMS slugs (:26-37). REFACTOR.
- Missing `"use client"` where needed: `ProjectShowcase.jsx` uses client-only
  `react-fast-marquee` without the directive. `BlogMeta`, `RelatedBlogs` are server
  components (fine).
- Dead in-file arrays: `CardData` (Blog, RelatedBlogs), `supportData` (Support),
  `pricingCards` (Options), `steps` (Methodology). `BlogShare.jsx:10` has a hardcoded
  `SITE_URL` flagged "change this" → broken share URLs. Clean these under CP-00E.

### `decorative-elements/` (11) and `icons/` (11)

Pure presentational SVG. The decorative strokes/logo-shapes are marked `"use client"`
only because they import `framer-motion` (e.g. `FooterBgStroke.jsx:1-2`). REFACTOR:
drop the motion import or isolate it so these render as server components.

### `effects/motion-effect.jsx`

Shared scroll-reveal wrapper (`motion/react`). No reduced-motion guard. KEEP; REFACTOR
(add `prefers-reduced-motion`).

### `lp/` (17) — parallel landing-page stack

A near-complete clone of the main site: `LpHeader` (↔ Header), `LpFooter` (↔ Footer,
with dead SecondaryButton + nav imports), `LpPrimaryButton` (↔ PrimaryButton, only
differs by raw `<a>` vs `<Link>`, dead `Link` import), `LpAuditForm` (↔ AuditForm),
and Lp*Sliders. **Duplicate `id="audit"`** between `LpHero:187` and `LpAuditSection:10`.
`LpHeroSlider:43` puts `target="_blank"` on a non-link `<div>`. This stack roughly
doubles the surface area. REFACTOR toward shared primitives once the main site is
rebuilt; safe to leave for now.

---

## 3. Deduplication summary (same job, many components)

1. **Testimonials family (5):** `Testimonials` (production, 9 pages),
   `TestingTestimonials` + `TestingTestimonials2` (test routes, external `revuora.app`),
   `WhatClientsSay` + `ClientReview` (**same quote text**). Plus `TestimonialsSlider` ≈
   `Testimonials2Slider`. → one data-driven `<Testimonials>`.
2. **~19 Swiper wrappers** with identical config → one `<CardSlider>`.
3. **Sanity link-card trio:** `SupportSlider` (→ `/services/`), `SectorSlider`
   (→ `/solutions/`), `PoliciesSlider`/`ResourcesSlider` (→ `/legal/`) → one
   parameterised card.
4. **Feature cards:** `LightFeatureCard1` ⊂ `LightFeatureCard2`; `GlassFeatureCard` ≈
   `LightFeatureCard1`.
5. **Counters:** `Counter` ≈ `StatsCounter`.
6. **Headers:** `Header` ≈ `HomeHeader` ≈ `LpHeader`. **Footers:** `Footer` ≈ `LpFooter`.
7. **Buttons:** `PrimaryButton` ≈ `LpPrimaryButton`; form submit buttons re-implement
   the pill inline.
8. **Forms:** `ContactForm` ≈ `AuditForm` ≈ `LpAuditForm`.
9. **FAQ:** `Questions` ≈ `DynamicQuestions` (`Options` is not an FAQ).
10. **Heroes:** `ServicesHero` ≈ `SolutionsHero` ≈ `TestimonialsHero`; Cal `useEffect`
    in 9 heroes.
11. **Process:** `Process`/`Process2/3/4` + `Methodology`. Same-name-different-component
    pairs: `Growth`/`Growth2`, `Values`/`Values2`, `Expertise`/`Expertise2`/`Expertise3`.

---

## 4. Systemic accessibility metrics (CP-00H, WCAG 2.2 AA)

Across all 165 components: **6 `aria-*` attributes total** (only in `AboutHeroSlider`,
`ContactForm`, `JobApplicationForm`), **4 `focus:` usages**, **~150 generic `alt`
strings** ("Icon", "Background Image", "Avatar Image"), **0 `prefers-reduced-motion`**.

The five failure clusters, in priority order (fix in the component layer, not a final
patch):

1. **Mega-menu navigation** (`ServicesDropdown`/`SolutionsDropdown`/`AboutDropdown`) is
   mouse-only with no disclosure semantics. Fails 2.1.1 (Keyboard) and 4.1.2 (Name,
   Role, Value) on the site's primary navigation. Highest severity.
2. **Autoplay carousels** (~19) have no pause/stop/hide control. Fails 2.2.2.
3. **Job-application modal** (`Opportunities`) is not a dialog (no role, no focus trap,
   no Esc). Keyboard-trap risk.
4. **Forms** remove focus outlines (`outline-0`), misuse `<fieldset>` without
   `<legend>`, and never announce submit status (`role="alert"`/`aria-live`).
5. **Focus visibility and alt text** globally: no visible focus styles on custom
   buttons; decorative images given informative alt instead of `alt=""` + `aria-hidden`;
   avatars labelled "Avatar Image" instead of the person's name; `target="_blank"`
   without `rel="noopener"` in a few links.

None of these block CP-01. All of them should be resolved as the shared components
(`<CardSlider>`, `<LeadForm>`, the nav, the dialog) are built, per the constraint that
accessibility lives in reusable components.

---

## 5. The eight components most needing REFACTOR / REPLACE

1. **~19 Swiper sliders → one `<CardSlider>`** (fixes 2.2.2, alt/aria, and copy-paste in
   one move).
2. **Mega-menu dropdowns → Radix disclosure** (removes the primary-nav WCAG failure).
3. **3 forms → one `<LeadForm>`** (focus, aria-live, fieldset/legend; also the D14
   analytics entry point).
4. **Testimonials family (5) → one `<Testimonials>`** (feeds CP-12 proof work).
5. **Header/HomeHeader/LpHeader → `<SiteHeader>` + `useCalcom()` hook** (kills the Cal
   `useEffect` pasted in 9+ files).
6. **`Opportunities` modal → real dialog.**
7. **`Contact` section → delete the hidden chat mock.**
8. **`Navigation.jsx` and `SolutionsDetailHero.jsx` stubs → delete/implement.**

Runner-ups: `LpPrimaryButton` (dead fork), `Counter`/`StatsCounter` merge, `CustomCode`
`dangerouslySetInnerHTML` (sanitise), and the undefined shadcn CSS-variable layer in
`globals.css` (the shadcn primitives style against tokens that do not exist).

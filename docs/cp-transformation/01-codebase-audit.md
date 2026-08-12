# 01 — Codebase Audit

CP-00 findings: architecture (A), technical health (E), SEO (F), performance (G),
accessibility (H, summary), Sanity content model (K), deployment and redirects (L).

Companion files: `02-component-map.md` (component inventory + per-component a11y),
`03-url-audit.md` (routes, live content inventory, crawl). Context and locked
decisions: `00-context.md`.

Captured 12 August 2026 against the `development` branch. Read-only discovery plus a
clean production build (`next build`, exit 0). Live Sanity content was read directly
from the five public datasets.

---

## 0. One-paragraph summary

The codebase is a modern, competently built Next.js 16 App Router site: server
components fetch from Sanity, every route uses the Metadata API, all dynamic routes are
statically generated with ISR, and the build is clean. The strategic risks are not
bugs. They are: (1) **five separate Sanity projects** instead of one, which fragments
the content model the four-pillar architecture must sit on; (2) a **services taxonomy
that does not map to the four pillars**, with Custom App Development and AI fused into a
single service that the pillar model splits apart; (3) **no redirect or middleware
layer at all**, which CP-15 will need for 100+ legacy URLs; (4) **no event tracking and
no consent gating**, so D14 is a greenfield build and the "zero bookings" figure is
currently unmeasurable from code; and (5) heavy **component duplication and systemic
inaccessibility**. The good news on the two items flagged as plan-changing: metadata is
**not** hand-rolled (it is the Metadata API with Sanity-fed `generateMetadata`), which
lowers CP-15 cost.

---

## CP-00A — Repository architecture

### Stack and tooling

| Item | Value | Evidence |
| --- | --- | --- |
| Framework | Next.js `16.2.4`, App Router only (no Pages Router) | `package.json:23`, build banner |
| React | `19.2.3` | `package.json:27-28` |
| React Compiler | Enabled | `next.config.mjs:3` (`reactCompiler: true`), `babel-plugin-react-compiler` dep |
| Build tool | **Turbopack** | build banner "Next.js 16.2.4 (Turbopack)" |
| Language | JavaScript / JSX only, no TypeScript | zero `.ts`/`.tsx` in `src` |
| Styling | Tailwind v4 (CSS-first, no `tailwind.config`) + hand-written CSS + inline | `postcss.config.mjs`, `src/styles/globals.css` |
| Package manager | npm (`package-lock.json`) | lockfile present |
| Path alias | `@/* → ./src/*` | `jsconfig.json` |
| Experiments | `inlineCss: true` | `next.config.mjs:15` |
| CMS client | `next-sanity ^12.3.2`, `@sanity/image-url` | `package.json` |
| Key client libs | framer-motion, swiper, zustand, radix-ui, @calcom/embed-react, react-fast-marquee | `package.json` |
| Mail | nodemailer (AWS SES SMTP) | API routes |

### Routing

Route groups `(home)`, `(site)`, `(lp)` (no URL segment). 25 production routes + 2
metadata routes + 5 API routes + 3 test routes. No parallel or intercepting routes. No
middleware. Full table in `03-url-audit.md`. Five dynamic `[slug]` routes, each with
`generateStaticParams` (SSG) and ISR. The build prerendered **106 static pages**.

### Server / Client Component boundary

Pages are server-first and fetch on the server. Only two page files are client
components: `(home)/home/HomePage.jsx` and `(site)/review-test/page.jsx`. **But 140 of
165 components carry `"use client"`** - effectively the whole component tree. The driver
is animation: framer-motion and swiper reach down into section shells and even
decorative SVGs (`decorative-elements/FooterBgStroke.jsx:1-2` is client only because it
imports `framer-motion`). The homepage renders its entire body inside one client
`HomePage`. This is the single biggest structural inefficiency: the pages are designed
server-first, but interactivity is elevated far higher than necessary, shipping large
client JS for otherwise static content. It does not break anything; it is a performance
and refactor target.

### Caching model and async APIs

- **ISR, time-based, 3600s (1 hour)** everywhere. Two idioms coexist: route-segment
  `export const revalidate = 3600` (list routes) and per-fetch `{ next: { revalidate:
  3600 } }` (detail routes + home). Detail fetchers wrap the Sanity call in React
  `cache()` so `generateMetadata` and the page share one request
  (`services/[slug]/page.jsx:18`).
- **No tag-based or on-demand invalidation.** Zero `revalidateTag`, `revalidatePath`,
  `use cache`, or `cacheComponents`. No Sanity webhook route. Editor changes surface
  only after the 1-hour window. See CP-00K and CP-00L.
- **Async request APIs handled correctly.** `params` is always awaited (Next 16). No
  `searchParams`, `cookies()`, or `headers()` usage anywhere, so pages stay statically
  cacheable.

### Metadata handling (flagged item)

**Metadata is the Next.js Metadata API, not hand-rolled.** Root defaults live in
`src/app/layout.jsx:11-38` (`metadataBase`, title template, OG, Twitter, icons). Every
static route exports `generateMetadata`; every dynamic route exports `generateMetadata`
that reads the Sanity `seo.metaTitle`/`seo.metaDescription` fields with a fallback
chain. The one anti-pattern is `review-test/page.jsx:58-60` (a literal `<head><meta
robots>` inside client JSX) - and that route is slated for deletion. **This materially
lowers CP-15 cost** versus the feared hand-rolled case. Details and gaps in CP-00F.

### Environment configuration

15 `NEXT_PUBLIC_SANITY_*` vars (3 each x 5 projects), plus server-only SMTP vars and
`LP_AUDIT_RECIPIENTS`, plus `NEXT_PUBLIC_GTM_ID` and reCAPTCHA keys. `.env.local` is
gitignored and untracked. Note: `layout.jsx` hardcodes the GTM id literally rather than
reading `process.env.NEXT_PUBLIC_GTM_ID` (which exists) - a minor inconsistency.

### External services

Sanity (5 projects), Cal.com (`hassan-iqbal-mznzu9/15min`, one personal slug), AWS SES
(SMTP), Google Tag Manager (`GTM-B8FV6K69`), reCAPTCHA, `revuora.app` (reviews, via
`/api/testimonials` and the test routes), Vercel (hosting). No Sanity token (public
read only).

---

## CP-00K — Sanity content model

### Five separate projects (the headline)

Content is split across **five independent Sanity projects**, each with its own client
(`src/sanity/sanity.{services,solutions,caseStudies,blog,legal}.js`), all dataset
`production`, all `useCdn: true`, all tokenless:

| Domain | Project ID | Doc types in project |
| --- | --- | --- |
| Services | `cqbs7syw` | `services` |
| Solutions | `z2m53qom` | `solutions` |
| Case studies | `6qygzc2z` | `caseStudies`, plus its own `services`, `industries`, `tools` |
| Blog | `dgx0l3po` | `blog`, `author` |
| Legal hub | `pz9kcb6n` | `legalPage` |

**Why this matters.** Sanity references cannot cross projects. That is why the
case-studies project defines its **own** `services` (20 tags, including `webflow`,
`woocommerce`, `brochure`, `print`, `custom-forms` that do not exist in the real
services project) and its **own** `industries` (35 entries). So there are two divergent
`services` taxonomies and two `industries` concepts (case-studies `industries` vs
solutions `category: industry`) that cannot be linked or kept in sync automatically.
Any four-pillar taxonomy applied to services will **not** propagate to case-study
tagging, and cross-linking services to case studies (a core requirement of the pillar
architecture and internal-linking strategy) has to be done by slug convention in code,
not by Sanity references. This is the most consequential content-model finding.

### Route split

Documented in `03-url-audit.md` section 1: 12 Sanity-driven routes, 13 hardcoded.

### Service pages and the four-pillar taxonomy (flagged item)

**Service pages are a single `services` document type on one `/services/[slug]` route.**
Confirmed at the route level (`(site)/services/[slug]/page.jsx`) and in content (15
slugs). The current taxonomy is a three-value `category` enum:
`design-development | growth | support` (matches the three nav mega-menu groups).

The four pillars (Brand & Experience, Web & Ecommerce, Growth & Performance, AI &
Automation) do not map onto these three values. Two structural conflicts:

1. **`custom-apps-and-ai` is one service spanning two pillars.** The pillar model puts
   Custom App Development under Web & Ecommerce and AI under AI & Automation. A single
   service cannot sit in both.
2. **The `support` bucket (maintenance, speed, security, migrations, accessibility) has
   no pillar.** Context section 3 folds "Ongoing Growth & Support" under Growth &
   Performance, so support becomes a sub-band of a pillar rather than a peer of it.

Also, two named Web & Ecommerce services from context section 3 have **no slug yet**:
"Web Design & Development" and "Ecommerce" (only `wordpress`, `shopify`,
`custom-apps-and-ai`, `branding`, `ui-ux-design` exist). That is a content gap for
CP-02/CP-05, not a schema problem.

**Minimum schema change to support the pillar architecture (recommendation):**

- Keep the flat `/services/[slug]` route. The brief is explicit that the pillar
  architecture is a **taxonomy field, not a route segment**, and URLs must not change
  before CP-15. Do not introduce `/services/[pillar]/[slug]`.
- Add a `pillar` field to the `services` document type (project `cqbs7syw`): a string
  enum of the four pillar values, required, with the existing `category` retained or
  deprecated. This is the smallest change that lets the homepage, hub, nav and internal
  linking group by pillar.
- Resolve `custom-apps-and-ai` as a **content decision for Hassan**: either split it
  into two services (for example `custom-app-development` under Web & Ecommerce and
  `ai-automation` under AI & Automation), or keep one service with a primary pillar and
  accept the compromise. Splitting is cleaner for the pillar model and for the 10-15%
  AI weighting, but it changes a slug and needs a redirect at CP-15.
- Because case-study tagging lives in a different project, add the pillar as a
  **convention in code** (a slug-to-pillar map) so case studies can be grouped by pillar
  without a cross-project reference.

This decision must be taken before content is written (CP-02), because it shapes the
hub, the nav, and every service page brief.

### Slugs, validation, drafts, preview

- Slugs are the standard Sanity `slug` object (`current`/`source`), editable, unique
  within a project, **not historised** (no slug-history plugin visible). Renaming a slug
  silently breaks the URL and any hardcoded nav link to it. Relevant to CP-15.
- **No draft mode, no preview, no live editing.** All clients are `useCdn: true` with no
  token and no `draftMode()`. Editors cannot preview unpublished changes; content only
  appears after the 1-hour ISR window. This is a real editor-experience gap to fix
  before heavy content work (add a preview client + `draftMode` + on-demand revalidation).
- Validation/required fields: the schema exports mark almost every field `optional`, so
  Sanity enforces very little. Content quality is convention-driven, not schema-enforced.

### Webhooks and revalidation between Sanity and Vercel

**None.** No webhook route, no `revalidateTag`/`revalidatePath`. The only freshness
mechanism is 1-hour ISR. Recommendation (later phase): add a signed Sanity webhook to a
revalidation route so publishes are near-instant, and adopt tag-based caching.

### Image pipeline

`@sanity/image-url` builders in five identical `*.image.js` files, guarded with
`projectId && dataset ? ... : null`. `next.config.mjs` whitelists `cdn.sanity.io/images`
with AVIF/WebP for `next/image`. Weaknesses: only the case-studies detail query projects
`hotspot`/`crop`; most queries fetch raw `asset->{url}` and skip the builder/hotspot;
`legal/[slug]/page.jsx:141` renders a Sanity image with `next/image unoptimized`;
several feature cards use raw `<img>` instead of `next/image` (see CP-00G).

### Singletons, navigation and CTA labels

- No singleton documents (no site-settings, navigation, or footer document). Site
  chrome is code, not content.
- **Navigation labels and destinations are hardcoded** in `src/contants/navigation.js`,
  not content-managed. **CTA labels are hardcoded** in components and pages (for example
  `Cta2` `buttonText="Get Free Consultation"` is passed inline in
  `services/[slug]/page.jsx:95`; case studies do expose a CMS `detailHero.ctaButton`).
  Consequence for D7/D8: changing the CTA system site-wide is a **code** change (feasible
  and centralisable), not a content edit.

### Is the staging Sanity dataset shared with production? (flagged item)

**Almost certainly yes, treat it as shared.** Every project has a single dataset named
`production`, selected by the `NEXT_PUBLIC_SANITY_*_DATASET` env var. There is no
evidence of a separate staging dataset. Unless the Vercel staging environment overrides
those five `*_DATASET` vars to point at different datasets, staging reads and writes the
**same** production content. Per `00-context.md`, treat any Sanity write on staging as a
production content change until proven otherwise. **Full confirmation needs a comparison
of Vercel staging vs production environment variables** (I do not have dashboard access;
this is an open item). Recommendation: if isolation is wanted, create real staging
datasets (or a second project set) before any content editing begins.

---

## CP-00L — Deployment and redirect capability

### Redirects today

- **Zero.** No `redirects()` or `rewrites()` in `next.config.mjs`, no `vercel.json`, no
  `middleware`. The redirect surface is completely empty.
- This is greenfield for CP-15, which is both good (no legacy mess) and a risk (no
  capability exists yet, and it must be proven before the migration).

### Middleware

None. No edge auth, redirect, rewrite, or header layer. Adding `middleware.js` is the
natural home for the redirect map (below) and for security headers.

### Redirect mechanism recommendation (expected finding)

The restructure touches ~31 case studies, 14 solutions, 15 services, plus solutions
being reclassified (D4) and possible service splits. A redirect map well over 100
entries is likely. Recommendation:

- **Use `middleware.js` reading a keyed map file** (a plain JS/JSON object of
  `oldPath -> newPath`), not static config entries. Rationale: it scales past config
  limits, it is reviewable and diffable as data, editors/PRs can change it without
  touching build config, and lookups are O(1).
- Scope the middleware `matcher` to the legacy path prefixes only, so it does not run on
  every request and add latency to pages that never redirect.
- Reserve `next.config.mjs` `redirects()` for a handful of permanent, structural rules
  (for example protocol/host normalisation) where being in config is clearer.
- **Confirm the Vercel plan's limits** on `next.config`/`vercel.json` static redirects
  before relying on them; the keyed-map-in-middleware approach sidesteps that limit
  entirely. Deciding this now is cheap; deciding it mid-migration is not.

### Build and deploy pipeline

- Vercel, connected to the Git repo. Current working branch is `development`; main
  branch is `main`. Preview deployments and branch-to-environment mapping are configured
  in the Vercel dashboard (not in the repo, so not fully verifiable from code). Context
  states a Vercel staging environment that mirrors the production Sanity dataset.
- **Environment separation is the risk**, and it is the same risk as the shared dataset:
  the five `*_DATASET` vars decide which content each environment reads. Verify in the
  dashboard that staging and production env vars are intentionally set (open item, ties
  to O7 and the staging question).
- **Rollback:** Vercel's immutable deployments allow instant rollback by promoting a
  previous deployment. No code-level rollback mechanism is needed. Content rollback is a
  different matter: with a shared production dataset and no dataset isolation, a bad
  content edit is live immediately and has no ISR-independent undo beyond Sanity's own
  document history.

### Analytics inherited (flagged item, feeds O7 and D14)

- **Google Tag Manager only**: container `GTM-B8FV6K69`, hand-embedded in
  `src/app/layout.jsx:57-68` via `next/script strategy="afterInteractive"` plus a
  noscript iframe. Not loaded via `next/third-parties`. It initialises `dataLayer` with
  only the `gtm.js` start event.
- **No GA4 tag in code.** Any GA4 would live inside the GTM container (server-side, not
  in this repo) and cannot be confirmed from the codebase. There is no `gtag`, no
  `G-XXXX` id, no `next/third-parties` GA component.
- **No first-party event tracking of any kind.** Zero `dataLayer.push`, zero custom
  events. No CTA click, form submit, or Cal.com booking is instrumented. **Consequence:
  D14 is a greenfield build, and the "Book a Call: zero bookings in 12 months" figure
  (D8) cannot have come from this site's code - it can only be from Cal.com's own
  dashboard.** That nuance matters: CP-00I's cannibalisation analysis (below) is
  structural, because there is no behavioural data to confirm it.
- **No Vercel Analytics and no Vercel Speed Insights** (absent from `package.json` and
  code). If Core Web Vitals monitoring is wanted, Speed Insights should be added and
  kept separate from GA4 (per D14 notes).
- **No consent or cookie banner.** GTM fires unconditionally. For a UK/EU (`en_GB`)
  audience this is a compliance gap, and it means that once tags are added via GTM,
  event data will be collected without consent gating. Consent must be designed in
  before D14 events ship, or the data is both incomplete and non-compliant.

**O7 recommendation input:** the existing GTM container is reusable (a container is just
a tag manager; the question is what GA4 property sits inside it, which needs dashboard
access). But because there is no event instrumentation and no consent layer at all, D14
is effectively a fresh build regardless of whether the GA4 property is reused or
replaced. Reusing the container is fine; the property decision is Hassan's (O7) and is
not constrained by anything in code.

---

## CP-00F — SEO implementation

### What is good

- Metadata API everywhere; all five Sanity detail routes feed `seo.metaTitle`/
  `metaDescription` into `generateMetadata` with fallbacks.
- **Sitemap is dynamic and Sanity-driven** (`src/app/sitemap.js` fetches all five
  projects in parallel and enumerates every slug with `lastModified`).
- `robots.js` allows all, disallows only the three test routes, declares the sitemap.
- **Internal links use `next/link` everywhere** (no raw `<a>` for internal nav).
- **One `<h1>` per page**; heading hierarchy is broadly sensible.
- Canonicals present on almost every route; `metadataBase` set.

### Gaps and bugs

- **No structured data anywhere.** Zero JSON-LD: no Organization, no Article/BlogPosting
  on blog detail, no BreadcrumbList, no FAQPage (despite real FAQ content). This is the
  largest SEO gap and a straightforward win later. Adding Organization schema is additive
  and safe for the protected homepage.
- **No breadcrumbs** (no markup and no schema).
- **`/solutions/[slug]` is missing `alternates.canonical`** (the other four detail
  routes set it). `solutions/[slug]/page.jsx:40`. Phase 0 fix candidate.
- **OG images are a single static asset** (`/images/og-image-assets/og-image-compressed
  .jpg`) on every page; no `opengraph-image` route and the Sanity cover/hero images are
  never used for social.
- **Sitemap omits live indexable pages:** `/agencies`, `/call`, `/testimonials`,
  `/wordpress-web-development`.
- Root title template is `"%s"` (no brand suffix), so child titles render verbatim.
- `review-test` hand-rolls its robots tag (CP-00A); it is a test route to delete.

### Homepage baseline (protected, record verbatim per `00-context.md` section 8)

Effective homepage metadata (page-level `generateMetadata` in `(home)/page.jsx:7-41`
wins; title template is `"%s"` so no suffix is appended):

- **Title:** `Web Design Agency for Growth-Focused Brands | Free Audit`
- **Meta description:** `Elevate your brand with CreativePixels. We craft
  high-converting websites & powerful growth systems for ambitious businesses. Claim
  your free strategy call now.`
- **Canonical:** `/`
- **OpenGraph:** title/description as above; `url https://creativepixels.agency/`;
  `siteName CreativePixels`; `locale en_GB`; `type website`; image the static OG asset,
  1200x630.
- **Twitter:** `summary_large_image`, same title/description/image.
- **Organization / JSON-LD schema:** NONE (no structured data exists anywhere).

Any change touching the homepage title, canonical, or indexation is high-severity per
context section 8. Record this block before CP-15 so continuity can be verified. Note
the current description leans on "strategy call" and "Claim ... now" language that D7/D8
and the content constraints will revisit, but the homepage copy and metadata must not be
changed during CP-00.

---

## CP-00G — Performance

No field or lab Core Web Vitals were captured yet (that needs the crawl plus Lighthouse;
the build output under Turbopack does not print per-route JS sizes, and no numbers are
invented here). The structural causes are clear from the code:

**Strengths**
- Server-first pages, SSG + ISR, so HTML is prerendered and cacheable.
- React Compiler on (auto-memoisation), `inlineCss` on (removes render-blocking CSS
  requests), AVIF/WebP via `next/image`, Onest font via `next/font` with `display:swap`
  (no external font request, no layout-shift from font swap beyond the metric-adjusted
  fallback).

**Risks (ranked by likely impact)**
1. **Client JS volume.** 140 client components and both headers/heroes/sliders pulling
   framer-motion + swiper mean large hydration payloads on every route. The homepage
   hydrates its whole body. This is the primary INP/TBT risk and the main lever.
2. **Autoplay carousels everywhere** (~19 Swiper instances, `autoplay 2500`,
   `disableOnInteraction:false`). Continuous main-thread work and a WCAG 2.2.2 issue
   (CP-00H). On slider-heavy pages this is an interaction-cost and battery concern.
3. **Raw `<img>` instead of `next/image`** in `GlassFeatureCard`/`LightFeatureCard1/2`,
   and `unoptimized` on the legal detail image: these bypass Vercel image optimisation
   and risk CLS (no width/height reservation) and oversized transfers.
4. **LCP element** is most likely the hero image/heading on each template; heroes are
   client components with entrance animations, which can delay LCP paint. Confirm per
   template during the crawl.
5. **CLS sources** to check: slider initialisation, count-up numbers, and any
   entrance/opacity animations that reflow. No obvious layout-shift guards
   (aspect-ratio boxes) on the raw-`<img>` cards.

**Recommended measurement (before optimising):** run Lighthouse on one static marketing
page (`/about`) and one Sanity-driven page (`/services/wordpress` and a case study), on
mobile, once the crawl is greenlit. Targets: LCP <= 2.5s, INP < 200ms, CLS < 0.1. The
highest-ROI structural fix is pulling the client boundary down (server-render section
shells; make only the interactive leaf client), starting with the decorative SVGs and
section wrappers.

---

## CP-00H — Accessibility (summary; per-component detail in `02-component-map.md`)

Target WCAG 2.2 AA. The site is currently well short of it, and the causes are
systemic, not incidental: across 165 components there are **6 `aria-*` attributes**, **4
`focus:` styles**, **~150 generic `alt` strings**, and **0 `prefers-reduced-motion`**.
The five clusters, in priority order:

1. **Primary navigation mega-menus** (`ServicesDropdown`/`SolutionsDropdown`/
   `AboutDropdown`) are mouse-only with no disclosure semantics. Fails 2.1.1 and 4.1.2
   on the most important navigation on the site. Highest severity.
2. **Autoplay carousels** (~19) with no pause/stop/hide. Fails 2.2.2.
3. **Job-application modal** (`Opportunities`) is not a real dialog (no role, focus trap,
   or Esc). Keyboard-trap risk.
4. **Forms** remove focus outlines (`outline-0`), misuse `<fieldset>` without `<legend>`,
   and never announce submit status.
5. **Focus visibility and alt text** globally (no visible focus on custom buttons;
   decorative images given informative alt; `target="_blank"` without `rel`).

Per the constraint that accessibility lives in reusable components, these are fixed when
the shared `<CardSlider>`, `<LeadForm>`, nav disclosure, and dialog are built, not as a
final patch. None block CP-01.

---

## CP-00I — CRO / CTA (summary; full table below feeds the D14 checklist)

Mapped in full by the SEO/CRO sweep. Key results:

- **Every page carries 5 to 7 competing CTA destinations.** All pages inherit four
  global CTAs from header + footer (Free Audit `/audit`, Cal.com booking, `tel:`,
  `mailto:`); content pages add a mid-page CTA band (Cal + `/contact`) and often a form.
  The homepage carries seven.
- **"Book a Call" never stands alone.** Every page that renders it also renders competing
  Audit and Contact CTAs, and the global header places "Free Audit" immediately beside
  "Book a Call". The footer stacks phone, email, and Book a Call as three equal cards.
- **Label/destination inconsistency:** "Book a Call" points to Cal.com in the header/
  footer/heroes, to `/contact` in `Cta.jsx:105`, and to the dead `/call` in `StickyCta`
  and `TheSolution`. Extra booking labels ("Get Free Consultation", "Book a Strategy
  Call") proliferate outside the approved set.
- **No CTA fires any analytics event** (CP-00L). So the instrumentation column of the
  D14 event set is entirely unbuilt.

**Verdict on the Book-a-Call cannibalisation hypothesis (the specific open question):
supported, structurally.** Booking competes with the Audit funnel and multiple contact
routes on every page and is never the sole or dominant action, which is fully consistent
with zero bookings. But note the measurement caveat: with no event tracking, the
"cannibalisation" cannot be confirmed behaviourally from this site; the evidence is the
CTA layout, not analytics. Demoting Book a Call to the enquiry thank-you state and
`/contact` (D8) plus instrumenting `call_booking_clicked` (D14) will finally settle it.

### CTA inventory (text, destination, position, component)

| CTA text | Destination | Component | Position | Pages |
| --- | --- | --- | --- | --- |
| Free Audit | `/audit` | Header/HomeHeader/MobileMenu | header | all |
| Book a Call | Cal.com `15min` | Header/HomeHeader | header | all |
| Get Free Consultation | Cal.com | Footer, Cta, Cta2 | footer / mid | all / content |
| Book a Call | Cal.com | Footer (card 3) | footer | all |
| tel `0161 820 2667` | `tel:` | Footer/MobileMenu/ContactHero | footer/hero | all / contact |
| mailto `hello@cp.agency` | `mailto:` | Footer/MobileMenu/ContactHero | footer/hero | all / contact |
| Contact Us | `/contact` | MobileMenu | mobile menu | all (mobile) |
| Book a Call | `/contact` | Cta | mid band | home, about, how-we-work, case-studies, services, solutions, partner-with-us |
| Book with Hassan | Cal.com | HomeHero/GradientButton | hero | home |
| Our Work | `/case-studies` | HomeHero | hero | home |
| Submit Request | `/api/contact` | ContactForm | section | home, contact, audit |
| Get Free Consultation | Cal.com | Cta2 | mid | services/[slug], solutions/[slug] |
| Book a Strategy Call | Cal.com | ServicesHero/SolutionsHero/TestimonialsHero | hero | services, solutions, testimonials |
| Book a Call | Cal.com | ServicesDetailHero | hero | services/[slug] |
| Book a Call | `/call` (dead) | TheSolution, StickyCta (unrendered) | section | solutions/[slug] |
| Get My Free Audit | `/api/audit` | AuditForm/AuditHero | hero | audit |
| Get My Audit | `/audit` | ServicesDropdown | mega-menu | all |
| Get My Free Audit | `/audit` | FeaturedCaseStudies | section | case-studies etc |
| Request Proposal | `/contact` | Options | pricing | where used |
| Start Your Project | `/contact` | Process | section | where used |
| Have More Questions? | `/contact` | Questions/DynamicQuestions | FAQ | detail pages |
| Apply Now | `/api/job-application` | Opportunities | careers | careers |

Do not rewrite the CTA system during CP-00 (D7/D8 land later). This table is the
instrumentation checklist for D14 and the input to the CP-00I demotion work.

---

## CP-00E — Technical health

Build is clean (`next build` exit 0, 106 static pages) with **2 warnings** and a small
set of concrete issues.

**Blocker**
- **Missing declared dependency `@radix-ui/react-switch`** (imported in
  `ui/switch.jsx:4`, used by `Difference.jsx`, absent from `package.json`). Resolves only
  transitively today; breaks under a clean/isolated install. Phase 0 fix candidate
  (declare the dep).

**Build warnings**
- `src/contants/caseStudiesCard.js` uses `export *` on a module with no exports (twice,
  app-client and app-ssr). Dead/malformed export. Phase 0 fix candidate.

**High**
- **Misspelled `src/contants/` folder** (should be `constants`), threaded through 16
  import sites. Fragile; spreads the typo. Rename is low-risk mechanically but touches 16
  files, so it is a deliberate small refactor rather than a drive-by.
- **Three test routes ship to production** (`/hassan-test`, `/review-test`,
  `/testing-testimonials`); `/hassan-test` embeds an external `revuora.app` iframe.
  Noindex + disallowed, but routable. Recommend deletion (CP-00J, pending Hassan's OK).
- **26 hardcoded nav deep-links depend on Sanity slugs existing** (all currently
  resolve, verified against live content in `03-url-audit.md`); any future slug rename
  silently 404s.

**Medium**
- **Redundant `radix-ui` meta-package** alongside individual `@radix-ui/*` packages; the
  meta-package is imported nowhere. **Unused `ui/tabs.jsx` and `ui/dropdown-menu.jsx`**
  (+ their deps) imported nowhere.
- **Component duplication** (full list in `02-component-map.md`): testimonials x5,
  ~19 identical Swiper wrappers, headers x3, forms x3, FAQ x2, hero clusters, Process x4,
  and `Difference` data declared in 3 places.
- **Dead code:** `layout/Navigation.jsx` stub, `sections/hero/SolutionsDetailHero.jsx`
  stub (renders nothing on `/solutions/[slug]`), `sections/cta/StickyCta.jsx` (never
  rendered), the hidden chat mock in `Contact.jsx`, and several dead in-file arrays.
- **Hardcoded data that should be central:** Footer hardcodes phone/email/address/
  copyright while `contants/contact.js` and `social.js` exist (and hold placeholder data
  like `hello@agency.com` - those constant files appear unused).
- **`CustomCode.jsx` renders unsanitised Sanity HTML** via `dangerouslySetInnerHTML`
  (:8). XSS surface if the case-studies dataset is ever edited by an untrusted party.

**Low**
- `Footer.jsx:758` empty `<Link href="">`; hardcoded copyright year `2026`
  (`Footer.jsx:733`); error-string typo "leagal" (`legal/[slug]/page.jsx:22`); stray
  `{/* Hekko */}` comment (`hassan-test`); `BlogShare.jsx:10` hardcoded `SITE_URL` marked
  "change this" (broken share URLs); `select.jsx:46` malformed Radix variant; `layout.jsx`
  hardcodes the GTM id instead of the env var.

Phase 0 fixes will be applied and logged in `13-implementation-status.md`, only after the
production crawl, and each in its own commit.

---

## Cross-references

- Routes, live content inventory, crawl: `03-url-audit.md`.
- Component decisions and per-component a11y: `02-component-map.md`.
- Fix log and running status: `13-implementation-status.md`.
- Locked decisions and constraints: `00-context.md`.

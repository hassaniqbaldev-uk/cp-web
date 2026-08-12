# 03 — URL Audit and Route Discovery (CP-00B, CP-00K route split)

Status: code-side discovery complete. Live Sanity content inventoried. **Production
crawl pending** the production URL from Hassan (see final section).

Domain in code: `https://creativepixels.agency` (`metadataBase` in
`src/app/layout.jsx:18`, `SITE_URL` in `src/app/sitemap.js:12`). Corporate email
domain is `cp.agency`; dev mail domain is `cpdev.uk`.

There is **no `middleware`** and **no `redirects()`/`rewrites()`** in
`next.config.mjs`, so App Router file paths map 1:1 to URLs. Route groups
`(home)`, `(site)`, `(lp)` do not add a URL segment.

---

## 1. Complete production route inventory (from code)

25 production URL paths + 2 metadata routes. 3 test routes excluded (section 4).

| URL | File | Static/Dynamic | Group | Source | Metadata |
| --- | --- | --- | --- | --- | --- |
| `/` | `(home)/page.jsx` → `home/HomePage.jsx` | static | (home) | **Sanity** (case studies) | `generateMetadata` (hardcoded) |
| `/about` | `(site)/about/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/agencies` | `(site)/agencies/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/audit` | `(site)/audit/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/blog` | `(site)/blog/page.jsx` | static | (site) | **Sanity** | `generateMetadata` |
| `/blog/[slug]` | `(site)/blog/[slug]/page.jsx` | dynamic | (site) | **Sanity** (blog) | `generateMetadata` + Sanity SEO |
| `/call` | `(site)/call/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/careers` | `(site)/careers/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/case-studies` | `(site)/case-studies/page.jsx` | static | (site) | **Sanity** | `generateMetadata` |
| `/case-studies/[slug]` | `(site)/case-studies/[slug]/page.jsx` | dynamic | (site) | **Sanity** (caseStudies) | `generateMetadata` + Sanity SEO |
| `/contact` | `(site)/contact/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/how-we-work` | `(site)/how-we-work/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/legal` | `(site)/legal/page.jsx` | static | (site) | **Sanity** | `generateMetadata` |
| `/legal/[slug]` | `(site)/legal/[slug]/page.jsx` | dynamic | (site) | **Sanity** (legalPage) | `generateMetadata` + Sanity SEO |
| `/partner-with-us` | `(site)/partner-with-us/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/services` | `(site)/services/page.jsx` | static | (site) | **Sanity** | `generateMetadata` |
| `/services/[slug]` | `(site)/services/[slug]/page.jsx` | dynamic | (site) | **Sanity** (services) | `generateMetadata` + Sanity SEO |
| `/solutions` | `(site)/solutions/page.jsx` | static | (site) | **Sanity** | `generateMetadata` |
| `/solutions/[slug]` | `(site)/solutions/[slug]/page.jsx` | dynamic | (site) | **Sanity** (solutions) | `generateMetadata` + Sanity SEO **(canonical missing)** |
| `/testimonials` | `(site)/testimonials/page.jsx` | static | (site) | hardcoded | `generateMetadata` |
| `/thank-you` | `thank-you/page.jsx` | static | root | hardcoded | static `metadata` (noindex) |
| `/wordpress-web-development` | `(lp)/wordpress-web-development/page.jsx` | static | (lp) | hardcoded | static `metadata` |
| `/wordpress-web-development/thank-you` | `(lp)/.../thank-you/page.jsx` | static | (lp) | hardcoded | static `metadata` (noindex) |
| `/robots.txt` | `robots.js` | generated | — | code | — |
| `/sitemap.xml` | `sitemap.js` | generated | — | **Sanity** | — |

API routes (POST unless noted): `/api/contact`, `/api/audit`, `/api/lp-audit`,
`/api/job-application`, `/api/testimonials` (GET/POST, proxies `revuora.app`). All
mail routes use nodemailer/SMTP.

### Sanity-driven vs hardcoded split (CP-00K)

- **Sanity-driven (12):** `/`, `/blog`, `/blog/[slug]`, `/case-studies`,
  `/case-studies/[slug]`, `/services`, `/services/[slug]`, `/solutions`,
  `/solutions/[slug]`, `/legal`, `/legal/[slug]`, `/sitemap.xml`.
- **Hardcoded (13):** `/about`, `/agencies`, `/audit`, `/call`, `/careers`,
  `/contact`, `/how-we-work`, `/partner-with-us`, `/testimonials`, `/thank-you`,
  `/wordpress-web-development`, `/wordpress-web-development/thank-you`, `/robots.txt`.

Each dynamic route implements `generateStaticParams` (pre-renders all slugs from its
Sanity project) and ISR `revalidate: 3600`. Backing project per route is in
`01-codebase-audit.md` section 6.

---

## 2. Live Sanity content inventory

Captured 12 Aug 2026 by querying the public datasets directly (all five projects are
`useCdn: true`, tokenless, dataset `production`). These are the real slugs the
dynamic routes resolve. Counts match the brief's "30 case studies, 14 solutions, 15
service pages" closely (case studies are 31).

### Services (15) — project `cqbs7syw`, current `category` enum

| Current category | Slugs |
| --- | --- |
| `design-development` (5) | `branding`, `ui-ux-design`, `wordpress`, `shopify`, `custom-apps-and-ai` |
| `growth` (5) | `seo`, `ppc`, `cro`, `email`, `analytics` |
| `support` (5) | `maintenance`, `speed`, `security`, `migrations`, `accessibility` |

The current three-value taxonomy does not match the four pillars. See
`01-codebase-audit.md` section 6 for the pillar mapping and the minimum schema
change. Note `custom-apps-and-ai` fuses two services that belong in different
pillars (Custom App Development → Web & Ecommerce; AI → AI & Automation).

### Solutions (14) — project `z2m53qom`, current `category` enum

| Current category | Slugs |
| --- | --- |
| `goal` (5) | `increase-leads`, `scale-marketing`, `replatform-rebuild`, `launch-new-product`, `automate-operations` |
| `industry` (9) | `ecommerce-brands`, `interiors-and-furnishings`, `sme-founders`, `driving-schools`, `charities-and-foundation`, `pharmacies`, `restaurants`, `b2b-services`, `saas-companies` |

- `ecommerce-brands` is category `industry` here but D4 reclassifies it as an
  Industry proper and redirects `/solutions/ecommerce-brands` at CP-15.
- O6 industries all present: `interiors-and-furnishings`, `driving-schools`,
  `pharmacies`, `restaurants`.

### Case studies (31) — project `6qygzc2z`

Slugs: `3d-cad-visuals`, `ao-arena` (title "AO Arena (Concept)"), `alertforce`,
`anthony-walker-foundation`, `ayoa`, `casa-botanica-panama`, `chloes-cleaning-crew`,
`dr-donuts`, `energy-angels`, `fultons`, `game-art-brain`, `junior-jam`,
`little-astronauts`, `manzar`, `minnessak`, `mr-pickles`, `ndifo-safari`,
`new-compass`, `now-press-play`, `peekaboo`, `sp-elite-installation`,
`sight-for-life`, `smartspaces`, `sorted`, `teleqo-tech`, `the-smokey-carter`,
`trust-certs`, `unicef`, `varissa`, `vuegraphy`, `wmrji`.

- `ao-arena` is already titled "AO Arena (Concept)" in the CMS (relevant to O1).
- `unicef` present (D-context: UNICEF is a direct client, publishable).
- Every study still needs the delivered-vs-concept accuracy check per CP-01 / D10.

### Legal hub (7) — project `pz9kcb6n`

| Category | Slugs |
| --- | --- |
| `our-policies` | `privacy-policy`, `cookies-policy`, `data-processing-agreement`, `paid-ads-schedule` |
| `client-resources` | `terms-of-service`, `support-and-maintenance-schedule`, `nda-template` |

Warranty note (D12/§9): no explicit "3 months free post-launch support" clause was
found in these documents. The Support & Maintenance Schedule covers ongoing retained
support (best-efforts, reasonable-endeavours), not a launch warranty. This is an open
question for Hassan (see completion report).

### Blog (9) — project `dgx0l3po`

`why-template-is-a-dirty-word-in-enterprise-web-design`,
`conversion-rate-optimisation-tactics-that-drive-better-marketing-results`,
`ai-automation-in-2026-what-businesses-need-to-know`,
`how-crm-integrations-improve-ecommerce-checkout-conversions`,
`driving-better-ppc-results-mistakes-that-waste-budget`,
`rebranding-strategy-what-to-consider-before-changing-your-brand`,
`10-signs-your-website-is-costing-you-leads`,
`webflow-vs-wordpress-which-is-better-for-your-business`,
`why-your-wordpress-website-is-slow-and-how-to-fix-it`.

### Taxonomy documents inside the case-studies project (duplication finding)

The case-studies project (`6qygzc2z`) defines its **own** `industries` (35 entries,
e.g. Photography, Hospitality, Energy, Fashion, B2B, SaaS, Ecommerce, Jewellery) and
its **own** `services` tag list (20 entries including `webflow`, `woocommerce`,
`brochure`, `print`, `custom-forms` that do **not** exist in the real services
project). Because Sanity references cannot cross projects, these are separate,
divergent taxonomies from the `services` (`cqbs7syw`) and `solutions` (`z2m53qom`)
projects. This divergence is a CP-00K risk and is discussed in
`01-codebase-audit.md`.

---

## 3. Route inventory cross-check (nav links vs code vs content)

Brief requirement: report any route found in code not in the known list, and any in
the list not found in code. There was no pre-existing route list, so this file is the
canonical list. The meaningful cross-check is nav deep-links vs actual Sanity slugs.

- **All 15 hardcoded `/services/*` nav deep-links in `src/contants/navigation.js`
  resolve** to real service slugs. Confirmed against live content.
- **All 6 hardcoded `/solutions/*` sector links + 5 goal links resolve.**
- **Solutions in Sanity but NOT linked in nav:** `sme-founders`, `restaurants`,
  `saas-companies` (reachable only via the `/solutions` listing, not the mega-menu).
- **`/solutions/#sector`** anchor ("View all industries", `navigation.js`) depends on
  a `#sector` id existing on the solutions listing page. Verify during the crawl.
- **Sitemap omits live indexable pages:** `/agencies`, `/call`, `/testimonials`, and
  the LP `/wordpress-web-development` are absent from `src/app/sitemap.js` static list
  (`sitemap.js:35-82`). They have metadata and canonicals but no sitemap entry.
- **`Footer.jsx:758`** has an empty `<Link href="">` (broken placeholder link).

---

## 4. Test / junk routes (recommend removal, CP-00E)

All three are disallowed in `robots.js:7`, unlinked from nav, and non-production:

| Route | File | What it is |
| --- | --- | --- |
| `/hassan-test` | `(site)/hassan-test/page.jsx` | Bare `<iframe>` to a `revuora.app` embed; stray `{/* Hekko */}` comment; `robots:{index:false}` |
| `/review-test` | `(site)/review-test/page.jsx` | Full homepage clone trialling `TestingTestimonials`; hand-rolled in-body `<head>` robots tag (invalid) |
| `/testing-testimonials` | `(site)/testing-testimonials/page.jsx` | Renders `TestingTestimonials2` (external `revuora.app` fetch); `robots:{index:false}` |

Removing them also orphans `TestingTestimonials.jsx`, `TestingTestimonials2.jsx`, and
lets the three `robots.js` disallow entries be dropped.

---

## 5. Production crawl (CP-00B) — COMPLETE (12 Aug 2026)

Crawled `https://creativepixels.agency` with a scripted `fetch` sweep (99 URLs: 21
static/list pages + 3 test routes + 15 services + 14 solutions + 31 case studies + 9
blog + 7 legal + robots + sitemap), capturing status, final URL, title, meta
description, H1, canonical and robots per URL, plus infrastructure behaviour. **The
exhaustive per-URL capture (including full titles, descriptions and H1s) is preserved
in `03-crawl-raw.jsonl` in this folder** and must not be deleted: it is the legacy
metadata snapshot and redirect-map raw material that cannot be recovered post-rebuild.

Headline: **every one of the 99 URLs returned HTTP 200.** No 404s, no unexpected
redirects, no broken slugs. All nav deep-links resolve. Content pages are indexable
(empty robots); thank-you pages and the three test routes are `noindex, nofollow`.

### Infrastructure behaviour (redirect-map inputs)

| Test | Result |
| --- | --- |
| `http://creativepixels.agency/` to HTTPS | **308** to `https://creativepixels.agency/` (good) |
| `http://creativepixels.agency` (bare) to HTTPS | **308** to `https://creativepixels.agency/` (good) |
| `https://www.creativepixels.agency/` | **fails to resolve** (connection error, no redirect). The www host is not served. Fix before or at CP-15: add www to apex redirect at DNS/Vercel. |
| `https://creativepixels.agency` (no slash) | 200 |
| `https://creativepixels.agency/about/` (trailing slash) | **308** to `/about` (Next `trailingSlash:false`, good) |
| `https://creativepixels.agency/About` (uppercase) | 404 (paths are case-sensitive) |
| `https://creativepixels.agency/nope-404-xyz` | 404 (custom not-found renders) |

The sitemap emits the home URL with a trailing slash while the homepage canonical is
emitted without one (`https://creativepixels.agency`). Harmless but inconsistent; worth
normalising at CP-15.

### Indexation

- **Indexable (robots empty):** all 21 production static/list pages and all 76 dynamic
  detail pages.
- **`noindex, nofollow` (correct):** `/thank-you`, `/wordpress-web-development/thank-you`.
- **`noindex, nofollow` (test routes, still serving 200):** `/hassan-test`,
  `/review-test`, `/testing-testimonials`. They render the generic root-default
  title/description, confirming they are throwaways. Recommend deletion (CP-00E/J).

### Metadata anomalies found (all live-confirmed)

1. **Missing canonical on 14 `/solutions/[slug]` pages** — every solution detail page
   has an empty canonical. Confirms `solutions/[slug]/page.jsx:40` omits
   `alternates.canonical`. Phase 0 fix.
2. **Missing canonical on `/call`** — the hardcoded `/call` page emits no canonical.
   Phase 0 fix candidate (add `alternates.canonical:"/call"`).
3. **Missing meta description on `/solutions/saas-companies`** — empty description. This
   is a **Sanity content gap** (blank `seo.metaDescription`), not code. Because staging
   shares the production dataset, treat any fix as a production content edit. Flag to
   Hassan; not a Phase 0 code fix.
4. **No `<h1>` in the server HTML of the seven legal detail pages** — `/legal/[slug]`
   renders no `<h1>`. Heading-structure gap; fix when the legal template is next touched.
5. **Homepage `<h1>` not present in static HTML** — the `HomeHero` heading is wrapped
   for animation and did not surface as a plain `<h1>`. Verify in-browser that a
   semantic `<h1>` exists (protected page; confirm before any change).

### Content/accuracy observations for later phases (recorded, not actioned)

- `/case-studies/ao-arena` title and H1 are already "AO Arena (Concept)" (O1 input).
- `/case-studies/unicef` is described as a fundraising-event **print** suite, not a
  website (delivery-fact accuracy for CP-12).
- Case-study descriptions carry verifiable delivery facts (Wix to WordPress migrations,
  Webflow, Shopify builds, LMS platforms), the largest untapped proof source per
  `00-context.md` section 8.
- `/solutions/#sector` anchor existence was not separately verified; check at CP-07/CP-08.

Full per-URL titles and descriptions (the exact current metadata for continuity
verification at CP-15) are in `03-crawl-raw.jsonl`.

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

---

## 6. CP-01 — content / intent audit: SERVICES (18 August 2026)

Analysis only — no implementation. Judged on commercial and content merit (historic search
and backlink data out of scope, D3). Source: the §5 crawl + `03-crawl-raw.jsonl`. Scope of
this section: the services hub + the 15 live `/services/*` detail pages **as they exist on
production today** (production still reads the old projects — so `custom-apps-and-ai` is one
fused page here, not yet the staging split). Solutions, case studies, blog, legal and the
static pages are separate sections, still to do.

### Findings common to all service pages (recorded once)

- **Page type:** hub = static list (`/services`, Sanity-driven); details = dynamic
  `/services/[slug]` (Sanity `services`, ISR 3600). All returned 200.
- **Internal links:** every service is linked from the desktop mega menu, the `/services`
  hub, the footer and mobile menu — well-linked, no orphans.
- **SEO — titles:** strong, intent-led, keyword + "Free [audit/call]" pattern. Good as-is.
- **SEO — canonical:** emitted by code (`services/[slug]/page.jsx` sets
  `alternates.canonical`), so present despite the raw extraction showing blank.
- **SEO — meta descriptions: CORRECTION (19 Aug 2026).** An earlier draft of this section said
  descriptions were *empty* on every service page. That was wrong — verified directly against the
  staging dataset (`4m0eqoi1/staging`): **15 of the 16 service docs carry a `seo.metaDescription`**
  (the CP-00K migration carried the old copy across). The only genuinely blank one is
  **`ai-automation`** (the new split stub, on HOLD for content). So the real problem is not *empty*,
  it is **non-compliant**: the migrated descriptions are the old marketing copy and break the
  content rules — banned words ("Unlock", "Maximize", "elite", "stunning", "powerful", "Boost"),
  **em dashes**, and **US spelling** ("optimization", "Maximize"). The `/services` **hub** description
  is **hardcoded in code** (`services/page.jsx:2-4`, itself em-dash-joined), not Sanity. So the task
  is a **REWRITE, not a fill** — and it is **staging-safe** (a new-project edit that ships at cutover,
  see the meta block below). Drafts prepared for review (below); nothing written to staging yet.
- **Commercial value:** high across the board — these are the money pages. Keep all; the work
  is REWRITE-for-quality and RE-GROUP, not removal.
- **Taxonomy:** the live 3-way grouping (`design-development` / `growth` / `support`) is
  replaced by the four pillars at CP-03 (mapping in `01-codebase-audit.md` §6). Every KEEP
  below is "keep the page, re-pillar it at CP-03".

### Per-URL

| URL | H1 (current) | Role / target intent | Content quality | Decision |
| --- | --- | --- | --- | --- |
| `/services` | "Services built around your goals, not templates." | Hub; browse + commercial entry | Decent hub, groups by the old 3 categories | **KEEP** — REWRITE grouping to the four pillars at CP-03; add meta description |
| `/services/branding` | Strategic Brand Identity Design | Brand & Experience buyer | Solid | **KEEP** (+ meta desc) |
| `/services/ui-ux-design` | UI/UX Design Services & Prototyping | Brand & Experience buyer | Solid | **KEEP** (+ meta desc) |
| `/services/wordpress` | WordPress Development Services | Platform buyer (WP) | Solid | **KEEP, flat URL** (D35) — conceptually Web & Ecommerce; hierarchy lives in nav grouping, not the URL |
| `/services/shopify` | High-Performance Shopify Development | Platform buyer (Shopify) | Solid | **KEEP, flat URL** (D35) — as above |
| `/services/custom-apps-and-ai` | Custom Web Development & AI Solutions | Two distinct buyers fused | Conflates two offerings in two different pillars | **SPLIT** → Custom App Development (Web & Ecommerce) + AI & Automation (AI & Automation). **REDIRECT** old slug → `/services/custom-app-development` at cutover |
| `/services/seo` | ROI-Driven SEO Services & Growth Strategy | Growth buyer | Solid | **KEEP** (+ meta desc) |
| `/services/ppc` | ROI-Focused Paid Search & Social | Growth buyer | Solid | **KEEP** — **rename user-facing to "Paid Media"** (keep "PPC" in the copy for search). CP-03/CP-09 inherit (+ meta desc) |
| `/services/cro` | Conversion Rate Optimisation (CRO) Services | Growth buyer | Solid | **KEEP** (+ meta desc) |
| `/services/email` | Email Marketing & Retention Strategy | Growth buyer | Solid | **KEEP** (+ meta desc) |
| `/services/analytics` | Data Analytics & BI | Straddles TWO propositions | Ambiguous — H1 literally "Data Analytics & BI" | **REVIEW** — the page fuses marketing measurement (Growth & Performance) and BI/dashboard builds (Custom App Development). Options + recommendation below |
| `/services/maintenance` | Website Maintenance & Growth Support | Retained-support buyer | Solid | **REPOSITION** (D36) → parent proposition **"Ongoing Growth & Support"** (maintenance + security + performance + ongoing improvement) |
| `/services/speed` | Web Performance Optimisation | Performance buyer | Solid, but narrow | **KEEP** (D36) — supporting specialist page; real search demand for site-speed work |
| `/services/security` | Web Security & Protection | Security buyer | Solid, but narrow | **DEMOTE → capability** within Growth & Support (D36) — **pending O14** (confirm we don't deliver standalone security work) |
| `/services/migrations` | Website & Platform Migration Services | Replatform buyer | Solid | **KEEP** (+ meta desc) |
| `/services/accessibility` | Web Accessibility (WCAG) Services | Accessibility buyer | Solid — and strategically important (we sell accessibility) | **KEEP** — must be exemplary; ties to the Step-1 WCAG work |

### Decisions that need more than KEEP

- **SPLIT — `custom-apps-and-ai`.** It fuses Custom App Development (Web & Ecommerce pillar)
  and AI & Automation (its own pillar). CP-00K already split it in staging
  (`custom-app-development` + `ai-automation`). CP-01 records the URL consequence: the old
  `/services/custom-apps-and-ai` must **REDIRECT** to `/services/custom-app-development` at
  cutover (CP-15 redirect map), and the AI half becomes the `ai-automation` service page
  (currently a taxonomy-only stub — needs authored content; note the **AI & Automation case
  study is on HOLD** per 00-context, but the *service page* content is a separate item).
- **CREATE — Web Design & Development, and Ecommerce.** These are distinct offerings in the
  approved pricing (§7: from £1,500 / from £3,500) with **no page today**. Confirmed for
  **CP-05, first in priority**. `wordpress` and `shopify` are platform-specific pages that
  should sit **under** these broader offerings (IA below).

### Decisions made on the flagged questions (Hassan, 18 August 2026)

1. **IA — platform pages stay flat (D35).** `wordpress` / `shopify` are NOT nested under a
   parent path; they sit at the same URL depth as every other service. The hierarchy lives in
   the mega-menu grouping + internal linking, not the URL.
2. **Support cluster consolidated (D36).** `maintenance` → parent **"Ongoing Growth &
   Support"** (maintenance + security + performance + ongoing improvement); **`speed` kept** as
   a supporting specialist (real search demand); **`security` demoted to a capability** —
   **pending O14** (confirm CP does not deliver standalone security work; if it does, it stays
   a service — do not overclaim).
3. **`ai-automation` page built at CP-05 (D37)** as a P1 pillar page (Biome4Pets is now real
   evidence behind it). Its sub-pages (Workflow Automation, AI Agents, AI Integrations) wait
   for more delivery proof.

### Analytics — REVIEW (options + recommendation)

The page straddles two propositions in two different pillars, and the H1 ("Data Analytics &
BI") makes the ambiguity live:
- **Marketing measurement** — tracking, GA4, attribution, reporting → **Growth & Performance**.
- **BI / dashboard builds** — bespoke data products → these are genuinely **Custom App
  Development** work.

Options:
- **(a) Reposition as a Growth measurement page; move BI/dashboard builds to Custom App
  Development.** Analytics becomes the measurement service; BI is surfaced as a use-case under
  Custom App Development.
- **(b) Keep as a genuine dual page** spanning both propositions.
- **(c) Split** into two pages (measurement + a separate BI page).

**Recommendation: (a).** A page cannot cleanly sit in two pillars, so (b) perpetuates exactly
the ambiguity the brief flags and muddies the CP-03 pillar assignment. (c) creates a thin BI
page that overlaps Custom App Development — BI dashboards *are* custom builds, so they belong
as Custom App Development work, not a separate thin service. (a) gives clean pillar
assignment, matches the dominant "analytics services" search intent (marketing measurement),
and removes the overlap: rewrite the page to marketing measurement (drop "& BI" from the
positioning) and point dashboard/BI builds at Custom App Development.

**APPROVED (a) — Hassan, 19 Aug 2026 → D38.** Analytics becomes a Growth & Performance
measurement page; BI/dashboard builds become a Custom App Development capability, not a
separate page. The H1/title/meta drop "& BI" (the rewritten meta description below reflects
this). Inherited by CP-03 (pillar map) and CP-09 (copy).

### Meta descriptions — drafts for review (approved 19 Aug 2026; not yet written to staging)

- **Corrected scope:** not empty — **non-compliant** (see the corrected finding above). 15 service
  docs carry migrated old copy that breaks the content rules; `ai-automation` is blank (on hold);
  the `/services` hub description is hardcoded in code. So this is a **rewrite**.
- **Staging-safe:** editing `seo.metaDescription` on the new project's staging docs affects **only
  the staging preview, not production** (production still reads the old projects), and ships at
  cutover. The **hub** rewrite is a **code** change (`services/page.jsx`), not Sanity.
- **What is genuinely blocked:** fixing descriptions on the **live** site before cutover would
  require editing the five old projects — forbidden by the standing rules. We bank the value in
  staging now; we do not patch live early.
- **Rules applied:** UK English, no em dashes, ≈150 chars, specific to each service (not a template
  with the name swapped), no banned buzzwords, no invented claims, no pricing/warranty references.

| Page | Current title (kept) | Current H1 (kept) | Draft meta description (≈150) |
| --- | --- | --- | --- |
| `/services` (hub, code) | Web Design and Development Services \| Free Strategy Call | Services built around your goals, not templates. | Brand, web and ecommerce, growth marketing and automation, delivered by one team. See how CreativePixels can help and book a free strategy call. |
| `/services/branding` | Brand & Identity Design for Ambitious Brands \| Free Call | Strategic Brand Identity Design | Brand identity design covering strategy, logo, typography and visual guidelines, built to make your business look consistent and credible across every channel. |
| `/services/ui-ux-design` | UI/UX Designing Services & Figma Prototypes \| Free Call | UI/UX Design Services & Prototyping | UI and UX design for websites and apps: user flows, wireframes, Figma prototypes and design systems that make products clearer and easier to use. |
| `/services/wordpress` | WordPress Web Development Services \| Free Website Audit | WordPress Development Services | Custom WordPress development with bespoke themes, fast page loads and an editor your team can manage, built for reliable performance and search visibility. |
| `/services/shopify` | Shopify Web Development Services \| Free Strategy Call Now | High-Performance Shopify Development | Shopify design and development with custom themes, conversion-led product pages and the integrations your store needs to sell and grow. |
| `/services/custom-app-development` | *(post-split; title/H1 to be updated off the fused page)* | *(Custom App Development)* | Custom web application development: bespoke tools, dashboards, portals and API integrations built around the way your business actually works. |
| `/services/seo` | SEO Services to Grow Traffic & Leads \| Free Website Audit | ROI-Driven SEO Services & Growth Strategy | SEO services covering technical audits, on-page work, content and local search, focused on the rankings and qualified traffic that turn into enquiries. |
| `/services/ppc` (Paid Media) | PPC Ad Management Services \| Free Audit to Improve ROI Now | ROI-Focused Paid Search & Social | Paid media management across Google, Meta and LinkedIn, from PPC campaign setup to targeting and testing, focused on getting more from your ad budget. |
| `/services/cro` | Conversion Rate Optimisation Services \| Free CRO Audit Now | Conversion Rate Optimisation (CRO) Services | Conversion rate optimisation using audits, A/B testing, user research and funnel analysis to turn more of your existing traffic into customers. |
| `/services/email` | Email Marketing Services & Retention Strategy \| Free Audit | Email Marketing & Retention Strategy | Email marketing and retention: automated flows, campaigns and segmentation that keep customers engaged and bring more repeat revenue from your list. |
| `/services/analytics` | Data Analytics Services & BI Dashboards \| Free Audit Now | Data Analytics & BI *(→ measurement, D38)* | Marketing measurement and analytics: GA4 and GTM setup, tracking, attribution and reporting so you can see what your marketing is really delivering. |
| `/services/maintenance` | Website Maintenance Support & Security \| Free Audit Now | Website Maintenance & Growth Support | Ongoing website support: updates, backups, monitoring, fixes and steady improvements that keep your site fast, secure and working month to month. |
| `/services/speed` | Web Performance Optimization Techniques \| Free Audit Now | Web Performance Optimisation | Website speed and Core Web Vitals work: finding what slows your pages down and fixing it with caching, image and code improvements for faster loads. |
| `/services/security` | Web Security Services & Protection \| Free Website Audit | Web Security & Protection | **HELD — left blank pending O14.** Not written; the migrated copy (which promised malware removal, firewalls, 24/7 monitoring) was **cleared to blank** so staging does not overclaim standalone security work until O14 confirms we deliver it. |
| `/services/migrations` | SEO Website Migration Services \| Secure Free Audit Call | Website & Platform Migration Services | Website and platform migrations handled carefully, with redirect mapping, content transfer, DNS and launch planning that protect your rankings and traffic. |
| `/services/accessibility` | Web Accessibility Services \| WCAG Audit & Free Consultation | Web Accessibility (WCAG) Services | Web accessibility services covering WCAG 2.2 audits, remediation, VPAT support and assistive-technology testing to find and fix the barriers on your site. *(reworded per Hassan: describes the work, not a compliance outcome)* |

**Solutions hub (`/solutions`) — rewrite (drops the "by sector" framing, D39 context):** Outcome-led
solutions for common business goals, from generating more leads to rebuilding your website or
automating operations. Book a free strategy call.

Notes: `custom-app-development`'s title/H1 still carry the old fused "& AI Solutions" wording and
need updating as part of the SPLIT (separate from the meta description). `analytics` copy already
reflects the D38 reposition (measurement, no "& BI").

**WRITTEN TO STAGING — 19 Aug 2026 (Hassan approved).** The 14 approved service descriptions
(accessibility in its reworded form) were written to `4m0eqoi1/staging` via the Sanity mutate API;
`security` was **cleared to blank** (held pending O14 — see its row); `ai-automation` stays blank
(on hold). Verified in staging: all 14 present (135–159 chars, no US spelling, no em dashes), security
and ai-automation blank. The **two hubs are code** (`services/page.jsx`, `solutions/page.jsx`), so
those two approved descriptions were made as **code edits on `development`**, not Sanity writes.
Production is unaffected (still reads the old projects); these ship at cutover.

### Goal-solution meta descriptions — drafts for review (not written)

Same rules; the 4 surviving goals only (`scale-marketing` is merging under D39, so it needs no
description — it redirects). Present but non-compliant today; **drafted here for review, NOT written
to staging** (unlike the approved services above):

| Page | H1 (current) | Draft meta description (≈150) |
| --- | --- | --- |
| `/solutions/increase-leads` | Generate More Qualified Leads Online | Generate more qualified leads and grow the channels that bring them in, with landing pages, CRM integration, SEO, paid media and conversion work. |
| `/solutions/replatform-rebuild` | Rebuild & Modernise Your Website | Rebuild and modernise an ageing website with a faster, mobile-first design and an SEO-safe migration that protects the rankings and traffic you already have. |
| `/solutions/launch-new-product` | Launch Your New Product | Take a new product to market with MVP planning, a launch-ready website or landing pages, and the campaigns to put it in front of the right audience. *(pending O15)* |
| `/solutions/automate-operations` | Automate Your Operations | Automate manual, repetitive operations with AI, system integrations and workflow design that free your team from the work software should be doing. |

`increase-leads` copy is written broad to absorb the merged Scale Marketing (D39). These 4 await
your approval before I write them to staging.

### CP-01 services summary

15 live service pages + hub. **No REMOVE, no NOINDEX, no REDIRECT-away** — every page is a
real commercial asset. Decisions: **12 KEEP** (pending re-pillaring at CP-03 + meta
descriptions; PPC renamed user-facing to "Paid Media"), **1 REVIEW** (`analytics` — recommend
option (a)), **1 REPOSITION** (`maintenance` → "Ongoing Growth & Support"), **1 DEMOTE**
(`security` → capability, pending O14), **1 SPLIT** (`custom-apps-and-ai`, with a redirect of
the old slug), and **2 CREATE** (Web Design & Development, Ecommerce — CP-05). `analytics`
resolved to **D38** (reposition as measurement). Biggest low-risk win: **rewriting the
non-compliant meta descriptions** (not empty — corrected above) — safe in the new staging dataset;
15 drafts + both hubs prepared for review above.

---

## 7. CP-01 — content / intent audit: SOLUTIONS (18 August 2026)

Analysis only. Same method and constraints as §6. **Scope is deliberately narrow:** per the
prior decisions, the 9 `category: industry` solutions are **not solutions** — they migrate to
`industry` documents at CP-08, and `ecommerce-brands` is an industry not a solution (D4). So
this audit covers **the `/solutions` hub + the 5 remaining goal-based solutions only**. The 9
industry URLs are handled as redirects (below), not audited here.

### Findings common to the goal solutions
- **Page type:** hub = static list; details = dynamic `/solutions/[slug]` (Sanity `solutions`,
  ISR 3600). All 200.
- **SEO — MISSING CANONICAL on every `/solutions/[slug]`** (the §5 anomaly; `solutions/[slug]`
  omits `alternates.canonical`, unlike services). Phase-0 code fix, already logged.
- **SEO — meta descriptions present but non-compliant** on all 5 goal detail pages (CORRECTION,
  19 Aug 2026 — verified in staging: they carry migrated old copy, not blank, same as services; the
  one genuinely blank description in this project is `saas-companies`, an industry that redirects
  anyway). Same staging-safe **rewrite** as §6. The hub *does* have a description (also to rewrite,
  drafted in §6).
- **Internal links:** the 5 goals are linked from the mega-menu "By Goal" column + the
  `/solutions` hub.
- **Overlap risk:** goal solutions are outcome-framed entries that sit alongside the
  service-framed Growth pages (SEO/PPC/CRO/email). The goal-vs-service distinction must be
  sharp or they cannibalise each other — this is where Scale Marketing fails (below).

### Per-URL

| URL | H1 (current) | Role / target intent | Decision |
| --- | --- | --- | --- |
| `/solutions` | "Solutions tailored to your Reality." | Hub for the solutions axis | **KEEP + REWRITE** — the hub (and its meta description) still frames "by sector"; sectors move to industries, so rewrite to a **goal-only** hub (+ link to industries once they exist, CP-08). Add canonical (Phase 0) |
| `/solutions/increase-leads` | Generate More Qualified Leads Online | Outcome buyer: acquisition | **KEEP** — clear, distinct goal (top-of-funnel acquisition) |
| `/solutions/scale-marketing` | Scale Your Marketing & Expand Reach | Outcome buyer: scale existing marketing | **REVIEW — weakest of the 5** (distinctness flag below) |
| `/solutions/replatform-rebuild` | Rebuild & Modernise Your Website | Outcome buyer: rebuild | **KEEP** — distinct rebuild/replatform goal (pairs with the Migrations service, different framing) |
| `/solutions/launch-new-product` | Launch Your New Product | Outcome buyer: go-to-market | **KEEP** — distinct go-to-market goal (light flag: confirm it's a real offering, not aspirational) |
| `/solutions/automate-operations` | Automate Your Operations | Outcome buyer: ops automation | **KEEP** — maps to the **AI & Automation** pillar and now has real evidence behind it (Biome4Pets) |

### Scale Marketing — distinctness flag (the brief asks)

**Recommendation: MERGE / consolidate — it is the weakest of the five.** "Scale Marketing" and
"Increase Leads" are both growth outcomes served by the same underlying services (SEO / Paid
Media / email / CRO), and a buyer can't easily tell which page they belong on. The other three
each map to a distinct buyer journey — rebuild (replatform), go-to-market (launch), ops
automation (automate). Scale Marketing does not; it reads as a second growth-outcome page
overlapping Increase Leads. Options: **(a)** merge it into Increase Leads; **(b)** reframe one
broader "Grow & Scale" goal; **(c)** keep it only if the copy is sharply differentiated
(Increase Leads = new-demand acquisition; Scale Marketing = scaling spend/channels on existing
demand). **Default recommendation: (a) merge.**

**APPROVED (a) — Hassan, 19 Aug 2026 → D39.** `/solutions/scale-marketing` is folded into
`/solutions/increase-leads` (anything worth keeping is moved across, **not deleted**), and
`/solutions/scale-marketing` **REDIRECTS** to the merged page at CP-15. This leaves **4 goal
solutions**: `increase-leads`, `replatform-rebuild`, `launch-new-product`, `automate-operations`.

### The 9 industry-category "solutions" (redirect, not audited here)

`ecommerce-brands`, `interiors-and-furnishings`, `sme-founders`, `driving-schools`,
`charities-and-foundation`, `pharmacies`, `restaurants`, `b2b-services`, `saas-companies` —
these live URLs migrate to `industry` documents (CP-08). At cutover each
`/solutions/<industry>` **REDIRECTS** to its `/industries/<slug>` page once CP-08 builds those
routes (D4 covers `ecommerce-brands` specifically at CP-15). Recorded in §2/§3; not part of
the solutions decision set.

### CP-01 solutions summary

Hub + (now) **4 goal solutions**. **KEEP + REWRITE the hub** (drop the sector framing; add
canonical); **4 KEEP** goals (`increase-leads`, `replatform-rebuild`, `launch-new-product`,
`automate-operations`); **`scale-marketing` MERGED into Increase Leads (D39, approved)** — content
folded, old slug redirects at CP-15. The 9 industry URLs REDIRECT to industry pages at CP-08 (not
solutions). Same two SEO gaps apply to the goal pages: **missing canonical** (Phase-0 code fix) and
**non-compliant meta descriptions** (staging-safe rewrite). One open flag: **O15** — confirm
`launch-new-product` is a real, delivered offering.

---

## 8. CP-01 — content / intent audit: CASE STUDIES (19 August 2026)

Analysis only. Not a keep-or-remove exercise — **all 31 published case studies are kept** (O5). This
section does what the brief asks: **classify each as flagship / supporting / archive**, record the
**service + pillar** it evidences, the **proof it actually contains**, and whether it is strong
enough to sit on a commercial page as evidence. Source: the §5 crawl + the **staging case-study
bodies read directly** (`theChallenge` / `ourApproach` / `theSolution` / `excerpt` / live-site link)
— because the meta descriptions alone cannot show whether a study contains real proof.

### Scope correction — 31 published, but 41 records in staging

The production crawl found **31** case studies; staging holds **41 `caseStudies` records**. The
extra 10 are: **8 draft-only new studies** not in production — `loop`, `lola-blake`, `core-estates`,
`amana-partnership`, `ivy-and-duke`, `drive-uk`, `ofh-care`, plus **`biome4pets`** (ours, the AI
pillar draft) — and **2 draft edits** of already-published studies (`mr-pickles`, `wmrji`). **This
audit covers the 31 published only** (the user's scope). The 8 unknown draft studies need Hassan's
confirmation (real delivered work? publish or discard?) — flagged, not classified here.

### The proof profile — read this before the table

Three findings shape every classification below:

1. **Delivery facts: strong and universal.** Every one of the 31 clearly states what was built
   (WordPress / WooCommerce / Shopify / Webflow / Figma handoff / brand identity / migration /
   custom portal / print). This is the real, honest proof asset, exactly as `00-context.md` §8 says.
2. **Outcome data: almost absent.** Only **3 of 31** carry any quantified result — `unicef`
   (£478,000 raised, 2018, print), `now-press-play` (97% / 89%), `sight-for-life` (100%). The other
   28 assert quality ("now has a website that matches…") with **no numbers**. Consistent with O4.
3. **Testimonials: none.** **Zero** of the 31 contain a client quote in the CMS body (there is no
   testimonial field). The closest is `unicef` ("the UNICEF UK events team crediting the suite…"),
   paraphrased, not a quote.

**Consequence:** no study can be "flagship" on *results* — the evidence isn't there yet. Flagship
here means **recognisable client and/or standout delivery scope or capability, live and verifiable**.
The single highest-leverage action for CP-12 is O4: get a **quote + one metric** onto each flagship.

### Pillar coverage (by actual work, not the unreliable tags)

The case-studies project's `services`/`industries` tags are **mis-assigned** (e.g. `chloes-cleaning-crew`
tagged "Shopify" but built on WordPress+Elementor; `junior-jam` tagged industry "Restaurants"), so
pillar is judged from the body copy:

| Pillar | Published evidence | Verdict |
| --- | --- | --- |
| **Brand & Experience** | branding / UI-UX led: `manzar`, `trust-certs`, `sp-elite-installation`, `dr-donuts`, `junior-jam`, `chloes-cleaning-crew`, (`ao-arena` concept, `peekaboo` MVP) | Well evidenced |
| **Web & Ecommerce** | the bulk — WordPress/WooCommerce/Shopify/Webflow builds, migrations, and one **custom app** (`anthony-walker-foundation`) | **Strongest** pillar; heavily evidenced |
| **Growth & Performance** | SEO/CRO/analytics/migrations appear **only as secondary** workstreams on website builds (`alertforce`, `teleqo-tech`, `new-compass`, `casa-botanica-panama`, `sight-for-life`, `little-astronauts`, `smartspaces`). **No study is primarily a growth engagement**, and **Paid Media (PPC) and email have zero evidence at all** | **Thin** — no standalone proof; **flag** |
| **AI & Automation** | **none published** — only `biome4pets` (draft) | **Empty** — biggest gap; **flag** |

### Per-study classification (31)

Proof key: **D** = delivery facts (what was built), **O** = quantified outcome, **Q** = client quote.

| Study | Evidences (pillar / work) | Proof | Class | Note |
| --- | --- | --- | --- | --- |
| `alertforce` | Web & Ecommerce + Growth (WP rebuild, ~20yr SEO preserved) | D | **Flagship** | AU market leader in WHS/OHS training; large content-heavy, SEO-safe rebuild. Add a metric. |
| `ayoa` | Web & Ecommerce + Growth (redesign + ongoing) | D | **Flagship** | Recognisable UK AI/SaaS name. Ongoing relationship. |
| `anthony-walker-foundation` | Web & Ecommerce — **Custom App / LMS portal** | D | **Flagship** | Rare capability (custom app) + recognisable cause. Strongest non-AI custom-build proof. |
| `now-press-play` | Web & Ecommerce (Webflow), EdTech | **D + O** (97% / 89%) | **Flagship** | Award-winning EdTech; one of only 3 with numbers. |
| `teleqo-tech` | Web & Ecommerce + Growth (redesign + SEO), enterprise B2B | D | **Flagship** | US enterprise geospatial; anchors B2B/SaaS. |
| `casa-botanica-panama` | Web & Ecommerce + Growth (brand→Squarespace→WP migration, SEO, CRO, booking) | D | **Flagship** | Broadest full-service scope in one project; luxury/hospitality. |
| `minnessak` | Web & Ecommerce (full Shopify build), premium ecommerce | D | **Flagship** | Best pure-ecommerce flagship (full build, not a refresh). |
| `sight-for-life` | Web & Ecommerce + Growth (redesign, CRO, analytics, migration), charity | **D + O** (100%) | **Flagship** | Two-decade charity; has a metric; donor-trust story. |
| `unicef` | **Print / event design** (not a digital pillar) | **D + O** (£478k) + near-Q | **Flagship (caveat)** | Globally recognisable + strongest proof, but **print, not web** — use for credibility, **not pillar evidence**. Live:NO is correct (no website). |
| `3d-cad-visuals` | Web & Ecommerce + Brand (WP showcase site) | D | Supporting | Niche premium build; solid. |
| `chloes-cleaning-crew` | Brand & Experience + Web (brand + WP/Elementor) | D | Supporting | Local service; brand+site from scratch. |
| `dr-donuts` | Brand & Experience + Web (brand + site) | D | Supporting | **Verify live** (live:NO). |
| `energy-angels` | Web & Ecommerce (B2B redesign) | D | Supporting | **Verify live** (live:NO). |
| `fultons` | Web & Ecommerce (WooCommerce rebuild) + ongoing maintenance | D | Supporting | Solid ecommerce rebuild; retained client. |
| `game-art-brain` | Web & Ecommerce + Brand (WP, performance-heavy) | D | Supporting | Graphics-heavy build; good craft story. |
| `junior-jam` | Brand & Experience (Figma design + dev handoff) | D | Supporting | Design/UX-only engagement (no build); distinct model. |
| `little-astronauts` | Web & Ecommerce + Growth (two sites, launch→rebuild, booking) | D | Supporting | Good "outgrew the first site" narrative. |
| `manzar` | Brand & Experience + Web (bilingual brand + WP) | D | Supporting | Distinctive bilingual/brand angle. |
| `mr-pickles` | Web & Ecommerce (Shopify homepage refresh) | D | Supporting | **Thin scope** (homepage cleanup only). |
| `ndifo-safari` | Web & Ecommerce (Wix→WP migration), luxury travel | D | Supporting | Clean migration story. |
| `new-compass` | Web & Ecommerce + Growth (redesign, SEO, ongoing), US SaaS | D | Supporting | Solid B2B; overlaps teleqo-tech (kept it flagship). |
| `smartspaces` | Web & Ecommerce + Growth (refresh, SEO, migration) | D | Supporting | Premium home-improvement build. |
| `sorted` | Web & Ecommerce + ongoing support, media | D | Supporting | **Verify live** (live:NO; copy uses past tense). |
| `sp-elite-installation` | Brand & Experience (branding) + local WP | D | Supporting | Trades/local lead-gen. |
| `the-smokey-carter` | Web & Ecommerce (ecommerce redesign), award-winning food brand | D | Supporting | Named award; could rise with a metric. |
| `trust-certs` | Brand & Experience + Web (brand + site), B2B compliance | D | Supporting | New-business launch, credibility framing. |
| `varissa` | Web & Ecommerce (redesign), FCA-regulated finance | D | Supporting | Regulated-sector trust angle. |
| `vuegraphy` | Web & Ecommerce (WP), publishing | D | Supporting | Longevity proof ("built 2019, still running"). |
| `wmrji` | Web & Ecommerce + **Accessibility**, charity | D | Supporting | One of the few tagged Accessibility — ties to the WCAG selling point. |
| `ao-arena` | Brand & Experience (UI/UX) — **concept pitch** | concept only (no D) | **Archive** | **Not delivered client work** (O1). Keep only as a clearly-labelled *concept*; never present as delivered. Copy even uses "world-class" (banned). |
| `peekaboo` | Brand & Experience (UI/UX) — early-stage **MVP** | D (thin) | **Archive** | Delivered but very thin (MVP landing + extension UI, early-stage startup, no live product). Archive candidate; **verify live**. |

**Tally: 9 flagship (1 with a print caveat), 20 supporting, 2 archive.**

### Flags for Hassan (the brief asks for these specifically)

- **AI & Automation has zero published evidence.** The pillar the whole strategy leans on rests on
  one **unpublished** draft (`biome4pets`). Until it publishes (+ its 5 facts collected), the AI
  pillar page (D37, CP-05) will launch with no case-study proof. **Highest-priority evidence gap.**
- **Growth & Performance is thin, and Paid Media + email are empty.** Every SEO/CRO/analytics
  mention is secondary to a website build; there is **no case study that is primarily a growth
  engagement with a result**, and **no PPC/Paid-Media or email case study at all**. If we sell those
  services (we do), we need at least one proof each — flag for outcome collection (O4) or a new write-up.
- **Concept / speculative work:** `ao-arena` (explicit concept — archive/label) and `peekaboo`
  (early-stage MVP, thin) are the only two that are not solid delivered client work.
- **Off-pillar but valuable:** `unicef` is **print, not web** — recognisable and well-proven, but it
  evidences event/print design, not a digital pillar. Use it as a credibility/logo, not pillar proof.
- **No study has *zero* usable proof** (all carry delivery facts) — but **28 of 31 have no metric and
  31 of 31 have no quote**. The flagships are where a single quote + metric would matter most (O4).
- **Live-status to verify at CP-12** (CMS has no live-site link): `dr-donuts`, `energy-angels`,
  `sorted`, `peekaboo` claim delivered sites but link to none; `ao-arena` (concept) and `unicef`
  (print) are expected blanks. Confirm the four are actually live before using them as proof.
- **Tags are unreliable** — service/industry tags are mis-assigned across the set (divergent
  case-studies taxonomy, per §2). Pillar and industry mapping must be **re-derived from content** at
  CP-03 / CP-08 / CP-12, not inherited from the existing tags.

### CP-01 case studies summary

All 31 kept. **9 flagship** (`alertforce`, `ayoa`, `anthony-walker-foundation`, `now-press-play`,
`teleqo-tech`, `casa-botanica-panama`, `minnessak`, `sight-for-life`, `unicef`†), **20 supporting**,
**2 archive** (`ao-arena` concept, `peekaboo` MVP). †`unicef` is flagship for recognition/proof but
is print, not a digital pillar. Evidence is delivery-fact-rich, outcome-poor, testimonial-empty —
so classifications rest on client recognition + scope, and O4 (collect a quote + metric per
flagship) is the biggest quality lever. Two structural gaps: **AI & Automation (no published proof)**
and **Growth & Performance / Paid Media / email (no standalone proof)**.

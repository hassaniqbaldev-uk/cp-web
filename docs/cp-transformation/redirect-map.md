# CP-15 — Redirect map (for review, NOT yet wired)

Every one of the 103 crawled legacy URLs is accounted for below. Source → destination → reason, grouped so you
can check the judgement calls rather than read 103 rows. **Nothing is wired yet** — approve first.

## Headline

- **Only ~16 of the 103 legacy URLs actually need a redirect.** The rest are **unchanged** (the same path still
  serves them) — all 9 blog posts, all 31 case studies, all 7 legal pages, the core pages, 12 of the 15 services
  and the 4 kept solutions kept their exact slugs.
- **Mechanism: keep `next.config.mjs`.** See the last section — at ~16 redirects we are nowhere near the point
  where a middleware keyed-map earns its cost. Your earlier "past ~100 becomes unmanageable" concern was about
  the URL count (103); the *redirect* count is ~16.
- **No chains.** Every destination below is a final live page (checked against current routes + the 15 existing
  redirects). Nothing points at another redirect.

---

## A. Unchanged — NO redirect needed (~85 URLs)

The same path still serves these. Listed so the map is complete; none need an entry.

- **Core pages (15):** `/`, `/about`, `/audit`, `/blog`, `/call`, `/careers`, `/case-studies`, `/contact`,
  `/how-we-work`, `/legal`, `/partner-with-us`, `/services`, `/solutions`, `/testimonials`, `/thank-you`
- **Legal (7):** `/legal/{cookies-policy, data-processing-agreement, nda-template, paid-ads-schedule,
  privacy-policy, support-and-maintenance-schedule, terms-of-service}` — all still live.
- **Blog (9):** every crawled `/blog/*` slug is unchanged and still published. No redirects.
- **Case studies (31):** every crawled `/case-studies/*` slug is unchanged and still published (current set is
  33 — adds `biome4pets` + `ivy-and-duke`, which have no legacy URL). No redirects.
- **Services kept (12):** `/services/{accessibility, analytics, branding, cro, email, migrations, security, seo,
  shopify, speed, ui-ux-design, wordpress}` — unchanged.
- **Solutions kept (4):** `/solutions/{automate-operations, increase-leads, launch-new-product,
  replatform-rebuild}` — the four goal solutions, unchanged.
- **`/about/`** (trailing slash) — Next.js normalises this to `/about` automatically (`trailingSlash:false`
  default). No manual entry.
- **Generated:** `/robots.txt`, `/sitemap.xml` — not redirect targets.

---

## B. Redirects ALREADY in next.config (15) — verify + a few flagged

All permanent (308). Clean ones first, flagged ones marked ⚠️.

| Source | Destination | Reason |
| --- | --- | --- |
| `/services/ppc` | `/services/paid-media` | Service renamed (user-facing "Paid Media", D-decision). Clean. |
| `/services/maintenance` | `/services/growth-and-support` | D36 rename to the "Ongoing Growth & Support" parent. Clean. |
| `/solutions/scale-marketing` | `/solutions/increase-leads` | Consolidated into the goal solution. Clean. |
| `/solutions/ecommerce-brands` | `/industries/ecommerce-brands` | Solution→industry per IA. Clean. |
| `/solutions/b2b-services` | `/industries/b2b-services` | Solution→industry per IA. Clean. |
| `/solutions/saas-companies` | `/industries/technology-saas` | Solution→industry per IA. Clean. |
| `/solutions/charities-and-foundation` | `/industries/charities-non-profits` | Solution→industry per IA. Clean. |
| `/solutions/interiors-and-furnishings` | `/industries/home-improvement-interiors` | Solution→industry per IA. Clean. |
| `/agencies` | `/partner-with-us` | Agencies content absorbed. Clean. |
| `/wordpress-web-development` | `/services/web-design-development` | Retired LP → the pillar service. Clean. |
| ⚠️ `/solutions/driving-schools` | `/services/web-design-development` | Industry has **no page** (`hasPage:false`), so it falls back to the core build service. **Loses industry-specific search value.** See flags. |
| ⚠️ `/solutions/pharmacies` | `/services/web-design-development` | Same as above. |
| ⚠️ `/solutions/restaurants` | `/services/web-design-development` | Same as above. |
| ⚠️ `/solutions/sme-founders` | `/solutions` | Points at the **hub** — against the "no hub" rule. See flags. |
| ⚠️ `/wordpress-web-development/thank-you` | `/services/web-design-development` | A form **thank-you** page → a service page. Odd; recommend `/thank-you` instead. See flags. |

---

## C. NEW redirects to add

| Source | Destination (proposed) | Reason |
| --- | --- | --- |
| ⚠️ `/services/custom-apps-and-ai` | `/services/custom-app-development` | The legacy combined page **split** into `custom-app-development` + `ai-automation`. "Custom apps" is the head term, so I propose the app page — but this is a real judgement call. See flags. |
| ⚠️ `/About` | `/about` | Capitalised variant. Next.js routing is case-sensitive, so `/About` 404s. Cheap safety redirect **if** it was ever linked/indexed; otherwise ignorable. See flags. |

---

## D. Test / junk URLs — NO redirect (confirm)

These were never real content. Per your instruction not to default to the homepage, I am **not** proposing a
destination — recommend letting them 404 (correct behaviour for a URL that never held content):

- `/hassan-test`, `/review-test`, `/testing-testimonials` — internal test pages.
- `/nope-404-xyz` — the crawler's deliberate 404 probe.

**Decision needed:** confirm "let these 404" (my recommendation), or name a destination for any you disagree on.

---

## FLAGS — the judgement calls, in priority of your attention

1. **`/services/custom-apps-and-ai` → which half?** The old page covered custom apps **and** AI. I propose
   `custom-app-development` (head term + more established search value; AI & Automation is the newer, less-proven
   pillar). If AI is the strategic priority, it could go to `/services/ai-automation`. **Your call.**

2. **`/solutions/sme-founders` → hub (rule violation).** Currently → `/solutions`, which breaks "no hub". It was
   an *audience* solution with no single goal equivalent. Recommend re-pointing to **`/solutions/increase-leads`**
   (the most common SME intent). Or keep the hub if no single goal fits. **Your call.**

3. **`/solutions/{driving-schools, pharmacies, restaurants}` → `/services/web-design-development`.** These
   industries are `hasPage:false`, so there is no industry page to land on and they fall back to a generic service.
   **This loses the industry-specific search value** those URLs may hold. Two options: (a) accept the fallback, or
   (b) give those three industries pages (`hasPage:true`) and redirect there. **Your call** — flagged as the main
   SEO-loss risk in the map.

4. **`/wordpress-web-development/thank-you` → a service page.** A noindex form-confirmation page pointing at a
   service reads oddly. Recommend **`/thank-you`** (the current generic confirmation). Low stakes.

5. **`/About`** — almost certainly a crawl artifact, not a real indexed URL. Safe to add the redirect or ignore.

## Internal links still pointing at a legacy URL (update at SOURCE, per the rule)

- **`Footer.jsx` lines 233 and 494: `href="/agencies"`** → should be **`/partner-with-us`**. These are the only
  hardcoded internal links to a redirected path (nav/service/solution data all use current slugs; the blog and
  case-study links are all current). I will update these two at wiring time so they don't rely on the redirect.
- No internal links point at any other legacy path, and no `/call` booking links remain.

---

## Mechanism — `next.config.mjs` vs middleware keyed-map

**Recommendation: keep `next.config.mjs`.**

- The actual redirect count is **~16**, not 103. `redirects()` in `next.config` handles that comfortably and is
  the more efficient option: matches are compiled and handled at the routing layer, with **no per-request JS**.
- A **middleware keyed-map** (a `{ [source]: destination }` object read in `middleware.ts`) only earns its cost
  once the list is large or dynamic (hundreds of entries, or redirects sourced from a CMS). Middleware runs a
  function on **every request**, adding latency to pages that don't need it — overkill for 16 static entries.
- **Upgrade path if it ever grows:** if a future migration pushes redirects past ~50–100 (e.g. a bulk slug
  change), move to a keyed map in `middleware.ts` (or generate the `next.config` array from that map at build).
  Not needed now.

---

## What I will do once you approve

1. Apply the agreed new redirects (custom-apps-and-ai, and any of the flagged changes you confirm).
2. Update the two `Footer.jsx` `/agencies` links to `/partner-with-us`.
3. Adjust any of the 5 flagged existing redirects you want changed.
4. Leave the test/junk URLs to 404 unless you name destinations.
5. Verify: every source resolves to a live page in one hop (no chains), and the internal-link change renders.

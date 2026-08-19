# 04 — Information Architecture (CP-02): the future sitemap

Status: **CP-02, on paper, for Hassan's approval.** Analysis only — no routes, redirects,
middleware or content are implemented. This is the target structure the rebuild builds toward.

Sources: the four-pillar architecture (`00-context.md` §3), every locked decision (`00-context.md`
§4/§5), the CP-01 audit (`03-url-audit.md` §6–§11), and the constraints Hassan set for CP-02. There
is **no brief file in the repo** — the brief is external, so where CP-02/CP-03 of the brief would
normally supply a detail (notably the exact 7 nav items), this document **reconstructs from recorded
decisions and flags it** rather than asserting a brief we cannot read.

---

## 1. Principles the structure obeys

1. **Four pillars** are the spine: Brand & Experience, Web & Ecommerce, Growth & Performance, AI &
   Automation (`00-context.md` §3). They organise the services mega-menu, the services hub, internal
   linking and case-study grouping — **not the URLs**.
2. **Flat service URLs** (D35): every service is `/services/[slug]`. No `/services/[pillar]/[slug]`.
   Hierarchy lives in navigation and internal linking.
3. **Design the ideal structure first, then map legacy URLs into it** (§11). No URL changes before
   CP-15; the redirect map (§7 here) is the bridge.
4. **One document type per axis:** `services`, `solutions` (goal only), `industries`, `caseStudies`,
   `blog`, `legalPage` — each with a hub + `/[slug]` detail route.

---

## 2. The four pillars → services

From `00-context.md` §3 (primary services) plus the CP-01 service decisions. Pillar is a **grouping
and content-emphasis** attribute, applied in nav + linking, carried in a `pillar` field on the
`services` type (and a slug→pillar map for case studies, per `01-codebase-audit.md` §6).

| Pillar (weighting) | Services (route = `/services/[slug]`) |
| --- | --- |
| **Brand & Experience** (10–15%) | `branding`, `ui-ux-design` |
| **Web & Ecommerce** (45–50%) | `web-design-development` *(CREATE)*, `ecommerce` *(CREATE)*, `custom-app-development` *(from split)*, `wordpress`, `shopify`, `migrations` † |
| **Growth & Performance** (20–25%) | `seo`, `ppc` *(labelled "Paid Media")*, `cro`, `email`, `analytics` *(measurement, D38)*, **Ongoing Growth & Support** *(maintenance parent, D36)*, `speed` *(specialist)* |
| **AI & Automation** (10–15%) | `ai-automation` *(from split)* |

† `migrations` and `accessibility` are cross-cutting; see the flags in §8 for their pillar home.
`accessibility` is deliberately **not** dropped (we sell it and must model it) — its pillar
assignment is a CP-03 call.

---

## 3. Complete route inventory (the sitemap)

Status key: **KEEP** (exists, stays) · **REWRITE** (stays, content reworked) · **NEW** (create) ·
**REDIRECT** (old → new at CP-15) · **REMOVE**. All detail routes are ISR `revalidate: 3600`.

### 3.1 Home + system

| Route | Purpose | Pillar | Parent | Status |
| --- | --- | --- | --- | --- |
| `/` | Homepage; four-pillar story, proof, primary CTA | all four | — | KEEP + REWRITE (protect brand-term ranking + Organization schema, §8 evidence) |
| `/sitemap.xml` | Generated sitemap (add the pages it currently omits) | — | — | KEEP (fix omissions: `/agencies`†, `/call`, `/testimonials`) |
| `/robots.txt` | Robots | — | — | KEEP (drop the 3 test-route disallows once removed) |

### 3.2 Services

| Route | Purpose | Pillar | Parent | Status |
| --- | --- | --- | --- | --- |
| `/services` | Services hub; groups by the **four pillars** | all | primary nav | KEEP + REWRITE (re-group 3→4 pillars; hub meta rewritten) |
| `/services/branding` | Brand identity & redesign | Brand & Experience | `/services` | KEEP |
| `/services/ui-ux-design` | UI/UX design | Brand & Experience | `/services` | KEEP |
| `/services/web-design-development` | Core web design & build offering | Web & Ecommerce | `/services` | **NEW (CP-05)** — `wordpress`/`shopify` sit under it in nav |
| `/services/ecommerce` | Ecommerce offering | Web & Ecommerce | `/services` | **NEW (CP-05)** |
| `/services/custom-app-development` | Custom apps, portals, dashboards, APIs, BI (D38) | Web & Ecommerce | `/services` | **NEW slug (from split)** ← redirect `custom-apps-and-ai` |
| `/services/wordpress` | WordPress platform specialist | Web & Ecommerce | `/services` (nav under Web D&D) | KEEP (flat, D35) |
| `/services/shopify` | Shopify platform specialist | Web & Ecommerce | `/services` (nav under Ecommerce) | KEEP (flat, D35) |
| `/services/migrations` | Website & platform migration † | Web & Ecommerce | `/services` | KEEP (pillar TBC, §8) |
| `/services/seo` | SEO | Growth & Performance | `/services` | KEEP |
| `/services/ppc` | Paid media (label "Paid Media", keep "PPC" in copy) | Growth & Performance | `/services` | KEEP — **slug decision open, §8** |
| `/services/cro` | Conversion rate optimisation | Growth & Performance | `/services` | KEEP |
| `/services/email` | Email marketing & retention | Growth & Performance | `/services` | KEEP |
| `/services/analytics` | Marketing measurement (BI moved out, D38) | Growth & Performance | `/services` | KEEP + REWRITE |
| `/services/maintenance` | **Ongoing Growth & Support** parent (D36) | Growth & Performance | `/services` | REPOSITION — **slug decision open, §8** |
| `/services/speed` | Web performance specialist | Growth & Performance | `/services` (under Ongoing G&S) | KEEP |
| `/services/security` | Security | Growth & Performance (capability) | `/services` | **PENDING O14** — page only if we sell standalone security; else a capability within Ongoing G&S (no standalone route) |
| `/services/accessibility` | Web accessibility (WCAG) † | Brand & Experience *or* Web & Ecommerce | `/services` | KEEP (pillar TBC, §8) |
| `/services/ai-automation` | AI & Automation pillar page | AI & Automation | `/services` | **NEW content (from split, CP-05)** ← the AI half of `custom-apps-and-ai`; sub-pages (Workflow Automation, AI Agents, AI Integrations) wait (D37) |

### 3.3 Solutions (goal-based only — 4 after the merge)

| Route | Purpose | Parent | Status |
| --- | --- | --- | --- |
| `/solutions` | Goal-solutions hub (sector framing removed) | primary nav | KEEP + REWRITE + add canonical (Phase 0) |
| `/solutions/increase-leads` | Goal: acquisition (absorbs Scale Marketing, D39) | `/solutions` | KEEP + REWRITE |
| `/solutions/replatform-rebuild` | Goal: rebuild/replatform | `/solutions` | KEEP |
| `/solutions/launch-new-product` | Goal: go-to-market | `/solutions` | KEEP — **pending O15** (is it a real offering?) |
| `/solutions/automate-operations` | Goal: ops automation (AI & Automation) | `/solutions` | KEEP |
| `/solutions/scale-marketing` | — | — | **REDIRECT → `/solutions/increase-leads`** (D39; content folded) |

### 3.4 Industries (NEW axis, CP-08)

| Route | Purpose | Parent | Status |
| --- | --- | --- | --- |
| `/industries` | Industries hub | primary nav (see §5) | **NEW (CP-08)** |
| `/industries/[slug]` | Per-industry page | `/industries` | **NEW (CP-08)** — the exact industry set is unresolved (O6 + the industries-taxonomy cleanup flagged in the O13 note); do not fix the list here |

The 9 `/solutions/<industry>` URLs and `/solutions/ecommerce-brands` (D4) redirect here — see §7.

### 3.5 Case studies, Blog, Legal

| Route | Purpose | Parent | Status |
| --- | --- | --- | --- |
| `/case-studies` | Work hub (all 31 kept; flagship/supporting/archive is presentation, §8 of the audit) | primary nav | KEEP |
| `/case-studies/[slug]` | Case study detail (grouped by pillar via slug→pillar map) | `/case-studies` | KEEP (31; `ao-arena` labelled concept, `unicef` print-only) |
| `/blog` | Blog hub — **stays Blog** | primary nav | KEEP (re-pillar categories for CP-14) |
| `/blog/[slug]` | Post detail (9; re-mapped to pillars) | `/blog` | KEEP |
| `/legal` | Legal hub | footer | KEEP |
| `/legal/[slug]` | Policy/resource detail (7; D18 warranty clause into `terms-of-service`) | `/legal` | KEEP (template: add `<h1>`) |

### 3.6 Company / conversion / utility (hardcoded pages)

| Route | Purpose | Parent | Status |
| --- | --- | --- | --- |
| `/about` | About | primary nav | **REWRITE (major)** + fix the age/date inconsistency (§11 audit) |
| `/contact` | Contact + enquiry form | primary nav | KEEP |
| `/partner-with-us` | White-label / agency offering (**merge target**) | footer / secondary | KEEP + REWRITE ← `agencies` redirects here |
| `/agencies` | — | — | **REDIRECT → `/partner-with-us`** (duplicate white-label) |
| `/audit` | Free Audit (primary CTA destination + AuditForm) | CTA | KEEP + REWRITE (H1 uses banned "Unlock") |
| `/careers` | Careers + JobApplicationForm | footer | KEEP |
| `/how-we-work` | Process / method | secondary / About cluster | KEEP + REWRITE (holds the "10 years" date variant) |
| `/testimonials` | Testimonials (external reviews) — important given the case-study quote gap | secondary | KEEP + FIX (H1 mismatch) |
| `/call` | Cal.com booking utility | — | KEEP (Book a Call demoted from page CTAs, D8) |
| `/thank-you` | Form success (noindex) | — | KEEP |
| `/wordpress-web-development` (+ `/thank-you`) | WordPress landing page | — | **REMOVE / REDIRECT** (deprioritised; superseded by `/services/web-design-development` + `/services/wordpress`, CP-05) |
| `/hassan-test`, `/review-test`, `/testing-testimonials` | Test/junk routes | — | **REMOVE (CP-00E)** |

**No `/pricing` route.** Pricing is published as the contextual **Investment module** (O3 / §7), not a
standalone page. **No Manchester local page** (D6 — entity signals only, in About/Contact/schema).
**No i18n / locale routes** (D5).

---

## 4. Redirect map (built at CP-15, listed here so the structure is closed)

| Legacy URL | Destination | Reason |
| --- | --- | --- |
| `/services/custom-apps-and-ai` | `/services/custom-app-development` | Split (AI half → `/services/ai-automation`) |
| `/solutions/scale-marketing` | `/solutions/increase-leads` | Merge (D39) |
| `/solutions/ecommerce-brands` | `/industries/ecommerce` *(slug TBC)* | D4 (industry, not solution) |
| `/solutions/interiors-and-furnishings`, `/driving-schools`, `/sme-founders`, `/charities-and-foundation`, `/pharmacies`, `/restaurants`, `/b2b-services`, `/saas-companies` | `/industries/<slug>` | Industry migration (CP-08) |
| `/agencies` | `/partner-with-us` | White-label merge |
| `/wordpress-web-development`, `/wordpress-web-development/thank-you` | `/services/web-design-development` (or `/services/wordpress`) | LP retired |
| `/services/ppc` → `/services/paid-media` | *(only if the slug is changed — see §8; default is to keep the slug)* | Rename is user-facing, not necessarily URL |
| `/hassan-test`, `/review-test`, `/testing-testimonials` | 410/removed | Test routes |

Infra items already noted in the crawl (§5 of the audit) and folded in at CP-15: **www → apex**
redirect (currently the www host does not resolve), and home-URL trailing-slash normalisation.

---

## 5. Primary navigation — 7 items (RECONSTRUCTED — confirm against the brief)

**Flag:** the "seven-item main nav" is a constraint Hassan named, but the **exact seven are not
recorded in `00-context.md`** and there is no brief file to read. Below is the reconstruction that
best fits the decisions; **please confirm the exact list.**

Recommended primary nav (7 items):

1. **Services** — mega-menu, **columns driven by the four pillars** (data-driven; CP-03 turns the
   pillars into columns, so column count is a content change, not a code change — the seam is already
   built, `00-context.md` §14 / step-3 notes).
2. **Solutions** — the 4 goal solutions.
3. **Industries** — the industry pages (CP-08).
4. **Work** — `/case-studies`.
5. **Blog** — `/blog`.
6. **About** — company (may carry How We Work / Careers as a small group).
7. **Contact** — `/contact`.

Primary **CTA button**: **Free Audit** (`/audit`). **Book a Call is demoted** (D8) — not a page-level
CTA; `/call` stays reachable but is not a primary nav item.

Two things to confirm, because they change the count:
- **Is "Industries" a top-level item, or does it live inside the Services/Solutions mega-menu?** Today
  industries are deliberately **held out of the menu** until CP-08 (`nav.js`), so if the "seven" was
  counted on today's header it is likely **Services, Solutions, Work, Blog, About, Free Audit, Book a
  Call** (5 links + 2 CTAs). That reading conflicts with D8 (Book a Call demoted). The two readings
  can't both be right — **this is the single thing I most need confirmed.**
- Whether **Contact** is a nav item or only a CTA/footer link.

---

## 6. Content-model / cross-linking notes (feeds CP-03)

- **Services mega-menu is data-driven by pillar** — column 1 already proven; CP-03 converts the
  remaining columns and flips the hardcoded 3 to the pillar count. Empty pillars drop out (primitive
  handles empty state).
- **Case-study grouping by pillar** uses a **slug→pillar map in code** (case studies live in a
  different project; tags are unreliable — `03-url-audit.md` §8). Re-derive pillars from content.
- **Relevant-work module** on each service page and **related-services** on each case study depend on
  the cross-type links the consolidation (O8) enables.
- **Industries ↔ Solutions:** the solutions hub links out to industries once CP-08 exists; the 9
  legacy industry-solutions become the seed of the industries set (after the taxonomy cleanup).

---

## 7. Where the brief is now out of date (flagged, not followed)

Per Hassan's instruction — flag brief assumptions our decisions have overtaken:

1. **Three service groups → four pillars.** The brief/old site groups services as
   design-development / growth / support (3). Superseded by the four pillars (§3); "support" becomes
   **Ongoing Growth & Support** *within* Growth & Performance, not a peer group (D36).
2. **`custom-apps-and-ai` as one service → split** into `custom-app-development` (Web & Ecommerce) and
   `ai-automation` (AI & Automation).
3. **Analytics as a dual "Analytics & BI" page → repositioned** (D38): measurement under Growth; BI a
   Custom App Development capability.
4. **Scale Marketing as a distinct solution → merged** into Increase Leads (D39): 5 goals → **4**.
5. **Industries treated as "solutions by sector" → separate `/industries` axis** (D4/D28); the
   solutions hub drops its sector framing.
6. **`agencies` and `partner-with-us` as two pages → one** (merge; `agencies` redirects).
7. **WordPress landing page as a live asset → retired** (superseded by the new CP-05 service pages).
8. **Pricing deferred (old D9) → published** as the Investment module (O3); still no `/pricing` route.
9. **Maintenance / Speed / Security as three peer support pages → consolidated** (D36): one parent,
   Speed as a specialist, Security pending O14.
10. **Two new Web & Ecommerce pages the brief assumed existed** — `web-design-development` and
    `ecommerce` — **do not exist yet**; they are NEW at CP-05.

---

## 8. Open decisions this sitemap surfaces (need Hassan, do not assume)

- **The exact 7 nav items** (§5) — the one blocker for locking the nav.
- **`ppc` slug:** keep `/services/ppc` (search equity, label "Paid Media") **[recommended]**, or move
  to `/services/paid-media` with a redirect. Renaming the label does not require renaming the URL.
- **Ongoing Growth & Support slug:** keep `/services/maintenance`, or a new `/services/ongoing-growth-support` with a redirect.
- **Security (O14):** standalone `/services/security` page, or a capability within Ongoing G&S (no
  route). Affects §3.2.
- **Migrations & Accessibility pillar home** — cross-cutting; assign at CP-03 (migrations: Web &
  Ecommerce vs Growth; accessibility: Brand & Experience vs Web & Ecommerce).
- **Industries set + taxonomy** (O6 + the duplicate-slug / `hasPage` mismatch in the O13 note) — which
  industries get pages, and the clean slug list, is a CP-08 decision.
- **`launch-new-product`** reality (O15).

---

## 9. Status

CP-02 sitemap on paper — **awaiting Hassan's review**. Nothing implemented: no routes, redirects,
middleware or content. When approved, this becomes the reference the rebuild (CP-03 onward) and the
CP-15 redirect map are checked against.

# CP-05 — Service Pages Plan (Web Design & Development, Ecommerce)

**Status:** Plan only. No building in this document. Approval gate before any code or Sanity work.
**Branch/data:** `development` branch, `staging` dataset. Nothing merged to `main`, no production change.
**Scope:** The two new Web & Ecommerce pillar pages the brief assumed already existed:

| Page | Slug | Pillar | "From" price | Nav relationship |
|---|---|---|---|---|
| Web Design & Development | `/services/web-design-development` | Web & Ecommerce | from £1,500 | `wordpress` + `shopify` sit under it; `custom-app-development` is a split sibling |
| Ecommerce | `/services/ecommerce` | Web & Ecommerce | from £3,500 | sibling under the pillar |

Both are new documents of `_type: "services"` in the `staging` dataset, rendered by the **existing** `/services/[slug]` route. This is a **content + light-module build**, not a new template.

---

## 1. The module system

The service-detail route (`src/app/(site)/services/[slug]/page.jsx`) already renders a **fixed vertical sequence of section components**, each fed by one slice of the `services` Sanity document via `SERVICES_DETAIL_QUERY`. CP-05 works **inside this system** — it does not invent a new page template. The value of CP-05 is (a) filling the modules with real, evidenced content for two pages and (b) activating two modules that already exist in the query but are not yet rendered.

**Modules rendered today** (in order), and the field each reads:

| Order | Component | Sanity slice | Notes |
|---|---|---|---|
| 1 | `ServicesDetailHero` | `detailHero` (title, description, heroImage, caseStudiesLink) | Matches the site hero treatment. |
| 2 | `PartnerWithUs2` | `partnerWithUs.card[]` (title, description) | Dark-glass value cards. |
| 3 | `Cta2` | **hardcoded** in page.jsx | Currently a generic mid-page CTA — see §5 risk. |
| 4 | `Expertise3` | `expertise.card[]` (icon, title, description, listItem[]) | "What we do" detail. |
| 5 | `Methodology` | `methodology.card[]` (title, description, icon) | How we work. |
| 6 | `Testimonials` | **global** component | Not per-service. See evidence risk (§4). |
| 7 | `DynamicQuestions` | `faqs[]` (question, answer) | FAQ / SEO long-tail. |

**Modules already in the query but NOT yet rendered** (latent — CP-05 activates them):

- `projectShowcase` — `projects[]` (title, excerpt, image) + `fitCard[]` / `notFitCard[]` (a "good fit / not a fit" qualifier). This is the natural **evidence + qualification** module.
- `options` — `includeCard[]` (what's included) + `pricingCard[]` (tag, category, price, description, features[]). This is the **Investment / pricing** module, which the context flags as "reworked at CP-05".

**Module decision for CP-05:** treat the page as an ordered set of optional modules keyed off "does this slice have content". A page renders a module only when its slice is populated, so the two pages can differ in shape without template forks. The **build task** is: activate `projectShowcase` and `options` in `page.jsx` behind presence checks (so existing pages that lack those slices are unaffected), then author the slices for the two pages.

---

## 2. Structural model

Both pages follow one canonical order. Modules with no content for a given page are simply omitted (presence-gated), so the model is shared but the rendered length differs.

```
1. Hero                 detailHero        — positioning + primary CTA (Start a project)
2. Partner With Us      partnerWithUs     — why us / the value we bring
3. Expertise            expertise         — what the service actually covers
4. Methodology          methodology       — how a project runs (process = trust on a build page)
5. Project showcase     projectShowcase   — real work + "good fit / not a fit" qualifier   [ACTIVATE]
6. Investment           options           — "from" pricing framing + what's included + warranty  [ACTIVATE]
7. FAQ                  faqs              — objections + SEO long-tail
8. Closing CTA          (shared)          — Start a project + warranty reassurance
```

Rationale for the order: process (module 4) sits **before** evidence and price because on a build page the buyer's first question is "how does this work / am I in safe hands", and the warranty + "from" framing (module 6) land best **after** the work has been shown (module 5). The mid-page `Cta2` (current module 3) is **removed** from these two pages in favour of the single closing CTA — the page should not ask for the sale before it has made the case (see §5).

---

## 3. Page 1 — Web Design & Development (`/services/web-design-development`)

**Positioning:** the core web-build offering and the anchor of the whole Web & Ecommerce pillar (45–50% of the business). This page must read as the strongest, best-evidenced page on the site.

- **Hero:** headline centred on "websites that perform" — clear, ranks, converts — not platform-first. Primary CTA "Start a project"; the platform pages (WordPress, Shopify) are positioned as *how* we build, not competing offers.
- **Partner With Us:** senior people own the result; build for search and conversion, not just looks; the warranty as a standing promise.
- **Expertise:** the real coverage — discovery, design, build, CMS, performance, accessibility hooks — mapped to what we genuinely deliver. Cross-links to the specialist capabilities (speed, accessibility, migrations) rather than duplicating them.
- **Methodology:** the actual project process. This is a strong, honest trust signal that needs no client-outcome proof to be true.
- **Project showcase:** lean on the **flagship** web builds (the `designation: flagship` case studies). This is where the estate is strongest. Use "good fit / not a fit" to pre-qualify (e.g. good fit: businesses that need a site that earns its keep; not a fit: someone wanting a £300 template).
- **Investment:** "Web projects from £1,500 — from focused business websites through to larger custom builds." What's included. Warranty stated here.
- **FAQ:** timelines, ownership, platforms, what "from £1,500" covers, ongoing support.

**Evidence footing:** strong. Web builds are the best-evidenced work in the estate.

---

## 4. Page 2 — Ecommerce (`/services/ecommerce`)

**Positioning:** selling online done properly — platform choice, catalogue, checkout, integrations — as a step up in scope from a standard website (hence from £3,500).

- **Hero:** headline centred on stores that sell, not just exist. Primary CTA "Start a project".
- **Partner With Us:** platform-agnostic advice (Shopify / WooCommerce as appropriate), built around conversion and operations, not just a storefront.
- **Expertise:** catalogue and product structure, checkout, payments/shipping/tax, integrations, post-launch conversion work.
- **Methodology:** same process spine, framed for a commerce build (data migration, catalogue, launch readiness).
- **Project showcase:** use only **genuine ecommerce/Shopify** case studies (verify which flagship/supporting case studies are actually commerce builds during the build step; do not borrow non-commerce work to pad this). "Good fit / not a fit" carries more weight here because scope varies widely.
- **Investment:** "from £3,500, scoped by platform, catalogue size and integrations." Warranty stated here.
- **FAQ:** platform choice, migration, payment/shipping, what drives the price, ongoing support.

**Evidence footing:** thinner than the web page but real. **Do not** use UNICEF (print, not digital — §8 finding 3) or AO Arena (pitch mockup, not delivered). If genuine commerce evidence is sparse, prefer fewer real items over padding.

---

## 5. Evidence, honesty and the Testimonials risk

Three binding constraints from the CP-01 estate-wide evidence audit (00-context §8):

1. **0 client quotes and only 3 quantified outcomes across 31 case studies.** These pages can honestly claim *what we do* and *what we build*; they must **not** assert *what it achieved* with invented metrics or testimonials. Confident capability claims are fine; fabricated proof is not.
2. **The global `Testimonials` module has no real client quotes to show.** Rendering it on these pages would surface generic/empty proof. **Recommendation:** omit the global `Testimonials` module from both pages until O4 (collect a quote + one metric from the flagships) lands, and let `projectShowcase` carry the evidence instead. Flag for Hassan.
3. **The hardcoded mid-page `Cta2`** ("Facing these challenges right now?") is generic and asks for the sale before the page has earned it. **Recommendation:** drop it from these two pages; keep one strong closing CTA.

---

## 6. Pricing and warranty placement

**Pricing** (approved "from" figures, contextual framing — no fabricated ceilings):

- Web Design & Development: **from £1,500** — "Web projects from £1,500 — from focused business websites through to larger custom builds."
- Ecommerce: **from £3,500** — scoped by platform, catalogue size and integrations.
- Home: the **Investment module** (`options.pricingCard[]`), module 6. Framed as a starting point with what drives scope, never as a fixed quote.

**Warranty** (approved as a trust signal — D18; conservative wording per the §9 binding constraint):

- Wording stays close to actual practice: **three months of free support after launch on what we built, fixing issues that arise in that window.** Never promise more than the §9A clause covers; align to the legal Support/Warranty schedule.
- **Two placements:** (a) a line inside the Investment module, next to price, where it de-risks the spend; (b) the closing-CTA reassurance line (as already done on the hub). No third repetition.

---

## 7. Sequence (build order, when approved)

1. **Confirm module activation approach** — presence-gate `projectShowcase` and `options` in `[slug]/page.jsx`; remove the hardcoded `Cta2` and the global `Testimonials` for these two pages (or gate both behind a flag). Verify no existing service page regresses.
2. **Author Web Design & Development** in `staging` (all slices), strongest page first — it sets the bar and de-risks the template changes.
3. **Author Ecommerce** in `staging`, reusing the proven structure; verify commerce evidence is genuine.
4. **Nav + redirects (coordination, not built here):** these slugs are already the redirect targets for the retired WordPress LP and the held industries — CP-05 makes the targets real; the redirects themselves land at CP-15.
5. **Verify** at 375 / 768 / 1440 in a production build; check both pages read honestly against the §5 constraints; no claim beyond evidence.
6. **Review gate** — Hassan reviews copy and evidence before anything is considered live.

**Open items to raise at approval:**
- Confirm dropping the global `Testimonials` + mid-page `Cta2` from these two pages (§5).
- Confirm which existing case studies are genuine commerce builds for the Ecommerce showcase (§4).
- The AI & Automation pillar page (D37) is also CP-05 scope but tracked separately; this plan covers the two Web & Ecommerce pages only.

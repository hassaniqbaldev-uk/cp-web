# 04 — Information Architecture (CP-02): the future sitemap

Status: **CP-02, on paper, for Hassan's FINAL approval.** Analysis only — no routes, redirects,
middleware or content are implemented. This is the target structure the rebuild (CP-03 onward) and
the CP-15 redirect map are checked against.

Sources: the four-pillar architecture (`00-context.md` §3), every locked decision (`00-context.md`
§4/§5, D35–D44), and the CP-01 audit (`03-url-audit.md` §6–§11). Updated 19 Aug 2026 with Hassan's
CP-02 confirmations: the seven nav items (D40), the Paid Media / Growth & Support slugs (D41/D42),
Security kept as a service (O14 closed), Migrations + Accessibility under Web & Ecommerce (D43), and
the four-industry set (D44).

---

## 1. Principles the structure obeys

1. **Four pillars** are the spine: Brand & Experience, Web & Ecommerce, Growth & Performance, AI &
   Automation (`00-context.md` §3). They organise the services mega-menu, the services hub, internal
   linking and case-study grouping — **not the URLs**.
2. **Flat service URLs** (D35): every service is `/services/[slug]`. No `/services/[pillar]/[slug]`.
3. **Design the ideal structure first, then map legacy URLs into it** (§11). No URL changes before
   CP-15; the redirect map (§4) is the bridge.
4. **One document type per axis:** `services`, `solutions` (goal only), `industries`, `caseStudies`,
   `blog`, `legalPage` — each a hub + `/[slug]` detail route.

---

## 2. The four pillars → services

From `00-context.md` §3 plus the CP-01/CP-02 decisions. Pillar is a **grouping and content-emphasis**
attribute (a `pillar` field on `services`; a slug→pillar map for case studies).

| Pillar (weighting) | Services (route = `/services/[slug]`) |
| --- | --- |
| **Brand & Experience** (10–15%) | `branding`, `ui-ux-design` |
| **Web & Ecommerce** (45–50%) | `web-design-development` *(NEW)*, `ecommerce` *(NEW)*, `custom-app-development` *(from split)*, `wordpress`, `shopify`, `migrations` *(D43)*, `accessibility` *(D43)* |
| **Growth & Performance** (20–25%) | `seo`, `paid-media` *(was `ppc`, D41)*, `cro`, `email`, `analytics` *(measurement, D38)*, `growth-and-support` *(was `maintenance`, D42)*, `speed`, `security` *(kept, O14 closed)* |
| **AI & Automation** (10–15%) | `ai-automation` *(from split)* |

Every cross-cutting question from the CP-02 draft is now resolved: **Migrations and Accessibility are
Web & Ecommerce** (build/delivery capabilities, D43); **Security stays a Growth & Performance service**
(O14 closed — we deliver malware removal, firewall configuration and monitoring).

---

## 3. Complete route inventory (the sitemap)

Status key: **KEEP** · **REWRITE** · **NEW** · **REDIRECT** · **REMOVE**. Detail routes are ISR
`revalidate: 3600`.

### 3.1 Home + system

| Route | Purpose | Pillar | Parent | Status |
| --- | --- | --- | --- | --- |
| `/` | Homepage; four-pillar story, proof, primary CTA | all four | — | KEEP + REWRITE (protect brand-term ranking + Organization schema) |
| `/sitemap.xml` | Generated sitemap | — | — | KEEP (fix omissions: `/testimonials`, `/call`, etc.) |
| `/robots.txt` | Robots | — | — | KEEP (drop the 3 test-route disallows once removed) |

### 3.2 Services

| Route | Purpose | Pillar | Parent | Status |
| --- | --- | --- | --- | --- |
| `/services` | Services hub; groups by the **four pillars** | all | nav | KEEP + REWRITE (3→4 pillars; hub meta rewritten) |
| `/services/branding` | Brand identity & redesign | Brand & Experience | `/services` | KEEP |
| `/services/ui-ux-design` | UI/UX design | Brand & Experience | `/services` | KEEP |
| `/services/web-design-development` | Core web design & build offering | Web & Ecommerce | `/services` | **NEW (CP-05)** — `wordpress`/`shopify` sit under it in nav |
| `/services/ecommerce` | Ecommerce offering | Web & Ecommerce | `/services` | **NEW (CP-05)** |
| `/services/custom-app-development` | Custom apps, portals, dashboards, APIs, BI (D38) | Web & Ecommerce | `/services` | **NEW slug (split)** ← redirect `custom-apps-and-ai` |
| `/services/wordpress` | WordPress platform specialist *(navLabel "WordPress")* | Web & Ecommerce | `/services` (nav under Web D&D) | KEEP (flat, D35) |
| `/services/shopify` | Shopify platform specialist | Web & Ecommerce | `/services` (nav under Ecommerce) | KEEP (flat, D35) |
| `/services/migrations` | Website & platform migration | Web & Ecommerce *(D43)* | `/services` | KEEP |
| `/services/accessibility` | Web accessibility (WCAG) | Web & Ecommerce *(D43)* | `/services` | KEEP (must be exemplary) |
| `/services/seo` | SEO | Growth & Performance | `/services` | KEEP |
| `/services/paid-media` | Paid media *(navLabel "Paid Media"; "PPC" kept in copy)* | Growth & Performance | `/services` | **NEW slug (D41)** ← redirect `/services/ppc` |
| `/services/cro` | Conversion rate optimisation | Growth & Performance | `/services` | KEEP |
| `/services/email` | Email marketing & retention | Growth & Performance | `/services` | KEEP |
| `/services/analytics` | Marketing measurement (BI moved out, D38) | Growth & Performance | `/services` | KEEP + REWRITE |
| `/services/growth-and-support` | **Ongoing Growth & Support** parent (D36) | Growth & Performance | `/services` | **NEW slug (D42)** ← redirect `/services/maintenance` |
| `/services/speed` | Web performance specialist | Growth & Performance | `/services` (under Growth & Support) | KEEP |
| `/services/security` | Security: malware removal, firewall config, monitoring | Growth & Performance | `/services` | **KEEP as a service (O14 closed)**; meta restored |
| `/services/ai-automation` | AI & Automation pillar page | AI & Automation | `/services` | **NEW content (split, CP-05)**; sub-pages wait (D37) |

### 3.3 Solutions (goal-based only — 4 after the merge)

| Route | Purpose | Parent | Status |
| --- | --- | --- | --- |
| `/solutions` | Goal-solutions hub (sector framing removed) | nav | KEEP + REWRITE + add canonical (Phase 0) |
| `/solutions/increase-leads` | Goal: acquisition (absorbs Scale Marketing, D39) | `/solutions` | KEEP + REWRITE |
| `/solutions/replatform-rebuild` | Goal: rebuild/replatform | `/solutions` | KEEP |
| `/solutions/launch-new-product` | Goal: go-to-market | `/solutions` | KEEP — **pending O15** (is it a real offering?) |
| `/solutions/automate-operations` | Goal: ops automation (AI & Automation) | `/solutions` | KEEP |
| `/solutions/scale-marketing` | — | — | **REDIRECT → `/solutions/increase-leads`** (D39) |

### 3.4 Industries (NEW axis, CP-08) — evidence-led set of ten (D44, revised)

The four-industry limit was too conservative. This set was worked out from the **actual case-study
evidence** (all 31 published bodies read from staging — the same content the live site serves; §8 of
the audit) plus sensible search demand. **Ten industries ship**, built so that **adding another later
is a content change, not code** (see the expansion contract below).

**Seven with real, delivered case-study evidence:**

| Route | Industry | Tagged evidence (real delivered work) |
| --- | --- | --- |
| `/industries` | Industries hub | — |
| `/industries/b2b-services` | **B2B & Professional Services** | alertforce, energy-angels, trust-certs, varissa, teleqo-tech, new-compass |
| `/industries/technology-saas` | **Technology & SaaS** | ayoa, new-compass, teleqo-tech, peekaboo, now-press-play |
| `/industries/ecommerce-brands` | **Ecommerce Brands** | fultons, minnessak, mr-pickles, the-smokey-carter (+ ivy-and-duke draft) |
| `/industries/charities-non-profits` | **Charities & Non-profits** | anthony-walker-foundation, sight-for-life, unicef*, wmrji |
| `/industries/education-edtech` | **Education & EdTech** *(added)* | anthony-walker-foundation, junior-jam, now-press-play, alertforce |
| `/industries/travel-hospitality` | **Travel, Hospitality & Leisure** *(added)* | casa-botanica-panama, ndifo-safari, little-astronauts |
| `/industries/home-improvement-interiors` | **Home Improvement & Interiors** | smartspaces, sp-elite-installation |

**Three on the fallback only (existing marketing page + niche search demand, but NO delivered
case study yet):**

| Route | Industry | Evidence |
| --- | --- | --- |
| `/industries/driving-schools` | **Driving Schools** | none delivered — "Recent work" fallback (drive-uk / ofh-care are only draft stubs) |
| `/industries/pharmacies` | **Pharmacies** | none delivered — fallback (lola-blake is a stub) |
| `/industries/restaurants` | **Restaurants** | none delivered — fallback (dr-donuts is a donut shop, the-smokey-carter is ecommerce; neither is a restaurant) |

\* `unicef` is print, not web — usable as recognition, not as digital-delivery proof (audit §8).
Case studies legitimately tag **multiple** industries (e.g. anthony-walker-foundation → Charities +
Education; new-compass / teleqo-tech → B2B + Technology).

**Kept OFF the set (folded or too thin), flagged as future candidates:** Financial Services (varissa
only → folded into B2B); Media & Publishing (sorted, vuegraphy — 2 studies, modest demand); Creative /
Studios (manzar, game-art-brain — fold into their client sector). Add later if evidence grows.

**On the three fallback-only industries:** they have existing bespoke marketing pages and real
(if niche) search demand, and your fallback rule is designed precisely so they are never empty — so
they ship. But they carry **no delivered proof**; if you would rather not run a page on fallback
alone, say which and its legacy URL will instead point at the nearest evidence-backed page.

**Case-study evidence rule (per your instruction):** on every industry page, **tagged matches show
first**; where an industry has none, it **falls back to the most recently added case studies**, and
that block is labelled **"Recent work"** (not "Related work") so it stays honest. No industry page is
ever empty.

**Expansion contract (build once at CP-08, then content-only):** a new `industries` document with
`hasPage: true` must, with **no code change**, produce (1) a live `/industries/[slug]` page from the
shared template, (2) a nav entry (the nav query already filters `industries` by `hasPage == true`,
verified in the O13 check), and (3) correct case-study filtering with the "Recent work" fallback. This
requires, at CP-08: the `/industries/[slug]` template + hub, a **reliable industry reference on case
studies** (the current case-study industry tags are unreliable and cross-project — the O8 consolidation
dependency; until reliable tags exist, every page uses the "Recent work" fallback), and the
duplicate-slug / `hasPage` cleanup (O13 note).

### 3.5 Case studies, Blog, Legal

| Route | Purpose | Parent | Status |
| --- | --- | --- | --- |
| `/case-studies` | Work hub (all 31 kept; flagship/supporting/archive is presentation) | nav ("Work") | KEEP |
| `/case-studies/[slug]` | Case study detail (grouped by pillar via slug→pillar map) | `/case-studies` | KEEP (31; `ao-arena` labelled concept; `unicef` print-only) |
| `/blog` | Blog hub — **stays Blog** | nav | KEEP (re-pillar categories for CP-14) |
| `/blog/[slug]` | Post detail (9) | `/blog` | KEEP |
| `/legal` | Legal hub | footer | KEEP |
| `/legal/[slug]` | Policy/resource detail (7; D18 warranty clause → `terms-of-service`) | `/legal` | KEEP (template: add `<h1>`) |

### 3.6 Company / conversion / utility

| Route | Purpose | Parent | Status |
| --- | --- | --- | --- |
| `/about` | About | nav | **REWRITE (major)** + fix the age/date inconsistency |
| `/contact` | Contact + enquiry form | **nav** | KEEP |
| `/partner-with-us` | White-label / agency offering (**merge target**) | footer / secondary | KEEP + REWRITE ← `agencies` redirects here |
| `/agencies` | — | — | **REDIRECT → `/partner-with-us`** |
| `/audit` | Free Audit (secondary CTA destination + AuditForm) | secondary link | KEEP + REWRITE (H1 uses banned "Unlock") |
| `/careers` | Careers + JobApplicationForm | footer | KEEP |
| `/how-we-work` | Process / method | About cluster | KEEP + REWRITE (holds the "10 years" date variant) |
| `/testimonials` | Testimonials (external reviews) — matters given the case-study quote gap | secondary | KEEP + FIX (H1 mismatch) |
| `/call` | Direct-link Cal.com booking page — used in emails only | — | **KEEP + noindex** — Cal.com integration stays; **off all site nav and CTAs, nothing on the site links to it**; the route stays live for **direct/emailed links only** (D8/D40 remove Book a Call as an on-site CTA, but the page persists). noindex so it does not compete in search. |
| `/thank-you` | Form success page (ContactForm + AuditForm land here) | — | KEEP — **noindexed** ✓; **fires no event** — the `enquiry_submitted` conversion is measured on the form (`Form.jsx`) at successful submit, before the redirect |
| `/wordpress-web-development` (+ `/thank-you`) | WordPress landing page | — | **REMOVE / REDIRECT** → `/services/web-design-development` (superseded, CP-05) |
| `/hassan-test`, `/review-test`, `/testing-testimonials` | Test/junk routes | — | **REMOVE (CP-00E)** |

**No `/pricing` route** (Investment module, O3). **No Manchester local page** (D6). **No i18n** (D5).

---

## 4. Redirect map (built at CP-15)

| Legacy URL | Destination | Reason |
| --- | --- | --- |
| `/services/custom-apps-and-ai` | `/services/custom-app-development` | Split (AI half → `/services/ai-automation`) |
| `/services/ppc` | `/services/paid-media` | Slug rename (D41) |
| `/services/maintenance` | `/services/growth-and-support` | Slug rename (D42) |
| `/solutions/scale-marketing` | `/solutions/increase-leads` | Merge (D39) |
| `/solutions/ecommerce-brands` | `/industries/ecommerce-brands` | D4 / D44 — own industry page |
| `/solutions/b2b-services` | `/industries/b2b-services` | D44 — own industry page |
| `/solutions/saas-companies` | `/industries/technology-saas` | D44 — own industry page |
| `/solutions/charities-and-foundation` | `/industries/charities-non-profits` | D44 — own industry page |
| `/solutions/interiors-and-furnishings` | `/industries/home-improvement-interiors` | Own industry page (D44 revised) |
| `/solutions/restaurants` | `/industries/restaurants` | Own industry page (fallback evidence) |
| `/solutions/driving-schools` | `/industries/driving-schools` | Own industry page (fallback evidence) |
| `/solutions/pharmacies` | `/industries/pharmacies` | Own industry page (fallback evidence) |
| `/solutions/sme-founders` | `/solutions` (hub) | Audience positioning, not an industry — no single page owns it |
| `/agencies` | `/partner-with-us` | White-label merge |
| `/wordpress-web-development`, `/wordpress-web-development/thank-you` | `/services/web-design-development` | LP retired |
| `/hassan-test`, `/review-test`, `/testing-testimonials` | **404** | Test routes, never meant to be public (simple default, not 410) |

Every legacy industry URL now points at **its own industry page** (no hub dead-end, no flattening into
Web Design & Development). `sme-founders` is the only exception — it is audience positioning, not an
industry, so it points at `/solutions`. The three fallback-only industry pages (driving-schools,
pharmacies, restaurants) are honest via the "Recent work" fallback; if you drop any (see §3.4), its
redirect repoints to the nearest evidence-backed page.

Infra at CP-15: **www → apex** (the www host currently does not resolve) and home-URL trailing-slash
normalisation.

---

## 5. Primary navigation — seven items (CONFIRMED, D40)

**Definitive — do not reconstruct.** Order:

1. **Work** — `/case-studies`
2. **Services** — mega-menu, **columns = the four pillars** (data-driven; CP-03 flips the hardcoded 3
   to the pillar count, empty pillars drop out)
3. **Solutions** — the 4 goal solutions
4. **Industries** — `/industries` (the 4-industry set, D44)
5. **Blog** — `/blog`
6. **About** — company (How We Work / Careers may hang off this cluster)
7. **Contact** — `/contact`

**Not nav items:** **Free Audit** is a **secondary link** (and **stays off service pages**, per the
/audit decision). **Book a Call is removed entirely** (D8) — the `/call` page still exists but is not
surfaced as a CTA.

---

## 6. Content-model / cross-linking notes (feeds CP-03)

- **Services mega-menu is data-driven by pillar** — column 1 already proven; CP-03 converts the rest
  and flips 3→4 columns. Empty pillars drop out (primitive handles empty state).
- **navLabel corrections applied to staging:** `wordpress` → "WordPress", `ppc` → "Paid Media". The
  goal-solutions type also needs `navLabel`/`navExcerpt`/`navOrder` — Hassan is confirming that type
  got the fields (the data reads correctly regardless).
- **Case-study grouping by pillar** uses a **slug→pillar map in code** (tags are unreliable, §8 of the
  audit); re-derive pillars from content.
- **Industries ↔ Solutions:** the solutions hub links out to `/industries`; the 4 industry pages are
  the seed set (D44), expanded/cleaned at CP-08.

---

## 7. Where the brief is now out of date (flagged, not followed)

1. **Three service groups → four pillars** (support becomes Ongoing Growth & Support *within* Growth &
   Performance, D36).
2. **`custom-apps-and-ai` one service → split** (Custom App Development + AI & Automation).
3. **"Analytics & BI" dual page → repositioned** (D38): measurement under Growth; BI a Custom App
   Development capability.
4. **Scale Marketing distinct solution → merged** into Increase Leads (D39): 5 → **4** goals.
5. **"Solutions by sector" → separate `/industries` axis** (D4/D44); solutions hub drops sector framing.
6. **`agencies` + `partner-with-us` two pages → one** (merge).
7. **WordPress landing page live asset → retired** (superseded by CP-05 pages).
8. **Pricing deferred (old D9) → published** as the Investment module (O3); still no `/pricing` route.
9. **Maintenance / Speed / Security three peer pages → consolidated** (D36) — but **Security stays a
   standalone service** (O14 closed), Speed a specialist, Maintenance → Growth & Support parent.
10. **Two Web & Ecommerce pages the brief assumed existed** (`web-design-development`, `ecommerce`) are
    **NEW** at CP-05.
11. **Book a Call as a CTA → removed** (D8); **Free Audit** is a secondary link, not a nav item (D40).

---

## 8. Open items still tracked (not blockers for CP-02 approval)

- **O15** — is `launch-new-product` a real, delivered offering? (Affects one solution route.)
- **Goal-solutions nav fields** — Hassan confirming the `solutions` type got `navLabel`/`navExcerpt`/
  `navOrder` in the Studio (data already reads correctly).
- **O16** — the six Casa Botanica clone stubs: Hassan to supply a real brief per client or delete them
  (left untouched, unpublished). `ivy-and-duke` completed as a draft.
- **CP-08 industries cleanup** — duplicate slugs + `hasPage` mismatch; final industry slugs.

Everything the CP-02 draft flagged as an open decision (the seven nav items, the ppc slug, the
Growth & Support slug, Security/O14, Migrations + Accessibility pillar homes, the industries set) is
now **decided** (D40–D44, O14 closed) and baked into the tables above.

---

## 9. Status

CP-02 sitemap — **awaiting Hassan's final approval before CP-03.** Nothing implemented: no routes,
redirects, middleware or content. The only staging writes to date are content-field values (meta
descriptions, navLabels, the Ivy & Duke draft), never routes.

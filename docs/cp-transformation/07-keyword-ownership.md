# 07 — Keyword Ownership Map (CP-09)

The brief calls for one clear primary intent per page, with no two pages competing for the same
search term. This is that map, produced as its own pass (CP-09) on 26 Aug 2026 against the staging
dataset. It covers the homepage, services, solutions and industries, resolves the web-build
cannibalisation, and records the title/H1 fixes made so each page targets what it actually owns.

Standing rules apply: development branch, staging dataset, nothing merged to main, no production
changes, old projects untouched.

---

## The ownership rule

Every commercial page sits in exactly one of three intent layers, and the layers are what keep pages
from fighting each other:

| Layer | Intent form | Owns the term… | Example |
| --- | --- | --- | --- |
| **Capability** (services) | "[thing] design and development / services" | for the *skill* | `/services/ecommerce` → "ecommerce web design and development" |
| **Goal** (solutions) | "[outcome] / [job to be done]" | for the *outcome* | `/solutions/increase-leads` → "get more leads" |
| **Audience** (industries) | "web design for [sector]" | for the *who* | `/industries/restaurants` → "restaurant website design" |

A capability page, a goal page and an audience page can all touch "ecommerce" **without competing**,
because each targets a different searcher: someone who wants the *skill*, someone who wants the
*result*, and someone who identifies by *sector*. Cannibalisation only happens when two pages target
the same layer + same term. The homepage sits above all three and owns the **brand + broad agency**
intent only — it must not chase a specific service head term.

---

## The web-build cluster — resolved

`web-design-development`, `wordpress`, `shopify` and `ecommerce` all live in the *capability* layer and
were flagged in the CRO review as overlapping on "web build" intent. Ownership is now explicit:

| Page | Owns (primary) | Must NOT target | Role |
| --- | --- | --- | --- |
| `/services/web-design-development` | **"web design and development [agency]"** — the broad head term | "wordpress", "shopify", "ecommerce" as head terms | **Pillar/parent.** Links *down* to the platform + type children; stays platform-agnostic. |
| `/services/wordpress` | **"WordPress web design and development"** | generic "web design" | Platform child of the pillar. |
| `/services/shopify` | **"Shopify design and development"** | generic "ecommerce" head term | Platform child (Shopify-specific). |
| `/services/ecommerce` | **"ecommerce web design and development"** — platform-agnostic (Shopify + WooCommerce) | "shopify" as a head term | Type child. Owns the generic ecommerce-build term; should name WooCommerce so it reads as multi-platform, not a Shopify duplicate. |

The four service titles already differentiate cleanly ("Web Design & Development", "WordPress…",
"Shopify…", "Ecommerce…"), so **no service title needed changing**. The genuine collision was one layer
away: `/industries/ecommerce-brands` was titled "Ecommerce Web Designing Company", competing directly
with the `/services/ecommerce` capability page. That industry page has been retargeted to its correct
*audience* term (see fixes below), which resolves the cluster.

---

## Full ownership map

### Homepage
| Page | Primary intent | Title | H1 |
| --- | --- | --- | --- |
| `/` | Brand + broad "web / ecommerce / brand & growth agency" (navigational + category) | CreativePixels \| Web, Ecommerce, Brand & Growth Agency | Brands, websites and online stores |

Owns brand and the broad agency category — deliberately not a specific service head term.

### Services (capability layer) — 18 pages
| Page | Primary intent it owns | Title status |
| --- | --- | --- |
| web-design-development | web design and development (pillar) | ✓ keyword-led |
| wordpress | WordPress design and development | ✓ |
| shopify | Shopify design and development | ✓ |
| ecommerce | ecommerce web design and development (multi-platform) | ✓ |
| custom-app-development | custom app / software development | ✓ |
| ui-ux-design | UI/UX design services | ✓ |
| branding | branding and identity design | ✓ |
| seo | SEO services | ✓ |
| paid-media | PPC / paid media management | ✓ |
| cro | conversion rate optimisation | ✓ |
| email | email marketing and automation | ✓ |
| analytics | analytics and conversion tracking | ✓ |
| ai-automation | AI and automation for business | ✓ |
| speed | website speed / Core Web Vitals | ✓ |
| security | website security / malware removal | ✓ |
| accessibility | web accessibility / WCAG | ✓ |
| migrations | website and platform migration | ✓ |
| growth-and-support | website maintenance and ongoing support | ✓ |

All 18 carry keyword-led titles and benefit-led (human) H1s — the split the review asked for (title
does the search job, H1 does the human job). No changes needed.

### Solutions (goal layer) — 4 pages
| Page | Primary intent it owns | Title status |
| --- | --- | --- |
| increase-leads | "get more leads / scale marketing" (outcome) | ✓ |
| launch-new-product | "launch a new product / MVP" (outcome) | ✓ |
| replatform-rebuild | "website rebuild / replatforming" (outcome) | ✓ |
| automate-operations | "automate your operations with AI" (outcome) | ✓ |

Goal-intent, distinct from the capability pages they draw on (e.g. increase-leads ≠ the seo/paid-media/
cro services; automate-operations ≠ the ai-automation service). No changes needed.

### Industries (audience layer) — 9 LIVE pages (`hasPage == true`, HTTP 200)
| Page | Primary intent it owns | Title action |
| --- | --- | --- |
| b2b-services | B2B website design | ✓ (fixed P1) |
| charities-non-profits | charity / non-profit website design | ✓ (fixed P1) |
| ecommerce-brands | **web design for ecommerce / retail brands** (audience) | **RETARGETED** — see fixes |
| home-improvement-interiors | web design for home improvement & interiors | **REFRAMED** — CTA-in-title removed |
| education-edtech | website design for education & EdTech | **AUTHORED** — was blank |
| media-and-publishing | website design for media & publishing | **AUTHORED** — was blank |
| property-marketing | property website design & marketing | **AUTHORED** — was blank |
| technology-saas | website & product design for tech & SaaS | **AUTHORED** — was blank |
| travel-hospitality | website design for travel & hospitality | **AUTHORED** — was blank |

### Industries authored but NOT live — `hasPage == false`, currently **404** ⚠
| Page | Intent it *would* own | State |
| --- | --- | --- |
| restaurants | restaurant website design | Full content + title/desc, but 404 |
| pharmacies | pharmacy website design & digital growth | Full content + title/desc, but 404 |
| driving-schools | driving school website design | Full content + title/desc, but 404 |
| sme-founders | small business website design | Full content + title/desc, but 404 |

These four have polished heroes, titles and descriptions (some fixed in P1 believing they were live —
those edits are staged-correct for whenever they launch) but `hasPage:false` makes the route call
`notFound()`. Nothing in the nav or the industries hub links to them, so they are **not** broken links a
visitor hits — they are orphaned, launch-ready content whose intents **nothing currently serves**. See
findings. (The remaining ~30 industry docs are taxonomy tags — no content, no page, own nothing.)

---

## Title / H1 fixes applied (this pass)

All via `safe-mutate` `patchSet` on `seo.metaTitle` / `seo.metaDescription` — no raw createOrReplace.

**Retargeted (was competing across layers):**
- `ecommerce-brands` title "Ecommerce Web Designing Company | Free Audit Call Today" →
  **"Web Design for Ecommerce & Retail Brands | CreativePixels"** — stops competing with the
  `/services/ecommerce` capability page and drops the dead "Call".

**Reframed (CTA-in-title — weak for SEO, and one dead CTA):**
- `home-improvement-interiors` "…| Free Audit Now" → **"Web Design for Home Improvement & Interiors | CreativePixels"**
- `pharmacies` "…| Free Audit" → **"Pharmacy Website Design & Digital Growth | CreativePixels"**

**Authored (live pages that had NO title and NO description — an SEO hole):**
- `education-edtech`, `media-and-publishing`, `property-marketing`, `technology-saas`,
  `travel-hospitality` — each given a keyword-led audience title + a ~150-char description.

**H1s:** every live page's H1 already references the sector/intent it owns (some keyword-led, some
benefit-led). With the titles now carrying the search term, both jobs are covered — no H1 changes
required.

---

## What the pass reveals — act / watch

**Act — the biggest thing the pass revealed:**
- **Four industry pages own valuable audience intents but 404** (`restaurants`, `pharmacies`,
  `driving-schools`, `sme-founders`, all `hasPage:false`). "Restaurant website design", "pharmacy
  website design", "driving school website design" and "small business website design" are strong,
  high-commercial-intent audience terms — and right now **nothing serves them** (the docs exist and
  are launch-ready, but the route 404s them). This is a content/IA decision, not a copy fix, so it is
  flagged not actioned: **launch them** (flip `hasPage`, add to the industries hub + mega-menu, curate
  each page's "Selected work") or consciously keep them deferred. I did not flip `hasPage` — launching
  four pages is your call under the standing rules. Note: two of these (`driving-schools`, `sme-founders`)
  had titles "fixed" in P1 and `restaurants` a description, all believing they were live — harmless, and
  correct for whenever they go live.

**Fixed this pass:**
- The one true cross-layer collision (`ecommerce-brands` industry vs `ecommerce` service).
- Five live industry pages were invisible to search (no title/description) — now closed.
- Two live industry titles wasted title real estate on a CTA suffix; one (`ecommerce-brands`) also on a
  dead "Call". (The `pharmacies` CTA-title fix was applied too, but it sits on a 404 page — see above.)

**Watch (mild, no change made — flagging per your request):**
- **`replatform-rebuild` (solution) vs `migrations` (service).** "Website rebuild/replatform" (goal) and
  "website migration" (capability) sit close. Distinct intents today, but if either broadens its copy
  toward the other's term they will start to compete. Keep replatform-rebuild outcome-led, migrations
  capability-led.
- **`shopify` vs `ecommerce` (both services).** Fine while ecommerce stays multi-platform — but the
  `ecommerce` page should explicitly name **WooCommerce** so it doesn't read as a Shopify duplicate.

**Intents nothing owns (opportunities, not problems):**
- **Local / geo intent** — no page targets "web design [Manchester / UK]". The homepage is the natural
  owner; today its title is category-only. A geo signal there (or a location page) is unclaimed ground.
- **"Website redesign"** — split between `replatform-rebuild` (goal) and `migrations` (capability);
  the generic redesign term is owned by neither cleanly.
- **WooCommerce** — no dedicated surface; should be absorbed into the `ecommerce` service copy (above)
  rather than spawn a new page.

None of these block anything; they are where the map has white space, for a later content decision.

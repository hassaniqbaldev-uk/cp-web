# 00 — Context

**Project:** CreativePixels website transformation
**Sign-off authority:** Hassan (direct, sole)
**Status:** Pre-CP-00. Codebase audit not yet started.
**Last updated:** 12 August 2026

---

## Purpose of this file

This is the entry point for any future session working on this project. Read this
file first. It records the business context, the decisions that are locked, the
decisions that are still open, and the evidence position.

If a statement in the original transformation brief conflicts with this file, this
file wins. The original brief was written before platform facts and several
strategic decisions were confirmed.

---

## 1. Platform facts

| Item | Value |
| --- | --- |
| Framework | Next.js 16 |
| CMS | Sanity (collections) |
| Hosting | Vercel |
| Staging | Vercel staging environment, mirrors the production Sanity dataset |
| Sanity access | Schema export (not MCP) |
| Repository | Internally developed, production, existing codebase |
| WordPress | Not used anywhere on this site |

The staging dataset mirroring production matters: staging content changes are not
isolated. Treat any Sanity write on staging as a production content change until
proven otherwise. Verify this in CP-00K before editing content.

---

## 2. Business context

CreativePixels is a UK digital agency, **12 years** in operation, with a genuine
Manchester presence and an international client base including US clients.

Positioning: **UK based, working internationally.** Manchester is a credibility and
entity signal, not the lead proposition.

Lead proposition: *We design, build and grow digital experiences.*

Primary customer: SME to mid-market. Founders, growing businesses, ecommerce
brands, B2B and professional services, technology and SaaS, charities where
appropriate, and organisations replacing an outdated website or needing custom
functionality.

Target customers value thinking, UX, design, engineering, integrations, CRO and
technical ownership. They are not shopping for the cheapest website.

### What CP must not become

A WordPress-only agency, a cheap or template website provider, a generic digital
marketing agency, an SEO-only agency, an AI or "AI web design" agency, a
Manchester-only agency, or a corporate consultancy the business cannot credibly
support.

### Work not targeted

£300 template websites, dropshipping, alcohol, betting and gambling, adult, crypto,
political. Filtered through positioning, pricing, qualification, paid keyword
exclusions and sales decisions. No public "we don't work with" page.

---

## 3. Service architecture

Four pillars. This architecture must stay consistent across homepage, services hub,
navigation, case study categorisation, internal linking and content architecture.

| Pillar | Primary services | Weighting |
| --- | --- | --- |
| Brand & Experience | Branding & Brand Redesign, UI/UX Design | 10–15% |
| Web & Ecommerce | Web Design & Development, Ecommerce, Custom App Development, WordPress, Shopify | 45–50% |
| Growth & Performance | CRO, SEO, Paid Media, Ongoing Growth & Support | 20–25% |
| AI & Automation | AI & Automation | 10–15% |

Weightings are positioning and content-emphasis guidelines. They are not keyword
density targets.

Custom App Development sits under **Web & Ecommerce**, not AI & Automation.

---

## 4. Decisions locked

All confirmed by Hassan, 12 August 2026.

| ID | Decision | Consequence |
| --- | --- | --- |
| D1 | Platform is Next.js 16 + Sanity + Vercel | CP-00A reframed for App Router and Next 16 caching; CP-00K added for Sanity |
| D2 | Sanity accessed by schema export, not MCP | Schema export required before CP-00K can run |
| D3 | **Historic** data out of scope: past GSC, GA4, backlinks. Forward measurement is in scope | CP-01 proceeds on first principles. Crawl still mandatory for the redirect map. Does not affect D14 |
| D4 | Ecommerce Brands is an **Industry**, not a Solution | `/solutions/ecommerce-brands` redirects to the Industries page at CP-15 |
| D5 | Internationalisation deferred to a later stage | No hreflang, no locale routing, no US-specific pages in this programme |
| D6 | Manchester handled as entity signals only | Signals live in About, Contact and Organization schema. No local landing page |
| D7 | CTA split confirmed | Short button label, long phrase demoted to enquiry step heading. See section 6 |
| D8 | Book a Call demoted | Zero bookings in the last 12 months. Removed from page-level CTAs |
| D9 | Pricing deferred — **SUPERSEDED 18 Aug 2026**; pricing approved for publication (O3 closed) | Investment module keeps contextual framing, now with published figures. See section 7 |
| D10 | No verified case study outcome metrics exist | Proof is qualitative and delivery-fact based only. See section 8 |
| D11 | All work is free to publish, no white label restrictions | No client anonymisation required |
| D12 | Warranty is 3 months free post-launch support | Wording must align to the legal hub document. See section 9 |
| D13 | Canonical task numbering is CP-xx only | The original brief's parallel 1–47 section numbering is dropped in the repo docs |
| D14 | **Forward GA4 and event tracking is in scope and built in, not retrofitted** | Events are implemented in the CTA, enquiry and card components as they are written. CP-16 analytics workstream is confirmed. See section 10 |

### Added after the CP-00 report, 12 August 2026

| ID | Decision | Consequence |
| --- | --- | --- |
| D15 | `custom-apps-and-ai` splits into two services | Custom App Development → Web & Ecommerce. AI & Automation → AI & Automation. Was already implied by the original brief; now explicit. Requires a pillar field on the services document type |
| D16 | The three test routes are deleted | `/hassan-test`, `/review-test`, `/testing-testimonials`. All served HTTP 200 in production; `/hassan-test` embedded an external iframe. Recoverable from git history if needed |
| D17 | AO Arena retained as clearly labelled concept work | Already titled "AO Arena (Concept)". Excluded from the client-work grid and from flagship candidates. Closes O1 |
| D18 | Warranty — **APPROVED** (18 Aug 2026; was "blocked" → "pending sign-off" → approved) | Hassan approved the §9A clause as a working version (he will edit the legal wording himself later). Warranty is **cleared for site copy and marketing**, incl. the CP-11 landing-page warranty module. Copy constraint: conservative, close to actual practice — 3 months free support on what we built, fixing issues in that window; never promise more than the clause covers. See section 9 |
| D19 | Reuse GTM container `GTM-B8FV6K69`, provision a fresh GA4 property | Container saves re-tagging and holds nothing of value. Fresh property avoids inherited filters and a polluted event taxonomy. Closes O7 |
| D20 | A consent layer ships in the same phase as the events | Google Consent Mode v2. GTM currently fires unconditionally, which is a UK GDPR and PECR gap. CP-16 must verify events in both consent states |
| D21 | `www` → apex redirect added at DNS/Vercel | `www.creativepixels.agency` does not resolve at all. No SEO exposure since nothing is indexed there, but anyone typing the www form gets a dead site. Not a code fix |
| D22 | Legal detail pages get an `h1` | Phase 0. WCAG 1.3.1 failure, one template, pages not otherwise touched until CP-13 |
| D23 | A separate staging dataset is required before any CP-01 content work | Confirmed blocker. Every project currently has one dataset named `production` and no staging equivalent |
| D24 | Sanity datasets move to private with a server-side read token | Public tokenless datasets expose draft documents to anyone holding the project ID, and the IDs ship to the browser in `NEXT_PUBLIC_*` vars. Unacceptable while drafting new positioning, pricing and case studies |
| D25 | Draft mode, preview and on-demand revalidation are added before heavy content work | Editors currently cannot preview drafts and wait up to an hour for published changes. Bundled with the D23/D24 workstream |

### Added after the CP-00K validation, 12 August 2026

| ID | Decision | Consequence |
| --- | --- | --- |
| D26 | Consolidation effort is **8 to 10 days**, not 5 to 6 | Corrected upward. Estate is ~138 content documents and ~852 image assets, not ~75 documents. Asset transfer is slow but low-uncertainty; taxonomy reconciliation is the overrun risk |
| D27 | Asset migration uses `sanity dataset export` / `import`, not scripted re-upload | Export includes asset binaries and import remaps references automatically. Scripted NDJSON transform is used **only** for the type collision, cross-type references, taxonomy merge and the D15 split. The transform must not touch asset references |
| D28 | **Four taxonomies: `service`, `technology`, `industry`, `capability`. Nothing is deleted; every taxonomy document gets a `hasPage` flag** | Approved 12 Aug. Replaces an earlier recommendation to drop unmapped tags, which was wrong. `print`, `brochure`, `custom-forms` become capabilities with `hasPage: false`. Makes O6 and CP-09 page decisions reversible. See `CP-00K-taxonomy-reconciliation.md` |
| D29 | The 9 `category: industry` solutions migrate to the new `industry` document type | They are industry pages in the wrong document type. Leaves 5 genuine goal-based solutions, consistent with CP-07 |
| D30 | Option C rejected | Excluding the legal hub saves 2–3% of the estate and forces D23, D24 and D25 to be implemented twice. Only revisit if legal must be organisationally separate |

### Added after the schema review, 12 August 2026

| ID | Decision | Consequence |
| --- | --- | --- |
| D31 | Consolidation effort revised down to **6 to 8 days** | Schemas show one real type collision, an existing working reference pattern, and structurally identical `services`/`solutions`. Supersedes D26 |
| D32 | Blog `category` (`STRATEGY|DESIGN|DEVELOPMENT|GROWTH`) maps to the four pillars | Approved 12 Aug. A fourth divergent taxonomy; CP-14 requires pillar alignment. Reconciled in the same pass |
| D33 | `tools` becomes `technology` and gains `title` and `slug` | Currently only `toolImage` and `altText`, so it cannot be queried or filtered. Unusable as a taxonomy without this |
| D34 | **Step 1 site-hygiene fixes run before the consolidation** | Approved 12 Aug. Keyboard-accessible nav, carousel pause controls, real dialog. Each becomes the base for the later rebuild, so none is throwaway work. See section 14 |

### Added after the CP-01 services audit, 18 August 2026

| ID | Decision | Rationale |
| --- | --- | --- |
| D35 | **Service URLs stay flat** — `/services/wordpress`, `/services/shopify` are NOT nested under a parent path | Nesting adds depth, complicates the redirect map and buries the pages. WordPress and Shopify belong to **Web & Ecommerce** *conceptually*, but sit at the same URL depth as every other service. The hierarchy lives in the **mega-menu grouping + internal linking**, as CP-15 describes — not in the URL. Applies to all platform/service pages. Inherited by CP-02/CP-03. |
| D36 | **Growth & Support consolidation** — `maintenance` becomes the parent proposition **"Ongoing Growth & Support"** (covering maintenance, security, performance and ongoing improvement). **Speed kept** as a supporting specialist page. **Security demoted to a capability** within Growth & Support — *pending confirmation* | Reduces the thin "support" cluster to one strong parent + one justified specialist. Speed stays because there is **real search demand** for site-speed work. Security is demoted because the brief warns against promising services we do not actually provide and security is the easiest to overclaim — **OPEN: confirm we do not deliver standalone security work; if we do, it stays a service.** Do not assume; see O14. Inherited by CP-02/CP-03. |
| D37 | **AI & Automation page built at CP-05** as a P1 pillar page; its **sub-pages** (Workflow Automation, AI Agents, AI Integrations) **wait** for more delivery proof | It is one of the four pillars and now has real evidence behind it (the Biome4Pets case study). The sub-pages hold until there is more delivery proof, exactly as the brief states. Inherited by CP-03/CP-05. |

### Added after the CP-01 services/solutions review, 19 August 2026

| ID | Decision | Rationale |
| --- | --- | --- |
| D38 | **Analytics page repositioned (option A)** — `/services/analytics` becomes a **Growth & Performance measurement** page (tracking, GA4/GTM, attribution, reporting). **BI / dashboard builds move to Custom App Development** as a capability, not a separate page. The H1/title/meta drop "& BI". | A page cannot sit cleanly in two pillars, so a dual page (b) perpetuates the ambiguity the brief flags. A standalone BI page (c) is thin overlap — BI dashboards *are* custom builds, so they belong under Custom App Development. Option (a) gives clean pillar assignment and matches the dominant "analytics services" search intent (marketing measurement). Approved by Hassan. Inherited by CP-03 (pillar map) and CP-09 (copy). |
| D39 | **Scale Marketing merged into Increase Leads** — `/solutions/scale-marketing` is folded into `/solutions/increase-leads`; anything worth keeping is moved into that page, **not deleted**. `/solutions/scale-marketing` **REDIRECTS** to the merged page at **CP-15**. Leaves **4 goal solutions** (`increase-leads`, `replatform-rebuild`, `launch-new-product`, `automate-operations`). | Fails the brief's distinctness test: Scale Marketing and Increase Leads are both growth outcomes served by the same services (SEO / Paid Media / email / CRO) with no separate buyer journey. The other three each map to a distinct journey (rebuild, go-to-market, ops automation). Approved by Hassan. Content preserved (fold, don't delete). Inherited by CP-07 (solutions) and CP-15 (redirect map). |

---

## 5. Decisions open

| ID | Question | Owner | Blocks |
| --- | --- | --- | --- |
| **O8** | **Content platform consolidation. Recommendation is Option A, validated at 8–10 days.** See `CP-00K-content-platform-decision.md` | **Hassan** | **CP-01 onward** |
| **O11** | **Taxonomy reconciliation ruleset. Must be approved before migration scripting.** See `CP-00K-taxonomy-reconciliation.md` | **Hassan** | **The O8 migration itself** |
| O4 | Approach clients for real outcome data. **DECIDED 18 Aug 2026: yes — collecting; no estimating.** Until the data returns, proof is delivery facts + testimonials only (section 8). **Stays open until the data lands** (for CP-12). | Hassan / data collection | CP-12 flagship quality |
| O6 | Which industry pages survive: Interiors & Furnishings, Driving Schools, Pharmacies, Restaurants | Hassan | **Pulled forward by D28.** Now expressed as `hasPage` flags, so it is reversible and no longer blocks the migration |
| O9 | Cal.com link views on the booking page. Did prospects click and abandon, or never click? See section 6 | Hassan | Whether D8 is the right fix |
| O12 | Confirm no case-study taxonomy slug appears in a live URL before normalising the malformed ones | Claude Code | Slug normalisation step |
| O13 | **Add the nav field DEFINITIONS to the separate Sanity Studio repo** so editors can set them. The field DATA is already populated on staging and the cp-web nav query reads it (title fallback), but the Studio schema lives outside cp-web. Spec below. | Whoever owns the Studio repo | Editors setting nav labels; full data-driven nav |
| O14 | **Do we deliver standalone security work as a service?** If yes, `/services/security` stays a service; if no (the default under D36), it becomes a capability within Growth & Support. Do not overclaim. | Hassan | Finalising D36 / the security page's fate at CP-03 |
| O15 | **Is `launch-new-product` a real, delivered offering** (go-to-market / MVP launch) or aspirational? If real it stays a goal solution (D39 leaves it in the set of 4); if not, it merges or drops. Do not assume. | Hassan | Finalising the goal-solutions set at CP-07 |

Closed: O1 → D17. O2 → D14. O7 → D19. O10 → already scoped to the `cp-web` repo, no
action required. **O3 → pricing approved for publication (18 Aug 2026; D9 superseded, see
section 7).** **O5 → keep all 31 case studies; the flagship / supporting / archive
classification is now drafted in the CP-01 audit (`03-url-audit.md` §8: 9 flagship, 20
supporting, 2 archive) and feeds the CP-12 presentation decision, nothing deleted.**

### O13 — Sanity Studio nav fields (spec for the separate Studio repo)

Data-driven navigation (Step 3) reads two optional fields per nav-surfaced document, with a
`title` fallback. The **data** is already populated on the staging dataset (via the
management API) and the cp-web query reads it; but the **field definitions** live in the
Sanity **Studio project, which is not in the cp-web repo** — so this must be done by whoever
owns that repo before editors can set the fields. Exact fields:

| Field | Type | Notes |
| --- | --- | --- |
| `navLabel` | `string` (optional) | Short menu label. Menu wording ≠ page title on purpose ("Web Design & Development" is a good title, a clumsy menu item). Empty → falls back to `title`. |
| `navExcerpt` | `string` (optional) | One-line menu descriptor, e.g. "Identity & Strategy". Empty → renders no descriptor. |

Add all three to the document types surfaced in the menu: **`services`**, **`solutions`**
(goal), and **`industries`**:

| Field | Type | Notes |
| --- | --- | --- |
| `navLabel` | `string` (optional) | Short menu label; empty → `title`. |
| `navExcerpt` | `string` (optional) | One-line menu descriptor; empty → none. |
| `navOrder` | `number` (optional) | Menu order **within a column**. Alphabetical is wrong for a commercial menu (it puts Accessibility first under Support, Analytics first under Growth); order must be editor-controlled. **Data populated on staging (18 Aug 2026)** to reproduce the old `navigation.js` hand-order exactly; the query orders by it. |

Until the Studio fields exist, editors cannot change these values, but the site renders
correctly from the populated data + title fallback + navOrder.

### Scheduling and holds (18 August 2026)

- **WordPress landing page (`/wordpress-web-development`) — DEPRIORITISED.** It will be
  superseded by the new service pages at **CP-05**, so no further work on it. The hydration
  fix (`0a3c282`) stays committed as-is. Its audit form **remains non-functional on
  production until cutover** — the fix lives on the unmerged `development` branch only. This
  is an accepted state given the page's scheduled replacement.
- **New service pages confirmed for CP-05 (first in the priority order): Web Design &
  Development and Ecommerce.** These are distinct offerings in the pricing (section 7: from
  £1,500 / from £3,500) but have **no page today** — the current design-development services
  are `wordpress` / `shopify` / `custom-app-development`. CP-05 creates them. No action now;
  the gap is understood and scheduled.
- **AI & Automation case study — Biome4Pets created as an unpublished draft (19 Aug 2026).**
  Facts confirmed by Hassan; created verbatim from the approved draft as `drafts.biome4pets`
  in staging (not published — awaiting images + brand colours, and the 5 client facts still to
  collect). It is the **only** evidence for the AI & Automation pillar, and it is not yet
  published — so **the pillar still has zero *published* case studies** (see the CP-01 case
  studies audit, `03-url-audit.md` §8). No other AI case study is to be invented.

---

## 6. CTA system

**Decided.** The previous primary CTA, "Tell Us What You Need", is a sentence doing a
button's job. It is split rather than discarded.

| Position | Label | Notes |
| --- | --- | --- |
| Primary CTA (site-wide) | **Start a project** | Paired with reassurance microcopy directly beneath |
| Reassurance microcopy | *Takes two minutes. No call needed.* | Required wherever the primary CTA appears as a section-level CTA. Optional in nav |
| Secondary CTA | **View our work** | Unchanged |
| Enquiry step 1 heading | *Tell us what you need* | The original phrase, used where its low-commitment framing actually helps |
| High-intent CTA | **Book a call** | Restricted to the enquiry thank-you state and `/contact` only. Not on any other page |

The microcopy is the mechanism that stops "Start a project" reading as committing.
It is not decorative. If a component uses the primary CTA without it, that is a
defect.

Fallback if "Start a project" still tests as too committing: **Start here**. Lower
friction, but vaguer, which costs clicks from prospects who already know what they
want. Do not switch without Hassan's approval.

Rejected labels and why: "Get in touch" and "Contact us" carry no commercial signal.
"Get a quote" and "Get pricing" attract the £300-template audience the positioning
is designed to filter out. "Enquire now" is manufactured urgency, which section 33
of the brief prohibits.

### Enquiry flow

Step 1 — What can we help with? Options: Brand & Experience, Web & Ecommerce,
Growth & Performance, AI & Automation, Not sure yet.

Step 2 — Tell us a little about what you're looking to do. One free-text field.

Step 3 — Required: name, email. Optional: budget, timeline. No phone number. No
company size or job title.

Submit label: **Send enquiry**

Thank-you state: *Thanks, we've got it. We'll take a look and get back to you.*
Then, and only here: *Want to talk it through sooner? Book a call.*

### Why Book a Call is demoted rather than deleted

Zero bookings in twelve months is not proof that calls don't convert. It is equally
consistent with the booking CTA having competed against Audit, Contact and enquiry
routes on every page. CP-00I is the task that tests this. Demoting it to the
thank-you state and `/contact` removes the cannibalisation without closing the path
for a prospect who genuinely wants to speak to someone.

### Refinement after CP-00 (O9)

CP-00 established that the site has zero event tracking, so the zero-bookings figure
cannot have come from the site. It came from Cal.com's own dashboard, which makes it
*more* reliable, not less. Cal.com knows its own bookings.

But bookings and clicks are different measurements implying opposite fixes:

- **Nobody clicked** → the CTA or its placement failed. Demoting it is correct.
- **People clicked and abandoned inside the embed** → the booking flow failed, and
  demotion treats a symptom while leaving the cause.

One detail favours the second reading: booking runs through a single **personal**
Cal.com slug, which for mid-market buyers is a plausible friction and credibility
drag in itself.

Check Cal.com for link or page views on the booking page before treating D8 as
settled. `call_booking_clicked` (section 10) makes this measurable going forward
regardless.

---

## 7. Pricing

**Approved for publication — O3 closed, 18 August 2026 (supersedes D9).** Pricing is
published using **contextual framing, not a price menu**: a scope statement plus a line on
what changes the price. Not a bargain menu, not a comparison table.

Published starting figures (from the original brief):

| Service | Starting price | Framing pattern (scope + what moves the price) |
| --- | --- | --- |
| Branding | from £1,000 | e.g. "Branding from £1,000 — logo-and-essentials through to a full identity system." |
| Web Design & Development | from £1,500 | "Web projects from £1,500 — from focused business websites through to larger custom builds." |
| Ecommerce | from £3,500 | scope by platform, catalogue size and integrations |
| Growth retainers | from £300/month | scope by channels and scope of work |
| Custom App Development | from £5,000 | scope by features, integrations and complexity |
| AI & Automation | from ~£1,500 | scope by workflow complexity and integrations |

(Exact framing copy is CP-11 content work; the pattern above is the rule.)

Build rules (binding):
- **Contextual framing** — scope statement + a "what changes the price" line per service.
- Figures live in a **single content source**, never hardcoded across service pages / the
  nine P1 templates. One edit updates every surface.
- The investment module must still read correctly if a figure is absent for a given service.

Payment options are publishable: staged project payments, and monthly arrangements where
appropriate.

---

## 8. Evidence position

### Search

Current organic visibility is strongly brand-led. Homepage: 467 clicks from 7,054
impressions over the supplied 12-month period. Other commercial pages receive
considerably less. Dominant queries are brand variations (creative pixels, creative
pixel, creativepixel, creativepixels). Scattered commercial and local impressions
exist, for example "web design agencies Manchester", at low average position.

**Implication.** The future architecture is designed from first principles, not
shaped around weak legacy rankings.

**Counter-implication that must not be forgotten.** The homepage and the brand
queries are the one organic asset that does exist. Any change that risks the
homepage's brand-term ranking or its indexation is a high-severity risk, not a
low-severity one. Homepage URL, canonical and Organization schema continuity are
protected.

### Historic data

Historic GSC, GA4 and backlink data are out of scope (D3). No past behavioural or
link data will inform the architecture. The new structure is designed from first
principles.

This is a decision about **looking backwards only**. Forward measurement is
explicitly in scope and built into the new site (D14). The two must not be conflated,
and a future session reading only D3 could easily make that mistake.

One consequence to hold onto: discarding backlink *value* analysis does not discard
the need for a *redirect map*. Legacy URLs still have to be recorded from a crawl,
because 30 case studies, 14 solutions and 15 service pages are being restructured and
every one of those routes needs a destination.

### Case study evidence

No verified outcome metrics are currently available for any project (D10).

Permitted proof, in descending order of strength:

1. **Delivery facts.** What was built, on what stack, with what integrations, at
   what scope. Verifiable by inspecting the repo and the live client sites. This is
   the largest untapped proof source and CP-00 should capture it as it audits.
2. **Existing testimonials and reviews.** Already collected, real, quotable as-is.
3. **Scope and constraint facts.** Timeline, team, what the client had before, the
   problem as the client described it.

Prohibited, without exception: invented metrics, invented outcomes, invented
testimonials, invented awards, invented client results, invented technical
capabilities, invented security or compliance claims. This includes non-numeric
claims that merely sound plausible. A fabricated qualitative fact is harder to
detect later than a fabricated number and does the same damage.

**O4 decision (18 August 2026): outcome data is being collected, NOT estimated.** Clients
will be approached for real outcome figures, landing in time for CP-12. **Until that data
exists, no estimated, assumed or realistic-sounding improvement figures go into any case
study or page** — no invented percentages, no plausible-looking uplift claims, no "typical
results" phrasing. An estimate that sounds realistic is harder to catch later than an
obvious placeholder, and in six months neither we nor anyone else will be able to tell it
from real data. Until the data returns, **proof is delivery facts + existing testimonials
only** (the two strongest, largely untapped sources above). **O4 stays open** until the
data comes back.

**O5 decision (18 August 2026): keep all 31 case studies — nothing is deleted.**
Classification into flagship / supporting / archive happens at CP-12 as a **presentation**
decision, not a deletion.

### Client relationship accuracy

- **UNICEF** — direct client relationship. Publishable as such.
- **AO Arena** — pitch mockup. Not delivered client work. Currently presented
  alongside real case studies and nominated as a Brand & Experience flagship. This
  is a live accuracy problem on the production site. Removed from the flagship
  candidate list pending O1.

Every remaining case study needs the same check during CP-01: delivered client work,
or something else.

---

## 9. Warranty

Three months of free post-launch support on delivered products. If something breaks
after launch, within that window, CP fixes it.

### Status: APPROVED (D18, 18 August 2026)

**Approved.** Hassan has approved the §9A clause as a **working version** — he will review
and edit the legal wording himself later. The warranty is **cleared for use in site copy and
marketing**, including the CP-11 landing-page warranty module.

**Copy constraint (binding):** keep warranty copy **conservative and close to actual
practice** — three months of free support on what we built, fixing issues that arise in that
window. **Do not write copy that promises more than the §9A clause covers**, so the final
legal wording cannot end up contradicting the site (e.g. no "guaranteed", no implied
coverage of third-party services / client-side changes / post-handover content, no refund
implication — the clause's remedy is a fix, not compensation).

Approved working marketing line: *If something we've built isn't working as agreed during
the warranty period, we'll put it right.*

Original finding (for the record): CP-00 searched the legal hub and found **no** 3-month
post-launch warranty clause. The Support & Maintenance Schedule covers ongoing retained
support, a different thing. So the warranty was real practice with nothing contractual
behind it — which is why it was withheld until the clause existed.

### §9A — Post-launch warranty clause (DRAFT for approval, not final)

> **Post-Launch Warranty.** CreativePixels provides a warranty period of three (3) months
> from the date the delivered work is made live or handed over to you ("the Warranty
> Period").
>
> **1. What is covered.** During the Warranty Period we will, at no additional charge,
> correct defects in the work we delivered. A "defect" means the delivered work failing to
> function as set out in the agreed specification — for example a broken link, a page or
> feature that does not work as agreed, or a fault introduced by us. Work that functions as
> agreed but is now wanted differently — new pages, new features, design changes, added
> functionality, or any change to the agreed scope — is **not** a defect; it is a change
> request, quoted and carried out separately.
>
> **2. What is not covered.** The warranty covers only the work we built. It does **not**
> cover: (a) third-party services, platforms, plugins, hosting, or integrations, or changes
> those parties make; (b) changes, customisations, or code made by you or anyone else after
> handover; (c) content, data, or edits you add or change after handover; (d) faults caused
> by misuse, or by the environment the work runs in rather than the work itself. Where a
> problem falls outside the warranty, we can help under a separate support arrangement.
>
> **3. How to raise a claim.** Report the issue to us in writing (email is sufficient)
> within the Warranty Period, describing the problem and how to reproduce it. We will
> acknowledge the report within [N] business days and, where the issue is a covered defect,
> tell you our assessment and expected timeframe to correct it.
>
> **4. Remedy.** The sole remedy under this warranty is that we will correct the covered
> defect. The warranty does **not** entitle you to a refund, discount, credit, or any other
> financial compensation.

*(Bracketed [N] to be set by Hassan. Draft only — approve/adjust before adoption; do not
publish or reference in marketing until signed off.)*

---

## 10. Analytics and measurement (decided, D14)

Forward measurement is a build requirement, not a post-launch task. Events are
implemented inside the CTA, enquiry and card components at the moment those
components are written. Retrofitting means touching every P1 page again.

Full specification lives in `10-analytics-spec.md`. This is the agreed event set.

### Conversion funnel

| Event | Fires when |
| --- | --- |
| `cta_click` | Any primary or secondary CTA is clicked, anywhere |
| `enquiry_started` | Step 1 of the enquiry flow is interacted with |
| `enquiry_step_2` | Step 2 reached |
| `enquiry_step_3` | Step 3 reached |
| `enquiry_submitted` | Send enquiry succeeds |
| `call_booking_clicked` | Book a call clicked, from the thank-you state or `/contact` |

Tracking all three enquiry steps separately is deliberate. It gives per-step drop-off,
which is the only way to tell whether the low-friction flow is actually low friction.

### Engagement and intent

| Event | Fires when |
| --- | --- |
| `case_study_view` | A case study page is viewed |
| `service_selected` | A service is chosen from nav, hub or card |
| `solution_selected` | A solution is chosen |
| `industry_selected` | An industry page is entered from nav or hub |
| `pricing_view` | An investment module enters the viewport |
| `email_click` | Email link clicked |
| `phone_click` | Phone link clicked |

### Parameters

Capture on relevant events: `page_path`, `page_type`, `service_pillar`, `service`,
`solution`, `industry`, `cta_label`, `cta_position`, `device`, plus `source`,
`medium` and `campaign`.

`cta_label` and `cta_position` are the important pair. Without them, `cta_click` is
one undifferentiated number and tells us nothing about which CTA in which slot is
working.

**Preserve UTMs through the entire enquiry journey**, including across steps and into
the submitted payload, so enquiry source is attributable.

### Two questions this exists to answer

First, whether **"Start a project"** outperforms what came before, and whether the
reassurance microcopy matters. That needs `cta_label` and `cta_position`.

Second, whether **Book a Call genuinely does not convert**, or was simply
cannibalised. D8 demoted it on zero bookings in twelve months, but CP-00I will test
whether competing CTAs were the cause. `call_booking_clicked` from a single
uncontested position finally settles it. If it starts converting from the thank-you
state, D8 was the right fix for the wrong reason, and that is worth knowing.

### Implementation notes

- Confirm during CP-00L whether GA4 arrives direct or via GTM, and whether the
  existing property is reused or replaced (O7).
- Event names must be defined in one shared constant, not typed as string literals
  at each call site. Typos in event names are silent failures.
- Vercel Speed Insights, if present, covers Core Web Vitals separately. Do not
  duplicate that in GA4.
- Every event needs verifying in DebugView before the phase it belongs to closes, not
  at launch.

---

## 10a. Content platform (confirmed by CP-00K)

Recorded here because a future session will otherwise assume one Sanity project with
several document types. That is not what exists.

| Content type | Project ID | Dataset |
| --- | --- | --- |
| Case studies | `6qygzc2z` | production |
| Services | `cqbs7syw` | production |
| Solutions | `z2m53qom` | production |
| Blog | `dgx0l3po` | production |
| Legal hub | `pz9kcb6n` | production |

Five **independent Sanity projects**, five clients in code, five sets of
`NEXT_PUBLIC_SANITY_*` env vars. All datasets public and tokenless. No staging
dataset anywhere.

Current content volume: 15 services, 14 solutions (5 goal, 9 industry), 31 case
studies, 8 blog posts, ~7 legal documents. Roughly 75 documents in total.

Current services taxonomy is three categories, `design-development`, `growth`,
`support`. This does **not** map to the four pillars, and `custom-apps-and-ai` fuses
two services that D15 places in different pillars.

### Why this is a decision and not a note

Sanity references cannot cross projects. The internal linking architecture in CP-15,
the relevant-work module on every service page, the related-services module on every
case study, and a four-pillar taxonomy shared across services, solutions, industries
and case studies all depend on cross-type relationships.

Evidence that the workaround already fails: the case-studies project has grown its own
duplicate `services` and `industries` document types for tagging, and they have
already diverged from the real ones.

**Open as O8.** See `CP-00K-content-platform-decision.md` for options, recommendation,
effort and risk. Nothing in CP-01 onward should proceed until this is decided.

---

## 11. Non-negotiable constraints

These apply to every phase and every session.

**Content.** UK English. No em dashes. Write for a business owner, marketing manager
or digital lead. Banned: AI buzzword soup, keyword stuffing, manufactured urgency,
generic agency phrases, "world-class", "cutting-edge", "unlock your potential",
"move the needle", "scale with confidence", "stop losing money", empty
transformation claims.

**Truth.** Nothing invented. See section 8.

**Performance.** LCP ≤ 2.5s, INP < 200ms, CLS < 0.1.

**Accessibility.** WCAG 2.2 AA, implemented in reusable components, not patched at
the end.

**Mobile.** Not "desktop but stacked". Important text and links stay available.

**URLs.** Design the best future structure first, approve the sitemap, then map
legacy URLs into it. Historic routes do not dictate the new architecture. No URL
changes before CP-15.

**Existing code.** KEEP / REFACTOR / REPLACE. Do not preserve a component because it
exists. Do not replace good code unnecessarily.

---

## 12. Corrections to the original brief

A future session reading the original transformation brief will hit these. They are
resolved here.

1. **Two numbering systems that disagree.** The brief runs CP-00 to CP-16 alongside
   sections 1 to 47, interleaved. The brief's priority sequence refers to "CP-06
   solutions" when CP-06 is the Services Hub and CP-07 is Solutions. Section 22 does
   not exist. Repo docs use CP-xx only (D13).
2. **CTA references are stale in four places.** The original brief hardcodes "Tell
   Us What You Need" and "Book a Call" in its conversion strategy, enquiry
   experience, information architecture and homepage sections. Section 6 of this
   file supersedes all four.
3. **Ecommerce Brands appeared as both Solution and Industry.** Resolved by D4.
4. **The keyword table is UK-suffixed while the positioning is international.**
   Every intent in the keyword ownership table ends in "UK". With
   internationalisation deferred (D5), the UK suffix is correct for now. Revisit if
   and when international pages are commissioned.
5. **Manchester had no home in the new IA** despite being cited as a local SEO
   reason to retain the city. Resolved by D6: entity signals only.
6. **The production crawl was scheduled at launch.** Too late. The only clean moment
   to capture legacy URLs, titles, H1s and status codes is before anything changes.
   Moved into CP-00B.

---

## 13. Document index

| File | Contains |
| --- | --- |
| `00-context.md` | This file. Context, decisions, constraints |
| `01-codebase-audit.md` | CP-00 findings: architecture, technical health, SEO, performance, a11y, CRO |
| `02-component-map.md` | CP-00C component inventory with KEEP / REFACTOR / REPLACE |
| `03-url-audit.md` | CP-00B route discovery and CP-01 per-URL decisions |
| `04-information-architecture.md` | CP-02 locked future sitemap |
| `05-service-architecture.md` | CP-03, CP-04, CP-05, CP-06 |
| `06-solutions-industries.md` | CP-07, CP-08 |
| `07-keyword-ownership.md` | CP-09 |
| `08-content-strategy.md` | CP-14 |
| `09-cro-strategy.md` | CP-11 landing page system, conversion flow |
| `10-analytics-spec.md` | CP-16, subject to O2 |
| `11-migration-map.md` | CP-15 redirect map |
| `12-qa-checklist.md` | CP-16 acceptance |
| `13-implementation-status.md` | Running status log. Update throughout |
| `pages/` | Per-page briefs for P1 pages |

---

## 14. Route to good standing (approved 12 August 2026)

The site reaches a proper working state before the rebuild begins. Four steps, in
order. Nothing is built twice.

| Step | Work | Effort |
| --- | --- | --- |
| **1** | Site hygiene (D34). Keyboard-accessible nav replacing the mouse-only mega menu, pause controls on autoplay carousels, a real dialog replacing the non-dialog modal | ~1 day |
| **2** | Consolidation and data layer (D25–D33). One Sanity project, staging dataset, private datasets with a read token, draft mode, on-demand revalidation, `pillar` field, taxonomy reconciliation | 6–8 days |
| **3** | Component cleanup. One shared slider replacing ~19, one form replacing 3, one header replacing 3. D14 analytics events and WCAG 2.2 AA behaviour are built in here, once | 3–5 days |
| **4** | CP-01 onward. The transformation proper | Per the original brief |

Steps 1 to 3 are "good standing". Step 1 runs first and standalone because the
keyboard-inaccessible navigation is a live WCAG failure on a site that sells
accessibility remediation at `/services/accessibility`, and the Radix disclosure that
fixes it becomes the base for the rebuilt navigation.

### Step 3 — CLOSED as partially complete (18 August 2026)

Step 3 is closed here and the programme moves to CP-01. This is a **deliberate** stop, not
an abandonment.

**Done (banked, all on `development`):**
- Sliders — one shared `Carousel` primitive; all 30 migrated; pause control + reduced-motion
  + visually-hidden treatment inherited.
- Forms — one shared headless `Form` core; all 4 migrated; honeypot, a11y (announcement /
  focus / aria wiring) and GA4 enquiry events inherited. (LP audit form hydration bug fixed
  along the way — `0a3c282`.)
- Shared component groundwork + the **GA4 event layer** (`lib/analytics/events.js`).
- **Nav data layer** — `NAV_QUERY`, `getNavData()`, and the `navLabel` / `navExcerpt` /
  `navOrder` fields (data populated on staging; title fallback proven).
- **One proven data-driven nav column** (Services → Design & Build), incl. `service_selected`
  and the empty-state primitive. **This is the pattern CP-03 follows.**

**Deferred to CP-03 — deliberately, because the four-pillar structure these depend on is
defined at CP-03, not because they were forgotten:**
- The remaining nav surfaces — Services columns 2 & 3, the Solutions dropdown, the Footer and
  the MobileMenu.
- The **data-driven column count** (grid `grid-cols-3` → `repeat(N)`), which only makes sense
  once the pillar count is fixed.
- The **three-header merge** (`Header` / `HomeHeader` / `LpHeader` → one `<SiteHeader>`).

Finishing these now would mean building against a structure that does not exist yet and
reworking it at CP-03; the reusable pieces are already banked, and the remainder is nav
plumbing in the most fragile part of the codebase (revisited three times).

**Risk accepted:** navigation stays **partly hardcoded** until CP-03. If content moves before
then — a service renamed, recategorised, or unpublished — the hardcoded columns (Services 2 &
3, Solutions, Footer, Mobile) can break again exactly as they did in CP-00K. Column 1 and any
future data-driven surface are safe; the hardcoded ones are not.

**Still outstanding:** the **O13** Sanity Studio field spec (`navLabel` / `navExcerpt` /
`navOrder` definitions in the separate Studio repo) — see section 5.

### Carousel pause control made visually hidden (recorded 18 August 2026)

The Step-1 autoplay pause/play control (`CarouselAutoplayControl`, shared across all
carousels) is now **visually hidden by default** and becomes visible on keyboard focus. It
uses a screen-reader-only-until-focus pattern (`.sr-only-focusable` in `globals.css`:
`clip`/1px, not `display:none`/`visibility:hidden`), so it stays in the accessibility tree,
keyboard-focusable, and announced. **WCAG 2.2 SC 2.2.2 (Pause, Stop, Hide) remains met** —
the mechanism to pause autoplay is still reachable and operable, just no longer shown as
persistent chrome. One shared change; every carousel inherits it. Autoplay and
reduced-motion handling are unchanged.

### Step 3 addition — navigation becomes data-driven (recorded 17 August 2026, CP-00K)

Navigation is currently a **hardcoded constants file** (`src/contants/navigation.js`),
consumed by `Footer.jsx`, `MobileMenu.jsx`, `LpFooter.jsx`, and the header dropdowns
(`ServicesDropdown` / `SolutionsDropdown` / `AboutDropdown`). Because the link list is
authored by hand, it silently drifts out of sync every time content changes — it will
break through every phase of the rebuild.

**Scope, added to Step 3:** navigation becomes data-driven, sourced from `services` and
`industries` documents and their `hasPage` flags, so content changes cannot silently
break links. A service/industry with `hasPage: false` (or unpublished) simply does not
appear; a renamed slug follows automatically. Do **not** implement before Step 3.

**Dead ends, not just broken hrefs.** "Zero 404s" and "no dead ends" are different
tests, and the second is the one that matters to a visitor. A link can return **200 and
still be broken** — landing on an empty section, a listing with no items, or a filter
with no matches. The data-driven nav work must therefore cover **empty states**, not only
href validity: any label, heading, column, section, or CTA whose content is now empty
(e.g. a category filtered to zero documents) must not render at all. When a source query
returns nothing, the surrounding chrome (headings, icons, "By Sector" columns, section
wrappers) hides with it. Broken href = automated check catches it; empty-but-200 dead end
= only a content-aware render catches it.

### Regression record — 7 nav links broke on the consolidation branch (CP-00K)

The consolidation branch (`development`, not merged) introduced **7 nav links that 404**;
all seven **work on the current live site**, so this is a regression that **must be fixed
before this branch goes anywhere near production**. Fixed on-branch in commit `0b24dac`:

- `/services/custom-apps-and-ai` → repointed to `/services/custom-app-development` (slug
  renamed in the migration).
- Six sector links removed (`b2b-services`, `driving-schools`, `ecommerce-brands`,
  `charities-and-foundation`, `interiors-and-furnishings`, `pharmacies`) — those became
  routeless `industries` docs; CP-08 builds their routes.

**Content links fixed in commit `f611af3`** (same regression class, not nav):

- `src/contants/expertiseCard.js` (`EXPERTISE_CARD`, homepage `<Expertise/>`) — removed
  the "Explore Solutions" CTAs on the **five** cards pointing at routeless sector
  industries (`sme-founders`, `ecommerce-brands`, `charities-and-foundation`,
  `b2b-services`, `saas-companies`; the fifth was missed in the first pass). The Agencies
  card keeps its CTA (`/agencies` is valid).
- `SECTOR_SOLUTION_NAV` — removed "View all industries" → `/solutions/#sector` (200 but
  empty section = a dead end).

**Dead-end sweep — still open (empty-but-200 states, NOT fixed; hiding them touches
component render, which is Step 3 data-driven-nav work):**

- **Empty "BY SECTOR" nav column.** `SECTOR_SOLUTION_NAV` is now `[]`, but
  `SolutionsDropdown`, `Footer`, and `MobileMenu` still render a "BY SECTOR" heading +
  icon above it → a labelled column with no links. Hide the column when the array is
  empty.
- **Empty "By Sector" section on `/solutions`.** The page filters
  `category == "industry"` (0 docs post-migration) and renders `<Sector solutions={[]}/>`
  → an empty section visible to any visitor, independent of nav. Hide the section when
  there are no industry solutions.
- **`/services` silently omits `ai-automation`.** It has `category: null`, so it falls
  outside the design-development / growth / support groups and never lists. Not an empty
  state (the page renders the other 15 fine) — expected for a taxonomy-only service, but
  recorded so it is not mistaken for a bug later.

**Dead-end sweep — confirmed clean:** `/legal` (both categories populated: 3 + 4),
`/services` groups (5 / 5 / 5), `/blog` (9 posts, 1 featured), `/case-studies` filters
(options are guarded by `references() > 0`, so no filter selection can return empty).

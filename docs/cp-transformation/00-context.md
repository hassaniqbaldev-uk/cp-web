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
| D9 | Pricing deferred | Investment module must be designed to work without numbers. See section 7 |
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
| D18 | The warranty claim is **blocked from publication** | Supersedes D12's "align to the legal hub". No 3-month post-launch clause exists there. See section 9 |
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

---

## 5. Decisions open

| ID | Question | Owner | Blocks |
| --- | --- | --- | --- |
| **O8** | **Content platform consolidation. Recommendation is Option A, validated at 8–10 days.** See `CP-00K-content-platform-decision.md` | **Hassan** | **CP-01 onward** |
| **O11** | **Taxonomy reconciliation ruleset. Must be approved before migration scripting.** See `CP-00K-taxonomy-reconciliation.md` | **Hassan** | **The O8 migration itself** |
| O3 | When does pricing get published, and at what figures? | Hassan | CP-11 investment module content |
| O4 | Will clients be approached for outcome data? Recommended, and drives flagship quality | Hassan | CP-12, Phase 7 |
| O5 | Which of the 31 existing case studies get archived | Hassan, after CP-01 | CP-12 |
| O6 | Which industry pages survive: Interiors & Furnishings, Driving Schools, Pharmacies, Restaurants | Hassan | **Pulled forward by D28.** Now expressed as `hasPage` flags, so it is reversible and no longer blocks the migration |
| O9 | Cal.com link views on the booking page. Did prospects click and abandon, or never click? See section 6 | Hassan | Whether D8 is the right fix |
| O12 | Confirm no case-study taxonomy slug appears in a live URL before normalising the malformed ones | Claude Code | Slug normalisation step |

Closed: O1 → D17. O2 → D14. O7 → D19. O10 → already scoped to the `cp-web` repo, no
action required.

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

Deferred (D9). This still has build consequences, so the investment module is
specified now:

- It must be designed to read correctly with no figures present, not built with a
  gap to retrofit across nine P1 pages later.
- Use contextual framing, not a bargain menu. Pattern: a scope statement plus a
  "what changes the price" line.
- Example with no number: *Scope depends on platform, integrations, catalogue
  complexity and functionality.*
- When figures are approved, they drop into a single content source, not nine
  hardcoded page templates.

Indicative internal figures from the original brief, **not approved for
publication**: Branding £1,000, Web Design & Development £1,500, Ecommerce £3,500,
Growth retainers £300/month, Custom App Development £5,000, AI & Automation ~£1,500.

Payment options are publishable: staged project payments, and monthly arrangements
where appropriate.

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

If outcome data is wanted for flagship case studies, it has to be requested from
clients. See O4.

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

### Status: blocked from publication (D18)

CP-00 searched the legal hub and **found no 3-month post-launch warranty clause**. The
Support & Maintenance Schedule covers ongoing retained support, which is a different
thing. Terms of Service §9 and §15 were checked directly.

So the position is: this is real practice with nothing contractual behind it.

Publishing a warranty the terms do not support is the invented-guarantee case that
section 11 prohibits. It is also the kind of claim a client can hold you to. The
warranty therefore does not appear on any page until the terms are updated, which is
a legal document change and may warrant a solicitor's eye rather than a copy decision.

Until then, no page carries a warranty module, and no copy references a warranty
period.

Working marketing copy, held until the terms exist: *If something we've built isn't
working as agreed during the warranty period, we'll put it right.*

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

# 13 — Implementation Status Log

Running log for the CreativePixels transformation programme. Newest entries at the
top of each section. This file is the source of truth for "what has actually been
done to the repo", as opposed to the plan. A future session with no chat history
should be able to reconstruct the state of play from here.

---

## Programme state

| Item | Value |
| --- | --- |
| Current task | **CP-02 — future sitemap, UPDATED with Hassan's confirmations, awaiting FINAL approval** (`04-information-architecture.md`). Nav locked (D40, 7 items); D41 paid-media slug; D42 growth-and-support slug; O14 CLOSED (security stays a service, meta restored); D43 migrations+accessibility → Web & Ecommerce; D44 four-industry set. navLabels fixed on staging (WordPress, Paid Media). Ivy & Duke excerpt fixed. Nothing implemented. Next: Hassan reads the full doc, then CP-03. |
| Branch | `development`, reading the new project's **staging** dataset (`4m0eqoi1` / `staging`). Not merged to main |
| Started | 12 August 2026 |
| Sign-off authority | Hassan |
| Status | CP-00 + Step 1 done. O8/O11 signed off. **CP-00K consolidation executed on `development` against staging**: five Sanity projects → one, code wired to one client, field renames, draft-mode + revalidation routes, nav regression + dead-end fixes, form spam fix. Production still reads the five old projects. Nothing merged; no Vercel production change |

### Standing working rules (apply every task)

All work stays on `development` reading the **staging** dataset until the full brief is
complete and Hassan signs off final cutover.

- Commit to `development`, never to `main`. Never merge to `main`; never ask whether to.
- Never change a Vercel **production** environment variable.
- Never write to the five old Sanity projects — they stay read-only as the rollback path.
- The live site keeps reading the old projects until final cutover.
- Keep `development` up to date with `main` as work proceeds; flag conflicts that need Hassan.
- Keep this file current with every task.
- At the end of each task, state plainly what is safe to review on staging and what is unfinished.
- **Content editing = Option 2 (decided 21 Aug 2026):** build everything first, then ONE Sanity Studio
  setup pass at the end. **No Studio field definitions are added during the build.** Every custom field
  goes in `custom-fields-registry.md` as it is created (that doc is the Studio-setup handover).
- **Until the Studio pass, all copy changes come through Claude, not the Studio** — the new fields have no
  Studio definitions yet, so editors cannot change this copy in Sanity. Route copy edits through the build.
- **Mutation rule (24 Aug 2026, after `createOrReplace` dropped fields three times): NEVER `createOrReplace`
  a document that already exists — use `patch { set: {...} }`, which only touches the named fields and
  cannot drop an unlisted one.** `create` / `createOrReplace` is allowed ONLY for a genuinely new document
  authored from a complete template (nothing to drop). Every field-level edit to an existing doc is a patch.
  This is the single rule that would have prevented all three incidents below.
- **Layout / UI-preservation verification rule (25 Aug 2026, after the About-hero slider clipped):** a page
  overflow check (`scrollWidth - clientWidth === 0`) does NOT catch content clipped INSIDE a fixed-height or
  `overflow-hidden` container — cut-off carousels, wrong widths and clipping all pass it. When a page is
  changed, ALSO verify:
  1. **Content vs container, not just page.** For changed sections, measure that key content (sliders, cards,
     images, text blocks) fits WITHIN its container: content bottom/right ≤ container bottom/right. A section
     with a fixed `h-[…]` is a red flag — adding content pushes the rest past the fixed height and it clips.
  2. **Carousels/sliders:** each slide AND its controls (arrows) must fit the container/viewport.
  3. **Measure LAYOUT, not just `getBoundingClientRect`.** `MotionEffect` slide/zoom transforms and
     scroll/inView animations don't settle in the headless pane, so `getBoundingClientRect` reads the shifted
     visual box (false positives/negatives). Use `offsetTop`/`offsetHeight` (transform-independent) for
     fit checks, and WAIT for `ssr:false` dynamic components (sliders) to mount before measuring.
  4. **Reference comparison:** to tell "I broke it" from "already broken", measure the unchanged version
     (git-stash the change, or a sibling page) and compare the delta — do not guess; check the diff.
  This sits alongside the aggregate-query rule. **Standing rule (Hassan, 25 Aug): when you change a page,
  check you have not broken the existing layout or UI on it — preserving what works is part of the job.**
- **Batch-completion verification rule (24 Aug 2026, after the count drifted):** at the end of EVERY batch,
  run an **aggregate query across the whole set** (e.g. `*[_type=="services"]{slug, modularLayout}`) and
  report the actual count **from the data**, never from Claude's own tracking. Never claim a batch complete
  without it. This applies going forward to Solutions, Industries and case studies too — the same gap
  (verifying items individually while never querying the total) is how a count silently drifts. What went
  wrong once: ui-ux-design (Batch C) was skipped and dropped from tracking, and "18/18" was asserted when
  the real count was 17/18; a single aggregate query would have caught it.
- **Copy standing rule (21 Aug 2026):** write confident, SEO-driven, conversion-focused copy on every page;
  invent and shape capability descriptions, positioning, benefits, process and FAQs as needed (Hassan
  proof-checks at the end). **The one exception:** never invent client outcomes, results, metrics or
  testimonials, or what any named client achieved — those are the only claims a client can contradict.
  Confirmed facts Hassan provides (e.g. the Biome4Pets 3-days→1-day result) are usable as given, not added to.

---

## Full site audit written (26 Aug 2026, review only, nothing changed)

Reviewed every page on staging-cp.vercel.app against "premium £5k agency?" and wrote
`docs/cp-transformation/full-site-audit.md`. Gathered via 4 parallel subagents + direct HTML checks.
Headline: strong structure/copy, but held at "very competent" by (1) low price anchor, (2) missing
case-study outcomes vs the "measurable impact" promise, (3) unfinished edges — "0+" stat counters
(homepage + About), dead Careers "Apply Now" buttons, and 3 legacy industry pages (driving-schools,
pharmacies, restaurants) showing wrong-sector fallback work under a specialism claim. Corrected two
subagent false-alarms: meta descriptions ARE present site-wide and FAQ answers DO render (fetcher
artifacts). Cutover risk is mostly redirect gaps (brand-query/homepage traffic is otherwise resilient).
Doc includes per-page notes, the 3 cross-cutting assessments (paid readiness, SEO coverage, cutover risk),
prioritised P0–P3 recommendations, and 6 questions for Hassan (chief: the £5k-vs-from-£1,500 positioning
call). No code/data/site changes.

## Homepage → Sanity migration PLAN drafted (26 Aug 2026, plan only, awaiting approval)

Wrote `docs/cp-transformation/homepage-migration-plan.md` per Hassan's request (plan, not build).
Recommends a **structured `homepage` singleton with fixed sections (copy-only fields), NOT a page builder** —
so section order/layout stay structural in code and only text/links become editable (preserves the tuned
design). Covers: the singleton shape + why; editable-vs-structural per section; effort (~1 reviewed session,
section-by-section with checkpoints); layout risk (low for the migration itself — string-for-prop swap;
guard editor-entered copy with length/count validation, keep the hero gradient line its own field). Triage
of the rest of the developer-only list: migrate homepage (first), pricing, company facts + footer details
(one small siteSettings singleton); unify nav eventually (Services menu is Sanity, footer/mobile/Solutions/
About are hardcoded — a drift risk); keep section-default copy, metadata mechanics and redirects in code
(only the homepage's own title/description move to the singleton). Nothing built.

## Sanity batch — testimonial migration + Studio schema pack (26 Aug 2026, committed)

Built but NOT yet committed — awaiting Hassan's before/after sign-off on the bento rebuild.

**Testimonial migration (item 4a):**
- New `testimonial` type authored; 11 corrected docs created in `staging` with 11 avatars + the AlertForce
  featured image uploaded as Sanity assets (via the assets API + safe-mutate `create`).
- New `src/sanity/queries.testimonials.js` + `src/sanity/testimonials.js` (`getTestimonials`, cached,
  resolves image URLs server-side so the client components never bundle the Sanity client).
- Rewrote `Testimonials.jsx` (homepage bento data-driven) and `Testimonials2.jsx` (/testimonials, was already
  array-mapped) to be prop-driven; sliders unchanged (data normalised to their `{text, avatar}` shape).
- New server wrapper `TestimonialsSection.jsx` fetches + renders for the 6 server pages (about, audit,
  how-we-work, partner-with-us, service detail, solution detail). Homepage (client) gets the data threaded
  from `(home)/page.jsx`; `/testimonials` fetches in its page. All hardcoded testimonial arrays removed.
- **Before/after measured at all three widths.** Homepage bento at 1440 is **pixel-identical**: grid
  391.328×391.328×391.344 / rows 315.5×315.5 / gap 13 / width 1200; card 0 (Brendan) L0 T0 391×644 row-span-2
  with featured image, card 1 (Sandra) L404 T0 391×315, card 2 (Ben) L809 T0 391×315, card 3 (Alex) L404 T329
  796×315 col-span-2 — every value matches the pre-rebuild capture. Sliders: per-slide width identical
  (768→364, 375→335), no overflow. `/testimonials` featured+grid intact (row-span-2 + last col-span-2).
  Images verified to load (avatar SVG 100×100, featured PNG 640×400).
- **ONE deliberate change, flagged:** the mobile slider previously showed a hardcoded arbitrary 4; data-driven
  it now shows all 11 (swipeable). The arbitrary subset wasn't derivable from clean data. Per-slide layout
  unchanged; awaiting Hassan's ok (or a slice-to-4 if preferred).

**Studio schema pack (item 4b):** `docs/cp-transformation/studio-schemas/` — paste-ready v3 files:
`objectTypes.js` (5 reusable objects), `testimonial.js`, `customFields.{services,solutions,industries,
caseStudies}.js`, and a `README.md` handover (how to apply, which type gets which fields, desk structure,
data-population, cross-field deps, and the honest editable-vs-needs-a-dev summary). **Registry correction
captured:** industries + solutions use the full shared content field set (registry listed only `hasPage`
for industries and omitted solutions). Editability answer: per-page document content becomes editable;
the whole homepage, footer/mobile nav + contact details, pricing, company facts, section default copy,
route metadata and redirects stay in code and need a developer.

## Null-slug cleanup + industries "What we build" tightening (26 Aug 2026, STOP before Sanity batch)

**Item 2 — deleted 4 null-slug industry docs** (safe-mutate delete; `run()` allows delete, only rejects
createOrReplace/replace). They were orphan duplicates of live industries ("Restaurants", "Driving Schools",
"Pharmacies", "Interiors and Furnishings"), all `hasPage:false`, no slug, **0 references** — so they never
routed or appeared anywhere. After: 0 null-slug docs; industries 46 → 42; live (hasPage) still 12.

**Item 3 — tightened all 12 industries' "What we build" wall 6 → 4** (safe-mutate patchUnset by `_key`),
same principle as services (cut overlap, cross-cutting/generic, or secondary add-ons; keep the four most
sector-defining). Expertise3 grid already adapts (4 → 2×2). Verified restaurants/pharmacies/b2b at
1440/768/375: 2×2, cuts gone, no overflow. Cuts per industry (what was removed):
- b2b-services: Interactive tools (sub-feature), Events and webinars (secondary channel).
- charities-non-profits: Accessibility (cross-cutting standard + own service), Content your team controls (generic CMS).
- driving-schools: Student Apps/Portals (add-on), Review Automation (tactic).
- ecommerce-brands: Complex migrations (own migrations service), Headless commerce (niche).
- education-edtech: Accessibility (cross-cutting + own service), Content management (generic CMS).
- home-improvement-interiors: Configurators and tools (conditional add-on), Content you control (generic CMS).
- media-and-publishing: Rich media and galleries (⊂ article pages), Search and discovery (feature); kept both monetisation pillars.
- pharmacies: Mobile App (add-on), Track & Trace (secondary feature).
- property-marketing: Location and area detail (⊂ showcase), Portfolio and past projects (overlaps showcases).
- restaurants: Social Proof (widget), Event Ticketing (niche/venue-only).
- technology-saas: Headless and modern stacks (implementation detail), Analytics and integration (generic + own service).
- travel-hospitality: Performance (cross-cutting + own speed service), Content management (generic CMS).

## A11y sub-pass — footer/nav headings, touch targets, icon alt (26 Aug 2026, STOP for review)

The queued a11y sub-pass. Verified 375/768/1440 — no overflow, no layout regression, and a DOM audit
found **0 unnamed interactive controls** afterwards. Not pushed.

**Nav headings + landmarks:**
- Mega-menu headings were INVERTED — each column's pillar/group name was a plain `<span>` while every link
  label was an `<h5>` (polluting the heading outline, no group headings for AT). Fixed across all three
  dropdowns (`ServiceNavColumn`, `SolutionsDropdown`, `AboutDropdown`): group name → `<h3>`, link label → `<span>`.
- Header + HomeHeader main `<nav>` → `aria-label="Primary"`; MobileMenu `<nav>` → `aria-label="Mobile"`;
  both footer nav grids → `role="navigation" aria-label="Footer"`. (Footer already had `<h5>` column headings
  and Radix accordions, which are accessible.)

**Touch targets (WCAG 2.5.5 44px):**
- Hamburger (Header + HomeHeader) and mobile close button: 33px → 44px.
- MobileMenu social links: 39px → 44px. (Footer social already 57px; carousel arrows/autoplay already labeled.)

**Per-context icon alt + names:**
- Emptied all decorative alts site-wide (`alt="Icon"` ×71, plus Card Image / Avatar Image / Logo Shape /
  Image / Bg Stroke → `alt=""`) so screen readers skip them.
- Named every icon-only control: social links (`aria-label` ×9), sister-brand footer logos (Creative
  Hosting / WP Fixed / Monthly Designs), logo links ("CreativePixels, home"), hamburger ("Menu" +
  `aria-expanded`), close ("Close menu"), and the two image-only case-study previews in the About dropdown.
- The decorative "Pixel AI" chat mockup in `Contact.jsx` is now `aria-hidden` with its fake input/buttons
  `tabIndex={-1}` (was exposing an unnamed button + fake input to AT and the tab order).

**Flagged (not fixed):** the footer "WP Fixed" sister-brand link has an empty `href=""` (resolves to the
current page) — needs the real URL from Hassan. Lower-priority: some case-study card links inside marquees/
sliders measure under 44px tall; those are content links in a scrolling strip, not the icon controls in scope.

## Testimonials — client-name fixes (26 Aug 2026, STOP for review; Sanity move planned next)

Fixed every RENDERED misspelled client name across both testimonial components. Verified 375/768/1440,
no overflow, no layout regression. Not pushed.

**Names corrected** (checked against each client's own usage, not assumed):
- Casabotanica → **Casa Botanica**; AYOA → **Ayoa**; Alertforce → **AlertForce**; 3DCAD/3dcad visuals →
  **3D CAD Visuals**; Little Astro → **Little Astronauts**; Express-conveyancing. → **Express Conveyancing**.
- Web-verified: Safety Rac → **SafetyRAC** (safetyrac.co.uk); PolyMax → **Polymax** (polymax.co.uk casing).
- **FLAGGED, unresolved:** "Homecare" and "Loop" are too generic to verify from public search — left as-is,
  Hassan to confirm against client records.

**Two components, and why the Sanity move is a rebuild not a swap:**
- `Testimonials2.jsx` (`/testimonials`) is array-driven (featured + grid) → easy to make Sanity-driven.
- `Testimonials.jsx` (homepage Reviews + about/audit/how-we-work/partner-with-us/service+solution detail)
  renders a **hardcoded bespoke bento grid** (4 hand-coded cards with row/col spans + 2 featured images) for
  desktop, plus an array-driven mobile slider. Its 10-item `testimonials` array is DEAD (only
  `responsiveTestimonials` feeds the slider). The two components' datasets had **diverged** (different
  spellings) — exactly the argument for one Sanity source.
- So "move to Sanity" = author a `testimonial` doc type, upload the 11 avatars (+2 featured images) as
  assets, create 11 corrected docs, add a GROQ query + a cached server wrapper, and **rebuild the hardcoded
  bento data-driven** while preserving the layout, then wire ~10 render sites. That touches a tuned layout,
  so per the flag-structural-changes rule it is presented for approval as the reviewed next step, with the
  schema below, rather than rushed into a stop-for-review checkpoint. The dead array + stale strings get
  deleted as part of that rewrite (left untouched for now to avoid churning code about to be replaced).

## "What We Do" tightening — 6 cards → 4 on all 18 services (26 Aug 2026)

Approved density fix. Cut 2 of the 6 `expertise.card` items on each service (safe-mutate patchUnset by
`_key`), keeping the four strongest, most-distinct capabilities. Principle for cuts: drop the card that
(a) overlaps another card, (b) restates a quality/cadence rather than a capability, or (c) repeats a
site-wide promise (post-launch "support" cards appear on 5 services and are covered by the warranty +
growth-and-support service + CTA). `Expertise3` desktop grid now adapts: 4 cards → `grid-cols-2` (2×2),
6 cards (industries, untouched) → `grid-cols-3`. Verified: service = 4 in 2×2 (no orphan), industries = 6
in 3-col, no overflow at 1440/768/375. Cuts per service (kept → cut):
- accessibility: cut "Documentation and evidence" (admin detail), "Built in, not bolted on" (positioning).
- ai-automation: cut "Speed up the work you already do" (⊂ Automate your processes), "Set you up to use AI well" (advisory).
- analytics: cut "Data you can act on" (⊂ Reporting), "Privacy and consent" (compliance detail).
- branding: cut "Brand collateral" (minor output), "Ready for the web" (cross-sell bridge).
- cro: cut "User behaviour insight" (⊂ Conversion audit), "Ongoing improvement" (cadence).
- custom-app-development: cut "Built to last" (quality), "Supported after launch" (site-wide promise).
- ecommerce: cut "Connected to your operations" (integration detail), "Supported after launch" (site-wide).
- email: cut "Deliverability" (hygiene), "Testing and reporting" (measurement).
- growth-and-support: cut "Performance upkeep" (⊂ maintenance + speed service), "Priority support" (restates premise).
- migrations: cut "Testing and launch" (universal step), "Supported after the move" (site-wide promise).
- paid-media: cut "Conversion tracking" (⊂ analytics service), "Reporting on ROI" (measurement).
- security: cut "Updates and patching" (⊂ hardening/maintenance), "Backups and recovery" (⊂ growth-and-support).
- seo: cut "Content that ranks" (⊂ keyword strategy + on-page), "Reporting and strategy" (measurement).
- shopify: cut "Apps and integrations" (add-on), "Supported after launch" (site-wide promise).
- speed: cut "Core Web Vitals" (the measured outcome of the other four; still in title/H1), "Keeping it fast" (maintenance).
- ui-ux-design: cut "Ecommerce and product pages" (⊂ interfaces), "Usability" (cross-cutting principle).
- web-design-development: cut "Connected to your tools" (integration detail), "Supported after launch" (site-wide).
- wordpress: cut "The right editing experience" (⊂ Content your team can run), "Security and maintenance" (own services).

## Industries launch — 9 → 12 live (26 Aug 2026)

Hassan approved launching restaurants, pharmacies, driving-schools (sme-founders stays off — audience
positioning, would compete with the solutions layer). Built on `development` / staging, not pushed.

- **hasPage flipped true** on the three (safe-mutate patchSet). Now HTTP 200; the hub (`INDUSTRIES_QUERY`
  filters `hasPage==true`) auto-lists 12; nav links to the `/industries` hub as one item (no per-industry
  dropdown), so no nav code change. Hub verified at 1440 (3-col grid, 12 = 4 clean rows), 768 and 375
  (swiper slider below xl) — 12 unique cards, no overflow at any width.
- **Legacy redirects repointed** (`next.config.mjs`): `/solutions/{driving-schools,pharmacies,restaurants}`
  were → `/services/web-design-development` (generic) / `/industries/travel-hospitality`; now → their own
  `/industries/<slug>` (308 verified), recovering the sector search value. CP-15 flag 3 closed.
- **Titles/descriptions confirmed** correct on all three (some were fixed in P1/P2 while the docs 404'd):
  restaurant/pharmacy/driving-school website-design titles + audit-based descriptions, no dead CTA.
- **Curated vs fallback work:** restaurants was curated with dr-donuts + the-smokey-carter, but on review
  that OVERCLAIMED — the curated heading asserts "we did exactly this kind of work in this sector", and
  neither is a restaurant booking/ordering build (a donut-shop brand site + a BBQ product brand). Reverted
  restaurants to the honest fallback ("Recent work… across sectors"), same as pharmacies + driving-schools.
  So all three new pages rely on the fallback — evidence for these three sectors is genuinely thin.
- **Honest content read (Hassan asked):** all three read WELL now live — sharp, sector-specific problem/
  build/FAQ copy (restaurant delivery-tax + HTML menus; pharmacy NHS/EPS/GPhC; driving-school automated
  bookings + catchment SEO). No client-outcome invention (capability copy only). Minor shared-default nit:
  the Expertise3 sub-heading reads "we don't just 'install themes' we engineer solutions" (missing a dash) —
  site-wide default, not specific to these three.

**Tagged/curated work across the 12 (answer to "where is the evidence thin"):**
- Genuinely curated (own tagged sector work): b2b-services, charities-non-profits, ecommerce-brands,
  education-edtech, home-improvement-interiors, media-and-publishing, property-marketing, technology-saas,
  travel-hospitality (9).
- Fallback "Recent work" (thin/no sector work): restaurants, pharmacies, driving-schools (3).

## CRO revision P2 item 1 — service template reorder (26 Aug 2026, STOP for review)

Approved order built in `services/[slug]/page.jsx` (modular branch, affects all 18 service pages at once).
Two moves, per the CRO review: **Recent Work (proof) up from position 7 → 4** (above "What We Do", so the
page shows before it explains), and **SpecialistLinks (specialist cross-links) down from 5 → 10** (after
the sell, before FAQs, so it no longer sends a buyer off-page mid-argument). New order:
Hero → Parent band (if child) → Why it matters → Recent Work → What We Do → How It Works → Case highlight
(if one) → Is this right for you → Investment → Part of the Offer → FAQs → Closing CTA (two-tier).
Verified on `/services/web-design-development` at 1440/768/375 by section offsetTop: proof(1589) → What we
do(2822) → How it works(3871) → fit(5286) → Investment(6018) → Part of the offer(6973) → FAQs(7680) →
CTA(8387); proof-before-what-we-do and specialisms-before-FAQs hold at all three widths, no overflow.
STOPPED for Hassan's review before industries. Queued next (approved): launch 3 of the 4 industries
(restaurants, pharmacies, driving-schools; NOT sme-founders) → 12 industries; then the "What We Do"
6→4 tightening pass (report cuts + reasons per service).

## CRO revision P2 — SEO ownership (CP-09) + stat animation (26 Aug 2026)

Two of the three P2 items done; the service-template reorder (item 1) is STOPPED for Hassan's approval
(structural, changes every service page at once). Built on `development` / staging, not pushed.

**Item 2 — SEO keyword-ownership pass (CP-09).** Wrote the ownership map the brief specified to
`docs/cp-transformation/07-keyword-ownership.md`: one primary intent per page across a three-layer model
(services = capability, solutions = goal, industries = audience), so pages in different layers can touch
the same topic without competing. Web-build cluster resolved: the 4 service pages already differentiate
cleanly (no change); the real collision was `industries/ecommerce-brands` ("Ecommerce Web Designing
Company") competing with the `services/ecommerce` capability page — retargeted to the audience term.
Sanity fixes (safe-mutate patchSet), all on the 9 LIVE (`hasPage==true`) industry pages except where noted:
- `ecommerce-brands` title retargeted (+ dropped dead "Call").
- `home-improvement-interiors`, `pharmacies` titles reframed off CTA-in-title suffixes.
- `education-edtech`, `media-and-publishing`, `property-marketing`, `technology-saas`, `travel-hospitality`
  — were live with NO metaTitle AND NO metaDescription; authored both for each (~150-char descs).
- Services (18) + solutions (4) titles/H1s audited — already keyword-led title + benefit-led H1; no change.

**⚠ Biggest finding (flagged, NOT actioned — needs Hassan):** four industry docs — `restaurants`,
`pharmacies`, `driving-schools`, `sme-founders` — have complete, polished content + SEO but `hasPage:false`,
so the route `notFound()`s them: **they 404.** They own strong commercial audience intents (restaurant /
pharmacy / driving-school / small-business website design) that nothing currently serves. Nothing links to
them (not broken links, just orphaned launch-ready content). Decision needed: launch (flip `hasPage` + add
to hub/mega-menu + curate work) or keep deferred. Did not flip `hasPage` — launching pages is a
content/IA call under the standing rules. NOTE: some P1/P2 title/desc "fixes" (driving-schools, sme-founders
titles; restaurants desc; pharmacies title) landed on these 404 docs — harmless, staged-correct for launch.

**Item 3 — stat animation trigger fixed.** `Counter` (`components/ui/Counter.jsx`, used by `Stats` on
`/about`) left the number stuck at **0** for reduced-motion users and any case where the in-view observer
never fires, because both the animation and the value were gated behind `isInView`. Split into two effects:
reduced-motion now `count.set(value)` immediately, ungated from scroll; full motion animates on in-view
(added a `-15%` bottom root-margin so it lands as the section settles). Build clean; no runtime errors.
Count-up itself could not be scroll-triggered in the headless pane (pane scroll is inert) — flagged for a
visual check on staging; reduced-motion path verified by code + no-overflow at 1440.

---

## CRO revision P1 — approved batch built (26 Aug 2026)

Hassan approved all three gates. Built on `development` / staging; verified 375 / 768 / 1440; not pushed.

**1. Four industry meta titles fixed** (safe-mutate patchSet on `seo.metaTitle`): b2b-services, charities-non-profits,
driving-schools, sme-founders — dropped the "Free Consultation/Strategy Call" tail (title promising a call the
site does not offer), reframed to `keyword | benefit`. No description now, and no title, promises a call.

**2. Two-tier CTA rolled site-wide.** `ServicesHubCta` `secondaryAudit` prop enabled at every approved call
site — services hub (`services/page.jsx`), service detail (`services/[slug]`, all slugs — removed the
wordpress-only guard), solution detail, industry detail. Homepage final CTA handled separately: `Contact`
got a `secondaryAudit` prop (default off) rendering the same subordinate audit line at the bottom of its
left column (dark text, since the homepage Contact sits on the light audit-hero bg); passed ONLY from
`HomePage.jsx`. Confirmed the link is ABSENT on `/contact` and `/audit` (Hassan's guard — offering an audit
on the audit page, or a second CTA on the enquiry page, is nonsense) and on `/call` and the hub pages.

**3. Homepage restructured to 8 sections below the hero.** Cut the standalone Web & Ecommerce `PillarFeature`
block (duplicated the pillars + Selected work; the three Selected-work studies — Ayoa, AlertForce, Minnessak —
are themselves web/ecommerce) and the `Lifecycle` section; Web & Ecommerce keeps its weight by leading the
pillar order. Removed the now-unused `webEcommerceWork` fetch + `WEB_ECOMMERCE_WORK_SLUGS` import in
`(home)/page.jsx`. Order: Selected work → four pillars → AI & Automation feature → Why (trimmed to four) →
Founder → Reviews → Investment → Contact. **Why (Established) trimmed 6 → 4** reasons (Owner-led, A
specialist team, Commercially focused, Here after launch; dropped Custom-where-it-counts + Real-technical-depth,
already carried by the pillars/AI). Grid now 2×2 (`md:grid-cols-2`, was `xl:grid-cols-3`) — verified 2 cols
at 1440/768, 1 col at 375, no orphan card.

**4. Case study cards reframed to transformation.** All **33** `excerpt` fields rewritten to
"starting point → what we built" (safe-mutate patchSet). Facts drawn ONLY from the existing excerpt/title —
no invented before-states or outcomes; biome4pets keeps its Hassan-confirmed "200 reports, 3 days → 1".
Updates every card surface at once (homepage Selected work, service/industry curated grids, the /case-studies
hub). Verified on the hub at 375: 30+ arrow excerpts render, no overflow.

**5. Contact message field made optional.** Removed the `required` attr + the client `validate` rule + the
server `!message` 400 check (`api/contact/route.js`); label now "And message (optional)". Team email template
falls back to "No message provided" when blank (customer template already guarded).

Verified 375 / 768 / 1440: homepage no overflow at any width, Why grid correct, audit link scoped correctly,
transformation excerpts render. Clean `npm run build`.

---

## CRO revision P1 gate 1 — two-tier CTA treatment (26 Aug 2026, awaiting approval to roll wide)

Built the audit-as-secondary-step into the real closing CTA, `ServicesHubCta` (NOT `Cta2` — all services
are `modularLayout:true`, so the legacy `Cta2` branch is dead; `ServicesHubCta` is the actual closing CTA
on the services hub, every service detail, every solution detail, every industry detail).

- New `secondaryAudit` prop (default **false**). When on, renders beneath the primary "Start a project"
  button + reassurance line: a muted lead-in "Not ready to commit?" + a small underlined white text link
  "Get a free website audit →" to `/audit`. Deliberately NOT a second equal-weight button — solid pink
  primary vs. 15px underlined text link, so the hierarchy is unmistakable (Hassan's constraint: the
  fragmentation from competing equal CTAs is exactly what kept the audit off these pages before).
- Enabled on **only** `/services/wordpress` (`secondaryAudit={slug === "wordpress"}`) so the treatment can
  be reviewed before site-wide rollout. Confirmed every other page is unaffected (e.g. /services/security = 0).
- Verified 1440 / 768 / 375: link present, stacks below the button + reassurance, no overflow at any width.
- `/audit` ("Free Website Audit") is a live page linked site-wide, so this points to a real offer.

**Gate:** awaiting Hassan's approval to (a) roll `secondaryAudit` across service + solution + industry
detail pages + the services hub, and (b) add the same treatment to the homepage final CTA.

**Also queued for approval:** the homepage restructure section order (below), before any build.

---

## CRO revision — 11 "free call" meta descriptions fixed (26 Aug 2026)

Hassan pulled this forward from P2: meta descriptions promising a call are broken promises at the point
of first contact (a Google click-through lands on a page with no call anywhere).

**Key finding that scoped it correctly:** there **is** a live `/audit` page ("Free Website Audit"), linked
from the global header/nav on every page (`Header.jsx`, `HomeHeader.jsx`, `MobileMenu.jsx`, dropdowns).
So descriptions promising a **free audit** are NOT broken — that offer exists and is one click away; they
stay. The genuinely broken set is descriptions promising a **call / consultation / strategy call**, an offer
that exists nowhere. That set is **11 docs** (Hassan's "ten" + one).

Rewritten via `safe-mutate` `patchSet` on `seo.metaDescription` (all 140–158 chars, service-desc rules):
- **Case studies** (casa-botanica-panama, ndifo-safari, now-press-play): describe the work + "Explore the
  case study"; removed invented-outcome tails ("more trial enquiries", "results") in the process.
- **Legal pages** (support-and-maintenance-schedule, data-processing-agreement, terms-of-service): describe
  the document, no sales CTA (a legal page should not push an offer).
- **Industries** (restaurants, sme-founders, b2b-services, charities-non-profits, driving-schools): point to
  the live **free website audit** (the real lesser-commitment offer) instead of a call.

Verified: 0 descriptions now match free call / strategy call / free consultation / 15-minute consultation.

**FLAGGED for Hassan, NOT changed (explicit scope was descriptions):** 4 industry meta **titles** still
promise a call in the more-prominent SERP line — `b2b-services` ("Book Free Consultation Online"),
`charities-non-profits` ("Free Consultation Call"), `driving-schools` ("Free Consultation Call Now"),
`sme-founders` ("Free Strategy Call"). Fixing the description but leaving the title promising a call is
incoherent. Proposed replacements ready; awaiting go. (The 3 "Free Audit" industry titles are fine — audit
is live.)

---

## CRO revision P0 — CaseStudiesHero honesty + stale meta titles (26 Aug 2026, STOP for review)

From the approved CRO review (`cro-review.md`). P0 only; P1/P2 not started. On `development` / staging.

**1. CaseStudiesHero rewritten (`/case-studies` hub hero).** Two files, kept in sync:
`src/components/sections/hero/CaseStudiesHero.jsx` (desktop `grid-cols-3`) and
`src/components/ui/CaseStudiesHeroSlider.jsx` (mobile swiper, `ssr:false`).
- **Removed the fabricated "65% Faster Load Times" stat** (no evidence exists) from both. Replaced the
  third card with **"12+ Years of Delivery"** — a true, defensible figure single-sourced from
  `YEARS_IN_BUSINESS` (`FOUNDED_YEAR = 2013`). Also single-sourced the "200+" card to `PROJECTS_DELIVERED`
  so the two numbers can no longer drift from the homepage.
- **H1: "Real work. / Real results." → "Real work. / Real clients."** — drops the unsupportable "results"
  claim, keeps the two-part gradient structure; "real clients" is literally true (named clients on the page).
- **Subhead replaced** the generic "helped ambitious brands… scale their digital presence" with work/scope
  framing: "Named clients, real briefs, and the work behind each one. Explore projects across brand, web,
  ecommerce and growth — what we set out to do and how we built it." No metric/outcome claims.
- **Surviving stats are all defensible:** 100% Custom Designed Sites, 200+ Projects Delivered, 12+ Years.

**2. `/case-studies` route metadata fixed** (`src/app/(site)/case-studies/page.jsx`) — same unsupportable
claims were in the SEO tags: title "…& Real Results" → **"Website Case Studies & Client Work | CreativePixels"**;
description "…strategy and **measurable growth**…" reworded to work/scope, no metric claim.

**3. Stale "Free Strategy Call" case-study meta titles fixed** in Sanity via `safe-mutate` `patchSet`
(never raw createOrReplace). Three docs carried a dead CTA offer in `seo.metaTitle`; reframed to the site's
`Client | keyword phrase` convention:
- the-smokey-carter → "The Smokey Carter | BBQ Restaurant Website Design Case Study"
- casa-botanica-panama → "Casa Botanica | Luxury Villa Website Design Case Study"
- ndifo-safari → "Ndifo Safari | Luxury Safari Website Redesign Case Study"

**4. "15+" homepage stat — verified.** `src/components/sections/stats/Stats.jsx`: `<Counter value={15} />`
labels **"Team Members"**. It counts team/staff size, not projects or clients. It is a self-reported
company figure, not a client outcome — flagged to Hassan to confirm the headcount is current (see report).

**Flagged, NOT actioned (out of P0 scope):** 10 docs (caseStudies + legalPage + industries) still carry
"book a free call / free strategy call" boilerplate in `seo.metaDescription`. Same dead-CTA pattern as the
titles but broader; slotted into the **P2 SEO ownership pass**, not fixed now.

**Verified** at 1440 / 768 / 375: no "65%"/"Faster Load Times" anywhere in DOM; desktop `grid-cols-3` holds
exactly 3 cards with no overflow; mobile slider (after mount wait) shows the corrected trio; H1 and both
meta titles serve correctly; `docScrollW ≤ vw` at all three widths. Clean `npm run build`. Committed to
`development`, not pushed.

---

## Batch C — UI/UX Design built; 18/18 confirmed FROM THE DATA (24 August 2026)

Built the missing brand page (ui-ux-design, Batch C — the one skipped when we went B → A, which made the
earlier "18/18" claim wrong; real count then was 17/18). Verified 375/768/1440 (no overflow).

- Brand & Experience pillar, PEER alongside Branding (specialist:false) → **no parent band**. From £1,500,
  warranty off (design work, not a build).
- **Concrete copy, not generic process** (per Hassan): covers websites, apps, ecommerce and products;
  capability cards name the actual work; the "how we design" section is about decisions (job → structure →
  detail → buildable), not a discovery/wireframe/prototype/test template.
- Cross-links (4): Branding (peer) + Web Design & Development + Ecommerce + Custom App Development ("Where
  our design work fits").
- **Evidence:** the two genuinely design-LED cases only — `now-press-play` (flagship, Webflow design) +
  `junior-jam` (Figma + developer handoff). Excluded `ao-arena` (a pitch concept, not delivered, per the
  audit) and `peekaboo` (archived/uncertain). Two real cases, not padded.

**AGGREGATE QUERY RUN (the new standing rule): `*[_type=="services"]{slug, modularLayout}` → TOTAL 18,
MODULAR 18, NOT 0. All modular, confirmed from the data.** The service-page migration is genuinely complete.

## CP-07 — Solutions (hub + 4 goal pages + Scale Marketing merge) — COMPLETE

Solutions brought onto the SAME modular pattern as services (shared components, data-driven). A GOAL page
has no pricing (a goal is reached via services, not priced on its own) and no parent band, so the modular
layout omits Investment and ParentServiceBand; `specialistLinks` point at the SERVICES that deliver the goal.

- **Infrastructure:** `queries.solutions.js` `SOLUTIONS_DETAIL_QUERY` rewritten to the modular shape
  (modularLayout, workSlugs, detailHero.label, heading objects, specialistLinks + specialistLinksHeading,
  caseHighlight, projectShowcase fit/not-fit); `solutions/[slug]/page.jsx` rewritten to the modular gate
  mirroring services minus Investment/parent; legacy fallback preserved.
- **4 goal docs (all modularLayout:true):** increase-leads, replatform-rebuild, launch-new-product,
  automate-operations.
- **Scale Marketing merge (D39):** authored into increase-leads (covers lead-gen AND scaling marketing);
  `scale-marketing` doc deleted; `/solutions/scale-marketing → /solutions/increase-leads` permanent 308 in
  `next.config.mjs`; the stale static `GOAL_SOLUTION_NAV` footer entry removed from `navigation.js`.
- **Evidence honesty:** increase-leads specialistLinks → SEO/Paid Media/CRO/Email (the services that deliver
  leads); replatform-rebuild curated Work → Casa Botanica / Ayoa / Teleqo; automate-operations →
  Biome4Pets caseHighlight (3-days→1-day, a fact Hassan confirmed); launch-new-product `workSlugs:[]`
  (honest opt-out, no work section rather than padding).
- **Goal.jsx guard:** `item.icon?.asset?.url` (was crashing the hub build when a goal doc's icon was
  momentarily absent). Original goal-doc icon asset refs were also recovered from Sanity history and
  patched back (patch, not replace) after a `createOrReplace` had dropped them.

**AGGREGATE QUERY RUN (standing rule): `*[_type=="solutions"]{slug, modularLayout}` → TOTAL 4, MODULAR 4.
All modular, confirmed from the data. scale-marketing gone.** Verified at 375/768/1440: no overflow on hub
or any goal page; hub shows exactly 4 goal cards; scale-marketing 308-redirects.

**Next: CP-08 Industries.**

---

## CP-08 — Industries (checkpoint: hub + ONE page) — STOP FOR REVIEW

New route `/industries` (did not exist before). An industry is WHO the client is (their sector), not
what we do (services) or what they want (solutions). Detail pages reuse the SAME modular components;
copy is about understanding the sector. Only `hasPage == true` industries publish (hub, route static
params and nav query all filter on it) — the expansion contract (D44): turning one on is content, not code.

**Built this checkpoint (per "hub + one page first, then stop"):**
- **Route infrastructure:** `queries.industries.js` (hub / detail / sitemap, all `hasPage==true`-scoped),
  `sanity.industries.js`, `/industries` hub (`HubHero` + prop-driven `Sector` grid + Cta + Contact),
  `/industries/[slug]` detail (modular, no Investment/parent, tagged-first work with newest fallback).
- **Prop-driven refactors (defaults preserve existing behaviour):** `Sector` now takes
  basePath/heading/linkText/id (Solutions hub unchanged) and guards `item.icon?.asset?.url`; new
  `HubHero` (generalised SolutionsHero — SolutionsHero left untouched, can migrate later).
- **One page fully authored — Ecommerce Brands** (`industry-ecommerce-brands`, slug already canonical,
  `hasPage:true`): copy rewritten to CP standard + sector-understanding framing, **stripping invented
  metrics** the legacy copy carried ("scale revenue beyond £1M+", "Every second = 7% conversion drop",
  "90+ Lighthouse", "60% of traffic is mobile", "7-8 figures") and "world's best". Curated work
  (D44 evidence): minnessak, fultons, mr-pickles, the-smokey-carter — all four render.
- **Redirects wired (targets live now):** `/solutions/ecommerce-brands → /industries/ecommerce-brands`;
  held three (`driving-schools`/`pharmacies`/`restaurants` → `/services/web-design-development`);
  `sme-founders → /solutions`. The four whose targets are not built yet (b2b-services, technology-saas,
  charities-non-profits, home-improvement-interiors) are wired **with their pages in the next batch**.
- **Checkpoint hygiene:** the three other legacy-content industry docs that were `hasPage:true`
  (b2b-services, saas-companies, charities-and-foundation) were flipped to `hasPage:false` so the hub
  shows only the built page (they carry off-standard legacy copy; rewritten + reslugged + turned on next
  batch). All by **patch**, never createOrReplace.

**Verified (from data + render):** published industries `hasPage==true` = **{ecommerce-brands} only**
(44 published docs total). Hub HTTP 200 shows one card; detail HTTP 200 renders all modular sections
(partnerWithUs / expertise / methodology / curated work / fit-notfit / 8 FAQs / hub CTA); redirects 308;
no banned phrases; no overflow at 375/768/1440.

**Data findings to resolve in the NEXT (reviewed) batch — not touched yet:**
1. **44 industry docs, two generations:** 9 curated `industry-*` docs (`category:"industry"`) + ~35 legacy
   UUID tag docs (no category) that are the old unreliable taxonomy. Recommend a decision on the 35 before
   any deletion (they may still be referenced; deletion is irreversible).
2. **4 duplicate slugs** (all among `hasPage:false` docs, so harmless to the route which is
   `hasPage==true`-scoped): driving-schools, interiors-and-furnishings, pharmacies, restaurants — each a
   curated `industry-*` doc colliding with a legacy UUID doc. Keep the `industry-*`, resolve the UUID.
3. **1 stale draft:** `drafts.industry-saas-companies` (hasPage:true) predates this work; invisible to the
   site (all queries exclude drafts) but should be discarded in the cleanup.
4. **Canonical slug/title changes for the other 6** (IA §3.4): saas-companies→technology-saas,
   charities-and-foundation→charities-non-profits, retitle B2B, create education-edtech /
   travel-hospitality / home-improvement-interiors docs. Zero SEO cost (no `/industries` route was live).
5. **Industry images are unresolved import stubs** (`_sanityAsset` file refs → `asset->url` null) across
   ALL industry docs: hero, hub-card icon, expertise/methodology icons. Components guard them (pages render
   cleanly, icon-less). Real assets are a content/Studio-pass task.
6. **Nav integration deferred:** no "Industries" item in the header yet, and the mega-menu sector column is
   still empty-gated. Best switched on once all seven are live, so the menu is not half-populated.

## CP-10 — Homepage BUILD (section by section, review gate between each)

Answers locked (Hassan, 24 Aug): schema = add Organization + WebSite + BreadcrumbList (truthful only),
URL/canonical/title held constant; founding year = **December 2013 (12 years)** from a **single source**
(the audit found 4 drifting versions — "Established in 2018", "over a decade", "10 years"); founder-only
(no team grid), owner-led-accountability message, I draft Hassan's short bio; reviews = real, published,
use them and give them weight (not near the footer); slot 10 = **lifecycle** (launch, improve, grow,
automate), Process moves to How We Work; title = careful brand-forward rewrite, CreativePixels early
(before/after shown for approval before writing); drop the generic Expertise + Services homepage sections.

**Hero — DONE (this step).** `HomeHero.jsx` copy reworked (animation/visual/200+ counter/logo marquee
untouched): H1 "Brands, websites / and online stores / **built to grow**" (weights web & ecommerce, 2 of 3
nouns; brand + growth named); subhead "Brand, web and ecommerce, growth and automation, from one senior
team that stays with you long after launch. Web and ecommerce is where we do the heaviest lifting." All
four pillars read in the hero within seconds; UK English, no em dashes. Verified 375/768/1440: H1 renders
3 lines, subhead present, all four pillars in view, old copy gone, no horizontal overflow. Not pushed.

**Title:** before/after presented to Hassan for approval; NOT changed until he confirms (a "show me first"
gate). URL + canonical untouched regardless.

**Title — DONE (approved).** Homepage `<title>` now `CreativePixels | Web, Ecommerce, Brand & Growth
Agency` (brand term first — brand queries are what we rank for). URL + canonical untouched.

**Founding year — DONE (single source).** New `src/content/company.js` — `FOUNDED_YEAR = 2013`,
`FOUNDED_MONTH = 12`, and `YEARS_IN_BUSINESS` computed from the founding date (=12 now, auto-ticks to 13
in Dec 2026). **11 occurrences across 8 files** now read from it (the audit's four drifting versions plus
extras the render-scan caught):
- `established/Established.jsx`: "Established in 2018" → `Established in ${FOUNDED_YEAR}`; "over a decade" →
  "over 12 years"; "Years in Business" counter `value={12}` → `YEARS_IN_BUSINESS`.
- `process/Process.jsx`: "over 10 years" → "over 12 years".
- `stats/Stats.jsx` (About page): "Years Experience" counter `value={12}` → `YEARS_IN_BUSINESS`.
- `lp/LpEstablishedSection.jsx`: "Built by Hassan Iqbal in 2018" → `${FOUNDED_YEAR}`; "over 7 years" →
  "over 12 years"; "Years in Business" counter `value={12}` → `YEARS_IN_BUSINESS`.
- `lp/LpWhySection.jsx`: "over 7 years" → "over 12 years".
- `hero/AgenciesHero.jsx`: "Since 2014" → `Since ${FOUNDED_YEAR}`.
- `hero/PartnerWithUsHero.jsx`: "Since 2014" → `Since ${FOUNDED_YEAR}` (+ removed an em dash).
Client testimonial quotes mentioning "7 years" are the clients' words and were left untouched. Full-site
render-scan: no "2018 / Since 2014 / over 10 years / over 7 years / over a decade" remain anywhere.

**200+ projects counter — flagged for Hassan (not changed).** It is a hardcoded marketing figure
(`HomeHero` "Projects" card + `Stats.jsx`, `value={200}`), not sourced from data (Sanity holds 31 case
studies; 200+ is total projects delivered since 2013, not the showcased set). Defensible *kind* of claim
(delivery volume, ~17/year over 12 years is plausible) but there is no source of truth in the system —
its defensibility rests entirely on the real delivered count, which only Hassan can confirm. Recommend
confirming the figure; if kept, it appears in two places and could also become a constant.

**Immediate-proof band — DONE (this step).** Kept restrained per the brief: the existing client-logo
marquee plus ONE line above it — "Building for growing brands for over {YEARS_IN_BUSINESS} years" (reads
from the constant). No other trust signals stacked at the top. Verified 375/768/1440: hero + proof line
render, logos present, no horizontal overflow.

**Note (flagged, not fixed — out of this step's scope):** `Established.jsx` still contains "world-class
design" (banned) and "real results"; these get cleaned in the slot-9 "Why CreativePixels" rework.

**Banned copy on homepage — FIXED now (Hassan, not waiting for slot 9).** `Established.jsx`: "combines
data-driven strategy with world-class design. No jargon, no hidden fees just real results." →
"pairs clear strategy with senior design and development. No jargon, no hidden fees, and we stay with you
long after launch." (removes "world-class" + "real results", both specific now).

**200+ figure — now a constant.** `PROJECTS_DELIVERED = 200` added to `src/content/company.js`; the two
`value={200}` counters (HomeHero "Projects" card + `Stats.jsx`) read from it. Figure still pending Hassan's
confirmation, but now lives in one place.

**Selected work — DONE (this step).** Moved HIGH — immediately after the hero, before the (soon-to-be-dropped)
Expertise/Services (verified: workY ~1560 < ExpertiseY ~2370 < ServicesY at 375/768/1440). Flagship-only:
new `caseStudiesFlagshipQuery` (`designation == "flagship"`, no drafts, no archive, must have thumbnail,
ordered), fetched in `(home)/page.jsx`. **It selects the top three flagships: Casa Botanica Panama (big),
Ayoa, AlertForce.** Section copy set explicitly (label "Selected work", title "Work we've delivered.",
restrained description) to avoid the component's default "measurable success" claim.
- **`Work.jsx` de-hardcoded:** it previously forced slugs casa-botanica-panama / ndifo-safari /
  the-smokey-carter (falling back to indices 0/1/2). Now it shows the first three of whatever is passed, in
  order — deterministic, honours the caller's selection, and archive can never surface. This also *improves*
  the service/solution/industry pages (curated order now respected). Verified the charities industry page
  still shows its curated three (Anthony Walker, Sight for Life, West Midlands Racial Justice Initiative);
  no Casa Botanica leak. No horizontal overflow at 375/768/1440.

**Four pillars — DONE (this step).** Reused `ServicesPillars` (one source, no second version) — its own
heading ("What We Do" / "Four things we do, one team.") suits the homepage; runs off
`navData.serviceColumns` the homepage already fetches. Dropped the generic `Expertise` + `Services`
sections (agreed — they predated the pillar model). Verified 375/768/1440: **4 cards in order Web &
Ecommerce → Brand & Experience → Growth & Performance → AI & Automation** (Web leads by the component's
sort, carries the weight), positioned after selected work and before the Why/Established section, no
horizontal overflow, old sections gone.

**Selected-work order — Hassan deciding (Q raised, not changed).** Current lead is the first three of the
flagship query, ordered by the generic `order asc, _createdAt desc` listing field (Casa Botanica order=2,
Ayoa 5, AlertForce 6) — i.e. inherited from the /case-studies sort, not a deliberate homepage curation.
My view given: (1) curate the homepage three explicitly (a `HOMEPAGE_WORK_SLUGS`-style list, same
discipline as service/industry `workSlugs`) so the lead is intentional; (2) Casa Botanica (Panama villa
rentals) should not hold the largest card — it reads as holiday rentals, not the SME/mid-market B2B the
brief targets; lead with Ayoa (recognised SaaS/app, ties to the Web & Ecommerce apps weight), AlertForce
strong second, Minnessak an ecommerce-forward alternative. Awaiting Hassan's decision before wiring.

**Selected work — curated (Hassan's three).** New `src/content/homepage.js` `SELECTED_WORK_SLUGS =
["ayoa","alertforce","minnessak"]` (SaaS lead, B2B, ecommerce — all on-target). Query switched from the
flagship-sort to `caseStudiesBySlugsQuery` (curated by slug, order preserved), so the homepage three are a
deliberate decision, not inherited from the /case-studies listing sort. Casa Botanica is off the homepage
(0 mentions), stays in the work hub. Verified: **Ayoa is the large lead card** at desktop (777px vs 393px).

**Web & Ecommerce feature block — DONE (this step, the heaviest block).** New prop-driven
`PillarFeature` component (reused for the concise pillars later): eyebrow "Web & Ecommerce", title
"Websites, stores, apps and platforms.", four capability links (Websites/Ecommerce/Apps/Platforms →
service pages), three relevant work cards, and a CTA. Placed after the four-pillars overview. Verified
375/768/1440: renders, sits after the pillars, no horizontal overflow.

**Repetition handled (Hassan's watch-point).** The Web & Ecommerce work is a DISTINCT curated set —
`WEB_ECOMMERCE_WORK_SLUGS = ["fultons","mr-pickles","teleqo-tech"]` (2 ecommerce + 1 platform) — with two
guarantees: (1) the two lists are deliberately disjoint, and (2) `page.jsx` filters the block's slugs to
exclude `SELECTED_WORK_SLUGS` defensively, so even an accidental overlap can't repeat a case study.
Verified: the six case studies (Ayoa/AlertForce/Minnessak + Fultons/Mr Pickles/Teleqo) are all distinct;
no case study appears in both sections.

**Card de-duplication.** Extracted the case-study card into a shared `src/components/ui/CaseStudyCard.jsx`;
`CuratedWorkGrid` and `PillarFeature` both use it (one card, not a copy). Verified a CuratedWorkGrid
consumer (ecommerce-brands) still renders all four cards.

**Three concise pillar blocks — DONE (this step).** `PillarFeature` given a `variant="concise"` (tighter
padding, no capabilities/work, text-link CTA) + an optional `proof` line. Brand & Experience, Growth &
Performance, AI & Automation built concise. **AI & Automation carries the Biome4Pets proof** ("200 reports
that took three days now take one", linking to the case study) — its only evidence, so its block still
earns its place without work cards. Verified 375/768/1440: **weighting reads** — concise blocks are 345–474px
vs the Web & Ecommerce block's 1112px (~31% at desktop), no horizontal overflow.

**Page-length assessment (Hassan asked before more sections):** measured at 1440 — **1,002 words of main
content, ~9,900px (~11 screens), 12 content sections.** With founder + investment still to add, estimate
**~1,200 words, ~12-13 screens, ~14 sections.** Verdict: **word count is NOT the problem** (nowhere near
the 6,000-word SEO-page trap the brief warns about); the risk is section count / redundancy. Both of
Hassan's suspicions confirmed: (1) the four-pillar overview + four per-pillar blocks partly repeat —
Web & Ecommerce and AI earn their blocks (capabilities+work; Biome4Pets proof) but **Brand & Growth mostly
restate the overview card** (recommend dropping their standalone blocks, keeping the overview + Web & Ecom +
AI); (2) **lifecycle overlaps Why** thematically ("long-term partner") — keep it only if reframed as the
distinct launch→improve→grow→automate arc tied to the pillars, else merge into Why. Also flagged: Contact
H1 "Unlock your brand's hidden potential" uses the banned "Unlock" (fix at the final-conversion rework).
Awaiting Hassan's cut/merge decision.

**Cuts approved + styling-alignment pass — DONE.**

*Findings (how the site's sections are actually treated):* uniform section shell `relative overflow-hidden
[bg] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]` + `relative z-[10] container`; centered heading stack
(SectionLabel accent → SectionTitle → SectionDescription), each in a MotionEffect (slide-down + fade +
zoom, inView, staggered 0.1/0.25/0.4, tween 0.8s easeOut); **background alternates** across three
treatments — WHITE (Established, Methodology), LIGHT TINT (#F7FAFF blue on Expertise3/ProjectShowcase;
#ffd900/13 yellow on Testimonials), DARK (ProcessBg full-bleed `<Image>` on Process/PartnerWithUs2/
ServicesPillars) — and **adjacent sections never share a treatment**; light/dark sections carry a floating
`ServicesLogoShape` for texture; cards are the shared white rounded-3rem `CaseStudyCard` or dark glass.

*What the new sections got wrong:* Web & Ecommerce + the three concise blocks were FLAT WHITE with no
decorative shape and no alternation, so after the dark pillar overview the page ran white→white→white→
white→white — the "dropped in" feel. (Heading stack, container and animations already matched.)

*Fixes:* dropped the Brand & Growth standalone blocks (approved — they restated the overview); Web &
Ecommerce kept white but gained the `ServicesLogoShape` texture; AI given the #F7FAFF tint + shape +
standard padding so the flow now alternates dark → white → tint → white → dark with no adjacent repeats;
`PillarFeature` concise variant stays light by CONTENT (no work/capabilities) not by padding, so it sits on
the site's uniform py rhythm. Fixed the banned "Unlock your brand's hidden potential" → "Let's grow your
brand online." in `Contact.jsx` (homepage + /contact). Verified 375/768/1440: no overflow; weighting holds
(AI ~30% of the Web & Ecommerce block); background alternation correct.

**Lifecycle (slot 10):** still to build — only as the distinct launch→improve→grow→automate arc, else
merged into Why (Hassan's call once seen).

**Why CreativePixels — reworked (this step).** Established rewritten from a generic "long-term partner"
line into six CONCRETE differentiators (owner-led; a specialist team; commercially focused; custom where it
counts; here after launch with a warranty; real technical depth), on a white section with the standard
heading stack + decorative shape. **Removed a fabricated metric that was live on the homepage:
"£10M+ Client Revenue Generated"** (an invented client outcome), plus the "100% Human-Led Strategy" stat.
Twelve-years / founding still read from the single source. CTA "Read our story" → /about.

**Lifecycle — BUILT (it earns its place).** New `Lifecycle` component: the launch → improve → grow →
automate arc, each stage tied to a DIFFERENT pillar (Launch=Web & Ecommerce, Improve=Brand & Experience,
Grow=Growth & Performance, Automate=AI & Automation) — a "how the four pillars work together over the
relationship" story, genuinely distinct from Why (differentiators), not a second trust pitch. Dark-glass
treatment (ProcessBg + glass cards) matching ServicesPillars/PartnerWithUs2, keeping the dark rhythm slot
that Process held. The old `Process` section is removed from the homepage and is now **unused / orphaned
(not moved, not deleted)**. CORRECTION to an earlier loose phrasing: `Process` was **homepage-only and was
never on How We Work**. How We Work renders a **separate** component, `Process2` (different content
`PROCESS_2_CARD`, different scroll-timeline layout), which I did not touch and which is unaffected. So
removing `Process` from the homepage does not move it anywhere — it simply leaves it unused. Process and
Lifecycle are also **different in kind** (Process = project delivery method: Discovery/Design/Develop/Launch;
Lifecycle = ongoing relationship arc across the pillars) — Lifecycle does NOT replace what Process said.

**Rhythm preserved:** AI (tint) → Why (white) → Lifecycle (dark) → Cta (white) → Testimonials (yellow) →
Contact (dark) — same white→dark→Cta adjacency the original Established→Process→Cta had. Verified
375/768/1440: no horizontal overflow; both sections carry proper weight (Why ~1030px, Lifecycle ~785px).

**Lifecycle restyle (Hassan chose option 3) — DONE.** Lifecycle now uses the **Process treatment exactly**:
the numbered tile + connecting-line timeline (desktop `grid-cols-4`), the shared `ProcessSlider` for mobile
(same behaviour), and the dark ProcessBg — so the launch→improve→grow→automate arc reads as a sequence.
Pillar names lead each stage description so they show on desktop and in the slider. **"How do you work"
(one of the brief's ten required answers, which Process used to carry) is handled by a "See how we work"
button in the Lifecycle header → /how-we-work** (rather than restoring a second dark step-section).

**ORPHANED COMPONENT — `src/components/sections/process/Process.jsx` is UNUSED (not imported anywhere).**
It was homepage-only; removed when Lifecycle took its slot. Left in place deliberately (Hassan's call) — do
NOT quietly delete or accidentally revive it; its disposition is decided during final cleanup (CP-1x). Note
it still reads `PROCESS_CARD` + `ProcessSlider` (both still used by the live Lifecycle/other code, so those
stay). How We Work uses a SEPARATE component `Process2` (unaffected).

**Founder — BUILT (this step).** `Founder` component: Hassan only, no team grid (owner-led accountability +
a wider specialist team as the message, not a personal profile). Static `hassan-avatar` photo (316×316),
name "Hassan Iqbal", role "Founder & Managing Director", and a **draft bio (Hassan to correct)** — four
sentences: founded in 2013 and leads every project personally; the accountable point of contact throughout,
backed by a specialist team not a rotating cast of juniors; built to do the work properly and stay
commercially useful, not chase awards; work with CreativePixels and you work with the owner. Tint (#F7FAFF)
background keeps the rhythm: **Lifecycle (dark) → Founder (tint) → Cta (white)**. Verified 375/768/1440:
no overflow; Lifecycle shows the desktop timeline grid at 1440 and the ProcessSlider at 768/375.

**Founder fixes + reviews + investment + final conversion — DONE. Homepage structurally complete.**
- **Bio reworked** (Hassan's corrections): removed the unsupported "do the work properly / not chase
  awards" positioning claim, the "not a rotating cast of juniors" competitor swipe, and the "work with the
  owner" slogan. Now factual only: "Hassan founded CreativePixels in December 2013 and, 12 years on, still
  leads projects personally and stays your point of contact from the first conversation through to launch.
  Behind him is a specialist team of designers, developers and growth people." (dates from the single source.)
- **Founder photo → Sanity author image** (was static). NOTE: both the static avatar and the Sanity image
  are 396×396 — the SAME resolution — so this does not make it sharper; `fit=max` means the day a higher-res
  photo is uploaded it flows through with no code change. A genuinely crisp large headshot needs a
  higher-res upload (flagged to Hassan). Static avatar kept as fallback.
- **Reviews — moved up, off the footer** (Founder → Reviews → Investment → Final). With no quotes in the case
  studies, the real reviews are our strongest proof. **Count: 15 written reviews on the homepage** (16 on
  /testimonials), from 11+ named client companies, plus a "4.9/5 from 47+ Clients" aggregate — existing
  published reviews (permission confirmed by Hassan). White background.
- **Investment — new light price signal** from `servicePricing.js` (never hardcoded): four representative
  starting points (Websites & ecommerce From £1,500, Branding From £1,000, Custom & AI builds From £5,000,
  Ongoing growth From £300/month), framed "a starting point, not a price list" + "we agree the figure before
  anything starts" + a link to per-service pricing. Build/high-value figures lead so it does not undercut.
- **Final conversion (Contact)** — "Book a call" label → **"Start a project"**; audit-pitch card
  ("Included in your free strategy" + SEO/speed/competitor items) → **reassurance microcopy** ("What happens
  next": reply within one working day / a senior person reviews it / clear next steps, no obligation / your
  details stay private); description reworked. **No "Book a Call" anywhere** (verified 0). Fixes apply to
  the /contact page too (shared component).
- **Dropped the mid-page `Cta` section** (not in the CP-10 tail; the final conversion carries it).

**FULL SECTION LIST + BACKGROUND (11 sections, alternating, verified 375/768/1440, no overflow):**
1. Hero — dark · 2. Selected work — white · 3. Four pillars — dark · 4. Web & Ecommerce — white ·
5. AI & Automation — tint · 6. Why CreativePixels — white · 7. Lifecycle — dark · 8. Founder — tint ·
9. Reviews — white · 10. Investment — tint · 11. Final conversion — dark. No two adjacent share a treatment.

---

## CP-10 — Homepage: PLAN written (24 Aug 2026)

Plan at `docs/cp-transformation/cp-10-homepage-plan.md`. Homepage chosen over company pages (highest
organic traffic, only real SEO asset). Plan-only per Hassan; no code written. Key findings: (1) **no
Organization schema / JSON-LD exists anywhere** — the "protected" schema is absent; recommend adding
Organization+WebSite (brand-signal gain), URL/canonical/title held constant; (2) homepage is generic
"Web Design Agency / Our Services / Our Expertise", not the 4-pillar model the interior now uses —
Web & Ecommerce gets no weight; (3) **date contradiction**: "Established in 2018" + "over a decade / 10
years"; (4) proof: case studies have no metric fields (~3 real metrics, in prose) and no quotes, BUT a
real testimonial bank exists (reuse, confirm permission); (5) founder section buildable partially (Hassan
MD + photo exist, needs bio; no other team data); (6) biggest risk = brand-term rankings (mitigate by
holding URL/canonical/title/H1 continuity, adding not removing schema). Reuse: ServicesPillars (weights
Web & Ecommerce), Work/CuratedWorkGrid, Investment (servicePricing), ServiceCaseHighlight. Drop the generic
Expertise + Services homepage sections. Six open questions listed for Hassan before build.

---

## Header/HomeHeader drift audit (24 Aug 2026) — reported, NOT merged (Hassan's instruction)

The 7-item nav set is hand-maintained in **three** files: `Header.jsx` (desktop, all `(site)` pages),
`HomeHeader.jsx` (desktop, homepage), and `MobileMenu.jsx` (mobile slide-out, shared by both layouts).
`LpHeader.jsx` carries no main nav. Adding Industries touched Header + MobileMenu but missed HomeHeader —
exactly this duplication. All three are back in sync now.

**Header vs HomeHeader — intentional differences (keep):** the `transition` prop + Framer opacity/height/
layout animations (intro from the loader), `LoaderLogo` (shared-element `layoutId`) vs static `Logo`,
always-transparent→sticky vs route-based `header-secondary`, and a deliberate `ctaPosition` analytics tag
("home-header" vs "header").

**Genuine drift that matters:** (1) the nav item list is physically duplicated (plus the 3rd mobile copy) —
the drift hazard that dropped Industries; (2) the disclosure + scroll behaviour is byte-for-byte duplicated
(3 dropdown state hooks, 3 toggles, closeAllDropdowns, two scroll `useEffect`s) — a fix to one won't reach
the other. **Minor:** HomeHeader's logo is not a `<Link href="/">` (homepage logo not clickable-to-home).

**Recommendation (later, not now):** extract one `NAV_ITEMS` source consumed by all three, and a shared hook
for the dropdown/scroll behaviour, leaving each header's animation shell distinct. Do NOT merge the
components wholesale (the homepage intro animation genuinely differs). Not scheduled yet — Hassan's call.

---

## CP-08 nav layout fix (7th item) — COMPLETE (commit on its own)

**What was breaking (measured at 1024/1280/1440/1920):** the header is fixed-width chrome
(`max-w-[104rem]` = 1040px, centred), so it renders identically at 1280/1440/1920 — only outer
whitespace changes, and below 1280 it is already the hamburger. Not wrapping, not font-shrink, not page
overflow: it was **edge-jamming**. The bar carried logo + the (now 6-link) nav + **two** CTA buttons
(Free Audit and Start a project); adding Industries filled the 1040px bar to ~1px slack each side — logo
jammed to the left edge, Start-a-project to the right, the two buttons touching (0 gap), on the verge of
clipping under any slightly wider font rendering. Two separate headers were involved: `Header.jsx` (all
`(site)` pages) and `HomeHeader.jsx` (homepage) — and `HomeHeader` had never received Industries at all.

**Fix (Hassan chose "drop Free Audit on desktop"):** the secondary **Free Audit** button is now
`xl:hidden` — removed from the desktop bar (freeing ~140px), kept on mobile beside the hamburger and on
its `/audit` page. With the room recovered, the original nav spacing (`gap-[3rem]`, `mx-[4.8rem]`) is
retained (no squeezing). Industries also added to `HomeHeader` (it was missing there). Applied to both
headers. The keyboard disclosure behaviour is untouched (no dropdown JS changed; triggers stay `<button>`,
`aria-expanded` still toggles).

**Verified:** 1024 = hamburger, Industries in mobile menu; 375/768 = Free Audit still visible on mobile,
no overflow; 1280/1440/1920 = all seven items on one row, Industries present on both headers, Free Audit
hidden, group 987px in the 1040px bar with **26–27px slack each side** (was 1px), Start-a-project primary
CTA intact, no page overflow. Not pushed.

---

## CP-08 batch 2 — remaining six industries + data cleanup — COMPLETE (stop for review)

**Data cleanup (all by patch/unset/delete, never createOrReplace on existing docs):**
- **ServicesDropdown.jsx reverted** (Hassan's call) — the three-session dead-code deletion discarded; tree clean.
- **35 legacy UUID industry docs KEPT** (Hassan's call) — they are the `_ref` targets the case studies point
  at (verified: junior-jam, smartspaces, lola-blake, core-estates, drive-uk, ofh-care reference them by
  `_ref`, not slug). Deleting them would break real references.
- **4 colliding slugs stripped** (unset `slug` on the legacy UUID docs for driving-schools,
  interiors-and-furnishings, pharmacies, restaurants) — collisions gone (0 duplicate slugs), `_ref`
  relationships intact (references are by id, so stripping slug is safe).
- **Stale `drafts.industry-saas-companies` deleted.**

**Six industries authored (same pattern as Ecommerce Brands, sector-understanding framing):**
- Patched (existing docs, reslugged/retitled where needed): b2b-services → **B2B & Professional Services**;
  saas-companies → slug **technology-saas**, **Technology & SaaS**; charities-and-foundation → slug
  **charities-non-profits**, **Charities & Non-profits**; interiors-and-furnishings → slug
  **home-improvement-interiors**, **Home Improvement & Interiors**.
- Created fresh (no prior doc): **Education & EdTech** (education-edtech), **Travel, Hospitality & Leisure**
  (travel-hospitality). createOrReplace is safe here — genuinely new docs, nothing to drop.
- Curated work (D44 evidence, order preserved): B2B [alertforce, energy-angels, trust-certs, varissa,
  teleqo-tech, new-compass]; Technology & SaaS [ayoa, new-compass, teleqo-tech, now-press-play] —
  **peekaboo dropped (archive)**; Charities [anthony-walker-foundation, sight-for-life, wmrji] —
  **unicef dropped (print-only, not digital proof)**; Education [anthony-walker-foundation, junior-jam,
  now-press-play, alertforce]; Travel [casa-botanica-panama, ndifo-safari, little-astronauts];
  Home Improvement [smartspaces, sp-elite-installation].

**Invented metrics found in the legacy copy (per Hassan's ask, since Ecommerce had several):** only
**Charities** carried them — "Most charity sites lose 70% of potential donors at checkout" (invented stat)
and "a standard 15% discount on our day rates" (an unconfirmed pricing/offer I will not invent). Both
removed and reframed. B2B, SaaS and Interiors legacy copy was pitch-heavy but **metric-free**.

**Redirects:** the four remaining legacy industry URLs now wired (b2b-services, saas-companies →
technology-saas, charities-and-foundation → charities-non-profits, interiors-and-furnishings →
home-improvement-interiors). All nine industry redirects live and 308.

**Nav (D40):** added **Industries** to the main navigation — desktop `Header.jsx` (after Solutions) and
`MobileMenu.jsx` — linking to `/industries`. It is a plain link, not a mega-menu; the sector column in the
Solutions dropdown remains a separate future task.

**Bug found + fixed during verification:** `INDUSTRIES_QUERY` projected `"slug": slug.current` (string) but
the shared `Sector` grid reads `item.slug.current`, so every hub card linked to `/industries/undefined`.
Fixed the query to `slug { current }`; all 7 cards now link correctly.

**AGGREGATE QUERY (standing rule) — from the data:** `*[_type=="industries" && hasPage==true]` → **7**
(b2b-services, technology-saas, ecommerce-brands, charities-non-profits, education-edtech,
travel-hospitality, home-improvement-interiors); held `industry-*` docs (hasPage!=true) = 4 (driving-schools,
pharmacies, restaurants + sme-founders which redirects to /solutions). No duplicate slugs. All 7 detail
pages HTTP 200, all modular sections render, prose clean (no banned phrases / invented metrics), no overflow
at 375/768/1440.

**NOT pushed (per instruction). Stop for review.**

---

## Image pass — raster optimization (approved, scoped) (25 Aug 2026, stop for review)

Removed `unoptimized` from the **33 raster `<Image>` tags** (webp/png local imports) via a targeted script that
maps each `src` to its import extension — so **only raster is touched; SVGs are left `unoptimized`** (correct, no
`dangerouslyAllowSVG`) and Sanity `urlFor` images are untouched. **LCP hero backgrounds done first** and given
`sizes="100vw"` (the fill images had none, so mobile was pulling desktop-size). Now served through Next's
optimizer (AVIF + resize): the hero background dropped **77 KB → 13 KB (~83%)** at 1920w.
Verified 375/768/1440 on multiple pages: all routes 200, **0 broken images, no overflow**, hero backgrounds load
via `/_next/image`. (Mobile occasionally shows a cached 1920 variant in-pane from an earlier desktop visit — a
test artifact; the `sizes`/preload is correct, so a fresh mobile load picks the right size.) HomeHero uses a
different bg mechanism (no HeroBg fill) — untouched. Standing rules honoured; stopped for review before the
a11y sub-pass + Testimonials reconcile + Crisp removal.

## A11y fixes batch 1 + GTM consent write-up (25 Aug 2026)

- **GTM Clarity/Crisp consent** — wrote exact dashboard steps into `launch-external-tasks.md §1a` (which tags,
  `analytics_storage` on each, publish, verify) + **§1b recommendation to remove Crisp** (perf + privacy, no
  brief need for live chat). Confirmed Clarity/Crisp are GTM-injected (not in code), so this is dashboard work.
- **Safe a11y fixes done (code):** skip link ("Skip to content" → `#main`) in both layouts + `id="main"`;
  `aria-label` on the Radix service select (Contact + Audit forms); **38 decorative background alts → `alt=""`**
  (via sed, the unambiguous ones only). Honeypot was already `aria-hidden`+`tabIndex=-1` (no fix needed).
- **Heading hierarchy (approved):** Lifecycle title h4→h2 + stages h5→h3 (+ ProcessSlider h5→h3); Contact "What
  happens next" h4→h3; testimonial author names h6→`<p>` (Testimonials, Testimonials2, + both sliders);
  selected-work card titles h4→h3. Build clean; verified 375/1440: no overflow, **visual unchanged** (tag swaps
  preserve the className, e.g. Lifecycle still 48px, Work card 34px).
- **STILL OPEN (flagged, not done):** Footer heading levels (Legal/Ready-to-Start/Our-Brands inconsistent) and the
  Header **mega-menu using headings for nav links** (before the h1) — a nav-semantics sub-pass; the "Pixel AI"
  h5 jump is the Crisp widget (third-party, resolved by removing Crisp). Touch targets (33 < 24px) and the
  icon/card/avatar generic alts (71/10/12 — some decorative, some are icon-only-link names) need per-context
  work, not a blind sweep. Also noticed: shared `Testimonials.jsx` still has the OLD un-deduped data (Brendan dup,
  "AYOA"/"Casabotanica") vs the cleaned `Testimonials2.jsx` — pre-existing, worth reconciling.
- **Image pass (119 unoptimized): STOPPED for review — a reason WAS found.** The majority (~151 SVG imports) are
  `unoptimized` **correctly**: the config has NO `dangerouslyAllowSVG`, so Next refuses to optimize SVG — removing
  it would break them for zero benefit (SVGs are already tiny vector). No global `unoptimized`, no `output:export`,
  no custom loader — optimization IS available (Vercel); it was just applied blanket-style. **The real target is
  the ~55 RASTER images (39 webp + 16 png)**: hero backgrounds, card images, avatars, testimonial photos.
  **18 hero components carry priority `.webp` backgrounds = the LCP element on every page**, served full-size.
  Proposed scoped pass (awaiting Hassan): remove `unoptimized` from the 55 raster images, **LCP hero backgrounds
  first**, verify each page renders, leave SVGs and (low-priority) already-sized Sanity `urlFor` images as-is.

## Blog stat fact-check + A11y/Perf AUDIT (report-only) (25 Aug 2026)

### Fact-check (blog external stats)
- **"one-second delay reduces conversions ~7%"** (wordpress-slow): traces only to a dated, endlessly-recycled
  Akamai/Aberdeen figure the post stated with no citation → REWORDED to drop the number (qualitative). Done via
  safe-mutate patchSet.
- **"more than half of UK web traffic on mobile"** and **"WordPress powers over 40% of the web"**: current,
  well-established (Ofcom/Statista; W3Techs ~43%) → kept. Other numbers in the posts are illustrative/hypothetical.

### A11y + Performance audit — report only, nothing fixed yet. Full detail given to Hassan; scale:
**Performance:** biggest lever = **119 `unoptimized` <Image> across 72 files** (defeats Next optimization; hero
LCP images served full-size). **3 third-party scripts via GTM — GTM + Microsoft Clarity (session recording) +
Crisp chat — all load UNCONDITIONALLY** (not in code; injected by the GTM container; the consent banner does not
stop them → confirms the launch-external-tasks §1 GTM-config risk, and Crisp is a heavy widget). JS ≈ 384 KB
(framer-motion + swiper). GOOD: CLS = 0 on homepage. LCP time not measurable in the pane (needs Lighthouse).
**Accessibility (WCAG 2.2 AA):** heading hierarchy jumps h1→h3 (no h2, 6 skips); **51/106 images have generic alt**
("Icon"/"Image"/"Card Image"); **33 touch targets < 24px** (2.5.8 fail); **no skip link** (2.4.1); the Radix
service `select` has no accessible name; honeypot input unlabelled. GOOD: single h1, landmarks (main/nav/header/
footer), lang=en, focus-visible CSS present, no positive tabindex, contact form has labels + aria-invalid +
visible errors, consent banner is keyboard-operable. NOT yet measured: colour contrast (needs a tool), full
keyboard trace of the mega-menu/mobile-nav/modal, LCP field time. Prioritised list + safe-vs-structural split
delivered to Hassan for approval before any fixes.

## CP-14 blog — re-pillared + placeholder removed + assessed (25 Aug 2026)

- **Re-pillared the 9 posts** (via `safe-mutate patchSet` — first use of the new helper) from the old
  DESIGN/DEVELOPMENT/GROWTH/STRATEGY categories to the four pillars. Distribution: **Web & Ecommerce 4,
  Growth & Performance 3, AI & Automation 1, Brand & Experience 1.** GAPS: Brand & Experience and AI &
  Automation are thin (1 each) — where new posts would help. Two debatable calls flagged (10-signs → Growth
  vs Web; template → Web vs Brand).
- **Removed the hardcoded placeholder**: the `CardData` export (the "Scaling React / 1M+ Users" fake posts)
  in `Blog.jsx` and `RelatedBlogs.jsx` was a DEAD export (both components render the Sanity `blogs` prop; nothing
  imports CardData). Removed it and its now-unused image imports. Blog page still 200, real posts + pillar chips.
- **Quality assessment (read excerpts + sampled bodies): KEEP all 9.** Bodies are substantial (≈700–2,100 words),
  specific, opinionated and UK-focused — genuinely good, NOT generic AI volume. No archiving or rewriting needed.
  Minor: a couple cite external market stats (e.g. "7% conversion drop per second") worth a quick fact-check
  before launch, but they are general facts, not fabricated CP results. Did NOT write any new posts (assess-only).

## STRUCTURAL FIX: createOrReplace field-loss can no longer recur (25 Aug 2026)

`createOrReplace` dropped an omitted field FOUR times (case-study images, goal icons, solution excerpts,
industry slugs); a "use patch" note did not hold. Made it structural: `scripts/sanity/safe-mutate.js` is now
the only sanctioned way to author Sanity content. It exposes `patchSet` (updates — cannot drop unspecified
fields), `create` (new docs), and `mergeReplace` (the ONLY full-write path — reads the existing doc and
shallow-merges first). Its `run()` **rejects any raw `createOrReplace`/`replace`**, so a script physically
cannot smuggle one in. Verified: the guard throws on raw createOrReplace; patchSet runs; mergeReplace preserves
existing title/slug. All future authoring goes through this helper.

## CP-12 build 2 — 2 new industry pages + tag migration → 9 industries (25 Aug 2026)

Hassan approved set A + B, and publishing Property Marketing + Media & Publishing.
- **2 new canonical industry pages** created by repurposing the empty stubs (`property-marketing`,
  `media-and-publishing`): flipped `hasPage:true`, written to the same standard as the other 7 (detailHero,
  6 expertise + 4 methodology + 4 partnerWithUs cards, fit/not-fit, 6 FAQs, workSlugs). Both render 200 with
  "Selected work". (Bug caught + fixed: my first `createOrReplace` omitted `slug`, nulling it → 404; restored
  the slugs. Also had to clear `.next/cache` — the stale Next data cache had baked a 404.)
- **Industry tag migration** (set A clean + set B restaurants/food → travel-hospitality): 27 studies re-tagged
  stub→canonical; unmappable stubs dropped per Hassan's rule. **4 one-offs left untagged** (ao-arena,
  game-art-brain, energy-angels, manzar) as intended; biome4pets also untagged (never had an industry tag).
- **Property/Media studies** kept their tags (they reference the now-canonical repurposed docs) — no migration
  needed for them; the 5 map to the 2 new pages.
- **All 9 industries now have genuinely tagged work** (references ≥ 1): travel-hospitality 7, property-marketing
  5, technology-saas 5, b2b 4, charities 4, ecommerce 4, education 4, media-and-publishing 2,
  home-improvement-interiors 1. None relies on the "Recent work" fallback (all have workSlugs → all show
  "Selected work"). The hub industry filter now lists only the 9 canonical industries (stubs gone from it).
- **9-industry layout verified 375/768/1440**: `Sector` maps all items — desktop 3-col grid (9 = 3 clean rows),
  tablet/mobile slider (swipes all 9); pageOverflowX=0 everywhere, active slide fits. No hardcoded 7.
- **Property redirect**: there is NO property legacy URL/redirect to repoint (property was never a legacy
  /solutions URL and isn't in the crawl). The new page earns its own ranking via the sitemap. NOTE: now that
  restaurants maps to travel-hospitality, `/solutions/restaurants` (currently → web-design-development) could be
  repointed to `/industries/travel-hospitality` to recover that search value — flagged, not changed.

## CP-12 build 1 — hub designation + detail cross-links (25 Aug 2026)

Hassan approved all 5 decisions. Built the parts that needed nothing from him:
- **Hub uses designation** (`caseStudiesFilteredQuery`): flagship leads, then supporting; **archive hidden from
  the default grid** but **surfaces when a service/industry filter is active**. Verified: first 9 cards all
  flagship; default grid = 30 (2 archive + biome4pets-no-thumb excluded); filtering by `ui-ux-design` surfaces
  the two archive studies (ao-arena, peekaboo); default excludes them. Ordering: designation rank → manual order
  → recency.
- **Detail cross-links** (three sections using existing, valid data):
  - `CaseStudyEvidence` — **Relevant services** as links to the service pages (the evidence loop) + **Technology**
    (from the `technologies` refs, previously unrendered). Renders only what is present.
  - `RelatedWork` — new `relatedWorkQuery`. **Ordering (per Hassan's watch-point): RELATEDNESS first** — the count
    of services + industries a candidate SHARES with this study — **then flagship-first, then order/recency, never
    newest-by-default; archive excluded.** Top 3. Verified on casa-botanica: related = game-art-brain (most shared
    tags, leads), ndifo-safari, teleqo-tech.
- **ivy-and-duke designation** set to `supporting` (approved).
- Verified 375/768/1440: no page overflow, evidence + related sections present, 0 elements overflow, related = 3.
- **Design/technical-decisions (render-when-populated):** the Studio schema is a SEPARATE project, so the FIELD
  DEFINITIONS must be added there (documented the exact shape in `custom-fields-registry.md` + `launch-external-
  tasks.md` §5). The FRONTEND is ready: `designDecisions`/`technicalDecisions` added to the detail query, and a
  `CaseStudyDecisions` section that renders each block only when populated. Verified: with the fields null the
  section renders nothing (no empty "The decisions behind it" heading); detail page still 200.
- **Industry tag migration**: mapping written for approval (`cp-12-industry-tag-map.md`) — NOT mutated. Clean 1:1
  mappings cover 21 studies; 11 would end up untagged, clustering on Property Marketing (3) + Media & Publishing
  (2), the argument for two more industry pages. Awaiting Hassan's approval before mutating.

## CP-12 case studies — PLAN drafted for approval (25 Aug 2026, nothing built)

`cp-12-case-studies-plan.md`. Grounded findings: designation IS in the data (9 flagship / 21 supporting /
2 archive / 1 none = ivy-and-duke); **service tags healthy (0 broken), industry tags BROKEN for the new IA**
(32/33 tag legacy hasPage:false stubs, so canonical industry pages pull no related work); **0/33 have outcome
data** (no outcome/review field). Hub HAS a light link-based service+industry filter but does NOT fetch/use
`designation` (can't lead flagship or hide archive). Detail covers 5/12 brief parts (client context, challenge,
strategy, delivered, CTA); technology + relevant-services + related-work have data but aren't rendered; design/
technical-decisions have no field/content; outcome/review await O4. Plan: use designation on the hub, render the
three data-backed cross-link sections, re-point industry tags stub→canonical (mapping for approval first), defer
outcome/review/decisions. Awaiting Hassan's 5 decisions before building.

## CP-15 redirect map WIRED + verified; two bugs found & fixed (25 Aug 2026)

Wired Hassan's six decisions into `next.config.mjs` and fixed the two Footer `/agencies` links → `/partner-with-us`
at source. Applied: custom-apps-and-ai → custom-app-development; sme-founders → increase-leads (not the hub);
wordpress-web-development/thank-you → /thank-you; driving-schools/pharmacies/restaurants → web-design-development
(known SEO loss, recorded in-config); test/junk URLs left to 404.

**Full verification (all 103 legacy URLs, following redirects):**
- **18 redirects**, every one resolving in **exactly 1 hop** to a 200 destination — **no chains**.
- **80 unchanged** 200 pages (0-hop).
- **5 expected 404s**: `/hassan-test`, `/review-test`, `/testing-testimonials`, `/nope-404-xyz`, `/About`.
- **No unexpected 404s, no 500s, no chains.**

**Two bugs surfaced during verification and FIXED:**
1. **`/About` created an infinite redirect loop on `/about`.** Next.js matches redirect `source` values
   **case-INSENSITIVELY**, so a `/About` → `/about` entry also matched `/about` → looped (50 hops). Removed the
   entry; `/about` is 200 again. **`/About` now 404s.** A case-only redirect needs middleware (case-sensitive) —
   FLAGGED for Hassan: accept the 404, or add a tiny case-normalising middleware.
2. **`/case-studies` index returned 500** (`urlFor(null)`): **`biome4pets` is published but has no
   `thumbnailImage`** (it is "awaiting images"), and the index query — unlike the service-page WORK_QUERY — did not
   filter `defined(thumbnailImage)`, so the null image crashed the whole grid. Added
   `!(_id in path("drafts.**")) && defined(slug.current) && defined(thumbnailImage)` to `caseStudiesFilteredQuery`.
   Index is 200 again. **FLAG for Hassan: `biome4pets` (the AI & Automation pillar's only proof) will NOT appear in
   the case-studies grid until it gets a thumbnail image.** Pre-existing (biome4pets was published before this
   session); not caused by the redirect work.

## CP-15 redirect map DRAFTED for review — not wired (25 Aug 2026, stop for approval)

Mapped all 103 crawled legacy URLs → `docs/cp-transformation/redirect-map.md`. Key findings:
- **Only ~16 need an actual redirect.** All 9 blog slugs, all 31 case-study slugs, all 7 legal pages, the core
  pages, 12/15 services and the 4 kept solutions are UNCHANGED (same path). Verified slugs against live data.
- 15 redirects already exist in next.config; **1 new** clearly needed (`/services/custom-apps-and-ai`, which half
  is a judgement call); the rest of the deltas are casing/junk.
- **No chains** — every destination is a final live page.
- **Flagged judgement calls**: custom-apps-and-ai split (→ custom-app-development vs ai-automation);
  sme-founders → hub (rule violation, recommend → increase-leads); driving-schools/pharmacies/restaurants →
  web-design-development (industry-specificity SEO loss, since those industries are hasPage:false);
  wordpress-web-development/thank-you → service page (recommend /thank-you); /About casing.
- **Test/junk URLs** (`/hassan-test`, `/review-test`, `/testing-testimonials`, `/nope-404-xyz`): recommend NO
  redirect (let 404), flagged for confirmation rather than defaulting to homepage.
- **Internal links to fix at source**: `Footer.jsx` lines 233 + 494 `href="/agencies"` → `/partner-with-us`
  (the only hardcoded links to a redirected path). To be changed at wiring time.
- **Mechanism**: recommend KEEPING `next.config.mjs` — at ~16 redirects a middleware keyed-map is overkill (runs
  JS per request); upgrade path documented if it ever exceeds ~50-100. NOTHING WIRED pending Hassan's approval.

## O-item answers actioned + external-tasks doc (25 Aug 2026)

Hassan's decisions on the four genuinely-open items:
- **O15** (launch-new-product): KEEP (Custom App Development is the service behind it). Recorded.
- **O16** (the 8 case studies): **ACTIONED on staging** — the 6 Casa-Botanica clone stubs (`loop`, `lola-blake`,
  `core-estates`, `amana-partnership`, `drive-uk`, `ofh-care`) DELETED (verified 0 references, draft-only); 
  **`ivy-and-duke` PUBLISHED** (complete: thumbnail + excerpt + hero; live at /case-studies/ivy-and-duke, HTTP 200).
  Published case-study count 32 → 33.
- **O17** (dr-donuts/energy-angels/sorted/peekaboo): leave as-is, no outbound links — already the decision. Recorded.
- **O4** (outcome data): remains Hassan's, he is actioning it.

**New doc: `launch-external-tasks.md`** — the single list of things that CANNOT be done from the codebase, per
Hassan's request. Includes the **GTM-B8FV6K69 consent configuration** written in full (which tags need consent
checks, Google vs non-Google, what happens if skipped, how to verify), plus SES identity + DNS + production access
(pointer to `production-email-spec.md`), Vercel prod env vars, Sanity content promotion at cutover, and DNS/Search
Console. Nothing outside the repo has been changed.

## Consent Mode v2 + banner BUILT, email templates fixed (25 Aug 2026)

### Email templates
- `customer-template.js` (live on contact + audit thank-yous): the booking section is gone — "book a quick
  discovery call" + "Schedule a Quick Call → /call" replaced with "Tell us a bit about your project…" +
  **"Start a project" → /contact**. That was the last booking CTA anywhere.
- Deleted the orphaned lp-audit endpoint entirely: `src/app/api/lp-audit/route.js`, `src/emails/lp-customer-template.js`,
  `src/emails/lp-audit-template.js` (its LP frontend was deleted earlier; nothing posts to it). Build clean.

### Google Consent Mode v2 (CP-16, the GDPR/PECR launch blocker)
- **Default DENIED** for all v2 signals (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`;
  functionality/security granted), set in a **`beforeInteractive`** script in `layout.jsx` that runs BEFORE the
  GTM `afterInteractive` script — so no tag fires with consent until the user chooses. `wait_for_update:500`.
- **Banner** (`components/consent/ConsentBanner.jsx`): site-styled (white card, rounded-[2rem], pink Accept /
  outline Reject, link to `/legal/cookies-policy`), bottom-anchored. Accept → `gtag('consent','update', all
  granted)`; Reject → all denied. Choice stored in `localStorage['cp-consent']`.
- **Repeat visits**: the beforeInteractive script re-applies a stored `granted` immediately (before GTM), and the
  banner does not re-show once a choice is stored.
- **Change of mind**: a "Cookie Preferences" control in the Footer dispatches `cp:open-consent`, which reopens the
  banner to choose again.
- **Verified in-browser**: default denied confirmed in dataLayer; banner shows on first visit; Accept → all four
  granted + stored + banner closes; Reject → all four denied + stored + closes; repeat visit → no banner +
  consent re-granted; footer reopen works; a pushed event lands in dataLayer regardless of consent state.
- **Layout**: 375 (205px, 25% vh, 44px touch targets) / 768 (144px, row) / 1440 (120px, centered card) — no page
  overflow, within viewport, does not obscure content.

**Data behaviour by state** (Consent Mode v2):
- **Denied (default & Reject)**: Google tags run in cookieless mode — no `_ga`/ads cookies, no persistent user id.
  GA4 still sends **cookieless pings** (used for Google's conversion/behaviour modelling); Ads signals are
  limited/modelled. Our own `track()` events still push to `dataLayer` (they always do), but tags that require
  consent do not set storage.
- **Granted (Accept)**: full analytics + ads storage — cookies set, normal GA4/Ads measurement and identifiers.
- Note: which GTM tags require which consent type is configured in the **GTM container UI** (GTM-B8FV6K69), not in
  code. The code provides the correct default/update signals; the container must have consent checks enabled on its
  tags for the denied state to actually suppress storage. Flag for whoever owns the GTM container to confirm.

## FULL OPEN-LIST AUDIT — every O item checked against code/data (25 Aug 2026)

Three stale items in a row (O8, security/O14, O20) triggered a full audit. Verdict per O item, checked against
the actual staging code + data:

**RESOLVED (verified now):**
- **O8** — consolidation done, on `4m0eqoi1` (was already marked).
- **O11** — taxonomy ruleset applied via the completed O8 migration (confirm-only).
- **O12** [Claude's task] — all 32 PUBLISHED case-study slugs are clean/normalised (lowercase, hyphenated, no
  spaces); case-study URLs use the case-study slug, and taxonomy slugs never appear in a URL. **No malformed
  slug in any live URL.** RESOLVED.
- **O14** — security stays a service (was already marked).
- **O18** — the hidden low-quality service-doc data is GONE: **no service has `options.pricingCard`** (the
  unapproved £1,995/£2,495 pricing is gone), and `projectShowcase` is now proper per-service "good fit / not
  fit" cards with **no repeated Smokey-Carter/Game-Art/Ivy trio**. IMPORTANT: `modularLayout` is now `true` for
  **all 18** services (it was "two new pages only" when O18 was written), so this data now renders — but it was
  cleaned, so what renders is correct. RESOLVED.
- **O19** — the `wordpress` doc contamination is GONE: fit/notFit/options now hold correct WordPress copy (no
  "MVP design to raise capital" / "just a logo" UI-UX text). It now renders (modularLayout on) and renders
  correctly. RESOLVED.
- **O20** — Book a Call removed from all pages (only /call). Emails being fixed this session.
- **O13** — field spec exists as `custom-fields-registry.md`; navLabel/navExcerpt etc. are defined and in use.
  Treat as done (confirm if you wanted more).

**RESOLVED IN PRACTICE (encoded in data, reversible):**
- **O6** — which of Interiors/Driving Schools/Pharmacies/Restaurants survive: all four are `hasPage:false`
  (no page, used as case-study tags). Decision is encoded and reversible (flip `hasPage`). No action needed
  unless you want any to get a page.

**GENUINELY OPEN (your calls / external data — not code-resolvable):**
- **O4** — collecting real outcome data for CP-12 proof. Open until the data lands.
- **O9** — Cal.com click analytics. **MOOT / closeable**: it existed to validate whether removing Book a Call
  was right, but Book a Call is already removed. It no longer blocks anything.
- **O15** — is `launch-new-product` a real delivered offering or aspirational? Your knowledge; the page exists.
- **O16** — the 8 case studies: state UNCHANGED and verified — `biome4pets` published; `ivy-and-duke` + the 6
  stubs (`loop`, `lola-blake`, `core-estates`, `amana-partnership`, `drive-uk`, `ofh-care`) are still
  unpublished drafts. Brief-or-delete is yours.
- **O17** — `dr-donuts`, `energy-angels`, `sorted`, `peekaboo`: confirmed **no live-site link in the CMS**
  (all url fields null). Whether they're live is your knowledge.

Net: of 13 O items, **8 resolved + O6 resolved-in-practice + O9 moot**; only **O4, O15, O16, O17** are
genuinely open, and all four are your decisions or external data, not code.

## Book a Call sweep — pages already clean, only emails remain (25 Aug 2026, stop for review)

Asked to replace the booking CTA on the service pages (Cta2) and case-study detail (TheSolution). Ran an
ACTUAL sweep (not a claim) before changing anything — and found they are ALREADY done; the O20 note was stale
(third doc-drift retraction after O8 and security).

**Full render sweep — 19 routes, SSR + live browser DOM after hydration:**
| Surface | Booking CTA? |
| --- | --- |
| / /about /how-we-work /partner-with-us /audit /testimonials /contact | none |
| /services + /services/[slug] (18 service pages, via Cta2) | none — 10× "Start a project" → /contact |
| /solutions + /solutions/[slug] (via Cta2) | none |
| /industries + /industries/[slug] | none |
| /case-studies + /case-studies/[slug] (via TheSolution) | none — 9× "Start a project" → /contact |
| /blog + /blog/[slug], /careers | none |
| **/call** | **the Cal.com embed (ALLOWED — this is the booking page)** |

Live-DOM checks on a service detail and a case-study detail page confirmed **no `data-cal-*` element, no
@calcom/embed, no cal.com script** hydrates in — so it is not a client-only embed hiding from SSR either.

- **Pages changed: 0.** Cta2 (`buttonText="Start a project"`, `href="/contact"`) and TheSolution
  (PrimaryButton → /contact) were already converted in prior D40/O20 work. `Cta.jsx` (the shared closing CTA)
  is also already "Start a project". The wordpress LP that O20 listed was deleted this session.
- **One remaining booking CTA (FLAGGED, not changed): the email templates.** `customer-template.js` (used by
  the LIVE contact + audit thank-you emails) and `lp-customer-template.js` (orphaned) have a section built
  around booking: "Want to skip the wait? You can book a quick discovery call…" + a **"Schedule a Quick Call"**
  button → `/call`. Because the section is built around booking as a concept, per Hassan's rule I flagged it
  rather than rewriting. Proposed: button → "Start a project" / `/contact`; reword the sentence off "discovery
  call". Awaiting go-ahead.
- **Why it looks like it keeps resurfacing:** production still runs the old code (Book a Call). The removal is
  on `development`; it reaches users at cutover. Nothing to fix on the pages themselves.
- Verify-at-3-widths: N/A for pages (zero page changes). The service/case-study pages render clean and
  unchanged; earlier this turn /services/web-design-development was confirmed clean at 375/768/1440.

## Analytics fix + null-slug investigation + dead LP deleted + email spec (25 Aug 2026)

### 1. Analytics "scale with confidence" — FIXED on staging
It lived in the `excerpt` field (a plain string, the meta description) of the analytics service doc
(`_id 5c72e50a-9847-4f9c-91c3-a9019708e96f`). Patched via the mutate API on the **staging** dataset:
"...Measure what matters and **scale with confidence**." → "...Measure what matters and **make confident
decisions**." Re-swept all service/solution/industry docs: **0** occurrences of the phrase remain. Meta field,
so no layout change.

### 2. Null-slug industries — INVESTIGATED, NO live problem (my earlier "dead routes" claim was WRONG)
Report before fixing, as asked:
- The industries route builds **only `hasPage == true && defined(slug.current)`** (`queries.industries.js`
  lines 10/22/55), and the sitemap query filters the same way. So `hasPage:false` docs never route and are not
  in the sitemap or nav.
- `/industries/driving-schools` and `/industries/restaurants` both return **404** (correct — they were never
  advertised). `/industries/technology-saas` (a real `hasPage:true` page) returns 200.
- There are actually **4** null-slug industries, all `hasPage:false`: Restaurants, Driving Schools, Pharmacies,
  Interiors and Furnishings.
- **They are used as case-study tags**: the Restaurants stub is referenced by **3** case studies, the Driving
  Schools stub by **1**. So they are NOT junk — they are `hasPage:false` taxonomy tags that categorise case
  studies, and tags don't route, so **they should NOT have slugs** (a slug would be meaningless).
- Root cause: a leftover parallel set of ~39 `hasPage:false` legacy stub industry docs (random-UUID ids) from
  the pre-consolidation taxonomy, coexisting with the 7 real `industry-*` `hasPage:true` pages. Some near-dupes
  exist (e.g. a full `industry-driving-schools` content doc held at `hasPage:false` alongside the stub).
- **DECISION: no fix applied.** Nothing is broken; adding slugs is the wrong fix; deleting the stubs would break
  the case-study references. The real cleanup is a proper CP-08 taxonomy reconciliation (re-point the case-study
  references to the canonical docs, then retire the stubs) — a careful data task, not a quick fix. Recommend
  scheduling it as CP-08, or leaving the stubs (harmless) until then.

### 3. Dead LP route — DELETED (23 files)
Confirmed nothing outside the LP set imports any of it, then removed: the whole `src/app/(lp)` route group
(layout + wordpress-web-development + thank-you), all 17 `src/components/lp/Lp*` components, the LP-only
`src/components/ui/LpResultSlider.jsx`, and the orphaned `Expertise2.jsx` + `Expertise2Slider.jsx`. Build
compiles clean; `/wordpress-web-development` still **308-redirects** to `/services/web-design-development`
(redirect kept in next.config), which renders 200 and is clean at 375/768/1440. Note: `Expertise.jsx` (v1) and
`Expertise3.jsx` remain (only Expertise2 was in scope) — worth checking later if they are also orphaned.

### 4. Production email — SPEC written for Hassan/MTB
See `docs/cp-transformation/production-email-spec.md`. Summary: staging sends from `cpdev.uk`; production needs
a `cp.agency` (recommend `mail.cp.agency`) SES identity with DKIM (3 CNAMEs) + custom MAIL FROM (MX + SPF) +
DMARC, SES production access confirmed/out-of-sandbox, and production SMTP creds + env in Vercel. No production
or DNS setting changed.

## Forms deliverability VERIFIED + LP/CMS truth sweep + doc drift fixed (25 Aug 2026)

### Doc drift corrected (in 00-context.md)
- **O8 (content-platform consolidation): CLOSED.** Approved + completed weeks ago; site runs on the single
  consolidated project `4m0eqoi1` with private `production` + `staging` datasets. Updated the O-item row and the
  "Open as O8" note.
- **Security: my tracking was stale — O14 already CLOSED it (19 Aug).** We DO deliver standalone security
  (malware removal, firewall config, monitoring); `/services/security` stays a service page. Updated the stale
  D36 clause ("demote to capability / pending confirmation") to point to O14's resolution.
- **O11** (taxonomy ruleset) annotated: its gate (the O8 migration) is complete, so treat as resolved unless
  Hassan flags a final review.
- Not stale (genuinely open, Hassan handling): audit SLA/reviewer/deliverables, rating source, founder photo.
  Resolved: "gives a damn" (keep), Stats.jsx (his — committed).

### FORMS — all four deliver (tested live on staging against SES)
Config: nodemailer over **SES SMTP `email-smtp.eu-west-2.amazonaws.com:587`**, from **`website@cpdev.uk`**
(a verified SES identity — sends from it succeed). Recipients: contact/audit → `hello@cp.agency, afzal@cp.agency`;
lp-audit → `LP_AUDIT_RECIPIENTS` (set: hello@ + afzal@); job-application → `join@cp.agency` (+ CV attachment).
Each also sends a thank-you to the submitter. Submitted a real marked test through **all four** endpoints
(`/api/contact`, `/api/audit`, `/api/lp-audit`, `/api/job-application`) with the submitter set to
`hassan.iqbal@cp.agency`:
- **All four returned `{"success":true}` HTTP 200**, and the server log has **zero SES errors** — SES accepted
  both the team notification and the thank-you for each, including the job form's file attachment.
- **No sandbox rejection observed** (a send to `hassan.iqbal@cp.agency` succeeded alongside the cp.agency team
  addresses), so the account either has production access or all recipients are verified — confirm in the SES
  console. Could NOT query SES directly (no AWS API creds locally, only SMTP creds).
- **What I verified**: the app→SES pipeline works end to end (auth OK, from-identity accepted, recipients not
  rejected, attachment accepted). **What needs Hassan**: open inbox confirmation — the 4 test emails should be in
  hello@/afzal@/join@ + 3 thank-yous + 1 applicant confirmation in hassan.iqbal@. **Check spam too**: the sender
  is `cpdev.uk` (staging) while recipients are `cp.agency`; for production, sending from a `cp.agency` identity
  with DKIM/SPF/DMARC will improve inbox placement.

### Landing-page cleanup — done in source, but the LP is REDIRECTED (not user-facing)
The three claims and the banned phrase were removed from the LP components:
- `LpWhySection` "150+ WordPress projects" → "After years of WordPress projects…"
- `LpAuditSection` "your information is 100% secure" → "Your details stay private." (also this section is
  commented out on the LP)
- `LpResultSlider` "Increase lead generation by 40% within 3 months" → "Turn more of your visitors into leads"
- `LpEstablishedSection` "world-class design" → "design that works" (also fixed an em-dash)
- `Expertise2` "move the needle" → "help your business grow"
**BUT**: `/wordpress-web-development` returns **308 → /services/web-design-development** (redirect I added
earlier). Every `Lp*` component lives only on that retired route, and `Expertise2` is orphaned (rendered
nowhere). So none of these were actually user-facing — my earlier "unverified metrics live on the landing
pages" gap was OVERSTATED; corrected here. Source is cleaned regardless (safe if ever revived). The redirect
DESTINATION (the web-design-development service page) is clean and compliant. **Dead-code cleanup candidate**:
the retired `(lp)` route + `Lp*` components + orphaned `Expertise2` could be deleted (separate decision).

### CMS sweep (service / solution / industry bodies in Sanity staging)
Queried all `services`/`solutions`/`industries` docs. Largely clean. Findings:
- **1 genuine banned phrase (USER-FACING): "scale with confidence"** on the **Analytics** service page
  ("Measure what matters and scale with confidence"). RECOMMEND → "Measure what matters and make confident
  decisions." NOT changed — it is CMS copy; awaiting Hassan's go-ahead to patch staging.
- Percentages are LEGITIMATE, not invented CP results: "30% to UberEats" (delivery-app commission fact),
  "100% yours"/"100%" (ownership/FAQ), "60% … on their phones" (general mobile-usage stat). Kept.
- Minor fluff (not hard-banned): "seamless" ×5, "Leverage" ×1 — optional polish, left.
- **Confirmed live: two industries have `slug: null`** ("Restaurants", "Driving Schools") — the CP-08
  duplicate/null-slug issue is CURRENT, not stale. Broken pages.

## Unverified 4.9/5 rating REMOVED everywhere + Testimonials page reworked (25 Aug 2026, stop for review)

Per Hassan (option 1): drop the number, lead with the real reviews. No aggregateRating schema added (no
verified source to point at).
- **Rating removed in all 5 components**: `LpHero`, `LpTestimonialSection`, `LpWhySection`, `Testimonials`,
  `Testimonials2`. Replaced the "4.9/5 from 47+ Clients" badges with the plain factual label **"Real reviews
  from real clients"**; rewrote the LpWhySection sentence to drop "and a 4.9/5 rating". Also removed the
  AGGREGATE star rows next to those badges (5 stars = the same unverifiable rating in visual form) — but kept
  the PER-CARD stars, which belong to specific named, attributable reviews. Verified: no "4.9/5"/"47+"/
  "satisfied clients" strings remain anywhere in src. Removed the now-unused StarIcon import from LpHero.
- **Testimonials page (`/testimonials`)**:
  - **H1 mismatch fixed**: "Let's simplify your growth strategy." → **"In our clients' own words."** Hero
    description rewritten to introduce the reviews (real, named clients, real projects) instead of a
    contact-page "friendly chat with Hassan" line.
  - **Fixed a real bug**: grid cards and the mobile slider rendered `{testimonial.role}`, but the data uses
    `company` — so EVERY company name was rendering blank. Now `{testimonial.company}`; all 11 companies show.
  - **Removed a duplicate**: Brendan/Alertforce was both the featured card AND a grid card. Removed the grid dup
    → 11 unique reviews (1 featured + 10 grid).
  - **Reordered to lead with the strongest**: grid now opens with Gareth/3DCAD Visuals ("new enquiry the day it
    went live") and Scott/Casa Botanica; Ahmed/Game Art Brain (long) closes the wide col-span-2 card.
  - **Cleaned company display names**: "Express-conveyancing." → "Express Conveyancing", "Casabotanica" → "Casa
    Botanica", "3dcad visuals" → "3DCAD Visuals", "AYOA" → "Ayoa".
  - **Mobile parity**: the slider showed only 4 of 11; now shows all 11 (featured + grid via spread).
  - Verified 375/768/1440 (layout method): pageOverflowX=0, hero zero overflow, desktop bento = 11 cards with
    NO bottom gap, 0 empty-company cards, mobile slider = 11 slides all with companies, active slide fits viewport.

### Does 11 reviews justify a standalone page? MY HONEST VIEW: yes, keep it (matches the brief's keep+fix).
11 genuine, named, specific reviews is at the lower-but-sufficient end. Several are strong and results-oriented
(Gareth's new-enquiry-day-one, Abdul/Scott/Ahmed detailed). Now that companies render, names are prominent, the
duplicate is gone and the strongest lead, the bento layout fills cleanly (no gap) and the page carries itself
without the number. It is also a destination users and search expect. RECOMMENDATION: keep as a standalone page;
gathering even 4-6 more genuine reviews would strengthen it but is not required to justify it. Folding it into a
section is unnecessary now that it presents properly.

## Audit — full rewrite as an honest lower-intent lead magnet (25 Aug 2026, stop for review)

Was a thin page (hero-with-AuditForm → Testimonials → the "Start a project" Contact section) carrying
manufactured urgency, an invented metric, over-promised deliverables, and an unverifiable SLA. Rewrite:
- **Removed the competing "Start a project" Contact section** (`audit/page.jsx`). The AuditForm in the hero
  (posts to /api/audit, needs website URL + email) is now the ONLY conversion, so the page no longer competes
  with the higher-intent Start-a-project flow. Page is now AuditHero → Testimonials.
- **Killed manufactured urgency**: hero label "Only 3 Free Audit Slots Left This Week" → "Free Website Audit".
- **Removed invented metric**: AuditForm subline "Join 150+ companies we've helped" → "Free, with no obligation.
  Your details stay private." (AuditForm is used only by AuditHero; LP pages use a separate LpAuditForm, so the
  change is scoped to /audit.)
- **Honest deliverables**: dropped over-promises for a free short video ("Detailed Conversion Roadmap",
  "Competitor Benchmarking") and rewrote the "what you get" list to what a manual short video genuinely contains
  (UX/journey issues, SEO gaps, speed checks, a few quick wins, where to focus first).
- **What / who / when**: description now says a real person (not an automated scan) reviews the site; reassurance
  line states "sent to your inbox within a few working days".
- **Metadata** de-spammed ("Claim Yours Now"/"today now!" removed).
- Verified 375/768/1440 (layout method): pageOverflowX=0, AuditHero section has ZERO overflow at all widths,
  "what you get" box contains all 6 items (offsetH ≥ scrollH, overflow visible), form + inputs within viewport.
  Off-screen elements are the pre-existing Testimonials carousel only.

### FLAGGED COMMITMENTS for Hassan (brief said flag rather than write what we cannot keep):
1. **Turnaround**: original said "within 48 hours". Softened to "within a few working days" because I cannot
   verify the SLA. A specific promise converts better — if you can reliably hit 48h / 2 working days, tell me and
   I'll state it precisely.
2. **Who reviews it**: written as "a real person, not an automated scan" (defensible). If it is actually you /
   a senior person specifically, confirm and I'll make it stronger ("reviewed by Hassan" / "a senior member").
3. **Deliverables trimmed**: I removed "Detailed Conversion Roadmap" and "Competitor Benchmarking" as over-promises
   for a free short video. If you DO deliver those, say so and I'll add them back.

## Partner With Us — hero CTA now points to /contact (25 Aug 2026)

Per Hassan: hero CTA changed from "How It Works" → /how-we-work to **"Start a partnership" → /contact**. The
agency-specific process now lives on this page, so routing agencies to the general four-pillar process was a detour.

## Partner With Us — offer sharpened + agencies content absorbed (25 Aug 2026, stop for review)

/agencies now redirects here, so this is the definitive white-label page. Checked the agencies-only
components (Message, Difference, Process4, ClientReview): all their content is already represented on Partner
With Us (Message's "An agency, for your agency" is the hero H1; its subhead and Difference's points are the
Growth heading + features + comparison). Nothing valuable is lost by the redirect.
Changes (copy-only within existing components; layout untouched):
- **Hero** (`PartnerWithUsHero.jsx`): label → "White Label Delivery for Agencies" (covers all work, not just
  web+branding); subhead rewritten to name the three things an agency is buying — white-label delivery,
  overflow capacity, specialist skills they lack — plus the distinct-from-direct-work signal ("an extra team
  behind your agency", "your clients only ever see your brand").
- **Growth** (`growth/Growth.jsx`): removed INVENTED/INCONSISTENT stats "8+ Partner Agencies" and "500+ White
  Label Projects" (the 500+ contradicted the ~200 total-projects figure). Replaced with single-source company
  facts: `${YEARS_IN_BUSINESS}+` Years in business, 3 Countries served (UK/US/AU). Dropped "instantly"
  hyperbole. The three features (Expertise on Demand / Scalable Capacity / Seamless Branding) already map to
  the three buying reasons — kept.
- **PartnerWithUs** comparison (`partner-with-us/PartnerWithUs.jsx`): "Infinite scalability on demand" →
  "Scale up or down as demand changes"; "White label - we are YOUR team" → "White label, delivered as your team".
- **Process3** (`PROCESS_3_CARD` step 5): fixed a pre-existing bug — step 5 "Quality & Ongoing Support" had the
  IDENTICAL description to step 4; rewrote it to describe QA + ongoing support (aligns with the FAQ's post-launch
  support answer).
- Verified 375/768/1440 (layout method): pageOverflowX=0 at all three, hero subhead within viewport, stat cells
  ("12+"/"3") within viewport, no content clipped. The right=690/1446 elements at 768/375 are off-screen
  process-carousel slides (clipped by the slider's overflow-hidden; slider untouched), not a page break.
- OPEN QUESTION for Hassan (not changed, per the wait-on-CTA rule): the hero CTA is "How It Works" → /how-we-work,
  but the agency-specific process (Process3) sits on this page and /how-we-work is now the general four-pillar
  process. Consider pointing the CTA at /contact ("Start a partnership") instead. Left as-is pending your call.

## "Taking on projects" banner — de-dated site-wide (25 Aug 2026)

Two availability badges carried a date. `Cta.jsx` was already driven from `new Date()` (so not stale, but a
month-scarcity device that reads awkwardly at month-end); `HomeHero.jsx` was hardcoded "for 2026" (genuinely
goes stale in 2027). Both changed to a non-dating "Now taking on new projects" — never wrong, and drops the
month/year scarcity framing that leans toward the banned "manufactured urgency". Verified live: home badge and
shared Cta both read the new copy, no "for August"/"for 2026" anywhere.

## 4.9/5 from 47+ Clients rating — NO SOURCE FOUND, flagged for Hassan (25 Aug 2026)

The claim appears in 5 components (`LpHero`, `LpTestimonialSection`, `LpWhySection`, `Testimonials`,
`Testimonials2`) and is now live on the homepage, /testimonials and the landing page. Traced it: there is NO
source in the codebase — no `aggregateRating`/schema markup, and no Google Business / Trustpilot / Clutch / G2
link anywhere. The written testimonials that DO exist number ~11 unique genuine reviews (Safety Rac, Express
Conveyancing, PolyMax, Little Astro, Homecare, Loop, 3dcad Visuals, Ayoa, AlertForce, Game Art Brain,
Casa Botanica), not 47. So both the "4.9/5" and the "47+" are unverified in-code. Left unchanged per instruction;
Hassan to confirm a real source (and its URL, so we can cite it) or decide to soften/remove. NOT changed.

## How We Work — rewritten to support all four pillars (25 Aug 2026, stop for review)

Was website-delivery-only: hero "We bring order to digital chaos" + a 5-step website-build timeline
(Discovery & Strategy → UX & Design → Development → Launch & Training → Growth & Optimisation), plus the
generic "minimises risk and maximises ROI" hero line. Rewritten (copy only; components, images, colours and
layout untouched) so the page is the delivery method for EVERY project, not just websites — the homepage
Lifecycle ("launch, improve, grow, automate") links here for exactly this.
- **Hero** (`HowWeWorkHero.jsx`): H1 "How a project with us / actually runs."; subhead names all four kinds
  of work + the three promises (fixed scope up front, senior people, stays after launch). Generic ROI line gone.
- **Process2 timeline** (`PROCESS_2_CARD` in `contants/processCard.js`): five universal delivery stages, each
  written to span the four pillars with concrete specifics — 1 Discovery & scope (fixed price before work),
  2 Plan & design (sign-off; pillar-specific shape), 3 Build & deliver (senior delivery, regular updates),
  4 Launch & handover (QA, deployment, training videos), 5 Support & grow (explicitly the launch→improve→grow
  →automate arc, closing the loop with Lifecycle).
- **Metadata**: title/description broadened from "Website Design Process" to the four-pillar delivery process.
- Verified 375/768/1440 (layout method): pageOverflowX=0, no Key-Deliverables box clipped, all five stages
  render, subhead present. Only "overflow" hits are pointer-events-none decorative shapes inside overflow-hidden
  sections (pre-existing). Layout unchanged vs the prior version — copy-only diff, so no structural regression.
- Untouched here (flagged elsewhere): shared Cta "projects for August" banner; Testimonials "4.9/5 from 47+"
  rating (Hassan to verify) — both handled in the Testimonials step.

## About hero — carousel clip FIXED + subhead reapplied (25 Aug 2026)

Diagnosis (layout-measured, transform-independent): the AboutHero is a fixed-height section with the text
stacked above the carousel (`mt-[6.6rem] h-[30/45/60rem]`). The full 60rem slider + the text exceeded the
fixed `h-[90rem]`, so the slider's layout-bottom (1055) fell ~155px past the section (the earlier "255px"
included ~100px of unsettled slide-animation transform in the rect read). Pre-existing; not introduced this
session. Fix (respects the layout, no structural rework): `h-[…]` → `min-h-[…]` + bottom padding, so the
section grows to contain the full slider. **Subhead reapplied** (concise): "Manchester-based, working with
clients across the UK, US and Australia. 12 years, owner-led from day one." — the D6 local-entity signal.
Verified 375/768/1440 by LAYOUT: slider fits with 60-80px spare, each slide fits its viewport, no overflow.
The hero is taller now (1219/1069/728px) because it shows the full carousel + subhead — flagged; can trade
for a shorter slider if Hassan prefers.

## CP-09/11 — Company & conversion pages: Tier 1 fixes + About — DONE (stop for review)

**Tier 1 live-problem fixes (before any rewriting):**
- **Two redirects wired** (`next.config.mjs`, permanent 308): `/agencies → /partner-with-us`,
  `/wordpress-web-development → /services/web-design-development` (+ its `/thank-you`). Both retired pages
  were still live; the redirects retire them (the page files remain, dead, until final cleanup).
- **Invented metrics removed from `/partner-with-us`** (`Growth.jsx`): "2x Faster Delivery" AND
  "Save ~60% vs In-House" (the same fabricated-metric problem — caught the second while there) →
  "Delivery capacity on demand" / "Lower than hiring in-house".
- **Banned phrases fixed on `/audit`** (`AuditHero.jsx`): H1 "**Unlock** your website's hidden revenue." →
  "See what your website could be doing better."; "**Stop guessing** why you aren't growing…" → "We manually
  analyse your site's UX, SEO and performance, then send you a short video report with the specific things
  worth fixing." (These are the Tier 1 phrase fixes; the full /audit rewrite is still to come.)

**ABOUT — rewritten (major).** Found a **fifth founding-date version, "Est. 2012"** in the story section —
now driven from the single source like the rest. Changes:
- `AboutHero`: added a substantive subhead — "Manchester-based, working with clients across the UK, US and
  Australia. 12 years of brand, web and ecommerce, growth and automation, owner-led from day one." (kept the
  "gives a damn" headline — brand personality, flagged for Hassan's view). Manchester = the D6 local entity
  signal, truthful.
- `Estimate` (story): "Est. 2012" → "Est. December 2013"; story broadened from web/WordPress-only to the
  **four pillars + the company story** — Manchester agency, clients across the UK/US/Australia, founded by
  Hassan Iqbal in December 2013, 12 years, "what began as one person is now a specialist team", post-launch
  support. Tinted for rhythm.
- **Founder section reused** on About (Hassan, owner-led message) — `Founder` gained a `background` prop so it
  is white here (tint on the homepage) to keep the alternation.
- `getFounderImage()` extracted to `src/sanity/founder.js` (shared by homepage + About, DRY).
- Stats/Values/Testimonials kept. Rhythm: hero dark → Stats white → Estimate tint → Founder white → Values
  tint → Cta white → Testimonials orange-tint. **No adjacent repeats.** Verified 375/768/1440: no overflow.

**Next (after review):** How We Work (four pillars + delivery process), Partner With Us (absorb agencies),
Audit (full rewrite), Testimonials (H1 fix + weight). Open flag: the **"4.9/5 from 47+ Clients"** rating still
needs verification (live on homepage/testimonials).

---

## createOrReplace damage audit (24 Aug 2026) — COMPLETE, all recovered

Queried all 22 authored docs (18 services + 4 solutions) on staging and diffed each against its
pre-rewrite Sanity history (base ~17 Aug, the earliest retained). Method: (1) history top-level key
diff for dropped fields; (2) null-risk check of every asset/content field the modular components read.

**Found — fields dropped by `createOrReplace`:**
- **15 pre-existing service docs** lost `category`, `excerpt`, `icon`. (The 3 docs I authored fresh —
  ai-automation, ecommerce, web-design-development — never had them; nothing dropped.) **No live reader:**
  `SERVICES_QUERY` (the only consumer of these) has zero imports; the hub + mega-menu run entirely off
  pillar data (`getNavData` → `pillar`/`navLabel`/`navExcerpt`/`navOrder`, all intact). So nothing rendered
  wrong, but the docs were incomplete vs schema. Recovered all three fields verbatim from history by patch.
- **4 solution docs** lost `excerpt`. **This one WAS read:** the `/solutions` hub feeds `SOLUTIONS_QUERY`
  into `Goal.jsx`, which renders `description: item.excerpt` — so the four goal cards had blank descriptions
  (no crash, which is why the earlier structural check missed it). Recovered by patch; increase-leads got a
  fresh merged-scope excerpt (it absorbed Scale Marketing, so the old pre-merge line was too narrow), the
  other three restored verbatim.

**The optional image/icon fields the modular design never populates are NOT damage:** every modular
component guards them (`service?.heroImage?.asset?.url`, `item.icon?.asset?.url`, `step.icon?.asset?.url &&`,
`(service.fitCard || [])`) and the template intentionally omits them.

**Post-recovery re-diff: CLEAN — no doc is missing any field it had pre-rewrite.** Rebuilt (fresh cache):
all four hub goal cards now render their descriptions. Prior incidents (caseStudies images, solutions goal
icons) were already fixed earlier; this pass closes the remaining service `category/excerpt/icon` +
solution `excerpt` gaps. Go-forward mutation rule recorded in the standing rules above (patch, never
createOrReplace on an existing doc).

---

## Batch A — six growth pages migrated; ALL 18 service docs now modular (21 August 2026)

Migrated the six growth pages onto the modular pattern with approved pricing/naming. All verified at
375/768/1440 (no overflow). O18 data replaced. **This completes the service-page migration: 18/18 modular,
0 legacy.**

- **Two renames applied now** (brought the CP-15 redirects forward): `ppc → paid-media` (title "Paid Media"),
  `maintenance → growth-and-support` (title "Ongoing Growth & Support"). **Redirects wired in
  `next.config.mjs`** (`/services/ppc → /services/paid-media`, `/services/maintenance →
  /services/growth-and-support`, permanent) — verified 308. Footer nav constants updated to the new
  slugs/labels. Weak-name discipline: titles/H1/body carry the search term (PPC/Google Ads; website
  maintenance), nav labels stay short.
- **Pricing (approved):** SEO £500/mo; Paid Media £300/mo (ad spend stated separately on the page); Email
  £300/mo; Growth & Support £300/mo; Security £1,000 (project); **Analytics — no price** (the Investment
  section explains it is usually bundled).
- **The three £300/mo pages read as genuinely different services** — different work, capabilities, framing
  (run ads / send emails / maintain the site). No blurring.
- **Warranty OFF on all six** (none is a build). **No parent bands** (growth pillar has no anchor page).
  **Cross-links "related"** between growth services. **workSlugs [] on all six** — none has genuine
  standalone evidence (SEO only rides on builds; Paid Media + Email have none), so no work section, no
  padding.
- **D43 updated** to cover speed (Batch B move).
- **`speed` navOrder set to 6 in Web & Ecommerce** (from the Batch B move).

**Analytics keep-or-fold recommendation delivered to Hassan (report). Batch A complete — the whole legacy
migration is done. Stopped for review. Nothing pushed.**

---

## Batch B — web specialists migrated (accessibility, migrations, speed) (21 August 2026)

Migrated the three web specialists in place onto the modular pattern (WordPress pattern). All verified at
375/768/1440 (no overflow). Approved naming/pricing applied; O18 placeholder showcase + unapproved pricing
replaced with real content.

- **Weak-name discipline applied:** titles + H1 lead with the search term, nav labels stay short.
  Accessibility → "Web Accessibility & WCAG Compliance" / H1 "Web accessibility that meets WCAG standards".
  Migrations → "Website & Platform Migration Services" / H1 "Website and platform migration, without the drop".
  Speed → "Website Speed Optimisation & Core Web Vitals" / H1 matching.
- **Parent band → Web Design & Development** on all three (read as part of the web offer).
- **Pricing (approved):** accessibility from £1,000, speed from £1,000, migrations from £1,500.
- **Warranty (my judgment, flagged):** migrations ON (a rebuild/launch); accessibility + speed OFF
  (audit/optimisation on an existing site, not a launch — the "after launch" warranty doesn't fit).
- **Evidence (honest, not padded):** migrations shows one genuine migration case (casa-botanica, "migrated
  from"); accessibility + speed have zero standalone case studies → `workSlugs: []` (no work section).
- **Specialist cross-links:** migrations → WordPress + Shopify ("Platforms we migrate to"); accessibility →
  Speed + UI/UX; speed → Accessibility + WordPress ("Works well with").
- **TAXONOMY FLAG:** `speed` **moved from Growth & Performance to Web & Ecommerce** (specialist), so it reads
  as a web specialist alongside accessibility/migrations with the parent band → WDD. D43 had moved
  migrations + accessibility but not speed. Confirmed in nav. Hassan to confirm the move or revert.

**Batch B complete. Stopped for review before Batch A (the six growth services). Nothing pushed.**
14 of 18 service docs now modular; 6 legacy remain (the growth pillar: seo, paid-media, email, analytics,
maintenance, security).

---

## Legacy services (P2/P3) migration — PLANNING, awaiting approval (21 August 2026)

Before migrating the 10 legacy service pages, Hassan asked for: (a) the two renames now (ppc → paid-media,
maintenance → growth-and-support; old URLs already in the CP-15 redirect map); (b) an SEO/search-query
analysis for all 10 (what each should rank for + whether the name matches search); (c) "from" pricing
RECOMMENDATIONS (not written in — he approves each first); (d) the O18 check; (e) migration grouping.

**O18 confirmed (still present on all 10 legacy docs, unrendered):** `projectShowcase[0]` = "The Smokey
Carter" on every one (the placeholder trio), and `options.pricingCard` holds unapproved/inconsistent
figures on every one. Neither renders (legacy layout). Each migration does a full createOrReplace that
REPLACES both with real content + curated workSlugs + single-source pricing (as WordPress did), so O18 is
cleared page-by-page. wordpress already done (O19 too).

**Pricing recommendations, naming/SEO analysis and the 3-batch migration grouping delivered to Hassan for
approval (report). No prices written in, no renames done, no migration started until he approves.**
Growth-retainer services anchor to the approved "from £300/month"; project services anchor to Branding
£1,000 / WDD £1,500. Renames: brand name = clearer term (Paid Media, Ongoing Growth & Support), but title/
H1/body keep the search term (PPC/Google Ads; website maintenance) per D41's "PPC stays in body" rule.

**Stopped for Hassan to approve plan + prices + naming. Nothing pushed.**

---

## Custom App Development built — eight P1 pages complete (21 August 2026)

Migrated `custom-app-development` in place onto the modular layout. Verified 375/768/1440 (no overflow).

- **Peer, not a specialist** — `specialist:false`, a primary alongside WDD and Ecommerce. **No parent band**
  (bespoke software is not a website; a parent band would undersell the work and the £5,000 price point).
  Cross-links ACROSS to **AI & Automation + Web Design & Development**, reframed as **"Related services"** via
  the new `specialistLinksHeading` field (so peer cross-links don't read as sub-parts of its own offer).
- **BI + dashboards covered** in the capabilities (D38 moved them here from Analytics).
- **Pricing from £5,000**, warranty on.
- **Evidence (thin for £5k, so the page carries weight through problem framing + capabilities + process):**
  the two genuine custom-app builds only — **Anthony Walker Foundation** (flagship learning portal) in the
  CuratedWorkGrid, **Biome4Pets** as the caseHighlight. Ayoa/Teleqo/New Compass excluded (website projects).
- CuratedWorkGrid now sizes a single card sensibly (~52rem, centred). New field `specialistLinksHeading`
  added to the registry.

**This completes the eight P1 service pages** (WDD, Ecommerce, Branding, CRO, WordPress, AI & Automation,
Shopify, Custom App Development). Stopped for review. Nothing pushed.

---

## Shopify migrated to modular pattern + curated-work grid for non-3 sets (21 August 2026)

Migrated the `shopify` SPECIALIST page in place onto the modular layout. Verified 375/768/1440 (no overflow,
11 sections).

- **Reads as part of Ecommerce** — parentService band "Part of Ecommerce" links up to `/services/ecommerce`.
- **Specialist links: Migrations + CRO.** Migrations is the primary (replatforming to Shopify). Added CRO
  as the second because (a) a lone link hides the section per the <2 rule set on Branding, and (b) improving
  a live store's conversion genuinely fits an ecommerce build. Flagged for Hassan — happy to drop to just
  Migrations (section then hides) if he prefers.
- **Pricing from £3,500** (a Shopify store is an ecommerce build; same figure as Ecommerce, per Hassan).
  Warranty on (it is a build).
- **Evidence — thin but real, not padded.** Only the two genuine Shopify builds: `minnessak` (flagship) and
  `mr-pickles` (supporting). The shared Work component is a fixed 1-big-+-2-small layout needing exactly
  three, so a new **`CuratedWorkGrid`** presents any count (Shopify shows two, centred). Ecommerce/Branding
  (three curated) still use the Work component unchanged; WDD (generic) unchanged; CRO (empty) still no
  section. The page renders two real builds rather than padding to three.

**Stopped for review before Custom App Development.** (See report for the parent-band framing question on
Custom App Development.) Nothing pushed.

---

## Services pillars — fixed 3-per-row grid (21 August 2026)

With four pillars now live, the pillars grid was forcing four across (`repeat(N)`). Changed the xl grid to a
fixed **3 columns** (`xl:grid-cols-3`); md stays 2, mobile stays 1. Because each column is `1fr`, a wrapped
card keeps the same 1/3 width and aligns left (no stretch). Everything else unchanged (Web & Ecommerce
first, card styling/colours, scroll animation + stagger, copy).

**Verified at 375/768/1440, and simulated every count at xl (cards come from data, max 4 in the registry
today):** 3 → one row of 3; 4 → 3 + 1; 5 → 3 + 2; 6 → 3 + 3. Every wrapped card measured at the same 378px
(1/3) width, left-aligned; no overflow at any breakpoint. Committed on its own.

---

## AI & Automation pillar built + Biome4Pets published (21 August 2026)

Built the AI & Automation PILLAR page (`service-ai-automation`, was a bare stub). Top-level pillar — no
parent band, no specialist links (sub-pages held under D37). modularLayout, real copy leading with
operational OUTCOMES (from Hassan's offering: work with AI tools, build tools with AI, set up processes,
custom AI plugins/tools/integrations). from £1,500 (approved). Warranty on (we build the tools). Verified
375/768/1440 (no overflow, 9 sections).

- **AI pillar now appears in the mega-menu and the services hub** — confirmed. It previously dropped out as
  an empty pillar; now that it has a live service it renders.
- **Biome4Pets published + used as the page's evidence.** Published the `biome4pets` draft → live case study
  (confirmed narrative copied verbatim; only presentation fields added — brand colours, designation). Shown
  on the AI page via a new `caseHighlight` field + `ServiceCaseHighlight` component (the Work carousel needs
  several thumbnailed items; this presents one confirmed story with weight). Facts are exactly as confirmed
  by Hassan — custom app, AI structuring/interpreting/improving reports, 200 reports 3 days → 1 day, observed
  by us + confirmed by client. Nothing added. Links to `/case-studies/biome4pets`.
- **Case-study template hardened** (needed to publish an image-light case study without breaking the build):
  `TheSolution`, `OurApproach`, `TheChallenge`, `ClientOverview` now guard missing images, and the
  `.points.map` calls are null-safe. The 31 image-complete case studies are unaffected. Build verified.

New fields `caseHighlight` added to the registry. New standing rule recorded (below).

---

## WordPress migrated to modular pattern + O19 fixed + parent-link feature (21 August 2026)

Migrated the `wordpress` SPECIALIST page in place onto the modular layout. Real WordPress copy across every
module, 10 questions. Verified at 375/768/1440 (no overflow, 11 sections).

- **O19 FIXED.** The old doc was contaminated with UI/UX-design copy (fit/not-fit/options read as UI/UX:
  "MVP design", "just a logo — see Branding", "SaaS companies"). The full createOrReplace **removes all of
  it** and replaces with real WordPress content. Verified: none of the UI/UX strings remain.
- **Links UP to its parent** (new `parentService` field + `ParentServiceBand` component): a slim "Part of
  Web Design & Development" band under the hero, linking to the parent so WordPress reads as part of that
  offer, not a competitor. **Links across/down** via specialistLinks (Migrations, Website Speed, Security).
- **Pricing:** from £1,500 — a WordPress site is a web build, so it shares the web starting point (added a
  `wordpress` entry to the single source; flagged for Hassan in case he wants a WordPress-specific figure).
- **Warranty ON** (it is a build). Curated work: `casa-botanica-panama` + `sight-for-life` (flagships) +
  `sorted` — WordPress evidence is genuinely strong (6 WordPress case studies, 2 flagships).

New field `parentService` added to `custom-fields-registry.md`. **Stopped for review. Nothing pushed.**

**AI & Automation — blocked, need input from Hassan (see report):** no page content exists, and its only
evidence (Biome4Pets) is an unpublished draft. Cannot build an honest page without direction.

---

## O20 completed — avatar booking sections reworked + booking scrubbed from metadata (21 August 2026)

Hassan: replace the avatar booking sections (do not preserve), and confirm no Cal.com embed or Book a Call
reference remains anywhere. Done:

- **`GradientButton`** (the avatar "Book with Hassan" button) → now a `/contact` "Start a project" link;
  gradient pill + avatar + arrow visual kept, Cal.com embed removed.
- **`Cta.jsx`** (closing section, ~7 pages) → badge, description, both CTAs reworked to Start-a-project;
  the Hassan avatar card is now "Start your project with Hassan and the team".
- **`HomeHero`** → the Cal booking badge and GradientButton reworked to Start-a-project; embed removed.
- **`ContactHero` + `ContactHeroSlider`** → the "Book Strategy Call / 15-min chat with Hassan" card became
  a **"Start a Project"** card that scrolls to the contact form (new `#contact-form` anchor on the Contact
  section). Kept the 3-card "ways to connect" layout (Start a project | Email | Phone). Layout still makes
  sense, so reworked rather than flagged.
- **Metadata cleanup:** 6 page titles + 10 meta descriptions advertised "book a free strategy call /
  consultation" (now a broken promise). Rewrote them to Start-a-project / enquiry framing (home, about,
  agencies, case-studies, contact, how-we-work, partner-with-us, services, solutions, testimonials).
  Also the last `Cta2` caller (`solutions/[slug]`) label → "Start a project".

**Audit result:** the only Cal.com embed left is `CallHero` (the `/call` page). The only "book a call"
references left are (a) the `/call` page itself and (b) two **email templates** that link to
`creativepixels.agency/call` — which is the intended email→/call flow (`/call` was kept for exactly this).
Explanatory code comments that say "no Book a Call" are left as documentation. Verified home + contact at
375/768/1440 (no overflow; GradientButton links to /contact; contact card anchors to the form).

- **SpecialistLinks** now hides itself when fewer than 2 links (Branding's single UI/UX card no longer
  renders as a lone card — auto-handles any future one-link page).

**Nothing pushed.**

---

## CRO migrated to modular pattern (21 August 2026)

Migrated the `cro` doc in place onto the modular layout. Real copy across every module, 10 questions.
Verified at 375/768/1440 (no overflow, 9 sections).

- **Pricing — retainer framing (Hassan's call, option b):** from **£300/month** (single source), framed as a
  monthly conversion programme. Not a fabricated project figure.
- **Warranty — OFF** (`warrantyApplies:false`): CRO is ongoing optimisation, not a build that "breaks".
- **Work section — DELIBERATELY ABSENT.** The audit finding held: there is **not one standalone CRO case
  study** in the estate (SEO/CRO only ever appear as secondary work on website builds). Rather than pad the
  page with unrelated web builds, CRO uses the new `workSlugs: []` opt-out → **no work section renders**.
  This is the honest presentation; the page carries its weight on the fit/not-a-fit qualifier, the process
  and the FAQ instead. (If Hassan prefers, a curated set of conversion-relevant builds can be added.)
- **Specialist links:** UI/UX Design, Ecommerce, Analytics, Paid Media (→ `/services/ppc`, the current slug
  until the CP-15 redirect).

Registry updated: `workSlugs` empty-array = intentional no-work-section. **Branding + CRO done.
Nothing pushed.**

---

## Branding migrated to modular pattern (21 August 2026)

Migrated the existing `branding` doc (replaced in place at its _id, nav/pillar fields preserved) onto the
CP-05 modular layout: `modularLayout:true`, real copy across every module answering the 10 commercial-page
questions, from £1,000 (single source). Verified at 375/768/1440 (no overflow, 10 sections).

- **Warranty — deliberately OFF (`warrantyApplies:false`).** The post-launch warranty covers what we
  BUILD and fixes things that break; a brand identity does not "break", so it does not belong on a
  branding page. Added a `warrantyApplies` field (default true) that gates the Investment warranty strip
  and the closing-CTA warranty line; Branding sets it false. (Recorded in the field registry.)
- **Specialist links:** UI/UX Design only (branding's sibling in Brand & Experience). Renders as a single
  centred card — functional but a touch lone; flagged for Hassan.
- **Evidence (honest):** branding is real but mostly appears bundled INTO web projects (brand-and-website,
  brand redesign), rarely as a standalone engagement. Curated work = `casa-botanica-panama` (flagship,
  brand to life), `the-smokey-carter` (award-winning brand redesign), `manzar` (the clearest standalone
  identity work — bilingual logo + brand guidelines). Credible, better-evidenced than CRO, but the
  identity-led standalone proof is thin.
- **CRO pricing (next page):** no approved figure — will NOT invent one; options put to Hassan (retainer
  framing vs price-less "scoped with you"). CRO warranty likely also off (optimisation, not a build).

New field `warrantyApplies` added to `custom-fields-registry.md`. **Stopped for review before CRO. Nothing
pushed.**

---

## O20 sweep — Book a Call / Cal.com removed site-wide except booking-centric sections (21 August 2026)

Swapped every simple Book-a-Call CTA to **Start a project → /contact** and removed the Cal.com embed,
keeping section layouts. Components changed (10):
- `Cta2.jsx` (14 legacy service pages) — Cal button → Start a project; embed removed.
- `TheSolution.jsx` (case-study detail, 31) — Book a Call (/call) → Start a project (/contact).
- `SolutionsHero`, `TestimonialsHero`, `AgenciesHero` — hero Cal booking button → Start a project; embeds
  removed. `LegalHero`, `ServicesHero` (unused) — vestigial embeds removed. `StickyCta` (unused) — /call
  link → /contact.
- `LpFooter`, `LpHeader` (retiring LP) — Book-a-Call card + embeds removed.

**Verified** at 375/768/1440 (/solutions, /services/wordpress): no overflow, Start a project renders,
legacy pages fully clean.

**Deliberately NOT rewritten — booking-centric sections flagged for Hassan (per his instruction to tell
him before rewriting the avatar booking card):**
- `GradientButton` — the avatar "Book with Hassan" button (Hassan's photo + online dot + Cal).
- `Cta.jsx` — the closing section built around it (Hassan avatar card, "Book a FREE strategy call with
  Hassan"), on home, about, case-studies (both), how-we-work, partner-with-us, solutions.
- `HomeHero` — uses GradientButton.
- `ContactHero` + `ContactHeroSlider` — the "Book Strategy Call / 15-min chat with Hassan" card.

`/call` (CallHero + page title) intentionally kept, noindexed. So **"no Book a Call anywhere" is true
except `/call` and the flagged avatar/booking sections** — those await Hassan's call on how to replace the
booking concept. O20 stays open for that decision.

---

## Ecommerce page built (21 August 2026)

Second Web & Ecommerce pillar page, same modular pattern as WDD (`service-ecommerce`, staging,
`modularLayout:true`, `pillar:web-ecommerce`, `specialist:false`, `navOrder:2` → sits second, after WDD).
Real copy across every module answering the 10 commercial-page questions; from £3,500 (single source);
warranty in both places.

- **Specialist links:** Shopify (primary platform, own page) + **Migrations** (replatforming an existing
  store is a core ecommerce scenario and has its own page). **WooCommerce got no link** — there is no
  standalone WooCommerce service page to point to — but it is named in the copy (platform choice).
- **Evidence (honest read — thin but real):** curated work via a new optional `workSlugs` field so the
  page shows genuine ecommerce work, not the generic web set. Draws on **minnessak** (flagship Shopify
  build), **mr-pickles** (supporting Shopify), and **dr-donuts** (a lighter donut-shop website; O17 flags
  its live status). So the section is **credible but thin — anchored by two real Shopify builds**, not
  padded with unrelated work. `ivy-and-duke` (a real ecommerce dog-bed brand) is still a DRAFT (O16); if
  published it would strengthen this section.

Code: `workSlugs` added to the query + a `getCuratedWork` path in `/services/[slug]` (curated, order
preserved; falls back to the generic flagship set). `SpecialistLinks` grid made count-adaptive (2 cards
centre instead of gapping a 4-up row). Verified at 375/768/1440 (no overflow; 2 specialist cards centred;
curated Shopify work renders). **Stopped for review. Nothing pushed.**

---

## Book a Call removed from global header + footer (21 August 2026)

Per Hassan (D40/D8, deferred three times): removed the Cal.com Book-a-Call from the global chrome.
- **Header + HomeHeader** — Book a Call `SecondaryButton` (Cal.com) → **Start a project** `PrimaryButton`
  (a real Link → /contact); Cal.com `getCalApi` embed removed.
- **MobileMenu** — the "Contact Us" CTA became **Start a project** + reassurance microcopy
  ("No obligation, just a conversation."); the Book-a-Call contact card removed (Phone + Email kept);
  Cal.com embed removed.
- **Footer** — the top "Book a free 15-minute call / Get Free Consultation" block **removed entirely**,
  and the "Book a Call" contact card removed (Phone + Email kept); Cal.com embed removed.
- `/call` stays live + noindexed for direct email links; nothing on the site links to it.
- Reassurance microcopy sits in the mobile menu (room); the desktop header bar is the button only (a
  fixed pill with no room for a second line) — flagged for Hassan.

Verified at 1440 + 375: header shows Start a project, footer/menu have no Book a Call, no overflow.

**Residual (NOT header/footer — out of the stated "components only" scope, flagged for a decision):**
"Book a Call" / Cal.com booking still appears via **`Cta.jsx`** (the closing-CTA section) on home, about,
case-studies (index + detail), how-we-work, partner-with-us, solutions; **`TheSolution`** on case-study
detail; **`Cta2`** (as "Get Free Consultation" + Cal embed) on the 14 legacy service pages; and the
retiring **LP footer**. `StickyCta.jsx` also has it but is unused (dead). So "no Book a Call anywhere" is
NOT yet fully true — replacing the `Cta`/`Cta2` closing CTAs is a separate, site-wide CTA change. Recorded
as **O20**.

---

## CP-05 — wrapper refactor DONE + Web Design & Development page built (21 August 2026)

Hassan approved the refactor plan + all five decisions (modularLayout boolean; code pricing source now,
Sanity singleton later; Studio fields to be added; leave the 14 placeholder docs but record them;
remove Book a Call + banned header on all 16). Also confirmed the Investment module ignores
`options.pricingCard` and reads the approved source. Executed:

**Wrapper refactor (shared, prop-driven, presence-gated):**
- `ServicesDetailHero` — Book a Call / Cal.com **removed** (D40); primary CTA now "Start a project" →
  /contact; "See Case Studies" secondary when `caseStudiesLink` present; `heroImage` optional (centres
  when absent); label content-driven.
- `PartnerWithUs2` — banned "Stop losing money to..." header **removed**, header content-driven with a
  compliant default ("The problems we solve").
- `Expertise3`, `Methodology` — headers content-driven with current-copy defaults; icons made optional.
- `src/content/servicePricing.js` — single source for "from" figures + warranty copy.
- New modules `SpecialistLinks`, `ProjectShowcase` (fit/not-a-fit), `Investment` (approved price +
  includes + warranty). `ServicesHubCta` parametrised for reuse as the closing CTA.
- `queries.services.js` — projects the new fields; **drops `options.pricingCard`**.
- `/services/[slug]` page gates on `modularLayout`: ON → modular layout (Cta2 + Testimonials dropped);
  OFF → the legacy layout unchanged.

**Verified the 16 existing pages (local prod build, 375/768/1440):** all build and render.
**Visual changes — only the two intended ones, on all 16:** (1) hero CTA row is now Start-a-project +
See-Case-Studies (Book a Call gone); (2) partner header is the compliant "The problems we solve". No
overflow at any breakpoint. Residual "Book a Call" is the **global Header/Footer** (site-wide chrome,
present on the homepage too) — the deferred Cal.com teardown (O9), out of scope here.

**Web Design & Development page built** (`service-web-design-development`, staging, `modularLayout:true`,
`pillar:web-ecommerce`, `specialist:false`, `navOrder:1`). Real copy answering the 10 commercial-page
questions; specialist links to WordPress / Migrations / Accessibility / Website Speed; price from the
single source (from £1,500); warranty in both places. Verified at 375/768/1440 (no overflow; no-image
hero centres; 4 specialist cards in one row at xl). The hub + mega-menu now lead Web & Ecommerce with
WDD (fixes the earlier thin-pillar flag). **Stopped for review before Ecommerce. Nothing pushed.**

New open items recorded: **O18** (14-doc content cleanup — placeholder showcases + unapproved pricing),
**O19** (wordpress doc UI/UX-copy contamination — flagged as a content error). Studio field spec for the
new fields added to 00-context §5.

---

## CP-05 — pivot to wrapper refactor + data-integrity findings (21 August 2026)

Hassan overruled building the two pages as bespoke route segments (two parallel systems; uneditable
in Studio; leaves the same faults on the other 14 service pages). Correct call. New direction: refactor
the shared Sanity section wrappers to be prop-driven / presence-gated / banned-phrase-free /
Book-a-Call-free / asset-optional, then author both pages as `services` docs on `/services/[slug]`.

Investigated staging (read-only) before planning. **Findings that reshape the work:**
- Section headers (partnerWithUs/expertise/methodology) have **no content fields** — 100% hardcoded in
  components. Making copy content-driven needs **new schema fields**. **No Studio schema in this repo**
  (external; O13 pattern — I spec + populate, Hassan adds Studio definitions).
- **`projectShowcase` is a repeated placeholder** (same Smokey Carter / Game Art Brain / Ivy & Duke trio
  on nearly every doc). **`options.pricingCard` is unapproved + inconsistent** (£1,995/£2,495/£1k-mo/…,
  none matching the approved £1,500/£3,500). **Neither is rendered today** — activating naively would
  surface broken content + old prices on all 16 pages. `wordpress` doc is cross-contaminated with
  UI/UX-design copy. → Author correct data for the 2 new pages only; clean the other 14 in a later pass.

Refactor plan written to `cp-05-wrapper-refactor-plan.md` and reported for approval **before**
implementing (scope is larger than it looks: external Studio schema changes + content decisions).
Five open decisions gate the build (gating field, pricing source, Studio fields, the 14 placeholder
docs, universal Book-a-Call/banned-phrase removal). **Nothing built, nothing pushed.**

---

## Services hub — real copy pass + CP-05 plan written (21 August 2026)

CP-04 copy pass on /services: every `[Placeholder — CP-04]` marker replaced with real,
publishable marketing copy (`162a06d`, pushed to `origin/development`). Covered hero + positioning
statement, four pillar blurbs (Web & Ecommerce weighted as "the core of what we do, and the largest
part of our business"), the relevant-work heading, specialist-capabilities intro, both route cards
(audit + solutions), and the closing CTA (warranty — three months free post-launch support — as the
trust signal). UK English, no em dashes, no banned phrases, no invented outcomes/metrics/testimonials.
Verified against a production build (`next build` + `next start`, curl-confirmed the rendered copy).
Stale PLACEHOLDER code comments removed; pillar fallback string emptied. No structural/UI change.

CP-05 plan delivered to `cp-05-service-pages-plan.md` (plan only, not built): module system (the
existing fixed section sequence + two latent modules to activate — `projectShowcase`, `options`),
structural model, both pages (Web Design & Development from £1,500; Ecommerce from £3,500), evidence
footing (web strong, ecommerce thinner-but-real; the §8 0-quotes constraint; recommend dropping the
empty global Testimonials + generic mid-page Cta2 from these two pages), pricing + warranty placement,
and build sequence. Awaiting Hassan approval before any build.

---

## CP-02 corrections v2 + analytics go-wide (19 August 2026)

Hassan reversed the /call decision and widened industries + analytics. Applied:
1. **KEEP /call** (Cal.com stays) — **noindexed** in code (`call/page.jsx` robots.index=false); off all
   nav/CTAs, direct/emailed links only. Removed from the redirect map. **No Cal.com teardown.**
2. **Industries — evidence-led set of 10** (`04` §3.4): 7 with real delivered case-study evidence
   (B2B & Professional Services, Technology & SaaS, Ecommerce Brands, Charities & Non-profits,
   Education & EdTech [added], Travel/Hospitality/Leisure [added], Home Improvement & Interiors) + 3
   fallback-only (Driving Schools, Pharmacies, Restaurants — no delivered proof, "Recent work"
   fallback). Each legacy industry URL → its own page; sme-founders → /solutions. Expansion contract:
   `hasPage:true` ⇒ page + nav + filtering, no code (built once at CP-08). Fallback labelled
   "Recent work". Set decided from the 31 case-study bodies (staging).
3. **Test routes → 404** (not 410).
4. **Analytics go-wide** (see 00-context §10 wiring status): conversion `enquiry_submitted` fires in
   `Form.jsx` on success before redirect (most reliable). Wired: `cta_click` (Primary/Secondary
   buttons), `call_booking_clicked` (GradientButton), `case_study_view` (new `TrackView`), `email_click`
   + `phone_click` (footer); `service_selected`/`solution_selected` in the mega-menu (CP-03). Pending:
   step_2/3, industry_selected, pricing_view. All events reach `dataLayer` (page_path auto-added);
   **GTM→GA4 forwarding open as O7**.

**CP-03 mega-menu next**, then stop for review.

### Route cards — use the project PrimaryButton + accent-tinted stroke (checkpoint)

Two small follow-up tweaks per Hassan:
- **CTA now uses the project's `PrimaryButton`** (white on navy `#312749`) instead of a custom
  button span — so the card is a `div` (button link no longer nested), fires `cta_click` via
  `ctaPosition`.
- **Decorative stroke is now colour-tinted to each card's accent** (orange / pink) — the cta-bg stroke
  path with a transparent→accent gradient, bleeding off the bottom-right corner.
- Everything else unchanged; contrast re-verified AA (label 4.96 / 6.84:1, heading 13.2, body 6.4:1);
  0 overflow at 1440/768/375. Needs your eyes: the tinted stroke + PrimaryButton look, and that the
  stroke (behind, corner) doesn't sit under body text.

### Route cards (audit + solutions) — upgraded to the site's rich card language (superseded above)

The two `/services` route cards read too plain. Studied the richest card treatments (Partner With Us /
GlassFeatureCard, the cta-bg closing CTA + decorative stroke, LightFeatureCard2 / Expertise feature
cards) and rebuilt the signposts borrowing from them (no invented pattern):
- White `rounded-[3rem]` cards, generous padding, a **decorative stroke** (`services-dropdown-stroke`)
  bleeding off the bottom-right, a **glowing coloured icon tile** (white icon on the accent), a
  **coloured hover-shadow lift**, label → heading (2.6–3rem) → body, and a solid navy CTA button with a
  hover arrow-slide.
- **Distinct but a pair:** audit = **orange** accent + analysis icon, solutions = **pink** accent +
  focus icon; identical layout/treatment otherwise.
- **Kept:** two cards side-by-side desktop / stacked mobile, `/audit` + `/solutions`, `MotionEffect`
  scroll animation staggered (0.1 / 0.25), **placeholder copy verbatim**.
- **Contrast — all WCAG AA (measured on the rendered colours):** audit label 4.96:1, solutions label
  6.84:1, heading 13.2:1, body 6.4:1, CTA button (white on navy) 13.8:1 — labels use darkened accent
  shades (#A85D00 / #B0006E) so the accent still reads but passes AA on white.
- **Verified in a production build:** 1440 two cards (585px), 768 two columns (342px), 375 stacked;
  **0 horizontal overflow at all three**.
- **Needs your eyes:** the rendered richness — the glowing icon tiles + whether the white
  analysis/focus icons sit well on the coloured tiles, the decorative stroke at 25% opacity, the
  hover shadow-lift + arrow-slide, and that the two cards read as a distinguishable pair. Contrast is
  verified by measurement; the rest is visual.

### Pillars section — matched to PartnerWithUs2 EXACTLY (glass/bg/colour) — AA caveat (checkpoint)

**Update:** after the AA-safe darker version, Hassan asked (repeatedly) for the pillars to look
**exactly like the Partner With Us section** — "background colour glass effect each and everything".
So the section now matches `PartnerWithUs2` / `GlassFeatureCard` **literally**: `process-bg` background
(no scrim), **`white/15` translucent glass cards with the white gradient-mask border**, white text,
pink `#FF37B3` label, per-pillar glowing coloured icon tiles (Web=blue, Brand=orange, Growth=pink).
Colour only — layout, grid, structure, animations, copy unchanged; 3 equal cards, Web first.
- **AA CAVEAT (recorded, informed decision):** this literal treatment is the one that **measures below
  WCAG AA** on `process-bg`'s light patches — white text **worst 2.06:1 / avg 4.46:1**, pink label
  ~1.9:1 — the same as `PartnerWithUs2` itself. Hassan chose the exact PWU look over the AA-safe darker
  variant after being shown the numbers twice. The AA-safe version (dark scrim + darker glass fill +
  lightened label, all text ≥ 4.5:1) is one commit away if AA is reprioritised.
- Verified in a production build: structure identical, **0 overflow at 1440/768/375**.

### Pillars section — recoloured to the PartnerWithUs2 dark-glass treatment (superseded by the above)

Colour-only restyle (layout, grid, card structure, animations, copy all unchanged; still 3 equal cards,
Web & Ecommerce first, primary-only). Studied both Partner With Us sections and **flagged a conflict
before applying**: `PartnerWithUs` uses a single pink accent (would flatten the pillars' per-pillar
colours) and `PartnerWithUs2` uses three per-card colours. Hassan chose **PartnerWithUs2 (dark glass)**.
- **Second conflict flagged + resolved:** PWU2's *literal* treatment (white/15 glass + white text + pink
  `#FF37B3` label on `process-bg`) **fails WCAG AA** — measured white heading avg 4.46 / worst 2.06:1,
  label ~1.9:1 (process-bg has light patches, max luminance 0.37; the white/15 glass lightens the card).
  Hassan chose the **AA-safe dark-glass** option.
- **Applied:** dark bg image (`process-bg`) + a `bg-[#080818]/70` **scrim**; card fill `bg-[#0b0a24]/55`
  (dark translucent glass, not white/15); white text; per-pillar **glowing coloured icon tiles**
  (Web=blue #3078FF, Brand=orange #ED910C, Growth=pink #FF37B3 — distinction preserved on the tiles);
  border white/15 → per-pillar on hover; label lightened to `#FFCCEC`.
- **Contrast re-verified (worst case, over the brightest image patch):** heading white **10.2:1**, blurb
  white/80 **8.4:1**, service links **10.2:1**, label **4.67:1** — **all ≥ 4.5 (WCAG AA)**.
- **Verified in a production build:** structure identical, **0 horizontal overflow at 1440/768/375**.
- **Needs your eyes:** the rendered look (dark glass over process-bg, the glow tiles, whether the
  **decorative `ServicesLogoShape`** — kept from before — still suits the dark background), and the
  animations/hover playing. The contrast is verified by measurement, not by eye.

### CP-05 plan (Web Design & Development + Ecommerce) — delivered for approval, NOT built (20 Aug)

Presented the approach in chat (structural model, CP-11 modules, Sanity/data needs, WordPress/Shopify
relationship, case-study evidence + gaps). Nothing built — awaiting Hassan's approval. Key flags:
the brief's exact CP-11 landing-page module list is **not in the repo** (external brief), so modules
are derived from the existing `services` module toolkit; the `services` type supports the standard
modules already, but has **no warranty field** and **no parent/related-services field** for the
WordPress/Shopify cross-links (schema additions to confirm); and case-study→service **tags are
unreliable**, so both pages fall back to flagship-first "Recent work" until reliable tags exist.

### Services hub — specialist flag splits pillars vs capabilities (checkpoint)

Added a `specialist` boolean to the `services` type (staging, all 16): `true` for wordpress, shopify,
migrations, accessibility, speed, security, email, analytics; `false` for the rest. Nav query projects
it; `nav.js` carries it on each service item (mega-menu still shows all). **Pillars section now shows
PRIMARY only** (`!specialist`, empty pillars still drop); **capabilities section shows SPECIALIST
only** — **verified: no overlap**. Added `specialist` to the O13 Studio spec (alongside `pillar`,
`designation`). Verified in a production build, 0 overflow at 1440/768/375. The resulting split:
- Brand & Experience (primary): Branding, UI/UX Design (2)
- **Web & Ecommerce (primary): Custom App Development ONLY (1) — THIN**, because WordPress / Shopify /
  Migrations / Accessibility moved to specialist and the two primary CP-05 pages (Web Design &
  Development, Ecommerce) don't exist yet. Once CP-05 adds them it becomes 3 and reads well. Flagged.
- Growth & Performance (primary): Ongoing Growth & Support (maintenance), SEO, Paid Media, CRO (4)
- Capabilities (specialist): WordPress, Shopify, Migrations, Accessibility, Speed, Security, Email,
  Analytics (8)

### Services hub — final three sections styled; HUB COMPLETE (checkpoint, awaiting review)

Studied the comparable sections first (findings in chat): closing-CTA language = `Cta.jsx` /
`Cta2.jsx` (both **Book-a-Call-built**, so treatment reused, not the component); capability list =
`Expertise2.jsx`; **no dedicated two-up signpost pattern exists** (said so; used the shared card
language). Split `ServicesHubOutro` into three styled components, each committed separately:
- **`ServicesCapabilities`** — pulls the capabilities from **getNavData** (one source of truth), as a
  compact chip index of the services (15 chips), Expertise2-style header, `MotionEffect` scroll
  animation. **FLAG:** no primary/specialist flag on the service data, so it shows the FULL set
  (overlaps the pillars); a `specialist` flag (mirroring the case-study `designation`) would make it a
  genuine subset — recommended, not invented. Placeholder copy verbatim.
- **`ServicesRoutes`** — the two routes (`/audit`, `/solutions`) as two-up cards in the shared card
  language (rounded, coloured border + hover shadow, arrow), `MotionEffect` staggered. Placeholder
  copy verbatim.
- **`ServicesHubCta`** — the closing CTA, given **proper weight**: the site's heavy closing-CTA
  treatment (full-bleed `cta-bg` `rounded-[3rem]` card + `CtaBgStroke` + white `SectionTitle`/
  `Description`, one `MotionEffect`), **"Start a project" + reassurance, NO Book a Call**. Placeholder
  copy verbatim. (Fixed a 10px overflow at 768 from the decorative stroke bleed — added
  `overflow-hidden` to the section.)
- **Verified in a production build:** all three render (15 capability chips, 2 equal route cards, CTA
  with "Start a project", no Book a Call in the hub); **0 horizontal overflow at 1440 / 768 / 375**.
- **Could NOT verify visually:** the scroll-entrance animations *playing*, card/chip **hover** states,
  and the rendered pixels (CTA background, stroke, spacing, balance). Those need your eyes.

**HUB STATUS: the `/services` UI is now complete** — hero, pillars, relevant work, specialist
capabilities, the two routes, and the closing CTA are all brought to the site pattern. Outstanding on
the hub is **copy only (CP-04)** — every section carries `[Placeholder — CP-04]` — plus the
data-driven refinements already flagged (a `specialist` flag for capabilities; a live-status check on
a few case studies). No structural UI work remains.

---

### Relevant-work — Part 1: flagship designation + fallback order (checkpoint)

The hub was surfacing AO Arena (pitch mockup) and Peekaboo (MVP) as featured work via a
newest-first fallback. Fixed the data:
- **Added a `designation` field** (`flagship` / `supporting` / `archive`) to the `caseStudies` type;
  **populated all 31 published studies** in staging from `03-url-audit.md` §8 — **9 flagship, 20
  supporting, 2 archive** (`ao-arena`, `peekaboo`). Verified counts.
- **Fallback order changed** (hub `HUB_WORK_QUERY`, `services/page.jsx`): tagged → **flagship** →
  **supporting** → newest, via `order(select(designation==...))`. **Archive is filtered out of the
  fallback entirely** (`!(designation in ["archive"])`) — it can only surface via a direct link or the
  work hub, per the rule. An undesignated study still passes (ranks into the newest tier).
- **Added `designation` (and `pillar`) to the O13 Studio spec** so they're editable in Studio.
- **Confirmed in a production build:** AO Arena and Peekaboo **no longer appear on `/services`**; the
  section now shows flagships (Minnessak, Now Press Play, Sight for Life).
- Styling of the section is **Part 2** (below); labels ("Recent work" / "Related work") handled there.

### Relevant-work — Part 2: reuse the work section + honest labelling (checkpoint)

Studied the homepage `Work` section + the hub `FeaturedCaseStudies` (findings in the chat report).
The relevant-work section **already reuses `Work.jsx`** (the homepage work section — same card
treatment, big-card + two-small-cards desktop / `WorkSlider` mobile, cropped images, hover cursor
bubble, `MotionEffect` scroll animation), so `FeaturedCaseStudies` (a heavy filtered listing) was
rightly not force-fit. Part 2 made it honest:
- **Parametrised `Work.jsx`** with `label` / `title` / `description` props — **defaults reproduce the
  homepage copy exactly**, so the homepage is unchanged (verified: still "Our Work" / "Digital Done
  Right.").
- **`/services` passes `label="Recent work"`** — the honest fallback wording, because the hub has no
  tag so its set is always the fallback (flagship-first). ("Related work" is reserved for tagged
  contexts — industry / service-detail pages — later.) Title + description are **PLACEHOLDER (CP-04)**.
- **Verified in a production build:** `/services` relevant-work shows the "Recent work" label + the
  flagship studies (sight-for-life, now-press-play, minnessak), **no archive**; homepage unchanged;
  **0 horizontal overflow at 1440 / 768 / 375**.
- **Could NOT verify visually** (pane doesn't composite; hover not drivable): the scroll-entrance
  animation *playing*, the cursor-follow "View" hover bubble + card hover shadow, and the rendered
  pixels (image crops, card spacing, balance). Those need your eyes.

---

### UI pass — services pillars section brought in line (checkpoint, awaiting review)

Second section. **Studied first** the comparable content sections (homepage `Services`, service-detail
`Expertise3`) + the shared card (`LightFeatureCard2`). Findings in the chat report: tinted-bg section +
decorative `ServicesLogoShape`; centred `SectionLabel/Title/Description` in **scroll-triggered**
(`inView`) `MotionEffect`s, **tween `duration:0.8 ease:"easeOut"`**, delays 0.1/0.25/0.4; card grid
`grid-cols-3` xl (mobile slider), each card `MotionEffect inView` index-staggered `0.4+idx*0.15`,
tween 1.0; card = white `rounded-[3rem] p-[3rem]`, coloured icon tile, hover coloured shadow `…1C` +
`border`, arrow-on-hover.

**Rebuilt `ServicesPillars`** to that language:
- Section shell now matches: `bg-[#F0F6FF]`, decorative `ServicesLogoShape`, standard padding.
- Header + each pillar card wrapped in **scroll-triggered `MotionEffect`** (tween 0.8/1.0 ease-out,
  index-staggered) — same as the homepage sections; reduced-motion now inherited from the fixed primitive.
- Cards adopt the shared **card treatment** (white `rounded-[3rem]`, `p-[3rem]`, coloured icon tile,
  coloured hover shadow) — but hold a **list of service LINKS** (each firing `service_selected`), not
  `LightFeatureCard2`'s plain bullets, and keep the **featured** hierarchy, so `LightFeatureCard2` is
  not force-fit (it has no linked-list or featured variant). Colours = same source as the mega-menu.
- **REVISED (Hassan): no featured card.** The oversized Web & Ecommerce card unbalanced the layout —
  removed. **All pillars are now EQUAL cards in a single adaptive row**; Web & Ecommerce keeps its
  prominence **by order (first), not size**. The row's **column count adapts to the data** —
  `repeat(N)` at xl via a `--pillar-cols` CSS var (three now, four once AI has content), stacking to
  md:2 / base:1 below. Never hardcoded 3.
- **Kept:** pillar grouping from `getNavData` (unchanged), **Web & Ecommerce first** (stable sort),
  empty pillars render nothing (AI absent), `service_selected` firing, **all placeholder copy verbatim**.
- **Mobile:** pillars **stack** (grid-cols-1 → md:2 → xl:repeat(N)) rather than a card slider — the
  shared slider renders `LightFeatureCard2`, not linked pillar cards, so a slider would be a
  near-duplicate; a small set stacks cleanly. Flagged.
- **Verified in a production build** (`next build` exit 0; `next start`): SSR shows tinted section,
  header placeholder copy, all three pillar headings at the SAME size, Web & Ecommerce first. Browser:
  **3 cards** → 1440 three equal columns (378px each), 768 two columns, 375 one column;
  **4 cards** (simulated via `repeat(4)` + a cloned card) → 1440 four equal columns (275px each);
  **0 horizontal overflow at every count and breakpoint**.
- **Could NOT verify visually here** (pane doesn't composite; hover not reliably drivable): the
  scroll-entrance animation *playing* (inView/tween/stagger), the card **hover shadow/border**, the
  rendered pixels (icon tiles, colours, spacing, decorative-shape position, balance), and the
  reduced-motion render. Those need your eyes.

---

### MotionEffect primitive now respects prefers-reduced-motion (site-wide, checkpoint)

The reduced-motion gap was a **site-wide** bug (the primitive powers **74 components**), not a hero one.
Fixed at the source:
- `motion-effect.jsx` now calls `useReducedMotion()` (motion/react). Under reduced motion the element
  is pinned to its final **"visible"** variant with a **zero-duration** transition — no slide, no
  zoom/scale, no fade-from-transform — matching the carousels' choice (disable the motion, show the
  static result), not a new behaviour. **When motion is on, the rendered props are byte-identical to
  before**, so no animated section changes.
- **Cannot leave a section invisible by construction:** the "visible" variant is always the
  fully-shown end state (opacity 1, scale 1, offset 0; unset props default to visible), and reduced
  motion forces `initial=animate="visible"`. This holds for all 74 usages regardless of their flags,
  so the "disabling motion hides content" failure mode cannot occur.
- **Removed the local reduced-motion handling from `ServicesHubHero`** — it now uses `MotionEffect`
  plainly, like every other hero. One implementation.
- **Verified:** `next build` exit 0; motion-on logic provably unchanged (only the reduced-motion branch
  is new); SSR renders content for every section.
- **Could NOT verify visually here:** (1) the motion-on animation *playing* — the Browser pane isn't
  displayed, so it doesn't composite frames and framer's rAF never ticks; MotionEffect content sits at
  its initial opacity in this env (a long-standing env artifact, unchanged by this fix, not a
  regression). (2) The reduced-motion *render* — I can't emulate `prefers-reduced-motion` in this env.
  Both need a real displayed browser. **Caveat to check:** because `useReducedMotion` is client-only,
  SSR renders the motion-on initial (hidden) state, so a reduced-motion user gets a brief opacity-0
  flash until hydration snaps content visible — acceptable and standard, but flagging it.

---

### UI pass — services hero brought in line with the site pattern (checkpoint, awaiting review)

Section-by-section UI fixing (content/copy untouched, placeholder stays — CP-04). First section: the
`/services` hero (`ServicesHubHero`), rebuilt to match the existing hero treatment.
- **Studied first** (homepage hero + service detail hero + the `MotionEffect` primitive). Findings in
  the chat report. Key facts: entrance animation is `MotionEffect` (`motion/react`), variant-based
  slide-down + fade + zoom, **spring stiffness:120 damping:20** in heroes, **0.15s stagger** via
  incremental `delay` (0 → 0.15 → 0.3 → 0.45), animate-on-mount (`inView` false).
- **Rebuilt** the hero to that pattern: full-bleed `audit-hero-bg.webp` + three decorative logo shapes
  (`z-1`/`z-2`), content at `z-10` in `.container`; `SectionLabel` → h1 (`text-[3rem] md:text-[7rem]`,
  `#312749`) → `SectionDescription` positioning slot → `PrimaryButton` "Start a project" + reassurance;
  the four blocks wrapped in staggered `MotionEffect`s (spring 120/20, delays 0/0.15/0.3/0.45).
- **Reused** the shared primitives (`MotionEffect`, `SectionLabel/Description`, `PrimaryButton`,
  decorative-element shapes) — no near-duplicates.
- **Kept:** CP-06 structure, positioning slot, "Start a project" + reassurance, **no Book a Call**.
  **Placeholder copy unchanged** (verbatim).
- **prefers-reduced-motion:** the shared `MotionEffect` primitive **does NOT respect it** and neither
  do the existing heroes — reported, not copied. This hero gates its animation on `useReducedMotion`
  (motion/react): under reduced motion the slide/zoom/fade are dropped and content simply appears. The
  proper site-wide fix is to teach `MotionEffect` itself — flagged for a later pass so every hero
  benefits.
- **Verified in a production build** (`next build` exit 0; `next start`): background present, h1 70px
  at ≥md / 30px mobile, 4 `MotionEffect` wrappers, no Book a Call in the hero, **0 horizontal overflow
  at 1440 / 768 / 375**.
- **Could NOT verify visually** (browser pane doesn't composite frames + no reduced-motion emulation
  here): the actual entrance motion (slide/fade/zoom, timing, stagger) playing, the reduced-motion
  render, and the rendered pixels (background image, shape positions, spacing). Structure + computed
  styles verified via DOM; motion needs a human eye.

---

### Industries — 3 held (19 Aug) + CP-03 services hub rebuilt (checkpoint, awaiting review)

**Industries:** 7 evidenced approved; **Driving Schools, Pharmacies, Restaurants HELD** — set to
`hasPage:false` in staging (6 docs incl. duplicates), NOT published. Reasoning recorded in D44 +
`04` §3.4: no delivered case study, and the "Recent work" fallback would fill their page with
unrelated work (a pharmacy owner seeing a safari lodge learns we've never done pharmacies — worse than
no page). Legacy `/solutions/<x>` URLs redirect to `/services/web-design-development` until Hassan
confirms; turning one on later is a content change (`hasPage:true`). `interiors-and-furnishings` →
`/industries/home-improvement-interiors`; `sme-founders` → `/solutions`.

**CP-03 services HUB rebuilt** (`/services`) to the CP-06 hierarchy, awaiting review:
- **One source of truth:** the hub uses **the same `getNavData()` serviceColumns** as the mega-menu;
  empty pillars render nothing (AI & Automation is absent — verified).
- **Not fifteen equal cards:** the FOUR PILLARS are the frame; services sit inside them.
  **Web & Ecommerce is the featured, full-width block** (its 45–50% weighting) and leads the section;
  Brand & Experience + Growth & Performance follow in a responsive grid.
- **Sections** (new, in `components/sections/services/`): `ServicesHubHero` (hero + positioning +
  "Start a project"), `ServicesPillars` (data-driven pillars), reused **`Work`** for relevant work,
  `ServicesHubOutro` (specialist capabilities + "not sure?"→/audit + solutions→/solutions + final CTA).
- **CTA is "Start a project" + reassurance microcopy** (D7); **no Book a Call in the hub** (the 1
  "Book a Call" in SSR is the shared site header/footer — the still-pending D40 CTA sweep, not the hub).
- **All copy is PLACEHOLDER, flagged** (24 `[Placeholder — CP-04]` markers) — real copy is CP-04.
- `service_selected` fires on the pillar service links (with `service_pillar`).
- **Verified in a production build** (`next build` exit 0; `next start`): SSR shows the full hierarchy;
  browser at **1440** (Web featured, 3-col rest), **768** (2-col rest, 0 overflow), **375** (stacked,
  0 overflow).
- **FLAG:** relevant work is newest-first (the honest fallback, no tag on the hub), which currently
  surfaces **AO Arena (concept)** and **Peekaboo (MVP)** as featured — because a **flagship
  designation does not exist in Sanity yet** (the §8 classification lives only in the audit doc). To
  show flagships tagged-first on the hub, that designation needs adding to the case-study data
  (O4/O5 / CP-11). Recorded, not hacked around.
- **Stopped before any further hub polish / other pages, per instruction.**

---

### CP-03 — services mega-menu now fully data-driven (checkpoint, awaiting review)

The Step-3 deferred work is done. The mega-menu column count + grouping come from the **four pillars**
in data, not the DOM:
- **`pillar` field written to all 16 staging services** (brand-experience / web-ecommerce /
  growth-performance / ai-automation).
- **Nav query** (`queries.nav.js`) projects `pillar` and filters services to `defined(detailHero)` —
  so content-less stubs (ai-automation) are excluded, and an **empty pillar renders nothing at all**.
- **`nav.js`** replaces the 3-category `SERVICE_COLUMNS` with a 4-pillar `PILLARS` registry; groups by
  `pillar`; drops empty pillars (column count is data-driven).
- **`ServicesDropdown.jsx`** rewritten: the hardcoded GROWTH/SUPPORT columns are gone; it now renders
  `serviceColumns.map(<ServiceNavColumn>)` with `gridTemplateColumns: repeat(N, …)`. **Keyboard
  disclosure preserved verbatim** (ArrowDown opens, Escape closes + returns focus to trigger, Tab into
  panel via onBlur handleClose, aria-expanded/aria-controls) — those handlers were not touched.
- **`ServiceNavColumn.jsx`** THEME map updated to the four pillar themes (web/ai reuse existing icons as
  placeholders).
- **Analytics:** `service_selected` (already on the column links) + **`solution_selected`** now wired on
  the goal-solution links in `SolutionsDropdown`.
- **Verified in a production build** (`next build` exit 0; `next start`): SSR HTML shows exactly 3
  pillar columns (Brand & Experience → Web & Ecommerce → Growth & Performance), old headings absent,
  `/services/ai-automation` absent (empty AI pillar dropped). Browser at **1440**: mega-menu opens with
  the 3 columns + "WordPress"/"Paid Media" navLabels; **768** and **375**: desktop nav hidden, hamburger
  shown, no break. **Stopped before the services-hub rebuild, per instruction.**

---

## CP-02 — sitemap approved with earlier corrections (superseded by v2 above)

(First-round corrections; /call reversal + industries widening above supersede the /call-removal and
four-industry set.)
1. **`/call` REMOVE entirely** — redirect `/call` → `/contact` (CP-15); **Cal.com integration to be
   stripped from the codebase.** Recorded in route inventory + redirect map. **Code teardown pending**
   — it is ~25 files (every hero/footer/header carries a Book-a-Call/inline Cal button, GradientButton
   hardcodes the Cal attrs, 6 embed-init blocks). Flagged to Hassan as larger than a correction;
   sequencing vs the CP-03 mega-menu **awaiting his decision** (he dismissed the sequencing prompt —
   holding for next instruction).
2. **Four industry redirects marked PROVISIONAL** (interiors/restaurants/driving-schools/pharmacies →
   web-design-development) — revisit at CP-08; noted in §3.4 + §4.
3. **Test routes → 404** (not 410) in the redirect map.
4. **`/thank-you` confirmed:** noindexed ✓; fires **no event** — the `enquiry_submitted` conversion is
   measured in `Form.jsx` (client-side, on successful submit) **before** the redirect. ContactForm +
   AuditForm land on `/thank-you`; it is a real destination, not orphaned. Recorded in §3.6.

**CP-03 (services mega-menu) NOT started** — held pending the Cal.com sequencing decision.

---

## CP-02 — nav confirmed + parked decisions resolved (19 August 2026)

Hassan's CP-02 review closed every open decision; `04-information-architecture.md` rewritten in full.
- **D40 — main nav = 7 items:** Work, Services, Solutions, Industries, Blog, About, Contact. Free
  Audit is a secondary link (off service pages); **Book a Call removed entirely** (D8). Recorded so
  it stops being reconstructed.
- **D41** `/services/ppc` → **`/services/paid-media`** (redirect CP-15; "PPC" stays in copy).
  **D42** `/services/maintenance` → **`/services/growth-and-support`** (redirect CP-15).
- **O14 CLOSED** — we DO deliver standalone security (malware removal, firewall config, monitoring);
  `/services/security` stays a Growth & Performance service; **meta description restored to staging**.
- **D43** Migrations + Accessibility → **Web & Ecommerce** (build/delivery capabilities).
- **D44** Industries set = **four** (B2B & Professional Services, Technology & SaaS, Ecommerce Brands,
  Charities & Non-profits); duplicate-slug/flag cleanup deferred to CP-08.
- **Staging writes:** navLabels `wordpress`→"WordPress", `ppc`→"Paid Media"; `security` meta restored;
  `ivy-and-duke` excerpt fixed ("LMS Migration & Rebrand" → accurate dog-bed-brand line, kept as draft).
- Six Casa Botanica clone stubs left untouched/unpublished pending Hassan's brief-or-delete call.

---

## CP-02 — future information architecture on paper (19 August 2026)

Wrote `04-information-architecture.md`: the complete future sitemap for Hassan's approval. Every
route with purpose / pillar / parent / status; the redirect map (custom-apps-and-ai split,
scale-marketing merge, ecommerce-brands + 8 industry-solutions → industries, agencies →
partner-with-us, LP retired, test routes removed); the four-pillar → services grouping (incl. the 2
NEW CP-05 pages); a **reconstructed 7-item nav with an explicit flag** that the exact seven are not
recorded and must be confirmed (the Book-a-Call-vs-D8 tension is the key open point); a list of **10
places the brief is now out of date**; and the open decisions this surfaces (ppc slug, ongoing-G&S
slug, security/O14, migrations/accessibility pillar homes, industries set, O15). **Nothing
implemented — no routes, redirects, middleware or content.** Awaiting review.

---

## O13 verified + O16 draft case studies inspected (19 August 2026)

**O13 — CLOSED.** Studio nav fields (`navLabel`/`navExcerpt`/`navOrder`) verified against staging:
names match `NAV_QUERY`, `navOrder` is a real number (sort works), services 15/16 + goal solutions
5/5 populated. Empty: `ai-automation` service + all 44 industries (CP-08). Detail in `00-context.md`
O13 note. Flagged: industries duplicate slugs + hasPage mismatch; "Wordpress" casing; PPC→Paid Media
label; confirm the `solutions` type also got the fields.

**O16 — the 8 draft-only case studies inspected.** Read each draft's body in staging. Finding:
- **`ivy-and-duke` is the only real one.** Genuine content (Manchester maker of handcrafted luxury
  dog beds; WordPress + Maintenance + UI/UX; live `ivyandduke.co.uk`; challenge/approach/4 points/
  solution all real). **Completed:** wrote its empty `seo.metaTitle` + `seo.metaDescription` from the
  readable body (kept as a **draft**, not published). **Flag:** its `excerpt` reads "LMS Migration &
  Rebrand" — "LMS" does not match a dog-bed brand site; likely a paste error, left for Hassan.
- **6 are placeholder stubs cloned from Casa Botanica Panama** (`loop`, `lola-blake`, `core-estates`,
  `amana-partnership`, `drive-uk`, `ofh-care`). Their clientOverview/challenge/approach/solution are
  Casa Botanica boilerplate; only title/slug/live-URL/one service tag are real. **Left untouched — not
  padded or invented** (per the rules). Real anchors only: loop (`loop-am.com`, Speed+UI/UX),
  lola-blake (`lolaandblake.co.uk`, Analytics), amana-partnership (`amanapartnership.com`, Branding),
  ofh-care (`ofhcare.co.uk`, Maintenance), core-estates (no live URL), drive-uk (no live URL, but has
  a real seo title/desc). **None have a published version on the CP live site** (all draft-only, not
  in the 31). To build them, Hassan needs to supply a real brief per client (as for Biome4Pets).
- Nothing published. `biome4pets` is the 8th draft (already complete, separate).

---

## CP-01 — case studies audit + services/solutions sign-off (19 August 2026)

Analysis only; nothing implemented, no content written to staging. All in `03-url-audit.md`.

- **Decisions recorded** (`00-context.md`): **D38** Analytics repositioned as Growth measurement,
  BI → Custom App Development capability (option a, approved); **D39** Scale Marketing merged into
  Increase Leads, old slug redirects at CP-15, 4 goal solutions remain (approved). **O15** opened:
  confirm `launch-new-product` is a real offering. **O14** (standalone security) still pending.
- **Meta descriptions — premise corrected + drafts done.** The audit's "empty on every service
  page" claim was **wrong**: verified in staging that 15/16 service docs carry migrated old copy
  (only `ai-automation` blank), and the 5 goal solutions too. Real problem = **non-compliant** (banned
  words, em dashes, US spelling), so it's a **rewrite**. Drafted **15 service + `/services` hub +
  `/solutions` hub** descriptions (≈150 chars, UK English, rules-compliant) into §6 **for review —
  NOT written to staging**.
- **Blog / legal / static (§9–§11, 19 Aug) — CP-01 complete.** Blog: 9 KEEP, re-pillared for CP-14
  (Web 4 / Growth 3 / Brand 1 / AI 1; **email = content blind spot**, AI post mis-filed as GROWTH).
  Legal: 7 KEEP (D18 warranty clause lands in ToS; legal template has no `<h1>`). Static: **About
  major REWRITE + the estate date inconsistency** (age stated as 12+/10/7 years and "Since 2014"
  across About/Process/LP/heroes — pick one canonical founding year, Hassan to confirm); `/agencies`
  + `/partner-with-us` **MERGE** (duplicate white-label); `/audit` REWRITE (banned "Unlock");
  `/testimonials` H1 mismatch; LP + test routes REMOVE.
- **Meta descriptions written to staging.** 14 approved service descriptions written via the Sanity
  mutate API (CLI login token; the `.env.local` read token lacks write perms). `security` **cleared
  to blank** (was promising malware removal / firewalls / 24-7 monitoring — held pending O14);
  `ai-automation` stays blank. Both hub descriptions rewritten in **code** (not Sanity). Verified.
- **Case studies §8 — 31 classified.** Read the staging bodies directly (not just crawl meta).
  **9 flagship / 20 supporting / 2 archive** (`ao-arena` concept, `peekaboo` MVP). Key flags:
  **AI & Automation has zero *published* proof** (only `biome4pets` draft); **Growth & Performance
  is thin and Paid Media + email have no case study at all**; proof is delivery-fact-rich but
  **only 3/31 have a metric and 0/31 have a quote** (feeds O4); `unicef` is print not web; tags are
  unreliable (re-map pillars from content). **Staging has 41 case-study records, not 31** — 8
  draft-only new studies + `biome4pets` + 2 draft edits; the 8 unknown drafts need Hassan's
  confirmation. Awaiting review before blog / legal / static-page sections.

---

## Biome4Pets case study — CREATED as a staging draft (18 August 2026)

First (and currently only) proof under the **AI & Automation** pillar. Created from Hassan's
supplied draft (`biome4pets-case-study-draft.md`) — **verbatim, nothing invented**.

- **`drafts.biome4pets`** created in the staging dataset (Sanity **draft**, not published).
  Deliberately a draft: it's "for Hassan's review", and a draft is excluded from the site's
  published perspective, so it does **not** render on the staging build (which also avoids an
  image-less render break) while being fully visible/editable in the Studio. `caseStudies`
  type; field shapes matched to an existing study (descriptions are plain strings, points are
  string arrays).
- **Mapped from the draft:** title "Biome4Pets"; slug `biome4pets`; seo metaTitle/description
  (draft's suggested metadata); clientOverview (Client context), theChallenge, ourApproach
  (What We Delivered — with the 3 delivery stages as points), theSolution (Outcome + "why this
  matters" merged). Services reference **ai-automation** (primary) + **custom-app-development**
  (secondary) — both resolve. The one metric (200 reports 3d→1d) stated once, as the draft
  directs. No percentages, no "AI-powered", no accuracy claim — per the draft's wording notes.

**Outstanding — to collect from the client before publishing (from the draft; NOT invented):**
1. **A client quote** (1–2 sentences) — the single biggest gap.
2. **The technology used** — so the AI & Automation page's tech grid has something real.
3. **What the old process actually involved** — who wrote the reports, and how.
4. **Report volume since launch** — growth would be the stronger commercial point.
5. **Timeline** — how long the build took.

Plus, to render/publish: **images and brand colours** (thumbnail, hero, section images,
primary/secondary colour) — none were in the draft; the doc has `hasImages: false`. These are
content-completion items for the Studio, separate from the 5 client-facts above.

---

## Outstanding-item decisions (18 August 2026)

Recorded in `00-context.md` (full detail there):
- **D18 warranty → approved pending clause sign-off.** Draft ToS clause written (§9A);
  awaiting Hassan's sign-off. No warranty copy on any page until then.
- **LP page deprioritised** — superseded by CP-05 service pages; its form stays
  non-functional on production until cutover (fix is on `development` only).
- **New service pages (Web Design & Development, Ecommerce) scheduled for CP-05**, first in
  priority — the pricing references them but no page exists yet.
- **AI & Automation case study: HOLD** — not to be created/drafted/invented until Hassan
  confirms real facts.

---

## Step 3 — component cleanup (in progress), August 2026

Plan `step-3-component-cleanup-plan.md` approved as written (schema fields for nav labels,
5–7 days, header merge + data-driven nav last). Working in order: **sliders → forms →
headers/nav**, stopping after each for Hassan's review.

### Forms — shared `Form` core built + proven on ContactForm (checkpoint, `e383c87`)

- **`src/lib/analytics/events.js`** — one GA4 event-name registry + safe-no-op `track()`.
  `enquiry_step_2`/`step_3` and `industry_selected` are marked **PENDING host UI** (the
  multi-step enquiry flow and CP-08 industry routes do not exist), so they are wired-ready
  but must not be claimed live.
- **`src/components/forms/Form.jsx`** — **headless** shared core. Each form keeps its own
  field markup (as children); it inherits by default: honeypot spam protection
  (auto-injected + checked — impossible to omit), a11y (role=alert aria-live announcement,
  focus-to-first-invalid on failed submit, `aria-invalid`/`aria-describedby` via
  `fieldProps`), and GA4 `enquiry_started` + `enquiry_submitted`. Transport `json` |
  `multipart` (for the job form's file upload).
- **ContactForm migrated** and its a11y bugs fixed (service `<label>` now associated with
  the Radix Select via `id="service"`; per-field errors announced + wired). Markup,
  endpoint (`/api/contact`) and success redirect preserved.

**Current-form a11y defects the core fixes (measured):** (1) no SR error announcement
(plain `<p>`, no live region) — all 4; (2) no focus move to the first invalid field — all
4; (3) no `aria-invalid`/`aria-describedby` — all 4; (4) broken/missing label association —
ContactForm `htmlFor="service"`→nothing, AuditForm `htmlFor="revenue-range"`→nothing,
JobApplicationForm has no `htmlFor`/`id` at all; (5) decorative `*` not tied to required.

**Verified (fetch stubbed → no real email sent):** invalid submit announces + moves focus +
sets `aria-invalid`; valid submit posts the correct `/api/contact` payload incl the
`website` honeypot; `enquiry_started` + `enquiry_submitted` fire into `dataLayer`. Observed
`gtm.*` auto-events → a **GTM/dataLayer is already present** on the site (relevant to O7 /
CP-00L: wired events reach the dataLayer today; GA4 forwarding depends on GTM tag config).

**Design decision flagged (rule #6):** a single *declarative field-rendering* form component
would force a redesign of four visually-distinct forms (custom inputs, Radix Select, file
dropzone, differing buttons/success flows) — a design change, not a refactor. So the shared
piece is a **headless core** (logic + honeypot + a11y + GA4), and each form keeps its
markup. Confirm this shape before the remaining three are migrated.

**All four forms migrated (separate commits):** ContactForm (`e383c87`), AuditForm
(`ffc260b`), LpAuditForm (`fc3ee93`), JobApplicationForm (`d62ec45`). Every form now
inherits the honeypot, a11y and (where applicable) GA4 from the core, with markup,
endpoints, validation and success behaviour preserved.

- **AuditForm:** the real `websiteUrl` field and the injected `website` honeypot stay
  distinct — verified by submitting: payload `{ websiteUrl: "<value>", website: "" }`, a
  filled websiteUrl does not trigger the honeypot. Fixed its `htmlFor="revenue-range"` label.
- **JobApplicationForm:** multipart **file upload verified by submitting** — the FormData
  carries `resume` as a real File (name/type/size) + fields + jobTitle + `website:""`. Fixed
  all its labels (originals had no `htmlFor`/`id`). Added `enquiryEvents={false}` to the core
  so a job application does not pollute the enquiry funnel (it is not a sales enquiry).
- **LpAuditForm:** migrated and build-clean, but see the flagged pre-existing issue below.

**Verified by submitting vs taken on trust (rule #5):**
- Submitted (fetch stubbed, no real email/upload): **ContactForm**, **AuditForm**,
  **JobApplicationForm** (incl. the file upload).
- Not submitted — **LpAuditForm**: on `/wordpress-web-development` its subtree does not
  hydrate in dev (honeypot input has **no React fiber**, the Radix Select will not open),
  while the page's carousels do run. **Confirmed pre-existing, not caused by the migration**:
  stashing the migration reproduced the exact same non-interactivity with the ORIGINAL
  form. `useServiceStore` is a plain zustand `create()` with no persist, so it is not the
  cause. Root cause open (dev-only Turbopack artifact vs a real bailout). **Needs a separate
  look** — if it reproduces in a production build, the LP audit form is non-functional today.

### LpAuditForm dead on the WordPress LP — root cause found (18 Aug 2026)

**Confirmed real, not a dev artifact.** Ran a production build (`next build` + `next start`)
and served it locally: on `/wordpress-web-development` the LpAuditForm still does not
hydrate — honeypot input has no React fiber, the Radix Select will not open, submit does
not run — while the page's carousels hydrate normally. So the audit form on a page built
for **paid traffic is a live lead-capture failure today.**

**Cause (proven, not guessed).** `<LpAuditForm />` is wrapped in `<Suspense fallback={null}>`
in **both** `LpHero.jsx:189` and `LpAuditSection.jsx:54`. Walking up from the honeypot, the
form's parent is `div#S:0` — a React streaming-Suspense holding container attached directly
to `<body>` — and the first ancestor with a React fiber is `<body>` itself. So the
server-streamed form is stranded in the Suspense holding div and never adopted; the client
boundary resolves to its `null` fallback, orphaning the SSR DOM (no fiber → no handlers →
inert). Nothing inside the boundary suspends (no `useSearchParams` / `use()` / `lazy()` /
`dynamic` anywhere in the LP tree or the store), so the wrapper is pointless.

**Proof.** Temporarily removed both wrappers, rebuilt production, retested: the form now
hydrates fully — parent is its correct `div#audit` slot (not `div#S:0`), honeypot has a
fiber, the Radix Select opens, submit + the a11y announcement work. Then **reverted the
experiment** (no fix committed — reporting before implementing).

**Scope.** These are the only two `<Suspense fallback={null}>` in the whole codebase, both
wrapping LpAuditForm; there is one landing route. Nothing else on the page or elsewhere uses
the pattern; other interactivity (carousels, the `#audit` anchor) works.

**Proposed fix (awaiting sign-off).** Remove the `<Suspense fallback={null}>` wrapper around
`<LpAuditForm />` in `LpHero.jsx` and `LpAuditSection.jsx` (render it directly). Proven to
restore hydration; the wrapper serves no purpose. This is a **pre-existing production bug**
(reproduced with the original form via stash last session), independent of the Step-3 form
migration.

**FIXED — `0a3c282` (18 Aug 2026).** Both wrappers removed (and their now-unused Suspense
imports). Verified in a **production build** (`next build` + `next start`): LpAuditForm
hydrates in its correct `#audit` slot (fiber present), the Radix Select opens, invalid
submit announces "Please enter your name." and moves focus, `enquiry_started` fires, the
honeypot is present, and the page's carousels / `#audit` anchor / Cal.com are unaffected.
(A full valid submit to `/api/lp-audit` could not be scripted because the Radix Select
selection does not register under synthetic events — a harness limit, not a form fault; the
identical core is fully submit-verified on ContactForm and AuditForm.)

**Commercial impact (on the record).** `/wordpress-web-development` is a **paid-traffic
landing page** in the brief — traffic is bought to it specifically to capture WordPress-audit
leads. Before this fix the form on that page was **non-functional in production**: visitors
(including paid clicks) could not submit an audit request, so **every lead on that page was
being lost**. This was live, silent, and predates the Step-3 work. The fix restores lead
capture.

**Other three forms — production re-check (dev hid the LP fault, so all were retested in a
production build):** all hydrate and validate — none dead.
- **ContactForm** (`/contact`): fiber ✓, Radix opens ✓, honeypot ✓, invalid announces +
  focuses `name` ✓.
- **AuditForm** (`/audit`): fiber ✓, Radix opens ✓, honeypot distinct from real `websiteUrl`
  ✓, invalid announces + focuses `website-url` ✓.
- **JobApplicationForm** (`/careers` modal): fiber ✓, modal opens ✓, honeypot ✓, labels
  associated ✓, invalid announces + focuses `fullName` ✓ (multipart file upload already
  submit-verified).

### GTM is live on the production site (O7 context — recorded here, not lost in a commit)

While verifying the forms I observed `gtm.formInteract` and `gtm.formSubmit` auto-events
firing into `window.dataLayer`, and `window.gtag` is a function. **A dataLayer / GTM
container is already active on the site and auto-tracking form events today.** This matters
for the analytics build: our wired `enquiry_started` / `enquiry_submitted` events reach the
dataLayer now (the core's `track()` uses `gtag`/`dataLayer` when present). **Whether GTM
forwards anything to GA4 remains open as O7** (reuse vs replace the property; direct vs via
GTM — CP-00L). Do not assume events are landing in GA4 just because they reach the dataLayer.

### Headers + data-driven nav — DATA LAYER done (checkpoint, awaiting review)

Safe part first (same pattern as sliders/forms); the mega-menu DOM rewire + header merge
come next as a separate pass.

- **Schema source = Option B** (dedicated `navLabel` / `navExcerpt`, title fallback). The
  Studio schema is **not in cp-web**, so the field DATA was populated on the staging docs
  (20 patched: 15 nav services + 5 goal solutions, via the management API) and the query
  reads it with a title fallback. Field DEFINITIONS for the Studio are recorded as **O13**
  in `00-context.md` (a separate-repo task).
- **`src/sanity/queries.nav.js`** (`NAV_QUERY`, `coalesce(navLabel, title)` /
  `coalesce(navExcerpt, "")`) + **`src/sanity/nav.js`** (`getNavData()` — shapes into the
  `designService` / `growthService` / `supportService` / `goalSolution` / `sectorSolution` /
  `industries` arrays that mirror the old `navigation.js` constants, so the rewire is a
  straight swap; returns empty arrays on failure).
- **Wired server→client:** `(site)/layout.jsx` is now async and fetches `getNavData()`,
  passing `navData` to `<Header>`; `(home)/page.jsx` fetches it and threads it through
  `HomePage` to `<HomeHeader>`. Both headers accept `navData` but **do not consume it yet —
  no nav markup changed.** LpHeader has no mega menu; MobileMenu/Footer/dropdowns get
  threaded in the consume pass.
- **Fallback proven** with fields empty (every doc's state before populate): labels → title,
  excerpt → "". After populate, the 20 nav docs read their `navLabel`/`navExcerpt`; un-set
  docs (ai-automation, industries) still fall back to title.

**Link-set produced by the query vs `navigation.js` today** — nothing vanished; two things
appeared, both handled:
- **Services:** 15 in-menu services all present and matched (grouped by `category` into
  design-development / growth / support). One extra doc — `ai-automation` — has no nav
  `category`, so `getNavData()` leaves it out of the menu (it is a taxonomy-only stub that
  404s; correct to omit).
- **Goal solutions:** 5 / 5 exact match.
- **Industries:** 4 `hasPage` industries now resolve (b2b-services, charities-and-foundation,
  ecommerce-brands, saas-companies). They are **exposed as data but held OUT of the rendered
  menu** (`sectorSolution: []`) — `/industries/<slug>` has no route until CP-08, so linking
  them now would 404 (the fault we just fixed). CP-08 switches them on.
- **Order caveat:** the query sorts by `title` (alphabetical); the old hand-curated column
  order is not preserved without a `navOrder` field (recorded in O13). Order is a consume-pass
  decision.

### Mega menu — ONE COLUMN proven (checkpoint, awaiting review)

Same discipline as sliders/forms: prove one column before the rest. **Only column 1
(Design & Build) of the Services mega menu is data-driven so far**; columns 2 & 3 and the
Solutions dropdown are still hardcoded pending review.

- **`navOrder`** field DATA populated on the 20 nav docs (staging) to reproduce the exact
  hand-order (Accessibility-first alphabetical is wrong for a commercial menu). Query orders
  by it. O13 updated to list `navOrder` (number) as a confirmed Studio field.
- **`sanity/nav.js` refactored** to emit `serviceColumns: [{ key, heading, theme, items }]`
  — a **data-driven column array**. The grouping config (`SERVICE_COLUMNS`) is the CP-03
  seam: CP-03 swaps 3 categories → 4 pillars by editing that config + adding theme entries,
  **not** by touching the mega-menu markup. Columns with no items are dropped.
- **New `ServiceNavColumn` primitive** reproduces the hand-written column markup from data;
  **empty column renders nothing (heading included)**; fires **GA4 `service_selected`** on
  link click. Column colour/icon must be inline (Tailwind can't compile dynamic arbitrary
  values) — the one class→inline-style change, visually identical.
- **Wired:** `Header`/`HomeHeader` pass `navData` to `ServicesDropdown`; column 1 now
  renders `<ServiceNavColumn column={navData.serviceColumns[0]} />`.

**Verified in a production build (1440):** column 1 renders identically — heading "Design &
Build", 5 items in the exact navOrder (Branding → UI/UX Design → Wordpress → Shopify →
Custom App Development), correct hrefs; columns 2 & 3 intact; no console errors. GA4
`service_selected` fires with `{ service: "branding" }`. **Keyboard preserved** (I did not
touch the trigger/panel handlers): Escape closes and returns focus to the trigger;
`aria-expanded` toggles. Harness caveats: the browser pane does not composite frames, so the
opacity/transition and pixel-level visuals could not be machine-verified — recommend a
real-browser eyeball at 375/768/1440. The mega menu is `xl`-only; at 375/768 this nav is
`display:none` and the (unchanged) mobile menu is used.

**FLAGGED structural change for the full rollout (needs go-ahead):** turning the whole grid
data-driven (N columns) means replacing `grid grid-cols-3` with a computed
`gridTemplateColumns: repeat(N, minmax(0,1fr))` — **visually identical at N=3**, but it is a
class→style change and the mechanism that lets CP-03 add a 4th column without a DOM pass.
Not done yet; raised for approval before rewiring the remaining columns.

### Sliders — `Carousel` primitive built + proven (checkpoint, awaiting review)

- **New `src/components/ui/Carousel.jsx`** — shared primitive replacing the ~30
  near-identical Swiper wrappers. Emits the same DOM/classes (`<Swiper className="mySwiper">`
  + `<SwiperSlide>`), auto-derives modules, and **auto-renders `CarouselAutoplayControl` at
  `slot="container-end"` whenever autoplay is on** — so every autoplay carousel inherits the
  pause control, `prefers-reduced-motion` handling and the visually-hidden-until-focus
  treatment by default, with no per-slider work. Slides via `items` + `renderItem` (raw
  `<SwiperSlide>` children also accepted); outlier props (`effect`, `centeredSlides`) pass
  through `swiperProps` / `extraModules`.
- **Migrated 2 proof sliders:** `LightFeatureCardSlider1`, `TestimonialsSlider`. Public
  props and slide markup unchanged.
- **Verified** (dev build vs staging, mobile): the migrated slider emits `.swiper.mySwiper`
  with slides carrying the exact `!flex !h-auto !justify-center px-…` classes, clickable
  pagination (bullet count = slide count), autoplay running, and the pause control present
  **with `sr-only-focusable`**. Build green.
### Sliders — ALL 30 migrated (7 batches, each a separate commit)

Rollout complete. Every component that rendered a `<Swiper>` now renders `<Carousel>`;
the real `<Swiper>` lives only in the primitive. 30 files import `Carousel`.

| Batch | Commit | Sliders |
| --- | --- | --- |
| proof | `7b37389` | LightFeatureCardSlider1, TestimonialsSlider |
| 1 cards | `d3c…`* | GlassFeatureCardSlider, LightFeatureCardSlider2, Expertise2Slider, Expertise3Slider, Values2Slider |
| 2 testimonials | — | Testimonials2Slider, LpTestimonialSlider |
| 3a | — | DifferenceSlider, DifferenceSlider2, PartnerWithUs2Slider, PoliciesSlider, ResourcesSlider |
| 3b | — | SectorSlider, SupportSlider, WorkSlider, LpResultSlider, LpServicesSlider |
| 4 heroes | — | AboutHeroSlider, CaseStudiesHeroSlider, ContactHeroSlider |
| 5 process | — | ProcessSlider, Process3Slider, Process4Slider, LpProcessSection |
| 6 sections | — | Options, Methodology, ClientOverview |
| 7 outlier | — | LpHeroSlider |

*(exact hashes in `git log`; batches committed sequentially after `7b37389`.)*

**Corrections to the earlier count (rule #6 — flagged, not forced):**
- There are **30** sliders, not 32. The earlier "33 Swiper files / 32 autoplay + 1
  non-autoplay" counted non-sliders.
- **`Testimonials2.jsx` is NOT a slider** — it renders `<Testimonials2Slider>` (already
  migrated) inside a bento section. So there is **no non-autoplay slider**; every one of
  the 30 uses autoplay and therefore carries the inherited control. The primitive's
  "autoplay off → no control" branch is correct by construction but currently unused.
- **`Blog.jsx` is NOT a slider** — it imports Swiper but renders a sticky stacked list on
  mobile (no `<Swiper>`). Its swiper imports (lines 7–10) are dead. Left untouched pending
  Hassan's decision (remove dead imports vs make it a real carousel).

**Outliers handled via props (fit the primitive, not special-cased):** `LpHeroSlider`
(fractional slidesPerView + `centeredSlides` via `swiperProps`), `LpResultSlider`
(`allowTouchMove`/`simulateTouch`/`slideToClickedSlide` via `swiperProps`), `AboutHeroSlider`
(custom className + `onSwiper` for its arrows), the Difference sliders (no pagination,
spaceBetween 10), Options (767-only breakpoint). None use Swiper `navigation` arrows; the
control is always `slot="container-end"`.

**Verification:** build green after every batch. Browser spot-check (dev vs staging) of the
visually-distinct ones — `/about` AboutHeroSlider (custom arrows + no pagination, 6 slides),
`/case-studies` CaseStudiesHeroSlider (3 slides + pagination), `/services/wordpress` mobile
(4 sliders incl. Options/Methodology/Expertise3/PartnerWithUs2), `/how-we-work` process
slider — every carousel had the pause control with `sr-only-focusable`, pagination bullets =
slide count, autoplay running; 0 controls missing the treatment. The remaining standard-shape
sliders were taken on trust (build-verified + DOM-identical by construction).

---

## CP-00K — consolidation executed + wired to staging (August 2026)

Five Sanity projects consolidated into one new project **CreativePixels** (`4m0eqoi1`).
Migration ran into that project's **production** dataset (lossless, verified) and the code
branch reads its **staging** dataset. Production site untouched — still reads the five old
projects. Rollback = revert Vercel env vars (restores to the cutover snapshot; new-project
edits are lost on rollback, no back-sync). Full plan + run results in
`CP-00K-migration-plan.md`.

### Code wiring (branch `development`, staging)

| Area | Change | Commit |
| --- | --- | --- |
| Sanity client | Five per-project clients → one `src/sanity/client.js` (+ `previewClient`, `getClient`) and one `image.js`; the five `sanity.<type>.js` / `<type>.image.js` kept as re-export shims so imports resolve unchanged | `5c50867` |
| Field renames | `partnerWithUs2` → `partnerWithUs`, `expertise3` → `expertise` in queries + detail pages (component names unchanged); data renamed on 30 docs | `5c50867` |
| Case-study taxonomy | Dropped removed `tools[]->`; added `technologies[]->` + `capabilities[]->`; ClientOverview "Tools Used" logos → "Technologies" text pills; null-guarded all four taxonomy arrays | `5c50867` |
| Detail-page guards | services/solutions detail pages 404 (not crash) on a stub doc with no `detailHero` (e.g. `ai-automation`) | `5c50867` |
| D25 routes | `/api/draft`, `/api/disable-draft` (draft mode), `/api/revalidate` (secret-checked webhook) | `5c50867` |

### Nav regression + dead-end fixes (CP-00K side-effects)

The hardcoded nav (`src/contants/navigation.js`) had drifted from the migrated data.

| Fix | Detail | Commit |
| --- | --- | --- |
| Repoint / drop nav links | `custom-apps-and-ai` → `custom-app-development`; removed six routeless sector links | `0b24dac` |
| Remove dead-end content links | Five homepage `EXPERTISE_CARD` "Explore Solutions" CTAs to routeless industries; "View all industries" → empty `/solutions/#sector` | `f611af3` |
| Hide empty-state chrome | Guard "By Sector" column/accordion (SolutionsDropdown, Footer, MobileMenu) + `/solutions` `<Sector>` on empty source; dropped Agencies card CTA for consistency | `7cdb856` |
| Docs | Nav regression + data-driven-nav scope + dead-end-vs-404 distinction into `00-context.md` §14 | `43bdbf9`, `b6e8472` |

Verified: build green throughout; every `navigation.js` href resolves (0/31 404s);
dead-end sweep clean except the two guarded empty states. blog 9 / case-studies 31 /
services 16 / solutions 5 / legal 7 pages build from staging (draft-only docs correctly
excluded by `perspective: "published"`).

### Form spam protection (standalone production-relevant fix)

`ContactForm`, `AuditForm`, `JobApplicationForm` had no honeypot while `LpAuditForm` did.
Added the same honeypot (client hidden `website` field + server `if (website) success`) to
all three + their API routes. Self-contained (6 files), no deps, no user-facing change.
Committed alone (`c86e629`).

**Deliberately held on `development` at Hassan's instruction (18 Aug 2026).** Although this
is a live-production defect and the commit is self-contained enough to cherry-pick, Hassan
directed that nothing goes to production until final cutover: no hotfix branch, no
cherry-pick, no PR. The fix ships with everything else at cutover. Recorded here so it is
not later mistaken for forgotten or lost work.

### Step 3 — plan only

Component cleanup plan written to `step-3-component-cleanup-plan.md` (`b5e160d`), awaiting
sign-off. Measured inventory: 33 sliders, 4 forms, 3 headers. No component work started.

### Carousel pause control → visually hidden but keyboard/SR accessible (18 Aug 2026)

The shared `CarouselAutoplayControl` (all autoplay carousels) is now visually hidden by
default and appears on keyboard focus. Added one unlayered `.sr-only-focusable:not(:focus)`
utility to `globals.css` (clip + 1px, **not** `display:none`/`visibility:hidden`) and the
`sr-only-focusable` class to the shared button — implemented once, inherited everywhere.
Nothing else changed: autoplay, `prefers-reduced-motion`, hover and touch behaviour are
untouched. **WCAG 2.2 SC 2.2.2 still met** (control stays focusable + announced).

Verified on a dev build against staging (mobile viewport, live carousel): resting state
1×1 with `clip: rect(0,0,0,0)`, `display:flex`, `visibility:visible`, in the a11y tree;
focused/revealed state 30×30 with `clip:auto` (its own `size-[3rem]`); activating the
control stops autoplay (`swiper.autoplay.running: true → false`). The reveal-on-real-focus
could not be shown through the automation pane (`document.hasFocus() === false`, so CSS
`:focus` never matches programmatic focus) — an environment limit, confirmed by reproducing
the exact `:focus` cascade via class removal.

---

## Step 1 — Site hygiene (D34), 12 August 2026

Three accessibility fixes, each build- and browser-verified. **1.1 and 1.2 were first
implemented with Radix NavigationMenu and a flow-level carousel control; both caused
visual regressions and were reverted (`a1914dd`), then reimplemented behaviour-only on
the original markup.** The dialog (1.3) was kept as-is (no regression).

| # | Fix | Final approach | Commit(s) |
| --- | --- | --- | --- |
| 1.1 | Keyboard mega menu | Keyboard/ARIA added to the **existing** dropdown markup (no DOM/class change, no Radix): `aria-expanded`/`aria-controls`/`id`, ArrowDown/Enter/Space open, Escape closes + returns focus to trigger, `onBlur` closes on Tab-out. Disclosure pattern (focus stays on trigger, Tab enters panel). | first `97d1aaf` → revert `a1914dd` → redo `5705963` |
| 1.2 | Carousel pause controls | One reusable `CarouselAutoplayControl` (Swiper `container-end` slot + `useSwiper`), **absolutely positioned** so it adds no layout space; `aria-pressed`, starts paused under `prefers-reduced-motion`. No Swiper layout config changed. All 30 autoplay carousels. | first `21820b3` → revert `a1914dd` → redo `16edbfa` |
| 1.3 | Real modal dialog | Job-application modal on Radix `Dialog`: `role="dialog"`, focus trap, Escape, focus return to the Apply button, scroll lock, SR title. | `4d7bdbc` (kept) |

Why the first attempt regressed: 1.1 replaced the dropdown DOM with `NavigationMenu`
(new `nav>ul>li` nesting, panel moved into an `li`, flex/centering classes moved off the
`<nav>`), shifting menu-item layout and mega-panel alignment; 1.2's control was a
flow-level block that added vertical space below carousels. Neither changed Swiper config.

Deps: `@radix-ui/react-dialog ^1.1.23` (dialog). `@radix-ui/react-navigation-menu` was
added then removed with the revert.

Verification: nav markup/classes confirmed byte-identical to original, `aria-expanded`
toggles, panel opens, Escape returns focus; carousels verified at 375 / 768 / 1440 with
controls out of flow, in-bounds, autoplay toggling, and no horizontal overflow. Builds
clean throughout.

Reusable bases retained: `CarouselAutoplayControl` carries into the Step 3 consolidated
slider; the `Dialog` pattern is reused for the enquiry flow. (The nav is now a
behaviour-only layer on the existing components rather than a new `MainNav`.)

### Step 1 verification pass (post-review, 13 Aug 2026)

Reviewed against three concerns. **No code changes were needed — all three were already
correct.** Verified with trusted (CDP) input on a local production build:

- **Tab from trigger into panel does not close it.** `handleClose` (the `onBlur`) checks
  `relatedTarget`: if focus moves to an element inside the panel or back to the trigger,
  it returns without closing. Real Tab moved focus onto `/services/branding` with the
  menu staying open (`aria-expanded` remained true).
- **Escape from inside the panel** closes it and returns focus to the trigger. The
  panel's `onKeyDown` handles Escape and `keydown` bubbles from any focused panel link.
  Real Escape from a focused panel link closed the menu and refocused the trigger.
- **prefers-reduced-motion** is honoured: the carousel control reads
  `matchMedia("(prefers-reduced-motion: reduce)")` on mount and calls
  `swiper.autoplay.stop()` + shows the Play state when it matches. Verified the stop path
  against a live running carousel (`running: true → false`). OS-level emulation is not
  available in the test pane, so the query→stop path was confirmed by code plus a
  concrete run rather than by toggling the OS setting.

Outside-click: the original mega menu had **no document click-outside listener**; it
closed via `onMouseLeave` (pointer leaving the panel), plus link click, re-toggle and the
header's scroll handler. That `onMouseLeave` is preserved unchanged, so mouse
close-behaviour is identical to before; the added `onBlur` additionally closes it when
keyboard focus leaves. No dedicated click-outside handler was added (there was never one).

---

## O8 / O11 — Content platform (validated; awaiting sign-off)

- **O8 (consolidate five Sanity projects → one, Option A):** validated in
  `CP-00K-validation.md`. Confirmed: no `staging` dataset exists (all five 404), 0 drafts
  today, ~138 content docs + 852 image assets.
- **O11 (taxonomy reconciliation ruleset):** four taxonomies (service/technology/
  industry/capability), nothing deleted, `hasPage` flags. See
  `CP-00K-taxonomy-reconciliation.md`.
- **Effort (D31, 6–8 days): confirmed reasonable** on the schema findings, with the
  reconciliation as the swing. See the completion report / validation doc.
- **`services` vs `solutions` modelling recommendation: keep TWO document types sharing
  extracted object/field definitions, not one discriminated type.** Rationale recorded in
  the completion report. They have different URL namespaces, nav, SEO intent (CP-09), and
  taxonomies (services get `pillar`; the 9 industry-solutions move out to `industry` per
  D29), and industries/case-studies are already becoming distinct types, so a shared
  polymorphic type would fight the IA and complicate every query.

---

## CP-00J — Phase 0 fix log (earlier)

| # | Date | File(s) | Change | Commit |
| --- | --- | --- | --- | --- |
| 1 | 12 Aug | solutions/[slug], call | Emit top-level `alternates.canonical` | `392145b` |
| 2 | 12 Aug | contants/index.js, caseStudiesCard.js | Remove dead constant + `export *` | `e6f41ee` |
| 3 | 12 Aug | package.json | Declare `@radix-ui/react-switch` | `f6de026` |
| 4 | 12 Aug | legal/[slug] | Fix "leagal" typo | `edb0153` |
| 5 | 12 Aug | legal/[slug] | Title `h4`→`h1`, sections `h5`→`h2` (D22) | `e39aa60` |
| 6 | 12 Aug | 3 routes + 2 components + robots/Header | Delete test routes (D16) | `5d83229` |

---

## Milestones

- CP-00 audit + crawl + Phase 0 fixes (see `01`/`02`/`03`, crawl in `03-crawl-raw.jsonl`).
- Hassan D15–D34 intake; `CP-00K-content-platform-decision.md`,
  `CP-00K-taxonomy-reconciliation.md`, `CP-00K-validation.md` in repo.
- **Step 1 hygiene complete** (`97d1aaf`, `21820b3`, `4d7bdbc`).

---

## Outstanding / blocked

- **Hassan sign-off:** O8 (Option A), O11 (taxonomy ruleset). These gate Step 2.
- **O12** (Claude Code): confirm no case-study taxonomy slug appears in a live URL before
  normalising the malformed ones — do during the migration prep.
- **O9** (Hassan): Cal.com link views before treating D8 as settled.
- **www → apex (D21)**, secrets rotation, `/solutions/saas-companies` blank meta
  description (content edit, deferred to the D23/D24 workstream): Hassan / later phases.

## CRO review of CP-10/11/12 written (26 Aug 2026, stop for approval)
Reviewed homepage, service template and case studies on live staging as a conversion specialist →
`cro-review.md`. Headline findings: (P0) the case-studies hub hero (`CaseStudiesHero`) fabricates "65% Faster
Load Times" + promises "Real results / measurable impact" with no outcome data, and carries the site's one
generic subhead — missed by CP-12 (which reworked the grid/detail, not this hero); plus stale "| Free Strategy
Call" case-study meta titles. (Conversion) one high-intent route only — the audit is kept off service pages and
the homepage, leaving the not-ready visitor with no step; recommend a two-tier CTA. (Homepage) the four-pillar
argument is made 3× (overview + pillar blocks + Lifecycle) — cut the Lifecycle + duplicate Web&Ecom block, ~8
sections. (Service template) strong; move specialisms down, proof up, tighten the What-We-Do wall. (Case studies)
detail pages good but resolve qualitatively — reframe cards from work-description to transformation + add a
factual scope block. (SEO) web-build cannibalisation risk + stale meta titles. Prioritised plan P0→P2 in the doc.
Nothing built; awaiting approval.

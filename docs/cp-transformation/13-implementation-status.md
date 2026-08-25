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
that Process held. The old `Process` section is removed from the homepage (it is the delivery process and
lives on How We Work via `Process2`; the homepage `Process` component is now unused).

**Rhythm preserved:** AI (tint) → Why (white) → Lifecycle (dark) → Cta (white) → Testimonials (yellow) →
Contact (dark) — same white→dark→Cta adjacency the original Established→Process→Cta had. Verified
375/768/1440: no horizontal overflow; both sections carry proper weight (Why ~1030px, Lifecycle ~785px).

**Next (after review):** founder (Hassan bio, owner-led message), reviews (give Testimonials weight; report
genuine-review count), investment (light price signal from servicePricing), final conversion (Start a
project + reassurance microcopy, no Book a Call).

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

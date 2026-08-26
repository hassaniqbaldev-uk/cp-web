# CRO review — homepage, service pages, case studies (CP-10 / CP-11 / CP-12)

Judged on the live staging site as a conversion specialist, not against the brief. Review only — nothing changed.
I have assumed nothing is fixed: where a section should not exist or a page needs a different shape, I say so.

---

## 0. The one thing to fix before anything else (integrity)

**The case-studies hub hero fabricates results.** `CaseStudiesHero` shows a stat band — **"100% Custom Designed
Sites", "200+ Projects Delivered", "65% Faster Load Times"** — and an H1 **"Real work. Real results."** with a
subhead promising **"measurable impact."** We have **no outcome data**. "65% Faster Load Times" is an invented
metric of exactly the kind we removed everywhere else, and "Real results / measurable impact" writes a cheque the
case studies cannot cash — a visitor who clicks in and finds no numbers feels the gap. This is live on
`/case-studies` and was missed because CP-12 reworked the hub grid and detail pages, not this hero. **Fix first,
regardless of the rest of this review.** (Also: the subhead is the one genuinely generic piece of copy on the site
— "ambitious brands… scale their digital presence through strategy, design, and technology.")

Two smaller truth issues found while reviewing:
- **Case-study meta titles carry "| Free Strategy Call"** (e.g. Casa Botanica's `<title>`) — stale boilerplate in
  the Sanity `seo.metaTitle` field, referencing a booking CTA we removed. Inconsistent and slightly off-message in
  search results.
- Homepage stats band has a third counter (`value={15}`) whose label I could not confirm reads truthfully —
  worth checking it is a real, defensible number.

---

## 1. The conversion path

**Trace:** every CTA on every page is **"Start a project" → /contact**, a 5-field form (name, "I need help with",
email, message, all but the dropdown required). That is the *only* conversion. The `/audit` lead magnet exists and
is genuinely good, but it is surfaced **only** on `/case-studies` ("Get My Free Audit") and its own page — it is
deliberately kept off service pages, and it is **not on the homepage**.

**Honest verdict: yes, this is a gap.** The site has exactly one conversion, and it is high-commitment ("tell us
what you're building"). A visitor who is interested but not ready to enquire — the majority of first-time traffic —
has content to browse (pricing, work, blog) but **no action to take that isn't "start a project."** The pages where
buying intent actually forms (the service pages, the homepage) offer only the high-intent step or nothing.

The decision to keep the audit off service pages "so it doesn't compete" was right in spirit but has overcorrected:
it removed the *only* low-intent step from the exact pages that need one. The fix is not to make the audit compete —
it is to make it the **explicit lesser step**: a clear primary ("Start a project") and a clearly-secondary
("Not ready? Get a free website review") so the two read as a ladder, not a choice. That captures the not-ready
visitor instead of losing them, without diluting the main CTA.

Secondary friction: the contact form's **message field is required**. For a first touch, requiring a written brief
raises the bar. Making it optional (or a two-step "email first, tell us more after") would lift completion.

---

## 2. The homepage — section by section

Current order (12 major sections): Hero → Stats band → client-logos strip → Selected Work → Four-Pillar overview →
Web & Ecommerce block → AI & Automation block → Why CreativePixels (6 cards) → The Lifecycle → The Founder →
Testimonials → Investment → Final form.

**The core problem: the page makes the same argument three times.** The four pillars appear as (a) the "Four things
we do" overview, (b) the Web & Ecommerce and AI deep-blocks, and (c) **the Lifecycle ("Launch, improve, grow,
automate")** — which is literally the four pillars re-sequenced (Launch = Web, Improve = Brand, Grow = Growth,
Automate = AI). A buyer reads the same four ideas three ways and the page loses momentum. **This is the biggest
homepage win: collapse the repetition.**

Section verdicts:
- **Hero** — earns its place. Copy is good (senior team, stays after launch, web/ecom heaviest). Keep.
- **Stats band ("200+ / 12+ / 15+")** — the counters animate from 0; a reduced-motion or no-scroll visitor can see
  "0+". Fine idea, verify the third stat and the animation trigger. Keep, low priority.
- **Client-logos strip ("Building for growing brands for over 12 years")** — trust, earns its place. Keep.
- **Selected Work (Ayoa / AlertForce / Minnessak)** — strong: proof high, show-don't-tell. Keep, lead with it.
- **Four-Pillar overview** — earns its place *if* the Lifecycle goes. It is the clearest statement of "what we do".
- **Web & Ecommerce block** — repeats the overview's Web & Ecom copy almost verbatim ("the core of what we do, the
  largest part of our business" appears twice). Merge into the overview or cut the duplication.
- **AI & Automation block** — carries the Biome4Pets proof line; keep, it is the one pillar that needs a nudge.
- **Why CreativePixels (6 differentiators)** — earns its place; owner-led/here-after-launch is the real edge.
  Six cards is one or two too many — the weakest ("Commercially focused") blur together.
- **The Lifecycle** — **cut it, or demote it to a single "how we work" link.** It re-tells the four pillars and
  duplicates the process story that already lives on /how-we-work.
- **The Founder** — earns its place (owner-led is a differentiator, not a vanity bio). Keep.
- **Testimonials** — keep, but it is the *only* proof in the back half; see below.
- **Investment (from £1,500…)** — strong and rare (most agencies hide price). Keep — it removes real friction.
- **Final form** — keep.

**Recommended shape (~8 sections):** Hero → Selected Work → Four-Pillar overview (with Web & Ecom weighted, AI
proof folded in) → Why (trimmed to 4) → Founder → Testimonials → Investment → Final CTA. The Lifecycle and the
duplicate Web & Ecom block go; the argument becomes: *what → proof → why us → who → proof → price → act.*

---

## 3. The service page template

**This is the strongest of the three surfaces.** One shape, ten sections: Hero → Why It Matters (3 problems) →
What We Do (6 capability cards) → Part of the Offer (specialist links) → How It Works (4 steps) → Recent Work →
Is This Right For You (fit/not-fit) → Investment → FAQs → Closing CTA. It answers the buyer's questions in a
sensible order and the fit/not-fit + pricing + FAQ combination is genuinely good CRO.

Where it drops a buyer:
- **"What We Do" is a wall.** Six capability cards, each with three bullets = ~24 bullet points before any proof.
  It is thorough but heavy; a buyer skims and stalls. Tighten to four cards or make the bullets scannable.
- **"Part of the Offer" (specialisms) sits at position 4**, interrupting the sell with cross-links to *other*
  pages right when you should be building the case. Move it near the end (after the fit section) — cross-links
  belong after you have sold this page, not mid-argument.
- **Proof (Recent Work) sits at position 6.** Proof works harder earlier — moving it above "What We Do" (show the
  work, then explain it) would strengthen the page the same way the homepage leads with Selected Work.
- **No low-intent CTA** (the conversion-path gap again). The hero's "See Case Studies" is a soft option, which is
  good — but the page never offers the audit as a lesser step.

The template *does* sell. Its issues are ordering and density, not structure.

---

## 4. Case studies — hub and detail

**Detail pages are good** (I read Casa Botanica end to end). Client Overview → Challenge → Approach → Solution is
specific, not generic, and it even carries a real credibility fact ("a 4.9-star Airbnb rating"). The CP-12
cross-links (services evidenced, technology, related work) work. The gap is the one you named: **no outcome, and
the "Solution" section resolves qualitatively** ("front and centre… what's possible") rather than concretely.

**How to make delivery facts carry persuasive weight without inventing outcomes:**
1. **Lead the card and the hero with the client's SITUATION and the CHANGE, not the work.** Today the hub cards
   read "Full website redesign for…", "Shopify build and product setup for…" — a description of *what we did*. The
   persuasive version is the *before → after*: "A luxury villa whose Squarespace site hid a 4.9-star property — we
   rebuilt it on WordPress around the brand." Same facts, framed as a transformation.
2. **Make scope concrete.** Add a short, factual **"What we delivered"** block (pages built, migration, booking
   flow, SEO structure, ongoing support) — a specific scope list reads as substance, not fluff, and it is 100%
   true. Depth of scope *is* proof when you have no numbers.
3. **Use the real client facts you do have** (ratings, awards, "still running since 2019", "one of the UK's
   leading…") as the credibility layer — they are real and you are already stating some of them.
4. **Reframe the hub hero** away from "Real results / measurable impact" to something honest and still confident —
   "Real projects, done properly" — and drop the fabricated stat band (see §0).
5. When O4 outcome data lands, the Outcome + Review sections slot in on top of this — the structure is already
   built (CP-12), so this is additive.

The hub also lists **all 33 studies in one long scroll** after the featured set. Fine, but the featured set is
where persuasion happens; the long tail is for SEO/breadth and could be visually lighter.

---

## 5. SEO

- **Cannibalisation risk in the web-build cluster.** `/services/web-design-development` (pillar) overlaps with
  `/services/wordpress`, `/services/shopify` and `/services/ecommerce` — all chasing "web development / build"
  intent. The IA mitigates this with mega-menu grouping and the specialist/parent linking, but a **keyword-
  ownership pass** should confirm each page targets a distinct primary term (pillar = "web design and development
  agency"; wordpress = "wordpress development"; etc.) and that they link down/up rather than compete.
- **Stale meta titles**: the "| Free Strategy Call" suffix on case-study titles (in Sanity `seo.metaTitle`)
  references a removed CTA and wastes title real estate. Normalise to a consistent, keyword-led pattern.
- **The hub title "Website Case Studies & Real Results"** — "Real Results" again promises what the content lacks;
  reword.
- **Headings** are in good shape after the a11y pass (single h1, hierarchy fixed). Service and hub H1s are
  benefit-led rather than keyword-led ("Websites that look right and do their job") — good for humans; make sure
  the `<title>`/meta carry the search term so both jobs are covered.

---

## 6. Design and layout

The design is **polished and consistent** — branded colour system, section rhythm, real components. It does not
look like a template. The weak spots are not visual craft, they are focus:
- **The homepage's repetition dilutes the visual argument** — three passes at the four pillars means the eye never
  gets a clean "here is what they do, here is the proof, here is why."
- **The case-studies hub hero is the one genuinely generic, unfinished-feeling moment** — generic copy + fabricated
  stats undercut an otherwise strong site.
- **Density**: the service "What We Do" wall and the homepage length ask a lot of a skimming buyer. Visual
  hierarchy is fine; there is just *too much* competing for the same attention.
- Where the eye lands: heroes land well (strong H1 + single primary CTA), Selected Work lands well. The middle of
  the homepage (pillar block → AI block → why → lifecycle) is where attention drifts.

---

## Prioritised plan

**P0 — integrity (do first, small, high trust-impact)**
1. Rewrite `CaseStudiesHero`: remove "65% Faster Load Times" (fabricated), drop/keep only defensible stats
   ("200+ projects", "since 2013"), reframe "Real work. Real results." → honest work-led framing, replace the
   generic subhead. Normalise the case-study `seo.metaTitle` "Free Strategy Call" boilerplate. Verify the homepage
   "15+" stat. *Impact: removes a live fabricated claim and the site's most generic moment.*

**P1 — conversion (highest revenue impact)**
2. **Two-tier CTA everywhere** — "Start a project" primary + the audit as an explicit lower-intent secondary
   ("Not ready? Get a free website review"), on service pages and the homepage. *Impact: gives the not-ready
   majority a step; should lift total lead capture materially.*
3. **Homepage restructure** — cut the Lifecycle and the duplicate Web & Ecom block, trim Why to four, land on the
   ~8-section shape. *Impact: a tighter, faster argument; less drop-off through the middle.*
4. **Case-study cards + hub hero reframed** to transformation-not-description, plus a factual "What we delivered"
   scope block on detail pages. *Impact: work reads as proof, not a portfolio list.*
5. **Contact form friction** — make the message field optional (or two-step). *Impact: higher completion on the
   one route we have.*

**P2 — refinement**
6. **Service template** — move specialisms to the end, proof higher, tighten the "What We Do" wall to four cards.
7. **SEO keyword-ownership pass** on the web-build cluster; confirm no two pages fight for the same term.
8. Homepage stats animation trigger (reduced-motion/no-scroll shows 0).

**Sequencing:** P0 is a same-session fix. P1.2 (two-tier CTA) and P1.3 (homepage) are the two changes I expect to
move conversion most and should come next, each as its own reviewed change. P1.4 and P2 follow. Nothing here needs
outcome data — it all works with the delivery facts and client context we already have; the O4 numbers layer on
top later.

---

## Structural changes I'd want approved before building (per the standing rule)
- **Cutting the Lifecycle section** from the homepage and **removing the duplicate Web & Ecom block** (structural).
- **Adding a second, lower-intent CTA** site-wide (a conversion-model change — and an outward-facing CTA decision,
  so yours to approve).
- **Reordering the service template** (specialisms down, proof up).
Everything else (the hero rewrite, card reframing, form field, meta titles) is in-place editing, not restructuring.

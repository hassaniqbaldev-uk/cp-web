# Full site audit — staging-cp.vercel.app (26 Aug 2026)

Reviewed against one question: **does this look and read like a premium UK agency that charges £5,000
for a custom build?** Not "does it follow the brief." Every page in the sitemap was covered (1 homepage,
services hub + 18, solutions hub + 4, industries hub + 12, case-studies hub + 33 details sampled, blog hub
+ 9 posts, about, how-we-work, partner-with-us, audit, testimonials, contact, careers, legal + 7 policies).

**One honest limitation up front.** I could read every page's structure, copy, hierarchy and links, but I
could **not see the pixels** — the preview pane wouldn't screenshot, so this judges information architecture,
copy and structure, not visual craft (typography, spacing, image quality, motion polish). "Looks premium"
below is inferred from those; a human needs to do the visual pass. Where a subagent's fetcher reported "no
meta description" or "empty FAQs", I checked the raw HTML directly and **those were false alarms** — meta
descriptions and FAQ answers are present site-wide.

---

## The one-line answer

**It reads as a strong, well-organised agency — clearly above template-grade in structure and copy — but it
does not yet read unambiguously *premium*.** Three things hold it at "very competent" rather than "£5k
custom": a **low price anchor** that fights the positioning, **missing proof** (the site promises
"measurable impact" and mostly can't show it), and a handful of **visibly unfinished edges** (stat counters
sitting on "0", dead careers buttons, three sector pages showing the wrong work). Fix those and it crosses
the line. None of them are structural rebuilds.

---

## Per-page assessment

### Homepage
1. **Premium or template?** Structurally premium — hero → proof → four honest pillars → one deep pillar →
   why → founder → reviews → light pricing → contact is a confident, non-generic flow. Held back by two
   unfinished details: the hero's single stat renders **"0+ Project Completed"** (count-up starts at 0; also
   grammatically "Project", singular), and the pricing block **anchors low** ("From £1,500 / £1,000 / £300").
2. **Structure right?** Yes, after the restructure — nothing to add or cut. The single hero stat is weak;
   either make it strong (three real numbers) or drop it.
3. **Copy earning its place?** Mostly yes — tight and specific. The founder bio and "why" cards are good.
4. **Convert cold?** For a *search* visitor, yes. For a *cold Meta* visitor, the hero works but the low
   price signal and the "0+" stat leak doubt in the first screen (see Paid Traffic).

### Services hub + 18 service pages
The service template is the **strongest thing on the site** and genuinely reads premium: Why-it-matters →
Recent work → What-we-do → How-it-works → **Is this right for you (fit / not-fit)** → Investment (with
warranty) → related specialisms → FAQs. The fit/not-fit and warranty are real trust signals most competitors
don't bother with. Copy is service-specific, not filler.
- **Premium/template:** Premium template, consistently applied.
- **Structure:** Right. No changes needed.
- **Copy:** Earns its place on nearly every page.
- **Convert cold:** Yes for search intent; the audit + fit section give a not-ready visitor somewhere to go.
- **Weak spots to fix (per-page):**
  - **Two H1s break the outcome-led pattern** and read like labels: `custom-app-development` ("Custom App
    Development") and `ui-ux-design` ("UI/UX Design – Interfaces people find easy…"). Every other H1 is an
    outcome; these should match.
  - **`security` H1** ("keeps you protected") is vaguer than its own title (which names malware removal).
  - **`migrations` title** uses a keyword-stuffed double-pipe pattern unlike the rest.
  - **Duplicate proof:** the Biome4Pets case is the "Proof" block on **both** `ai-automation` and
    `custom-app-development`. Fine once, thin twice.
  - **CRO page's "Paid Media" specialist link points to `/services/ppc`**, which 308-redirects to
    `/services/paid-media`. Not broken, but an internal link should hit the canonical directly — it's a
    Sanity `specialistLinks` href to correct.
  - **Pricing is uniformly a single "From £X" with a hand-wave** ("depends on platform / number of tests").
    Fine as a light signal, but see the premium-anchor point below.

### Solutions hub + 4 solutions
- **Premium/template:** Competent, goal-framed. A rung below the service pages because three of the four have
  **no proof section**. `automate-operations` (Biome4Pets) and `replatform-rebuild` read strongest;
  **`increase-leads` is the thinnest page in this set** — no proof, fewest sections.
- **Structure:** `increase-leads` needs a proof/result or a case tie-in; right now it asserts without showing.
- **Copy:** Solid. **Hub H1 has a typo — "Solutions tailored to your Reality"** (stray capital R).
- **Convert cold:** Goal pages are actually a *good* cold-traffic surface (they match "I want more leads"
  intent) — but only if they carry proof. `increase-leads` would under-convert as-is.

### Industries hub + 12 pages — **the biggest structural problem on the site**
There are **two different templates live**, and it shows:
- **9 "narrative" pages** (b2b-services, charities-non-profits, ecommerce-brands, education-edtech,
  home-improvement-interiors, media-and-publishing, property-marketing, technology-saas, travel-hospitality)
  are genuinely good — sector-specific problems, real on-sector case studies, above template-grade.
- **3 "legacy" pages** (driving-schools, pharmacies, restaurants) use the older "Our Expertise / Methodology"
  template **and show the generic fallback trio — Sight for Life (charity), Now Press Play (EdTech),
  Minnessak (luxury bags)** — none of which match the sector. **A "specialist restaurant/pharmacy/driving-
  school" page that displays a charity and a handbag brand as its work actively destroys the specialism
  claim.** This is the single most damaging thing a premium buyer could land on.
1. **Premium or template?** The 9 read premium; the 3 read like a template with sector words dropped in.
2. **Structure?** Unify the 3 onto the narrative template, and **either curate adjacent work or drop the
   "Selected work" section on them** rather than show mismatched projects. Honestly, consider whether those
   three should be live at all yet (we launched them knowing evidence was thin — live, the mismatch is worse
   than expected).
3. **Copy?** The narrative pages earn their place. A few carry **uncited stats stated as fact** ("30%
   delivery tax", SaaS churn claims) and mild overreach ("one of the UK's most distinctive men's magazines")
   — cite or soften for a premium voice.
4. **Convert cold?** The 9 convert well for sector-targeted ads. The 3 would burn spend — a pharmacy owner
   who sees non-pharmacy work bounces.
- **Hub:** solid, 12 cards, but the "work" teaser is a generic portfolio strip, not per-sector; and
  travel-hospitality's H1 drops "Leisure" while the hub advertises the fuller name.

### Case studies hub + detail pages — **the proof gap**
- **Premium/template:** The detail scaffold is good (Overview → Challenge → Approach → Solution/Outcome →
  what-it-used → services-evidenced → related work), and the stories are specific (named clients, real live
  links, real facts *about the client*). But the **Outcome slot resolves qualitatively on almost every page.**
- **The integrity problem:** the hub subhead promises **"measurable impact"** and **not one card carries a
  metric.** Worse, two detail **titles make performance claims the body never backs**: `ayoa` ("SEO
  Migration") and `alertforce` ("Conversion Growth") show no traffic, ranking or conversion numbers.
  **Biome4Pets is the only page with a real result** (3 days → 1). For an agency selling on results, this is
  the biggest credibility gap on the site — the proof *architecture* is built, the proof *itself* is missing.
1. **Premium?** The template yes; the empty outcomes undercut it.
2. **Structure?** Right — it's waiting for data, not restructuring.
3. **Copy?** Good, but drop or soften title claims you can't substantiate ("Conversion Growth", "SEO
   Migration") until you have the numbers.
4. **Convert cold?** A cold visitor reads "measurable impact", scrolls for the impact, finds none. That gap
   converts *worse* than making no promise.

### Blog hub + 9 posts
- **Asset, not liability** — real, on-strategy topics (CRO, WP speed, AI, Webflow-vs-WP, PPC) that map to
  services and buyer questions; no placeholder/lorem. Good topical-authority surface and internal-link fuel.
- Held back by **execution**: the post carousel appears to **duplicate posts** (duplicate-content/indexing
  noise) and there's no category/search. Fix those and it's a clear asset. Don't cut it.

### About
- **Premium/template:** Confident, brand-forward ("A digital agency that gives a damn.", core values,
  founder story). Reads finished — **except the same "0+" stat counters** (years / projects / team all show
  0 in the served HTML). On a page built to establish credibility, three zeros is a visible hole.

### How we work
- Clear five-stage process, concrete. Fine. Minor: some sections appear duplicated in markup (icon/no-icon
  variants) — verify it isn't rendering twice.

### Partner with us
- **One of the strongest pages** — sharp white-label B2B pitch, a real comparison table (hiring vs partner),
  objection-handling FAQ. Reads premium and converts for its (agency) audience. Leave it.

### Audit
- **Thinnest of the money pages.** This is the destination for the whole site's "not ready? get a free
  audit" secondary CTA *and* the mega-menu audit link — so it carries real conversion load — but it's short,
  light on what the audit actually delivers, and leans on testimonials. For a premium free-audit offer it
  should show *what you get* (sample output, the video review, turnaround) with more substance. Underpowered
  for its job.

### Testimonials
- Fine now (names corrected, Sanity-backed, 11 reviews). Does its job as a social-proof page. Nothing to add.

### Contact
- **Good** — low-friction form (name, service, email, optional message), clear "what happens next", the
  two-tier audit escape hatch. No changes needed.

### Careers — **has a functional dead end**
- Real, specific roles listed (Paid Media Lead, WordPress Developer, UI/UX, PPC, Social Designer) — but
  **every "Apply Now" button has no destination.** Listing jobs nobody can apply to is worse than a
  coming-soon page. Either wire the buttons (mailto/ATS/form) or don't list roles. Fix before it's public.

### Legal hub + policies
- The policies themselves (Privacy, Terms) are **complete, UK-specific, production-ready** — genuinely good.
- The **hub cards are let down by generic, duplicated descriptions** (the Data Processing Agreement blurb is
  copy-pasted from Privacy). Cosmetic, but it reads unfinished on an otherwise buttoned-up section.

---

## Cross-cutting 1 — Paid traffic readiness

Honest verdict: **the site is built for search readers, and most pages assume a scroll-down, reading
visitor. That's the opposite of a cold Meta click.** A Meta visitor has no intent and ~3 seconds; a Google
Search visitor already typed the need. So:

**Would work for ad spend (send traffic here):**
- **Service pages** and the **9 narrative industry pages** — they open with a specific problem the visitor
  already feels, and give a fit-check + audit for the not-ready. Good for **Google Search** and for
  **sector-targeted Meta** (e.g. an ecommerce-brands ad → the ecommerce-brands page).
- **Solution goal pages** (`automate-operations`, `replatform-rebuild`, `launch-new-product`) — they match
  outcome-intent well *where they carry proof*. `increase-leads` is not ad-ready (no proof).
- **Partner-with-us** — strong for agency-targeted campaigns.

**Would burn ad spend (do not point ads here as-is):**
- **The homepage for cold Meta** — it's a considered, long "get to know us" page. A no-intent visitor needs
  the offer, the proof and the price posture in the first screen; instead the first screen has a generic
  headline and a "0+" stat. Cold Meta should hit a **purpose-built landing page**, not the homepage.
- **The 3 legacy industry pages** (driving-schools, pharmacies, restaurants) — mismatched work will bounce
  paid clicks; you'd pay to show a pharmacist a handbag project.
- **Case-study details** — no outcomes to close on; fine as a *proof link*, not an ad destination.
- **Audit** — it's the natural low-intent ad destination (free offer), but it's too thin to convert cold
  traffic right now; it's the highest-leverage page to strengthen *before* spending.

**What cold-traffic readiness would take:** the site has no dedicated **paid landing pages** — single-
purpose, above-the-fold offer + proof + one CTA, no nav distractions. For Meta specifically you want 2–3 of
those (one per core offer), pointed at by the ads, not the homepage. That's the real gap for paid, more than
any single page's copy.

## Cross-cutting 2 — SEO coverage

**Confirmed: every page was reviewed, not just the ones we worked on.** Good news first — the earlier
worry about missing metadata is **unfounded**: every page (homepage, all services, all case studies,
industries, solutions, legal, blog) **has a meta title and a meta description**, titles are keyword-led and
distinct, H1s exist and are singular, and the CP-09 ownership pass means no two pages fight for the same
term. FAQ answers **are** in the HTML (crawlable). Sitemap and robots are clean and enumerate the full set.

**Genuine SEO issues to flag:**
- **Case-study & performance-claim titles that the body can't back** (`ayoa` "SEO Migration", `alertforce`
  "Conversion Growth") — a mismatch Google's helpful-content signals dislike, and a trust risk.
- **Blog carousel duplicating posts** — potential duplicate-in-page / crawl-noise; verify canonical handling.
- **Internal link to a redirect** (`/services/ppc` → `/services/paid-media`) — trivial link-equity/UX leak;
  point it at the canonical.
- **H1 outliers** (`custom-app-development`, `ui-ux-design`) — not fatal, but the label-style H1s waste the
  page's single strongest on-page signal.
- **Thin/duplicate hub-card copy** (legal hub) and **generic industry-hub teasers** — low value, not harmful.
- **Internal linking is decent** (services ↔ specialisms ↔ solutions ↔ case studies) but **case studies
  don't link *up* to the relevant service/industry** as strongly as they could — a missed authority flow
  from your richest content.
- **No page is intent-less**, with one watch item: the 3 legacy industry pages technically target real
  intent but can't satisfy it (no matching proof), which reads as thin to a quality rater.

## Cross-cutting 3 — Traffic risk at cutover

Current organic is **almost entirely brand queries landing on the homepage.** That's actually the
*lower-risk* profile for a cutover — brand queries are resilient — but here's what could still cause a drop
and what to check first:

**Most likely causes of a drop, in order:**
1. **Redirect gaps.** The old site's URLs (the legacy `/solutions/*` industry URLs, old service/blog paths,
   old case-study slugs) must 301 to their new homes. We wired a redirect map (CP-15) and repointed the
   industry ones, but **any old URL with inbound links or existing rankings that isn't in the map will 404
   and drop.** This is the number-one risk. **Check first:** crawl the *current live* site's URL list (or
   Search Console's indexed pages) and diff against the new sitemap; every old URL needs a 301.
2. **Homepage title/H1/content change.** Brand queries land on the homepage; if its title or primary content
   shifted materially from what currently ranks, brand-query snippets can wobble briefly. Low risk (brand
   intent is forgiving) but **check the homepage title is stable and the brand name is early in it** (it is).
3. **The `creativepixels.agency` canonical.** The sitemap already emits the production domain (good), but
   confirm canonicals, OG URLs and the sitemap all point at the final production domain on cutover — a
   staging URL leaking into a canonical would be the classic own-goal.
4. **Metadata/indexing hygiene at switch.** Confirm `robots.txt` allows crawl on production (staging allows
   all — make sure production isn't accidentally `noindex`/`disallow` from a staging config), and submit the
   new sitemap in Search Console the day of cutover.
5. **New thin pages diluting quality.** The 33 case-study pages with no outcomes + the 3 mismatched industry
   pages add "thin" surface; unlikely to move brand traffic, but worth not launching more thin pages.

**If a drop happens, check in this order:** (1) Search Console Coverage for a spike in 404s / "not found" →
missing redirects; (2) the homepage's indexed title/snippet vs before; (3) canonical + robots on production;
(4) any page that lost its 301. A brand-query-driven site rarely craters at cutover if the redirects hold —
**redirects are 80% of the risk.**

---

## Prioritised recommendations

**P0 — unfinished edges that read as "not premium" (fast, high trust-impact):**
1. **Fix the "0+" stat counters** (homepage hero + About ×3). Render the final number server-side so they're
   never 0 in any state (SSR, no-JS, reduced-motion), then animate on top. A premium site never shows "0
   Projects".
2. **Fix or hide the Careers "Apply Now" buttons.** Dead apply buttons on real jobs is the worst kind of
   unfinished.
3. **The 3 mismatched industry pages** (driving-schools, pharmacies, restaurants): stop showing wrong-sector
   work — curate adjacent work or drop the work section on them, and move them onto the narrative template.
   Or unpublish until they can stand up.

**P1 — the premium & proof gap (the positioning-defining work):**
4. **Resolve the price anchor.** Decide the posture: if you're the £5k custom agency, the homepage/service
   "From £1,500 / £1,000 / £300" undercuts it. Either lead with value and move exact figures to a scoped
   conversation, or reframe the anchors as "typical projects £X–£Y" so the floor isn't the headline.
   (This is a positioning call — flagged as a question below.)
5. **Close the proof gap.** Pull the "measurable impact" promise on the case-studies hub *or* start filling
   real outcomes (even 2–3 flagship cases with one honest metric each changes the whole site). Remove
   unbacked title claims ("Conversion Growth", "SEO Migration") until the numbers exist.
6. **Strengthen `/audit`** — it carries the whole site's low-intent conversion load and is too thin.

**P2 — polish & consistency:**
7. H1 outliers (custom-app, ui-ux), migrations title, `/services/ppc` link, `increase-leads` proof, blog
   carousel duplication, legal-hub duplicate descriptions, Solutions "Reality" typo, travel H1 "Leisure",
   industry uncited stats, case-study → service/industry up-links.

**P3 — paid readiness (separate initiative):**
8. Build 2–3 dedicated paid landing pages (offer-first, one CTA, no nav) before spending on Meta. Don't
   point cold Meta at the homepage.

---

## What I need from you to make each page better

1. **Positioning / price:** Are we the "£5k custom build" agency, or the accessible "from £1,500" agency? The
   site currently signals both. This one answer drives the homepage hero, the Investment blocks and every
   service price line — I can't make it read premium while the floor price is the headline.
2. **Outcome data:** Which 3–5 case studies can carry a real, client-approved metric (traffic, revenue,
   conversion, time saved)? Even a handful transforms the proof story. If none can, do we pull the
   "measurable impact" promise?
3. **The 3 thin industries:** launch-and-improve, or unpublish until they have matching work? And is there
   *any* genuinely adjacent case study for each I can curate instead of the generic fallback?
4. **Careers:** is it meant to be live at cutover? If yes, where should "Apply Now" go (email, form, ATS)?
5. **The 15+ team / founded-year numbers** for the stat counters (you were confirming these) — I need the
   real figures to seed them correctly.
6. **Paid traffic:** are we actually running Meta/Google ads at/after launch? If yes, that changes the
   priority of the dedicated landing pages from P3 to P1.

Nothing changed — this is assessment only, on `development`/staging, `main` untouched.

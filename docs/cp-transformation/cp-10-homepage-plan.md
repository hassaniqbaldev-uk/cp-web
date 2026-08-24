# CP-10 — Homepage plan (PLAN ONLY, not built)

Status: awaiting Hassan's review. No code written. Homepage is the highest-traffic page and the only real
SEO asset, so the body is restructured to the new positioning while the ranking-load-bearing signals are
held constant.

## Hard constraint (protected — will not change)

- **URL `/`** — untouched.
- **Canonical `/`** — set in `src/app/(home)/page.jsx:17`, untouched.
- **Organization schema** — **FINDING: it does not currently exist.** A site-wide grep found **no JSON-LD /
  structured data anywhere** (no Organization, WebSite, or LocalBusiness schema on the homepage or in the
  layout). So "do not change the Organization schema" cannot apply to something that is absent. Two readings:
  (a) it was never built, or (b) it lives somewhere I have not been shown. **Recommendation:** add a proper
  `Organization` + `WebSite` schema as part of CP-10 — it is a brand-signal *gain* (helps brand-term and
  knowledge-panel signals), not a risk, and it is the one schema change that would *strengthen* the rankings
  this page holds. I will not touch URL/canonical/`<title>` regardless. **Confirm before I add it.**

Current homepage `<title>`: `Web Design Agency for Growth-Focused Brands | Free Audit` (no brand term in the
title; "CreativePixels" is in the meta description, the H1 area, and throughout the body). See §6 (risk).

## Current homepage composition (as built)

`HomePage.jsx` order: HomeHero → Expertise → Services → Established → Process → Work → Cta → Testimonials →
Contact → Footer. Content is **hardcoded constants** (EXPERTISE_CARD, SERVICES_CARD, PROCESS_CARD,
CLIENT_LOGO, plus a hardcoded testimonials array), except Work (real case studies) and the pillar/nav data.

---

## 1. Section-by-section: exists / build / drop

| CP-10 brief section | Current state | Plan | Notes |
| --- | --- | --- | --- |
| **Hero** | `HomeHero` exists (h1 + "Smart websites, standout branding, and ongoing support"; "Start a project" CTA already correct; client-logo strip) | **REWORK** | New pillar-led positioning; keep the H1's brand continuity (see risk). CTA already fixed. |
| **Immediate proof** | Client-logo strip inside `HomeHero` (`CLIENT_LOGO`) | **REWORK** | Keep as a logo band ("brands we've built for"). Honest, real, strong. |
| **Selected work** | `Work` (real case studies) | **REWORK** | Curate flagships; reuse `Work` / `CuratedWorkGrid`. |
| **Four pillars** | **Missing.** Current has generic "Our Expertise" + "Our Services" cards | **BUILD** (reuse `ServicesPillars`) | The interior site is 4-pillar; the front door is not. This is the core gap. |
| **Web & Ecommerce feature** (most weight) | Missing | **BUILD** | Heaviest block (≈45–50% of the business). `ServicesPillars` already weights Web & Ecommerce; a dedicated feature block reinforces it. |
| **Growth & Performance** | Missing | **BUILD** | Lighter per-pillar feature block. |
| **AI & Automation** | Missing | **BUILD** | Lighter per-pillar feature block. |
| **Brand & Experience** | Missing | **BUILD** | Lighter per-pillar feature block. |
| **Why CreativePixels** | `Established` ("Not just another agency. Your long-term digital partner.") | **REWORK** | Reconcile the date contradiction (below); senior-team + warranty differentiators. |
| **Lifecycle** | `Process` ("The Process", delivery steps) | **REWORK / decide** | Brief says "lifecycle" (growth stages); current is a delivery-process strip. Pick one (Q for you). |
| **Founder & team** | **Missing** | **BUILD (partial)** | Founder data exists (Hassan, MD, photo); needs bio + team decision. See §5. |
| **Reviews** | `Testimonials` (real client reviews, hardcoded) | **REWORK** | Real reviews exist — reuse them, confirm permission (see §4). |
| **Investment** | **Missing on homepage** | **BUILD** (reuse `Investment` + `servicePricing`) | Homepage-appropriate "from" anchors, single-source pricing. |
| **Final conversion** | `Cta` + `Contact` | **REWORK** | Keep the enquiry path; tighten copy. |

**Drop:** the generic **`Expertise` ("Our Expertise")** and **`Services` ("Our Services")** homepage sections —
they predate the 4-pillar model and are superseded by the pillars + per-pillar features. (Salvage any copy
worth keeping, then retire the two components from the homepage.)

## 2. Component reuse (the modular system built in CP-05/07/08)

- **`ServicesPillars`** (`navData.serviceColumns`) — the four-pillars section, already weights Web & Ecommerce.
  The homepage already fetches `getNavData()`, so the data is in hand.
- **`Work` / `CuratedWorkGrid`** — selected work (curated flagships; grid handles any count).
- **`Investment`** (reads `src/content/servicePricing.js`) — the investment section, single-source pricing.
- **`ServiceCaseHighlight`** — a single evidence block for the few genuine facts (see §4).
- **`Sector` / `Goal` grids, `HubHero`** — patterns/spares for the per-pillar feature blocks.
- **Primitives:** `SectionLabel` / `SectionTitle` / `SectionDescription`, `PrimaryButton` / `GradientButton`
  ("Start a project"), `MotionEffect`.
- **Keep** `HomeHero` (rework copy), `Cta`, `Contact`, `Testimonials` (rework), `Footer`, `HomeHeader`.

Net: the four-pillars, selected-work, investment and proof sections are largely *assembly* of existing
modular parts — the new build is mostly the per-pillar feature blocks, the founder section, and copy.

## 3. What the current homepage gets wrong vs the new positioning

1. **It frames the agency the old way.** "Web Design Agency", "Our Services", "Our Expertise" — generic, not
   the four pillars (Brand & Experience, Web & Ecommerce, Growth & Performance, AI & Automation) that every
   page beneath now uses. The front door contradicts the interior.
2. **No weight on Web & Ecommerce** — the largest part of the business gets no special emphasis on the page
   that most people see.
3. **Date contradiction (trust risk):** `Established` says **"Established in 2018"** *and* "building lasting
   relationships **for over a decade**"; `Process` says **"refined our delivery process over 10 years"**.
   2018→2026 is ~8 years, so "over a decade / 10 years" is not supportable from a 2018 founding. Pick one
   true figure and use it everywhere (Q for you — see also IA §3.6 which flags this).
4. **Proof is thin and generic** — logos are there, but the value props ("smart websites, standout branding,
   ongoing support") are undifferentiated and don't carry the senior-team / warranty / pillar positioning.
5. **No investment/pricing signal** — the interior pages now anchor "from" pricing; the homepage says nothing,
   so the qualification the pricing does elsewhere is missing at the top of the funnel.
6. **AI & Automation is invisible** — a named pillar with its own service pages has no homepage presence.

## 4. Proof, given zero case-study quotes and ~3 metrics across 31 case studies

The scarcity is specifically in the **case study documents**: they carry **no structured metric fields**
(result/stats/metrics are null across the set) and only ~3 quantified outcomes exist, buried in prose (e.g.
Biome4Pets 3 days → 1 day). **But there is a real testimonial bank** — the current Testimonials array holds
detailed, specific client reviews (Express-conveyancing, Game Art Brain, and others, several naming Hassan).
Those read as genuine collected reviews, not case-study quotes. So proof is built from what is real:

1. **Client logos** (immediate proof band) — "brands we've built for". True, owned, strong.
2. **Delivery facts, not outcomes** — countable, honest credibility: number of projects delivered, sectors
   served, breadth of platforms. No invented percentages.
3. **Selected work** — real flagship case studies with real thumbnails; let the work carry it.
4. **The genuine metrics only** — surface the 2–3 real, attributable facts via `ServiceCaseHighlight`
   (e.g. Biome4Pets), attributed correctly, never padded.
5. **Real reviews** — reuse the existing testimonial bank as the "reviews" section (confirm with you these
   are real and we have permission to display them; if any are not, they come out).
6. **Trust signals** — senior team and the warranty, framed as differentiators (not outcomes).

**Will not do:** fabricate metrics/percentages, invent quotes, or imply outcomes we cannot attribute — per the
standing copy rule. If the review permissions don't hold, the reviews section becomes a logo/rating strip
rather than quotes.

## 5. Founder & team — can it be built?

**Partially, now.** What exists: a Sanity `author` doc — **Hassan, "Managing Director", with a photo, no bio.**
That is enough for a **founder block** (name, role, photo) but not the copy.

- **Buildable now:** a founder block for Hassan — needs a **2–4 sentence bio** from you.
- **Not buildable without you:** any wider **team** — there is no other team-member data (no names, roles,
  photos, or bios in the system).

**What I need from you:** (a) Hassan's founder bio; (b) scope decision — founder-only vs founder + team;
(c) if team: names, roles, photos and short bios per person; (d) whether to model this in Sanity (a small
`team`/extended `author` doc, content-editable later) or hardcode for now.

**Recommendation:** ship a **founder block** now (Hassan + bio, photo we already have) and treat a full team
grid as a later content-only addition once you supply the people — rather than a thin or padded team section.

## 6. Biggest risk

**Losing brand-term rankings.** The homepage holds "CreativePixels" brand rankings; the risk vectors and
mitigations:

1. **Signal churn** — changing the `<title>`, H1, or on-page brand mentions in a way that reduces brand-term
   prominence can dip rankings. *Mitigation:* keep the brand name prominent in title/description/H1/body,
   preserve the H1's semantic role (one H1, brand + positioning), and change copy incrementally, not wholesale.
2. **URL / canonical / schema** — the hard constraint. I will not touch `/`, canonical `/`, or (once it
   exists) the Organization schema. **Adding** Organization + WebSite schema *strengthens* brand signals
   (net positive), pending your approval — it does not change existing continuity because none exists today.
3. **Structure change confusing Google** — a large re-layout can cause a temporary re-evaluation. *Mitigation:*
   keep the URL and canonical fixed (the strongest continuity signals), retain the key brand/positioning
   phrases, and ship in one clean deploy rather than repeated churn.
4. **Core Web Vitals** — the homepage carries a heavy intro animation + multi-layer gradients; performance is a
   ranking input. *Mitigation:* keep the new sections lean, reuse the optimised modular components, watch LCP.
5. **The missing Organization schema is itself a gap** — we currently give Google no explicit entity for the
   brand. Adding it is the safest available *upside* here.

**Net safe play:** restructure the body (pillars, per-pillar features, proof, founder, investment) while
holding the ranking-load-bearing signals constant — URL, canonical, title (or only a careful brand-forward
improvement), H1 brand continuity — and *add* (never remove) Organization schema.

---

## Proposed section order (follows the brief)

1. Hero (rework) · 2. Immediate proof — logo band (rework) · 3. Selected work (rework) · 4. Four pillars
(build, `ServicesPillars`) · 5. Web & Ecommerce feature — heaviest (build) · 6. Growth & Performance (build) ·
7. AI & Automation (build) · 8. Brand & Experience (build) · 9. Why CreativePixels (rework `Established`,
fix date) · 10. Lifecycle (rework `Process`) · 11. Founder & team (build, founder-first) · 12. Reviews
(rework `Testimonials`) · 13. Investment (build, reuse `Investment`) · 14. Final conversion (rework
`Cta` + `Contact`).

Note: the brief places selected work (3) before the pillars (4). That works — a proof glimpse before the
"what we do" — and the four-pillars overview then leads into the four per-pillar feature blocks (5–8), Web &
Ecommerce heaviest. I will flag in the build if any ordering tweak improves the narrative.

## Open questions — need answers before building

1. **Organization schema** — add it (recommended), or is it living somewhere I should use?
2. **Founder vs team** — founder-only now, or founder + team (supply people)? Plus Hassan's bio.
3. **Reviews** — confirm the existing testimonials are real and permitted to display; any external
   (Google/Clutch) ratings to cite? If permissions fail, reviews become a logo/rating strip.
4. **The date** — confirm the true founding year (2018?) and kill the "decade / 10 years" claims, or correct
   the founding year everywhere.
5. **Lifecycle** — the growth lifecycle (stages a client moves through) vs the current delivery "Process"
   steps — which do you want in slot 10?
6. **Title** — keep `Web Design Agency for Growth-Focused Brands | Free Audit` verbatim to protect rankings,
   or allow a careful brand-forward rewrite?

**Do not build until these are answered and the plan is approved.**

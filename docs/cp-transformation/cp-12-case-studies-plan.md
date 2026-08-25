# CP-12 — Case studies & proof: PLAN (for approval, nothing built)

Structure and presentation only. No assets (handled separately at the end). No invented outcomes, metrics or
quotes. Grounded in the actual staging data + current components.

## 1. Current state (measured, 33 published case studies)

**Designation (already in the data):** flagship **9**, supporting **21**, archive **2**, none **1**
(`ivy-and-duke`, which I published this session — needs a designation).

**Tagging:**
- **Services: healthy.** 32/33 tagged, **0 broken refs**, all resolve to current service docs. Service→case-study
  and case-study→service linking is sound.
- **Industries: broken for the new IA.** 32/33 tag the **legacy stub industries** (`hasPage:false`, e.g. "Travel",
  "Hospitality", "Leisure"), NOT the 7 canonical `hasPage:true` industry pages. So a canonical industry page's
  `references(^._id)` pulls **almost nothing**, and the hub's industry filter lists stub industries. **This is the
  "unreliable tags" problem, concretely.**

**Outcome data:** **0/33.** There is no `outcome` field and no `review`/quote field in the schema, and none is
populated. (Ties to O4 — you are collecting this.)

**Hub (`/case-studies`):** renders `FeaturedCaseStudies` with a **link-based service + industry filter**
(`?service=…&industry=…`) — lightweight, server-rendered, good. BUT the hub query does **not** fetch `designation`,
so it cannot lead with flagship or hide archive. Filtering exists; prioritisation does not.

**Detail (`/case-studies/[slug]`):** Hero → ClientOverview → TheChallenge → OurApproach → TheSolution → CustomCode
→ Cta. `CustomCode` renders an arbitrary `customCode` HTML field (not the tech stack).

## 2. Detail template vs the brief's 12 parts

| Brief part | Field | Status |
| --- | --- | --- |
| Client context | `clientOverview` | ✅ ClientOverview |
| Challenge | `theChallenge` | ✅ TheChallenge |
| Strategy | `ourApproach` | ✅ OurApproach |
| What we delivered | `theSolution` | ✅ TheSolution |
| Design decisions | — | ❌ no field, no section |
| Technical decisions | — | ❌ no field, no section |
| Technology | `technologies` (refs exist) | ❌ **data present but NOT rendered** |
| Outcome | — | ❌ no field, 0 data — DEFER (O4) |
| Review | — | ❌ no field, 0 data — DEFER (O4) |
| Relevant services | `services` (valid refs) | ❌ **tagged but NOT rendered as links** |
| Related work | — | ❌ missing |
| CTA | `ctaButton` / `Cta` | ✅ Cta |

**Covered: 5 of 12** (client context, challenge, strategy, delivered, CTA). **Missing: 7** — three of which
(technology, relevant services, related work) have the data already and just need rendering; two (design/technical
decisions) need real per-study content; two (outcome, review) need the O4 data.

## 3. What I would BUILD now (structure/presentation, existing data only)

**Hub:**
1. **Use designation.** Add `designation` to the hub query; **order flagship-first, then supporting**; **exclude
   archive from the default grid** (surface archive only when a filter is applied, or behind a small "show all"
   affordance). Flagship leads; archive does not surface unless someone looks.
2. **Keep the existing link-based filter** (it is already light). Once the industry tags are fixed (§5), point the
   industry filter at the canonical industries so it matches the industry pages. Service filter needs no change.

**Detail (add three sections that use data we already have):**
3. **Technology** — render the `technologies` refs (names/logos resolve). Real, present, unused today.
4. **Relevant services** — render the tagged `services` as links to their service pages. This is the cross-link
   the brief wants and the evidence loop (case study ⇄ service). Data is valid.
5. **Related work** — derive 2–3 cards from case studies sharing a service (exclude self + archive; prefer same
   designation tier). No new data needed.

**Where there is no outcome data:** present **scope + delivery facts as the proof** — a tidy "what we delivered"
(from `theSolution`), the technology, and the services evidenced — rather than an empty "Results" section. No
fabricated metrics or quotes.

## 4. What I would DEFER until the O4 outcome data arrives

- **Outcome section** (metrics/results) — no data; do not fabricate. Add when O4 lands.
- **Review/quote section** — we have general testimonials but **no per-case-study quote**; do not attach a generic
  testimonial to a specific project as if it were about that project. Add when real per-study quotes exist.
- **Design decisions / Technical decisions** — no field and no content. I would NOT ship empty shells. Two options
  for you: (a) add the schema fields now and you/content fill them per study over time; or (b) leave them until
  there is content. My recommendation: **(a) add the fields but render the section only when populated**, so the
  template is ready without showing gaps.

## 5. The tagging fix (point 3) — the real data work

- **Services:** no change (healthy).
- **Industries:** re-point the 32 case studies' industry refs from the **legacy stub** industries to the **7
  canonical** `hasPage:true` docs. This is the CP-08 reconciliation and is required for (a) industry pages to pull
  their related work and (b) the hub industry filter to match the industry pages. It is a careful, reversible data
  migration; I will **derive the stub→canonical mapping and show it for approval before mutating** (some stubs map
  cleanly, e.g. "Travel"/"Hospitality"/"Leisure" → `travel-hospitality`; others may not map to any of the 7 and
  those studies would carry no industry tag until more industry pages exist).
- **`ivy-and-duke`:** set a designation (recommend **supporting** — real and complete, not a flagship showcase).

## 6. Decisions I need from you before building

1. **Industry tag migration** — proceed? I will bring the stub→canonical mapping for approval first.
2. **Design/technical-decisions sections** — add the schema fields now (render only when populated), or leave
   entirely until content exists? (My rec: add fields, render-when-populated.)
3. **Archive on the hub** — hide from the default grid, surface only via filter? (My rec: yes.)
4. **`ivy-and-duke` designation** — supporting? (My rec: yes.)
5. **Outcome + review** — confirm DEFER to O4 (no fabrication). (My rec: yes.)

## 7. Order of build (once approved)

1. Hub designation (flagship-first, hide archive) + fetch designation in the query.
2. Detail cross-links: Technology, Relevant services, Related work (existing data).
3. Industry tag migration (after you approve the mapping) → industry pages + hub filter pull correctly.
4. Add design/technical-decisions schema fields, render-when-populated (if approved).
5. Leave outcome + review for O4.

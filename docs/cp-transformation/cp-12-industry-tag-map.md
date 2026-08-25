# CP-12 — Industry tag migration: stub → canonical mapping (FOR APPROVAL, nothing mutated)

Re-point case-study `industries` refs from the legacy `hasPage:false` stubs to the 7 canonical `hasPage:true`
industry docs, so canonical industry pages pull their related work and the hub filter matches. Per Hassan: where
a stub has no canonical home, **leave the study untagged** (a wrong tag is worse than none). Nothing is mutated
until this is approved.

## The 7 canonical industries
`b2b-services`, `charities-non-profits`, `ecommerce-brands`, `education-edtech`, `home-improvement-interiors`,
`technology-saas`, `travel-hospitality` (Travel, Hospitality & Leisure).

## A. CLEAN mappings — unambiguous, recommend applying (covers 21 studies)

| Stub (studies) | → Canonical |
| --- | --- |
| B2B (4) | `b2b-services` |
| Charity & Non-Profit (4) | `charities-non-profits` |
| Ecommerce (4) | `ecommerce-brands` |
| Education (4) | `education-edtech` |
| Home Improvement (1) + Interiors and Furnishings (1) | `home-improvement-interiors` |
| Hospitality (4) + Leisure (4) + Travel (2) | `travel-hospitality` |
| SaaS (4) + Technology (5) | `technology-saas` |

These 11 stubs map 1:1 to a canonical with no judgement. **21 of 32 tagged studies keep an industry tag.**

## B. BORDERLINE stubs — NOT auto-mapped (your call to include or leave untagged)

I did **not** map these — mapping is at the tag level, so a loose fit would mislabel every study carrying it:

| Stub | Possible canonical | Why it's borderline |
| --- | --- | --- |
| Restaurants, Food | `travel-hospitality` | The canonical is "Travel, Hospitality & Leisure", which arguably covers restaurants/food. Defensible if you want it. |
| Retail | `ecommerce-brands` | Retail may be physical, not ecommerce. |
| Fashion, Jewellery | `ecommerce-brands` | Often ecommerce, but could be brochure sites. |
| Financial Services | `b2b-services` | Professional services fit, but distinct enough to flag. |
| Training | `education-edtech` | Training ≈ education, but not identical. |

**Say which (if any) of these you want mapped; otherwise the studies carrying only these stay untagged.**

## C. NO canonical home → these 11 studies would end up UNTAGGED

Under clean mappings only, these lose their industry tag (their sectors have no page):

| Study | Only stub(s) |
| --- | --- |
| `3d-cad-visuals` | Property Marketing |
| `sp-elite-installation` | Property Marketing |
| `trust-certs` | Property Marketing |
| `sorted` | Media & Publishing |
| `vuegraphy` | Media & Publishing |
| `junior-jam` | Restaurants |
| `the-smokey-carter` | Food |
| `game-art-brain` | Gaming |
| `ao-arena` | Events, Entertainment |
| `energy-angels` | Public Sector, Housing, Energy |
| `manzar` | Creative, Photography |

### This is the argument for more industry pages
- **Property Marketing — 3 studies** (`3d-cad-visuals`, `sp-elite-installation`, `trust-certs`). The single
  biggest cluster with no home. A **Property Marketing** industry page would recover all three, and property was
  also one of the legacy `/solutions` URLs we redirected to a generic service (SEO loss). Strong case.
- **Media & Publishing — 2 studies** (`sorted`, `vuegraphy`). A **Media & Publishing** page recovers both.
- **Restaurants/Food — 2 studies** (`junior-jam`, `the-smokey-carter`). Either map to `travel-hospitality`
  (borderline B), or leave for a future Hospitality-specific treatment.
- The rest (`game-art-brain`, `ao-arena`, `energy-angels`, `manzar`) are genuine one-offs with no home — leave
  untagged.

## What I need from you
1. **Approve set A** (the clean mappings) to apply?
2. **Any of set B** to include? (My lean: map Restaurants + Food → `travel-hospitality` since the canonical name
   explicitly covers hospitality; leave the ecommerce-adjacent ones untagged unless you confirm they're ecommerce.)
3. The **untagged 11** — accept as-is for now, or does the Property Marketing / Media & Publishing clustering make
   you want to publish those two industry pages (which I'd then map to)?

On your word I apply the approved mappings on staging and re-verify that industry pages and the hub filter pull
the correct studies. Nothing mutated yet.

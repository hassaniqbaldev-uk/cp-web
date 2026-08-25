// Deliberate homepage work curation — the same discipline as the `workSlugs` field on service, solution
// and industry pages. The homepage's most important slots are a decision, not inherited from the
// /case-studies listing sort.

// Selected work (the section high on the page). Order matters — the FIRST is the large lead card.
// Ayoa (SaaS/app) leads and signals the apps-and-platforms capability Web & Ecommerce carries;
// AlertForce (B2B / professional services); Minnessak (flagship ecommerce — nothing else on the page
// represents the 45-50% of the business that ecommerce is). SaaS, B2B and ecommerce, all on-target.
// Casa Botanica is intentionally OFF the homepage (a Panama villa business advertises holiday rentals to
// a UK-SME audience); it stays in the /case-studies hub.
export const SELECTED_WORK_SLUGS = ["ayoa", "alertforce", "minnessak"];

// Relevant work for the Web & Ecommerce feature block. Deliberately DISTINCT from SELECTED_WORK_SLUGS so
// the two sections never show the same case study and the page never looks thin (the fetch also filters
// out any selected-work slug defensively). Leans ecommerce (the weighted pillar) plus a platform build.
export const WEB_ECOMMERCE_WORK_SLUGS = ["fultons", "mr-pickles", "teleqo-tech"];

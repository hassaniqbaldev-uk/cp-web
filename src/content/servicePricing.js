// SINGLE SOURCE OF TRUTH for service "from" pricing + the post-launch warranty copy.
//
// Why code and not Sanity (CP-05 decision, 21 Aug 2026): pricing changes rarely and, while the
// figures are still under review, correctness matters more than editability. This is a DELIBERATE
// staging post — it MOVES to a Sanity pricing singleton later, so non-developers can edit it. Until
// then, every service page reads its price from here, keyed by slug, so a figure is never duplicated
// or hardcoded per page.
//
// The Investment module reads THIS, never the per-document `options.pricingCard` (that data is
// unapproved and inconsistent across the estate — see 00-context §8 data-integrity finding).
//
// Figures are the approved "from" prices (00-context §7). UK English, no invented ceilings.

export const SERVICE_PRICING = {
  branding: {
    from: "From £1,000",
    framing:
      "Branding projects start from £1,000, from a logo and the essentials through to a full identity system with guidelines and collateral. Where yours lands depends on how much you need, and we scope it with you before anything starts.",
  },
  "web-design-development": {
    from: "From £1,500",
    framing:
      "Web projects start from £1,500, from a focused business website through to a larger custom build. The right figure depends on the number of pages, the design work and any functionality you need, and we scope it with you before anything starts.",
  },
  ecommerce: {
    from: "From £3,500",
    framing:
      "Ecommerce projects start from £3,500. Where a build lands depends on the platform, the size of your catalogue and the integrations you need, and we scope it with you before anything starts.",
  },
};

// Approved warranty (D18). Conservative wording, close to actual practice (§9 binding constraint):
// three months of free support on what we built, fixing issues in that window. Never promise more
// than the §9A clause covers.
export const WARRANTY = {
  // Short form — for the Investment module, next to the price where it de-risks the spend.
  short:
    "Every build includes three months of free support after launch. If something we built breaks in that window, we put it right at no extra cost.",
  // One-line form — for the closing CTA reassurance.
  line: "Every website we build includes three months of free support after launch, so you are looked after once you go live.",
};

// Convenience lookup used by the Investment module.
export const getServicePricing = (slug) => SERVICE_PRICING[slug] || null;

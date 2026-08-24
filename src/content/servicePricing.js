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
  "custom-app-development": {
    from: "From £5,000",
    framing:
      "Custom application projects start from £5,000. Bespoke software is scoped by what it needs to do, the integrations involved and the data behind it, so we work that out with you before anything starts.",
  },
  "ai-automation": {
    from: "From £1,500",
    framing:
      "AI and automation projects start from £1,500. What you pay depends on the complexity of the process and the tools involved. We start from the bottleneck worth fixing and scope it with you before anything begins.",
  },
  seo: {
    from: "From £500/month",
    framing:
      "SEO runs as a monthly retainer from £500/month. It is a substantial, ongoing engagement, and what you pay reflects the competitiveness of your market and the depth of work each month. We agree the scope with you before we start.",
  },
  "paid-media": {
    from: "From £300/month",
    framing:
      "Paid media management starts from £300/month, and that is our fee for running the campaigns. Your advertising budget is separate and goes directly to the platforms. We agree both with you up front, so there are no surprises.",
  },
  email: {
    from: "From £300/month",
    framing:
      "Email marketing runs as a monthly retainer from £300/month, covering the flows and campaigns we build and send. What you pay reflects how much sending and how many automations you need each month.",
  },
  "growth-and-support": {
    from: "From £300/month",
    framing:
      "Ongoing support runs as a monthly care plan from £300/month, covering updates, monitoring and the steady improvements that keep your site healthy. Plans scale with the size of your site and how hands-on you want us to be.",
  },
  security: {
    from: "From £1,000",
    framing:
      "Security work starts from £1,000 as a project, covering the cleanup, hardening and configuration your site needs. Ongoing monitoring is available as part of Growth & Support rather than priced here.",
  },
  cro: {
    from: "From £300/month",
    framing:
      "Conversion work runs as a monthly retainer from £300/month. What you pay depends on the number of tests and the scope of the work each month, and we agree it with you before we start.",
  },
  branding: {
    from: "From £1,000",
    framing:
      "Branding projects start from £1,000, from a logo and the essentials through to a full identity system with guidelines and collateral. Where yours lands depends on how much you need, and we scope it with you before anything starts.",
  },
  accessibility: {
    from: "From £1,000",
    framing:
      "An accessibility audit and the work that follows start from £1,000. The figure depends on the size of your site and how much needs fixing, and the audit tells us the scope before we commit to anything.",
  },
  speed: {
    from: "From £1,000",
    framing:
      "Website speed work starts from £1,000. The figure depends on the state of your site and how much is dragging it down, and the audit tells us the scope before we commit.",
  },
  migrations: {
    from: "From £1,500",
    framing:
      "Migrations start from £1,500. The figure depends on the size of your site, how much content moves and whether the new platform needs building too. We scope it from a look at your current site.",
  },
  wordpress: {
    from: "From £1,500",
    framing:
      "WordPress builds start from £1,500, the same starting point as our wider web work, since a WordPress site is one of the ways we deliver it. Where yours lands depends on the pages, the design and any custom functionality, and we scope it with you first.",
  },
  "web-design-development": {
    from: "From £1,500",
    framing:
      "Web projects start from £1,500, from a focused business website through to a larger custom build. The right figure depends on the number of pages, the design work and any functionality you need, and we scope it with you before anything starts.",
  },
  shopify: {
    from: "From £3,500",
    framing:
      "Shopify builds start from £3,500, the same starting point as our wider ecommerce work, since a Shopify store is an ecommerce build. Where yours lands depends on the design, your catalogue and the apps you need, and we scope it with you first.",
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

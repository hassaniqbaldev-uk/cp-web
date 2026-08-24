// CP-08: Industries. An industry is WHO the client is (their sector), not what we do (services)
// or what they want to achieve (solutions/goals). The detail pages reuse the SAME modular components
// as services and solutions; the copy is about understanding the sector. Only `hasPage == true`
// industries are published — the hub, the nav and the static params all filter on it, so turning an
// industry on later is a content change (set `hasPage: true`), not code (the expansion contract, D44).

// Hub listing — only published industries.
export const INDUSTRIES_QUERY = `
  *[_type == "industries" && hasPage == true && !(_id in path("drafts.**")) && defined(slug.current)] | order(title asc) {
    _id,
    title,
    excerpt,
    "slug": slug.current,
    icon { asset->{ url } }
  }
`;

// Detail — the modular shape (mirrors solutions: no pricing, no parent band). An industry has no
// `options`/`parentService`. `workSlugs` drives the tagged-first / newest-as-fallback work rule.
export const INDUSTRIES_DETAIL_QUERY = `
  *[_type == "industries" && slug.current == $slug && hasPage == true][0] {
    _id,
    workSlugs,
    seo { metaTitle, metaDescription },
    detailHero {
      label, title, description, caseStudiesLink,
      heroImage { asset->{ url } }
    },
    partnerWithUs {
      heading { label, title, description },
      card[] { title, description }
    },
    expertise {
      heading { label, title, description },
      card[] { icon { asset->{ url } }, title, description, listItem[] { label } }
    },
    methodology {
      heading { label, title, description },
      card[] { title, description, icon { asset->{ url } } }
    },
    projectShowcase {
      heading { label, title, description },
      projects[] { title, excerpt, image { asset->{ url } } },
      fitCard[] { label },
      notFitCard[] { label }
    },
    caseHighlight { eyebrow, title, context, points[] { label }, result, href },
    faqs[] { question, answer }
  }
`;

// Sitemap / static params — only published industries get a route.
export const INDUSTRIES_SITEMAP_QUERY = `
  *[_type == "industries" && hasPage == true && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }
`;

export const SOLUTIONS_QUERY = `
  *[_type == "solutions"] | order(title asc) {
    _id,
    title,
    excerpt,
    category,
    slug { current },
    icon {
      asset->{
        url
      }
    }
  }
`;

// CP-07: solutions use the SAME modular pattern as services (the components are shared, data-driven).
// A GOAL page has no pricing (a goal is not priced; it is reached via services) and no parent band, so
// there is no `options`/`parentService` here. `specialistLinks` point at the SERVICES that deliver the
// goal (reframed via `specialistLinksHeading`). `modularLayout` gates the modular layout; absent = legacy.
export const SOLUTIONS_DETAIL_QUERY = `
  *[_type == "solutions" && slug.current == $slug][0] {
    _id,
    modularLayout,
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
    specialistLinks[] { label, href, description },
    specialistLinksHeading { label, title, description },
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

export const SOLUTIONS_SITEMAP_QUERY = `
*[_type == "solutions" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}
`;

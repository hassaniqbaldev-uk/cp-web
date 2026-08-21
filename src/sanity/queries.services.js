export const SERVICES_QUERY = `
  *[_type == "services"] | order(title asc) {
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

// NEW FIELDS (CP-05, 21 Aug 2026): section `heading { label, title, description }` objects on
// partnerWithUs / expertise / methodology / projectShowcase / options make every header content-driven
// (components fall back to their current hardcoded string when a heading is absent, so the 16 existing
// pages are unchanged). `specialistLinks[]` powers the "specialisms that are part of this offer" band.
// `modularLayout` gates the CP-05 layout (turns ProjectShowcase + Investment ON, and the generic Cta2 +
// global Testimonials OFF). `options.pricingCard` is deliberately NOT projected — the Investment module
// reads the approved single source (src/content/servicePricing.js), never the per-doc pricing data.
// These fields need Studio schema definitions (spec in 00-context); they work via API/query meanwhile.
export const SERVICES_DETAIL_QUERY = `
  *[_type == "services" && slug.current == $slug][0] {
    _id,
    modularLayout,
     seo {
    metaTitle,
    metaDescription
    },
    detailHero {
    label,
    title,
    description,
    caseStudiesLink,
    heroImage {
        asset->{
          url
        }
      }
    },

     projectShowcase {
      heading { label, title, description },
      projects[] {
        title,
        excerpt,
        image {
          asset->{
            url
          }
        }
      },
       fitCard[] {
        label,
      },
       notFitCard[] {
        label,
      }
    },

    specialistLinks[] {
      label,
      href,
      description,
    },

    partnerWithUs  {
    heading { label, title, description },
    card[] {
        title,
        description,
      },
    },

    expertise  {
    heading { label, title, description },
    card[] {
        icon {
          asset->{
            url
          }
        },
        title,
        description,
        listItem[] {
        label,
       },
      }
    },

    methodology  {
    heading { label, title, description },
    card[] {
        title,
        description,
        icon {
          asset->{
            url
          }
        },
      }
    },

    options  {
    heading { label, title, description },
    includeCard[] {
        label,
      }
    },

        faqs[] {
      question,
      answer
      }
  }
`;

export const SERVICES_SITEMAP_QUERY = `
*[_type == "services" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}
`;

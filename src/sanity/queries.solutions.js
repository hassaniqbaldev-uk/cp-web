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

export const SOLUTIONS_DETAIL_QUERY = `
  *[_type == "solutions" && slug.current == $slug][0] {
    _id,
    seo {
    metaTitle,
    metaDescription
    },
    detailHero {
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

    partnerWithUs2  {
    card[] {
        title,
        description,
      },
    },

    expertise3  {
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
    includeCard[] {
        label,
      },
    pricingCard[] {
        tag,
        category,
        price,
        description,
        features[] {
        label,
       },
      }
    },

        faqs[] {
      question,
      answer
      }
  }
`;

export const SOLUTIONS_SITEMAP_QUERY = `
*[_type == "solutions" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}
`;

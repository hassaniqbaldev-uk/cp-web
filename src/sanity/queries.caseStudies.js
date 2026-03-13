// CASE STUDIES
export const caseStudiesListingQuery = `
*[_type == "caseStudies"] | order(order asc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  thumbnailImage,
  iconBg,
  iconColor
}
`;

export const caseStudiesDetailQuery = `
*[_type == "caseStudies" && slug.current == $slug][0]{
  _id,
  title,
  seo {
    metaTitle,
    metaDescription
  },
  primaryColor,
  secondaryColor,

  // Detail Page Hero
  detailHero {
    ctaButton {
      label,
      url
    },
    heroImage,
    heroElement
  },

  // Detail Page Client Overview
  clientOverview {
    title,
    description,
    "cardImage": cardImage[defined(asset._ref)] {
      _key,
      _type,
      asset,
      hotspot,
      crop
    }
  },

   // Detail Page The Challenge
  theChallenge {
    title,
    description,
    cardImage1,
    cardImage2,
    points
  },

  // Detail Page Our Approach
  ourApproach {
    title,
    description,
    cardImage,
    points
  },

  // Detail Page The Solution
  theSolution {
    title,
    description,
    cardImage,
  },

  // Custom Code Section
  customCode,

  // Filters (for later use or display)
  tools[]->{
    _id,
    toolImage,
    altText
  },
  services[]->{
    _id,
    title,
    "slug": slug.current
  },
  industries[]->{
    _id,
    title,
    "slug": slug.current
  }
}
`;

export const caseStudiesFilteredQuery = `
*[
  _type == "caseStudies"
  && ($service == null || $service in services[]->slug.current)
  && ($industry == null || $industry in industries[]->slug.current)
] | order(order asc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  thumbnailImage,
  iconBg,
  iconColor
}
`;

export const servicesQuery = `
*[_type == "services" && count(*[_type == "caseStudies" && references(^._id)]) > 0] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}
`;

export const industriesQuery = `
*[_type == "industries" && count(*[_type == "caseStudies" && references(^._id)]) > 0] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}
`;

export const CASE_STUDY_SITEMAP_QUERY = `
*[_type == "caseStudies" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}
`;

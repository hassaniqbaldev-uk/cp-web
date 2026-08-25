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

// Homepage curated work — fetch a specific set of case studies by slug (never archive/drafts, must have a
// thumbnail). The caller re-orders to the slug list and controls the selection, so the homepage's work
// slots are a deliberate decision (see src/content/homepage.js) rather than inherited from a sort field.
export const caseStudiesBySlugsQuery = `
*[_type == "caseStudies" && !(_id in path("drafts.**")) && slug.current in $slugs && defined(thumbnailImage)]{
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

  // Taxonomy (CP-00K four-taxonomy model). The old tools array was migrated into
  // technologies; capabilities is a new sibling array. Projected for display / future use.
  services[]->{
    _id,
    title,
    "slug": slug.current
  },
  technologies[]->{
    _id,
    title,
    "slug": slug.current
  },
  capabilities[]->{
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
  && !(_id in path("drafts.**"))
  && defined(slug.current)
  && defined(thumbnailImage)
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

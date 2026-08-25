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

// The hub grid. Designation drives prominence: flagship leads, then supporting, then archive.
// ARCHIVE is hidden from the DEFAULT grid but surfaces when a service/industry filter is active
// (archive = not shown by default, not deleted). Ordering: designation rank, then the manual
// `order` field, then recency — so flagship work always leads regardless of when it was added.
// Related work for a detail page. Ordering (per Hassan): RELATEDNESS first — the number of services + industries
// a candidate SHARES with the current study — then flagship-first, then the manual order / recency. Never the
// newest-by-default. Excludes the study itself, archive studies, drafts, and anything without a thumbnail. Top 3.
export const relatedWorkQuery = `
*[
  _type == "caseStudies"
  && !(_id in path("drafts.**"))
  && defined(slug.current)
  && defined(thumbnailImage)
  && slug.current != $slug
  && designation != "archive"
  && (
    count((services[]->slug.current)[@ in $serviceSlugs]) > 0
    || count((industries[]->slug.current)[@ in $industrySlugs]) > 0
  )
]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  thumbnailImage,
  iconBg,
  iconColor,
  designation,
  "shared": count((services[]->slug.current)[@ in $serviceSlugs])
    + count((industries[]->slug.current)[@ in $industrySlugs])
} | order(
  shared desc,
  select(designation == "flagship" => 0, designation == "supporting" => 1, 2),
  order asc,
  _createdAt desc
)[0..2]
`;

export const caseStudiesFilteredQuery = `
*[
  _type == "caseStudies"
  && !(_id in path("drafts.**"))
  && defined(slug.current)
  && defined(thumbnailImage)
  && ($service == null || $service in services[]->slug.current)
  && ($industry == null || $industry in industries[]->slug.current)
  && ($service != null || $industry != null || designation != "archive")
] | order(
  select(designation == "flagship" => 0, designation == "supporting" => 1, 2),
  order asc,
  _createdAt desc
) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  thumbnailImage,
  iconBg,
  iconColor,
  designation
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

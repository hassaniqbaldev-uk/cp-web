// Listing query — used on /legal to render all cards grouped by category
export const LEGAL_LIST_QUERY = `
*[_type == "legalPage"] | order(title asc) {
  title,
  excerpt,
  category,
  color,
  slug { current },
  icon {
    asset->{ url }
  }
}
`;

// Detail query — used on /legal/[slug] to render the full document
export const LEGAL_DETAIL_QUERY = `
*[_type == "legalPage" && slug.current == $slug][0] {
  title,
  subtitle,
  excerpt,
  category,
  color,
  icon {
    asset->{ url }
  },
  introText,
  sections[] {
    sectionTitle,
    content
  },
  seo {
    metaTitle,
    metaDescription
  }
}
`;

// Testimonials, ordered. Avatar + featuredImage are returned as raw image objects so `urlFor()`
// can build the URL (and crop the featured PNG). `featured` marks the one that leads the homepage
// bento + the /testimonials hero; `order` drives the sequence everywhere.
export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    name,
    company,
    quote,
    rating,
    featured,
    order,
    avatar,
    featuredImage
  }
`;

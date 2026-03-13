export const BLOG_HERO_QUERY = `
*[_type == "blog" && featured == true][0]{
  title,
  excerpt,
  category,
  readTime,
  slug { current },
  coverImage {
      asset->{
        url
      }
    }
}
`;

export const BLOG_LIST_QUERY = `
*[_type == "blog"] | order(publishedAt desc) {
  title,
  excerpt,
  category,
  readTime,
  slug { current },
  publishedAt,
  coverImage {
      asset->{
        url
      }
    }
}
`;

export const BLOG_DETAIL_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    title,
     seo {
    metaTitle,
    metaDescription
    },
    publishedAt,
    readTime,
    tags,
    coverImage {
      asset->{
        url
        }
      },
    content,
    author->{
    name,
    role,
    image {
     asset->{
        url
     }
    },
  }
  }
`;

export const BLOG_SITEMAP_QUERY = `
*[_type == "blog" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}
`;

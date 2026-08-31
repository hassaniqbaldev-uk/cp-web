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

// Excludes the featured post — it is already shown in the BlogHero, so listing it again here duplicated
// the same post on the page (duplicate-in-DOM / crawl-noise). When no post is featured, nothing is
// excluded and the full list renders.
export const BLOG_LIST_QUERY = `
*[_type == "blog" && featured != true] | order(publishedAt desc) {
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

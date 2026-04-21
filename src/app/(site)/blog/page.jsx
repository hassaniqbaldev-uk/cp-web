export async function generateMetadata() {
  const title = "Digital Strategy Blog | Actionable Insights for Growth";
  const description =
    "Digital strategy insights on web, SEO, CRO & branding to grow your business online. Read practical tips, improve results & get clarity with CreativePixels.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/blog",
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image-compressed.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/og-image-assets/og-image-compressed.jpg"],
    },
  };
}

import Blog from "@/components/sections/blog/Blog";
import BlogHero from "@/components/sections/hero/BlogHero";
import { BLOG_HERO_QUERY, BLOG_LIST_QUERY } from "@/sanity/queries.blog";
import { blogClient } from "@/sanity/sanity.blog";

export const revalidate = 30; // Next.js ISR

const BlogPage = async () => {
  // const hero = await blogClient.fetch(BLOG_HERO_QUERY);
  // const blogs = await blogClient.fetch(BLOG_LIST_QUERY);
  let hero = null;
  let blogs = [];

  try {
    [hero, blogs] = await Promise.all([
      blogClient.fetch(BLOG_HERO_QUERY),
      blogClient.fetch(BLOG_LIST_QUERY),
    ]);
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
  }

  return (
    <>
      <BlogHero hero={hero} />
      <Blog blogs={blogs} />
    </>
  );
};

export default BlogPage;

export async function generateMetadata() {
  const title = "Blog";
  const description =
    "Insights, tips, and guides from the CreativePixels team on web design, WordPress, branding, and growing your business online.";

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
          url: "/images/og-image-assets/og-image.jpg",
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
      images: ["/images/og-image-assets/og-image.jpg"],
    },
  };
}

import Blog from "@/components/sections/blog/Blog";
import BlogHero from "@/components/sections/hero/BlogHero";
import { BLOG_HERO_QUERY, BLOG_LIST_QUERY } from "@/sanity/queries.blog";
import { blogClient } from "@/sanity/sanity.blog";

export const revalidate = 30; // Next.js ISR

const BlogPage = async () => {
  const hero = await blogClient.fetch(BLOG_HERO_QUERY);
  const blogs = await blogClient.fetch(BLOG_LIST_QUERY);

  return (
    <>
      <BlogHero hero={hero} />
      <Blog blogs={blogs} />
    </>
  );
};

export default BlogPage;

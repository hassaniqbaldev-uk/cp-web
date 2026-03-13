import BlogContent from "@/components/sections/blog/BlogContent";
import BlogMeta from "@/components/sections/blog/BlogMeta";
import BlogShare from "@/components/sections/blog/BlogShare";
import RelatedBlogs from "@/components/sections/blog/RelatedBlogs";
import BlogDetailHero from "@/components/sections/hero/BlogDetailHero";
import { BLOG_DETAIL_QUERY, BLOG_LIST_QUERY } from "@/sanity/queries.blog";
import { blogClient } from "@/sanity/sanity.blog";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 30 } };

const getBlog = cache(async (slug) => {
  return blogClient.fetch(BLOG_DETAIL_QUERY, { slug }, options);
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return {};

  const title = blog.seo?.metaTitle || blog.title;
  const description = blog.seo?.metaDescription || "";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: `https://creativepixels.agency/blog/${slug}`,
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
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/og-image-assets/og-image.jpg"],
    },
  };
}

const BlogDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const post = await blogClient.fetch(BLOG_DETAIL_QUERY, { slug }, options);
  const blogs = await blogClient.fetch(BLOG_LIST_QUERY);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogDetailHero post={post} />
      <BlogMeta post={post} />
      <BlogContent post={post.content} />
      {/* <BlogShare post={post} /> */}
      <RelatedBlogs blogs={blogs} />
    </>
  );
};

export default BlogDetailPage;

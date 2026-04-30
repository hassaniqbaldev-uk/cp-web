import BlogContent from "@/components/sections/blog/BlogContent";
import BlogMeta from "@/components/sections/blog/BlogMeta";
import RelatedBlogs from "@/components/sections/blog/RelatedBlogs";
import BlogDetailHero from "@/components/sections/hero/BlogDetailHero";
import {
  BLOG_DETAIL_QUERY,
  BLOG_LIST_QUERY,
  BLOG_SITEMAP_QUERY,
} from "@/sanity/queries.blog";
import { blogClient } from "@/sanity/sanity.blog";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 30 } };

const getBlog = cache(async (slug) => {
  try {
    return await blogClient.fetch(BLOG_DETAIL_QUERY, { slug }, options);
  } catch (error) {
    console.error("Failed to fetch blog detail:", error);
    return null;
  }
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
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://creativepixels.agency/blog/${slug}`,
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
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/og-image-assets/og-image-compressed.jpg"],
    },
  };
}

export async function generateStaticParams() {
  try {
    const blogs = await blogClient.fetch(BLOG_SITEMAP_QUERY);
    return blogs.map((blog) => ({ slug: blog.slug }));
  } catch (error) {
    console.error("Failed to fetch blog static params:", error);
    return [];
  }
}

const BlogDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const post = await getBlog(slug);
  let blogs = [];

  try {
    blogs = await blogClient.fetch(BLOG_LIST_QUERY);
  } catch (error) {
    console.error("Failed to fetch blog list:", error);
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogDetailHero post={post} />
      <BlogMeta post={post} />
      <BlogContent post={post.content} />
      <RelatedBlogs blogs={blogs} />
    </>
  );
};

export default BlogDetailPage;

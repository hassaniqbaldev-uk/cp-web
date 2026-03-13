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

  return {
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || "",
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

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const HeaderSection = () => {
  const { slug } = useParams(); // ✅ dynamic post slug from /blog/[slug]
  const [postData, setPostData] = useState(null);

  // 🧮 Helper: reading time
  function calculateReadingTime(htmlContent) {
    if (!htmlContent) return "1 min read";
    const text = htmlContent.replace(/<[^>]+>/g, "");
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  }

  useEffect(() => {
    // ✅ Step 1: load cached post if available
    const cached = localStorage.getItem(`post_${slug}`);
    if (cached) {
      setPostData(JSON.parse(cached));
    }

    // ✅ Step 2: fetch fresh post data
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}&_embed`,
        );
        const data = await res.json();
        const post = data[0];
        if (post) {
          setPostData(post);
          localStorage.setItem(`post_${slug}`, JSON.stringify(post));
        }
      } catch (err) {
        console.error("Failed to fetch post:", err);
      }
    };

    fetchPost();
  }, [slug]);

  // ✅ Fallback while loading
  if (!postData) {
    return (
      <section className="post-header pt-[20.6rem]">
        <div className="mx-auto max-w-[120rem] animate-pulse">
          <div className="mb-[2rem] h-[3.2rem] w-[12rem] rounded bg-gray-200" />
          <div className="mb-[1rem] h-[6.4rem] w-[80%] rounded bg-gray-200" />
          <div className="h-[3rem] w-[50%] rounded bg-gray-200" />
        </div>
      </section>
    );
  }

  const category = postData._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";
  const author = postData._embedded?.author?.[0]?.name || "Unknown Author";
  const date = new Date(postData.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const readTime = calculateReadingTime(postData.content?.rendered);

  return (
    <section className="post-header px-[3rem] pt-[20.6rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="post-meta flex items-center justify-center gap-[1.8rem] text-center xl:justify-start xl:text-left">
          <span
            className="category inline-flex h-[3.2rem] items-center justify-center rounded-[.8rem] bg-[#070707] px-[1.2rem] text-center text-[1.6rem] leading-[2.4rem] font-medium text-white"
            dangerouslySetInnerHTML={{ __html: category }}
          />

          <span className="read-time text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]/60">
            {readTime}
          </span>
        </div>

        <h1
          className="post-title mt-[2.4rem] mb-[1.5rem] text-center text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.6rem] md:leading-[6.4rem] xl:text-left"
          dangerouslySetInnerHTML={{ __html: postData.title.rendered }}
        />

        <div className="post-author flex items-center justify-center gap-[1.2rem] xl:justify-start">
          <img
            src="/images/cta-btn-avatar-icon.png"
            alt="Author"
            className="size-[5rem]"
          />

          <div className="flex items-center gap-[.5rem] text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]">
            <p>Uploaded: {author}</p>
            <span>-</span>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;

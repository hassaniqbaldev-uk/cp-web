"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CommonBtn3 from "@/components/common/CommonBtn3";

const RelatedArticlesSection = () => {
  const { slug } = useParams();
  const [related, setRelated] = useState([]);

  // Helper: calculate reading time
  function calculateReadingTime(htmlContent) {
    if (!htmlContent) return "1 min read";
    const text = htmlContent.replace(/<[^>]+>/g, "");
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  }

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        // 1️⃣ Fetch current post first (to get its ID)
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}&_fields=id`,
        );
        const postData = await res.json();
        const currentPostId = postData[0]?.id;

        // 2️⃣ Fetch 3 latest posts excluding current one
        const relatedRes = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?_embed&per_page=3&exclude=${currentPostId}`,
        );
        const posts = await relatedRes.json();

        setRelated(posts);
      } catch (err) {
        console.error("Failed to fetch related posts:", err);
      }
    };

    fetchRelated();
  }, [slug]);

  if (!related.length) return null;

  return (
    <section className="related-articles px-[3rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <header className="related-header flex flex-col items-center justify-between gap-[4rem] text-center xl:flex-row xl:text-left">
          <h2 className="text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.6rem] md:leading-[6.4rem]">
            Our Most Recent Articles
          </h2>

          <CommonBtn3 href="/blog" label="See All Blogs" bgColor="#FF37B3" />
        </header>

        <div className="articles-grid mt-[6rem] grid grid-cols-1 gap-[3.3rem] md:grid-cols-2 xl:grid-cols-3">
          {related.map((post) => {
            const category =
              post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/images/placeholder.jpg";
            const readTime = calculateReadingTime(post.content?.rendered);

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="related-articles-glass flex size-full flex-col overflow-hidden"
              >
                <div className="relative flex h-[24rem] w-full items-center justify-center">
                  <Image
                    src={image}
                    width={379}
                    height={240}
                    alt={post.title.rendered}
                    className="size-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-col gap-[2rem] p-[2rem] pt-[2.5rem] md:pr-[1.5rem] md:pb-[3.5rem] md:pl-[2.5rem]">
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex h-[3.2rem] items-center justify-center rounded-[.8rem] bg-[#070707] px-[1.2rem] text-center text-[1.2rem] leading-[2.4rem] font-medium text-white md:text-[1.6rem]"
                      dangerouslySetInnerHTML={{ __html: category }}
                    />

                    <span className="text-[1.4rem] leading-[2.4rem] font-medium text-[#070707]/60 md:text-[1.6rem]">
                      {readTime}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[1.5rem]">
                    <h4
                      className="line-clamp-2 overflow-hidden text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[2.6rem] md:leading-[3.2rem]"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <p
                      className="leadig-[2.4rem] line-clamp-3 overflow-hidden text-[1.4rem] font-normal text-[#070707] md:text-[1.8rem] md:leading-[2.6rem]"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticlesSection;

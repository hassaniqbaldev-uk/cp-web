"use client";

import CommonBtn3 from "@/components/common/CommonBtn3";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedPostsSection = () => {
  // ✅ 1️⃣ Default static fallback (visible instantly)
  const [featuredPosts, setFeaturedPosts] = useState([
    {
      id: 0,
      slug: "",
      title: {
        rendered: "Venenatis aliquet pulvinar. Nunc viverra faucibus diam.",
      },
      excerpt: {
        rendered:
          "Lorem ipsum dolor amet, consectetur adipiscing elit. Venenatis aliquet pulvinar. Nunc viverra faucibus diam.",
      },
      _embedded: {
        "wp:featuredmedia": [
          { source_url: "/images/news-article-tab-img-1.png" },
        ],
        "wp:term": [[{ name: "Design and Branding" }]],
      },
    },
    {
      id: 1,
      slug: "",
      title: { rendered: "Design Thinking Process." },
      excerpt: {
        rendered: "Lorem ipsum dolor amet, consectetur adipiscing elit.",
      },
      _embedded: {
        "wp:featuredmedia": [
          { source_url: "/images/news-article-tab-img-1.png" },
        ],
        "wp:term": [[{ name: "Design and Branding" }]],
      },
    },
    {
      id: 2,
      slug: "",
      title: { rendered: "Building User Trust Online." },
      excerpt: {
        rendered: "Lorem ipsum dolor amet, consectetur adipiscing elit.",
      },
      _embedded: {
        "wp:featuredmedia": [
          { source_url: "/images/news-article-tab-img-1.png" },
        ],
        "wp:term": [[{ name: "Design and Branding" }]],
      },
    },
  ]);

  // ✅ Calculate reading time from post content
  const calculateReadingTime = (html) => {
    if (!html) return 1; // fallback
    const text = html.replace(/<[^>]+>/g, ""); // strip HTML
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 225);
    return minutes;
  };

  // ✅ 2️⃣ Fetch from cache first, then update with API
  useEffect(() => {
    // Load cached version instantly
    const cached = localStorage.getItem("featuredPosts");
    if (cached) {
      setFeaturedPosts(JSON.parse(cached));
    }

    // Fetch fresh version
    const fetchFeatured = async () => {
      try {
        // Fetch Blogs page with ACF relationship field
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/pages?slug=blogs&_fields=acf`,
        );
        const data = await res.json();
        const ids = data[0]?.acf?.featured_posts?.map((p) => p.ID);
        if (!ids?.length) return;

        // Fetch full post data for selected posts
        const postsRes = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?include=${ids.join(
            ",",
          )}&_embed&_fields=id,slug,title,excerpt,content,_links,_embedded`,
        );

        const posts = await postsRes.json();

        // Sort according to ACF order
        const ordered = ids.map((id) => posts.find((p) => p.id === id));
        const finalPosts = ordered.filter(Boolean);

        setFeaturedPosts(finalPosts);
        localStorage.setItem("featuredPosts", JSON.stringify(finalPosts));
      } catch (err) {
        console.error("Failed to load featured posts:", err);
      }
    };

    fetchFeatured();
  }, []);

  // ✅ 3️⃣ Split main and side posts
  const mainPost = featuredPosts[0];
  const sidePosts = featuredPosts.slice(1, 3);

  return (
    <section className="featured-posts px-[3rem] py-[5rem] xl:px-[0rem]">
      <div className="featured-grid mx-auto grid max-w-[120rem] grid-cols-1 grid-rows-1 gap-[3.3rem] xl:grid-cols-2 xl:grid-rows-2">
        <article className="featured-main featured-posts-glass flex size-full flex-col overflow-hidden xl:row-span-2">
          <div className="relative flex h-[24.9rem] w-full items-center justify-center">
            <Image
              src={
                mainPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/images/placeholder.jpg"
              }
              width={585}
              height={249}
              alt={mainPost.title.rendered}
              className="size-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-[1.5rem] p-[2rem] md:pt-[2.5rem] md:pr-[5rem] md:pb-[3.5rem] md:pl-[3.5rem]">
            <div className="flex items-center gap-[2rem]">
              <span className="inline-flex h-[4rem] items-center justify-center rounded-[.8rem] bg-[#070707] px-[1.2rem] text-center text-[1.2rem] leading-[2.4rem] font-medium text-white md:text-[1.4rem]">
                {mainPost._embedded?.["wp:term"]?.[0]?.[0]?.name || "General"}
              </span>

              <span className="text-[1.4rem] leading-[2.4rem] font-medium text-[#070707]/60 md:text-[1.6rem]">
                {calculateReadingTime(mainPost.content?.rendered)} min read
              </span>
            </div>

            <div className="flex flex-col items-start">
              <h4
                className="line-clamp-2 overflow-hidden text-[2.8rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[3.4rem] md:leading-[4.8rem]"
                dangerouslySetInnerHTML={{ __html: mainPost.title.rendered }}
              />

              <p
                className="mt-[.5rem] mb-[2.5rem] line-clamp-3 overflow-hidden text-[1.6rem] leading-[2.4rem] font-normal text-[#070707] md:text-[1.8rem] md:leading-[2.6rem]"
                dangerouslySetInnerHTML={{ __html: mainPost.excerpt.rendered }}
              />

              <CommonBtn3
                href={`/blog/${mainPost.slug}`}
                label="Learn More"
                bgColor="#EE8D00"
              />
            </div>
          </div>
        </article>

        {sidePosts.map((post) => (
          <article key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="featured-posts-glass flex size-full flex-col items-center gap-[2rem] overflow-hidden p-[1.5rem] md:flex-row md:p-[2rem]"
            >
              <div className="relative flex h-[24rem] w-full items-center justify-center overflow-hidden rounded-[1.2rem] md:w-auto md:min-w-[22.9rem]">
                <Image
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/images/placeholder.jpg"
                  }
                  width={229}
                  height={240}
                  alt={post.title.rendered}
                  className="size-full object-cover object-top"
                />
              </div>

              <div className="m flex w-full flex-col gap-[2rem] xl:w-[29.5rem]">
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex h-[3.2rem] items-center justify-center rounded-[.8rem] bg-[#070707] px-[1.2rem] text-center text-[1.2rem] leading-[2.4rem] font-medium whitespace-nowrap text-white md:text-[1.4rem]"
                    dangerouslySetInnerHTML={{
                      __html:
                        post._embedded?.["wp:term"]?.[0]?.[0]?.name ||
                        "General",
                    }}
                  />

                  <span className="text-[1.4rem] leading-[2.4rem] font-medium text-[#070707]/60 md:text-[1.6rem]">
                    {calculateReadingTime(post.content?.rendered)} min read
                  </span>
                </div>

                <div className="flex flex-col gap-[1.5rem]">
                  <h4
                    className="line-clamp-2 overflow-hidden text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[2.6rem] md:leading-[3.2rem]"
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />

                  <p
                    className="line-clamp-3 overflow-hidden text-[1.6rem] leading-[2.4rem] font-normal text-[#070707] md:text-[1.8rem] md:leading-[2.6rem]"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPostsSection;

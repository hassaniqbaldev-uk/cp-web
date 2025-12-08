"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const FeaturedImageSection = () => {
  const { slug } = useParams();
  const [featuredImg, setFeaturedImg] = useState(null);

  useEffect(() => {
    // Try cache first
    const cached = localStorage.getItem(`post_${slug}`);
    if (cached) {
      const cachedPost = JSON.parse(cached);
      const media = cachedPost._embedded?.["wp:featuredmedia"]?.[0];
      if (media) setFeaturedImg(media);
    }

    // Fetch live data
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}&_embed`,
        );
        const data = await res.json();
        const post = data[0];
        if (post) {
          const media = post._embedded?.["wp:featuredmedia"]?.[0];
          if (media) setFeaturedImg(media);
          localStorage.setItem(`post_${slug}`, JSON.stringify(post));
        }
      } catch (err) {
        console.error("Failed to fetch featured image:", err);
      }
    };

    fetchPost();
  }, [slug]);

  // ✅ Fallback placeholder
  const imageUrl =
    featuredImg?.source_url || "/images/blog-post-featured-img.png";
  const altText = featuredImg?.alt_text || "Featured Graphic";

  return (
    <section className="featured-image px-[3rem] pt-[3rem] pb-[5rem] xl:px-[0rem]">
      <div className="relative mx-auto flex h-[25rem] max-w-[120rem] items-center justify-center overflow-hidden rounded-[2rem] md:h-[40rem] lg:h-[55.4rem]">
        <Image
          src={imageUrl}
          width={1200}
          height={554}
          alt={altText}
          className="size-full object-cover object-top"
        />
      </div>
    </section>
  );
};

export default FeaturedImageSection;

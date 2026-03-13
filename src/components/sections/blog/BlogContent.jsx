"use client";
import { urlFor } from "@/sanity/blog.image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";

const components = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-[2.5rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-[5.6rem] mb-[1.5rem] text-[2.2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[3rem]">
        {children}
      </h3>
    ),

    normal: ({ children }) => (
      <p className="mt-[1.5rem] text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
        {children}
      </p>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-[2rem] list-disc pl-[2.4rem] text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
        {children}
      </ul>
    ),
  },

  types: {
    image: ({ value }) => (
      <div className="my-[5.6rem] h-[25rem] w-full overflow-hidden rounded-tl-[2rem] rounded-tr-[2rem] md:h-[45rem] md:rounded-tl-[2.3rem] md:rounded-tr-[2.3rem]">
        <Image
          src={urlFor(value).width(1050).height(450).url()}
          alt={value.alt || "Blog image"}
          width={1050}
          height={450}
          className="h-full w-full object-cover"
          unoptimized
        />
      </div>
    ),
  },
};

const BlogContent = ({ post }) => {
  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[5.6rem]">
      <MotionEffect
        slide={{ direction: "down" }}
        fade
        inView
        delay={0.1}
        transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
      >
        <article className="mx-auto max-w-[105rem]">
          <PortableText value={post} components={components} />
        </article>
      </MotionEffect>
    </section>
  );
};

export default BlogContent;

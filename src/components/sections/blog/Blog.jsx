"use client";
import BlogCard from "@/components/ui/BlogCard";
import { MotionEffect } from "@/components/effects/motion-effect";

const Blog = ({ blogs }) => {
  return (
    <>
      <section className="bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="hidden grid-cols-2 gap-[3.3rem] md:grid">
            {blogs.map((item, idx) => (
              <MotionEffect
                key={idx}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4 + idx * 0.15}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <BlogCard
                  readTime={item.readTime}
                  publishedDate={item.publishedAt}
                  category={item.category}
                  img={item.coverImage.asset.url}
                  title={item.title}
                  excerpt={item.excerpt}
                  link={`/blog/${item.slug.current}`}
                />
              </MotionEffect>
            ))}
          </div>

          {/* Responsive — intentionally a sticky stacked list on mobile, NOT a
              carousel. This is a deliberate layout choice; do not convert it to a
              slider. */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <div className="block w-full md:hidden">
              {blogs.map((item, idx) => (
                <div key={idx} className="sticky top-[9rem]">
                  <BlogCard
                    readTime={item.readTime}
                    publishedDate={item.publishedAt}
                    category={item.category}
                    img={item.coverImage.asset.url}
                    title={item.title}
                    excerpt={item.excerpt}
                    link={`/blog/${item.slug.current}`}
                  />
                </div>
              ))}
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default Blog;

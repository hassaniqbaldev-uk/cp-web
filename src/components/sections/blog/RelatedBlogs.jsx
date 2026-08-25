import BlogCard from "@/components/ui/BlogCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { MotionEffect } from "@/components/effects/motion-effect";

const RelatedBlogs = ({ blogs }) => {
  return (
    <>
      <section className="bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.1}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center">
              <SectionTitle text="Related Blogs/insights" textColor="#312749" />
            </div>
          </MotionEffect>

          <div className="mt-[5rem] grid grid-cols-1 gap-[3.3rem] md:grid-cols-2">
            {blogs.slice(0, 2).map((item, idx) => (
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
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;

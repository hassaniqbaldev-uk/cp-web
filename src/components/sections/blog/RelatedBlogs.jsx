import BlogCard from "@/components/ui/BlogCard";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCardImg1 from "@/assets/images/cards/blog-card-img-1.webp";
import BlogCardImg2 from "@/assets/images/cards/blog-card-img-2.webp";
import { MotionEffect } from "@/components/effects/motion-effect";

export const CardData = [
  {
    category: "GROWTH",
    img: BlogCardImg1,
    title: "The SEO Checklist for 2025: What's Changed?",
    excerpt:
      "Google's latest core update has shifted the landscape again. Here are the 5 things you need to audit on your site today.",
    link: "",
  },
  {
    category: "Technology",
    img: BlogCardImg2,
    title: "Headless CMS vs WordPress: Making the Right Choice",
    excerpt:
      "Decoupling your frontend from your backend offers speed and security, but is it right for your marketing team?",
    link: "",
  },
];

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

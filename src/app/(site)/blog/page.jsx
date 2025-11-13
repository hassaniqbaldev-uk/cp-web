import FeaturedPostsSection from "@/components/sections/blog-sections/FeaturedsPostSection";
import PageIntroSection from "@/components/sections/blog-sections/PageIntroSection";
import RecentBlogsSection from "@/components/sections/blog-sections/RecentBlogsSection";
import ContactSection from "@/components/sections/ContactSection";
import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";

const BlogPage = () => {
  return (
    <div className="relative">
      {/* Decorative stroke line */}
      <div className="pointer-events-none absolute inset-0 z-[0]">
        <LineStroke01 className="absolute top-[47.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <PageIntroSection />
      <FeaturedPostsSection />
      <RecentBlogsSection />
      <ContactSection />
    </div>
  );
};

export default BlogPage;

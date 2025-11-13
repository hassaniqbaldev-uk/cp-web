import ContentSection from "@/components/sections/blog-post-sections/ContentSection";
import FeaturedImageSection from "@/components/sections/blog-post-sections/FeaturedImageSection";
import HeaderSection from "@/components/sections/blog-post-sections/HeaderSection";
import RelatedArticlesSection from "@/components/sections/blog-post-sections/RelatedArticlesSection";
import ShareSection from "@/components/sections/blog-post-sections/ShareSection";
import ContactSection from "@/components/sections/ContactSection";
import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import Header from "@/components/layout/Header";

const BlogPostPage = () => {
  return (
    <div className="relative">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke01 className="absolute top-[50rem] left-1/2 w-full -translate-x-1/2" />
      </div>
      <Header />
      <HeaderSection />
      <FeaturedImageSection />
      <ContentSection />
      <ShareSection />
      <RelatedArticlesSection />
      <ContactSection />
    </div>
  );
};

export default BlogPostPage;

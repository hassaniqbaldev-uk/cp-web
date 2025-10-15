import WpElementorHeroSection from "@/components/sections/WpElementorHeroSection";
import ElementorAtSection from "@/components/sections/ElementorAtSection";
import FullStackWordpressSection from "@/components/sections/FullStackWordpressSection";
import AreYouSection from "@/components/sections/AreYouSection";
import WhatWeCanHelpSection2 from "@/components/sections/WhatWeCanHelpSection2";
import LineStroke09 from "@/assets/decorative-elements/line-stroke-09.svg";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title:
    "Wp Elementor CreativePixels | Manchester Web Design & Branding Agency",
  description:
    "Since 2014, CreativePixels has combined design, development, and strategy to deliver digital experiences that build trust and lasting growth. Based in Manchester, trusted worldwide.",
};

const WpElementorPage = async () => {
  const response = await fetchAPI("/api/case-studies", {
    populate: {
      hero_image: true,
      tags: true,
      technologies: { populate: ["logo"] },
    },
    sort: ["publishedAt:desc"],
  });

  const caseStudies = (response.data || []).map((item) => {
    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.excerpt, // use `excerpt` since JSON has no "description"
      image: getStrapiMedia(item.hero_image),
      tags: (item.tags || []).map((tag) => ({
        id: tag.id,
        name: tag.name,
      })),
      technologies: (item.technologies || []).map((tech) => ({
        id: tech.id,
        name: tech.name,
        logo: getStrapiMedia(tech.logo),
      })),
    };
  });

  return (
    <>
      <WpElementorHeroSection />
      <ElementorAtSection />
      <FullStackWordpressSection />
      <AreYouSection />
      <WhatWeCanHelpSection2 />
      <div className="relative pt-[5rem] xl:pt-[10rem]">
        <div className="absolute inset-0 z-[0]">
          <LineStroke09 className="absolute top-[20rem] left-[-60rem] w-full xl:top-[20rem]" />
        </div>

        <CaseStudiesSection02 caseStudies={caseStudies} />
      </div>
      <div className="overflow-hidden">
        <FeedbackSection />
        <IndustriesSection />
        <ContactSection />
      </div>
    </>
  );
};

export default WpElementorPage;

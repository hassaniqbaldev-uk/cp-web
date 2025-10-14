import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import KeyBenefitSection from "@/components/sections/KeyBenefitSection";
import OurApproachSection from "@/components/sections/OurApproachSection";
import OurProcessSection from "@/components/sections/OurProcessSection";
import UiUxHeroSection from "@/components/sections/UiUxHeroSection";
import WebDesignServiceSection from "@/components/sections/WebDesignServiceSection";
import WhatWeCanDesignSection from "@/components/sections/WhatWeCanDesignSection";
import WhatWeCanHelpSection from "@/components/sections/WhatWeCanHelpSection";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import LineStroke09 from "@/assets/decorative-elements/line-stroke-09.svg";
import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";

export const metadata = {
  title: "UI UX CreativePixels | Manchester Web Design & Branding Agency",
  description:
    "Since 2014, CreativePixels has combined design, development, and strategy to deliver digital experiences that build trust and lasting growth. Based in Manchester, trusted worldwide.",
};

const UiUxPage = async () => {
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
      <UiUxHeroSection />
      <OurApproachSection />
      <WebDesignServiceSection />
      <div className="overflow-hidden">
        <WhatWeCanDesignSection />
        <WhatWeCanHelpSection />
      </div>
      <KeyBenefitSection />
      <OurProcessSection />
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

export default UiUxPage;

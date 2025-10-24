import BrandingHeroSection from "@/components/sections/BrandingHeroSection";
import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import FeaturedSection2 from "@/components/sections/FeaturedSection2";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import KeyBenefitSection3 from "@/components/sections/KeyBenefitSection3";
import OurProcessSection5 from "@/components/sections/OurProcessSection5";
import ServiceSection5 from "@/components/sections/ServiceSection5";
import WhatWeCanHelpSection3 from "@/components/sections/WhatWeCanHelpSection3";
import { industriesData } from "@/constants/brandingPage";
import LineStroke09 from "@/assets/decorative-elements/line-stroke-09.svg";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import ContactSection from "@/components/sections/ContactSection";

const BrandingPage = async () => {
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
      <BrandingHeroSection />
      <KeyBenefitSection3 />
      <ServiceSection5 />
      <WhatWeCanHelpSection3 />
      <FeaturedSection2 />
      <OurProcessSection5 />
      <div className="overflow-hidden">
        <FeedbackSection
          reverse
          title="Imaginative vision. Outstanding Design."
          description="From beginning to end, it was an incredible experience. Working with the entire team was enjoyable due to their creativity and expertise. They completely understood our goals as a studio with a very ambitious and distinctive website, from concept to design. We are quite happy with the outcome."
          author="Emily Chen"
          projectType="E-Commerce Website"
          avatar="/images/ui-ux-feedback-avatar.png"
          image="/images/wp-elementor-feedback-card-img.png"
        />
        <IndustriesSection
          labelText="Industries"
          title="Industries We Work With"
          description="From websites to apps and dashboards, our Figma-first UI/UX design and development-ready workflows adapt to any industry."
          data={industriesData}
        />
        <div className="relative pt-[5rem] xl:pt-[10rem]">
          <div className="absolute inset-0 z-[0]">
            <LineStroke09 className="absolute top-[20rem] left-[-60rem] w-full xl:top-[40rem]" />
          </div>

          <CaseStudiesSection02 caseStudies={caseStudies} />
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default BrandingPage;

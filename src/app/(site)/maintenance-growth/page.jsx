import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import { industriesData } from "@/constants/maintenanceGrowthPage";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import LineStroke09 from "@/assets/decorative-elements/line-stroke-09.svg";
import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import OurProcessSection4 from "@/components/sections/OurProcessSection4";
import MaintenanceGrowthHeroSection from "@/components/sections/MaintenanceGrowthHeroSection";
import OurApproachSection4 from "@/components/sections/OurApproachSection4";
import ServiceSection4 from "@/components/sections/ServiceSection4";

const MaintenanceGrowthPage = async () => {
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
      <MaintenanceGrowthHeroSection />
      <div className="overflow-hidden">
        <OurApproachSection4 />
        <ServiceSection4 />
      </div>
      <OurProcessSection4 />
      <div className="relative pb-[8rem] xl:py-[9rem]">
        <div className="absolute inset-0 z-[0]">
          <LineStroke09 className="absolute top-[20rem] left-[-60rem] w-full xl:top-[20rem]" />
        </div>

        <CaseStudiesSection02 caseStudies={caseStudies} />
      </div>
      <div className="overflow-hidden">
        <FeedbackSection
          reverse
          title="Imaginative vision. Outstanding Design."
          description="From beginning to end, it was an incredible experience. Working with the entire team was enjoyable due to their creativity and expertise. They completely understood our goals as a studio with a very ambitious and distinctive website, from concept to design. We are quite happy with the outcome."
          author="Emily Chen"
          projectType="E-Commerce Website"
          avatar="/images/ui-ux-feedback-avatar.png"
          image="/images/sm-post-feedback-card-img.png"
        />
        <IndustriesSection
          labelText="Industries"
          title="Design solutions built for every sector"
          description="From websites to apps and dashboards, our Figma-first UI/UX design and development-ready workflows adapt to any industry."
          data={industriesData}
        />
        <ContactSection />
      </div>
    </>
  );
};

export default MaintenanceGrowthPage;

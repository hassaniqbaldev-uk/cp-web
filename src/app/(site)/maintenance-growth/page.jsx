import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import { industriesData } from "@/constants/maintenanceGrowthPage";
import OurProcessSection4 from "@/components/sections/OurProcessSection4";
import MaintenanceGrowthHeroSection from "@/components/sections/MaintenanceGrowthHeroSection";
import OurApproachSection4 from "@/components/sections/OurApproachSection4";
import ServiceSection4 from "@/components/sections/ServiceSection4";
import CaseStudiesSliderSection from "@/components/case-studies/CaseStudiesSliderSection";
import Header from "@/components/layout/Header";

const MaintenanceGrowthPage = () => {
  return (
    <>
      <Header />
      <MaintenanceGrowthHeroSection />
      <div className="overflow-hidden">
        <OurApproachSection4 />
        <ServiceSection4 />
      </div>
      <OurProcessSection4 />
      <div className="overflow-hidden pb-[8rem]">
        <CaseStudiesSliderSection />
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

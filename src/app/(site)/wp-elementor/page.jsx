import WpElementorHeroSection from "@/components/sections/WpElementorHeroSection";
import OurApproachSection2 from "@/components/sections/OurApproachSection2";
import FeaturedSection from "@/components/sections/FeaturedSection";
import WhatWeCanHelpSection2 from "@/components/sections/WhatWeCanHelpSection2";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ContactSection from "@/components/sections/ContactSection";
import OurProcessSection2 from "@/components/sections/OurProcessSection2";
import { industriesData } from "@/constants/wpElementorPage";
import ServiceSection2 from "@/components/sections/ServiceSection2";
import CaseStudiesSliderSection from "@/components/case-studies/CaseStudiesSliderSection";

export const metadata = {
  title:
    "Wp Elementor CreativePixels | Manchester Web Design & Branding Agency",
  description:
    "Since 2014, CreativePixels has combined design, development, and strategy to deliver digital experiences that build trust and lasting growth. Based in Manchester, trusted worldwide.",
};

const WpElementorPage = () => {
  return (
    <>
      <WpElementorHeroSection />
      <OurApproachSection2 />
      <ServiceSection2 />
      <FeaturedSection />
      <WhatWeCanHelpSection2 />
      <OurProcessSection2 />
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
          image="/images/wp-elementor-feedback-card-img.png"
        />
        <IndustriesSection
          labelText="Industries"
          title="Industries We Work With"
          description="From websites to apps and dashboards, our Figma-first UI/UX design and development-ready workflows adapt to any industry."
          data={industriesData}
        />
        <ContactSection />
      </div>
    </>
  );
};

export default WpElementorPage;

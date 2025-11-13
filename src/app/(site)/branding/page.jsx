import BrandingHeroSection from "@/components/sections/BrandingHeroSection";
import FeaturedSection2 from "@/components/sections/FeaturedSection2";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import KeyBenefitSection3 from "@/components/sections/KeyBenefitSection3";
import OurProcessSection5 from "@/components/sections/OurProcessSection5";
import ServiceSection5 from "@/components/sections/ServiceSection5";
import WhatWeCanHelpSection3 from "@/components/sections/WhatWeCanHelpSection3";
import { industriesData } from "@/constants/brandingPage";
import ContactSection from "@/components/sections/ContactSection";
import CaseStudiesSliderSection from "@/components/case-studies/CaseStudiesSliderSection";

const BrandingPage = () => {
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
          image="/images/branding-feedback-card-img.webp"
        />
        <IndustriesSection
          labelText="Industries"
          title="Industries We Work With"
          description="From websites to apps and dashboards, our Figma-first UI/UX design and development-ready workflows adapt to any industry."
          data={industriesData}
        />
        <div className="overflow-hidden">
          <CaseStudiesSliderSection />
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default BrandingPage;

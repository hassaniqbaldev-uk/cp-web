import KeyBenefitSection from "@/components/sections/KeyBenefitSection";
import OurApproachSection from "@/components/sections/OurApproachSection";
import OurProcessSection from "@/components/sections/OurProcessSection";
import UiUxHeroSection from "@/components/sections/UiUxHeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import WhatWeCanDesignSection from "@/components/sections/WhatWeCanDesignSection";
import WhatWeCanHelpSection from "@/components/sections/WhatWeCanHelpSection";
import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import { industriesData } from "@/constants/uiUxPage";
import CaseStudiesSliderSection from "@/components/case-studies/CaseStudiesSliderSection";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "UI UX CreativePixels | Manchester Web Design & Branding Agency",
  description:
    "Since 2014, CreativePixels has combined design, development, and strategy to deliver digital experiences that build trust and lasting growth. Based in Manchester, trusted worldwide.",
};

const UiUxPage = () => {
  return (
    <>
      <Header />
      <UiUxHeroSection />
      <OurApproachSection />
      <ServiceSection />
      <div className="overflow-hidden">
        <WhatWeCanDesignSection />
        <WhatWeCanHelpSection />
      </div>
      <KeyBenefitSection />
      <OurProcessSection />
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
          image="/images/ui-ux-feedback-card-img.png"
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

export default UiUxPage;

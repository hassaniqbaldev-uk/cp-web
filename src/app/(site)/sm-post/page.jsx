import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import OurApproachSection3 from "@/components/sections/OurApproachSection3";
import OurProcessSection3 from "@/components/sections/OurProcessSection3";
import SmPostHeroSection from "@/components/sections/SmPostHeroSection";
import WebDesignServiceSection3 from "@/components/sections/WebDesignServiceSection3";
import { industriesData } from "@/constants/smPostPage";

const SmPostPage = () => {
  return (
    <>
      <SmPostHeroSection />
      <OurApproachSection3 />
      <div className="overflow-hidden">
        <WebDesignServiceSection3 />
        <OurProcessSection3 />
      </div>
      <div className="overflow-hidden">
        <div className="pb-[8rem] xl:pb-[10rem]">
          <IndustriesSection
            labelText="Industries"
            title="Design solutions built for every sector"
            description="From websites to apps and dashboards, our Figma-first UI/UX design and development-ready workflows adapt to any industry."
            data={industriesData}
          />
        </div>
        <FeedbackSection
          reverse
          title="Imaginative vision. Outstanding Design."
          description="From beginning to end, it was an incredible experience. Working with the entire team was enjoyable due to their creativity and expertise. They completely understood our goals as a studio with a very ambitious and distinctive website, from concept to design. We are quite happy with the outcome."
          author="Emily Chen"
          projectType="E-Commerce Website"
          avatar="/images/ui-ux-feedback-avatar.png"
          image="/images/sm-post-feedback-card-img.png"
        />
        <ContactSection />
      </div>
    </>
  );
};

export default SmPostPage;

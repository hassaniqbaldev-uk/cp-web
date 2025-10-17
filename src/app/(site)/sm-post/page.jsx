import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import SmPostHeroSection from "@/components/sections/SmPostHeroSection";
import { industriesData } from "@/constants/smPostPage";

const SmPostPage = () => {
  return (
    <>
      <SmPostHeroSection />
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

export default SmPostPage;

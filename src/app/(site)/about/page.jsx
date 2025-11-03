import AboutTestimonialsSection from "@/components/sections/AboutTestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import OurStatsSection from "@/components/sections/OurStatsSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import PitchDeckSection from "@/components/sections/PitchDeckSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CaseStudiesSliderSection from "@/components/case-studies/CaseStudiesSliderSection";
import CaseStudiesSliderSectionWrapper from "@/components/case-studies/CaseStudiesSliderSectionWrapper";

export const metadata = {
  title: "About CreativePixels | Manchester Web Design & Branding Agency",
  description:
    "Since 2014, CreativePixels has combined design, development, and strategy to deliver digital experiences that build trust and lasting growth. Based in Manchester, trusted worldwide.",
};

const AboutPage = async () => {
  return (
    <>
      <WhoWeAreSection />
      <WhyChooseUsSection />
      {/* <PitchDeckSection /> */}
      <div className="dark-gradient-bg">
        <OurStatsSection />
        <AboutTestimonialsSection />
      </div>
      {/* <OurTeamSection /> */}
      <div className="overflow-hidden">
        <CaseStudiesSliderSectionWrapper />
      </div>
      <ContactSection />
    </>
  );
};

export default AboutPage;

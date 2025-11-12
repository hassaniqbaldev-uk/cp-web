import CaseStudiesStickyGridSectionWrapper from "@/components/case-studies/CaseStudiesStickyGridSectionWrapper";
import CtaSection1 from "@/components/common/CtaSection1";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";

export const metadata = {
  title: "CreativePixels | Web Design, WordPress & Branding Agency",
  description:
    "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
};

const HomePage = async () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeOfferSection />
      <CaseStudiesStickyGridSectionWrapper />
      <div className="mx-auto max-w-[120rem] px-[2rem] pb-[8rem] xl:px-[0rem]">
        <CtaSection1 />
      </div>
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

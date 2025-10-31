import CaseStudiesStickyGridSection from "@/components/case-studies/CaseStudiesStickyGridSection";
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
      <CaseStudiesStickyGridSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

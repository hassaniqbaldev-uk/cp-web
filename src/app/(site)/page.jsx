import CtaSection1 from "@/components/common/CtaSection1";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";
import CaseStudiesStickyGridSection from "@/components/case-studies/CaseStudiesStickyGridSection";
import { getCaseStudies } from "@/lib/strapi";
import HeroSection from "@/components/sections/Home/HeroSection";

const HomePage = async () => {
  const caseStudies = await getCaseStudies().catch(() => ({ data: [] }));

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeOfferSection />
      <CaseStudiesStickyGridSection caseStudies={caseStudies} />
      <div className="mx-auto max-w-[120rem] px-[2rem] pb-[8rem] xl:px-[0rem]">
        <CtaSection1 />
      </div>
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

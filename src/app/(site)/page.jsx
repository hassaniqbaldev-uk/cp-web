import CtaSection1 from "@/components/common/CtaSection1";
import LineStroke04 from "@/assets/decorative-elements/line-stroke-04.svg";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export const metadata = {
  title: "CreativePixels | Web Design, WordPress & Branding Agency",
  description:
    "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.",
};

const HomePage = async () => {
  const response = await fetchAPI("/api/case-studies", {
    populate: {
      hero_image: true,
      tags: true,
      technologies: { populate: ["logo"] },
    },
    sort: ["publishedAt:desc"],
  });

  const caseStudies = (response.data || []).map((item) => {
    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.excerpt, // use `excerpt` since JSON has no "description"
      image: getStrapiMedia(item.hero_image),
      tags: (item.tags || []).map((tag) => ({
        id: tag.id,
        name: tag.name,
      })),
      technologies: (item.technologies || []).map((tech) => ({
        id: tech.id,
        name: tech.name,
        logo: getStrapiMedia(tech.logo),
      })),
    };
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeOfferSection />
      <CaseStudiesSection caseStudies={caseStudies} />
      <section className="relative px-[2rem] py-[5rem] xl:py-[10rem]">
        {/* Decorative stroke line */}
        <div className="absolute inset-0 z-[0]">
          <LineStroke04 className="absolute bottom-0 left-1/2 w-full -translate-x-1/2" />
        </div>

        <div className="mx-auto max-w-[120rem]">
          <CtaSection1 />
        </div>
      </section>
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

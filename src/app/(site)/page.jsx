import CtaSection1 from "@/components/common/CtaSection1";
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
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

import AboutTestimonialsSection from "@/components/sections/AboutTestimonialsSection";
import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import ContactSection from "@/components/sections/ContactSection";
import OurStatsSection from "@/components/sections/OurStatsSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import PitchDeckSection from "@/components/sections/PitchDeckSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import LineStroke09 from "@/assets/decorative-elements/line-stroke-09.svg";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export const metadata = {
  title: "About CreativePixels | Manchester Web Design & Branding Agency",
  description:
    "Since 2014, CreativePixels has combined design, development, and strategy to deliver digital experiences that build trust and lasting growth. Based in Manchester, trusted worldwide.",
};

const AboutPage = async () => {
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
      <WhoWeAreSection />
      <WhyChooseUsSection />
      <PitchDeckSection />
      <div className="dark-gradient-bg">
        <OurStatsSection />
        <AboutTestimonialsSection />
      </div>
      {/* <OurTeamSection /> */}
      <div className="relative pt-[5rem] xl:pt-[10rem]">
        <div className="absolute inset-0 z-[0]">
          <LineStroke09 className="absolute top-[20rem] left-[-60rem] w-full xl:top-[20rem]" />
        </div>

        <CaseStudiesSection02 caseStudies={caseStudies} />
      </div>
      <ContactSection />
    </>
  );
};

export default AboutPage;

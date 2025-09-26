import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import ContactSection from "@/components/sections/ContactSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import LineStroke13 from "@/assets/decorative-elements/line-stroke-13.svg";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export const metadata = {
  title: "Our Services | Web Design, WordPress Development & Branding",
  description:
    "Discover CreativePixels services - from WordPress web design and development to branding and ongoing digital support. Tailored solutions to help your business grow.",
};

const ServicesPage = async () => {
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
      <OurServicesSection />
      <div className="relative pt-[6.3rem]">
        <div className="absolute inset-0 z-[0]">
          <LineStroke13 className="absolute top-[-2rem] left-[-96.8rem] w-full" />
        </div>

        <CaseStudiesSection02 caseStudies={caseStudies} />
      </div>
      <ContactSection />
    </>
  );
};

export default ServicesPage;

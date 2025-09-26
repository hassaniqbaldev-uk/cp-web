import ContactSection from "@/components/sections/ContactSection";
import OurWorkSection from "@/components/sections/OurWorkSection";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export const metadata = {
  title: "Case Studies | CreativePixels Web Design & Branding Projects",
  description:
    "Explore CreativePixels case studies. See how our web design, branding, and digital strategies have delivered measurable results for clients in the UK, US & Australia.",
};

const CaseStudiesPage = async () => {
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
      <OurWorkSection caseStudies={caseStudies} />
      <ContactSection />
    </>
  );
};

export default CaseStudiesPage;

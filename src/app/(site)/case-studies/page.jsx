import CaseStudiesGridSection from "@/components/case-studies/CaseStudiesGridSection";
import CaseStudiesIntroSection from "@/components/case-studies/CaseStudiesIntroSection";
import CaseStudiesStatsSection from "@/components/case-studies/CaseStudiesStatsSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Case Studies | CreativePixels Web Design & Branding Projects",
  description:
    "Explore CreativePixels case studies. See how our web design, branding, and digital strategies have delivered measurable results for clients in the UK, US & Australia.",
};

const CaseStudiesPage = () => {
  return (
    <>
      <CaseStudiesIntroSection />
      <CaseStudiesStatsSection />
      <CaseStudiesGridSection />
      <ContactSection />
    </>
  );
};

export default CaseStudiesPage;

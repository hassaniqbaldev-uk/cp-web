import ContactSection from "@/components/sections/ContactSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import CaseStudiesWrapper from "@/components/case-studies/CaseStudiesWrapper";
import CaseStudiesSliderSection from "@/components/case-studies/CaseStudiesSliderSection";

export const metadata = {
  title: "Our Services | Web Design, WordPress Development & Branding",
  description:
    "Discover CreativePixels services - from WordPress web design and development to branding and ongoing digital support. Tailored solutions to help your business grow.",
};

const ServicesPage = () => {
  return (
    <>
      <OurServicesSection />
      <div className="overflow-hidden">
        <CaseStudiesWrapper>
          {(caseStudies) => (
            <CaseStudiesSliderSection caseStudies={caseStudies} />
          )}
        </CaseStudiesWrapper>
      </div>
      <ContactSection />
    </>
  );
};

export default ServicesPage;

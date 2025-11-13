import ContactSection from "@/components/sections/ContactSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import CaseStudiesWrapper from "@/components/case-studies/CaseStudiesWrapper";
import CaseStudiesSliderSection from "@/components/case-studies/CaseStudiesSliderSection";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Our Services | Web Design, WordPress Development & Branding",
  description:
    "Discover CreativePixels services - from WordPress web design and development to branding and ongoing digital support. Tailored solutions to help your business grow.",
};

const ServicesPage = () => {
  return (
    <>
      <Header />
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

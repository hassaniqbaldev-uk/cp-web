import ContactSection from "@/components/sections/ContactSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import CaseStudiesSliderSectionWrapper from "@/components/case-studies/CaseStudiesSliderSectionWrapper";

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
        <CaseStudiesSliderSectionWrapper />
      </div>
      <ContactSection />
    </>
  );
};

export default ServicesPage;

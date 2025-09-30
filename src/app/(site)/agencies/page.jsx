import AgenciesHeroSection from "@/components/sections/AgenciesHeroSection";
import AnAgencySection from "@/components/sections/AnAgencySection";
import ContactSection from "@/components/sections/ContactSection";
import GeneralQASection2 from "@/components/sections/GeneralQASection2";
import ReviewSection from "@/components/sections/ReviewSection";
import WorkingProcessSection from "@/components/sections/WorkingProcessSection";

export const metadata = {
  title: "Agencies CreativePixels | Web Design & Branding Agency Manchester",
  description:
    "Ready to start your next project? Contact CreativePixels today. Book a free 15-minute call to discuss web design, WordPress development, or branding solutions tailored to you.",
};

const AgenciesPage = () => {
  return (
    <>
      <AgenciesHeroSection />
      <AnAgencySection />
      <WorkingProcessSection />
      <div className="overflow-hidden">
        <ReviewSection />
        <GeneralQASection2 />
      </div>
      <ContactSection />
    </>
  );
};

export default AgenciesPage;

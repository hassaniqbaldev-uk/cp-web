import ContactUsSection from "@/components/sections/ContactUsSection";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Contact CreativePixels | Web Design & Branding Agency Manchester",
  description:
    "Ready to start your next project? Contact CreativePixels today. Book a free 15-minute call to discuss web design, WordPress development, or branding solutions tailored to you.",
};

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContactUsSection />
    </>
  );
};

export default ContactPage;

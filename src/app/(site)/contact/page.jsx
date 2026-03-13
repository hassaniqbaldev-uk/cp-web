export async function generateMetadata() {
  const title = "Contact Us";
  const description =
    "Get in touch with CreativePixels. Tell us about your project and let's build something great together.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/contact",
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/og-image-assets/og-image.jpg"],
    },
  };
}

import Contact from "@/components/sections/contact/Contact";
import ContactHero from "@/components/sections/hero/ContactHero";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;

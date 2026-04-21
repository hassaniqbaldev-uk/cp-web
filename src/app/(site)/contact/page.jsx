export async function generateMetadata() {
  const title = "Contact Digital Agency | Book Free Strategy Call Today";
  const description =
    "Discuss your project, request a quote or book a free strategy call to start your website journey. Speak with experts & grow online with CreativePixels.";

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
          url: "/images/og-image-assets/og-image-compressed.jpg",
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
      images: ["/images/og-image-assets/og-image-compressed.jpg"],
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

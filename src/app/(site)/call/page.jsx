export async function generateMetadata() {
  const title = "Book a Call";
  const description =
    "Book a free discovery call with CreativePixels. We'll talk through your project, goals, and how we can help you grow.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/call",
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
import CallHero from "@/components/sections/hero/CallHero";

const CallPage = () => {
  return (
    <>
      <CallHero />
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default CallPage;

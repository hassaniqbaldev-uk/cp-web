export async function generateMetadata() {
  const title = "How We Work";
  const description =
    "Discover the CreativePixels process — from discovery to launch. A transparent, collaborative approach to delivering websites and digital projects.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/how-we-work",
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

import Cta from "@/components/sections/cta/Cta";
import HowWeWorkHero from "@/components/sections/hero/HowWeWorkHero";
import Process2 from "@/components/sections/process/Process2";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const HowWeWorkPage = () => {
  return (
    <>
      <HowWeWorkHero />
      <Process2 />
      <section className="overflow-hidden px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ffd900]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
    </>
  );
};

export default HowWeWorkPage;

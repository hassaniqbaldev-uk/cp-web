export async function generateMetadata() {
  const title = "How We Work | Our Delivery Process | CreativePixels";
  const description =
    "How a project with CreativePixels runs, from scope and fixed price to design, build, launch and ongoing growth across web, brand, growth and automation.";

  return {
    title,
    description,
    alternates: {
      canonical: "/how-we-work", // <-- the route's own URL
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/how-we-work",
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

import Cta from "@/components/sections/cta/Cta";
import HowWeWorkHero from "@/components/sections/hero/HowWeWorkHero";
import Process2 from "@/components/sections/process/Process2";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";

const HowWeWorkPage = () => {
  return (
    <>
      <HowWeWorkHero />
      <Process2 />
      <section className="overflow-hidden px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ffd900]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <TestimonialsSection />
      </section>
    </>
  );
};

export default HowWeWorkPage;

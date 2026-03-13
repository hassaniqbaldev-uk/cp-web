export async function generateMetadata() {
  const title = "Partner With Us";
  const description =
    "Partner with CreativePixels and grow your business. We collaborate with agencies, consultants, and brands looking for a reliable creative partner.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/partner-with-us",
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
import Growth from "@/components/sections/growth/Growth";
import PartnerWithUsHero from "@/components/sections/hero/PartnerWithUsHero";
import PartnerWithUs from "@/components/sections/partner-with-us/PartnerWithUs";
import Process3 from "@/components/sections/process/Process3";
import Questions from "@/components/sections/questions/Questions";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import WhatClientsSay from "@/components/sections/what-clients-say/WhatClientsSay";

const PartnerWithUsPage = () => {
  return (
    <>
      <PartnerWithUsHero />
      <Growth />
      <PartnerWithUs />
      <Process3 />
      <WhatClientsSay />
      <Questions />
      <section className="overflow-hidden px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
    </>
  );
};

export default PartnerWithUsPage;

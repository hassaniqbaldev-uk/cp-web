export async function generateMetadata() {
  const title = "Services";
  const description =
    "Explore CreativePixels services — web design, WordPress development, branding, SEO, and ongoing support. Everything you need to grow online.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/services",
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
import Cta from "@/components/sections/cta/Cta";
import DesignBuild from "@/components/sections/design-build/DesignBuild";
import Expertise2 from "@/components/sections/expertise/Expertise2";
import Growth2 from "@/components/sections/growth/Growth2";
import ServicesHero from "@/components/sections/hero/ServicesHero";
import Support from "@/components/sections/support/Support";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import { SERVICES_QUERY } from "@/sanity/queries.services";
import { servicesClient } from "@/sanity/sanity.services";

export const revalidate = 30; // Next.js ISR

const ServicesPage = async () => {
  const services = await servicesClient.fetch(SERVICES_QUERY);

  const designBuildServices = services.filter(
    (s) => s.category === "design-development",
  );
  const growthServices = services.filter((s) => s.category === "growth");
  const supportServices = services.filter((s) => s.category === "support");

  return (
    <>
      <ServicesHero />
      <DesignBuild services={designBuildServices} />
      <Growth2 services={growthServices} />
      <Support services={supportServices} />
      <Expertise2 />
      <section className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};
export default ServicesPage;

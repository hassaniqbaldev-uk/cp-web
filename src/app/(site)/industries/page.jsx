export async function generateMetadata() {
  const title = "Industries We Work In | CreativePixels";
  const description =
    "We build for specific sectors, not everyone. See the industries we understand best, the work we have delivered in each, and how we approach the problems they share.";

  return {
    title,
    description,
    alternates: {
      canonical: "/industries",
    },
    openGraph: {
      title,
      description,
      url: "https://creativepixels.agency/industries",
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
      title,
      description,
      images: ["/images/og-image-assets/og-image-compressed.jpg"],
    },
  };
}

import Contact from "@/components/sections/contact/Contact";
import Cta from "@/components/sections/cta/Cta";
import HubHero from "@/components/sections/hero/HubHero";
import Sector from "@/components/sections/sector/Sector";
import { INDUSTRIES_QUERY } from "@/sanity/queries.industries";
import { industriesClient } from "@/sanity/sanity.industries";

export const revalidate = 3600; // Next.js ISR

const IndustriesPage = async () => {
  let industries = [];

  try {
    industries = await industriesClient.fetch(INDUSTRIES_QUERY);
  } catch (error) {
    console.error("Failed to fetch industries data:", error);
  }

  return (
    <>
      <HubHero
        label="Sector experience"
        title="Industries we understand."
        description="The best work comes from knowing a sector, not guessing at it. These are the industries we have built for before, and the problems we already know how to solve in each."
        primary={{ text: "Start a project", href: "/contact" }}
        secondary={{ text: "See our work", href: "/case-studies" }}
        ctaPosition="industries-hero"
      />
      {industries.length > 0 && (
        <Sector
          solutions={industries}
          basePath="/industries"
          heading="Industries we work in"
          linkText="Explore sector"
          id="industries"
        />
      )}
      <section className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta />
      </section>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};

export default IndustriesPage;

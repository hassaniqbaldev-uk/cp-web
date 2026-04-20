import Cta2 from "@/components/sections/cta/Cta2";
import Expertise3 from "@/components/sections/expertise/Expertise3";
import ServicesDetailHero from "@/components/sections/hero/ServicesDetailHero";
import Methodology from "@/components/sections/methodology/Methodology";
import PartnerWithUs2 from "@/components/sections/partner-with-us/PartnerWithUs2";
import DynamicQuestions from "@/components/sections/questions/DynamicQuestions";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import {
  SERVICES_DETAIL_QUERY,
  SERVICES_SITEMAP_QUERY,
} from "@/sanity/queries.services";
import { servicesClient } from "@/sanity/sanity.services";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 30 } };

const getServices = cache(async (slug) => {
  try {
    return await servicesClient.fetch(SERVICES_DETAIL_QUERY, { slug }, options);
  } catch (error) {
    console.error("Failed to fetch service detail:", error);
    return null;
  }
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServices(slug);

  if (!service) return {};

  const title = service.seo?.metaTitle || service.detailHero.title;
  const description = service.seo?.metaDescription || "";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: `https://creativepixels.agency/services/${slug}`,
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

export async function generateStaticParams() {
  try {
    const services = await servicesClient.fetch(SERVICES_SITEMAP_QUERY);
    return services.map((item) => ({ slug: item.slug }));
  } catch (error) {
    console.error("Failed to fetch services static params:", error);
    return [];
  }
}

const ServicesDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const service = await getServices(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServicesDetailHero service={service.detailHero} />
      <PartnerWithUs2 service={service.partnerWithUs2} />
      <div className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta2
          title="Facing these challenges right now?"
          description="You don't have to tackle them alone. Let's discuss your specific situation."
          buttonText="Get Free Consultation"
        />
      </div>
      <Expertise3 service={service.expertise3} />
      <Methodology service={service.methodology} />
      <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <DynamicQuestions service={service.faqs} />
    </>
  );
};

export default ServicesDetailPage;

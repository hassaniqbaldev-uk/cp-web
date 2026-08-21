import Cta2 from "@/components/sections/cta/Cta2";
import Expertise3 from "@/components/sections/expertise/Expertise3";
import ServicesDetailHero from "@/components/sections/hero/ServicesDetailHero";
import Methodology from "@/components/sections/methodology/Methodology";
import PartnerWithUs2 from "@/components/sections/partner-with-us/PartnerWithUs2";
import DynamicQuestions from "@/components/sections/questions/DynamicQuestions";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Work from "@/components/sections/work/Work";
import SpecialistLinks from "@/components/sections/services/detail/SpecialistLinks";
import ProjectShowcase from "@/components/sections/services/detail/ProjectShowcase";
import Investment from "@/components/sections/services/detail/Investment";
import ServicesHubCta from "@/components/sections/services/ServicesHubCta";
import {
  SERVICES_DETAIL_QUERY,
  SERVICES_SITEMAP_QUERY,
} from "@/sanity/queries.services";
import { servicesClient } from "@/sanity/sanity.services";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 3600 } };

// Recent, strongest-first case studies for the modular pages' proof section (flagship → supporting →
// newest, archive excluded). Same honest ordering as the services hub. Labelled "Recent work" (not
// "Related work"), since it is a fallback set, not a tagged match.
const WORK_QUERY = `
  *[_type == "caseStudies" && !(_id in path("drafts.**")) && defined(slug.current) && defined(thumbnailImage) && !(designation in ["archive"])]
  | order(select(designation == "flagship" => 0, designation == "supporting" => 1, 2) asc, _createdAt desc)[0...6]{
    "slug": slug.current, title, excerpt, thumbnailImage, iconBg, iconColor
  }
`;

const getServices = cache(async (slug) => {
  try {
    return await servicesClient.fetch(SERVICES_DETAIL_QUERY, { slug }, options);
  } catch (error) {
    console.error("Failed to fetch service detail:", error);
    return null;
  }
});

const getWork = cache(async () => {
  try {
    return await caseStudiesClient.fetch(WORK_QUERY, {}, options);
  } catch (error) {
    console.error("Failed to fetch service work:", error);
    return [];
  }
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServices(slug);

  // A service can exist as a taxonomy/pillar stub with no detail content
  // (e.g. ai-automation). Treat those as no-metadata rather than crashing.
  if (!service || !service.detailHero) return {};

  const title = service.seo?.metaTitle || service.detailHero.title;
  const description = service.seo?.metaDescription || "";

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://creativepixels.agency/services/${slug}`,
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

  // Stub services (taxonomy/pillar placeholders with no authored detail page)
  // 404 rather than crash the render on a null detailHero.
  if (!service || !service.detailHero) {
    notFound();
  }

  // modularLayout (CP-05) switches a service page from the legacy layout to the modular pillar layout:
  //  - ON  → ProjectShowcase (fit/not-a-fit) + Investment (approved pricing + warranty) + Work proof +
  //          specialist links + a closing CTA; the generic mid-page Cta2 and global Testimonials are
  //          dropped (approved: we have no real client quotes, and one clear conversion path per page).
  //  - OFF → the existing 16 service pages render exactly as before.
  const modular = service.modularLayout === true;
  const caseStudies = modular ? await getWork() : [];

  if (!modular) {
    return (
      <>
        <ServicesDetailHero service={service.detailHero} />
        <PartnerWithUs2 service={service.partnerWithUs} />
        <div className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
          <Cta2
            title="Facing these challenges right now?"
            description="You don't have to tackle them alone. Let's discuss your specific situation."
            buttonText="Get Free Consultation"
          />
        </div>
        <Expertise3 service={service.expertise} />
        <Methodology service={service.methodology} />
        <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
          <Testimonials />
        </section>
        <DynamicQuestions service={service.faqs} />
      </>
    );
  }

  return (
    <>
      <ServicesDetailHero service={service.detailHero} />
      <PartnerWithUs2 service={service.partnerWithUs} />
      <Expertise3 service={service.expertise} />
      {service.specialistLinks?.length > 0 && (
        <SpecialistLinks links={service.specialistLinks} />
      )}
      <Methodology service={service.methodology} />
      {caseStudies.length > 0 && (
        <Work
          caseStudies={caseStudies}
          label="Recent work"
          title="Work we have delivered."
          description="A few recent projects that show the range and the standard we hold across every build."
        />
      )}
      <ProjectShowcase service={service.projectShowcase} />
      <Investment
        slug={slug}
        includes={service.options?.includeCard}
        heading={service.options?.heading}
      />
      <DynamicQuestions service={service.faqs} />
      <ServicesHubCta ctaPosition="service-detail-outro" />
    </>
  );
};

export default ServicesDetailPage;

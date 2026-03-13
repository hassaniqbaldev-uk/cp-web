import Cta2 from "@/components/sections/cta/Cta2";
import Expertise3 from "@/components/sections/expertise/Expertise3";
import ServicesDetailHero from "@/components/sections/hero/ServicesDetailHero";
import Methodology from "@/components/sections/methodology/Methodology";
import PartnerWithUs2 from "@/components/sections/partner-with-us/PartnerWithUs2";
import DynamicQuestions from "@/components/sections/questions/DynamicQuestions";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import { SOLUTIONS_DETAIL_QUERY } from "@/sanity/queries.solutions";
import { solutionsClient } from "@/sanity/sanity.solutions";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 30 } };

const getSolutions = cache(async (slug) => {
  return solutionsClient.fetch(SOLUTIONS_DETAIL_QUERY, { slug }, options);
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = await getSolutions(slug);

  if (!solution) return {};

  const title = solution.seo?.metaTitle || solution.detailHero.title;
  const description = solution.seo?.metaDescription || "";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: `https://creativepixels.agency/solutions/${slug}`,
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

const SolutionsDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const solution = await solutionsClient.fetch(
    SOLUTIONS_DETAIL_QUERY,
    { slug },
    options,
  );

  if (!solution) {
    notFound();
  }

  return (
    <>
      <ServicesDetailHero service={solution.detailHero} />
      <PartnerWithUs2 service={solution.partnerWithUs2} />
      <div className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta2
          title="Facing these challenges right now?"
          description="You don't have to tackle them alone. Let's discuss your specific situation."
          buttonText="Get Free Consultation"
        />
      </div>
      <Expertise3 service={solution.expertise3} />
      <Methodology service={solution.methodology} />
      <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <DynamicQuestions service={solution.faqs} />
    </>
  );
};

export default SolutionsDetailPage;

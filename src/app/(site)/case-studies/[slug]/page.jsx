import ClientOverview from "@/components/sections/client-overview/ClientOverview";
import Cta from "@/components/sections/cta/Cta";
import CaseStudiesDetailHero from "@/components/sections/hero/CaseStudiesDetailHero";
import OurApproach from "@/components/sections/our-approach/OurApproach";
import TheChallenge from "@/components/sections/the-challenge/TheChallenge";
import TheSolution from "@/components/sections/the-solution/TheSolution";
import CustomCode from "@/components/sections/custom-code/CustomCode";
import { caseStudiesDetailQuery } from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 30 } };

const getCaseStudy = cache(async (slug) => {
  return caseStudiesClient.fetch(caseStudiesDetailQuery, { slug }, options);
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) return {};

  return {
    title: caseStudy.seo?.metaTitle || caseStudy.title,
    description: caseStudy.seo?.metaDescription || "",
  };
}

const CaseStudiesDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <div className="overflow-hidden">
        <CaseStudiesDetailHero caseStudy={caseStudy} />
        <ClientOverview caseStudy={caseStudy} />
        <TheChallenge caseStudy={caseStudy} />
        <OurApproach caseStudy={caseStudy} />
        <TheSolution caseStudy={caseStudy} />
        <CustomCode caseStudy={caseStudy} />
        <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
          <Cta />
        </section>
      </div>
    </>
  );
};
export default CaseStudiesDetailPage;

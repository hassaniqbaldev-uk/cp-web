export const metadata = {
  title: "Case Studies",
  description:
    "Browse CreativePixels case studies. Real projects, real results — see how we've helped businesses across the UK, US, and Australia grow online.",
};

import FeaturedCaseStudies from "@/components/sections/case-studies/FeaturedCaseStudies";
import Contact from "@/components/sections/contact/Contact";
import Cta from "@/components/sections/cta/Cta";
import CaseStudiesHero from "@/components/sections/hero/CaseStudiesHero";
import {
  caseStudiesFilteredQuery,
  industriesQuery,
  servicesQuery,
} from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";

const options = { next: { revalidate: 30 } };

const CaseStudiesPage = async (props) => {
  const searchParams = await props.searchParams;

  // ✅ convert undefined → null (required for Sanity params)
  const service = searchParams?.service ?? null;
  const industry = searchParams?.industry ?? null;

  const [caseStudies, services, industries] = await Promise.all([
    caseStudiesClient.fetch(
      caseStudiesFilteredQuery,
      { service, industry },
      options,
    ),
    caseStudiesClient.fetch(servicesQuery, {}, options),
    caseStudiesClient.fetch(industriesQuery, {}, options),
  ]);

  return (
    <>
      <CaseStudiesHero />
      <FeaturedCaseStudies
        caseStudies={caseStudies}
        services={services}
        industries={industries}
        activeService={service}
        activeIndustry={industry}
      />
      <section className="overflow-hidden px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ed910c]/5 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};
export default CaseStudiesPage;

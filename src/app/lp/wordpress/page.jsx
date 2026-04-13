import LpAuditSection from "@/components/lp/LpAuditSection";
import LpCtaSection from "@/components/lp/LpCtaSection";
import LpHero from "@/components/lp/LpHero";
import LpProblemSection from "@/components/lp/LpProblemSection";
import LpProcessSection from "@/components/lp/LpProcessSection";
import LpResultSection from "@/components/lp/LpResultSection";
import LpServicesSection from "@/components/lp/LpServicesSection";
import LpTestimonialSection from "@/components/lp/LpTestimonialSection";
import LpWhySection from "@/components/lp/LpWhySection";
import { caseStudiesListingQuery } from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";

const options = { next: { revalidate: 30 } };

const WordpressPage = async () => {
  let caseStudies = [];
  // const [caseStudies] = await Promise.all([
  //   caseStudiesClient.fetch(caseStudiesListingQuery, options),
  // ]);

  try {
    caseStudies = await caseStudiesClient.fetch(
      caseStudiesListingQuery,
      {},
      options,
    );
  } catch (error) {
    console.error("Failed to fetch case studies data:", error);
  }
  return (
    <>
      <LpHero caseStudies={caseStudies} />
      <LpProblemSection />
      <LpWhySection />
      <LpProcessSection />
      <LpServicesSection />
      <LpResultSection />
      {/* <LpTestimonialSection /> */}
      {/* <LpAuditSection /> */}
      {/* <LpCtaSection /> */}
    </>
  );
};

export default WordpressPage;

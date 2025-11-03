import { getCaseStudies } from "@/lib/strapi";
import CaseStudiesSliderSection from "./CaseStudiesSliderSection";

const CaseStudiesSliderSectionWrapper = async () => {
  const caseStudies = await getCaseStudies().catch(() => ({ data: [] }));

  return (
    <>
      <CaseStudiesSliderSection caseStudies={caseStudies} />
    </>
  );
};

export default CaseStudiesSliderSectionWrapper;

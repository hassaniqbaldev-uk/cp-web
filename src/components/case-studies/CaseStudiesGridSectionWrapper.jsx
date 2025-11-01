import { getCaseStudies } from "@/lib/strapi";
import CaseStudiesGridSection from "./CaseStudiesGridSection";

const CaseStudiesGridSectionWrapper = async () => {
  const caseStudies = await getCaseStudies();

  return <CaseStudiesGridSection caseStudies={caseStudies} />;
};

export default CaseStudiesGridSectionWrapper;

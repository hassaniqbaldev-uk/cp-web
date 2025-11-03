import { getCaseStudies } from "@/lib/strapi";
import CaseStudiesStickyGridSection from "./CaseStudiesStickyGridSection";

const CaseStudiesStickyGridSectionWrapper = async () => {
  const caseStudies = await getCaseStudies().catch(() => ({ data: [] }));
  return (
    <>
      <CaseStudiesStickyGridSection caseStudies={caseStudies} />
    </>
  );
};

export default CaseStudiesStickyGridSectionWrapper;

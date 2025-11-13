import HomePage from "@/app/(site)/home/HomePage";
import { getCaseStudies } from "@/lib/strapi";

const SitePage = async () => {
  const caseStudies = await getCaseStudies().catch(() => ({ data: [] }));
  return (
    <>
      <HomePage caseStudies={caseStudies} />
    </>
  );
};

export default SitePage;

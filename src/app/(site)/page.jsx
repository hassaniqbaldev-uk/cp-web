import { caseStudiesListingQuery } from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import HomePage from "./home/HomePage";

const options = { next: { revalidate: 30 } };

const SitePage = async () => {
  const [caseStudies] = await Promise.all([
    caseStudiesClient.fetch(caseStudiesListingQuery, options),
  ]);

  return (
    <div>
      <HomePage caseStudies={caseStudies} />
    </div>
  );
};
export default SitePage;

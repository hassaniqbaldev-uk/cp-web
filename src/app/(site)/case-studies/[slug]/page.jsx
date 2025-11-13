import { getCaseStudies } from "@/lib/strapi";
import CaseStudyDetailWrapper from "@/components/case-studies/CaseStudyDetailWrapper";
import Header from "@/components/layout/Header";

// ✅ Dynamic metadata (still server-side, so SEO-safe)
export async function generateMetadata({ params }) {
  const { slug } = params;
  const caseStudies = await getCaseStudies(slug).catch(() => ({ data: [] }));
  const caseStudy = caseStudies?.data?.[0];

  if (!caseStudy)
    return {
      title: "Case Study Not Found",
      description: "Content unavailable.",
    };

  // Adjust indexes based on your structure
  const seoSection = caseStudy?.CaseStudyDetails?.find(
    (item) => item?.__component === "case-study-details.case-study-seo",
  );

  return {
    title: seoSection?.Title || caseStudy?.Title || "Case Study",
    description:
      seoSection?.Description || "Read more about our recent client projects.",
  };
}

const CaseStudyDetailPage = async ({ params }) => {
  const { slug } = params;

  const caseStudies = await getCaseStudies(slug).catch(() => ({ data: [] }));
  const caseStudy = caseStudies?.data?.[0] || null;

  return (
    <>
      <Header />
      <CaseStudyDetailWrapper slug={slug} caseStudy={caseStudy} />
    </>
  );
};

export default CaseStudyDetailPage;

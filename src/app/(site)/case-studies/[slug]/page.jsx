import CaseStudyApproachSection from "@/components/case-studies/CaseStudyApproachSection";
import CaseStudyChallengeSection from "@/components/case-studies/CaseStudyChallengeSection";
import CaseStudyHeroSection from "@/components/case-studies/CaseStudyHeroSection";
import CaseStudyOverviewSection from "@/components/case-studies/CaseStudyOverviewSection";
import CaseStudyResultsSection from "@/components/case-studies/CaseStudyResultsSection";
import CaseStudySolutionSection from "@/components/case-studies/CaseStudySolutionSection";
import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import { getCaseStudies } from "@/lib/strapi";

// ✅ Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  const caseStudies = await getCaseStudies(slug);
  const caseStudy = caseStudies?.data?.[0];

  return {
    title: caseStudy.CaseStudyDetails[7].Title,
    description: caseStudy.CaseStudyDetails[7].Description,
  };
}

const CaseStudyDetailPage = async ({ params }) => {
  const { slug } = await params;

  if (!slug) <p>No Case Study found</p>;

  const caseStudies = await getCaseStudies(slug);

  const caseStudy = caseStudies.data[0];

  return (
    <>
      <CaseStudyHeroSection caseStudy={caseStudy} />
      <CaseStudyOverviewSection caseStudy={caseStudy} />
      <CaseStudyChallengeSection caseStudy={caseStudy} />
      <CaseStudyApproachSection caseStudy={caseStudy} />
      <CaseStudySolutionSection caseStudy={caseStudy} />
      <CaseStudyResultsSection caseStudy={caseStudy} />
      <div className="overflow-hidden">
        {/* <FeedbackSection
          reverse
          title="Client Feedback"
          description={caseStudy.CaseStudyDetails[6].FeedbackMessage}
          author={caseStudy.CaseStudyDetails[6].ClientDetails.ClientName}
          projectType={caseStudy.CaseStudyDetails[6].ClientDetails.ProjectType}
          avatar={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${caseStudy.CaseStudyDetails[6].ClientDetails.AvatarImage.url}`}
          image={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${caseStudy.CaseStudyDetails[6].ProjectImage.url}`}
        /> */}
        <ContactSection />
      </div>
    </>
  );
};

export default CaseStudyDetailPage;

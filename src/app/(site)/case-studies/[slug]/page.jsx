import ClientOverview from "@/components/sections/client-overview/ClientOverview";
import Cta from "@/components/sections/cta/Cta";
import CaseStudiesDetailHero from "@/components/sections/hero/CaseStudiesDetailHero";
import OurApproach from "@/components/sections/our-approach/OurApproach";
import TheChallenge from "@/components/sections/the-challenge/TheChallenge";
import TheSolution from "@/components/sections/the-solution/TheSolution";
import CustomCode from "@/components/sections/custom-code/CustomCode";
import CaseStudyDecisions from "@/components/sections/case-studies/CaseStudyDecisions";
import CaseStudyEvidence from "@/components/sections/case-studies/CaseStudyEvidence";
import RelatedWork from "@/components/sections/case-studies/RelatedWork";
import TrackView from "@/components/analytics/TrackView";
import { ANALYTICS_EVENTS } from "@/lib/analytics/events";
import {
  CASE_STUDY_SITEMAP_QUERY,
  caseStudiesDetailQuery,
  relatedWorkQuery,
} from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 3600 } };

const getCaseStudy = cache(async (slug) => {
  try {
    return await caseStudiesClient.fetch(
      caseStudiesDetailQuery,
      { slug },
      options,
    );
  } catch (error) {
    console.error("Failed to fetch case study detail:", error);
    return null;
  }
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) return {};

  const title = caseStudy.seo?.metaTitle || caseStudy.title;
  const description = caseStudy.seo?.metaDescription || "";

  return {
    title,
    description,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://creativepixels.agency/case-studies/${slug}`,
      siteName: "CreativePixels",
      images: [
        {
          url: "/images/og-image-assets/og-image-compressed.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/images/og-image-assets/og-image-compressed.jpg"],
    },
  };
}

export async function generateStaticParams() {
  try {
    const caseStudies = await caseStudiesClient.fetch(CASE_STUDY_SITEMAP_QUERY);
    return caseStudies.map((item) => ({ slug: item.slug }));
  } catch (error) {
    console.error("Failed to fetch case study static params:", error);
    return [];
  }
}

const CaseStudiesDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  // Related work: score candidates by services/industries shared with THIS study (ordering is in the query).
  const serviceSlugs = (caseStudy.services || [])
    .map((s) => s.slug)
    .filter(Boolean);
  const industrySlugs = (caseStudy.industries || [])
    .map((i) => i.slug)
    .filter(Boolean);
  let relatedWork = [];
  if (serviceSlugs.length || industrySlugs.length) {
    try {
      relatedWork = await caseStudiesClient.fetch(
        relatedWorkQuery,
        { slug, serviceSlugs, industrySlugs },
        options,
      );
    } catch (error) {
      console.error("Failed to fetch related work:", error);
    }
  }

  return (
    <>
      <TrackView
        event={ANALYTICS_EVENTS.CASE_STUDY_VIEW}
        params={{ page_type: "case_study", case_study: slug }}
      />
      <div className="overflow-hidden">
        <CaseStudiesDetailHero caseStudy={caseStudy} />
        <ClientOverview caseStudy={caseStudy} />
        <TheChallenge caseStudy={caseStudy} />
        <OurApproach caseStudy={caseStudy} />
        <TheSolution caseStudy={caseStudy} />
        <CaseStudyDecisions
          designDecisions={caseStudy.designDecisions}
          technicalDecisions={caseStudy.technicalDecisions}
        />
        <CustomCode caseStudy={caseStudy} />
        <CaseStudyEvidence
          services={caseStudy.services}
          technologies={caseStudy.technologies}
        />
        <RelatedWork items={relatedWork} />
        <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
          <Cta />
        </section>
      </div>
    </>
  );
};
export default CaseStudiesDetailPage;

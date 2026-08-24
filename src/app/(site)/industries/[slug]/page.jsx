import Expertise3 from "@/components/sections/expertise/Expertise3";
import ServicesDetailHero from "@/components/sections/hero/ServicesDetailHero";
import Methodology from "@/components/sections/methodology/Methodology";
import PartnerWithUs2 from "@/components/sections/partner-with-us/PartnerWithUs2";
import DynamicQuestions from "@/components/sections/questions/DynamicQuestions";
import Work from "@/components/sections/work/Work";
import ProjectShowcase from "@/components/sections/services/detail/ProjectShowcase";
import ServiceCaseHighlight from "@/components/sections/services/detail/ServiceCaseHighlight";
import CuratedWorkGrid from "@/components/sections/services/detail/CuratedWorkGrid";
import ServicesHubCta from "@/components/sections/services/ServicesHubCta";
import {
  INDUSTRIES_DETAIL_QUERY,
  INDUSTRIES_SITEMAP_QUERY,
} from "@/sanity/queries.industries";
import { industriesClient } from "@/sanity/sanity.industries";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 3600 } };

// Newest-as-fallback: most recent published case studies (flagship/supporting first, then newest).
const WORK_QUERY = `
  *[_type == "caseStudies" && !(_id in path("drafts.**")) && defined(slug.current) && defined(thumbnailImage) && !(designation in ["archive"])]
  | order(select(designation == "flagship" => 0, designation == "supporting" => 1, 2) asc, _createdAt desc)[0...6]{
    "slug": slug.current, title, excerpt, thumbnailImage, iconBg, iconColor
  }
`;
// Tagged-first: the industry's curated case studies, order preserved.
const CURATED_WORK_QUERY = `
  *[_type == "caseStudies" && !(_id in path("drafts.**")) && slug.current in $slugs && defined(thumbnailImage)]{
    "slug": slug.current, title, excerpt, thumbnailImage, iconBg, iconColor
  }
`;

const getIndustry = cache(async (slug) => {
  try {
    return await industriesClient.fetch(INDUSTRIES_DETAIL_QUERY, { slug }, options);
  } catch (error) {
    console.error("Failed to fetch industry detail:", error);
    return null;
  }
});

const getWork = cache(async () => {
  try {
    return await caseStudiesClient.fetch(WORK_QUERY, {}, options);
  } catch (error) {
    console.error("Failed to fetch industry work:", error);
    return [];
  }
});

const getCuratedWork = cache(async (slugsKey) => {
  const slugs = slugsKey ? slugsKey.split(",") : [];
  if (!slugs.length) return [];
  try {
    const rows = await caseStudiesClient.fetch(CURATED_WORK_QUERY, { slugs }, options);
    return slugs.map((s) => rows.find((r) => r.slug === s)).filter(Boolean);
  } catch (error) {
    console.error("Failed to fetch curated industry work:", error);
    return [];
  }
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = await getIndustry(slug);

  if (!industry || !industry.detailHero) return {};

  const title = industry.seo?.metaTitle || industry.detailHero.title;
  const description = industry.seo?.metaDescription || "";

  return {
    title,
    description,
    alternates: { canonical: `/industries/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://creativepixels.agency/industries/${slug}`,
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
      title,
      description,
      images: ["/images/og-image-assets/og-image-compressed.jpg"],
    },
  };
}

export async function generateStaticParams() {
  try {
    const industries = await industriesClient.fetch(INDUSTRIES_SITEMAP_QUERY);
    return industries.map((item) => ({ slug: item.slug }));
  } catch (error) {
    console.error("Failed to fetch industries static params:", error);
    return [];
  }
}

const IndustryDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const industry = await getIndustry(slug);

  if (!industry || !industry.detailHero) {
    notFound();
  }

  // Work rule (D44): tagged evidence shows first; where an industry has none, fall back to the newest
  // case studies, labelled "Recent work" so it stays honest (never a fake vertical, never an empty page).
  const curated = Array.isArray(industry.workSlugs) && industry.workSlugs.length > 0;
  const caseStudies = curated
    ? await getCuratedWork(industry.workSlugs.join(","))
    : await getWork();
  const useCuratedGrid = curated && caseStudies.length !== 3;

  const workLabel = curated ? "Selected work" : "Recent work";
  const workTitle = curated
    ? "Work we have delivered in this sector."
    : "Recent work.";
  const workDescription = curated
    ? "A few projects where we did exactly this kind of work."
    : "A selection of our most recent projects across sectors.";

  return (
    <>
      <ServicesDetailHero service={industry.detailHero} />
      <PartnerWithUs2 service={industry.partnerWithUs} />
      <Expertise3 service={industry.expertise} />
      <Methodology service={industry.methodology} />
      {caseStudies.length > 0 &&
        (useCuratedGrid ? (
          <CuratedWorkGrid
            caseStudies={caseStudies}
            label={workLabel}
            title={workTitle}
            description={workDescription}
          />
        ) : (
          <Work
            caseStudies={caseStudies}
            label={workLabel}
            title={workTitle}
            description={workDescription}
          />
        ))}
      {industry.caseHighlight && (
        <ServiceCaseHighlight highlight={industry.caseHighlight} />
      )}
      <ProjectShowcase service={industry.projectShowcase} />
      <DynamicQuestions service={industry.faqs} />
      <ServicesHubCta ctaPosition="industry-detail-outro" />
    </>
  );
};

export default IndustryDetailPage;

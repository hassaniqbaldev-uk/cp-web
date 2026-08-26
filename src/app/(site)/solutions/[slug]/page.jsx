import Cta2 from "@/components/sections/cta/Cta2";
import Expertise3 from "@/components/sections/expertise/Expertise3";
import ServicesDetailHero from "@/components/sections/hero/ServicesDetailHero";
import Methodology from "@/components/sections/methodology/Methodology";
import PartnerWithUs2 from "@/components/sections/partner-with-us/PartnerWithUs2";
import DynamicQuestions from "@/components/sections/questions/DynamicQuestions";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Work from "@/components/sections/work/Work";
import SpecialistLinks from "@/components/sections/services/detail/SpecialistLinks";
import ProjectShowcase from "@/components/sections/services/detail/ProjectShowcase";
import ServiceCaseHighlight from "@/components/sections/services/detail/ServiceCaseHighlight";
import CuratedWorkGrid from "@/components/sections/services/detail/CuratedWorkGrid";
import ServicesHubCta from "@/components/sections/services/ServicesHubCta";
import {
  SOLUTIONS_DETAIL_QUERY,
  SOLUTIONS_SITEMAP_QUERY,
} from "@/sanity/queries.solutions";
import { solutionsClient } from "@/sanity/sanity.solutions";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { notFound } from "next/navigation";
import { cache } from "react";

const options = { next: { revalidate: 3600 } };

const WORK_QUERY = `
  *[_type == "caseStudies" && !(_id in path("drafts.**")) && defined(slug.current) && defined(thumbnailImage) && !(designation in ["archive"])]
  | order(select(designation == "flagship" => 0, designation == "supporting" => 1, 2) asc, _createdAt desc)[0...6]{
    "slug": slug.current, title, excerpt, thumbnailImage, iconBg, iconColor
  }
`;
const CURATED_WORK_QUERY = `
  *[_type == "caseStudies" && !(_id in path("drafts.**")) && slug.current in $slugs && defined(thumbnailImage)]{
    "slug": slug.current, title, excerpt, thumbnailImage, iconBg, iconColor
  }
`;

const getSolutions = cache(async (slug) => {
  try {
    return await solutionsClient.fetch(SOLUTIONS_DETAIL_QUERY, { slug }, options);
  } catch (error) {
    console.error("Failed to fetch solution detail:", error);
    return null;
  }
});

const getWork = cache(async () => {
  try {
    return await caseStudiesClient.fetch(WORK_QUERY, {}, options);
  } catch (error) {
    console.error("Failed to fetch solution work:", error);
    return [];
  }
});

const getCuratedWork = cache(async (slugsKey) => {
  const slugs = slugsKey ? slugsKey.split(",") : [];
  if (!slugs.length) return [];
  try {
    const rows = await caseStudiesClient.fetch(
      CURATED_WORK_QUERY,
      { slugs },
      options,
    );
    return slugs.map((s) => rows.find((r) => r.slug === s)).filter(Boolean);
  } catch (error) {
    console.error("Failed to fetch curated solution work:", error);
    return [];
  }
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = await getSolutions(slug);

  if (!solution || !solution.detailHero) return {};

  const title = solution.seo?.metaTitle || solution.detailHero.title;
  const description = solution.seo?.metaDescription || "";

  return {
    title,
    description,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://creativepixels.agency/solutions/${slug}`,
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
    const solutions = await solutionsClient.fetch(SOLUTIONS_SITEMAP_QUERY);
    return solutions.map((item) => ({ slug: item.slug }));
  } catch (error) {
    console.error("Failed to fetch solutions static params:", error);
    return [];
  }
}

const SolutionsDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const solution = await getSolutions(slug);

  if (!solution || !solution.detailHero) {
    notFound();
  }

  // Solutions use the same modularLayout gate as services. A GOAL page has no pricing (a goal is reached
  // via services, not priced on its own) and no parent band, so the modular layout here omits the
  // Investment section; specialistLinks point at the services that deliver the goal.
  const modular = solution.modularLayout === true;
  let caseStudies = [];
  let curated = false;
  if (modular) {
    if (Array.isArray(solution.workSlugs)) {
      curated = solution.workSlugs.length > 0;
      caseStudies = curated
        ? await getCuratedWork(solution.workSlugs.join(","))
        : [];
    } else {
      caseStudies = await getWork();
    }
  }
  const useCuratedGrid = curated && caseStudies.length !== 3;

  if (!modular) {
    return (
      <>
        <ServicesDetailHero service={solution.detailHero} />
        <PartnerWithUs2 service={solution.partnerWithUs} />
        <div className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
          <Cta2
            title="Facing these challenges right now?"
            description="You don't have to tackle them alone. Let's discuss your specific situation."
            buttonText="Start a project"
          />
        </div>
        <Expertise3 service={solution.expertise} />
        <Methodology service={solution.methodology} />
        <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
          <Testimonials />
        </section>
        <DynamicQuestions service={solution.faqs} />
      </>
    );
  }

  return (
    <>
      <ServicesDetailHero service={solution.detailHero} />
      <PartnerWithUs2 service={solution.partnerWithUs} />
      <Expertise3 service={solution.expertise} />
      {solution.specialistLinks?.length > 0 && (
        <SpecialistLinks
          links={solution.specialistLinks}
          label={solution.specialistLinksHeading?.label}
          title={solution.specialistLinksHeading?.title}
          description={solution.specialistLinksHeading?.description}
        />
      )}
      <Methodology service={solution.methodology} />
      {caseStudies.length > 0 &&
        (useCuratedGrid ? (
          <CuratedWorkGrid
            caseStudies={caseStudies}
            label="Recent work"
            title="Work we have delivered."
            description="A few recent projects where we did exactly this."
          />
        ) : (
          <Work
            caseStudies={caseStudies}
            label="Recent work"
            title="Work we have delivered."
            description="A few recent projects where we did exactly this."
          />
        ))}
      {solution.caseHighlight && (
        <ServiceCaseHighlight highlight={solution.caseHighlight} />
      )}
      <ProjectShowcase service={solution.projectShowcase} />
      <DynamicQuestions service={solution.faqs} />
      <ServicesHubCta ctaPosition="solution-detail-outro" secondaryAudit />
    </>
  );
};

export default SolutionsDetailPage;

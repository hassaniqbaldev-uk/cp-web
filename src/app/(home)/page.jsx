import { caseStudiesBySlugsQuery } from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { getNavData } from "@/sanity/nav";
import { getFounderImage } from "@/sanity/founder";
import { getTestimonials } from "@/sanity/testimonials";
import { SELECTED_WORK_SLUGS } from "@/content/homepage";
import HomePage from "./home/HomePage";

const options = { next: { revalidate: 3600 } };

export async function generateMetadata() {
  const title = "CreativePixels | Web, Ecommerce, Brand & Growth Agency";
  const description =
    "Elevate your brand with CreativePixels. We craft high-converting websites and powerful growth systems for ambitious businesses. Start your project with a senior team.";

  return {
    title,
    description,
    alternates: {
      canonical: "/", // <-- the route's own URL
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/",
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

const SitePage = async () => {
  // Curated by slug (order preserved), so the homepage's work slots are a deliberate decision.
  const orderBy = (rows, slugs) =>
    slugs.map((s) => rows.find((r) => r.slug === s)).filter(Boolean);

  let selectedWork = [];
  try {
    const rows = await caseStudiesClient.fetch(
      caseStudiesBySlugsQuery,
      { slugs: SELECTED_WORK_SLUGS },
      options,
    );
    selectedWork = orderBy(rows, SELECTED_WORK_SLUGS);
  } catch (error) {
    console.error("Failed to fetch case studies data:", error);
  }

  const founderImage = await getFounderImage();

  const navData = await getNavData();

  const testimonials = await getTestimonials();

  return (
    <>
      <HomePage
        selectedWork={selectedWork}
        founderImage={founderImage}
        navData={navData}
        testimonials={testimonials}
      />
    </>
  );
};
export default SitePage;

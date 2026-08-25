import { caseStudiesBySlugsQuery } from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import { getNavData } from "@/sanity/nav";
import {
  SELECTED_WORK_SLUGS,
  WEB_ECOMMERCE_WORK_SLUGS,
} from "@/content/homepage";
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
  let webEcommerceWork = [];
  try {
    // Web & Ecommerce block never repeats a selected-work case study (defensive filter, on top of the
    // lists already being distinct), so the two sections can't overlap and the page can't look thin.
    const webSlugs = WEB_ECOMMERCE_WORK_SLUGS.filter(
      (s) => !SELECTED_WORK_SLUGS.includes(s),
    );
    const allSlugs = [...new Set([...SELECTED_WORK_SLUGS, ...webSlugs])];
    const rows = await caseStudiesClient.fetch(
      caseStudiesBySlugsQuery,
      { slugs: allSlugs },
      options,
    );
    selectedWork = orderBy(rows, SELECTED_WORK_SLUGS);
    webEcommerceWork = orderBy(rows, webSlugs);
  } catch (error) {
    console.error("Failed to fetch case studies data:", error);
  }

  // Founder photo from the Sanity author doc. `fit=max` caps at the source dimensions, so it is crisp now
  // and automatically serves a larger image the day a higher-resolution photo is uploaded (no code change).
  let founderImage = null;
  try {
    const author = await caseStudiesClient.fetch(
      `*[_type == "author"][0]{ "img": image.asset->url }`,
      {},
      options,
    );
    if (author?.img) founderImage = `${author.img}?w=640&fit=max&auto=format&q=80`;
  } catch (error) {
    console.error("Failed to fetch founder image:", error);
  }

  const navData = await getNavData();

  return (
    <>
      <HomePage
        selectedWork={selectedWork}
        webEcommerceWork={webEcommerceWork}
        founderImage={founderImage}
        navData={navData}
      />
    </>
  );
};
export default SitePage;

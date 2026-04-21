import { caseStudiesListingQuery } from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import HomePage from "./home/HomePage";

const options = { next: { revalidate: 30 } };

export async function generateMetadata() {
  const title = "Web Design Agency for Growth-Focused Brands | Free Audit";
  const description =
    "Elevate your brand with CreativePixels. We craft high-converting websites & powerful growth systems for ambitious businesses. Claim your free strategy call now.";

  return {
    title,
    description,
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
  let caseStudies = [];

  try {
    caseStudies = await caseStudiesClient.fetch(
      caseStudiesListingQuery,
      {},
      options,
    );
  } catch (error) {
    console.error("Failed to fetch case studies data:", error);
  }

  return (
    <>
      <HomePage caseStudies={caseStudies} />
    </>
  );
};
export default SitePage;

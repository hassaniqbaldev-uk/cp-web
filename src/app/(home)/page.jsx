import { homePageSchema } from "@/contants/schema";
import { caseStudiesListingQuery } from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import HomePage from "./home/HomePage";

const options = { next: { revalidate: 3600 } };

export async function generateMetadata() {
  const title = "Web Design Agency UK | Custom Websites | CreativePixels";
  const description =
    "Manchester-based web design agency creating custom, SEO-friendly websites with AI-assisted development. Book your free strategy call today.";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <HomePage caseStudies={caseStudies} />
    </>
  );
};
export default SitePage;

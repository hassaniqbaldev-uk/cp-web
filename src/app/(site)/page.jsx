import { caseStudiesListingQuery } from "@/sanity/queries.caseStudies";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";
import HomePage from "./home/HomePage";

const options = { next: { revalidate: 30 } };

export async function generateMetadata() {
  const title = "CreativePixels | Web Design, WordPress & Branding Agency";
  const description =
    "CreativePixels is a Manchester-based creative agency delivering WordPress websites, branding, and digital solutions for clients across the UK, US & Australia.";

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
          url: "/images/og-image-assets/og-image.jpg",
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
      images: ["/images/og-image-assets/og-image.jpg"],
    },
  };
}

const SitePage = async () => {
  const [caseStudies] = await Promise.all([
    caseStudiesClient.fetch(caseStudiesListingQuery, options),
  ]);

  return (
    <>
      <HomePage caseStudies={caseStudies} />
    </>
  );
};
export default SitePage;

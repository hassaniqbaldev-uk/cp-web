export async function generateMetadata() {
  const title = "Careers";
  const description =
    "Join the CreativePixels team. Explore open roles and opportunities to work with a creative agency that does things differently.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/careers",
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

import CareersHero from "@/components/sections/hero/CareersHero";
import Opportunities from "@/components/sections/opportunities/Opportunities";
import Values2 from "@/components/sections/values/Values2";

const CareersPage = () => {
  return (
    <>
      <CareersHero />
      <Values2 />
      <Opportunities />
    </>
  );
};

export default CareersPage;

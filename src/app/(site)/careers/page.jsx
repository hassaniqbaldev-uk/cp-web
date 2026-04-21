export async function generateMetadata() {
  const title = "Digital Agency Careers | Join Our Remote-First Team Today";
  const description =
    "Explore career opportunities at CreativePixels in design, engineering & marketing. Grow your skills with real projects and apply online today with us!";

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

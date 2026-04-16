export async function generateMetadata() {
  const title = "Legal Hub";
  const description =
    "Access CreativePixels legal documents, policies, and client resources — all in one place.";

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/legal",
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

import LegalHero from "@/components/sections/hero/LegalHero";
import Policies from "@/components/sections/policies/Policies";
import Resources from "@/components/sections/resources/Resources";
import { LEGAL_LIST_QUERY } from "@/sanity/queries.legal";
import { legalClient } from "@/sanity/sanity.legal";

export const revalidate = 30; // Next.js ISR

const LegalPage = async () => {
  let legal = [];

  try {
    legal = await legalClient.fetch(LEGAL_LIST_QUERY);
  } catch (error) {
    console.error("Failed to fetch legal data:", error);
  }

  const clientResources = legal.filter(
    (l) => l.category === "client-resources",
  );
  const ourPolicies = legal.filter((l) => l.category === "our-policies");

  return (
    <>
      <LegalHero />
      <Resources legal={clientResources} />
      <Policies legal={ourPolicies} />
    </>
  );
};

export default LegalPage;

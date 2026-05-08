export async function generateMetadata() {
  const title = "Website Legal Policies | Terms, Privacy & Compliance Hub";
  const description =
    "Website legal policies, privacy terms, cookies & compliance resources in one place for full transparency. View key documents with confidence at CreativePixels.";

  return {
    title,
    description,
    alternates: {
      canonical: "/legal", // <-- the route's own URL
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/legal",
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

import LegalHero from "@/components/sections/hero/LegalHero";
import Policies from "@/components/sections/policies/Policies";
import Resources from "@/components/sections/resources/Resources";
import { LEGAL_LIST_QUERY } from "@/sanity/queries.legal";
import { legalClient } from "@/sanity/sanity.legal";

export const revalidate = 3600; // Next.js ISR

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

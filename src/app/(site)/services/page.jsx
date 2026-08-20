export async function generateMetadata() {
  const title = "Web Design and Development Services | Free Strategy Call";
  const description =
    "Brand, web and ecommerce, growth marketing and automation, delivered by one team. See how CreativePixels can help and book a free strategy call.";

  return {
    title,
    description,
    alternates: {
      canonical: "/services", // <-- the route's own URL
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/services",
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

import ServicesHubHero from "@/components/sections/services/ServicesHubHero";
import ServicesPillars from "@/components/sections/services/ServicesPillars";
import ServicesHubOutro from "@/components/sections/services/ServicesHubOutro";
import Work from "@/components/sections/work/Work";
import { getNavData } from "@/sanity/nav";
import { caseStudiesClient } from "@/sanity/sanity.caseStudies";

export const revalidate = 3600; // Next.js ISR

// Newest published case studies for the "relevant work" section. On the hub there is
// no specific tag to match, so this is the NEWEST-FIRST fallback of the tagged-first /
// newest-fallback rule (tagged matching lives on the industry + service-detail pages).
const HUB_WORK_QUERY = `
  *[_type == "caseStudies" && defined(slug.current) && defined(thumbnailImage)]
    | order(_createdAt desc)[0...6]{
      "slug": slug.current, title, excerpt, thumbnailImage, iconBg, iconColor
    }
`;

const ServicesPage = async () => {
  // ONE source of truth: the pillar grouping is the SAME data the mega-menu uses
  // (getNavData -> serviceColumns). Empty pillars are already dropped, so the hub
  // renders nothing for them, exactly like the nav.
  const navData = await getNavData();

  let caseStudies = [];
  try {
    caseStudies = await caseStudiesClient.fetch(HUB_WORK_QUERY);
  } catch (error) {
    console.error("Failed to fetch hub case studies:", error);
  }

  return (
    <>
      {/* 1 hero + 2 positioning statement */}
      <ServicesHubHero />

      {/* 3 four pillars + 4 primary services (services sit inside their pillar) */}
      <ServicesPillars columns={navData.serviceColumns} />

      {/* 5 relevant work — newest-first fallback (no tag on the hub) */}
      {caseStudies.length > 0 && <Work caseStudies={caseStudies} />}

      {/* 6 specialist capabilities, 7 not-sure route, 8 solutions route, 9 CTA */}
      <ServicesHubOutro />
    </>
  );
};

export default ServicesPage;

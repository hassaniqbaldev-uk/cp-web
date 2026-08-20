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

// Case studies for the "relevant work" section. Fallback order (site-wide rule):
// tagged matches first, then FLAGSHIP, then SUPPORTING, then newest. ARCHIVE
// (e.g. AO Arena pitch mockup, Peekaboo MVP) NEVER surfaces through a fallback — only
// via a direct link or the work hub — so it is filtered out here. The hub has no tag,
// so this is the flagship-first fallback; `select(...)` ranks the designation tiers,
// and `_createdAt desc` orders newest within a tier. `!(designation in ["archive"])`
// also lets an as-yet-undesignated study through (it ranks into the newest tier).
const HUB_WORK_QUERY = `
  *[_type == "caseStudies" && !(_id in path("drafts.**")) && defined(slug.current) && defined(thumbnailImage) && !(designation in ["archive"])]
    | order(select(designation == "flagship" => 0, designation == "supporting" => 1, 2) asc, _createdAt desc)[0...6]{
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

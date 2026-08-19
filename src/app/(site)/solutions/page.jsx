export async function generateMetadata() {
  const title = "Digital Solutions | Tailored Strategies for Real Growth";
  const description =
    "Outcome-led solutions for common business goals, from generating more leads to rebuilding your website or automating operations. Book a free strategy call.";

  return {
    title,
    description,
    alternates: {
      canonical: "/solutions", // <-- the route's own URL
    },
    openGraph: {
      title: title,
      description: description,
      url: "https://creativepixels.agency/solutions",
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

import Contact from "@/components/sections/contact/Contact";
import Cta from "@/components/sections/cta/Cta";
import Goal from "@/components/sections/goal/Goal";
import SolutionsHero from "@/components/sections/hero/SolutionsHero";
import Sector from "@/components/sections/sector/Sector";
import { SOLUTIONS_QUERY } from "@/sanity/queries.solutions";
import { solutionsClient } from "@/sanity/sanity.solutions";

export const revalidate = 3600; // Next.js ISR

const SolutionsPage = async () => {
  let solutions = [];

  try {
    solutions = await solutionsClient.fetch(SOLUTIONS_QUERY);
  } catch (error) {
    console.error("Failed to fetch solutions data:", error);
  }

  const industrySolutions = solutions.filter((s) => s.category === "industry");
  const goalSolutions = solutions.filter((s) => s.category === "goal");
  return (
    <>
      <SolutionsHero />
      {industrySolutions.length > 0 && <Sector solutions={industrySolutions} />}
      <Goal solutions={goalSolutions} />
      <section className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta />
      </section>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};
export default SolutionsPage;

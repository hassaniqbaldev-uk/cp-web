export const metadata = {
  title: "Solutions",
  description:
    "Find the right solution for your business with CreativePixels. From industry-specific websites to goal-driven digital strategies.",
};

import Contact from "@/components/sections/contact/Contact";
import Cta from "@/components/sections/cta/Cta";
import DesignBuild from "@/components/sections/design-build/DesignBuild";
import Expertise2 from "@/components/sections/expertise/Expertise2";
import Goal from "@/components/sections/goal/Goal";
import Growth2 from "@/components/sections/growth/Growth2";
import ServicesHero from "@/components/sections/hero/ServicesHero";
import SolutionsHero from "@/components/sections/hero/SolutionsHero";
import Sector from "@/components/sections/sector/Sector";
import Support from "@/components/sections/support/Support";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import { SOLUTIONS_QUERY } from "@/sanity/queries.solutions";
import { solutionsClient } from "@/sanity/sanity.solutions";

export const revalidate = 30; // Next.js ISR

const SolutionsPage = async () => {
  const solutions = await solutionsClient.fetch(SOLUTIONS_QUERY);

  const industrySolutions = solutions.filter((s) => s.category === "industry");
  const goalSolutions = solutions.filter((s) => s.category === "goal");
  return (
    <>
      <SolutionsHero />
      <Sector solutions={industrySolutions} />
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

export const metadata = {
  title: "Careers",
  description:
    "Join the CreativePixels team. Explore open roles and opportunities to work with a creative agency that does things differently.",
};

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

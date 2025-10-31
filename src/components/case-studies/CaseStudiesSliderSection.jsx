import { getCaseStudies } from "@/lib/strapi";
import SectionTitle from "../common/SectionTitle";

import CaseStudyCardSlider from "./CaseStudyCardSlider";
import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";

const CaseStudiesSliderSection = async () => {
  const caseStudies = await getCaseStudies();

  return (
    <section className="overflow-hidden px-[3rem] pt-[8rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div>
            <SectionLabel2 text="Case Studies" textColor="text-black" />
          </div>

          <div className="case-study-heading">
            <SectionTitle label="A decade of digital done right" />
          </div>

          <div className="case-study-desc max-w-[76.5rem]">
            <SectionDescription label="We’ve crafted websites and brands that blend design, development, and strategy into measurable success." />
          </div>
        </div>

        <div className="mt-[4rem]">
          <CaseStudyCardSlider caseStudies={caseStudies.data} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSliderSection;

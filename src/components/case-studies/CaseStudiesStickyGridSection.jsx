import { getCaseStudies } from "@/lib/strapi";
import SectionTitle from "../common/SectionTitle";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyCardSlider from "./CaseStudyCardSlider";
import SectionLabel2 from "../common/SectionLabel2";
import SectionDescription from "../common/SectionDescription";

const CaseStudiesStickyGridSection = async () => {
  const caseStudies = await getCaseStudies();

  return (
    <section className="px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="top-[6rem] flex flex-col items-center gap-[2rem] text-center xl:sticky">
          <div>
            <SectionLabel2 text="Case Studies" textColor="text-black" />
          </div>

          <div className="case-study-heading">
            <SectionTitle label="Digital Done Right" />
          </div>

          <div className="case-study-desc max-w-[76.5rem]">
            <SectionDescription label="We’ve crafted websites and brands that blend design, development, and strategy into measurable success." />
          </div>
        </div>

        <div className="mt-20 hidden xl:block">
          <div className="flex flex-col gap-[5rem]">
            {caseStudies.data.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="sticky top-[35rem] xl:top-[28rem]"
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[4rem] block w-full xl:hidden">
          <CaseStudyCardSlider caseStudies={caseStudies.data} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesStickyGridSection;

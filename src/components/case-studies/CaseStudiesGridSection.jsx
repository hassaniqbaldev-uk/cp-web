import { getCaseStudies } from "@/lib/strapi";
import SectionTitle from "../common/SectionTitle";
import CaseStudyCard from "./CaseStudyCard";
import DownArrowIcon from "@/assets/icons/down-arrow.svg";
import SubtractDarkIcon from "@/assets/icons/subtract-dark.svg";
import CaseStudyCardSlider from "./CaseStudyCardSlider";

const CaseStudiesGridSection = async () => {
  const caseStudies = await getCaseStudies();

  return (
    <section className="overflow-hidden px-[3rem] pt-[8rem] xl:px-[0rem] xl:pt-[10rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="mx-auto max-w-[82.6rem] text-center">
          <SectionTitle label="Trusted by business across the UK, US and Australia." />
        </div>

        <div className="mt-[4rem] hidden xl:block">
          <div className="flex flex-col gap-[5rem]">
            {caseStudies.data.map((caseStudy) => (
              <div key={caseStudy.id}>
                <CaseStudyCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>

          <button className="mt-[5rem] hidden w-full cursor-pointer items-center xl:inline-flex">
            <span className="inline-flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              Load More
            </span>

            <i className="-mx-[.4rem] min-w-max">
              <div className="inline-flex size-[1.8rem] items-center justify-center">
                <SubtractDarkIcon />
              </div>
            </i>

            <i className="min-w-max">
              <div className="inline-flex size-[5.6rem] items-center justify-center rounded-full bg-[#141414]">
                <DownArrowIcon className="size-[1.8rem]" />
              </div>
            </i>
          </button>
        </div>

        <div className="mt-[4rem] block w-full xl:hidden">
          <CaseStudyCardSlider caseStudies={caseStudies.data} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGridSection;

import Link from "next/link";
import PlayYellowIcon from "@/assets/icons/play-yellow-icon.svg";
import SubtractDarkIcon from "@/assets/icons/subtract-dark.svg";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/getStrapiMedia";

const CaseStudyOverviewSection = ({ caseStudy }) => {
  return (
    <section className="px-[3rem] py-[8rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <h4 className="text-[2.5rem] leading-[3.5rem] font-semibold tracking-[-0.02em] md:text-[4rem] md:leading-[5rem] lg:text-[4.8rem] lg:leading-[6rem]">
            {caseStudy.CaseStudyDetails[1].Title}
          </h4>

          <p className="mt-[2rem] max-w-[110rem] text-[2rem] leading-[3.5rem] font-medium tracking-[-1px] md:text-[2.6rem] md:leading-[4.4rem]">
            {caseStudy.CaseStudyDetails[1].Description}
          </p>

          {/* <Link href="" className="inline-flex items-center">
            <span className="inline-flex h-[5rem] min-w-[24.5rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              What Howard Says
            </span>
            <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
              <SubtractDarkIcon />
            </i>
            <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
              <PlayYellowIcon />
            </i>
          </Link> */}
        </div>

        <div className="mt-[5rem] grid grid-cols-1 gap-[3.3rem] md:grid-cols-2 xl:mt-[9rem]">
          <div className="relative h-[30rem] w-full lg:h-[38rem] xl:h-[43.9rem]">
            <Image
              src={getStrapiMedia(
                caseStudy.CaseStudyDetails[1].GridImage1?.url,
              )}
              alt={
                caseStudy.CaseStudyDetails[1].GridImage1.alternativeText ||
                "Grid Image 1"
              }
              fill
              priority
              className="size-full"
              unoptimized
            />
          </div>
          <div className="relative h-[30rem] w-full lg:h-[38rem] xl:h-[43.9rem]">
            <Image
              src={getStrapiMedia(
                caseStudy.CaseStudyDetails[1].GridImage2?.url,
              )}
              alt={caseStudy.CaseStudyDetails[1].GridImage2.alternativeText}
              fill
              priority
              className="size-full"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverviewSection;

import Link from "next/link";
import PlayYellowIcon from "@/assets/icons/play-yellow-icon.svg";
import SubtractDarkIcon from "@/assets/icons/subtract-dark.svg";

const CaseStudyOverviewSection = () => {
  return (
    <section className="py-[8rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <h4 className="text-[2.5rem] leading-[3.5rem] font-semibold tracking-[-0.02em] md:text-[4rem] md:leading-[5rem] lg:text-[4.8rem] lg:leading-[6rem]">
            Client Overview
          </h4>

          <p className="mt-[2rem] mb-[4rem] max-w-[110rem] text-[2rem] leading-[3.5rem] font-medium tracking-[-1px] md:text-[2.6rem] md:leading-[4.4rem]">
            New Compass, part of Teleqo Tech in the United States, develops
            advanced cloud-based software for data extraction and management.
            Their platform empowers teams to handle massive datasets with speed
            and precision, delivering seamless client experiences.
          </p>

          <Link href="" className="inline-flex items-center">
            <span className="inline-flex h-[5rem] min-w-[24.5rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
              What Howard Says
            </span>
            <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
              <SubtractDarkIcon />
            </i>
            <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
              <PlayYellowIcon />
            </i>
          </Link>
        </div>

        <div className="mt-[9rem] grid grid-cols-2 gap-[3.3rem]">
          <div className="h-[43.9rem] w-full bg-blue-300">1</div>
          <div className="h-[43.9rem] w-full bg-blue-300">2</div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverviewSection;

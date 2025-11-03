import { getStrapiMedia } from "@/lib/getStrapiMedia";
import Image from "next/image";

const CaseStudyApproachSection = ({ caseStudy }) => {
  return (
    <section className="px-[3rem] py-[8rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="case-study-approach-card w-full overflow-hidden md:h-[56.5rem]">
          <div className="pointer-events-none absolute inset-0 z-0 select-none">
            <div className="absolute top-[-25.8rem] right-[2rem] hidden size-[51.5rem] rounded-full lg:block xl:right-[16.9rem]">
              <Image
                src={getStrapiMedia(
                  caseStudy.CaseStudyDetails[3].CardImage1?.url,
                )}
                alt={
                  caseStudy.CaseStudyDetails[3].CardImage1.alternativeText ||
                  "Card Image 1"
                }
                fill
                priority
                className="size-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute right-[-10rem] bottom-[-25.7rem] hidden size-[51.5rem] rounded-full lg:block xl:right-[0rem]">
              <Image
                src={getStrapiMedia(
                  caseStudy.CaseStudyDetails[3].CardImage2?.url,
                )}
                alt={
                  caseStudy.CaseStudyDetails[3].CardImage2.alternativeText ||
                  "Card Image 2"
                }
                fill
                priority
                className="size-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute top-[22rem] right-[15rem] hidden lg:block xl:top-[22rem] xl:right-[25.2rem]">
              <img
                src="/images/dash-line.svg"
                alt="Image"
                className="max-w-[17.8rem]"
              />
            </div>
          </div>

          <div className="relative z-[10] size-full p-[3rem] md:px-[6rem] md:py-[7.3rem]">
            <div className="flex flex-col gap-[2rem]">
              <h4 className="text-text-primary text-[3.5rem] leading-[4.5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem]">
                {caseStudy.CaseStudyDetails[3].Title}
              </h4>

              <p className="text-text-primary w-full overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal md:line-clamp-4 lg:max-w-[41.2rem]">
                {caseStudy.CaseStudyDetails[3].Description}
              </p>

              <ul className="flex w-full flex-col gap-[1.5rem] lg:max-w-[51.5rem]">
                {caseStudy.CaseStudyDetails[3].Lists.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-[.8rem] border-b border-[#000000]/25 pb-[1.5rem] last:border-0"
                  >
                    <i className="relative top-[.7rem] min-w-max">
                      <div className="size-[1rem] rounded-full border-2 border-[#FF37B3]" />
                    </i>

                    <span className="text-text-primary line-clamp-2 overflow-hidden text-[1.8rem] leading-[2.4rem]">
                      {item.List}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyApproachSection;

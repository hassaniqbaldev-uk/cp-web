import Image from "next/image";
import CommonBtn3 from "../common/CommonBtn3";
import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import LineStroke23 from "@/assets/decorative-elements/line-stroke-23.svg";
import { getStrapiMedia } from "@/lib/getStrapiMedia";

const CaseStudyHeroSection = ({ caseStudy }) => {
  return (
    <section className="relative px-[3rem] pt-[18rem] md:pb-[0rem] xl:px-[0rem]">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 z-[0] hidden overflow-hidden select-none xl:block">
        <LineStroke23 className="absolute top-[5.5rem] right-[-8.8rem]" />

        <div
          className="absolute top-[14rem] right-[11.5rem] size-[17rem] rotate-[15deg] overflow-hidden rounded-full"
          style={{ boxShadow: "4px 8px 8px 0px #32323233" }}
        >
          <img
            src={getStrapiMedia(caseStudy.CaseStudyDetails[0].BadgeImage?.url)}
            alt={
              caseStudy.CaseStudyDetails[0].BadgeImage?.alternativeText ||
              "Badge Image"
            }
            className="size-full"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center xl:items-start">
          <div className="inline-flex rotate-[2deg]">
            <SectionLabel2 text="Case Study" />
          </div>

          <div className="mt-[1.5rem] mb-[2.5rem] max-w-[100rem]">
            <SectionTitle label={caseStudy.Title} />
          </div>

          <CommonBtn3
            label="Visit Live Site"
            href={caseStudy.CaseStudyDetails[0].VisitButtonLink}
          />

          <div className="my-[5rem] flex w-full flex-col justify-between gap-[3rem] md:flex-row">
            <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FFC300] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                Industry
              </span>

              <span className="w-full max-w-[30.4rem] text-[1.8rem] leading-[2.6rem] font-normal">
                {caseStudy.CaseStudyDetails[0].IndustryColumn}
              </span>
            </div>

            <div className="hidden h-[9.5rem] w-[1px] bg-[#000000]/20 lg:block" />

            <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FF37B3] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                Services
              </span>

              <span className="w-full max-w-[45rem] text-[1.8rem] leading-[2.6rem] font-normal">
                {caseStudy.CaseStudyDetails[0].ServicesColumn}
              </span>
            </div>

            <div className="hidden h-[9.5rem] w-[1px] bg-[#000000]/20 lg:block" />

            <div className="flex flex-col items-center gap-[1.5rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#007BFF] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                Tools Used
              </span>

              <ul className="flex w-full max-w-[28rem] flex-wrap items-center justify-center gap-[1rem] xl:justify-start xl:gap-[2rem]">
                {caseStudy.Tools.map((item) => (
                  <li key={item.id} className="h-[2.2rem]">
                    <img
                      src={getStrapiMedia(item.url)}
                      alt={item.alternativeText || "Technology logo"}
                      className="h-[2.2rem]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative h-[25rem] w-full md:h-[50rem] lg:h-[65rem] xl:h-[71.6rem]">
            <Image
              src={getStrapiMedia(
                caseStudy.CaseStudyDetails[0].FeaturedImage?.url,
              )}
              alt={
                caseStudy.CaseStudyDetails[0].FeaturedImage.alternativeText ||
                "Featured Image"
              }
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

export default CaseStudyHeroSection;

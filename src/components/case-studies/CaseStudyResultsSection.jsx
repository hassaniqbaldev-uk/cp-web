import Image from "next/image";

const CaseStudyResultsSection = ({ caseStudy }) => {
  return (
    <section className="px-[3rem] pt-[8rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        {/* <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <h4 className="text-text-primary text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
            {caseStudy.CaseStudyDetails[5].Title}
          </h4>

          <p className="text-text-primary mt-[2rem] mb-[3rem] w-full max-w-[98rem] text-[1.8rem] leading-[2.6rem] font-normal">
            {caseStudy.CaseStudyDetails[5].Description}
          </p>

          <div className="grid grid-cols-1 items-start gap-[3.3rem] md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center xl:items-start">
              <span className="text-[8rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#44B276] md:text-[11rem] md:leading-[11rem]">
                {caseStudy.CaseStudyDetails[5].Column1.Label1}
              </span>

              <hr className="mt-[.7rem] mb-[2rem] w-full border-t border-[#000000]/25" />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal tracking-[-0.02em] text-[#070707]">
                {caseStudy.CaseStudyDetails[5].Column1.Label2}
              </span>
            </div>

            <div className="flex flex-col items-center xl:items-start">
              <span className="text-[8rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#007BFF] md:text-[11rem] md:leading-[11rem]">
                {caseStudy.CaseStudyDetails[5].Column2.Label1}
              </span>

              <hr className="mt-[.7rem] mb-[2rem] w-full border-t border-[#000000]/25" />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal tracking-[-0.02em] text-[#070707]">
                {caseStudy.CaseStudyDetails[5].Column2.Label2}
              </span>
            </div>

            <div className="flex flex-col items-center xl:items-start">
              <span className="text-[8rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#FFC300] md:text-[11rem] md:leading-[11rem]">
                {caseStudy.CaseStudyDetails[5].Column3.Label1}
              </span>

              <hr className="mt-[.7rem] mb-[2rem] w-full border-t border-[#000000]/25" />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal tracking-[-0.02em] text-[#070707]">
                {caseStudy.CaseStudyDetails[5].Column3.Label2}
              </span>
            </div>

            <div className="flex flex-col items-center xl:items-start">
              <span className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]">
                {caseStudy.CaseStudyDetails[5].Column4.Label1}
              </span>

              <hr className="mt-[.7rem] mb-[2rem] w-full border-t border-[#000000]/25" />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal tracking-[-0.02em] text-[#070707]">
                {caseStudy.CaseStudyDetails[5].Column4.Label2}
              </span>
            </div>
          </div>
        </div> */}

        <div className="relative h-[25rem] w-full overflow-hidden rounded-[2rem] md:h-[50rem] lg:h-[61.2rem]">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${caseStudy.CaseStudyDetails[5].MainImage.url}`}
            alt={caseStudy.CaseStudyDetails[5].MainImage.alternativeText}
            fill
            priority
            className="size-full"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyResultsSection;

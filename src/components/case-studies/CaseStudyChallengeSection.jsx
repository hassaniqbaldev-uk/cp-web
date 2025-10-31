import Image from "next/image";

const CaseStudyChallengeSection = ({ caseStudy }) => {
  return (
    <section className="px-[3rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center gap-[3.3rem] xl:flex-row xl:items-start">
          <div className="relative h-[40rem] w-full overflow-hidden rounded-tl-[2rem] rounded-tr-[2rem] md:h-[51.4rem] md:w-[37.9rem]">
            <div
              className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[4.8rem] w-full select-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #FFFFFF 100%)",
              }}
            />

            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${caseStudy.CaseStudyDetails[2].GridImage1.url}`}
              alt={caseStudy.CaseStudyDetails[2].GridImage1.alternativeText}
              fill
              priority
              className="size-full"
              unoptimized
            />
          </div>

          <div className="flex w-full flex-col justify-between gap-[3rem] lg:w-[78.5rem]">
            <div className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left">
              <h4 className="text-text-primary text-[4rem] leading-[5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem]">
                {caseStudy.CaseStudyDetails[2].Title}
              </h4>

              <p className="text-text-primary overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal md:line-clamp-4">
                {caseStudy.CaseStudyDetails[2].Description}
              </p>
            </div>

            <div className="flex flex-col items-center justify-between gap-[3rem] lg:flex-row lg:items-end">
              <div className="relative h-[30rem] w-[27.6rem]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${caseStudy.CaseStudyDetails[2].GridImage2.url}`}
                  alt={caseStudy.CaseStudyDetails[2].GridImage2.alternativeText}
                  fill
                  priority
                  className="size-full object-cover"
                  unoptimized
                />
              </div>

              <div className="flex w-full flex-col items-center justify-between gap-[1rem] md:w-[47rem] lg:items-start">
                <div className="size-[6.6rem]">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${caseStudy.CaseStudyDetails[2].GridImage3.url}`}
                    alt={
                      caseStudy.CaseStudyDetails[2].GridImage3.alternativeText
                    }
                    className="size-full"
                  />
                </div>

                <ul className="flex flex-col gap-[1.5rem]">
                  {caseStudy.CaseStudyDetails[2].Lists.map((item) => (
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
      </div>
    </section>
  );
};

export default CaseStudyChallengeSection;

import Image from "next/image";
import Marquee from "react-fast-marquee";

const CaseStudySolutionSection = ({ caseStudy }) => {
  return (
    <section
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
      className="py-[8rem]"
    >
      <div className="mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
        <h4 className="text-center text-[4rem] leading-[5rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem] xl:text-left">
          {caseStudy.CaseStudyDetails[4].Title}
        </h4>

        <p className="mt-[2rem] mb-[4rem] max-w-[110rem] text-center text-[2rem] leading-[3.5rem] font-medium tracking-[-1px] text-white md:text-[2.6rem] md:leading-[4.4rem] xl:text-left">
          {caseStudy.CaseStudyDetails[4].Description}
        </p>
      </div>

      <div className="mt-[5rem]">
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {caseStudy.CaseStudyDetails[4].SliderImages.map((item) => (
            <div key={item.id} className="mx-[.7rem] flex-shrink-0">
              <div className="relative inline-block h-[22rem] w-[30rem] overflow-hidden rounded-[2rem] md:h-[32.6rem] md:w-[47rem]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.url}`}
                  alt={item.alternativeText}
                  fill
                  priority
                  className="size-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default CaseStudySolutionSection;

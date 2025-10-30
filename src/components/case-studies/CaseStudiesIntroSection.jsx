import SectionDescription from "@/components/common/SectionDescription";
import SectionLabel2 from "@/components/common/SectionLabel2";
import SectionTitle from "@/components/common/SectionTitle";

const CaseStudiesIntroSection = () => {
  return (
    <section className="pt-[18rem] pb-[6.8rem] md:pt-[20.6rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left">
          <div className="rotate-[2deg]">
            <SectionLabel2
              text="Our Work"
              bgColor="bg-[#FFC300]"
              textColor="text-black"
            />
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-[2rem] xl:flex-row xl:gap-[0rem]">
            <div className="max-w-[40rem]">
              <SectionTitle label="Real projects. Real results." />
            </div>

            <div className="max-w-[50rem]">
              <SectionDescription label="We've partnered with clients from startups to global brands, designing websites and brands that drive growth and lasting impact." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesIntroSection;

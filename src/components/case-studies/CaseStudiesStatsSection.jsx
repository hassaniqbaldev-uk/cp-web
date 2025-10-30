const CaseStudiesStatsSection = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-[120rem]">
        <div className="relative hidden grid-cols-3 gap-[3.3rem] xl:grid">
          <div className="rounded-[3rem] bg-[#FFC300]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              95 <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Client Satisfaction Rate
            </p>
          </div>

          <div className="rounded-[3rem] bg-[#FF37B3]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              200 <span className="text-[5rem] leading-[8rem]">+</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="max-w-[27.3rem] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Projects Delivered
            </p>
          </div>

          <div className="rounded-[3rem] bg-[#F14A58]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              65 <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>

            <hr className="h-[1px] w-full border-0 bg-black/40" />

            <p className="max-w-[32rem] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Faster Launch Times
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesStatsSection;

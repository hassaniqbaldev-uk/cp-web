const CaseStudyResultsSection = () => {
  return (
    <section className="py-[8rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-start">
          <h4 className="text-text-primary text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
            Results
          </h4>

          <p className="text-text-primary mt-[2rem] mb-[3rem] w-full max-w-[98rem] text-[1.8rem] leading-[2.6rem] font-normal">
            The new website has delivered clear, measurable improvements:
          </p>

          <div className="grid grid-cols-4 items-start gap-[3.3rem]">
            <div className="flex flex-col items-start">
              <span className="text-[11rem] leading-[11rem] font-normal tracking-[-0.02em] text-[#44B276]">
                3.2x
              </span>

              <hr className="mt-[.7rem] mb-[2rem] w-full border-t border-[#000000]/25" />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal tracking-[-0.02em] text-[#070707]">
                Faster page load speeds
              </span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-[11rem] leading-[11rem] font-normal tracking-[-0.02em] text-[#007BFF]">
                29%
              </span>

              <hr className="mt-[.7rem] mb-[2rem] w-full border-t border-[#000000]/25" />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal tracking-[-0.02em] text-[#070707]">
                Increase in click-through rates
              </span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-[11rem] leading-[11rem] font-normal tracking-[-0.02em] text-[#FFC300]">
                2.7%
              </span>

              <hr className="mt-[.7rem] mb-[2rem] w-full border-t border-[#000000]/25" />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal tracking-[-0.02em] text-[#070707]">
                Reduction in drop-off rates
              </span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]">
                Higher organic visibility
              </span>

              <hr className="mt-[.7rem] mb-[2rem] w-full border-t border-[#000000]/25" />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal tracking-[-0.02em] text-[#070707]">
                For cloud software and data management keywords
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[9rem] h-[61.2rem] w-full bg-pink-300">Image</div>
      </div>
    </section>
  );
};

export default CaseStudyResultsSection;

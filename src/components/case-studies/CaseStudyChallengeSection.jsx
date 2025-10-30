const CaseStudyChallengeSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-[120rem]">
        <div className="flex gap-[3.3rem]">
          <div className="relative h-[51.4rem] w-[37.9rem] bg-black">
            <div
              className="pointer-events-none absolute bottom-0 left-0 z-0 h-[4.8rem] w-full select-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #FFFFFF 100%)",
              }}
            />
          </div>

          <div className="flex w-[78.5rem] flex-col justify-between gap-[3rem]">
            <div className="flex flex-col gap-[2rem]">
              <h4 className="text-text-primary text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
                The Challenge
              </h4>

              <p className="text-text-primary line-clamp-4 overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal">
                The previous New Compass website, built in Webflow, struggled to
                scale with the company's growth. It lacked the flexibility and
                SEO optimisation needed to compete in the software industry. The
                design felt flat and didn't capture the bold, modern identity of
                the brand. The goals were clear:
              </p>
            </div>

            <div className="flex justify-between gap-[3rem]">
              <div className="h-[30rem] w-[27.6rem] bg-orange-400"></div>

              <div className="flex w-[47rem] flex-col justify-between gap-[1rem]">
                <div className="size-[6.6rem] bg-green-400"></div>

                <ul className="flex flex-col gap-[1.5rem]">
                  {[
                    "Showcase their cutting-edge software solutions",
                    "Improve performance and user experience",
                    "Provide scalability for future growth",
                    "Strengthen SEO and online visibility",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-[.8rem] border-b border-[#000000]/25 pb-[1.5rem] last:border-0"
                    >
                      <i className="relative top-[.7rem] min-w-max">
                        <div className="size-[1rem] rounded-full border-2 border-[#FF37B3]" />
                      </i>

                      <span className="text-text-primary line-clamp-2 overflow-hidden text-[1.8rem] leading-[2.4rem]">
                        {item}
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

const CaseStudyApproachSection = () => {
  return (
    <section className="py-[8rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="case-study-approach-card h-[56.5rem] w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 select-none">
            <div className="absolute top-[-25.8rem] right-[16.9rem] size-[51.5rem] rounded-full bg-[blue]"></div>
            <div className="absolute right-[0rem] bottom-[-25.7rem] size-[51.5rem] rounded-full bg-[green]"></div>
            <div className="absolute top-[22rem] right-[25.2rem]">
              <img
                src="/images/dash-line.svg"
                alt="Image"
                className="max-w-[17.8rem]"
              />
            </div>
          </div>

          <div className="relative z-[10] size-full px-[6rem] py-[7.3rem]">
            <div className="flex flex-col gap-[2rem]">
              <h4 className="text-text-primary text-[4.8rem] leading-[6rem] font-semibold tracking-[-0.02em]">
                Our Approach
              </h4>

              <p className="text-text-primary line-clamp-4 max-w-[41.2rem] overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal">
                Working closely with New Compass, Creative Pixels used a
                design-thinking process to define goals and create a
                user-focused experience. We:
              </p>

              <ul className="flex max-w-[51.5rem] flex-col gap-[1.5rem]">
                {[
                  "Mapped user journeys to highlight decision points",
                  "Designed a dark, modern visual style in Figma",
                  "Created wireframes and prototypes for early feedback",
                  "Migrated the website from Webflow to WordPress + Elementor for flexibility and easier content management",
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
    </section>
  );
};

export default CaseStudyApproachSection;

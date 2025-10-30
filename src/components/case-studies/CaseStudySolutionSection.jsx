import Marquee from "react-fast-marquee";

const CaseStudySolutionSection = () => {
  return (
    <section
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
      className="py-[8rem]"
    >
      <div className="mx-auto max-w-[120rem]">
        <h4 className="text-[2.5rem] leading-[3.5rem] font-semibold tracking-[-0.02em] text-white md:text-[4rem] md:leading-[5rem] lg:text-[4.8rem] lg:leading-[6rem]">
          The Solution
        </h4>

        <p className="mt-[2rem] mb-[4rem] max-w-[110rem] text-[2rem] leading-[3.5rem] font-medium tracking-[-1px] text-white md:text-[2.6rem] md:leading-[4.4rem]">
          The redesigned website balances bold branding with functionality.
          Built in WordPress with Elementor, it gives the New Compass team full
          control while ensuring consistency across pages. We introduced subtle
          animations to add polish without slowing down performance. The design
          showcases the complexity of their software in an accessible,
          professional way - building trust with enterprise clients.
        </p>
      </div>

      <div className="mt-[5rem]">
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {[
            "caseStudy.imageColumn8",
            "caseStudy.imageColumn9",
            "caseStudy.imageColumn10",
            "caseStudy.imageColumn11",
            "caseStudy.imageColumn12",
          ].map((item, idx) => (
            <div key={idx} className="mx-[.7rem] flex-shrink-0">
              <div className="relative inline-block h-[22rem] w-[30rem] overflow-hidden rounded-[2rem] bg-amber-300 md:h-[32.6rem] md:w-[47rem]"></div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default CaseStudySolutionSection;

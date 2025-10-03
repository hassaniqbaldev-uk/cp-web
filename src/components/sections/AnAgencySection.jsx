"use client";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";

const AnAgencySection = () => {
  return (
    <section className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[8.8rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <CLetter2 className="absolute top-[2rem] right-[-13rem] h-[60.3rem] w-[40rem]" />
      </div>

      <div className="relative mx-auto flex max-w-[113rem] flex-col items-center gap-[2rem] text-center">
        <h2 className="text-[3.5rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[4.5rem] md:leading-[5.6rem] lg:text-[5.6rem] lg:leading-[6.4rem]">
          An agency, for your agency
        </h2>

        <p className="max-w-[103rem] text-[2.4rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.8rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          Expand your services, take on more clients, and deliver results, all
          without the overhead of hiring in-house.
        </p>

        <p className="text-[2.4rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#EE8D00] md:text-[2.8rem] md:leading-[3.8rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
          Access web and graphics designers, developers, and long-term support
          all under your own brand.
        </p>
      </div>
    </section>
  );
};

export default AnAgencySection;

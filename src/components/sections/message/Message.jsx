"use client";
import ServicesLogoShape from "@/components/decorative-elements/ServicesLogoShape";
import { MotionEffect } from "@/components/effects/motion-effect";

const Message = () => {
  return (
    <section className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[8.8rem]">
      {/*Background Element*/}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <ServicesLogoShape className="pointer-events-none absolute top-[2rem] right-[-1rem] h-[7.1rem] w-[5.2rem] rotate-[-34deg] select-none md:top-[7.8rem] md:h-[17.7rem] md:w-[12.9rem]" />
      </div>

      <div className="relative mx-auto flex max-w-[113rem] flex-col items-center gap-[2rem] text-center">
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          zoom
          inView
          delay={0.1}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[3.5rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[4.5rem] md:leading-[5.6rem] lg:text-[5.6rem] lg:leading-[6.4rem]">
            An agency, for your agency
          </h2>
        </MotionEffect>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          zoom
          inView
          delay={0.25}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <p className="max-w-[103rem] text-[2.4rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.8rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
            Expand your services, take on more clients, and deliver results, all
            without the overhead of hiring in-house.
          </p>
        </MotionEffect>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          zoom
          inView
          delay={0.4}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[2.4rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#EE8D00] md:text-[2.8rem] md:leading-[3.8rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
            Access web and graphics designers, developers, and long-term support
            all under your own brand.
          </p>
        </MotionEffect>
      </div>
    </section>
  );
};

export default Message;

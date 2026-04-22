"use client";

import dynamic from "next/dynamic";
import { MotionEffect } from "../effects/motion-effect";

const LpResultSlider = dynamic(() => import("@/components/ui/LpResultSlider"), {
  ssr: false,
});

const LpResultSection = () => {
  return (
    <section className="px-[2rem] pt-[5rem] pb-[6rem] md:pb-[8rem] xl:px-[0rem] xl:pt-[10rem] xl:pb-[12rem]">
      <MotionEffect
        slide={{ direction: "down" }}
        fade
        inView
        delay={0.5}
        transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <div
            style={{
              background:
                "linear-gradient(184.61deg, #F8E19E 3.73%, #F5A267 90.31%, #EE7621 130.8%)",
            }}
            className="flex flex-col items-center gap-[3rem] rounded-[2rem] px-[2rem] pt-[3rem] md:gap-[5rem] md:rounded-[3rem] md:pt-[5rem] lg:gap-[6rem] lg:pt-[7rem] xl:px-[0rem]"
          >
            <div className="flex flex-col items-center gap-[1rem] text-center">
              <h2 className="text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[4rem] md:leading-[5.5rem] lg:text-[5.5rem] lg:leading-[6.5rem] xl:text-[6.5rem] xl:leading-[7.5rem]">
                Built to Deliver Measurable Results
              </h2>

              <p className="text-[2rem] leading-[2.5rem] font-normal tracking-normal text-[#312749]">
                Our focus is simple improve how your website performs:
              </p>
            </div>

            <div className="mb-[-3.2rem]">
              <LpResultSlider />
            </div>
          </div>
        </div>
      </MotionEffect>
    </section>
  );
};

export default LpResultSection;

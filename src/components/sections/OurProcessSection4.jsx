"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";

const OurProcessSection4 = () => {
  const container = useRef();
  const labelRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        labelRef.current,
        { rotate: "-2deg" },
        {
          rotation: "+=3",
          duration: 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          repeatDelay: 0.5,
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[10rem]"
      style={{
        background:
          "url('/images/our-process-gradient-bg.png') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-5.8rem] left-[-103.9rem] w-full" />
      </div>

      <div className="absolute inset-0 z-[0] hidden xl:block">
        <CLetter2 className="absolute top-[-6rem] right-[-10rem] w-[30rem] rotate-[-20deg]" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Process"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="mt-[2rem] mb-[.7rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
            Our Step-by-Step Approach to Keeping Your Site at Its Best
          </h4>
        </div>

        <div className="relative mt-[6rem]">
          <div className="grid grid-cols-3 gap-[3.3rem]">
            <div className="relative size-full p-[3rem] pr-[0rem]">
              <div className="our-process-4-glass !absolute top-0 left-0 h-full w-[27.6rem]" />

              <div className="relative z-[10] rounded-[1.8rem] bg-[#FFC300] px-[4rem] py-[2.8rem]">
                <span className="text-[1.8rem] leading-[2.6rem] font-bold text-white uppercase">
                  STEP #1
                </span>

                <div className="mt-[2.5rem] flex flex-col gap-[1.2rem]">
                  <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                    Discovery & Strategy Planning
                  </h4>

                  <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                    Flexible, supported by data, and designed for success—at all
                    phases of the funnel. libero eget volutpat porta.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative size-full p-[3rem] pr-[0rem]">
              <div className="our-process-4-glass !absolute top-0 left-0 h-full w-[27.6rem]" />

              <div className="relative z-[10] rounded-[1.8rem] bg-[#F14A58] px-[4rem] py-[2.8rem]">
                <span className="text-[1.8rem] leading-[2.6rem] font-bold text-white uppercase">
                  STEP #2
                </span>

                <div className="mt-[2.5rem] flex flex-col gap-[1.2rem]">
                  <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                    Discovery & Strategy Planning
                  </h4>

                  <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                    Flexible, supported by data, and designed for success—at all
                    phases of the funnel. libero eget volutpat porta.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative size-full p-[3rem] pr-[0rem]">
              <div className="our-process-4-glass !absolute top-0 left-0 h-full w-[27.6rem]" />

              <div className="relative z-[10] rounded-[1.8rem] bg-[#3078FF] px-[4rem] py-[2.8rem]">
                <span className="text-[1.8rem] leading-[2.6rem] font-bold text-white uppercase">
                  STEP #3
                </span>

                <div className="mt-[2.5rem] flex flex-col gap-[1.2rem]">
                  <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                    Discovery & Strategy Planning
                  </h4>

                  <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                    Flexible, supported by data, and designed for success—at all
                    phases of the funnel. libero eget volutpat porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection4;

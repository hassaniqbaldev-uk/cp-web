"use client";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import { ourProcessData } from "@/constants/wpElementorPage";

const OurProcessSection2 = () => {
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
      {/* Bg Lines */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-end select-none">
        <div className="flex w-full flex-col gap-[6rem] pb-[5.4rem]">
          {Array.from({ length: 8 }).map((_, index) => (
            <hr
              key={index}
              className="w-full border-t border-dashed border-white/15"
            />
          ))}
        </div>
      </div>

      <div className="relative z-[10] mx-auto max-w-[123rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Process"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="mt-[2rem] mb-[.7rem] max-w-[103.1rem] text-center text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
            Our Innovative WordPress Process
          </h4>

          <p className="max-w-[73rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
            Enhance your online visibility with a high-performing website that
            captivates users, drives conversions, and provides quantifiable
            outcomes.
          </p>
        </div>

        <div className="relative mt-[6rem] flex h-[42rem] items-start justify-between">
          {ourProcessData.map((item, i) => (
            <div
              key={i}
              className={`relative w-[22rem] rounded-[1.8rem] px-[.8rem] pb-[.8rem] ${item.rotation} ${item.top}`}
              style={{
                background:
                  "linear-gradient(301.75deg, rgba(29, 29, 29, 0.1) 1.41%, rgba(255, 255, 255, 0.1) 95.05%)",
                backdropFilter: "blur(10px)",
                boxShadow: "11.86px 13.55px 20.33px 0px #00000026",
              }}
            >
              {/* Dots */}
              <div className="flex items-center justify-end gap-[3px] px-[.6rem] py-[1.6rem]">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="size-[.8rem] rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="our-process-2-card flex w-full flex-col items-start gap-[3.4rem] p-[2rem]">
                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                  {item.step}
                </span>

                <div className="flex flex-col items-start gap-[.8rem]">
                  <h5
                    className="text-[1.8rem] leading-[2.6rem] font-bold"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h5>
                  <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection2;

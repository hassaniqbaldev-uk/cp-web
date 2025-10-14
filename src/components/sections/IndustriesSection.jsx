"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import SectionLabel2 from "../common/SectionLabel2";
import { industriesData } from "@/constants/uiUxPage";

const IndustriesSection = () => {
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
    <section ref={container} className="relative pt-[10rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[30.5rem] left-[-103.9rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Industries"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="mt-[2rem] mb-[.7rem] max-w-[103rem] text-center text-[6rem] leading-[7.4rem] font-bold tracking-[-0.03em]">
            Design solutions built for every sector
          </h4>

          <p className="max-w-[70rem] text-[2.2rem] leading-[3.2rem] font-medium">
            From websites to apps and dashboards, our Figma-first UI/UX design
            and development-ready workflows adapt to any industry.
          </p>
        </div>

        <div className="mt-[5rem] grid grid-cols-5 items-start gap-[2rem]">
          {industriesData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center"
              >
                <Icon className="size-[8.2rem]" />

                <h5 className="mt-[2rem] mb-[1rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                  {item.title}
                </h5>

                <p className="text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

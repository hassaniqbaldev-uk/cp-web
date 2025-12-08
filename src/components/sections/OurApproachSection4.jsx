"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import ComputerIcon from "@/assets/icons/computer-icon.svg";
import { approachCards } from "@/constants/maintenanceGrowthPage";
import RatingStar from "@/assets/icons/rating-star.svg";

const OurApproachSection4 = () => {
  const labelRef = useRef();
  const container = useRef();

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
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      className="relative px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[10rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-12rem] left-[-103.9rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex w-full flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Approach"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h2 className="mt-[2.4rem] max-w-[75rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.2rem] md:leading-[6rem]">
            Managing With Website Maintenance Challenges?
          </h2>
        </div>

        <div className="mt-[5rem] grid w-full grid-cols-1 gap-[3.3rem] md:grid-cols-3">
          {approachCards.map((item, idx) => (
            <div
              key={idx}
              className="flex w-full items-center gap-[1.5rem] rounded-[2rem] px-[2.2rem] py-[1.7rem]"
              style={{ backgroundColor: item.bgColor }}
            >
              <i className="inline-flex size-[5.6rem] items-center justify-center rounded-[1.6rem] bg-white">
                <ComputerIcon
                  className="h-[2.2rem] w-[2.5rem]"
                  style={{ fill: item.iconColor }}
                />
              </i>

              <span className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div className="our-approach-4-glass mt-[10rem] grid grid-cols-3 gap-[6rem] px-[4.7rem] py-[3.5rem]">
          <div className="flex items-center gap-[1.8rem]">
            <h5 className="text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em]">
              4.77
            </h5>

            <div className="flex flex-col gap-[.8rem]">
              <RatingStar />

              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                1,943 rating
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[1.8rem]">
            <h5 className="text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em]">
              96%
            </h5>

            <div className="flex flex-col gap-[.8rem]">
              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                Genuine client's positive feedback
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[1.8rem]">
            <h5 className="text-[7rem] leading-[8.4rem] font-bold tracking-[-0.03em]">
              200+
            </h5>

            <div className="flex flex-col gap-[.8rem]">
              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                Daily expert business advice
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection4;

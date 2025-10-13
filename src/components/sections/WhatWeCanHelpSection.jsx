"use client";
import { whatWeCanHelpData } from "@/constants/uiUxPage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";

const WhatWeCanHelpSection = () => {
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
      className="relative h-screen px-[3rem] xl:px-[0rem]"
    >
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Services"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h2 className="mt-[2rem] text-[5.6rem] leading-[6.4rem] font-semibold tracking-[-0.02em] text-[#070707]">
            What we can help you with
          </h2>
        </div>

        <div className="mt-[5rem] grid grid-cols-3 gap-x-[3rem] gap-y-[4rem]">
          {whatWeCanHelpData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="flex h-full flex-col items-start justify-between"
              >
                <div>
                  <div className="flex items-center gap-[1.5rem]">
                    <i
                      className={`flex size-[5.6rem] items-center justify-center rounded-[1.6rem] ${card.iconBg}`}
                    >
                      <IconComponent className={card.iconWidth} />
                    </i>
                    <span className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                      {card.title}
                    </span>
                  </div>
                  <p className="mt-[2rem] mb-[3.2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                    {card.description}
                  </p>
                </div>
                <hr className="h-[1px] w-full border-0 bg-[#9c9c9c]/40" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanHelpSection;

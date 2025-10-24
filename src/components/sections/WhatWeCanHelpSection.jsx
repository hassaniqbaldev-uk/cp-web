"use client";
import { whatWeCanHelpData } from "@/constants/uiUxPage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import WhatWeCanHelpSlider from "../common/WhatWeCanHelpSlider";

const WhatWeCanHelpSection = () => {
  const labelRef = useRef();
  const container = useRef();
  const lineRef = useRef();

  useGSAP(
    () => {
      if (lineRef.current) {
        const path = lineRef.current.querySelector("path");
        if (path) {
          const length = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 250%",
              end: "bottom 20%",
              scrub: true,
            },
          });
        }
      }

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

      gsap.fromTo(
        labelRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".what-we-can-help-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".what-we-can-help-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".what-we-can-help-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            each: 0.2,
            from: "start",
          },
          scrollTrigger: {
            trigger: ".what-we-can-help-card",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <section ref={container} className="relative px-[3rem] xl:px-[0rem]">
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-15.4rem] left-[-115.8rem] w-full" />
      </div>

      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Services"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h2 className="what-we-can-help-heading mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.6rem] md:leading-[6.4rem]">
            What we can help you with
          </h2>
        </div>

        <div className="mt-[5rem] hidden grid-cols-3 gap-x-[3rem] gap-y-[4rem] lg:grid">
          {whatWeCanHelpData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="what-we-can-help-card flex h-full flex-col items-start justify-between"
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

        <div className="mt-[5rem] block w-full lg:hidden">
          <WhatWeCanHelpSlider />
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanHelpSection;

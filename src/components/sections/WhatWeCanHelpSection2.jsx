"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke34 from "@/assets/decorative-elements/line-stroke-34.svg";
import { whatWeCanHelpData2 } from "@/constants/wpElementorPage";
import WhatWeCanHelpSlider2 from "../common/WhatWeCanHelpSlider2";

const WhatWeCanHelpSection2 = () => {
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
              start: "top 80%",
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
        ".what-we-can-help-section-2-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".what-we-can-help-section-2-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".what-we-can-help-section-2-cards",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            each: 0.2,
          },
          scrollTrigger: {
            trigger: ".what-we-can-help-section-2-cards",
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
    <section
      ref={container}
      className="relative px-[3rem] pb-[8rem] xl:px-[0rem]"
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="pointer-events-none absolute inset-0 z-[1]">
        <LineStroke34 className="absolute top-[5rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Services"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h2 className="what-we-can-help-section-2-heading mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.6rem] md:leading-[6.4rem]">
            What we can help you with
          </h2>
        </div>

        <div className="mt-[5rem] hidden grid-cols-3 gap-[3rem] lg:grid">
          {whatWeCanHelpData2.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="what-we-can-help-section-2-cards rounded-[1.8rem] px-[.8rem] pt-[.8rem] pb-[4rem]"
                style={{
                  background: card.bgGradient,
                }}
              >
                <div
                  className="flex h-full flex-col items-start justify-between rounded-[1.2rem] bg-white p-[3.2rem]"
                  style={{
                    boxShadow: "0px 14px 20.33px 0px #00000026",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-[1.5rem]">
                      <div className="min-w-max">
                        <IconComponent className={card.iconWidth} />
                      </div>

                      <span className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                        {card.title}
                      </span>
                    </div>
                    <p className="mt-[2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-[5rem] block w-full lg:hidden">
          <WhatWeCanHelpSlider2 />
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanHelpSection2;

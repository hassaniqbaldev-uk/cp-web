"use client";
import SectionDescription from "../common/SectionDescription";
import FaqTab from "../common/FaqTab";
import TextMarquee from "../common/TextMarquee";
import CtaSection2 from "../common/CtaSection2";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke18 from "@/assets/decorative-elements/line-stroke-18.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { generalQAData } from "@/constants/agenciesPage";

const GeneralQASection2 = () => {
  const labelRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const tabRef = useRef();

  useEffect(() => {
    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

    const tl = gsap.timeline();

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })

      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })

      .to(tabRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
  }, []);

  return (
    <section className="relative pt-[5rem] xl:pt-[12rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke18 className="absolute top-[43.6rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center gap-[2rem] px-[3rem] text-center xl:items-start xl:px-[0rem] xl:text-left">
        <div ref={labelRef} className="inline-flex rotate-[2deg]">
          <SectionLabel2 text="General Question & Answers" />
        </div>

        <h2
          ref={headingRef}
          className="text-[4rem] leading-[5rem] font-semibold tracking-[-0.02em] opacity-0 md:text-[5.6rem] md:leading-[6.4rem]"
        >
          Questions and Answers
        </h2>

        <div className="mt-[5rem] grid grid-cols-1 gap-[4.3rem] lg:grid-cols-2">
          {generalQAData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left"
            >
              <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                <item.icon />
              </div>

              <div className="flex flex-col gap-[.5rem]">
                <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  {item.question}
                </h4>
                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralQASection2;

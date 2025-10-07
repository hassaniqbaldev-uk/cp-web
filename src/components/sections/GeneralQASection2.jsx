"use client";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke18 from "@/assets/decorative-elements/line-stroke-18.svg";
import { generalQAData } from "@/constants/agenciesPage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const GeneralQASection2 = () => {
  const lineRef = useRef(); // Ref for the line
  const labelRef = useRef();
  const container = useRef();

  useGSAP(
    () => {
      const splitHeading = new SplitText(
        container.current.querySelector(".general-qa-heading"),
        {
          type: "lines",
          linesClass: "line",
        },
      );

      // Line draw animation
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
              end: "bottom 40%",
              scrub: true, // Smooth scrubbing
            },
          });
        }
      }

      // Wobble/shake animation
      gsap.fromTo(
        labelRef.current,
        { rotate: "-2deg" },
        {
          rotation: "+=3", // Rotate 3 degrees back and forth
          duration: 0.15, // Very short duration for quick wobble
          yoyo: true, // Go back and forth
          repeat: -1, // Infinite repeat
          ease: "sine.inOut", // Best ease for wobble effects
          repeatDelay: 0.5, // Small pause between wobbles
        },
      );

      // Independent Label Animation
      gsap.fromTo(
        labelRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      // Timeline for heading
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".general-qa-heading",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      headingTl.fromTo(
        splitHeading.lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.3",
      );

      // Timeline for Grid Card
      const gridCardTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".general-qa-grid-card",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      gridCardTl.fromTo(
        ".general-qa-grid-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.3",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="relative pt-[5rem] xl:pt-[12rem]">
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke18 className="absolute top-[43.6rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center gap-[2rem] px-[3rem] text-center xl:items-start xl:px-[0rem] xl:text-left">
        <div className="inline-flex" ref={labelRef}>
          <SectionLabel2 text="General Question & Answers" />
        </div>

        <h2 className="general-qa-heading overflow-hidden text-[4rem] leading-[5rem] font-semibold tracking-[-0.02em] md:text-[5.6rem] md:leading-[6.4rem]">
          Questions and Answers
        </h2>

        <div className="mt-[5rem] grid grid-cols-1 gap-[4.3rem] lg:grid-cols-2">
          {generalQAData.map((item, idx) => (
            <div
              key={idx}
              className="general-qa-grid-card flex flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left"
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

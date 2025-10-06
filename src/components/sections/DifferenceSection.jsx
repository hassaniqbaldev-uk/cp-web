"use client";

import SectionTitle from "../common/SectionTitle";
import { Switch } from "@/components/ui/switch";
import {
  withDifferenceData,
  withoutDifferenceData,
} from "@/constants/agenciesPage";
import { useState } from "react";
import LineStroke26 from "@/assets/decorative-elements/line-stroke-26.svg";
import DifferenceSlider from "../common/DifferenceSlider";
import DifferenceSlider2 from "../common/DifferenceSlider2";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const DifferenceSection = () => {
  const [isWith, setIsWith] = useState(true); // default: show "With"
  const container = useRef();
  const lineRef = useRef(); // Ref for the line

  useGSAP(
    () => {
      const splitHeading = new SplitText(
        container.current.querySelector(".difference-heading"),
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
              end: "bottom 20%",
              scrub: true, // Smooth scrubbing
            },
          });
        }
      }

      // Timeline for heading
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".difference-heading",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      headingTl
        .to(
          ".difference-heading",
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "<0.1",
        )
        .fromTo(
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

      // Independent switch animation
      gsap.to(".switch", {
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: ".switch",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Independent card animation
      gsap.to(".switch-card", {
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: ".switch-card",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      return () => {
        splitHeading.revert();
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative px-[3rem] pt-[5rem] pb-[5rem] xl:px-[0rem] xl:pt-[8.4rem] xl:pb-[9.2rem]"
      style={{
        background:
          "url('/images/why-choose-us-gradient-bg.webp') no-repeat center / cover",
      }}
    >
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke26 className="absolute top-[35rem] left-1/2 w-full -translate-x-1/2 xl:top-[48rem]" />
      </div>

      <div className="mx-auto max-w-[124.7rem]">
        <div className="difference-heading overflow-hidden text-center opacity-0">
          <SectionTitle
            label="The white label difference..."
            textColor="text-white"
          />
        </div>

        <div className="mt-[3rem] flex flex-col items-center gap-[5rem]">
          <div className="switch flex items-center justify-center gap-[2rem] text-[2.8rem] leading-[3.5rem] font-semibold tracking-[-0.02em] text-white opacity-0 md:gap-[4rem] md:text-[3.4rem] md:leading-[4.8rem]">
            <span>With</span>
            <Switch
              checked={!isWith}
              onCheckedChange={(val) => setIsWith(!val)}
            />
            <span>Without</span>
          </div>

          <div className="switch-card w-full opacity-0">
            {isWith ? (
              <>
                <div
                  className="relative mt-[5rem] hidden h-[32rem] w-full max-w-[120rem] grid-cols-6 gap-[2rem] rounded-[5rem] px-[3rem] xl:grid"
                  style={{
                    background:
                      "url('/images/difference-gradient-bg.svg') no-repeat center / 100% 100%",
                  }}
                >
                  <span className="absolute top-1/2 left-[-10.6rem] inline-flex h-[4rem] -translate-y-1/2 -rotate-90 items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] border-2 border-b-0 border-white/30 px-[6rem] text-center text-[2.2rem] leading-[3.2rem] font-medium text-white">
                    With
                  </span>

                  {withDifferenceData.map((item) => (
                    <div
                      key={item.id}
                      className="relative top-[-2.4rem] flex flex-col items-center gap-[4.4rem] text-center"
                    >
                      <i
                        style={{
                          background:
                            "linear-gradient(301.75deg, rgba(255, 255, 255, 0.1) 1.41%, rgba(157, 157, 157, 0.1) 95.05%)",
                          backdropFilter: "blur(3.3rem)",
                        }}
                        className="relative inline-flex size-[4.9rem] items-center justify-center rounded-[1.2rem] border border-white"
                      >
                        <item.icon />
                      </i>

                      <div className="flex flex-col gap-[1rem]">
                        <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                          {item.title}
                        </h4>

                        <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="block w-full xl:hidden">
                  <DifferenceSlider />
                </div>
              </>
            ) : (
              <>
                <div
                  className="relative mt-[5rem] hidden h-[32rem] w-full max-w-[120rem] grid-cols-6 gap-[2rem] rounded-[5rem] px-[3rem] xl:grid"
                  style={{
                    background:
                      "url('/images/difference-gradient-bg-02.svg') no-repeat center / 100% 100%",
                  }}
                >
                  <span className="absolute top-1/2 right-[-12rem] inline-flex h-[4rem] -translate-y-1/2 rotate-90 items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] border-2 border-b-0 border-white/30 px-[6rem] text-center text-[2.2rem] leading-[3.2rem] font-medium text-white">
                    Without
                  </span>

                  {withoutDifferenceData.map((item) => (
                    <div
                      key={item.id}
                      className="relative top-[-2.4rem] flex flex-col items-center gap-[4.4rem] text-center"
                    >
                      <i
                        style={{
                          background:
                            "linear-gradient(301.75deg, rgba(255, 255, 255, 0.1) 1.41%, rgba(157, 157, 157, 0.1) 95.05%)",
                          backdropFilter: "blur(3.3rem)",
                        }}
                        className="relative inline-flex size-[4.9rem] items-center justify-center rounded-[1.2rem] border border-white/30"
                      >
                        <item.icon />
                      </i>

                      <div className="flex flex-col items-center gap-[1rem] text-center">
                        <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                          {item.title}
                        </h4>

                        <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="block w-full xl:hidden">
                  <DifferenceSlider2 />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;

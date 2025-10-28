"use client";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CommonBtn3 from "../common/CommonBtn3";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import KeyBenefitTab from "../common/KeyBenefitTab";

const KeyBenefitSection2 = () => {
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
              start: "top 200%",
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
        ".key-benefit-section-2-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".key-benefit-section-2-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".key-benefit-section-2-tab",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".key-benefit-section-2-tab",
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
      className="relative overflow-hidden px-[3rem] py-[8rem] xl:px-[0rem]"
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-6.8rem] left-[-103.9rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex w-full flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Key Benefits"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>

          <h2 className="key-benefit-section-2-heading mt-[2rem] w-full max-w-[53.8rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[5.6rem] md:leading-[6.4rem]">
            Benefits of Branding Design Services
          </h2>
        </div>

        <div className="key-benefit-section-2-tab mt-[5rem]">
          <KeyBenefitTab />
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitSection2;

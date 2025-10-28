"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import Image from "next/image";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import { whatWeCanHelpData3 } from "@/constants/brandingPage";
import WhatWeCanHelpSlider3 from "../common/WhatWeCanHelpSlider3";

const WhatWeCanHelpSection3 = () => {
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
        ".what-we-can-help-section-3-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".what-we-can-help-section-3-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".what-we-can-help-section-3-left-col",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".what-we-can-help-section-3-left-col",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".what-we-can-help-section-3-right-col",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".what-we-can-help-section-3-right-col",
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
      className="relative my-[-5rem] overflow-hidden rounded-tl-[5rem] rounded-tr-[5rem] bg-white px-[3rem] py-[10rem] xl:px-[0rem]"
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-5.8rem] left-[-103.9rem] w-full" />
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

          <h2 className="what-we-can-help-section-3-heading mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.6rem] md:leading-[6.4rem]">
            What we can help you with
          </h2>
        </div>

        <div className="mt-[4rem] grid grid-cols-1 items-center gap-[4.2rem] xl:grid-cols-2">
          <div className="what-we-can-help-section-3-left-col h-[30rem] w-full overflow-hidden rounded-[.8rem] md:h-[60rem] lg:h-[65rem] xl:h-[50rem]">
            <Image
              src="/images/what-we-can-help-3-card-img.webp"
              width={575}
              height={500}
              alt="Image"
              className="size-full"
              unoptimized
            />
          </div>

          <div className="what-we-can-help-section-3-right-col hidden grid-cols-2 gap-[3rem] md:grid">
            {whatWeCanHelpData3.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-[1.4rem]">
                  <i className="flex min-w-min items-center justify-center">
                    {item.icon}
                  </i>
                  <span className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] whitespace-nowrap text-[#070707]">
                    {item.title}
                  </span>
                </div>
                <p className="mt-[.8rem] mb-[2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                  {item.description}
                </p>
                <hr className="w-full border-t border-[#9c9c9c]/60" />
              </div>
            ))}
          </div>

          <div className="block w-full md:hidden">
            <WhatWeCanHelpSlider3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanHelpSection3;

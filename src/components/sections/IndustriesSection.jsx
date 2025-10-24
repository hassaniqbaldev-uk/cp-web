"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import SectionLabel2 from "../common/SectionLabel2";
import IndustriesSlider from "../common/IndustriesSlider";

const IndustriesSection = ({ labelText, title, description, data = [] }) => {
  const container = useRef();
  const labelRef = useRef();

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 1280;

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
        ".industries-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".industries-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".industries-desc",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".industries-desc",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      if (!isMobile) {
        gsap.fromTo(
          ".industries-card",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: {
              each: 0.2,
              from: "start",
            },
            scrollTrigger: {
              trigger: ".industries-card",
              start: "top 60%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (isMobile) {
        gsap.fromTo(
          ".industries-slider",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".industries-slider",
              start: "top 60%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    },
    { scope: container },
  );
  return (
    <section
      ref={container}
      className="relative px-[3rem] pt-[8rem] xl:px-[0rem] xl:pt-[10rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[30.5rem] left-[-103.9rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text={labelText}
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="industries-heading mt-[2rem] mb-[.7rem] max-w-[103rem] text-center text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] md:text-[6rem] md:leading-[7.4rem]">
            {title}
          </h4>

          <p className="industries-desc max-w-[70rem] text-[1.8rem] leading-[2.8rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
            {description}
          </p>
        </div>

        <div className="mt-[5rem] hidden grid-cols-5 items-start gap-[2rem] lg:grid">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="industries-card flex flex-col items-center justify-center text-center"
            >
              <img src={item.icon} alt="icon" className="size-[8.2rem]" />

              <h5 className="mt-[2rem] mb-[1rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                {item.title}
              </h5>

              <p className="text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="industries-slider mt-[5rem] block w-full lg:hidden">
          <IndustriesSlider data={data} />
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

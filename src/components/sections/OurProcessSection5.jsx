"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import { ourProcessData } from "@/constants/wpElementorPage";
import OurProcessSlider2 from "../common/OurProcessSlider2";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import OurProcessSlider5 from "../common/OurProcessSlider5";

const OurProcessSection5 = () => {
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
        ".our-process-section-5-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".our-process-section-5-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".our-process-section-5-desc",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".our-process-section-5-desc",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      if (!isMobile) {
        gsap.fromTo(
          ".our-process-section-5-cards",
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: {
              each: 0.1,
            },
            scrollTrigger: {
              trigger: ".our-process-section-5-cards",
              start: "top 60%",
              toggleActions: "play none none none",
            },
            ease: "power2.out",
          },
        );
      }

      if (isMobile) {
        gsap.fromTo(
          ".our-process-section-5-cards-slider",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".our-process-section-5-cards-slider",
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
      className="relative my-[-5rem] overflow-hidden rounded-tl-[5rem] rounded-tr-[5rem] bg-white py-[8rem] xl:py-[10rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-5.8rem] left-[-103.9rem] w-full" />
      </div>

      {/* Bg Lines */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-end select-none">
        <div className="flex w-full flex-col gap-[6rem] pb-[5.4rem]">
          {Array.from({ length: 8 }).map((_, index) => (
            <hr
              key={index}
              className="w-full border-t border-dashed border-[#070707]/10"
            />
          ))}
        </div>
      </div>

      <div className="relative z-[10] mx-auto max-w-[123rem] px-[3rem] xl:px-[0rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Process"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="our-process-section-5-heading mt-[2rem] mb-[.7rem] max-w-[103.1rem] text-center text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] md:text-[6rem] md:leading-[7.4rem]">
            Our Innovative Branding Process
          </h4>

          <p className="our-process-section-5-desc max-w-[73rem] text-[1.8rem] leading-[2.6rem] font-normal">
            Enhance your online visibility with a high-performing website that
            captivates users, drives conversions, and provides quantifiable
            outcomes.
          </p>
        </div>

        <div className="relative mt-[6rem] hidden h-[42rem] items-start justify-between xl:flex">
          {ourProcessData.map((item, i) => (
            <div
              key={i}
              className={`our-process-section-5-cards relative w-[22rem] rounded-[1.8rem] px-[.8rem] pb-[.8rem] ${item.rotation} ${item.top}`}
              style={{
                background:
                  "linear-gradient(301.75deg,rgba(255, 255, 255, 0.05) 1.41%,rgba(29, 29, 29, 0.05) 95.05%)",
                backdropFilter: "blur(10px)",
                boxShadow: "11.86px 13.55px 20.33px 0px #00000026",
              }}
            >
              {/* Dots */}
              <div className="flex items-center justify-end gap-[3px] px-[.6rem] py-[1.6rem]">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="size-[.8rem] rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="our-process-5-card flex w-full flex-col items-start gap-[3.4rem] p-[2rem]">
                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#07070]/40">
                  {item.step}
                </span>

                <div className="flex flex-col items-start gap-[.8rem]">
                  <h5
                    className="text-[1.8rem] leading-[2.6rem] font-bold"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h5>
                  <p className="text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]/70">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="our-process-section-5-cards-slider block w-full xl:hidden">
        <OurProcessSlider5 />
      </div>
    </section>
  );
};

export default OurProcessSection5;

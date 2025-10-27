"use client";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CommonBtn3 from "../common/CommonBtn3";
import CheckIcon from "@/assets/icons/check-icon.svg";
import { featureItems } from "@/constants/wpElementorPage";
import LineStroke34 from "@/assets/decorative-elements/line-stroke-34.svg";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";

const FeaturedSection = () => {
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
        ".featured-section-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".featured-section-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".featured-section-description",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".featured-section-description",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".featured-section-cards",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".featured-section-cards",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".featured-section-cta-btn",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".featured-section-cta-btn",
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
      className="relative px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[10rem]"
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="pointer-events-none absolute inset-0 z-[1]">
        <LineStroke34 className="absolute top-[0rem] left-[-103rem] w-full" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <CLetter2 className="absolute top-[-5rem] right-[-20rem] w-[45rem] rotate-[-180deg] xl:top-[0rem] xl:right-[-18.7rem]" />
      </div>

      <div className="relative z-[10] mx-auto flex max-w-[120rem] flex-col items-center text-center xl:items-start xl:text-left">
        <div ref={labelRef}>
          <SectionLabel2
            text="Featured Categories"
            bgColor="bg-[#FFC300]"
            textColor="text-[#070707]"
          />
        </div>

        <h2 className="featured-section-heading mt-[2rem] max-w-[110rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-[#070707] md:text-[6rem] md:leading-[7.4rem]">
          Are you a well-established business in the UK or one that is just
          starting out?
        </h2>

        <p className="] featured-section-description mt-[1.6rem] text-[1.8rem] leading-[2.8rem] font-medium text-[#070707] md:text-[2.2rem] md:leading-[3.2rem]">
          Flexible, supported by data, and designed for success—at all phases of
          the funnel. libero eget volutpat porta, mi felis elementum leo, et
          aliquet orci felis sit amet orci. Donec varius justo eget orci
          laoreet, non bibendum justo cursus. libero eget volutpat porta, mi
          felis elementum leo, et aliquet orci felis sit amet orci.
        </p>

        <div className="my-[4rem] grid grid-cols-1 gap-x-[1rem] gap-y-[1rem] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[10rem]">
          {featureItems.map((item) => (
            <div
              key={item.id}
              className="featured-section-cards flex h-[4.8rem] items-center gap-[1.2rem] rounded-[20rem] border border-[#070707] px-[1.6rem] py-[.8rem]"
            >
              <i
                className={`inline-flex size-[2.4rem] items-center justify-center rounded-full ${item.bgColor}`}
              >
                <CheckIcon className="w-[1.4rem]" />
              </i>

              <span className="text-left text-[1.8rem] leading-[2.8rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="featured-section-cta-btn">
          <CommonBtn3
            label="About CreativePixels"
            href="/about"
            bgColor="#FF37B3"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

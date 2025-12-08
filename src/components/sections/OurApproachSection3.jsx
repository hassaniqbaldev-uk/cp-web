"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import Link from "next/link";
import { ourApproachCards } from "@/constants/smPostPage";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";
import OurApproach3Slider from "../common/OurApproach3Slider";

const OurApproachSection3 = () => {
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
        ".our-approach-section-3-heading",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".our-approach-section-3-heading",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".our-approach-3-card",
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
            trigger: ".our-approach-3-card",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".our-approach-3-contact-card",
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
            trigger: ".our-approach-3-contact-card",
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
      <div ref={lineRef} className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-12rem] left-[-103.9rem] w-full" />
      </div>

      <div className="absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <CLetter2 className="absolute top-[-6rem] right-[-10rem] w-[30rem] rotate-[-20deg]" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex w-full flex-col items-center text-center xl:w-[75rem] xl:items-start xl:text-left">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Approach"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h2 className="our-approach-section-3-heading mt-[2.4rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.2rem] md:leading-[6rem]">
            Creative branding agency based in{" "}
            <span className="text-[#FF37B3]">Manchester</span>
          </h2>
        </div>

        <div className="mt-[5rem] grid w-full grid-cols-1 gap-[3.3rem] md:grid-cols-2">
          {ourApproachCards.map((item, index) => (
            <div
              key={index}
              className="our-approach-3-card flex w-full flex-col items-center justify-between gap-[3rem] p-[3rem] xl:flex-row"
            >
              <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
                <span className="label inline-flex h-[3.2rem] items-center justify-center px-[1.5rem] text-[1.4rem] leading-[2rem] font-medium text-[#070707]">
                  {item.label}
                </span>

                <div className="mt-[1.5rem] flex flex-col gap-[1rem]">
                  <h4 className="text-[2.5rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] lg:text-[3.3rem] lg:leading-[4.7rem]">
                    {item.title}
                  </h4>

                  <p className="max-w-[38rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="w-[12.8rem]">
                <item.Icon />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[3.8rem] grid w-full grid-cols-1 items-center gap-[3.3rem] text-center md:grid-cols-2 xl:grid-cols-3">
          <div className="contact-details-bg our-approach-3-contact-card !px-[2.2rem] !py-[5rem]">
            <Link
              href="tel:01618202667"
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
            >
              0161 820 2667
            </Link>
          </div>

          <div className="contact-details-bg our-approach-3-contact-card !px-[2.2rem] !py-[5rem]">
            <Link
              href="mailto:hello@cp.agency"
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
            >
              hello@cp.agency
            </Link>
          </div>

          <div className="contact-details-bg our-approach-3-contact-card !px-[2.2rem] !py-[5rem] md:col-span-2 xl:col-span-1">
            <button
              data-cal-namespace="15min"
              data-cal-link="hassan-iqbal-mznzu9/15min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="cursor-pointer text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FC529F]"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection3;

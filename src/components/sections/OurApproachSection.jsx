"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import { approachItems } from "@/constants/uiUxPage";
import Link from "next/link";
import OurApproachSlider from "../common/OurApproachSlider";

const OurApproachSection = () => {
  const labelRef = useRef();
  const container = useRef();

  useGSAP(
    () => {
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
        ".our-approach-left-col",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".our-approach-left-col",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".our-approach-right-col-card",
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
            trigger: ".our-approach-right-col-card",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".our-approach-contact-card",
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
            trigger: ".our-approach-contact-card",
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
      className="px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[9.6rem]"
    >
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center justify-between gap-[4rem] xl:flex-row">
          <div className="our-approach-left-col flex w-full flex-col items-center text-center xl:w-[46.6rem] xl:items-start xl:text-left">
            <div ref={labelRef}>
              <SectionLabel2
                text="Our Approach"
                bgColor="bg-[#F14A58]"
                textColor="text-[#ffffff]"
              />
            </div>

            <h2 className="mt-[2.4rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.2rem] md:leading-[6rem]">
              A refined design process that’s clear and collaborative.
            </h2>

            <p className="mt-[1.6rem] mb-[3.8rem] text-[1.8rem] leading-[2.8rem] font-medium text-[#070707] md:text-[2.2rem] md:leading-[3.2rem] xl:max-w-[44.2rem]">
              We keep things focused: every UI/UX project begins with a
              consultation to define your goals. From there, we design in Figma
              and deliver websites, apps, and dashboards that are modern,
              responsive, and ready to build.
            </p>

            <CommonBtn3 label="Book a 15-min free call" href="/contact" />
          </div>

          <div className="hidden w-full grid-cols-2 gap-x-[9rem] gap-y-[2rem] md:grid xl:w-[66rem]">
            {approachItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="our-approach-right-col-card flex flex-col items-center text-center xl:items-start xl:text-left"
                >
                  <div
                    className={`flex size-[8.8rem] items-center justify-center rounded-full ${item.bgColor}`}
                    style={{ boxShadow: "0px 8px 24px -14px #000000B2" }}
                  >
                    <IconComponent className={item.iconClass} />
                  </div>

                  <h3 className="mt-[2rem] mb-[.4rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                    {item.title}
                  </h3>

                  <p className="text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="block w-full md:hidden">
            <OurApproachSlider />
          </div>
        </div>

        <div className="mt-[3.8rem] grid w-full grid-cols-1 items-center gap-[3.3rem] text-center md:grid-cols-2 xl:grid-cols-3">
          <div className="contact-details-bg our-approach-contact-card !px-[2.2rem] !py-[5rem]">
            <Link
              href="tel:01618202667"
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
            >
              0161 820 2667
            </Link>
          </div>

          <div className="contact-details-bg our-approach-contact-card !px-[2.2rem] !py-[5rem]">
            <Link
              href="mailto:hello@cp.agency"
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
            >
              hello@cp.agency
            </Link>
          </div>

          <div className="contact-details-bg our-approach-contact-card !px-[2.2rem] !py-[5rem] md:col-span-2 xl:col-span-1">
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

export default OurApproachSection;

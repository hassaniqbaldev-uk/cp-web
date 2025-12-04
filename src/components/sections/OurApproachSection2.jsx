"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import Link from "next/link";
import Image from "next/image";

const OurApproachSection2 = () => {
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
        ".our-approach-2-left-col-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".our-approach-2-left-col-card",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".our-approach-2-right-col-card",
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
            trigger: ".our-approach-2-right-col-card",
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".our-approach-2-contact-card",
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
            trigger: ".our-approach-2-contact-card",
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
      className="px-[3rem] pt-[8rem] pb-[8.5rem] xl:px-[0rem] xl:pt-[31.6rem]"
    >
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center justify-between gap-[4rem] xl:flex-row">
          <div className="our-approach-2-left-col-card h-[25rem] w-full md:h-[47.9rem] md:w-[56.2rem]">
            <Image
              src="/images/elementor-at-card-img.png"
              alt="Image"
              width={562}
              height={479}
              className="size-full object-cover"
            />
          </div>

          <div className="our-approach-2-right-col-card flex w-full flex-col items-center text-center xl:w-[58.5rem] xl:items-start xl:text-left">
            <div ref={labelRef}>
              <SectionLabel2
                text="Our Approach"
                bgColor="bg-[#F14A58]"
                textColor="text-[#ffffff]"
              />
            </div>

            <h2 className="mt-[2.4rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[5.2rem] md:leading-[6rem]">
              Elementor at CP
            </h2>

            <p className="mt-[1.6rem] mb-[3.8rem] text-[1.6rem] leading-[2.6rem] font-medium text-[#070707] md:text-[2.2rem] md:leading-[3.2rem]">
              We use Elementor to build flexible, high-performance WordPress
              sites with clean layouts, consistent styling, and fast load
              speeds. Every page is structured for easy editing, scalable
              growth, and seamless integration with your tools — giving you a
              site that’s simple to manage and built to last.
            </p>

            <CommonBtn3 label="Book a 15-min free call" href="/call" />
          </div>
        </div>

        <div className="mt-[3.8rem] grid w-full grid-cols-1 items-center gap-[3.3rem] text-center md:grid-cols-2 xl:grid-cols-3">
          <div className="contact-details-bg our-approach-2-contact-card !px-[2.2rem] !py-[5rem]">
            <Link
              href="tel:01618202667"
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
            >
              0161 820 2667
            </Link>
          </div>

          <div className="contact-details-bg our-approach-2-contact-card !px-[2.2rem] !py-[5rem]">
            <Link
              href="mailto:hello@cp.agency"
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
            >
              hello@cp.agency
            </Link>
          </div>

          <div className="contact-details-bg our-approach-2-contact-card !px-[2.2rem] !py-[5rem] md:col-span-2 xl:col-span-1">
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

export default OurApproachSection2;

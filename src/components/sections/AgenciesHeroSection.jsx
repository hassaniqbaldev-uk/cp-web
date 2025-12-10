"use client";

import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import ConsultationCtaButton from "@/components/common/ConsultationCtaButton";

const AgenciesHeroSection = () => {
  const lineRef = useRef(null);
  const container = useRef();

  useGSAP(
    () => {
      const splitHeading = new SplitText(
        container.current.querySelector(".agencies-hero-heading"),
        {
          type: "lines",
          linesClass: "line",
        },
      );
      const splitDesc = new SplitText(
        container.current.querySelector(".agencies-hero-description"),
        {
          type: "lines",
          linesClass: "line",
        },
      );
      const linePath = lineRef.current?.querySelector("path");

      // Start with SVG line animation (independent of timeline)
      if (linePath) {
        // Create separate timeline for SVG or use direct gsap methods
        const svgTl = gsap.timeline();

        svgTl
          .to(lineRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          })
          .fromTo(
            linePath,
            { drawSVG: "0%" },
            {
              drawSVG: "100%",
              duration: 5,
              ease: "power2.inOut",
            },
            "<", // Start simultaneously with opacity
          );
      }

      const tl = gsap.timeline();

      // Heading animation (starts after line animation begins)
      tl.to(".agencies-hero-heading", {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }).fromTo(
        splitHeading.lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.3", // Start 0.1s after heading opacity begins
      );

      // Description animation (starts after heading animation begins)
      tl.to(
        ".agencies-hero-description",
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        ">-0.3", // Start 0.3s before previous animation ends
      ).fromTo(
        splitDesc.lines,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.1", // Start 0.1s after description opacity begins
      );

      // Cta animation (starts after description animation begins)
      tl.to(
        ".agencies-hero-cta",
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        ">-0.3",
      ); // Start 0.3s before previous animation ends

      // Image Card animation (starts after cta animation begins)
      tl.to(
        ".agencies-hero-image-card",
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        ">-0.1",
      )
        .to(
          ".agencies-hero-logo",
          {
            opacity: 0.5, // First make it fully visible
            duration: 0.4,
            ease: "power2.out",
          },
          ">-0.3",
        )
        .to(
          ".agencies-hero-logo",
          {
            filter: "blur(8px)", // Add blur effect
            duration: 0.6,
            ease: "power2.inOut",
          },
          ">0.2", // Start 0.2s after the logo appears
        )
        .to(
          ".your-logo-here-gradient-border",
          {
            rotate: "-6deg",
            opacity: 1, // First make it fully visible
            duration: 0.4,
            ease: "power2.out",
          },
          ">0.2", // Start 0.2s after the logo appears
        );

      // Cleanup function
      return () => {
        splitHeading.revert();
        splitDesc.revert();
      };
    },
    {
      scope: container,
      dependencies: [],
    },
  );

  return (
    <section
      ref={container}
      className="relative w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] px-[3rem] pt-[12rem] pb-[5rem] xl:px-[0rem] xl:pt-[17.3rem] xl:pb-[9.6rem]"
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1] opacity-0">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[10] mx-auto flex max-w-[120rem] flex-col items-center gap-[3rem] xl:flex-row xl:gap-[6rem]">
        <div className="flex flex-col gap-[2rem] xl:gap-[3rem]">
          <h1 className="agencies-hero-heading max-w-[60.9rem] overflow-hidden text-center text-[2.5rem] leading-[3rem] font-semibold tracking-[-0.02em] text-white opacity-0 md:text-[4rem] md:leading-[5rem] xl:text-left xl:text-[5.5rem] xl:leading-[6.3rem]">
            White Label
            <div className="bg-gradient-to-r from-[#FFD900] via-[#EE7621] to-[#FF37B3] bg-clip-text text-transparent">
              Web Design & Branding
            </div>
          </h1>

          <p className="agencies-hero-description max-w-[61.8rem] overflow-hidden text-center text-[1.6rem] leading-[2.6rem] font-medium text-white opacity-0 md:text-[1.8rem] md:leading-[2.8rem] xl:text-left xl:text-[2.2rem] xl:leading-[3.2rem]">
            Since 2014, CreativePixels has supported agencies across the UK, US
            & Australia with WordPress websites, branding, and ongoing support
            all delivered under your brand.
          </p>

          <div className="agencies-hero-cta flex justify-center opacity-0 xl:justify-start">
            <ConsultationCtaButton text="See how we can help you" />
          </div>
        </div>

        <div className="agencies-hero-image-card h-[25rem] w-full rounded-[2rem] bg-black p-[2rem] opacity-0 md:h-[34rem] md:w-[52.3rem] xl:h-[37.8rem]">
          <div className="relative size-full overflow-hidden rounded-[.6rem] bg-white">
            <img
              src="/images/logo-dark.svg"
              alt="Image"
              className="agencies-hero-logo absolute top-1/2 left-1/2 w-[23rem] -translate-1/2 opacity-0 blur-[0rem] md:w-[34.1rem]"
            />

            <div className="your-logo-here-gradient-border absolute top-1/2 left-1/2 flex size-[16rem] -translate-1/2 rotate-[0deg] items-center justify-center px-[4rem] py-[2.8rem] text-center opacity-0 md:size-[19.8rem]">
              <span className="text-[3rem] leading-[4rem] font-extrabold tracking-[-0.02em] text-[#070707] uppercase md:text-[4rem] md:leading-[4.6rem]">
                Your Logo Here
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenciesHeroSection;

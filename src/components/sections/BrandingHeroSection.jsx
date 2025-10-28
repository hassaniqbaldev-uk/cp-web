"use client";

import { useLoadingStore } from "@/store/useLoadingStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn2 from "../common/CommonBtn2";
import Image from "next/image";
import BrandingHeroSlider from "../common/BrandingHeroSlider";

const BrandingHeroSection = () => {
  const { isLoading } = useLoadingStore();
  const lineRef = useRef(null);
  const container = useRef();
  const labelRef = useRef();

  useGSAP(
    () => {
      if (isLoading) return;

      const linePath = lineRef.current?.querySelector("path");
      const isMobile = window.innerWidth < 1280;

      // SVG Animation - COMPLETELY INDEPENDENT
      if (linePath) {
        gsap.to(lineRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.fromTo(
          linePath,
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            duration: 4,
            ease: "power2.inOut",
          },
        );
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

      const masterTl = gsap.timeline({ delay: 0.4 });

      masterTl.fromTo(
        labelRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        ">0.1",
      );

      masterTl.fromTo(
        ".branding-hero-heading",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        ">0.1",
      );

      masterTl.fromTo(
        ".branding-hero-desc",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        ">0.1",
      );

      masterTl.fromTo(
        ".branding-hero-cta-btn",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        ">0.1",
      );

      if (!isMobile) {
        masterTl.fromTo(
          ".branding-hero-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          ">0.1",
        );
      }

      if (isMobile) {
        masterTl.fromTo(
          ".branding-hero-card-slider",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          ">0.1",
        );
      }
    },
    {
      scope: container,
      dependencies: [isLoading],
    },
  );

  return (
    <section
      ref={container}
      className="relative z-[10] w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] px-[3rem] pt-[14.8rem] pb-[7rem] xl:px-[0rem]"
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[0] opacity-0">
        <LineStroke01 className="absolute top-[42.9rem] left-1/2 w-full -translate-x-1/2 opacity-50 xl:opacity-100" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col items-center text-center">
          <div ref={labelRef} className="opacity-0">
            <SectionLabel2
              text="Our Services"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>

          <h1 className="branding-hero-heading mt-[2.9rem] text-[3rem] leading-[3rem] font-bold tracking-[-0.03em] text-white opacity-0 md:text-[4.5rem] md:leading-[5.5rem] lg:text-[6rem] lg:leading-[7rem] xl:text-[6.9rem] xl:leading-[8.3rem]">
            Branding & Logo Design
          </h1>

          <p className="branding-hero-desc mt-[1.2rem] mb-[2.5rem] text-[1.6rem] leading-[2.4rem] font-normal text-white opacity-0 md:text-[1.8rem] md:leading-[2.6rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis, libero eget volutpat porta, mi felis elementum leo, et
            aliquet orci felis sit amet orci. Donec varius justo eget orci
            laoreet, non bibendum justo cursus. Proin a nisi semper, ultrices
            risus nec, dapibus ligula.
          </p>

          <div className="branding-hero-cta-btn opacity-0">
            <CommonBtn2 />
          </div>
        </div>

        <div className="mt-[6rem] hidden grid-cols-3 gap-[1.6rem] xl:grid">
          <div className="branding-hero-card flex flex-col gap-[1.6rem] opacity-0">
            <div className="branding-hero-glass flex h-[17.5rem] flex-col gap-[5px] p-[3rem]">
              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#FFE103]">
                Logo Design
              </h4>

              <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                Unique, scalable logos crafted to tell your story and work
                everywhere — from print to digital.
              </p>
            </div>

            <div className="branding-hero-glass flex h-[32rem] items-center justify-center p-[3rem]">
              <Image
                src="/images/branding-hero-card-img-1.webp"
                width={366}
                height={303}
                alt="Image"
                className="size-full"
                unoptimized
              />
            </div>

            <div className="branding-hero-glass flex h-[17.5rem] flex-col gap-[5px] p-[3rem]">
              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#F14A58]">
                Digital-First Branding
              </h4>

              <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                Designed in Figma, optimized for websites, dashboards, and apps
                — ready for development handoff.
              </p>
            </div>

            <div className="branding-hero-glass flex h-[32rem] items-center justify-center p-[3rem]">
              <Image
                src="/images/branding-hero-card-img-2.webp"
                width={328}
                height={239}
                alt="Image"
                className="size-full"
                unoptimized
              />
            </div>
          </div>

          <div className="branding-hero-card flex flex-col gap-[1.6rem] opacity-0">
            <div className="branding-hero-glass flex h-[32rem] items-center justify-center p-[3rem]">
              <Image
                src="/images/branding-hero-card-img-3.webp"
                width={298}
                height={246}
                alt="Image"
                className="size-full"
                unoptimized
              />
            </div>

            <div className="branding-hero-glass flex h-[17.5rem] flex-col gap-[5px] p-[3rem]">
              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#3078FF]">
                Brand Identity Systems
              </h4>

              <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                Typography, colors, and brand guidelines that keep your identity
                consistent across every touchpoint.
              </p>
            </div>

            <div className="branding-hero-glass flex h-[32rem] items-center justify-center p-[3rem]">
              <Image
                src="/images/branding-hero-card-img-4.webp"
                width={282}
                height={242}
                alt="Image"
                className="size-full"
                unoptimized
              />
            </div>

            <div className="branding-hero-glass flex h-[17.5rem] flex-col gap-[5px] p-[3rem]">
              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#44B276]">
                Impact & Trust
              </h4>

              <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                150+ clients trusted us to launch or refresh their brands.
                Results that drive recognition and growth.
              </p>
            </div>
          </div>

          <div className="branding-hero-card flex flex-col gap-[1.6rem] opacity-0">
            <div className="branding-hero-glass flex h-[17.5rem] flex-col gap-[5px] p-[3rem]">
              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#EE8D00]">
                Creative Strategy
              </h4>

              <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                Branding built on insight — audience, market, and competitor
                research that turns design into impact.
              </p>
            </div>

            <div className="branding-hero-glass flex h-[32rem] items-center justify-center p-[3rem]">
              <Image
                src="/images/branding-hero-card-img-5.webp"
                width={288}
                height={220}
                alt="Image"
                className="size-full"
                unoptimized
              />
            </div>

            <div className="branding-hero-glass flex h-[17.5rem] flex-col gap-[5px] p-[3rem]">
              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#FF37B3]">
                Supporting Materials
              </h4>

              <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
                From pitch decks to packaging, we provide ongoing creative
                support to keep your brand evolving.
              </p>
            </div>

            <div className="branding-hero-glass flex h-[32rem] items-center justify-center py-[3rem]">
              <Image
                src="/images/branding-hero-card-img-6.webp"
                width={388}
                height={259}
                alt="Image"
                className="size-full"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="branding-hero-card-slider mt-[6rem] block w-full opacity-0 xl:hidden">
          <BrandingHeroSlider />
        </div>
      </div>
    </section>
  );
};

export default BrandingHeroSection;

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
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Services"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>

          <h1 className="mt-[2.9rem] text-[3rem] leading-[3rem] font-bold tracking-[-0.03em] text-white md:text-[4.5rem] md:leading-[5.5rem] lg:text-[6rem] lg:leading-[7rem] xl:text-[6.9rem] xl:leading-[8.3rem]">
            Branding & Logo Design
          </h1>

          <p className="mt-[1.2rem] mb-[2.5rem] text-[1.6rem] leading-[2.4rem] font-normal text-white md:text-[1.8rem] md:leading-[2.6rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis, libero eget volutpat porta, mi felis elementum leo, et
            aliquet orci felis sit amet orci. Donec varius justo eget orci
            laoreet, non bibendum justo cursus. Proin a nisi semper, ultrices
            risus nec, dapibus ligula.
          </p>

          <CommonBtn2 />
        </div>

        <div className="mt-[6rem] hidden grid-cols-3 gap-[1.6rem] xl:grid">
          <div className="flex flex-col gap-[1.6rem]">
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
                src="/images/branding-hero-card-img-1.png"
                width={366}
                height={303}
                alt="Image"
                className="size-full"
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
                src="/images/branding-hero-card-img-2.png"
                width={328}
                height={239}
                alt="Image"
                className="size-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[1.6rem]">
            <div className="branding-hero-glass flex h-[32rem] items-center justify-center p-[3rem]">
              <Image
                src="/images/branding-hero-card-img-3.png"
                width={298}
                height={246}
                alt="Image"
                className="size-full"
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
                src="/images/branding-hero-card-img-4.png"
                width={282}
                height={242}
                alt="Image"
                className="size-full"
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

          <div className="flex flex-col gap-[1.6rem]">
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
                src="/images/branding-hero-card-img-5.png"
                width={288}
                height={220}
                alt="Image"
                className="size-full"
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
                src="/images/branding-hero-card-img-6.png"
                width={388}
                height={259}
                alt="Image"
                className="size-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-[6rem] block w-full xl:hidden">
          <BrandingHeroSlider />
        </div>
      </div>
    </section>
  );
};

export default BrandingHeroSection;

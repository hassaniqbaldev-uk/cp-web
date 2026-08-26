"use client";

import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";
import SentIcon from "@/assets/icons/ui/sent-icon.svg";
import LoadingIcon from "@/assets/icons/ui/loading-icon.svg";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import { PROJECTS_DELIVERED, YEARS_IN_BUSINESS } from "@/content/company";
import dynamic from "next/dynamic";

const CaseStudiesHeroSlider = dynamic(
  () => import("@/components/ui/CaseStudiesHeroSlider"),
  {
    ssr: false,
    loading: () => <div className="h-[27.8rem]" />, // placeholder height to prevent layout shift
  },
);

const CaseStudiesHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[17.2rem] pb-[5rem] xl:px-[0rem] xl:pb-[9.4rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt=""
          fill
          sizes="100vw"
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape2 className="absolute top-[25rem] right-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-60 md:h-[13.4rem] md:w-[26.8rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel text="Our Work" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="mt-[1rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8.5rem]">
                <span className="block">Real work.</span>{" "}
                <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                  Real clients.
                </span>
              </h1>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.3}
            >
              <div className="max-w-[70.6rem]">
                <SectionDescription
                  text="Named clients, real briefs, and the work behind each one. Explore projects across brand, web, ecommerce and growth — what we set out to do and how we built it."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          {/* Desktop */}
          <div className="mt-[5rem] hidden grid-cols-3 gap-[3rem] xl:mt-[6rem] xl:grid">
            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
            >
              <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#EE7621] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
                <div className="relative size-[6.3rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                    <i>
                      <Image
                        src={GraphicDesignIcon}
                        alt=""
                        width={28}
                        height={28}
                      />
                    </i>
                  </div>
                  <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#EE7621]" />
                </div>
                <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                  <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#EE7621] xl:text-[6.8rem] xl:leading-[6rem]">
                    100%
                  </h4>
                  <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                    Custom Designed Sites
                  </span>
                </div>
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.6}
            >
              <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#3078FF] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
                <div className="relative size-[6.3rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                    <i>
                      <Image src={SentIcon} alt="" width={30} height={30} />
                    </i>
                  </div>
                  <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#3078FF]" />
                </div>
                <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                  <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#3078FF] xl:text-[6.8rem] xl:leading-[6rem]">
                    {PROJECTS_DELIVERED}+
                  </h4>
                  <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                    Projects Delivered
                  </span>
                </div>
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.75}
            >
              <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#FF37B3] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
                <div className="relative size-[6.3rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                    <i>
                      <Image
                        src={LoadingIcon}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </i>
                  </div>
                  <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#FF37B3]" />
                </div>
                <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                  <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#FF37B3] xl:text-[6.8rem] xl:leading-[6rem]">
                    {YEARS_IN_BUSINESS}+
                  </h4>
                  <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                    Years of Delivery
                  </span>
                </div>
              </div>
            </MotionEffect>
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            delay={0.45}
            className="w-full"
          >
            <div className="mt-[3rem] block w-full xl:hidden">
              <CaseStudiesHeroSlider />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesHero;

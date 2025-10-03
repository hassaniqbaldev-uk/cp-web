"use client";

import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import { useLoadingStore } from "@/store/useLoadingStore";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import CommonBtn2 from "../common/CommonBtn2";

const AgenciesHeroSection = () => {
  const lineRef = useRef(null);
  const { isLoading } = useLoadingStore(); // 👈 access global loader state

  useEffect(() => {
    if (isLoading) return; // ⛔ don’t run until loader is done

    const linePath = lineRef.current.querySelector("path");

    if (linePath) {
      gsap.fromTo(
        linePath,
        { drawSVG: "0%" }, // start hidden
        {
          drawSVG: "100%", // fully drawn
          duration: 5,
          ease: "power2.inOut",
        },
      );
    }

    const tl = gsap.timeline();

    tl.to(lineRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [isLoading]);

  return (
    <section className="hero-sec relative h-[76rem] w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] px-[3rem] md:h-[79rem] xl:px-[0rem]">
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1] opacity-0">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[10] mx-auto flex max-w-[120rem] flex-col items-center gap-[3rem] pt-[14rem] lg:flex-row lg:pt-[19.1rem] xl:gap-[6rem]">
        <div className="flex flex-col gap-[2rem] lg:gap-[3rem]">
          <h1 className="max-w-[60.9rem] text-center text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4rem] md:leading-[5rem] lg:text-left lg:text-[5.6rem] lg:leading-[6.4rem]">
            White Label
            <div className="bg-gradient-to-r from-[#FFD900] via-[#EE7621] to-[#FF37B3] bg-clip-text text-transparent">
              Web Design & Branding
            </div>
          </h1>

          <p className="max-w-[61.8rem] text-center text-[1.6rem] leading-[2.6rem] font-medium text-white md:text-[1.8rem] md:leading-[2.8rem] lg:text-left lg:text-[2.2rem] lg:leading-[3.2rem]">
            Since 2014, CreativePixels has supported agencies across the UK, US
            & Australia with WordPress websites, branding, and ongoing support
            all delivered under your brand.
          </p>

          <div className="flex justify-center lg:justify-start">
            <CommonBtn2 text="See how we can help you" />
          </div>
        </div>

        <div className="h-[25rem] w-full rounded-[2rem] bg-black p-[2rem] md:h-[34rem] md:w-[52.3rem] xl:h-[37.8rem]">
          <div className="flex size-full flex-col justify-between overflow-hidden rounded-[.6rem] bg-white">
            <div className="flex size-full items-center justify-center">
              <img
                src="/images/white-label-card-logo.png"
                alt="Image"
                className="w-[25rem] md:w-[35rem]"
              />
            </div>

            <div className="border-t border-black/10 px-[2rem] py-[1rem] text-right text-[1.4rem] font-medium text-black/30">
              01
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenciesHeroSection;

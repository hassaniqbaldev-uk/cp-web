"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CaseStudiesStatsSlider from "./CaseStudiesStatsSlider";
import { useLoadingStore } from "@/store/useLoadingStore";

const CaseStudiesStatsSection = () => {
  const statsRef = useRef([]);
  const { isLoading } = useLoadingStore();

  // ✅ GSAP Animation Hook
  useGSAP(
    () => {
      if (isLoading) return;

      statsRef.current.forEach((el) => {
        const targetValue = parseInt(el.dataset.target, 10) || 0;

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
            onUpdate() {
              el.textContent = Math.floor(el.innerText);
            },
          },
        );
      });
    },
    { scope: statsRef, dependencies: [isLoading] },
  );

  return (
    <section className="px-[3rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        {/* Desktop Grid */}
        <div className="relative hidden grid-cols-3 gap-[3.3rem] xl:grid">
          {/* 1️⃣ Card */}
          <div className="rounded-[3rem] bg-[#FFC300]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              <span ref={(el) => (statsRef.current[0] = el)} data-target="100">
                0
              </span>
              <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>
            <hr className="h-[1px] w-full border-0 bg-black/40" />
            <p className="pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Custom Designed Sites
            </p>
          </div>

          {/* 2️⃣ Card */}
          <div className="rounded-[3rem] bg-[#FF37B3]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              <span ref={(el) => (statsRef.current[1] = el)} data-target="200">
                0
              </span>
              <span className="text-[5rem] leading-[8rem]">+</span>
            </h3>
            <hr className="h-[1px] w-full border-0 bg-black/40" />
            <p className="max-w-[27.3rem] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Projects Delivered
            </p>
          </div>

          {/* 3️⃣ Card */}
          <div className="rounded-[3rem] bg-[#F14A58]">
            <h3 className="inline-flex items-start pt-[3.4rem] pb-[.7rem] pl-[5rem] text-[11rem] leading-[13rem] font-bold tracking-[-0.02em]">
              <span ref={(el) => (statsRef.current[2] = el)} data-target="65">
                0
              </span>
              <span className="text-[5rem] leading-[8rem]">%</span>
            </h3>
            <hr className="h-[1px] w-full border-0 bg-black/40" />
            <p className="max-w-[32rem] pt-[2rem] pb-[3.1rem] pl-[5rem] text-[2.2rem] leading-[3.2rem] font-medium">
              Faster Load Times
            </p>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="block w-full xl:hidden">
          <CaseStudiesStatsSlider />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesStatsSection;

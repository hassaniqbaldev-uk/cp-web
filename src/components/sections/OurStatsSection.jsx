"use client";
import LineStroke08 from "@/assets/decorative-elements/line-stroke-08.svg";
import SectionLabel2 from "../common/SectionLabel2";
import OurStatsSlider from "../common/OurStatsSlider";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const OurStatsSection = () => {
  const labelRef = useRef();
  const cardRef = useRef();
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current.querySelector("path");

    if (line) {
      gsap.fromTo(
        line,
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 50%", // when line enters viewport
            end: "bottom 20%", // when line leaves viewport
            scrub: true, // tie progress to scroll
            markers: false, // set to true for debugging
          },
        },
      );
    }

    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

    gsap.fromTo(
      gsap.utils.toArray(cardRef.current.children),
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1, // 👈 Faster stagger
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  useEffect(() => {
    const numbers = gsap.utils.toArray(cardRef.current.querySelectorAll("h4"));

    numbers.forEach((number) => {
      // Store original text and symbol
      const originalText = number.textContent.trim();
      let symbol = "";
      let target = parseInt(originalText.replace(/\D/g, ""), 10);

      if (originalText.includes("+")) symbol = "+";
      if (originalText.includes("%")) symbol = "%";

      number.textContent = "0" + symbol;

      gsap.to(
        { val: 0 },
        {
          val: target,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: number,
            start: "top 80%",
          },
          onUpdate: function () {
            number.textContent = Math.floor(this.targets()[0].val) + symbol;
          },
        },
      );
    });
  }, []);

  return (
    <section className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:pt-[8.5rem] xl:pb-[9.732rem]">
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke08 className="absolute top-[14.2rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center gap-[4.4rem] 2xl:max-w-[130rem]">
        <div ref={labelRef} className="rotate-[2deg]">
          <SectionLabel2
            text="Our Stats"
            bgColor="bg-[#FFC300]"
            textColor="text-black"
          />
        </div>

        <div ref={cardRef} className="hidden grid-cols-4 gap-[2rem] lg:grid">
          <div className="our-stats-card group transition-all duration-300 hover:!bg-[#FFC300]">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              200+
            </h4>

            <p className="text-[2rem] font-medium text-[#FFC300] transition-all duration-300 group-hover:text-white">
              Websites Launched
            </p>
          </div>

          <div className="our-stats-card group top-[8rem] transition-all duration-300 hover:!bg-[#FF37B3]">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              15+
            </h4>

            <p className="text-[2rem] font-medium text-[#FF37B3] transition-all duration-300 group-hover:text-white">
              Years Crafting Digital Solutions
            </p>
          </div>

          <div className="our-stats-card group transition-all duration-300 hover:!bg-[#FF8630]">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              150+
            </h4>

            <p className="text-[2rem] font-medium text-[#FF8630] transition-all duration-300 group-hover:text-white">
              Clients Who Chose Us
            </p>
          </div>

          <div className="our-stats-card group top-[8rem] transition-all duration-300 hover:!bg-[#F14A58]">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              95%
            </h4>

            <p className="text-[2rem] font-medium text-[#F14A58] transition-all duration-300 group-hover:text-white">
              Repeat & Referral Rate
            </p>
          </div>
        </div>

        <div className="block w-full lg:hidden">
          <OurStatsSlider />
        </div>
      </div>
    </section>
  );
};

export default OurStatsSection;

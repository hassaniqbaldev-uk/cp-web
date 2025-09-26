"use client";
import { useEffect, useRef } from "react";
import CaseStudiesSlider from "../common/CaseStudiesSlider";
import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import gsap from "gsap";

const CaseStudiesSection02 = ({ caseStudies }) => {
  const labelRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section>
      <div className="relative z-[3] flex flex-col items-center gap-[2rem] px-[2rem] text-center xl:px-[0rem]">
        <div ref={labelRef} className="rotate-[-2deg]">
          <SectionLabel2
            text="Case Studies"
            bgColor="bg-[#3078FF]"
            textColor="text-text-primary"
          />
        </div>

        <div ref={headingRef} className="opacity-0">
          <SectionTitle label="A decade of digital done right" />
        </div>

        <div ref={descRef} className="max-w-[76.5rem] opacity-0">
          <SectionDescription label="We’ve crafted websites and brands that blend design, development, and strategy into measurable success" />
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={cardRef}
          className="relative z-[3] mx-auto mt-[2rem] max-w-[122.3rem] px-[2rem] opacity-0 md:mt-[5rem] xl:px-[0rem]"
        >
          <CaseStudiesSlider caseStudies={caseStudies} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection02;

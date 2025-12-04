"use client";

import { useEffect, useRef } from "react";
import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import TeamCardMarquee from "../common/TeamCardMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const OurTeamSection = () => {
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
    <section className="py-[5rem] xl:pt-[6.4rem] xl:pb-[9.8rem]">
      <div className="flex flex-col items-center gap-[2rem] px-[3rem] text-center xl:px-[0rem]">
        <div ref={labelRef} className="rotate-[2deg]">
          <SectionLabel2
            text="Our Team"
            bgColor="bg-[#81f2b4]"
            textColor="text-text-primary"
          />
        </div>

        <div ref={headingRef} className="max-w-[60.3rem] opacity-0">
          <SectionTitle label="We're a Team of People Who Care" />
        </div>

        <div ref={descRef} className="max-w-[83.6rem] opacity-0">
          <SectionDescription label="All of the people who work for us, have been working with us for a minimum of 2 years, with 50% of our team being the same since we were founded." />
        </div>
      </div>

      <div ref={cardRef} className="mt-[5rem] opacity-0">
        <TeamCardMarquee />
      </div>
    </section>
  );
};

export default OurTeamSection;

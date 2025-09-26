"use client";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import TestimonialsMarquee from "../common/TestimonialsMarquee";
import SectionLabel2 from "../common/SectionLabel2";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutTestimonialsSection = () => {
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
    <section className="py-[5rem] lg:py-[10rem]">
      <div className="flex flex-col items-center gap-[2rem] px-[3rem] text-center xl:px-[0rem]">
        <div ref={labelRef} className="rotate-[-2deg]">
          <SectionLabel2
            text="Testimonials"
            bgColor="bg-[#32284A]"
            textColor="text-white"
          />
        </div>

        <div ref={headingRef} className="opacity-0">
          <SectionTitle
            label="Built with Pixels. Backed by People."
            textColor="text-white "
          />
        </div>

        <div ref={descRef} className="opacity-0">
          <SectionDescription
            label="Here’s what our clients say about working with us – real results from real partnerships."
            textColor="text-white"
          />
        </div>
      </div>

      <div ref={cardRef} className="mt-[5rem] opacity-0">
        <TestimonialsMarquee />
      </div>
    </section>
  );
};

export default AboutTestimonialsSection;

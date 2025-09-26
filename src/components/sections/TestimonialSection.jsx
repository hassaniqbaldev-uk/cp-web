"use client";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import TestimonialsCard from "../common/TestimonialsCard";
import LineStroke05 from "@/assets/decorative-elements/line-stroke-05.svg";
import SectionLabel2 from "../common/SectionLabel2";
import TestimonialsMarquee from "../common/TestimonialsMarquee";
import { testimonialsCardData } from "@/constants/globals";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const TestimonialSection = () => {
  const labelRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const gridCardRef1 = useRef();
  const gridCardRef2 = useRef();
  const gridCardRef3 = useRef();
  const lineRef = useRef(null);

  useEffect(() => {
    const gridCardRefs = [gridCardRef1, gridCardRef2, gridCardRef3];

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

    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(descRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gridCardRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          gsap.utils.toArray(ref.current.children),
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: index * 0.2, // Stagger the start of each grid animation
            clearProps: "all",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });
  }, []);

  return (
    <section className="testimonials-sec relative z-[1] py-[5rem] xl:py-[8rem]">
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke05 className="absolute top-[118.4rem] left-1/2 w-full -translate-x-1/2 opacity-90" />
      </div>

      <div className="mx-auto max-w-[120.3rem] px-[3rem] xl:px-[0rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div ref={labelRef} className="rotate-[2deg]">
            <SectionLabel2 text="Testimonials" />
          </div>

          <div ref={titleRef} className="opacity-0">
            <SectionTitle
              label="Built with Pixels. Backed by People."
              textColor="text-white "
            />
          </div>

          <div ref={descRef} className="max-w-[95.8rem] opacity-0">
            <SectionDescription
              label="Here’s what our clients say about working with us real results from real partnerships."
              textColor="text-white"
            />
          </div>
        </div>

        <div className="mt-[5rem] hidden grid-cols-1 gap-[3.3rem] lg:grid-cols-3 xl:grid">
          <div ref={gridCardRef1} className="grid gap-[3.3rem]">
            {testimonialsCardData.slice(0, 3).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div ref={gridCardRef2} className="grid gap-[3.3rem]">
            {testimonialsCardData.slice(3, 5).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div ref={gridCardRef3} className="grid gap-[3.3rem]">
            {testimonialsCardData.slice(5, 7).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 block xl:hidden">
        <TestimonialsMarquee />
      </div>
    </section>
  );
};

export default TestimonialSection;

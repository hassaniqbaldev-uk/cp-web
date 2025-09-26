"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const texts = Array(15).fill("Let’s work together.");

const TextMarquee = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="opacity-0">
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="right"
        className="overflow-hidden text-[6rem] leading-[8rem] font-semibold tracking-[-0.02em] text-[#FFC300] md:text-[11rem] md:leading-[13rem]"
      >
        {texts.map((text, index) => (
          <span key={index} className="mx-[1rem]">
            {text}
          </span>
        ))}
      </Marquee>

      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="left"
        className="overflow-hidden text-[6rem] leading-[8rem] font-semibold tracking-[-0.02em] text-[#FF37B3] md:text-[11rem] md:leading-[13rem]"
      >
        {texts.map((text, index) => (
          <span key={index} className="mx-[1rem]">
            {text}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TextMarquee;

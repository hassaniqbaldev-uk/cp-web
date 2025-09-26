"use client";

import Image from "next/image";
import SectionLabel from "./SectionLabel";
import CommonBtn3 from "./CommonBtn3";
import FlashIcon from "@/assets/icons/3d-flash-icon.svg";
import ContactArrowIcon from "@/assets/icons/contact-arrow.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CtaSection2 = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="cta-card relative w-full rounded-[5rem] px-[3rem] py-[4rem] opacity-0 backdrop-blur-[10px] md:px-[6rem] lg:py-[8rem]"
    >
      <i className="absolute top-[-4.3rem] right-0 inline-flex items-center justify-center">
        <ContactArrowIcon />
      </i>

      <div className="relative z-[1] flex flex-col items-center gap-[8rem] text-center lg:flex-row lg:items-start lg:gap-[3.4rem] lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <SectionLabel text="Contact us Today" />

          <h3 className="mt-[2rem] max-w-[70rem] text-[3.2rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
            Just 15 minutes to find out if we’re the right fit for your project.
          </h3>
        </div>

        <div className="relative flex h-[26.1rem] w-full items-center justify-center rounded-[3.2rem] bg-white lg:w-[30.8rem]">
          <div className="bg-text-primary/30 absolute bottom-[-1.5rem] left-1/2 z-[-1] h-[26.4rem] w-full -translate-x-1/2 rounded-[3.2rem] backdrop-blur-[10px] md:w-[25.8rem]" />

          <div className="flex flex-col items-center gap-[2rem] text-center">
            <i className="absolute top-[-5.3rem] right-[1.794rem] inline-flex h-[9.827rem] w-[5.653rem] rotate-[16.79deg] items-center justify-center">
              <FlashIcon />
            </i>

            <i className="absolute top-[-5.3rem] flex size-[9.9rem] items-center justify-center">
              <Image
                src="/images/cta-card-avatar.png"
                alt="Avatar"
                width={99}
                height={99}
                priority
              />

              <div className="outline-text-primary absolute top-[5.3px] right-[5.3px] size-[1.8rem] animate-pulse rounded-full bg-[#7EE972] outline-[4px]" />
            </i>

            <h4 className="mt-[2.5rem] max-w-[24rem] text-[2.6rem] leading-[3.3rem] font-semibold tracking-[-0.02em]">
              Book a FREE strategy call with Hassan.
            </h4>

            <CommonBtn3 href="/contact" label="Book a Call" bgColor="#FF37B3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection2;

"use client";
import Image from "next/image";
import CommonBtn3 from "./CommonBtn3";
import WaveHand from "./WaveHand";
import FlashIcon from "@/assets/icons/3d-flash-icon.svg";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ConsultationCtaButton from "@/components/common/ConsultationCtaButton";
import BlinkBadge2 from "@/components/common/BlinkBadge2";

const CtaSection1 = () => {
  const containerRef = useRef();
  const getDynamicMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const now = new Date();
    const currentMonth = now.getMonth();
    return months[currentMonth];
  };
  const dynamicText = getDynamicMonth();

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
      className="cta-card relative w-full overflow-hidden rounded-[5rem] px-[3rem] py-[4rem] opacity-0 backdrop-blur-[10px] md:px-[6rem]"
    >
      <div className="relative z-[1] flex flex-col items-center justify-between gap-[5.3rem] lg:flex-row">
        <div className="flex w-full flex-col items-center text-center lg:w-auto lg:items-start lg:text-left">
          <BlinkBadge2 text={`Book now for ${dynamicText} Slots`} />

          <h3 className="mt-[2rem] mb-[3rem] max-w-[50rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4rem] md:leading-[5rem] xl:max-w-[60rem] xl:text-[4.8rem] xl:leading-[6rem]">
            Let’s design, build, and grow your next big project.
          </h3>

          <p className="max-w-[55.8rem] text-[1.8rem] leading-[2.8rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]">
            Book a free 15-minute call – no hard sell, just a chance to see if
            working together makes sense.
          </p>

          <div className="mt-[4rem] flex flex-col items-center gap-[.531rem] md:flex-row">
            <ConsultationCtaButton text="Get Free Consultation" />

            <i className="relative flex items-center justify-center text-[4rem]">
              <WaveHand />
            </i>
          </div>
        </div>

        <div className="relative flex h-[36.3rem] w-full items-center justify-center rounded-[3.2rem] bg-white lg:w-[30.8rem]">
          <div className="bg-text-primary/30 absolute bottom-[-1.5rem] left-1/2 z-[-1] h-[36.3rem] w-full -translate-x-1/2 rounded-[3.2rem] backdrop-blur-[10px] lg:w-[25.8rem]" />

          <div className="flex flex-col items-center gap-[2rem] text-center">
            <i className="absolute top-[-3rem] left-[2rem] inline-flex h-[9.827rem] w-[5.653rem] rotate-[16.79deg] items-center justify-center">
              <FlashIcon />
            </i>

            <i className="relative flex size-[9.9rem] items-center justify-center">
              <Image
                src="/images/cta-card-avatar.png"
                alt="Avatar"
                width={99}
                height={99}
                priority
              />

              <div className="outline-text-primary absolute top-[5.3px] right-[5.3px] size-[1.8rem] animate-pulse rounded-full bg-[#7EE972] outline-[4px]" />
            </i>

            <h4 className="max-w-[24rem] text-[2.6rem] leading-[3.3rem] font-semibold tracking-[-0.02em]">
              Book a FREE strategy call with Hassan.
            </h4>

            <CommonBtn3 href="/contact" label="Book a Call" bgColor="#FF37B3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection1;

"use client";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import Link from "next/link";
import CommonBtn3 from "./CommonBtn3";
import WaveHand from "./WaveHand";
import FlashIcon from "@/assets/icons/3d-flash-icon.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import CommonBtn2 from "./CommonBtn2";

const CtaSection1 = () => {
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
      className="cta-card relative w-full overflow-hidden rounded-[5rem] px-[3rem] py-[4rem] opacity-0 backdrop-blur-[10px] md:px-[6rem]"
    >
      <div className="relative z-[1] flex flex-col items-center justify-between gap-[5.3rem] lg:flex-row">
        <div className="flex w-full flex-col items-center text-center lg:w-auto lg:items-start lg:text-left">
          <SectionLabel text="Book now for September slots" />

          <h3 className="mt-[2rem] mb-[3rem] max-w-[50rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4rem] md:leading-[5rem] xl:max-w-[60rem] xl:text-[4.8rem] xl:leading-[6rem]">
            Let’s design, build, and grow your next big project.
          </h3>

          <p className="max-w-[55.8rem] text-[1.8rem] leading-[2.8rem] font-medium text-white md:text-[2.2rem] md:leading-[3.2rem]">
            Book a free 15-minute call – no hard sell, just a chance to see if
            working together makes sense.
          </p>

          <div className="mt-[4rem] flex flex-col items-center gap-[.531rem] md:flex-row">
            {/* <Link
              href="/contact"
              className="relative inline-flex h-[6.4rem] items-center gap-[1rem] px-[3rem] py-[1.223rem] text-[1.6rem] font-semibold text-white md:text-[2rem]"
            >
              <div className="contact-btn-gradient absolute inset-0 rounded-[6rem]"></div>

              <span className="relative z-10 text-white">Get in Touch</span>
              <Image
                src="/images/user-avatar.png"
                alt="User Avatar"
                width={107.69}
                height={39.54}
              />
            </Link> */}
            <CommonBtn2 />

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

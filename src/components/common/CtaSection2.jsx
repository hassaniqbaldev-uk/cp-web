"use client";

import FlashIcon from "@/assets/icons/3d-flash-icon.svg";
import ContactArrowIcon from "@/assets/icons/contact-arrow.svg";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import RightArrowIcon from "@/assets/icons/right-arrow-icon.svg";
import { getCalApi } from "@calcom/embed-react";
import { useGSAP } from "@gsap/react";
import BlinkBadge2 from "@/components/common/BlinkBadge2";

const CtaSection2 = () => {
  const containerRef = useRef();

  useGSAP(() => {
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
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
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
          <BlinkBadge2 text="Contact us Today" />

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
              <img
                src="/images/cta-card-avatar.png"
                alt="Avatar"
                className="size-full"
              />

              <div className="outline-text-primary absolute top-[5.3px] right-[5.3px] size-[1.8rem] animate-pulse rounded-full bg-[#7EE972] outline-[4px]" />
            </i>

            <h4 className="mt-[2.5rem] max-w-[24rem] text-[2.6rem] leading-[3.3rem] font-semibold tracking-[-0.02em]">
              Book a FREE strategy call with Hassan.
            </h4>

            <button
              data-cal-namespace="15min"
              data-cal-link="hassan-iqbal-mznzu9/15min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="group inline-flex cursor-pointer items-center"
            >
              {/* Text */}
              <div className="relative z-[2] h-[4rem] min-w-max overflow-hidden rounded-[6rem] bg-[#FF37B3] px-[2rem] text-[1.6rem] font-semibold text-white md:h-[5rem] md:px-[3rem] md:text-[2rem]">
                <span className="flex size-full items-center justify-center transition-all duration-200 group-hover:-translate-y-full">
                  Book a Call
                </span>

                <span className="flex size-full items-center justify-center transition-all duration-200 group-hover:-translate-y-full">
                  Book a Call
                </span>
              </div>

              {/* Wrapper (animated arrow) */}
              <div className="relative flex items-center justify-center">
                {/* Subtract Icon */}
                <i className="mx-[-.5rem]">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.47559 0C3.85901 2.39049 6.44175 4 9.40234 4C12.3629 4 14.9457 2.39049 16.3291 0H18.4023V18H16.3291C14.9457 15.6095 12.3629 14 9.40234 14C6.44175 14 3.85901 15.6095 2.47559 18H0.402344V0H2.47559Z"
                      fill="#FF37B3"
                    />
                  </svg>
                </i>

                {/* Arrow Icon */}
                <div className="relative size-[4rem] overflow-hidden rounded-full bg-[#FF37B3] md:size-[5rem]">
                  <i className="absolute top-0 left-0 flex size-full items-center justify-center transition-all duration-200 group-hover:left-full">
                    <RightArrowIcon className="fill-white" />
                  </i>

                  <i className="absolute top-0 -left-full flex size-full items-center justify-center transition-all duration-200 group-hover:-left-0">
                    <RightArrowIcon className="fill-white" />
                  </i>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection2;

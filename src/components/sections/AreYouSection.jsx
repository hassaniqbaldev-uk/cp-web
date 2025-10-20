"use client";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CommonBtn3 from "../common/CommonBtn3";
import CheckIcon from "@/assets/icons/check-icon.svg";
import { featureItems } from "@/constants/wpElementorPage";
import LineStroke34 from "@/assets/decorative-elements/line-stroke-34.svg";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";

const AreYouSection = () => {
  const labelRef = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        labelRef.current,
        { rotate: "-2deg" },
        {
          rotation: "+=3",
          duration: 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          repeatDelay: 0.5,
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <section
      ref={container}
      className="relative px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[10rem]"
    >
      {/* Decorative stroke line */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <LineStroke34 className="absolute top-[0rem] left-[-103rem] w-full" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <CLetter2 className="absolute top-[-5rem] right-[-20rem] w-[45rem] rotate-[-180deg] xl:top-[0rem] xl:right-[-18.7rem]" />
      </div>

      <div className="relative z-[10] mx-auto flex max-w-[120rem] flex-col items-center text-center xl:items-start xl:text-left">
        <div ref={labelRef}>
          <SectionLabel2
            text="Featured Categories"
            bgColor="bg-[#FFC300]"
            textColor="text-[#070707]"
          />
        </div>

        <h2 className="mt-[2rem] max-w-[110rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-[#070707] md:text-[6rem] md:leading-[7.4rem]">
          Are you a well-established business in the UK or one that is just
          starting out?
        </h2>

        <p className="] mt-[1.6rem] text-[1.8rem] leading-[2.8rem] font-medium text-[#070707] md:text-[2.2rem] md:leading-[3.2rem]">
          Flexible, supported by data, and designed for success—at all phases of
          the funnel. libero eget volutpat porta, mi felis elementum leo, et
          aliquet orci felis sit amet orci. Donec varius justo eget orci
          laoreet, non bibendum justo cursus. libero eget volutpat porta, mi
          felis elementum leo, et aliquet orci felis sit amet orci.
        </p>

        <div className="my-[4rem] grid grid-cols-1 gap-x-[1rem] gap-y-[1rem] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[10rem]">
          {featureItems.map((item) => (
            <div
              key={item.id}
              className="flex h-[4.8rem] items-center gap-[1.2rem] rounded-[20rem] border border-[#070707] px-[1.6rem] py-[.8rem]"
            >
              <i
                className={`inline-flex size-[2.4rem] items-center justify-center rounded-full ${item.bgColor}`}
              >
                <CheckIcon className="w-[1.4rem]" />
              </i>

              <span className="text-left text-[1.8rem] leading-[2.8rem] font-medium md:text-[2.2rem] md:leading-[3.2rem]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <CommonBtn3
          label="About CreativePixels"
          href="/about"
          bgColor="#FF37B3"
        />
      </div>
    </section>
  );
};

export default AreYouSection;

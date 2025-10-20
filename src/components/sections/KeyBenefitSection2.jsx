"use client";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CommonBtn3 from "../common/CommonBtn3";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import KeyBenefitTab from "../common/KeyBenefitTab";

const KeyBenefitSection2 = () => {
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
      className="relative overflow-hidden px-[3rem] py-[8rem] xl:px-[0rem]"
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-6.8rem] left-[-103.9rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex w-full flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Key Benefits"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>

          <h2 className="mt-[2rem] w-full max-w-[53.8rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[5.6rem] md:leading-[6.4rem]">
            Benefits of Branding Design Services
          </h2>
        </div>

        <div className="mt-[5rem]">
          <KeyBenefitTab />
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitSection2;

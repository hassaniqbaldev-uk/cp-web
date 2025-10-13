"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import { logoPopupsData } from "@/constants/globals";
import LogoPopup from "../common/LogoPopup";
import ClientLogoSlider from "../common/ClientLogoSlider";
import WebDesignServiceSlider from "../common/WebDesignServiceSlider";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";

const WebDesignServiceSection = () => {
  const container = useRef();
  const labelRef = useRef();

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
      className="relative overflow-hidden px-[3rem] pt-[9.2rem] pb-[7rem] xl:px-[0rem]"
      style={{
        background:
          "url('/images/web-design-service-gradient-bg.png') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-5.8rem] left-[-103.9rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center gap-[2.2rem] text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Web Design Services"
              bgColor="bg-[#FF37B3]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="text-center text-[6rem] leading-[7.4rem] font-bold tracking-[-0.03em] text-white">
            Full-Stack Web Design Services
          </h4>
        </div>

        <div className="mt-[5rem] w-full">
          <WebDesignServiceSlider />
        </div>

        <ul className="mt-[8rem] hidden h-[7rem] items-center gap-[3rem] xl:flex 2xl:gap-[5rem]">
          {logoPopupsData.map((item, idx) => (
            <li key={idx} className="">
              <LogoPopup
                logo={item.logo}
                popupImage={item.popupImage}
                title={item.title}
                href={item.href}
                logoWidth={item.logoWidth}
                logoHeight={item.logoHeight}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Logos */}
      <div className="relative z-[200] mt-[8rem] block w-full xl:hidden">
        <ClientLogoSlider />
      </div>
    </section>
  );
};

export default WebDesignServiceSection;

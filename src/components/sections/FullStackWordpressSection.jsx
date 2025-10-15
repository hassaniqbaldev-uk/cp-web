"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionLabel2 from "../common/SectionLabel2";
import { useRef } from "react";
import CommonBtn3 from "../common/CommonBtn3";
import Image from "next/image";
import FullStackWordpressSlider from "../common/FullStackWordpressSlider";
import LogoPopup from "../common/LogoPopup";
import { logoPopupsData } from "@/constants/globals";

const FullStackWordpressSection = () => {
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
    <section>
      <div
        ref={container}
        className="relative overflow-hidden pt-[12.7rem] pb-[8.5rem]"
        style={{
          background:
            "url('/images/web-design-service-gradient-bg.png') no-repeat center center/cover",
        }}
      >
        <div className="mx-auto flex max-w-[144rem] items-start gap-[4rem] pl-[12rem]">
          <div className="flex min-w-[40rem] flex-col items-start gap-[2.2rem] text-left">
            <div ref={labelRef}>
              <SectionLabel2
                text="Web Design Services"
                bgColor="bg-[#FF37B3]"
                textColor="text-[#ffffff]"
              />
            </div>

            <h4 className="max-w-[40rem] text-[4rem] leading-[5rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
              Full-Stack WordPress Services
            </h4>

            <CommonBtn3
              label="Let Get Started"
              href="/call"
              bgColor="#FF37B3"
            />
          </div>

          <div className="flex gap-[2.2rem] overflow-hidden">
            <FullStackWordpressSlider />
          </div>
        </div>
      </div>

      <div className="bg-[#3078FF] py-[3.5rem]">
        <ul className="mx-auto flex h-[7rem] max-w-[120rem] items-center gap-[5rem]">
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
    </section>
  );
};

export default FullStackWordpressSection;

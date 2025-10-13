"use client";

import { useGSAP } from "@gsap/react";
import CommonBtn3 from "../common/CommonBtn3";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useRef } from "react";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";
import DarkBgCheck from "@/assets/icons/dark-bg-check.svg";

const WhatWeCanDesignSection = () => {
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
      className="relative px-[3rem] py-[8.4rem] xl:px-[0rem]"
    >
      <div className="mx-auto max-w-[111rem]">
        <div className="flex items-center justify-between gap-[4rem]">
          <div className="flex w-[61.2rem] flex-col items-start">
            <div ref={labelRef}>
              <SectionLabel2
                text="Our Services"
                bgColor="bg-[#FFC300]"
                textColor="text-[#070707]"
              />
            </div>

            <h2 className="mt-[2rem] text-[6rem] leading-[7.4rem] font-bold tracking-[-0.03em] text-[#070707]">
              What we can design and deliver for you.
            </h2>

            <p className="mt-[1.6rem] mb-[3.8rem] max-w-[57.4rem] text-[2.2rem] leading-[3.2rem] font-medium text-[#070707]">
              From websites and eCommerce stores to apps and dashboards — we
              design every interface in Figma, making it easy to collaborate,
              iterate, and hand over to development without friction.
            </p>

            <CommonBtn3
              label="About CreativePixels"
              href="/about"
              bgColor="#FF37B3"
            />
          </div>

          <div
            className="relative w-[41.3rem] rounded-[1.8rem] px-[.9rem] pt-[1.6rem] pb-[4rem]"
            style={{
              background: "linear-gradient(270deg, #FFD801 0%, #EF7821 100%)",
              backdropFilter: "blur(10px)",
            }}
          >
            <CLetter2 className="absolute top-[17rem] right-[-33rem] z-[9] w-[45rem]" />

            <div className="relative z-[10] size-full rounded-[1.2rem] bg-white px-[3.3rem] py-[2.2rem]">
              <h5 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                Our Website Capabilities
              </h5>

              <ul className="mt-[2.2rem] flex flex-col items-start">
                {[
                  "Web Design",
                  "eCommerce",
                  "UX Design",
                  "Responsive Design",
                  "Wireframes",
                  "Strategy",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-[1.5rem] text-[2.2rem] leading-[4.4rem] font-medium text-[#070707]"
                  >
                    <DarkBgCheck className="size-[2.4rem]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanDesignSection;

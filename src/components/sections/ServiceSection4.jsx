"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke31 from "@/assets/decorative-elements/line-stroke-31.svg";
import DarkBgCheck from "@/assets/icons/dark-bg-check.svg";
import { servicesData } from "@/constants/maintenanceGrowthPage";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";

const ServiceSection4 = () => {
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
      className="relative px-[3rem] pt-[8rem] pb-[7rem] xl:px-[0rem] xl:pt-[9.2rem]"
      style={{
        background:
          "url('/images/web-design-service-gradient-bg.png') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke31 className="absolute top-[-5.8rem] left-[-103.9rem] w-full" />
      </div>

      <div className="absolute inset-0 z-[0] hidden xl:block">
        <CLetter2 className="absolute top-[-15rem] right-[-10rem] w-[30rem] rotate-[-20deg]" />
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

          <h4 className="text-center text-[4rem] leading-[5rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
            What is included in our website maintenance services?
          </h4>
        </div>

        <div className="service-4-glass mt-[4rem] grid grid-cols-3 gap-[9.3rem] p-[5rem]">
          {servicesData.map((service, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Title */}
              <h4
                className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]"
                style={{ color: service.color }}
              >
                {service.title}
              </h4>

              <hr className="mt-[2.8rem] mb-[3.5rem] border-t border-white/40" />

              {/* List */}
              <ul className="flex flex-col gap-[2rem]">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-[1.9rem] text-[1.8rem] leading-[2.6rem] font-normal text-white"
                  >
                    <i className="relative top-[.25rem] min-w-min">
                      <DarkBgCheck className="size-[2.2rem]" />
                    </i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection4;

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import { approachItems } from "@/constants/uiUxPage";
import Link from "next/link";

const OurApproachSection = () => {
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
    <section ref={container} className="px-[3rem] py-[9.6rem] xl:px-[0rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex items-center justify-between gap-[4rem]">
          <div className="flex w-[46.6rem] flex-col items-start">
            <div ref={labelRef}>
              <SectionLabel2
                text="Our Approach"
                bgColor="bg-[#F14A58]"
                textColor="text-[#ffffff]"
              />
            </div>

            <h2 className="mt-[2.4rem] text-[5.2rem] leading-[6rem] font-semibold tracking-[-0.02em] text-[#070707]">
              A practical design process that's clear and collaborative.
            </h2>

            <p className="mt-[1.6rem] mb-[3.8rem] max-w-[44.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-[#070707]">
              We keep things simple: every UI/UX project starts with a
              consultation call to understand your goals. From there, we design
              in Figma and deliver websites, apps, and dashboards that are
              modern, responsive, and ready to build.
            </p>

            <CommonBtn3 label="Book a 15-min free call" href="/contact" />
          </div>

          <div className="grid w-[66rem] grid-cols-2 gap-x-[9rem] gap-y-[2rem]">
            {approachItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-col items-start">
                  <div
                    className={`flex size-[8.8rem] items-center justify-center rounded-full ${item.bgColor}`}
                    style={{ boxShadow: "0px 8px 24px -14px #000000B2" }}
                  >
                    <IconComponent className={item.iconClass} />
                  </div>

                  <h3 className="mt-[2rem] mb-[.4rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                    {item.title}
                  </h3>

                  <p className="text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-[3.8rem] grid w-full grid-cols-1 items-center gap-[3.3rem] text-center md:grid-cols-2 xl:grid-cols-3">
          <div className="contact-details-bg !px-[2.2rem] !py-[5rem]">
            <Link
              href="tel:01618202667"
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
            >
              0161 820 2667
            </Link>
          </div>

          <div className="contact-details-bg !px-[2.2rem] !py-[5rem]">
            <Link
              href="mailto:hello@cp.agency"
              className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
            >
              hello@cp.agency
            </Link>
          </div>

          <div className="contact-details-bg !px-[2.2rem] !py-[5rem] md:col-span-2 xl:col-span-1">
            <button
              data-cal-namespace="15min"
              data-cal-link="hassan-iqbal-mznzu9/15min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="cursor-pointer text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FC529F]"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;

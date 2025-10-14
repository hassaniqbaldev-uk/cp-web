"use client";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CommonBtn3 from "../common/CommonBtn3";
import KeyBenefitSlider from "../common/KeyBenefitSlider";
import LineStroke32 from "@/assets/decorative-elements/line-stroke-32.svg";

const KeyBenefitSection = () => {
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
      className="relative overflow-hidden px-[3rem] py-[7.8rem] xl:px-[0rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke32 className="absolute top-[12.6rem] left-[40rem] w-full" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center justify-between gap-[4rem] lg:flex-row">
          <div className="flex w-full flex-col items-center text-center lg:w-[56.8rem] lg:items-start lg:text-left">
            <div ref={labelRef}>
              <SectionLabel2
                text="Key Benefits"
                bgColor="bg-[#FFC300]"
                textColor="text-[#070707]"
              />
            </div>

            <h2 className="mt-[2rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-[#070707] md:text-[6rem] md:leading-[7.4rem]">
              Why great design drives better results.
            </h2>

            <p className="mt-[2rem] mb-[4.7rem] w-full text-[1.8rem] leading-[2.8rem] font-medium text-[#070707] md:text-[2.2rem] md:leading-[3.2rem] lg:max-w-[54.2rem]">
              Investing in professional UI/UX design isn't just about looks —
              it’s about creating websites, apps, and dashboards that are easier
              to use, faster to launch, and built to grow with your business.
            </p>

            <CommonBtn3 label="Book a 15-min free call" href="/call" />
          </div>

          <div className="h-[25rem] w-full overflow-hidden rounded-[2rem] bg-amber-300 md:h-[52rem] lg:w-[58.5rem]">
            <img
              src="/images/key-benefits-card img.png"
              alt="Image"
              className="size-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-[5rem] w-full">
          <KeyBenefitSlider />
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitSection;

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import { ourProcessSteps } from "@/constants/smPostPage";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";

const OurProcessSection3 = () => {
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
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[10rem]"
      style={{
        background:
          "url('/images/our-process-gradient-bg.png') no-repeat center center/cover",
      }}
    >
      <div className="absolute inset-0 z-[0] hidden xl:block">
        <CLetter2 className="absolute top-[-6rem] right-[-10rem] w-[30rem] rotate-[-20deg]" />
      </div>
      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-start">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Process"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="mt-[2rem] mb-[.7rem] max-w-[62.9rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7.4rem]">
            Our Innovative Branding Process
          </h4>

          <p className="max-w-[89.4rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
            Enhance your online visibility with a high-performing website that
            captivates users, drives conversions, and provides quantifiable
            outcomes.
          </p>
        </div>

        <div className="relative mt-[4rem]">
          <div className="grid grid-cols-4">
            {ourProcessSteps.map((step) => (
              <div key={step.id} className="flex flex-col">
                {/* Progress line + colored dot */}
                <div className="relative">
                  <hr
                    className="rounded-[6px] border-t-[6px] border-white/10"
                    style={{ boxShadow: "0px 4px 12px 0px #00000040" }}
                  />

                  <div
                    className="absolute top-1/2 left-0 size-[2.6rem] -translate-y-1/2 rounded-full outline-2 outline-white"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                {/* Step number + label */}
                <h3 className="relative mt-[3rem] text-[11rem] leading-[11rem] font-bold text-white/10">
                  <span>{step.id}</span>
                  <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                    {step.label}
                  </span>
                </h3>

                {/* Title + description */}
                <div className="flex max-w-[16.3rem] flex-col gap-[8px]">
                  <h4
                    className="text-[1.8rem] leading-[2.6rem] font-bold"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h4>

                  <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection3;

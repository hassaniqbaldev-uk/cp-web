"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Cta2BgStroke from "@/components/decorative-elements/Cta2BgStroke";
import { MotionEffect } from "@/components/effects/motion-effect";

const Cta2 = ({
  title = "Facing these challenges right now?",
  description = "You don't have to tackle them alone. Let's discuss your specific situation.",
  buttonText = "Start a project",
}) => {
  return (
    <MotionEffect
      slide={{ direction: "down" }}
      fade
      inView
      delay={0.1}
      transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
    >
      <div className="relative container rounded-[3rem] border border-[#d7d7d7] bg-[#EC9122] px-[2rem] py-[5.5rem] md:px-[6rem]">
        <div className="pointer-events-none absolute top-[-3rem] right-[-2rem] z-[2] select-none xl:right-[6rem]">
          <Cta2BgStroke />
        </div>

        <div className="relative z-[10] flex h-full w-full flex-col items-end justify-between gap-[2rem] xl:flex-row">
          <div className="flex w-full flex-col items-center text-center xl:w-[70rem] xl:items-start xl:text-left">
            <div className="mb-[1.5rem] max-w-[50rem]">
              <SectionTitle text={title} textColor="#ffffff" />
            </div>

            <div className="max-w-[59rem]">
              <SectionDescription text={description} textColor="#ffffff" />
            </div>
          </div>

          <div className="relative flex w-full justify-center xl:w-[36rem] xl:justify-end">
            <PrimaryButton
              text={buttonText}
              href="/contact"
              bGcolor="#312749"
              textColor="#FFFFFF"
              ctaPosition="service-detail-cta2"
            />
          </div>
        </div>
      </div>
    </MotionEffect>
  );
};

export default Cta2;

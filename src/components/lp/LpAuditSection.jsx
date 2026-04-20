import React, { Suspense } from "react";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import SectionDescription from "../ui/SectionDescription";
import LpAuditForm from "./LpAuditForm";

const LpAuditSection = () => {
  return (
    <section
      id="audit"
      className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]"
    >
      <div className="relative z-[10] container">
        <div className="flex flex-col items-center justify-center gap-[4rem] xl:flex-row">
          <div className="flex w-full flex-col items-center text-center md:w-[54rem] xl:items-start xl:text-left">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="Free wordpress Audit" textColor="#3078FF" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="mt-[1.3rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
                Get Your Free{" "}
                <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                  WordPress Website Audit
                </span>
              </h2>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.3}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="max-w-[58.5rem]">
                <SectionDescription
                  text="We’ll show you exactly what’s stopping your website from converting  and how to fix it."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <h5 className="mt-[3rem] text-[1.8rem] leading-[2.2rem] font-bold tracking-normal md:text-[2rem] md:leading-[2.5rem]">
                No spam. Your information is 100% secure.
              </h5>
            </MotionEffect>
          </div>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.5}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[59.5rem]"
          >
            <Suspense fallback={null}>
              <LpAuditForm />
            </Suspense>
          </MotionEffect>
        </div>
      </div>
    </section>
  );
};

export default LpAuditSection;

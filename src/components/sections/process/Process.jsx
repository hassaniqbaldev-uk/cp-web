"use client";
import Image from "next/image";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { PROCESS_CARD } from "@/contants";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const ProcessSlider = dynamic(() => import("@/components/ui/ProcessSlider"), {
  ssr: false,
  loading: () => <div className="h-[35.6rem]" />, // placeholder height to prevent layout shift
});

const Process = () => {
  return (
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt="Background Image"
          fill
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          sizes="100vw"
          quality={65}
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-between gap-[1.5rem] md:gap-[4rem] xl:flex-row xl:items-start">
            <div className="flex w-[30rem] flex-col items-center gap-[1rem] text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionLabel text="The Process" textColor="#FF37B3" />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <h4 className="text-[3rem] leading-[3.5rem] font-bold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
                  Your roadmap from
                  <span className="bg-gradient-orange-pink block bg-clip-text text-transparent">
                    idea to impact.
                  </span>
                </h4>
              </MotionEffect>
            </div>

            <div className="flex w-[30rem] flex-col items-center gap-[3.2rem] text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionDescription
                    text="We've refined our delivery process over 10 years to minimise risk and maximise speed to market."
                    textColor="#ffffff"
                  />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.55}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <PrimaryButton
                    text="Start Your Project"
                    textColor="#312749"
                    bGcolor="#ffffff"
                    href="/contact"
                  />
                </div>
              </MotionEffect>
            </div>
          </div>

          <div className="mt-[6.5rem] hidden grid-cols-4 xl:grid">
            {PROCESS_CARD.map((item, idx) => (
              <MotionEffect
                key={item.step}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4 + idx * 0.15}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div className="flex h-full flex-col items-center gap-[3.8rem]">
                  <div className="relative flex w-full justify-center">
                    <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t border-white/30" />

                    <div
                      style={{
                        boxShadow: item.boxShadow,
                        backgroundColor: item.color,
                      }}
                      className="relative z-[1] inline-flex size-[7.9rem] items-center justify-center rounded-[1.6rem] text-center text-[3.5rem] font-extrabold tracking-[-0.02em] text-white"
                    >
                      0{item.step}
                    </div>
                  </div>

                  <div className="process-card flex flex-col items-start justify-center gap-[3.5rem] py-[3rem]">
                    <div className="flex h-full flex-col items-start px-[2.8rem] text-left">
                      <h5
                        style={{ color: item.color }}
                        className="mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
                      >
                        {item.title}
                      </h5>

                      <p className="text-[1.6rem] leading-[2.4rem] font-normal text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionEffect>
            ))}
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="block w-full xl:hidden">
              <ProcessSlider PROCESS_CARD={PROCESS_CARD} />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default Process;

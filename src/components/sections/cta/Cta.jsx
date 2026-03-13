"use client";
import Image from "next/image";
import CtaBg from "@/assets/images/backgrounds/cta-bg.webp";
import WaveHandIcon from "@/assets/icons/ui/wave-hand-icon.svg";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import GradientButton from "@/components/ui/GradientButton";
import CtaBgStroke from "@/components/decorative-elements/CtaBgStroke";
import HassanAvatar from "@/assets/icons/ui/hassan-avatar.png";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { motion } from "framer-motion";
import { MotionEffect } from "@/components/effects/motion-effect";

const Cta = () => {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <>
      <MotionEffect slide={{ direction: "down" }} fade inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
        <div className="relative container px-[3rem] pt-[2.3rem] pb-[3rem] md:px-[10rem] md:pt-[5.6rem] md:pb-[4rem]">
          {/*Background Image*/}
          <Image
            src={CtaBg}
            alt="Background Image"
            fill
            priority
            className="pointer-events-none absolute inset-0 z-[1] rounded-[3rem] object-cover select-none"
            unoptimized
          />

          <div className="pointer-events-none absolute top-[35rem] right-[-3rem] z-[2] select-none xl:top-[3.6rem]">
            <CtaBgStroke />
          </div>

          <div className="relative z-[10] flex h-full w-full flex-col items-center justify-between gap-[5rem] text-center xl:flex-row xl:text-left">
            <div className="md:w-[61.6rem]">
              <div className="inline-flex h-[3.4rem] items-center justify-center gap-[1rem] rounded-[20rem] border-[0.5px] border-white/10 bg-white/10 px-[1rem] py-[.5rem] md:h-[4.4rem] md:px-[2rem] md:py-[1rem]">
                <div className="relative size-[1.3rem] md:size-[1.8rem]">
                  <div className="absolute top-1/2 left-1/2 size-[1.3rem] -translate-1/2 animate-ping rounded-full bg-[#FFE400]/20 md:size-[1.8rem]" />
                  <div className="absolute top-1/2 left-1/2 size-[.7rem] -translate-1/2 rounded-full bg-[#FFE400] md:size-[1rem]" />
                </div>

                <span className="text-[1.2rem] leading-[2.4rem] font-medium text-white md:text-[1.6rem]">
                  Book now for {currentMonth} Slots
                </span>
              </div>

              <div className="mt-[1.6rem] md:mt-[2rem]">
                <SectionTitle
                  text="Let's design, build, and grow your next big project."
                  textColor="#ffffff"
                />
              </div>

              <div className="mt-[1.8rem] mb-[2.4rem] md:mt-[2rem] md:mb-[4rem]">
                <SectionDescription
                  text="Book a free 15-minute call – no hard sell, just a chance to see if working together makes sense."
                  textColor="#ffffff"
                />
              </div>

              <div className="flex items-center justify-center gap-[1rem] md:gap-[2rem] xl:justify-start">
                <GradientButton text="Get Free Consultation" />

                <motion.i
                  className="hidden md:block"
                  animate={{ rotate: [0, -10, 0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  style={{ transformOrigin: "bottom right" }}
                >
                  <Image
                    src={WaveHandIcon}
                    alt="Icon"
                    width={58}
                    height={58}
                    unoptimized
                  />
                </motion.i>
              </div>
            </div>

            <div className="relative h-[37.8rem] w-full md:w-[30.8rem]">
              <div className="absolute bottom-0 left-1/2 z-[1] h-[36.3rem] w-[20rem] -translate-x-1/2 rounded-[3.2rem] bg-[#141414]/30 backdrop-blur-[10px] md:w-[25.8rem]" />

              <div className="absolute top-0 left-0 z-[2] flex h-[36.3rem] w-full flex-col items-center justify-center gap-[2rem] rounded-[3.2rem] bg-white px-[2.5rem] text-center">
                <div className="relative size-[9.9rem] rounded-full">
                  <div className="absolute top-[1.7px] right-[1.7px] size-[2.4rem] rounded-full bg-[#25014A]">
                    <div className="absolute top-1/2 left-1/2 size-[1.7rem] -translate-1/2 rounded-full bg-[#7EE972]" />
                  </div>

                  <Image
                    src={HassanAvatar}
                    alt="Avatar Image"
                    className=""
                    width={99}
                    height={99}
                    unoptimized
                  />
                </div>

                <h4 className="text-[2.6rem] leading-[3.3rem] font-semibold tracking-[-0.02em] text-black">
                  Book a FREE <br /> strategy call with Hassan.
                </h4>

                <PrimaryButton
                  text="Book a Call"
                  textColor="#FFFFFF"
                  bGcolor="#FF37B3"
                  href="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </MotionEffect>
    </>
  );
};
export default Cta;

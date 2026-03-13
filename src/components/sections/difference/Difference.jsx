"use client";
import { Switch } from "@/components/ui/switch";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import DifferenceGradientBg from "@/assets/images/backgrounds/difference-gradient-bg.svg";
import DifferenceGradientBg2 from "@/assets/images/backgrounds/difference-gradient-bg-02.svg";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import { useState } from "react";
import ExpertiseIcon from "@/assets/icons/ui/expertise-icon.svg";
import CostIcon from "@/assets/icons/ui/cost-icon.svg";
import ScaleableIcon from "@/assets/icons/ui/scaleable-icon.svg";
import FasterIcon from "@/assets/icons/ui/faster-icon.svg";
import FocusIcon from "@/assets/icons/ui/focus-icon.svg";
import GridIcon from "@/assets/icons/ui/grid-icon.svg";
import LimitedIcon from "@/assets/icons/ui/limited-icon.svg";
import HigherIcon from "@/assets/icons/ui/higher-icon.svg";
import SlowIcon from "@/assets/icons/ui/slow-icon.svg";
import HardIcon from "@/assets/icons/ui/hard-icon.svg";
import LessIcon from "@/assets/icons/ui/less-icon.svg";
import WeakerIcon from "@/assets/icons/ui/weaker-icon.svg";
import DifferenceSlider from "@/components/ui/DifferenceSlider";
import DifferenceSlider2 from "@/components/ui/DifferenceSlider2";

export const withDifferenceData = [
  {
    id: 1,
    icon: ExpertiseIcon,
    title: "Expertise on Demand",
    description:
      "Tap into senior designers, developers, and strategists when you need them.",
  },
  {
    id: 2,
    icon: CostIcon,
    title: "Cost-Efficient",
    description:
      "Deliver more projects without the overheadof hiring full-time. Scalable Capacity - Scale up or down",
  },
  {
    id: 3,
    icon: ScaleableIcon,
    title: "Scalable Capacity",
    description:
      "Scale up or down instantly based on client demand. Faster Delivery - Hit deadlines with",
  },
  {
    id: 4,
    icon: FasterIcon,
    title: "Faster Delivery",
    description: "Hit deadlines with proven processes and experienced teams.",
  },
  {
    id: 5,
    icon: FocusIcon,
    title: "Focus on Clients",
    description: "Spend more time building relationships and winning new work.",
  },
  {
    id: 6,
    icon: GridIcon,
    title: "Seamless Branding",
    description: "Every project delivered under your agency's name.",
  },
];

export const withoutDifferenceData = [
  {
    id: 1,
    icon: LimitedIcon,
    title: "Limited Skills",
    description: "In-house only, gaps in expertise.",
  },
  {
    id: 2,
    icon: HigherIcon,
    title: "Higher Overheads",
    description: "Salaries, training, and recruitment costs.",
  },
  {
    id: 3,
    icon: SlowIcon,
    title: "Slow Turnaround",
    description: "Capacity limits delay projects.",
  },
  {
    id: 4,
    icon: HardIcon,
    title: "Hard to Scale",
    description: "Struggle to take on new clients quickly.",
  },
  {
    id: 5,
    icon: LessIcon,
    title: "Less Strategy Time",
    description: "Stuck in production, not growth.",
  },
  {
    id: 6,
    icon: WeakerIcon,
    title: "Weaker Offering",
    description: "Can’t always deliver the full package under your brand.",
  },
];

const Difference = () => {
  const [isWith, setIsWith] = useState(true); // default: show "With"

  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[2rem] md:gap-[5rem]">
            <div className="flex flex-col items-center justify-center gap-[5px] text-center">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <SectionLabel text="Difference" textColor="#FF37B3" />
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <SectionTitle
                  text="The white label difference..."
                  textColor="#FFFFFF"
                />
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <SectionDescription
                  text="We identify and fix the bottlenecks that are choking your growth."
                  textColor="#FFFFFF"
                />
              </MotionEffect>
            </div>

            <div className="mt-[3rem] flex w-full flex-col items-center gap-[5rem]">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div className="flex items-center justify-center gap-[2rem] text-[2.8rem] leading-[3.5rem] font-semibold tracking-[-0.02em] text-white md:gap-[4rem] md:text-[3.4rem] md:leading-[4.8rem]">
                  <span>With</span>
                  <Switch
                    checked={!isWith}
                    onCheckedChange={(val) => setIsWith(!val)}
                  />
                  <span>Without</span>
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.55}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
                className="w-full"
              >
                <div className="w-full">
                  {isWith ? (
                    <>
                      <div className="relative mt-[5rem] hidden h-[32rem] w-full max-w-[120rem] grid-cols-6 gap-[2rem] rounded-[5rem] px-[3rem] xl:grid">
                        <Image
                          src={DifferenceGradientBg}
                          alt="Background Image"
                          fill
                          priority
                          className="pointer-events-none absolute inset-0 z-[1] select-none"
                          unoptimized
                        />

                        <span className="absolute top-1/2 left-[-10.6rem] inline-flex h-[4rem] -translate-y-1/2 -rotate-90 items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] border-2 border-b-0 border-white/30 px-[6rem] text-center text-[2.2rem] leading-[3.2rem] font-medium text-white">
                          With
                        </span>

                        {withDifferenceData.map((item) => (
                          <div
                            key={item.id}
                            className="relative top-[-2.4rem] z-[10] flex flex-col items-center gap-[4.4rem] text-center"
                          >
                            <i
                              style={{
                                background:
                                  "linear-gradient(301.75deg, rgba(255, 255, 255, 0.1) 1.41%, rgba(157, 157, 157, 0.1) 95.05%)",
                                backdropFilter: "blur(3.3rem)",
                              }}
                              className="relative inline-flex size-[4.9rem] items-center justify-center rounded-[1.2rem] border border-white"
                            >
                              <img src={item.icon.src} alt={item.title} />
                            </i>

                            <div className="flex flex-col gap-[1rem]">
                              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                                {item.title}
                              </h4>

                              <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="block w-full xl:hidden">
                        <DifferenceSlider />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative mt-[5rem] hidden h-[32rem] w-full max-w-[120rem] grid-cols-6 gap-[2rem] rounded-[5rem] px-[3rem] xl:grid">
                        <Image
                          src={DifferenceGradientBg2}
                          alt="Background Image"
                          fill
                          priority
                          className="pointer-events-none absolute inset-0 z-[1] select-none"
                          unoptimized
                        />
                        <span className="absolute top-1/2 right-[-12rem] inline-flex h-[4rem] -translate-y-1/2 rotate-90 items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] border-2 border-b-0 border-white/30 px-[6rem] text-center text-[2.2rem] leading-[3.2rem] font-medium text-white">
                          Without
                        </span>

                        {withoutDifferenceData.map((item) => (
                          <div
                            key={item.id}
                            className="relative top-[-2.4rem] z-[10] flex flex-col items-center gap-[4.4rem] text-center"
                          >
                            <i
                              style={{
                                background:
                                  "linear-gradient(301.75deg, rgba(255, 255, 255, 0.1) 1.41%, rgba(157, 157, 157, 0.1) 95.05%)",
                                backdropFilter: "blur(3.3rem)",
                              }}
                              className="relative inline-flex size-[4.9rem] items-center justify-center rounded-[1.2rem] border border-white/30"
                            >
                              <img src={item.icon.src} alt={item.title} />
                            </i>

                            <div className="flex flex-col items-center gap-[1rem] text-center">
                              <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                                {item.title}
                              </h4>

                              <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="block w-full xl:hidden">
                        <DifferenceSlider2 />
                      </div>
                    </>
                  )}
                </div>
              </MotionEffect>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Difference;

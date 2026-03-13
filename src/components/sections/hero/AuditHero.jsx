"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import ClockIcon from "@/assets/icons/ui/clock-icon.svg";
import CheckmarkIcon2 from "@/assets/icons/ui/checkmark-icon-2.svg";
import ShieldCheckIcon from "@/assets/icons/ui/shield-check-icon.svg";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import Image from "next/image";

import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import ServicesLogoShape from "@/components/decorative-elements/ServicesLogoShape";
import AuditForm from "@/components/ui/AuditForm";

const AuditHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[10rem] pb-[5rem] md:pt-[19.2rem] xl:px-[0rem] xl:pb-[10rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[5.8px] left-[12px] h-[8rem] w-[4rem] rotate-[25deg] opacity-70 md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ServicesLogoShape className="absolute right-[-2rem] bottom-[7.8rem] h-[8rem] w-[4rem] rotate-[-34deg] opacity-70 select-none md:h-[17.7rem] md:w-[12.9rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[4rem] xl:flex-row">
            <div className="flex w-full flex-col items-center text-center md:w-[63rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
              >
                <SectionLabel
                  text="Only 3 Free Audit Slots Left This Week"
                  textColor="#FF37B3"
                />
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
                delay={0.15}
              >
                <h1 className="mt-[1.3rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8.5rem]">
                  Unlock your website&apos;s{" "}
                  <span className="bg-gradient-orange-yellow bg-clip-text text-transparent">
                    hidden revenue.
                  </span>
                </h1>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
                delay={0.3}
              >
                <div className="max-w-[58.5rem]">
                  <SectionDescription
                    text="Stop guessing why you aren't growing. We'll manually analyse your site's UX, SEO, and Performance and send you a custom video report."
                    textColor="#625C70"
                  />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.45}
              >
                <div className="my-[3.7rem] flex w-full flex-col items-start gap-[1.2rem] rounded-[2rem] border border-[#3078FF] bg-white px-[3rem] py-[2.7rem] text-left md:gap-[2.5rem] md:py-[3.5rem]">
                  <div className="flex items-center gap-[.8rem] md:gap-[1.2rem]">
                    <i>
                      <Image
                        src={ClockIcon}
                        alt="Icon"
                        width={24}
                        height={24}
                        className="size-[1.8rem] md:size-[2.4rem]"
                      />
                    </i>

                    <h4 className="text-[1.8rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[2.2rem]">
                      What you get
                    </h4>
                  </div>

                  <ul className="grid grid-cols-1 gap-x-[2.8rem] gap-y-[.6rem] md:grid-cols-2 md:gap-y-[1.2rem]">
                    {[
                      "Video walkthrough of issues",
                      "Detailed Conversion Roadmap",
                      "SEO Missed Opportunities",
                      "Site Speed Analysis",
                      "Competitor Benchmarking",
                      "3 Quick-Win Fixes",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-[1.2rem]">
                        <i className="inline-flex size-[2.4rem] min-w-[2.4rem] items-center justify-center rounded-full bg-[#44b276]/20">
                          <Image
                            src={CheckmarkIcon2}
                            alt="Icon"
                            width={14}
                            height={14}
                          />
                        </i>

                        <span className="text-[1.6rem] font-semibold tracking-normal text-[#625C70]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.6}
              >
                <div className="flex items-center gap-[1.6rem] text-left">
                  <i>
                    <Image
                      src={ShieldCheckIcon}
                      alt="Icon"
                      width={18}
                      height={21}
                    />
                  </i>

                  <span className="text-[1.6rem] leading-[2rem] font-normal tracking-normal text-[#625C70]">
                    Delivered to your inbox within 48 hours.
                  </span>
                </div>
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
            >
              <AuditForm />
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuditHero;

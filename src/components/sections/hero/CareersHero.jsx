"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/contact-hero-bg.webp";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import { MotionEffect } from "@/components/effects/motion-effect";

const CareersHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[18.3rem] pb-[11.2rem] xl:px-[0rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[5.8px] left-[30px] h-[8rem] w-[4rem] rotate-[25deg] opacity-50 md:h-[21.6rem] md:w-[10.7rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute right-[5rem] bottom-[5rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:h-[17.3rem] md:w-[18.6rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center text-center">
            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel text="Careers" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="mt-[1rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                <span className="block">Build the</span>{" "}
                <span className="bg-gradient-yellow-orange bg-clip-text text-transparent">
                  Extraordinary.
                </span>
              </h1>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.3}
            >
              <div className="mb-[4rem] max-w-[68rem]">
                <SectionDescription
                  text="We're a team of strategists, designers, and engineers who refuse to settle for 'good enough.' Join us in Manchester or remotely."
                  textColor="#ffffff"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
            >
              <div>
                <PrimaryButton
                  text="View Open Roles"
                  textColor="#312749"
                  bGcolor="#FFFFFF"
                  href=""
                />
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersHero;

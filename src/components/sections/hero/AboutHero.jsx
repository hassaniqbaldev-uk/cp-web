"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/contact-hero-bg.webp";
import HeroCpLogo from "@/assets/images/hero/hero-cp-logo.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import AboutHeroLogoShape1 from "@/components/decorative-elements/AboutHeroLogoShape1";
import { MotionEffect } from "@/components/effects/motion-effect";
import AboutHeroSlider from "@/components/ui/AboutHeroSlider";

const AboutHero = () => {
  return (
    <>
      <section className="relative h-[63rem] w-full px-[2rem] pt-[10rem] md:h-[75rem] md:pt-[18rem] lg:h-[90rem] xl:px-[0rem]">
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
          <HomeHeroLogoShape1 className="absolute top-[5.8px] left-[12px] z-[2] h-[8rem] w-[4rem] rotate-[25deg] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <AboutHeroLogoShape1 className="pointer-events-none absolute top-[50rem] left-[25rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 select-none md:left-[30rem] md:h-[22.5rem] md:w-[11.2rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <ContactHeroLogoShape1 className="absolute right-[2rem] bottom-[2rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:right-[-5rem] md:bottom-[25rem] md:h-[16.6rem] md:w-[17.9rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
              >
                <div>
                  <SectionLabel text="Who We Are" textColor="#FF37B3" />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
                delay={0.15}
              >
                <h1 className="mt-[1rem] max-w-[66rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                  <span className="block">A digital agency that</span>
                  <span className="bg-gradient-yellow-pink block bg-clip-text text-transparent">
                    gives a damn.
                  </span>
                </h1>
              </MotionEffect>
            </div>
          </div>

          <MotionEffect
            slide={{ direction: "down" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            delay={0.3}
          >
            <div className="relative mt-[6.6rem] h-[30rem] w-full md:h-[45rem] lg:h-[60rem]">
              <Image
                src={HeroCpLogo}
                width={315}
                height={331}
                alt="CP Logo"
                unoptimized
                className="absolute top-[-25rem] right-[2rem] z-[10] hidden xl:block"
              />

              <AboutHeroSlider />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default AboutHero;

"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/contact-hero-bg.webp";
import HowWeWorkHeroCardImg from "@/assets/images/cards/how-we-work-hero-card-img.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import AboutHeroLogoShape1 from "@/components/decorative-elements/AboutHeroLogoShape1";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";

const HowWeWorkHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[15rem] pb-[5.3rem] xl:px-[0rem] xl:pt-[10rem]">
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
          <HomeHeroLogoShape1 className="absolute top-[5.8px] left-[12px] h-[8rem] w-[4rem] rotate-[25deg] opacity-50 md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <AboutHeroLogoShape1 className="absolute top-[12rem] right-[3rem] h-[8rem] w-[4rem] rotate-[40deg] opacity-50 md:h-[18.5rem] md:w-[7.2rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute right-[20rem] bottom-[1rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:right-[90rem] md:bottom-[5rem] md:h-[11.2rem] md:w-[12rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex items-center justify-center gap-[15rem]">
            <div className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
              >
                <SectionLabel text="Our Process" textColor="#FF37B3" />
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
                delay={0.15}
              >
                <h1 className="mt-[1rem] mb-[2rem] max-w-[63rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                  <span className="block">We bring order to</span>
                  <span className="bg-gradient-yellow-pink block bg-clip-text text-transparent">
                    digital chaos.
                  </span>
                </h1>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.3}
              >
                <div className="max-w-[54rem]">
                  <SectionDescription
                    text="Great products aren't born by accident. They are the result of a rigorous, proven process that minimises risk and maximises ROI."
                    textColor="#ffffff"
                  />
                </div>
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
              className="relative hidden h-[48.4rem] w-[48.4rem] items-center justify-center xl:flex"
            >
              <div className="relative hidden h-[48.4rem] w-[48.4rem] items-center justify-center xl:flex">
                <Image
                  src={HowWeWorkHeroCardImg}
                  width={484}
                  height={484}
                  alt="Card Image"
                  unoptimized
                />
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWorkHero;

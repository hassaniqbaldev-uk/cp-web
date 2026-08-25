"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { motion } from "framer-motion";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import { useEffect } from "react";

const TestimonialsHero = () => {

  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[19rem] pb-[13rem] xl:px-[0rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt=""
          fill
          sizes="100vw"
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[2rem] left-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-50 md:h-[17rem] md:w-[8.4rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape2 className="absolute bottom-[10rem] left-[4rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:left-[10rem] md:h-[17rem] md:w-[8.5rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute top-[15rem] right-[5rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:h-[12.4rem] md:w-[13.3rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel text="TESTIMONIALS" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="mt-[1.5rem] mb-[2.5rem] max-w-[89rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
                In our clients&apos; own words.
              </h1>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.3}
            >
              <div className="max-w-[76rem]">
                <SectionDescription
                  text="Every review below is from a real, named client, on a real project we designed, built or grew. Read what it is like to work with us, in their words."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
            >
              <div className="mt-[4rem] flex flex-wrap items-center justify-center gap-[1.8rem]">
                <PrimaryButton
                  text="See Case Studies"
                  textColor="#FFFFFF"
                  bGcolor="#312749"
                  href="/case-studies"
                />

                <PrimaryButton
                  text="Start a project"
                  href="/contact"
                  bGcolor="#FF37B3"
                  textColor="#FFFFFF"
                  ctaPosition="testimonials-hero"
                />
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsHero;

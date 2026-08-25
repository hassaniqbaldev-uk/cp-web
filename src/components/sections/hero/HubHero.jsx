"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";

// CP-08: a prop-driven hub hero, mirroring the SolutionsHero treatment so hub pages share one hero.
// `title` accepts a string or ready-made JSX (for line breaks). `primary`/`secondary` are optional CTAs.
const HubHero = ({
  label = "",
  labelColor = "#FF37B3",
  accentColor = "#FF37B3",
  title,
  description = "",
  primary,
  secondary,
  ctaPosition,
}) => {
  return (
    <section className="relative w-full overflow-hidden px-[2rem] pt-[19rem] pb-[13rem] xl:px-[0rem]">
      <Image
        src={HeroBg}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        unoptimized
      />

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
          {label && (
            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel text={label} textColor={labelColor} />
              </div>
            </MotionEffect>
          )}

          <MotionEffect
            slide={{ direction: "down" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            zoom
            delay={0.15}
          >
            <h1 className="mt-[1.5rem] mb-[2.5rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
              {title}
            </h1>
          </MotionEffect>

          {description && (
            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.3}
            >
              <div className="mb-[4rem] max-w-[74rem]">
                <SectionDescription text={description} textColor="#625C70" />
              </div>
            </MotionEffect>
          )}

          {(primary || secondary) && (
            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
            >
              <div className="flex flex-wrap items-center justify-center gap-[1.8rem]">
                {secondary && (
                  <PrimaryButton
                    text={secondary.text}
                    textColor="#FFFFFF"
                    bGcolor="#312749"
                    href={secondary.href}
                  />
                )}
                {primary && (
                  <PrimaryButton
                    text={primary.text}
                    href={primary.href}
                    bGcolor={accentColor}
                    textColor="#FFFFFF"
                    ctaPosition={ctaPosition}
                  />
                )}
              </div>
            </MotionEffect>
          )}
        </div>
      </div>
    </section>
  );
};

export default HubHero;

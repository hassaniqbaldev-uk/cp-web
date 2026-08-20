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

// Services hub hero + positioning statement (CP-06 items 1 & 2).
// Matches the site's hero treatment (audit-hero background + decorative shapes +
// MotionEffect staggered entrance, spring 120/20, 0.15s stagger) — the same pattern
// as ServicesDetailHero, reusing the shared primitives rather than a new look.
// prefers-reduced-motion is handled inside MotionEffect itself (one implementation
// for the whole site), so this hero just uses the primitive like every other hero.
// ALL COPY HERE IS PLACEHOLDER — final wording is CP-04. No Cal.com / Book a Call
// (D40); the single primary CTA is "Start a project" → the enquiry flow.
const SPRING = { type: "spring", stiffness: 120, damping: 20 };

const ServicesHubHero = () => {
  return (
    <section className="relative w-full overflow-hidden px-[2rem] pt-[15rem] pb-[5rem] md:pt-[20rem] md:pb-[10rem] xl:px-[0rem]">
      {/* Background image */}
      <Image
        src={HeroBg}
        alt="Background Image"
        fill
        priority
        className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        unoptimized
      />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <HomeHeroLogoShape1 className="absolute top-[2rem] left-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-50 md:h-[17rem] md:w-[8.4rem]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <HomeHeroLogoShape2 className="absolute bottom-[6rem] left-[4rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:left-[10rem] md:h-[17rem] md:w-[8.5rem]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <ContactHeroLogoShape1 className="absolute top-[15rem] right-[5rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:h-[12.4rem] md:w-[13.3rem]" />
      </div>

      <div className="relative z-[10] container">
        <div className="mx-auto flex max-w-[92rem] flex-col items-center text-center">
          <MotionEffect slide={{ direction: "down" }} transition={SPRING} fade zoom>
            <SectionLabel text="Services" textColor="#FF37B3" />
          </MotionEffect>

          {/* PLACEHOLDER headline — CP-04 */}
          <MotionEffect
            slide={{ direction: "down" }}
            transition={SPRING}
            fade
            zoom
            delay={0.15}
          >
            <h1 className="mt-[1.5rem] mb-[2.5rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
              [Placeholder headline — CP-04] One team across brand, web, growth and
              automation.
            </h1>
          </MotionEffect>

          {/* PLACEHOLDER positioning statement — CP-04 */}
          <MotionEffect
            slide={{ direction: "down" }}
            transition={SPRING}
            fade
            delay={0.3}
          >
            <div className="mb-[4rem] max-w-[76rem]">
              <SectionDescription
                text="[Placeholder positioning — CP-04] A short statement that tells a visitor what CreativePixels is within seconds, weighted toward the web and ecommerce work that is the core of what we do."
                textColor="#625C70"
              />
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            transition={SPRING}
            fade
            delay={0.45}
          >
            <div className="flex flex-col items-center gap-[1.4rem]">
              <PrimaryButton
                text="Start a project"
                href="/contact"
                bGcolor="#FF37B3"
                textColor="#ffffff"
                ctaPosition="services-hero"
              />
              {/* PLACEHOLDER reassurance microcopy — CP-04 (D7) */}
              <span className="text-[1.4rem] leading-[2.2rem] font-medium text-[#625C70]">
                [Placeholder reassurance — CP-04] No obligation, just a conversation.
              </span>
            </div>
          </MotionEffect>
        </div>
      </div>
    </section>
  );
};

export default ServicesHubHero;

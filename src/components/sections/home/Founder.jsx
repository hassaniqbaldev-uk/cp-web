"use client";

import Image from "next/image";
import HassanAvatar from "@/assets/icons/ui/hassan-avatar.png";
import ServicesLogoShape from "@/assets/svgs/services-logo-shape.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { MotionEffect } from "@/components/effects/motion-effect";
import { FOUNDED_YEAR } from "@/content/company";

// Founder — Hassan only, no team grid (Hassan's instruction). The message is owner-led accountability with
// a wider specialist team behind it, not a personal profile. Draft bio (Hassan will correct). Photo is the
// static hassan-avatar asset; name/role are fixed. Tint background keeps the rhythm (Lifecycle dark ->
// Founder tint -> Cta white).
const Founder = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      {/* Decorative shape — texture the site's light sections carry (matches Expertise3). */}
      <div className="pointer-events-none absolute top-[7.8rem] right-[0rem] h-[17.7rem] w-[12.9rem] rotate-[-34deg] select-none">
        <Image
          src={ServicesLogoShape}
          alt="Logo Shape"
          width={129}
          height={177}
          unoptimized
        />
      </div>

      <div className="relative z-[10] container">
        <div className="flex flex-col items-center gap-[4rem] md:gap-[7rem] xl:flex-row xl:items-center">
          {/* Photo */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.1}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[24rem] shrink-0 md:w-[34rem]">
              <div
                style={{ boxShadow: "11px 11px 65px 0px #00000012" }}
                className="overflow-hidden rounded-[3rem] bg-white p-[1.2rem]"
              >
                <Image
                  src={HassanAvatar}
                  alt="Hassan Iqbal, Managing Director of CreativePixels"
                  width={396}
                  height={396}
                  className="w-full rounded-[2.2rem] object-cover"
                />
              </div>
              <div className="mt-[2rem] text-center xl:text-left">
                <p className="text-[2.2rem] leading-[2.6rem] font-bold tracking-[-0.02em] text-[#312749]">
                  Hassan Iqbal
                </p>
                <p className="mt-[.4rem] text-[1.6rem] leading-[2rem] font-medium text-[#625C70]">
                  Founder &amp; Managing Director
                </p>
              </div>
            </div>
          </MotionEffect>

          {/* Content */}
          <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.2}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="The founder" textColor="#3078FF" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.32}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-[5px] mb-[2rem]">
                <SectionTitle
                  text="Owner-led, backed by a specialist team."
                  textColor="#312749"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.44}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <p className="max-w-[62rem] text-[1.8rem] leading-[2.9rem] font-normal text-[#625C70]">
                Hassan founded CreativePixels in {FOUNDED_YEAR} and still leads
                every project personally, from the first conversation to what
                happens after launch. He stays the accountable point of contact
                throughout, backed by a specialist team of designers, developers
                and growth people, not a rotating cast of juniors. He built the
                agency to do the work properly and stay commercially useful to
                clients, rather than to chase awards. Work with CreativePixels
                and you work with the owner.
              </p>
            </MotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

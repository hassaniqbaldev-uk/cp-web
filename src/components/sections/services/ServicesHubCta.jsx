"use client";

import Image from "next/image";
import CtaBg from "@/assets/images/backgrounds/cta-bg.webp";
import CtaBgStroke from "@/components/decorative-elements/CtaBgStroke";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MotionEffect } from "@/components/effects/motion-effect";

// Closing CTA of the services hub (CP-06 item 9) — the last thing on the main
// commercial page, so it gets proper WEIGHT: the site's heavy closing-CTA treatment
// (full-bleed cta-bg card + CtaBgStroke + white SectionTitle/Description, one
// MotionEffect), the same language as Cta.jsx. Cta.jsx itself can't be reused — it is
// built around Book a Call / Cal.com — so this reuses the treatment + shared parts with
// the enquiry CTA instead. Primary CTA is "Start a project" + reassurance (D7); NO Book
// a Call. Warranty (three months of free post-launch support) used as a trust signal.
//
// Parametrised (CP-05) so the service-detail pages reuse it as their closing CTA. Props default to the
// hub's own copy, so the hub call site is unchanged.
const ServicesHubCta = ({
  title = "Ready when you are.",
  description = "Tell us what you are working on and we will point you to the right place to start. Every website we build includes three months of free support after launch, so you are looked after once you go live.",
  reassurance = "No obligation, just a conversation.",
  ctaPosition = "services-outro",
}) => {
  return (
    <section className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <MotionEffect
        slide={{ direction: "down" }}
        fade
        inView
        delay={0.1}
        transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative container px-[3rem] py-[6rem] md:px-[10rem] md:py-[9rem]">
          {/* Background image */}
          <Image
            src={CtaBg}
            alt="Background Image"
            fill
            priority
            className="pointer-events-none absolute inset-0 z-[1] rounded-[3rem] object-cover select-none"
            unoptimized
          />

          {/* Decorative stroke */}
          <div className="pointer-events-none absolute top-[35rem] right-[-3rem] z-[2] select-none xl:top-[3.6rem]">
            <CtaBgStroke />
          </div>

          <div className="relative z-[10] mx-auto flex max-w-[72rem] flex-col items-center gap-[2.4rem] text-center">
            <SectionTitle text={title} textColor="#ffffff" />

            <div className="max-w-[60rem]">
              <SectionDescription text={description} textColor="#ffffff" />
            </div>

            <div className="mt-[1.6rem] flex flex-col items-center gap-[1.4rem]">
              <PrimaryButton
                text="Start a project"
                href="/contact"
                bGcolor="#FF37B3"
                textColor="#ffffff"
                ctaPosition={ctaPosition}
              />
              <span className="text-[1.4rem] leading-[2.2rem] font-medium text-white/80">
                {reassurance}
              </span>
            </div>
          </div>
        </div>
      </MotionEffect>
    </section>
  );
};

export default ServicesHubCta;

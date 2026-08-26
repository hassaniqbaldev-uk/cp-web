"use client";

import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import ServicesLogoShape from "@/assets/svgs/services-logo-shape.svg";
import { MotionEffect } from "@/components/effects/motion-effect";
import { SERVICE_PRICING } from "@/content/servicePricing";

// Investment — a LIGHT price signal, not a menu (per the brief). A handful of representative starting
// points, read from the single pricing source, so someone gets the range without a full price list. Build
// figures lead and the highest-value work (custom & AI builds, from £5,000) is shown, so the signal does
// not undercut it. All figures come from src/content/servicePricing.js — never hardcoded here.
const ANCHORS = [
  { label: "Websites & ecommerce", slug: "web-design-development" },
  { label: "Branding", slug: "branding" },
  { label: "Custom & AI builds", slug: "custom-app-development" },
  { label: "Ongoing growth", slug: "growth-and-support" },
].map((a) => ({ ...a, from: SERVICE_PRICING[a.slug]?.from }));

const Investment = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="pointer-events-none absolute top-[7.8rem] right-[0rem] h-[17.7rem] w-[12.9rem] rotate-[-34deg] select-none">
        <Image
          src={ServicesLogoShape}
          alt=""
          width={129}
          height={177}
          unoptimized
        />
      </div>

      <div className="relative z-[10] container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.1}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <SectionLabel text="Investment" textColor="#44B276" />
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.25}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="mt-[5px] mb-[14px]">
              <SectionTitle
                text="A starting point, not a price list."
                textColor="#312749"
              />
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-[64rem]">
              <SectionDescription
                text="Every project is scoped to what it needs, so we price from a real starting point rather than a fixed menu. Here is roughly where things begin."
                textColor="#625C70"
              />
            </div>
          </MotionEffect>
        </div>

        <div className="mx-auto mt-[5rem] grid max-w-[92rem] grid-cols-1 gap-[1.6rem] sm:grid-cols-2 xl:mt-[6rem] xl:grid-cols-4">
          {ANCHORS.map((a, idx) => (
            <MotionEffect
              key={a.slug}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4 + idx * 0.1}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="h-full"
            >
              <div className="flex h-full flex-col gap-[.6rem] rounded-[2rem] border border-black/8 bg-white px-[2.6rem] py-[2.4rem] text-left">
                <span className="text-[1.5rem] leading-[2rem] font-semibold text-[#625C70]">
                  {a.label}
                </span>
                <span className="text-[2.4rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                  {a.from}
                </span>
              </div>
            </MotionEffect>
          ))}
        </div>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.55}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <div className="mt-[3.2rem] flex flex-col items-center gap-[2rem] text-center">
            <p className="max-w-[60rem] text-[1.6rem] leading-[2.5rem] text-[#625C70]">
              We agree the figure with you before anything starts, so there are
              no surprises.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center gap-[.8rem] text-[1.7rem] font-semibold text-[#44B276]"
            >
              See pricing on each service
              <i className="min-w-max transition-transform duration-200 group-hover:translate-x-[3px]">
                <TiltArrowIcon color="#44B276" width="12" height="12" />
              </i>
            </Link>
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default Investment;

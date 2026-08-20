"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { MotionEffect } from "@/components/effects/motion-effect";
import RouteStroke from "@/assets/svgs/services-dropdown-stroke.svg";
import AnalysisIcon from "@/assets/icons/ui/analysis-icon.svg";
import FocusIcon from "@/assets/icons/ui/focus-icon.svg";

// The two routes off the services hub (CP-06 items 7 & 8): the "not sure what you
// need?" route → /audit, and the solutions route → /solutions. No dedicated two-up
// signpost pattern exists on the site, so these borrow the RICHEST card treatments
// that do: the coloured glowing icon tile (Partner With Us / feature cards), a
// decorative stroke bleeding off a corner (the cta-bg / mega-menu audit card), a
// coloured hover-shadow lift (LightFeatureCard2), generous padding, and a solid CTA
// button. Audit = orange, Solutions = pink — visually distinct but clearly a pair.
// Text is AA-safe (dark on white; white on a dark-navy button; label uses a darkened
// accent). ALL COPY PLACEHOLDER — CP-04.
const ROUTES = [
  {
    href: "/audit",
    label: "Not sure what you need?",
    title: "[Placeholder — CP-04] Get a free audit",
    body: "[Placeholder — CP-04] A guided route for visitors who do not know which service fits. Points at the free audit.",
    accent: "#EE8D00", // orange — icon tile, hover glow, stroke tint
    labelColor: "#A85D00", // darkened orange — AA on white
    icon: AnalysisIcon,
  },
  {
    href: "/solutions",
    label: "Prefer to start from a goal?",
    title: "[Placeholder — CP-04] Explore solutions by outcome",
    body: "[Placeholder — CP-04] The route across to the goal-based solutions for visitors who think in outcomes, not services.",
    accent: "#FF37B3", // pink
    labelColor: "#B0006E", // darkened pink — AA on white
    icon: FocusIcon,
  },
];

const RouteCard = ({ href, label, title, body, accent, labelColor, icon }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${accent}22`,
        boxShadow: hover
          ? `4px 16px 46px 0px ${accent}26`
          : "0 8px 30px 0px #00000008",
      }}
      className="group relative flex h-full flex-col justify-between gap-[3.5rem] overflow-hidden rounded-[3rem] bg-white p-[3rem] transition-all duration-300 xl:p-[4rem]"
    >
      {/* Decorative stroke — bleeds off the bottom-right corner (mega-menu audit card) */}
      <Image
        src={RouteStroke}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-3rem] bottom-[-3rem] z-0 h-auto w-[24rem] opacity-25 select-none"
      />

      <div className="relative z-10 flex flex-col items-start">
        {/* Coloured glowing icon tile */}
        <i
          style={{
            backgroundColor: accent,
            boxShadow: `5px 5px 30px 0px ${accent}66`,
          }}
          className="inline-flex size-[6.3rem] items-center justify-center rounded-[1.5rem]"
        >
          <Image src={icon} width={32} height={32} alt="Icon" unoptimized />
        </i>

        {/* PLACEHOLDER copy — CP-04 */}
        <span
          style={{ color: labelColor }}
          className="mt-[3rem] text-[1.4rem] leading-[2rem] font-bold tracking-[0.02em] uppercase"
        >
          {label}
        </span>
        <h3 className="mt-[1.2rem] text-[2.6rem] leading-[3.2rem] font-bold tracking-[-0.02em] text-[#263238] xl:text-[3rem] xl:leading-[3.6rem]">
          {title}
        </h3>
        <p className="mt-[1.4rem] max-w-[46rem] text-[1.6rem] leading-[2.7rem] font-normal text-[#625C70]">
          {body}
        </p>
      </div>

      {/* CTA — solid dark button (white on navy is comfortably AA) */}
      <span className="relative z-10 inline-flex w-max items-center gap-[1rem] rounded-[6rem] bg-[#312749] px-[2.8rem] py-[1.5rem] text-[1.6rem] leading-[2rem] font-semibold text-white transition-all duration-200 group-hover:bg-[#241c39]">
        Continue
        <i className="transition-transform duration-200 group-hover:translate-x-[4px]">
          <TiltArrowIcon color="#ffffff" width="12" height="12" />
        </i>
      </span>
    </Link>
  );
};

const ServicesRoutes = () => {
  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[8rem]">
      <div className="container">
        <div className="grid grid-cols-1 gap-[3rem] md:grid-cols-2">
          {ROUTES.map((route, idx) => (
            <MotionEffect
              key={route.href}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.1 + idx * 0.15}
              transition={{ type: "tween", duration: 0.9, ease: "easeOut" }}
              className="h-full"
            >
              <RouteCard {...route} />
            </MotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesRoutes;

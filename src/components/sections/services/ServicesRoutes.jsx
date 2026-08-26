"use client";

import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MotionEffect } from "@/components/effects/motion-effect";
import AnalysisIcon from "@/assets/icons/ui/analysis-icon.svg";
import FocusIcon from "@/assets/icons/ui/focus-icon.svg";

// The two routes off the services hub (CP-06 items 7 & 8): the "not sure what you
// need?" route → /audit, and the solutions route → /solutions. No dedicated two-up
// signpost pattern exists on the site, so these borrow the richest card treatments:
// the coloured glowing icon tile (Partner With Us / feature cards), a decorative
// stroke bleeding off a corner (the cta-bg card — here TINTED to each card's accent),
// a coloured hover-shadow lift (LightFeatureCard2), and the project's own PrimaryButton
// as the CTA. Audit = orange, Solutions = pink — distinct but a pair. Text is AA-safe
// (dark on white; the label uses a darkened accent; PrimaryButton is white-on-navy).
const ROUTES = [
  {
    href: "/audit",
    label: "Not sure what you need?",
    title: "Start with a free website audit.",
    body: "Not sure which service fits? We will review your website and send back a clear, no-obligation audit: what is working, what is holding you back, and where to focus first.",
    cta: "Get a free audit",
    accent: "#EE8D00", // orange — icon tile, hover glow, stroke tint
    labelColor: "#A85D00", // darkened orange — AA on white
    icon: AnalysisIcon,
    strokeId: "route-stroke-audit",
    ctaPosition: "services-route-audit",
  },
  {
    href: "/solutions",
    label: "Prefer to start from a goal?",
    title: "Start from the outcome you want.",
    body: "If you think in results rather than services, browse our solutions by goal, from generating more leads to rebuilding your site, launching a product or automating your operations.",
    cta: "Explore solutions",
    accent: "#FF37B3", // pink
    labelColor: "#B0006E", // darkened pink — AA on white
    icon: FocusIcon,
    strokeId: "route-stroke-solutions",
    ctaPosition: "services-route-solutions",
  },
];

// Decorative stroke, tinted to the card's accent — the cta-bg card stroke path with a
// transparent → accent gradient, bleeding off the bottom-right corner (clipped by the
// card's overflow-hidden).
const AccentStroke = ({ accent, id }) => (
  <svg
    aria-hidden
    viewBox="0 0 1126 316"
    fill="none"
    className="pointer-events-none absolute right-[-6rem] bottom-[-2rem] z-0 h-auto w-[34rem] select-none"
  >
    <path
      d="M17.5028 278.672C41.3899 238.696 102.323 157.928 159.829 153.222C231.712 147.34 246.019 294.249 178.001 297.63C114.94 300.764 142.942 138.823 386.406 141.96C629.87 145.096 727.804 231.33 872.506 192.737C1017.21 154.144 1077.93 17.8587 1002.02 17.5003C947.403 17.2424 926.404 213.338 1108.01 131.814"
      stroke={`url(#${id})`}
      strokeWidth="35"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id={id}
        x1="407"
        y1="144"
        x2="1028"
        y2="279"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={accent} stopOpacity="0" />
        <stop offset="0.5" stopColor={accent} stopOpacity="0.25" />
        <stop offset="1" stopColor={accent} stopOpacity="0.65" />
      </linearGradient>
    </defs>
  </svg>
);

const RouteCard = ({
  href,
  label,
  title,
  body,
  cta,
  accent,
  labelColor,
  icon,
  strokeId,
  ctaPosition,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${accent}`,
        boxShadow: hover
          ? `4px 16px 46px 0px ${accent}26`
          : "0 8px 30px 0px #00000008",
      }}
      className="relative flex h-full flex-col justify-between gap-[3.5rem] overflow-hidden rounded-[3rem] bg-white p-[3rem] transition-all duration-300 xl:p-[4rem]"
    >
      {/* Coloured decorative stroke */}
      {/* <AccentStroke accent={accent} id={strokeId} /> */}

      <div className="relative z-10 flex flex-col items-start">
        {/* Coloured glowing icon tile */}
        <i
          style={{
            backgroundColor: accent,
            boxShadow: `5px 5px 30px 0px ${accent}66`,
          }}
          className="inline-flex size-[6.3rem] items-center justify-center rounded-[1.5rem]"
        >
          <Image src={icon} width={32} height={32} alt="" unoptimized />
        </i>

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

      {/* CTA — the project's PrimaryButton (white on navy, AA-safe) */}
      <div className="relative z-10">
        <PrimaryButton
          text={cta}
          href={href}
          bGcolor="#312749"
          textColor="#FFFFFF"
          ctaPosition={ctaPosition}
        />
      </div>
    </div>
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

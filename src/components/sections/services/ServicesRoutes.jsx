"use client";

import Link from "next/link";
import { useState } from "react";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { MotionEffect } from "@/components/effects/motion-effect";

// The two routes off the services hub (CP-06 items 7 & 8): the "not sure what you need?"
// route → /audit, and the solutions route → /solutions. The site has NO dedicated
// two-up signpost pattern, so these use the shared card LANGUAGE (rounded card, subtle
// coloured border + hover shadow, arrow-on-hover — as in the pillar cards /
// LightFeatureCard2), animated on scroll with MotionEffect like every other content
// section. ALL COPY PLACEHOLDER — CP-04.
const ROUTES = [
  {
    href: "/audit",
    label: "Not sure what you need?",
    title: "[Placeholder — CP-04] Get a free audit",
    body: "[Placeholder — CP-04] A guided route for visitors who do not know which service fits. Points at the free audit.",
    color: "#EE8D00",
  },
  {
    href: "/solutions",
    label: "Prefer to start from a goal?",
    title: "[Placeholder — CP-04] Explore solutions by outcome",
    body: "[Placeholder — CP-04] The route across to the goal-based solutions for visitors who think in outcomes, not services.",
    color: "#FF37B3",
  },
];

const RouteCard = ({ href, label, title, body, color }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${color}22`,
        boxShadow: hover ? `4px 12px 30px 0px ${color}1C` : "none",
      }}
      className="group flex h-full flex-col justify-between gap-[3rem] rounded-[2.4rem] bg-white p-[3rem] transition-all duration-200 xl:p-[4rem]"
    >
      <div>
        <span
          style={{ color }}
          className="text-[1.4rem] leading-[2rem] font-bold tracking-[0.02em] uppercase"
        >
          {label}
        </span>
        {/* PLACEHOLDER copy — CP-04 */}
        <h3 className="mt-[1.2rem] text-[2.4rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#263238] xl:text-[2.8rem]">
          {title}
        </h3>
        <p className="mt-[1.2rem] text-[1.6rem] leading-[2.6rem] text-[#625C70]">
          {body}
        </p>
      </div>
      <span className="inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-[#312749]">
        Continue
        <i className="transition-transform duration-200 group-hover:translate-x-[3px]">
          <TiltArrowIcon color={color} width="12" height="12" />
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

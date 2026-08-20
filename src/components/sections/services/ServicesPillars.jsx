"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { MotionEffect } from "@/components/effects/motion-effect";
import ServicesLogoShape from "@/components/decorative-elements/ServicesLogoShape";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import { ANALYTICS_EVENTS, track } from "@/lib/analytics/events";
import DesignIcon from "@/assets/icons/ui/design-icon.svg";
import GrowthIcon from "@/assets/icons/ui/growth-icon.svg";
import SupportIcon from "@/assets/icons/ui/support-icon.svg";

// Colour + icon per pillar theme — the same source of truth as the mega-menu
// (ServiceNavColumn). Inline because Tailwind can't compile dynamic arbitrary colours.
// Icons for web/ai reuse the existing set as placeholders (a design pass can swap them).
const THEME = {
  brand: { color: "#ED910C", icon: DesignIcon },
  web: { color: "#3078FF", icon: SupportIcon },
  growth: { color: "#FF37B3", icon: GrowthIcon },
  ai: { color: "#7C3AED", icon: DesignIcon },
};

// PLACEHOLDER positioning copy — CP-04 writes the real lines. One per pillar key.
const PILLAR_BLURB = {
  "brand-experience":
    "[Placeholder — CP-04] Identity and interface work that makes the brand feel considered from the first impression.",
  "web-ecommerce":
    "[Placeholder — CP-04] The core of what we do: websites, stores and custom builds engineered to perform and convert.",
  "growth-performance":
    "[Placeholder — CP-04] Turning traffic into revenue — search, paid media, conversion and ongoing improvement.",
  "ai-automation":
    "[Placeholder — CP-04] Removing operational bottlenecks with automation and applied AI.",
};

// One pillar card — EQUAL to every other. COLOUR TREATMENT brought in line with the
// PartnerWithUs2 dark-glass section: translucent glass fill on a dark background, white
// text, and a per-pillar coloured icon tile with a colour glow (Web=blue, Brand=orange,
// Growth=pink) — the tile carries the per-pillar distinction, so the cards still read
// apart. Layout, grid, structure, animations and copy are unchanged from before.
const PillarCard = ({ column }) => {
  const [hover, setHover] = useState(false);
  const t = THEME[column.theme] || THEME.brand;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative h-full w-full rounded-[3rem]"
    >
      {/* Gradient border — the Partner With Us (GlassFeatureCard) glass edge */}
      <div
        aria-hidden
        style={{
          background:
            "linear-gradient(149.03deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 51.06%, rgba(255,255,255,0.6) 98.34%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          borderRadius: "3rem",
        }}
        className="pointer-events-none absolute inset-0 z-[1]"
      />

      {/* Glass content — the Partner With Us white/15 fill */}
      <div
        style={{ boxShadow: hover ? `0 0 30px 0px ${t.color}55` : "none" }}
        className="relative z-[2] flex h-full flex-col gap-[2.4rem] rounded-[3rem] bg-white/15 p-[3rem] transition-all duration-200"
      >
        <div className="flex items-center gap-[2rem]">
        <i
          style={{
            backgroundColor: t.color,
            boxShadow: `5px 5px 44px 0px ${t.color}CC`,
          }}
          className="relative inline-flex size-[5.8rem] min-w-[5.8rem] items-center justify-center rounded-[1.3rem]"
        >
          <Image src={t.icon} width={30} height={30} alt="Icon" unoptimized />
        </i>

        <h3 className="text-[2.2rem] leading-[2.8rem] font-bold tracking-[-0.02em] text-white xl:text-[2.6rem] xl:leading-[3rem]">
          {column.heading}
        </h3>
      </div>

      {/* PLACEHOLDER positioning copy — CP-04 */}
      <p className="text-[1.6rem] leading-[2.6rem] font-normal tracking-normal text-white">
        {PILLAR_BLURB[column.key] || "[Placeholder — CP-04]"}
      </p>

      <ul className="mt-auto flex flex-col gap-[1.4rem]">
        {column.items.map((item) => (
          <li key={item.slug} className="border-t border-white/15 pt-[1.4rem]">
            <Link
              href={item.href}
              onClick={() =>
                track(ANALYTICS_EVENTS.SERVICE_SELECTED, {
                  service: item.slug,
                  service_pillar: column.key,
                })
              }
              className="group inline-flex w-full items-center justify-between gap-[1rem] text-[1.7rem] leading-[2.2rem] font-semibold text-white"
            >
              {item.label}
              <i className="min-w-max transition-transform duration-200 group-hover:translate-x-[3px]">
                <TiltArrowIcon color={t.color} width="12" height="12" />
              </i>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

// The four-pillar overview — the primary structure of the services hub (CP-06).
// NOT fifteen equal cards: pillars are the frame, services sit inside them. All
// pillars are EQUAL cards in a single row; Web & Ecommerce keeps its prominence by
// ORDER (it appears first), not by size. Grouping + column set come from the SAME
// data as the mega-menu (serviceColumns); empty pillars are already dropped upstream,
// so nothing renders for them. The row's column COUNT adapts to the data (three now,
// four once AI & Automation has content) via repeat(N) — never hardcoded. Colour
// treatment matches the PartnerWithUs2 dark-glass section (dark bg + glass cards).
const ServicesPillars = ({ columns = [] }) => {
  if (!columns.length) return null;

  // Pillars show PRIMARY services only (the ones that lead each pillar); specialist
  // services live in the capabilities section, so the two never overlap. A pillar with
  // no primary services drops out entirely (empty pillar renders nothing). Web &
  // Ecommerce leads by order (stable sort keeps the rest in registry order).
  const ordered = [...columns]
    .map((c) => ({ ...c, items: c.items.filter((i) => !i.specialist) }))
    .filter((c) => c.items.length > 0)
    .sort((a, b) =>
      a.key === "web-ecommerce" ? -1 : b.key === "web-ecommerce" ? 1 : 0,
    );

  if (!ordered.length) return null;

  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      {/* Dark background image — the PartnerWithUs2 treatment */}
      <Image
        src={ProcessBg}
        alt="Background Image"
        fill
        priority
        className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        unoptimized
      />

      {/* Decorative shape (kept from before; sits over the dark bg now) */}
      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <ServicesLogoShape className="absolute top-[2rem] right-[-1rem] h-[7.1rem] w-[5.2rem] rotate-[-34deg] md:top-[7.8rem] md:h-[17.7rem] md:w-[12.9rem]" />
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
              <SectionLabel text="What We Do" textColor="#FF37B3" />
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
            {/* PLACEHOLDER copy — CP-04 */}
            <div className="mt-[5px] mb-[14px]">
              <SectionTitle text="Four things we do, one team." textColor="#FFFFFF" />
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
            <div className="max-w-[70rem]">
              <SectionDescription
                text="[Placeholder — CP-04] Not fifteen services shouting for attention. Four pillars, weighted the way our work actually is."
                textColor="#FFFFFF"
              />
            </div>
          </MotionEffect>
        </div>

        {/* Equal pillar cards in a single row. Column count adapts to the data
            (repeat(N)) at xl; stacks to 1 / 2 columns below. */}
        <div
          className="mt-[5rem] grid grid-cols-1 gap-[3.3rem] md:grid-cols-2 xl:mt-[7rem] xl:[grid-template-columns:var(--pillar-cols)]"
          style={{
            "--pillar-cols": `repeat(${ordered.length}, minmax(0, 1fr))`,
          }}
        >
          {ordered.map((column, idx) => (
            <MotionEffect
              key={column.key}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4 + idx * 0.15}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="h-full"
            >
              <PillarCard column={column} />
            </MotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPillars;

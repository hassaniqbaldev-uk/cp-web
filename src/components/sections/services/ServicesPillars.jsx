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
import { ANALYTICS_EVENTS, track } from "@/lib/analytics/events";
import DesignIcon from "@/assets/icons/ui/design-icon.svg";
import GrowthIcon from "@/assets/icons/ui/growth-icon.svg";
import SupportIcon from "@/assets/icons/ui/support-icon.svg";

// Colour + icon per pillar theme — the same source of truth as the mega-menu
// (ServiceNavColumn), and the same card language as LightFeatureCard2 / Expertise3
// (coloured icon tile + soft coloured hover shadow `…1C`). Inline because Tailwind
// can't compile dynamic arbitrary colours. Icons for web/ai reuse the existing set
// as placeholders (a design pass can swap them).
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

// One pillar card — EQUAL to every other (no featured/oversized variant). Adopts the
// shared card treatment (white rounded-[3rem], p-[3rem], coloured icon tile, coloured
// hover shadow) but holds a list of SERVICE LINKS (each firing service_selected)
// rather than plain bullets. `h-full` + the service list anchored to the bottom keeps
// every card the same height in its row regardless of how many services it lists.
const PillarCard = ({ column }) => {
  const [hover, setHover] = useState(false);
  const t = THEME[column.theme] || THEME.brand;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${t.color}22`,
        boxShadow: hover ? `4px 12px 30px 0px ${t.color}1C` : "none",
      }}
      className="flex h-full flex-col gap-[2.4rem] rounded-[3rem] bg-white p-[3rem] transition-all duration-200"
    >
      <div className="flex items-center gap-[2rem]">
        <i className="relative inline-flex size-[5.8rem] min-w-[5.8rem] items-center justify-center rounded-[1.5rem]">
          <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.4rem] items-center justify-center rounded-[1.3rem] border-white/20 bg-white/35 backdrop-blur-[1rem]">
            <Image src={t.icon} width={24} height={24} alt="Icon" unoptimized />
          </div>
          <div
            style={{ background: t.color }}
            className="absolute right-0 bottom-0 z-[0] size-[5.4rem] rounded-[1.5rem]"
          />
        </i>

        <h3 className="text-[2.2rem] leading-[2.8rem] font-bold tracking-[-0.02em] text-[#312749] xl:text-[2.6rem] xl:leading-[3rem]">
          {column.heading}
        </h3>
      </div>

      {/* PLACEHOLDER positioning copy — CP-04 */}
      <p className="text-[1.6rem] leading-[2.6rem] font-normal tracking-normal text-[#625C70]">
        {PILLAR_BLURB[column.key] || "[Placeholder — CP-04]"}
      </p>

      <ul className="mt-auto flex flex-col gap-[1.4rem]">
        {column.items.map((item) => (
          <li key={item.slug} className="border-t border-black/10 pt-[1.4rem]">
            <Link
              href={item.href}
              onClick={() =>
                track(ANALYTICS_EVENTS.SERVICE_SELECTED, {
                  service: item.slug,
                  service_pillar: column.key,
                })
              }
              className="group inline-flex w-full items-center justify-between gap-[1rem] text-[1.7rem] leading-[2.2rem] font-semibold text-[#312749]"
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
  );
};

// The four-pillar overview — the primary structure of the services hub (CP-06).
// NOT fifteen equal cards: pillars are the frame, services sit inside them. All
// pillars are EQUAL cards in a single row; Web & Ecommerce keeps its prominence by
// ORDER (it appears first), not by size. Grouping + column set come from the SAME
// data as the mega-menu (serviceColumns); empty pillars are already dropped upstream,
// so nothing renders for them. The row's column COUNT adapts to the data (three now,
// four once AI & Automation has content) via repeat(N) — never hardcoded. Section
// shell + scroll-triggered MotionEffect (tween, inView, index-staggered) match the
// site's other content sections (homepage Services, Expertise3).
const ServicesPillars = ({ columns = [] }) => {
  if (!columns.length) return null;

  // Web & Ecommerce leads by order (stable sort keeps the rest in registry order).
  const ordered = [...columns].sort((a, b) =>
    a.key === "web-ecommerce" ? -1 : b.key === "web-ecommerce" ? 1 : 0,
  );

  return (
    <section className="relative overflow-hidden bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      {/* Decorative shape (matches homepage Services) */}
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
              <SectionLabel text="What We Do" textColor="#EE8D00" />
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
              <SectionTitle text="Four things we do, one team." />
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
              <SectionDescription text="[Placeholder — CP-04] Not fifteen services shouting for attention. Four pillars, weighted the way our work actually is." />
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

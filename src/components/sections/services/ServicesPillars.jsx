"use client";

import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { ANALYTICS_EVENTS, track } from "@/lib/analytics/events";

// Colour per pillar theme — matches the mega-menu (ServiceNavColumn THEME), same
// source of truth for grouping (sanity/nav.js serviceColumns). Inline because
// Tailwind can't compile dynamic arbitrary colours.
const THEME_COLOR = {
  brand: "#ED910C",
  web: "#3078FF",
  growth: "#FF37B3",
  ai: "#7C3AED",
};

// PLACEHOLDER positioning copy — CP-04 writes the real lines. One per pillar key.
// Deliberately generic so it is obvious this is not final copy.
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

const PillarBlock = ({ column, featured = false }) => {
  const color = THEME_COLOR[column.theme] || THEME_COLOR.brand;

  return (
    <div
      className={`flex h-full flex-col gap-[2.4rem] rounded-[2.4rem] border border-black/10 bg-white p-[3rem] xl:p-[4rem] ${
        featured ? "xl:gap-[3.2rem]" : ""
      }`}
    >
      <div className="flex items-center gap-[1.6rem]">
        <span
          style={{ backgroundColor: color }}
          className="inline-block size-[1.4rem] min-w-[1.4rem] rounded-full"
        />
        <h3
          className={`font-bold tracking-[-0.02em] text-[#263238] ${
            featured
              ? "text-[2.8rem] leading-[3.4rem] xl:text-[3.6rem] xl:leading-[4.2rem]"
              : "text-[2.2rem] leading-[2.8rem]"
          }`}
        >
          {column.heading}
        </h3>
      </div>

      {/* PLACEHOLDER positioning copy — CP-04 */}
      <p
        className={`font-normal tracking-normal text-[#625C70] ${
          featured ? "text-[1.8rem] leading-[2.9rem]" : "text-[1.6rem] leading-[2.6rem]"
        }`}
      >
        {PILLAR_BLURB[column.key] || "[Placeholder — CP-04]"}
      </p>

      <ul
        className={`mt-auto flex flex-wrap gap-x-[2.4rem] gap-y-[1.2rem] ${
          featured ? "" : ""
        }`}
      >
        {column.items.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.href}
              onClick={() =>
                track(ANALYTICS_EVENTS.SERVICE_SELECTED, {
                  service: item.slug,
                  service_pillar: column.key,
                })
              }
              className="group inline-flex items-center gap-[.8rem] text-[1.6rem] leading-[2.2rem] font-semibold text-[#312749]"
            >
              {item.label}
              <i className="transition-transform duration-200 group-hover:translate-x-[2px]">
                <TiltArrowIcon color={color} width="11" height="11" />
              </i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// The four-pillar overview — the primary structure of the services hub (CP-06).
// NOT fifteen equal cards: the pillars are the frame, services sit inside them, and
// Web & Ecommerce is given the most visual weight (its 45–50% commercial weighting).
// Grouping + column set come from the SAME data as the mega-menu (serviceColumns),
// and empty pillars are already dropped upstream, so nothing renders for them.
const ServicesPillars = ({ columns = [] }) => {
  if (!columns.length) return null;

  const featured = columns.find((c) => c.key === "web-ecommerce");
  const rest = columns.filter((c) => c !== featured);

  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <SectionLabel text="What We Do" textColor="#EE8D00" />
          <div className="mt-[5px] mb-[14px]">
            {/* PLACEHOLDER copy — CP-04 */}
            <SectionTitle text="Four things we do, one team." />
          </div>
          <div className="max-w-[70rem]">
            <SectionDescription text="[Placeholder — CP-04] Not fifteen services shouting for attention. Four pillars, weighted the way our work actually is." />
          </div>
        </div>

        <div className="mt-[5rem] flex flex-col gap-[3rem] xl:mt-[7rem]">
          {/* Web & Ecommerce — featured, full width (most weight) */}
          {featured && <PillarBlock column={featured} featured />}

          {/* The remaining non-empty pillars */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:grid-cols-3">
              {rest.map((column) => (
                <PillarBlock key={column.key} column={column} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesPillars;

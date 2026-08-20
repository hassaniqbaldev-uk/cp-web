"use client";

import Image from "next/image";
import Link from "next/link";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import DesignIcon from "@/assets/icons/ui/design-icon.svg";
import GrowthIcon from "@/assets/icons/ui/growth-icon.svg";
import SupportIcon from "@/assets/icons/ui/support-icon.svg";
import { ANALYTICS_EVENTS, track } from "@/lib/analytics/events";

// Colour + icon per PILLAR theme. Keyed by the `theme` value the nav data layer
// assigns to each pillar column (sanity/nav.js PILLARS registry). The column MARKUP
// below does not change when pillars change — only this map. Colour must be inline
// (Tailwind can't compile dynamic arbitrary values). Icons for `web`/`ai` reuse the
// existing set as placeholders — swap for bespoke pillar icons in a design pass.
const THEME = {
  brand: { icon: DesignIcon, color: "#ED910C" },
  web: { icon: SupportIcon, color: "#3078FF" },
  growth: { icon: GrowthIcon, color: "#FF37B3" },
  ai: { icon: DesignIcon, color: "#7C3AED" },
};

// One data-driven mega-menu column, reproducing the hand-written column markup.
// Empty-state: a column with no items renders NOTHING — heading included.
const ServiceNavColumn = ({ column, isLast = false, onSelect }) => {
  if (!column?.items?.length) return null;
  const theme = THEME[column.theme] || THEME.brand;

  return (
    <div
      className={`flex w-full flex-col gap-[2.4rem]${
        isLast ? "" : " border-r border-[#818181]/30 pr-[3.8rem]"
      }`}
    >
      <div className="flex items-center gap-[2rem] text-left">
        <i
          style={{
            boxShadow: `5px 5px 22px 0px ${theme.color}99`,
            backgroundColor: theme.color,
          }}
          className="inline-flex size-[5.5rem] items-center justify-center rounded-[1.5rem]"
        >
          <Image src={theme.icon} width={24} height={24} alt="Icon" unoptimized />
        </i>

        <span className="text-left text-[1.6rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#263238] uppercase">
          {column.heading}
        </span>
      </div>

      <ul className="flex flex-col gap-[1.5rem]">
        {column.items.map((item, idx) => (
          <li
            key={idx}
            className="border-[#818181]/30 pb-[1.5rem] not-last:border-b"
          >
            <Link
              onClick={() => {
                track(ANALYTICS_EVENTS.SERVICE_SELECTED, { service: item.slug });
                onSelect?.();
              }}
              href={item.href}
              className="flex items-start justify-between gap-[1rem]"
            >
              <div className="flex flex-col items-start text-left">
                <h5 className="text-[1.8rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#263238]">
                  {item.label}
                </h5>
              </div>

              <i className="min-w-max">
                <TiltArrowIcon color={theme.color} width="12" height="12" />
              </i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceNavColumn;

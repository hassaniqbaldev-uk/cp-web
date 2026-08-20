"use client";

import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import { MotionEffect } from "@/components/effects/motion-effect";
import { ANALYTICS_EVENTS, track } from "@/lib/analytics/events";

const THEME_COLOR = {
  brand: "#ED910C",
  web: "#3078FF",
  growth: "#FF37B3",
  ai: "#7C3AED",
};

// Specialist capabilities (CP-06 item 6). ONE SOURCE OF TRUTH: the capabilities are the
// services pulled from getNavData (the same pillar data as the mega-menu + the pillars
// section) — never a hardcoded list. Presented as a compact, scannable chip index, a
// lighter treatment than the pillar cards.
//
// FLAG: there is no primary/specialist distinction on the services data yet, so this
// currently shows the FULL capability set (it overlaps the pillars). The honest fix is a
// `specialist` boolean/flag on the services type (mirroring the case-study `designation`
// added for relevant work); the section would then filter to the genuine specialist
// subset. That is a data change, not something to invent here. Header + description copy
// are PLACEHOLDER (CP-04) — and the placeholder already says the exact set awaits a
// designation.
const ServicesCapabilities = ({ columns = [] }) => {
  if (!columns.length) return null;

  const capabilities = columns.flatMap((c) =>
    c.items.map((i) => ({
      ...i,
      color: THEME_COLOR[c.theme] || THEME_COLOR.brand,
      pillar: c.key,
    })),
  );

  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
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
              <SectionLabel text="Specialist Capabilities" textColor="#3078FF" />
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
              <SectionTitle text="Depth where it matters." />
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
            <div className="mx-auto max-w-[74rem]">
              <SectionDescription text="[Placeholder — CP-04] A band for the deeper, specialist capabilities (for example performance, security, accessibility, migrations) that sit beneath the headline pillars. The exact set is a content decision once primary vs specialist is designated." />
            </div>
          </MotionEffect>
        </div>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.5}
          transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
        >
          <div className="mt-[4rem] flex flex-wrap items-center justify-center gap-[1.4rem] xl:mt-[6rem]">
            {capabilities.map((cap) => (
              <Link
                key={cap.slug}
                href={cap.href}
                onClick={() =>
                  track(ANALYTICS_EVENTS.SERVICE_SELECTED, {
                    service: cap.slug,
                    service_pillar: cap.pillar,
                  })
                }
                style={{ "--c": cap.color }}
                className="rounded-full border border-black/10 px-[2rem] py-[1.1rem] text-[1.5rem] leading-[2rem] font-medium text-[#312749] transition-all duration-200 hover:border-[var(--c)] hover:text-[var(--c)] md:text-[1.6rem]"
              >
                {cap.label}
              </Link>
            ))}
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default ServicesCapabilities;

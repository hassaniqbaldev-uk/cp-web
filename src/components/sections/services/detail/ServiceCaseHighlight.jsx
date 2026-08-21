"use client";

import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { MotionEffect } from "@/components/effects/motion-effect";

// CP-05 module — a single, focused evidence highlight for a service page that has ONE strong case study
// rather than a set (e.g. AI & Automation -> Biome4Pets). The generic Work carousel needs several
// thumbnailed items; this presents one confirmed story with weight instead. Content comes from
// `service.caseHighlight` ({ eyebrow, title, context, points[], result, href }) — no invented outcomes.
const ServiceCaseHighlight = ({ highlight }) => {
  if (!highlight?.title) return null;

  const points = (highlight.points || []).map((p) => p.label).filter(Boolean);

  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="mx-auto flex max-w-[104rem] flex-col items-center text-center">
          {highlight.eyebrow && (
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div>
                <SectionLabel text={highlight.eyebrow} textColor="#7C3AED" />
              </div>
            </MotionEffect>
          )}

          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="mt-[5px]">
              <SectionTitle text={highlight.title} textColor="#312749" />
            </div>
          </MotionEffect>
        </div>

        <MotionEffect slide={{ direction: "down" }} fade inView delay={0.4} transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}>
          <div className="mx-auto mt-[5rem] grid max-w-[104rem] grid-cols-1 gap-[3rem] xl:mt-[6rem] xl:grid-cols-[1.4fr_1fr]">
            {/* Left — context + what we delivered */}
            <div className="flex flex-col gap-[2.4rem] rounded-[3rem] border border-black/10 bg-white p-[3rem] xl:p-[4rem]">
              {highlight.context && (
                <p className="text-[1.7rem] leading-[2.8rem] text-[#625C70]">
                  {highlight.context}
                </p>
              )}
              {points.length > 0 && (
                <ul className="flex flex-col gap-[1.4rem]">
                  {points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-[1.3rem] text-[1.6rem] leading-[2.6rem] text-[#312749]"
                    >
                      <i className="relative top-[.4rem] min-w-max">
                        <CheckMarkIcon color="#7C3AED" width="18" height="18" />
                      </i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right — the result + link */}
            <div className="flex flex-col justify-between gap-[3rem] rounded-[3rem] bg-[#1B1035] p-[3rem] xl:p-[4rem]">
              <div>
                <p className="text-[1.3rem] leading-[2rem] font-bold tracking-[0.04em] text-[#B69CFF] uppercase">
                  The result
                </p>
                {highlight.result && (
                  <p className="mt-[1.6rem] text-[2.2rem] leading-[3rem] font-semibold tracking-[-0.01em] text-white">
                    {highlight.result}
                  </p>
                )}
              </div>

              {highlight.href && (
                <Link
                  href={highlight.href}
                  className="group inline-flex items-center gap-[.8rem] text-[1.6rem] leading-[2rem] font-semibold text-white"
                >
                  Read the full story
                  <i className="relative top-[.2rem] transition-all duration-200 group-hover:translate-x-[.4rem]">
                    <RightArrowIcon color="#ffffff" />
                  </i>
                </Link>
              )}
            </div>
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default ServiceCaseHighlight;

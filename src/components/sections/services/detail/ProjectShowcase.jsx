"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import { MotionEffect } from "@/components/effects/motion-effect";

// CP-05 module — renders the `projectShowcase` slice as a "who this is for" qualifier: a good-fit /
// not-a-fit two-column that helps a visitor self-select before they enquire (answers "is this right
// for me"). Presence-gated by `modularLayout` in the detail route, so it never surfaces the placeholder
// projectShowcase data that sits on the 16 existing docs. Optional `projects[]` render as text cards
// beneath (title + excerpt); images are optional. Header is content-driven with a sensible default.
const DEFAULT_HEADING = {
  label: "Is this right for you",
  title: "A good fit, and when it is not",
  description:
    "We would rather point you to the right thing than sell you the wrong one. Here is where this service fits, and where something else would serve you better.",
};

const FitColumn = ({ heading, items, positive }) => (
  <div className="flex h-full flex-col gap-[2rem] rounded-[3rem] border border-black/10 bg-white p-[3rem] xl:p-[4rem]">
    <h3 className="text-[2rem] leading-[2.6rem] font-bold tracking-[-0.02em] text-[#312749] xl:text-[2.2rem]">
      {heading}
    </h3>
    <ul className="flex flex-col gap-[1.4rem]">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex items-start gap-[1.3rem] text-[1.6rem] leading-[2.6rem] text-[#625C70]"
        >
          <i className="relative top-[.4rem] min-w-max">
            {positive ? (
              <CheckMarkIcon color="#44B276" width="18" height="18" />
            ) : (
              <svg width="18" height="18" viewBox="0 0 15 15" fill="none" aria-hidden>
                <path
                  d="M4 4L11 11M11 4L4 11"
                  stroke="#B0B0BC"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectShowcase = ({ service }) => {
  if (!service) return null;

  const heading = { ...DEFAULT_HEADING, ...(service.heading || {}) };
  const fit = (service.fitCard || []).map((c) => c.label).filter(Boolean);
  const notFit = (service.notFitCard || []).map((c) => c.label).filter(Boolean);

  if (!fit.length && !notFit.length) return null;

  return (
    <section className="bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div>
              <SectionLabel text={heading.label} textColor="#44B276" />
            </div>
          </MotionEffect>

          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="mt-[5px] mb-[14px]">
              <SectionTitle text={heading.title} textColor="#312749" />
            </div>
          </MotionEffect>

          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="max-w-[74rem]">
              <SectionDescription text={heading.description} textColor="#625C70" />
            </div>
          </MotionEffect>
        </div>

        <div className="mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:mt-[6rem]">
          {fit.length > 0 && (
            <MotionEffect slide={{ direction: "down" }} fade inView delay={0.4} transition={{ type: "tween", duration: 1.0, ease: "easeOut" }} className="h-full">
              <FitColumn heading="A good fit if" items={fit} positive />
            </MotionEffect>
          )}
          {notFit.length > 0 && (
            <MotionEffect slide={{ direction: "down" }} fade inView delay={0.55} transition={{ type: "tween", duration: 1.0, ease: "easeOut" }} className="h-full">
              <FitColumn heading="Probably not the right fit if" items={notFit} />
            </MotionEffect>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

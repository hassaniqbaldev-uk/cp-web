"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { MotionEffect } from "@/components/effects/motion-effect";

// CP-05 module — a flexible curated-work grid for pages whose curated set is NOT exactly three (the shared
// Work component is a fixed 1-big-+-2-small layout that needs three). Renders any count of case-study cards
// in a responsive grid that adapts columns to the count and centres/caps small counts, so a page with two
// genuine case studies (e.g. Shopify) shows exactly two without padding or a broken layout.
const CuratedWorkGrid = ({ caseStudies = [], label, title, description }) => {
  const items = caseStudies.filter(Boolean);
  if (!items.length) return null;

  const cols = Math.min(items.length, 3);
  const maxW =
    cols === 1 ? "max-w-[52rem]" : cols === 2 ? "max-w-[80rem]" : "max-w-full";

  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {label && (
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div>
                <SectionLabel text={label} textColor="#FF37B3" />
              </div>
            </MotionEffect>
          )}
          {title && (
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="mt-[5px] mb-[14px]">
                <SectionTitle text={title} textColor="#312749" />
              </div>
            </MotionEffect>
          )}
          {description && (
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="max-w-[74rem]">
                <SectionDescription text={description} textColor="#625C70" />
              </div>
            </MotionEffect>
          )}
        </div>

        <div
          className={`mx-auto mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:mt-[6rem] xl:[grid-template-columns:var(--cols)] ${maxW}`}
          style={{ "--cols": `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {items.map((cs, idx) => (
            <MotionEffect
              key={cs.slug || idx}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4 + idx * 0.15}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="h-full"
            >
              <CaseStudyCard caseStudy={cs} />
            </MotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedWorkGrid;

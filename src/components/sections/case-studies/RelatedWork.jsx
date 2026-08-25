"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { MotionEffect } from "@/components/effects/motion-effect";

// Related work on a case-study detail page. The list is ordered upstream (relatedWorkQuery): by how many
// services/industries each candidate SHARES with this study, then flagship-first, then order/recency —
// never newest-by-default — and archive studies are excluded. Renders nothing if there are no related studies.
const RelatedWork = ({ items = [] }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="relative z-[10] container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div>
              <SectionLabel text="Related work" textColor="#FF37B3" />
            </div>
          </MotionEffect>

          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="mt-[5px] mb-[1.4rem]">
              <SectionTitle text="More projects like this one." textColor="#312749" />
            </div>
          </MotionEffect>
        </div>

        <div className="mt-[5rem] grid grid-cols-1 gap-[3.3rem] md:grid-cols-2 xl:grid-cols-3">
          {items.map((cs, idx) => (
            <MotionEffect
              key={cs._id || cs.slug}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.35 + idx * 0.15}
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

export default RelatedWork;

"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import { MotionEffect } from "@/components/effects/motion-effect";

// Design decisions / Technical decisions (CP-12). RENDER-WHEN-POPULATED: each block appears only when its
// field is filled in the CMS (fields defined in the Studio, separate project). A study with neither shows
// nothing — no empty section. Shape matches the other detail sections: { title, description, points[] }.
const DecisionBlock = ({ label, labelColor, data }) => {
  const hasBody = data && (data.description || (data.points && data.points.length));
  if (!hasBody) return null;

  return (
    <MotionEffect slide={{ direction: "down" }} fade inView delay={0.15} transition={{ type: "tween", duration: 0.9, ease: "easeOut" }}>
      <div className="flex w-full flex-col gap-[1.6rem]">
        <SectionLabel text={label} textColor={labelColor} />
        {data.title && (
          <h3 className="text-[2.4rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3.4rem] md:leading-[4rem]">
            {data.title}
          </h3>
        )}
        {data.description && (
          <p className="text-[1.8rem] leading-[3rem] font-normal tracking-normal text-[#625C70] md:text-[2rem] md:leading-[3.4rem]">
            {data.description}
          </p>
        )}
        {data.points && data.points.length > 0 && (
          <ul className="mt-[1rem] flex flex-col gap-[1.4rem]">
            {data.points.map((p, idx) => (
              <li key={p._key || idx} className="flex items-start gap-[1.2rem]">
                <i className="relative top-[.6rem] min-w-max">
                  <CheckMarkIcon color={labelColor} height="15" width="15" />
                </i>
                <span className="text-[1.6rem] leading-[2.6rem] font-medium tracking-normal text-[#312749] md:text-[1.8rem]">
                  {p.label || p}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MotionEffect>
  );
};

const CaseStudyDecisions = ({ designDecisions, technicalDecisions }) => {
  const hasDesign =
    designDecisions &&
    (designDecisions.description ||
      (designDecisions.points && designDecisions.points.length));
  const hasTechnical =
    technicalDecisions &&
    (technicalDecisions.description ||
      (technicalDecisions.points && technicalDecisions.points.length));

  if (!hasDesign && !hasTechnical) return null;

  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="relative z-[10] container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="mb-[3rem]">
              <SectionTitle text="The decisions behind it." textColor="#312749" />
            </div>
          </MotionEffect>
        </div>

        <div className="grid grid-cols-1 gap-[4rem] md:gap-[5rem] xl:grid-cols-2 xl:gap-[6rem]">
          <DecisionBlock label="Design decisions" labelColor="#FF37B3" data={designDecisions} />
          <DecisionBlock label="Technical decisions" labelColor="#3078FF" data={technicalDecisions} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDecisions;

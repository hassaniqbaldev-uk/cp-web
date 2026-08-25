"use client";

import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { MotionEffect } from "@/components/effects/motion-effect";

// Cross-link section for a case-study detail page: the SERVICES this project evidences (links to the
// service pages — the evidence loop) and the TECHNOLOGY it used. Both come from existing, valid tags on
// the case study; the section renders only what is present, so a study with neither shows nothing.
const CaseStudyEvidence = ({ services = [], technologies = [] }) => {
  const hasServices = Array.isArray(services) && services.length > 0;
  const hasTech = Array.isArray(technologies) && technologies.length > 0;
  if (!hasServices && !hasTech) return null;

  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="relative z-[10] container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div>
              <SectionLabel text="What this project used" textColor="#3078FF" />
            </div>
          </MotionEffect>

          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="mt-[5px] mb-[3rem]">
              <SectionTitle text="The services and technology behind it." textColor="#312749" />
            </div>
          </MotionEffect>
        </div>

        <div className="mt-[2rem] flex flex-col gap-[4rem] md:gap-[5rem]">
          {hasServices && (
            <MotionEffect slide={{ direction: "down" }} fade inView delay={0.35} transition={{ type: "tween", duration: 0.9, ease: "easeOut" }}>
              <div className="flex flex-col items-center gap-[2rem] text-center">
                <h3 className="text-[1.4rem] leading-[2.4rem] font-bold tracking-[0.08em] text-[#625C70] uppercase">
                  Services this project evidences
                </h3>
                <ul className="flex flex-wrap items-center justify-center gap-[1.2rem] md:gap-[1.6rem]">
                  {services.map((s) => (
                    <li key={s._id || s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group inline-flex items-center rounded-[7rem] border border-[#3078FF]/30 bg-white px-[2.4rem] py-[1.2rem] text-[1.6rem] font-semibold tracking-normal text-[#312749] transition-colors duration-200 hover:border-[#3078FF] hover:text-[#3078FF] md:text-[1.8rem]"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionEffect>
          )}

          {hasTech && (
            <MotionEffect slide={{ direction: "down" }} fade inView delay={0.45} transition={{ type: "tween", duration: 0.9, ease: "easeOut" }}>
              <div className="flex flex-col items-center gap-[2rem] text-center">
                <h3 className="text-[1.4rem] leading-[2.4rem] font-bold tracking-[0.08em] text-[#625C70] uppercase">
                  Technology
                </h3>
                <ul className="flex flex-wrap items-center justify-center gap-[1rem] md:gap-[1.4rem]">
                  {technologies.map((t) => (
                    <li
                      key={t._id || t.slug || t.title}
                      className="inline-flex items-center rounded-[1.2rem] border border-[#E4E3E8] bg-white px-[2rem] py-[1rem] text-[1.5rem] font-medium tracking-normal text-[#312749] md:text-[1.6rem]"
                    >
                      {t.title}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionEffect>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyEvidence;

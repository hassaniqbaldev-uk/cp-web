"use client";

import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { MotionEffect } from "@/components/effects/motion-effect";

// A per-pillar feature block. Prop-driven so it serves both the heavy Web & Ecommerce treatment (with
// capability links and relevant work) and — later — the three concise pillars, which simply omit `work`
// and `capabilities`. Web & Ecommerce is the largest part of the business, so it is the only one that
// carries work cards, which is what makes it read as the heaviest section on the page.
const PillarFeature = ({
  eyebrow,
  eyebrowColor = "#3078FF",
  title,
  description,
  capabilities = [],
  work = [],
  cta,
  accentColor = "#3078FF",
}) => {
  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text={eyebrow} textColor={eyebrowColor} />
              </div>
            </MotionEffect>
          )}

          {title && (
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-[5px] mb-[14px]">
                <SectionTitle text={title} textColor="#312749" />
              </div>
            </MotionEffect>
          )}

          {description && (
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="max-w-[74rem]">
                <SectionDescription text={description} textColor="#625C70" />
              </div>
            </MotionEffect>
          )}
        </div>

        {capabilities.length > 0 && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.5}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="mt-[3rem] flex flex-wrap items-center justify-center gap-[1.2rem]">
              {capabilities.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group inline-flex items-center gap-[.8rem] rounded-[20rem] border border-black/10 bg-white px-[2rem] py-[1.1rem] text-[1.6rem] font-semibold text-[#312749] transition-colors duration-200 hover:border-black/30"
                >
                  {c.label}
                  <i className="min-w-max transition-transform duration-200 group-hover:translate-x-[3px]">
                    <TiltArrowIcon color={accentColor} width="12" height="12" />
                  </i>
                </Link>
              ))}
            </div>
          </MotionEffect>
        )}

        {work.length > 0 && (
          <div className="mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:mt-[6rem] xl:grid-cols-3">
            {work.map((cs, idx) => (
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
        )}

        {cta && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="mt-[5rem] flex justify-center">
              <PrimaryButton
                text={cta.text}
                href={cta.href}
                bGcolor="#312749"
                textColor="#FFFFFF"
                ctaPosition="home-web-ecommerce"
              />
            </div>
          </MotionEffect>
        )}
      </div>
    </section>
  );
};

export default PillarFeature;

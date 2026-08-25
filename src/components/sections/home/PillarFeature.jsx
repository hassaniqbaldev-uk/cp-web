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
  proof,
  cta,
  ctaPosition = "home-pillar",
  accentColor = "#3078FF",
  variant = "feature",
}) => {
  // The three light pillars use variant="concise": tighter padding, no capability links or work cards,
  // and a text link instead of a filled button, so they stay visibly smaller than the Web & Ecommerce
  // block and the weighting reads. `proof` is an optional single evidence line (AI & Automation uses it
  // for Biome4Pets — its only proof — so its block still earns its place without work cards).
  const concise = variant === "concise";

  return (
    <section
      className={`px-[2rem] xl:px-[0rem] ${
        concise ? "py-[4rem] xl:py-[6rem]" : "py-[5rem] xl:py-[10rem]"
      }`}
    >
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

        {proof && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.5}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="mt-[2.6rem] flex justify-center">
              <Link
                href={proof.href}
                className="group inline-flex items-center gap-[1rem] rounded-[20rem] border border-black/10 bg-white px-[2.2rem] py-[1.2rem] text-center text-[1.5rem] leading-[2rem] font-medium text-[#312749]"
              >
                <span
                  className="text-[1.2rem] font-bold tracking-[0.08em] uppercase"
                  style={{ color: accentColor }}
                >
                  Proof
                </span>
                <span>{proof.text}</span>
                <i className="min-w-max transition-transform duration-200 group-hover:translate-x-[3px]">
                  <TiltArrowIcon color={accentColor} width="12" height="12" />
                </i>
              </Link>
            </div>
          </MotionEffect>
        )}

        {cta && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className={`flex justify-center ${concise ? "mt-[2.6rem]" : "mt-[5rem]"}`}>
              {concise ? (
                <Link
                  href={cta.href}
                  className="group inline-flex items-center gap-[.8rem] text-[1.7rem] font-semibold"
                  style={{ color: accentColor }}
                >
                  {cta.text}
                  <i className="min-w-max transition-transform duration-200 group-hover:translate-x-[3px]">
                    <TiltArrowIcon color={accentColor} width="12" height="12" />
                  </i>
                </Link>
              ) : (
                <PrimaryButton
                  text={cta.text}
                  href={cta.href}
                  bGcolor="#312749"
                  textColor="#FFFFFF"
                  ctaPosition={ctaPosition}
                />
              )}
            </div>
          </MotionEffect>
        )}
      </div>
    </section>
  );
};

export default PillarFeature;

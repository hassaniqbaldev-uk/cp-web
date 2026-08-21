"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import { MotionEffect } from "@/components/effects/motion-effect";
import { getServicePricing, WARRANTY } from "@/content/servicePricing";

// CP-05 module — the Investment / pricing block. Reads the APPROVED single source
// (src/content/servicePricing.js) keyed by slug, NOT the per-document `options.pricingCard` (that data
// is unapproved and inconsistent across the estate — see 00-context §8). Renders the "from" figure with
// its framing, the what's-included checklist (`options.includeCard[]`), and the warranty as a trust
// signal (first of its two placements; the closing CTA carries the second). Presence-gated by
// `modularLayout`.
const DEFAULT_HEADING = {
  label: "Investment",
  title: "What it costs",
  description: null,
};

const Investment = ({ slug, includes = [], heading, showWarranty = true }) => {
  const pricing = getServicePricing(slug);
  const h = { ...DEFAULT_HEADING, ...(heading || {}) };
  const description = h.description || pricing?.framing;
  const items = (includes || []).map((c) => c.label).filter(Boolean);

  return (
    <section className="bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div>
              <SectionLabel text={h.label} textColor="#FF37B3" />
            </div>
          </MotionEffect>

          <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
            <div className="mt-[5px] mb-[14px]">
              <SectionTitle text={h.title} textColor="#312749" />
            </div>
          </MotionEffect>

          {description && (
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="max-w-[74rem]">
                <SectionDescription text={description} textColor="#625C70" />
              </div>
            </MotionEffect>
          )}
        </div>

        <MotionEffect slide={{ direction: "down" }} fade inView delay={0.45} transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}>
          <div className="mx-auto mt-[5rem] max-w-[92rem] overflow-hidden rounded-[3rem] border border-black/10 bg-white xl:mt-[6rem]">
            <div className="flex flex-col gap-[4rem] p-[3rem] md:p-[5rem] xl:flex-row xl:items-center xl:justify-between">
              {/* Price + CTA */}
              <div className="flex flex-col items-start gap-[2rem] xl:w-[38rem]">
                {pricing?.from && (
                  <p className="text-[4.4rem] leading-[4.8rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[5.6rem] md:leading-[6rem]">
                    {pricing.from}
                  </p>
                )}
                <p className="text-[1.5rem] leading-[2.4rem] text-[#625C70]">
                  Scoped with you before anything starts. No obligation to proceed.
                </p>
                <PrimaryButton
                  text="Start a project"
                  href="/contact"
                  bGcolor="#FF37B3"
                  textColor="#ffffff"
                  ctaPosition="service-detail-investment"
                />
              </div>

              {/* What's included */}
              {items.length > 0 && (
                <div className="flex-1 xl:border-l xl:border-black/10 xl:pl-[5rem]">
                  <p className="mb-[2rem] text-[1.4rem] leading-[2rem] font-bold tracking-[0.02em] text-[#312749] uppercase">
                    What is included
                  </p>
                  <ul className="grid grid-cols-1 gap-x-[3rem] gap-y-[1.4rem] sm:grid-cols-2">
                    {items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-[1.2rem] text-[1.6rem] leading-[2.4rem] text-[#625C70]"
                      >
                        <i className="relative top-[.4rem] min-w-max">
                          <CheckMarkIcon color="#44B276" width="18" height="18" />
                        </i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Warranty strip — first of the two warranty placements. Only where the warranty genuinely
                applies (it covers what we build); omitted for services like Branding. */}
            {showWarranty && (
              <div className="border-t border-black/10 bg-[#F7FAFF] px-[3rem] py-[2.4rem] md:px-[5rem]">
                <p className="text-[1.5rem] leading-[2.4rem] text-[#312749]">
                  <span className="font-semibold">Covered after launch. </span>
                  {WARRANTY.short}
                </p>
              </div>
            )}
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default Investment;

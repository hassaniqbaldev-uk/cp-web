"use client";

import Link from "next/link";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { MotionEffect } from "@/components/effects/motion-effect";

// CP-05 module — a slim "this is part of a bigger offer" band for SPECIALIST pages (e.g. WordPress is
// part of Web Design & Development, Shopify is part of Ecommerce). It links UP to the parent so a
// specialist page reads as part of the parent rather than a competing product. Data comes from
// `service.parentService` ({ label, href, description }). Rendered near the top, under the hero.
const ParentServiceBand = ({ parent }) => {
  if (!parent?.href || !parent?.label) return null;

  return (
    <section className="px-[2rem] py-[2rem] xl:px-[0rem]">
      <div className="container">
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.1}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href={parent.href}
            className="group mx-auto flex max-w-[92rem] flex-col items-start gap-[1.6rem] rounded-[2rem] border border-[#3078FF]/25 bg-[#F7FAFF] px-[2.4rem] py-[2rem] transition-all duration-200 hover:border-[#3078FF]/60 md:flex-row md:items-center md:justify-between md:px-[3.2rem]"
          >
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.3rem] leading-[2rem] font-bold tracking-[0.04em] text-[#3078FF] uppercase">
                Part of {parent.label}
              </span>
              {parent.description && (
                <span className="text-[1.6rem] leading-[2.4rem] text-[#625C70]">
                  {parent.description}
                </span>
              )}
            </div>

            <span className="inline-flex min-w-max items-center gap-[.8rem] text-[1.6rem] leading-[2rem] font-semibold text-[#312749]">
              See {parent.label}
              <i className="relative top-[.2rem] transition-all duration-200 group-hover:translate-x-[.4rem]">
                <RightArrowIcon color="#312749" />
              </i>
            </span>
          </Link>
        </MotionEffect>
      </div>
    </section>
  );
};

export default ParentServiceBand;

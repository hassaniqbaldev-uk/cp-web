"use client";
import Link from "next/link";
import { trackCta } from "@/lib/analytics/events";
import { MotionEffect } from "@/components/effects/motion-effect";

// A SECONDARY, mid-page inline CTA for decision points (after proof, after the pillars, under the
// reviews). Deliberately a text link, not a solid button, so it catches a persuaded visitor without
// competing with the hero and final CTAs. Not every section gets one — used sparingly.
const InlineCta = ({
  prompt,
  text = "Start a project",
  href = "/contact",
  ctaPosition = "inline",
}) => {
  return (
    <MotionEffect
      slide={{ direction: "down" }}
      fade
      inView
      delay={0.1}
      transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <div className="container flex flex-col items-center justify-center gap-[0.4rem] px-[2rem] text-center md:flex-row md:gap-[1.4rem] xl:px-[0rem]">
        {prompt && (
          <span className="text-[1.6rem] leading-[2.8rem] font-medium tracking-normal text-[#625C70] md:text-[1.8rem]">
            {prompt}
          </span>
        )}

        <Link
          href={href}
          onClick={() => trackCta(text, ctaPosition)}
          className="group inline-flex items-center gap-[0.6rem] text-[1.6rem] leading-[2.8rem] font-bold tracking-[-0.01em] text-[#312749] md:text-[1.8rem]"
        >
          <span className="underline decoration-[#312749]/30 decoration-1 underline-offset-[5px] transition-colors duration-200 group-hover:decoration-[#312749]">
            {text}
          </span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </MotionEffect>
  );
};

export default InlineCta;

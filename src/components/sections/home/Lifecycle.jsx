"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import ServicesLogoShape from "@/components/decorative-elements/ServicesLogoShape";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import { MotionEffect } from "@/components/effects/motion-effect";

// The lifecycle — deliberately NOT a second "we stick around" trust pitch (that lives in Why). It is the
// launch -> improve -> grow -> automate arc, and each stage draws on a DIFFERENT pillar, so it shows the
// four pillars working together over the life of the relationship — a story nothing else on the page tells.
// Dark-glass treatment matches ServicesPillars / PartnerWithUs2, and keeps the section rhythm's dark slot
// that Process used to hold.
const STAGES = [
  {
    no: "01",
    stage: "Launch",
    pillar: "Web & Ecommerce",
    color: "#3078FF",
    text: "We design and build the website, store or app, done properly from the start.",
  },
  {
    no: "02",
    stage: "Improve",
    pillar: "Brand & Experience",
    color: "#ED910C",
    text: "We sharpen the brand and the experience around it, so more of your visitors act.",
  },
  {
    no: "03",
    stage: "Grow",
    pillar: "Growth & Performance",
    color: "#FF37B3",
    text: "We bring the right people in through search, paid media and content, and keep refining what works.",
  },
  {
    no: "04",
    stage: "Automate",
    pillar: "AI & Automation",
    color: "#7C3AED",
    text: "We take the repetitive work off your team with automation and AI, so growth does not mean more headcount.",
  },
];

const StageCard = ({ item }) => (
  <div className="relative h-full w-full rounded-[3rem]">
    {/* Gradient border — the glass edge used across the dark sections. */}
    <div
      aria-hidden
      style={{
        background:
          "linear-gradient(149.03deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 51.06%, rgba(255,255,255,0.6) 98.34%)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1px",
        borderRadius: "3rem",
      }}
      className="pointer-events-none absolute inset-0 z-[1]"
    />

    <div className="relative z-[2] flex h-full flex-col gap-[1.6rem] rounded-[3rem] bg-white/15 p-[3rem]">
      <span
        className="text-[3.4rem] leading-[3.4rem] font-bold tracking-[-0.02em]"
        style={{ color: item.color }}
      >
        {item.no}
      </span>

      <div className="flex flex-col gap-[.6rem]">
        <h3 className="text-[2.4rem] leading-[2.8rem] font-bold tracking-[-0.02em] text-white">
          {item.stage}
        </h3>
        <span
          className="text-[1.3rem] font-bold tracking-[0.04em] uppercase"
          style={{ color: item.color }}
        >
          {item.pillar}
        </span>
      </div>

      <p className="text-[1.6rem] leading-[2.6rem] font-normal text-white">
        {item.text}
      </p>
    </div>
  </div>
);

const Lifecycle = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <Image
        src={ProcessBg}
        alt="Background Image"
        fill
        priority
        className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        unoptimized
      />

      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <ServicesLogoShape className="absolute top-[2rem] right-[-1rem] h-[7.1rem] w-[5.2rem] rotate-[-34deg] md:top-[7.8rem] md:h-[17.7rem] md:w-[12.9rem]" />
      </div>

      <div className="relative z-[10] container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.1}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <SectionLabel text="The lifecycle" textColor="#FF37B3" />
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.25}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="mt-[5px] mb-[14px]">
              <SectionTitle
                text="Launch, improve, grow, automate."
                textColor="#FFFFFF"
              />
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-[70rem]">
              <SectionDescription
                text="Most agencies stop at launch. We are set up for everything after it. Each stage draws on a different part of what we do, and we are there for all of them."
                textColor="#FFFFFF"
              />
            </div>
          </MotionEffect>
        </div>

        <div className="mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:mt-[7rem] xl:grid-cols-4">
          {STAGES.map((item, idx) => (
            <MotionEffect
              key={item.no}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4 + idx * 0.15}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="h-full"
            >
              <StageCard item={item} />
            </MotionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifecycle;

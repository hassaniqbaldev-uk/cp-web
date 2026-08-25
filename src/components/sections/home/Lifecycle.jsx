"use client";

import Image from "next/image";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const ProcessSlider = dynamic(() => import("@/components/ui/ProcessSlider"), {
  ssr: false,
  loading: () => <div className="h-[35.6rem]" />, // placeholder height to prevent layout shift
});

// The lifecycle — the launch -> improve -> grow -> automate arc, each stage tied to a DIFFERENT pillar, so
// it shows the four pillars working together over the relationship (distinct from Why's differentiators,
// not a second trust pitch). It reuses the Process treatment exactly — the numbered tile + connecting-line
// timeline, the shared ProcessSlider for mobile, and the dark ProcessBg — because the content is a sequence
// and that presentation already reads as one on the site. (The old Process component is kept orphaned; this
// is the arc, not the delivery method — the "how we work" method links out to /how-we-work below.)
// Pillar names lead each description so they show on desktop and in the mobile slider alike.
const STAGES = [
  {
    step: "1",
    title: "Launch",
    description:
      "Web & Ecommerce. We design and build the website, store or app, done properly from the start.",
    color: "#3078FF",
    boxShadow: "5px 5px 44px 0px #3078FFCC",
  },
  {
    step: "2",
    title: "Improve",
    description:
      "Brand & Experience. We sharpen the brand and the experience around it, so more of your visitors act.",
    color: "#ED910C",
    boxShadow: "5px 5px 44px 0px #ED910CCC",
  },
  {
    step: "3",
    title: "Grow",
    description:
      "Growth & Performance. We bring the right people in through search, paid media and content, and keep refining what works.",
    color: "#FF37B3",
    boxShadow: "5px 5px 44px 0px #FF37B3CC",
  },
  {
    step: "4",
    title: "Automate",
    description:
      "AI & Automation. We take the repetitive work off your team, so growth does not mean more headcount.",
    color: "#7C3AED",
    boxShadow: "5px 5px 44px 0px #7C3AEDCC",
  },
];

const Lifecycle = () => {
  return (
    <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      {/* Background Image */}
      <Image
        src={ProcessBg}
        alt=""
        fill
        className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        sizes="100vw"
        quality={65}
      />

      <div className="relative z-[10] container">
        <div className="flex flex-col items-center justify-between gap-[1.5rem] md:gap-[4rem] xl:flex-row xl:items-start">
          <div className="flex w-[30rem] flex-col items-center gap-[1rem] text-center md:w-[58.5rem] xl:items-start xl:text-left">
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
              <h2 className="text-[3rem] leading-[3.5rem] font-bold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
                Launch, improve, grow,
                <span className="bg-gradient-orange-pink block bg-clip-text text-transparent">
                  automate.
                </span>
              </h2>
            </MotionEffect>
          </div>

          <div className="flex w-[30rem] flex-col items-center gap-[3.2rem] text-center md:w-[58.5rem] xl:items-start xl:text-left">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionDescription
                  text="Most agencies stop at launch. We are set up for everything after it. Each stage draws on a different part of what we do, and we are there for all of them."
                  textColor="#ffffff"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.55}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <PrimaryButton
                  text="See how we work"
                  textColor="#312749"
                  bGcolor="#ffffff"
                  href="/how-we-work"
                  ctaPosition="home-lifecycle"
                />
              </div>
            </MotionEffect>
          </div>
        </div>

        <div className="mt-[6.5rem] hidden grid-cols-4 xl:grid">
          {STAGES.map((item, idx) => (
            <MotionEffect
              key={item.step}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4 + idx * 0.15}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
            >
              <div className="flex h-full flex-col items-center gap-[3.8rem]">
                <div className="relative flex w-full justify-center">
                  <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t border-white/30" />

                  <div
                    style={{
                      boxShadow: item.boxShadow,
                      backgroundColor: item.color,
                    }}
                    className="relative z-[1] inline-flex size-[7.9rem] items-center justify-center rounded-[1.6rem] text-center text-[3.5rem] font-extrabold tracking-[-0.02em] text-white"
                  >
                    0{item.step}
                  </div>
                </div>

                <div className="process-card flex flex-col items-start justify-center gap-[3.5rem] py-[3rem]">
                  <div className="flex h-full flex-col items-start px-[2.8rem] text-left">
                    <h3
                      style={{ color: item.color }}
                      className="mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
                    >
                      {item.title}
                    </h3>

                    <p className="text-[1.6rem] leading-[2.4rem] font-normal text-white">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </MotionEffect>
          ))}
        </div>

        {/* Responsive — reuse the shared ProcessSlider (same mobile behaviour as the Process section). */}
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.6}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="block w-full xl:hidden">
            <ProcessSlider PROCESS_CARD={STAGES} />
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default Lifecycle;

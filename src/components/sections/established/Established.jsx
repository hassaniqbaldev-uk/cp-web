"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import ServicesLogoShape from "@/assets/svgs/services-logo-shape.svg";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";
import { FOUNDED_YEAR, YEARS_IN_BUSINESS } from "@/content/company";

// Why CreativePixels. The brief wants specific, concrete differences rather than generic agency claims.
// Trimmed to four (CRO P1) that map directly to the section title (owner-led, senior, here after launch)
// so the section makes one clean argument instead of a wall of six. "Custom where it counts" and
// "Real technical depth" were dropped — the pillars and AI feature already carry those. No invented
// client results (the old "£10M+ revenue generated" stat stays removed).
const DIFFERENCES = [
  {
    title: "Owner-led",
    text: "Hassan is hands-on from the first call to after launch, not just for the pitch.",
  },
  {
    title: "A specialist team",
    text: "Designers, developers and growth people who each do one thing well, not generalists stretched thin.",
  },
  {
    title: "Commercially focused",
    text: "We build for revenue and growth, measured on what your site does for the business, not on awards.",
  },
  {
    title: "Here after launch",
    text: "Support, improvements and a warranty on what we build, not a handover and goodbye.",
  },
];

const Established = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      {/* Decorative shape — the texture the site's light sections carry (matches Expertise3). */}
      <div className="pointer-events-none absolute top-[7.8rem] right-[0rem] h-[17.7rem] w-[12.9rem] rotate-[-34deg] select-none">
        <Image
          src={ServicesLogoShape}
          alt=""
          width={129}
          height={177}
          unoptimized
        />
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
              <SectionLabel text="Why CreativePixels" textColor="#3078FF" />
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
                text="Owner-led, senior, and here after launch."
                textColor="#312749"
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
                text={`In business since ${FOUNDED_YEAR}, ${YEARS_IN_BUSINESS} years of it, and set up differently from most agencies. Here is what that means for your project.`}
                textColor="#625C70"
              />
            </div>
          </MotionEffect>
        </div>

        <div className="mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:mt-[6rem]">
          {DIFFERENCES.map((item, idx) => (
            <MotionEffect
              key={item.title}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4 + idx * 0.1}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="h-full"
            >
              <div
                style={{ boxShadow: "11px 11px 65px 0px #00000012" }}
                className="flex h-full flex-col gap-[1.4rem] rounded-[2.4rem] bg-white p-[3rem]"
              >
                <span className="inline-flex size-[4.4rem] min-w-[4.4rem] items-center justify-center rounded-full bg-[#3078FF]/10">
                  <CheckMarkIcon color="#3078FF" />
                </span>
                <h3 className="text-[2rem] leading-[2.6rem] font-bold tracking-[-0.02em] text-[#312749]">
                  {item.title}
                </h3>
                <p className="text-[1.6rem] leading-[2.5rem] text-[#625C70]">
                  {item.text}
                </p>
              </div>
            </MotionEffect>
          ))}
        </div>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.5}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <div className="mt-[5rem] flex justify-center">
            <PrimaryButton
              text="Read our story"
              href="/about"
              bGcolor="#312749"
              textColor="#ffffff"
              ctaPosition="home-why"
            />
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default Established;

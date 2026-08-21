"use client";

import Image from "next/image";
import ServicesLogoShape from "@/assets/svgs/services-logo-shape.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";
import LightFeatureCard2 from "@/components/ui/LightFeatureCard2";

const LightFeatureCardSlider2 = dynamic(
  () => import("@/components/ui/LightFeatureCardSlider2"),
  {
    ssr: false,
  },
);

export const themeColors = {
  primary: {
    color: "#3078FF",
    shadow: "4px 12px 30px 0px #3078FF1C",
  },
  secondary: {
    color: "#EE7621",
    shadow: "4px 12px 30px 0px #EE76211C",
  },
  accent: {
    color: "#FF37B3",
    shadow: "4px 12px 30px 0px #FF37B31C",
  },
  success: {
    color: "#44B276",
    shadow: "4px 12px 30px 0px #44B2761C",
  },
  highlight: {
    color: "#BF00B4",
    shadow: "4px 12px 30px 0px #BF00B41C",
  },
  danger: {
    color: "#F14A58",
    shadow: "4px 12px 30px 0px #F14A581C",
  },
};

export const themeColorList = Object.values(themeColors);

// CP-05 refactor (21 Aug 2026): header is content-driven via `service.heading` (defaults preserve the
// current copy, so the 16 existing pages are unchanged). Card icons are OPTIONAL — the underlying
// LightFeatureCard2 already renders without one, so a service without icons still displays cleanly.
const DEFAULT_HEADING = {
  label: "Specialised Expertise",
  title: "What we build",
  description:
    "Deep expertise across the entire ecosystem. We don't just 'install themes' we engineer solutions.",
};

const Expertise3 = ({ service }) => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  const heading = { ...DEFAULT_HEADING, ...(service.heading || {}) };

  const slideData = service.card.map((item, idx) => {
    const theme = getThemeColor(idx);
    return {
      icon: item.icon?.asset?.url,
      title: item.title,
      description: item.description,
      listItem: item.listItem?.map((list) => list.label),
      color: theme.color,
    };
  });

  return (
    <>
      <section className="relative overflow-hidden bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Element*/}
        <div className="pointer-events-none absolute top-[7.8rem] right-[0rem] h-[17.7rem] w-[12.9rem] rotate-[-34deg] select-none">
          <Image
            src={ServicesLogoShape}
            alt="Services Logo Shape"
            width={129}
            height={177}
            unoptimized
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5px] text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text={heading.label} textColor="#EE8D00" />
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
              <div>
                <SectionTitle text={heading.title} textColor="#312749" />
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
              <div className="max-w-[74rem]">
                <SectionDescription
                  text={heading.description}
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          {/* Desktop cards */}
          <div className="mt-[5rem] hidden w-full grid-cols-3 gap-[3rem] xl:grid">
            {service.card.map((item, idx) => {
              const theme = getThemeColor(idx);

              return (
                <MotionEffect
                  key={idx}
                  slide={{ direction: "down" }}
                  fade
                  inView
                  delay={0.4 + idx * 0.15}
                  transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
                >
                  <LightFeatureCard2
                    icon={item.icon?.asset?.url}
                    title={item.title}
                    description={item.description}
                    points={item.listItem?.map((list) => list.label)}
                    color={theme.color}
                    hoverShadow={theme.shadow}
                  />
                </MotionEffect>
              );
            })}
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="mt-[5rem] block w-full xl:hidden">
              <LightFeatureCardSlider2 slideData={slideData} />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default Expertise3;

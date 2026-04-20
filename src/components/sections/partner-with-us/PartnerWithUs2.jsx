"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";
import GlassFeatureCard from "@/components/ui/GlassFeatureCard";

const GlassFeatureCardSlider = dynamic(
  () => import("@/components/ui/GlassFeatureCardSlider"),
  {
    ssr: false,
  },
);

export const themeColors = {
  primary: {
    color: "#FF37B3",
    shadow: "5px 5px 44px 0px #FF37B3CC",
  },
  secondary: {
    color: "#3078FF",
    shadow: "5px 5px 44px 0px #3078FFCC",
  },
  accent: {
    color: "#ED910C",
    shadow: "5px 5px 44px 0px #ED910CCC",
  },
};

export const themeColorList = Object.values(themeColors);

const PartnerWithUs2 = ({ service }) => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  const slideData = service.card.map((item, idx) => {
    const theme = getThemeColor(idx);
    return {
      title: item.title,
      description: item.description,
      color: theme.color,
      shadow: theme.shadow,
      number: idx + 1,
    };
  });

  return (
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5rem]">
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
                  <SectionLabel text="partner with us" textColor="#FF37B3" />
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
                  <SectionTitle
                    text="Stop losing money to..."
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
                <div>
                  <SectionDescription
                    text="We identify and fix the bottlenecks that are choking your growth."
                    textColor="#FFFFFF"
                  />
                </div>
              </MotionEffect>
            </div>

            {/* Desktop cards */}
            <div className="hidden w-full grid-cols-3 gap-[3rem] xl:grid">
              {service.card.map((item, idx) => {
                const theme = getThemeColor(idx);
                return (
                  <MotionEffect
                    key={idx}
                    slide={{ direction: "down" }}
                    fade
                    inView
                    delay={0.4 + idx * 0.15}
                    transition={{
                      type: "tween",
                      duration: 1.0,
                      ease: "easeOut",
                    }}
                  >
                    <GlassFeatureCard
                      title={item.title}
                      description={item.description}
                      color={theme.color}
                      shadow={theme.shadow}
                      number={idx + 1}
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
              <div className="block w-full xl:hidden">
                <GlassFeatureCardSlider slideData={slideData} />
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs2;

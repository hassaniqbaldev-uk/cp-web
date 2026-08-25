"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import { MotionEffect } from "@/components/effects/motion-effect";
import GlassFeatureCard from "@/components/ui/GlassFeatureCard";
import dynamic from "next/dynamic";

const GlassFeatureCardSlider = dynamic(
  () => import("@/components/ui/GlassFeatureCardSlider"),
  {
    ssr: false,
  },
);

export const themeColors = {
  primary: {
    color: "#3078FF",
    shadow: "5px 5px 44px 0px #3078FFCC",
  },
  secondary: {
    color: "#ED910C",
    shadow: "5px 5px 44px 0px #ED910CCC",
  },
  accent: {
    color: "#FF37B3",
    shadow: "5px 5px 44px 0px #FF37B3CC",
  },
  success: {
    color: "#44B276",
    shadow: "5px 5px 44px 0px #44B276CC",
  },
  highlight: {
    color: "#BF00B4",
    shadow: "5px 5px 44px 0px #BF00B4CC",
  },
};

export const themeColorList = Object.values(themeColors);

const Growth2 = ({ services = [] }) => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  const slideData = services.map((item, idx) => {
    const theme = getThemeColor(idx);
    return {
      icon: item.icon.asset.url,
      title: item.title,
      description: item.excerpt,
      link: `/services/${item.slug.current}`,
      linkText: "Explore Service",
      color: theme.color,
      shadow: theme.shadow,
    };
  });

  return (
    <>
      <section
        id="growth-2"
        className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]"
      >
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt=""
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5rem]">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex w-full items-center justify-center gap-[6rem]">
                <hr className="hidden w-full border-t border-white/20 md:block" />
                <div className="min-w-max">
                  <SectionTitle text="Growth" textColor="#FFFFFF" />
                </div>
                <hr className="hidden w-full border-t border-white/20 md:block" />
              </div>
            </MotionEffect>

            <div className="hidden w-full grid-cols-3 gap-[3rem] xl:grid">
              {services.map((item, idx) => {
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
                      icon={item.icon.asset.url}
                      title={item.title}
                      description={item.excerpt}
                      color={theme.color}
                      shadow={theme.shadow}
                      link={`/services/${item.slug.current}`}
                      linkText="Explore Service"
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
              delay={0.4}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
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

export default Growth2;

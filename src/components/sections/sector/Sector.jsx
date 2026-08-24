"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";
import LightFeatureCard1 from "@/components/ui/LightFeatureCard1";

const LightFeatureCardSlider1 = dynamic(
  () => import("@/components/ui/LightFeatureCardSlider1"),
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
};

export const themeColorList = Object.values(themeColors);

// CP-08: prop-driven so the Industries hub reuses the same grid. Defaults preserve the Solutions
// behaviour exactly (basePath "/solutions", heading "By Sector", linkText "View Solution"), so the
// Solutions hub is unchanged. `item.icon?.asset?.url` is guarded — an icon-less doc renders without one
// instead of crashing the build.
const Sector = ({
  solutions = [],
  basePath = "/solutions",
  heading = "By Sector",
  linkText = "View Solution",
  id = "sector",
}) => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  const slideData = solutions.map((item, idx) => {
    const theme = getThemeColor(idx);
    return {
      icon: item.icon?.asset?.url,
      title: item.title,
      description: item.excerpt,
      link: `${basePath}/${item.slug.current}`,
      linkText,
      color: theme.color,
    };
  });

  return (
    <>
      <section
        id={id}
        className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]"
      >
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt="Logo Shape"
            width={106}
            height={98}
            className="absolute right-[5rem] bottom-[6rem] rotate-[35deg]"
          />
        </div>

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
                <hr className="hidden w-full border-t border-[#625c70]/20 md:block" />
                <div className="min-w-max">
                  <SectionTitle text={heading} textColor="#312749" />
                </div>
                <hr className="hidden w-full border-t border-[#625c70]/20 md:block" />
              </div>
            </MotionEffect>

            <div className="hidden w-full grid-cols-3 gap-[3rem] xl:grid">
              {solutions.map((item, idx) => {
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
                    <LightFeatureCard1
                      icon={item.icon?.asset?.url}
                      title={item.title}
                      description={item.excerpt}
                      link={`${basePath}/${item.slug.current}`}
                      linkText={linkText}
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
              delay={0.4}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="w-full"
            >
              <div className="block w-full xl:hidden">
                <LightFeatureCardSlider1 slideData={slideData} />
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sector;

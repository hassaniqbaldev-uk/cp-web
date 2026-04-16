"use client";

import RightArrowIcon from "@/components/icons/RightArrowIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";
import UxIcon from "@/assets/icons/ui/ux-icon.svg";
import WordpressIcon from "@/assets/icons/ui/wordpress-icon.svg";
import ShopifyIcon from "@/assets/icons/ui/shopify-icon.svg";
import DeveloperIcon from "@/assets/icons/ui/developer-icon.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import { useState } from "react";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const SectorSlider = dynamic(() => import("@/components/ui/SectorSlider"), {
  ssr: false,
  loading: () => <div className="h-[51.1rem]" />, // placeholder height to prevent layout shift
});

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

const Sector = ({ solutions = [] }) => {
  const [hovered, setHovered] = useState(null);

  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  return (
    <>
      <section
        id="sector"
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
                  <SectionTitle text="By Sector" textColor="#312749" />
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
                    <div
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        borderColor: theme.color,
                        boxShadow: hovered === idx ? theme.shadow : "",
                      }}
                      className="flex h-full w-full flex-col justify-between rounded-[3rem] border px-[3rem] pt-[3.1rem] pb-[2.8rem] transition-all duration-300"
                    >
                      <div>
                        {/* Icon */}
                        <div className="relative size-[6.3rem]">
                          <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                            <Image
                              src={item.icon.asset.url}
                              alt={item.title}
                              width={30}
                              height={30}
                            />
                          </div>

                          <div
                            className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                            style={{ backgroundColor: theme.color }}
                          />
                        </div>

                        <h3 className="mt-[3rem] text-[2.6rem] font-semibold text-[#312749]">
                          {item.title}
                        </h3>

                        <p className="mt-[1rem] mb-[3.5rem] text-[1.6rem] text-[#625C70]">
                          {item.excerpt}
                        </p>
                      </div>

                      <Link
                        href={`/solutions/${item.slug.current}`}
                        className="inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold"
                        style={{ color: theme.color }}
                      >
                        View Solution
                        <RightArrowIcon color={theme.color} />
                      </Link>
                    </div>
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
                <SectorSlider
                  solutions={solutions}
                  getThemeColor={getThemeColor}
                />
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sector;

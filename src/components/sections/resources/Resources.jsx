"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import { MotionEffect } from "@/components/effects/motion-effect";
import SectionDescription from "@/components/ui/SectionDescription";
import dynamic from "next/dynamic";
import GlassFeatureCard from "@/components/ui/GlassFeatureCard";

const GlassFeatureCardSlider = dynamic(
  () => import("@/components/ui/GlassFeatureCardSlider"),
  {
    ssr: false,
  },
);

const Resources = ({ legal = [] }) => {
  const slideData = legal.map((item, idx) => {
    return {
      id: idx,
      icon: item.icon.asset.url,
      title: item.title,
      description: item.excerpt,
      link: `/legal/${item.slug.current}`,
      linkText: "More Details",
      color: item.color,
    };
  });
  return (
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt=""
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5rem]">
            <div className="flex w-full flex-col items-center justify-center text-center">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionTitle text="Client Resources" textColor="#FFFFFF" />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div>
                  <SectionDescription
                    text="These documents apply when working with CreativePixels as a client, agency, or partner."
                    textColor="#FFFFFF"
                  />
                </div>
              </MotionEffect>
            </div>

            <div className="hidden w-full grid-cols-3 gap-[3rem] xl:grid">
              {legal.map((item, idx) => {
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
                      color={item.color}
                      link={`/legal/${item.slug.current}`}
                      linkText="More Details"
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

export default Resources;

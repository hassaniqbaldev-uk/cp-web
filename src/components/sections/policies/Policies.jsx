"use client";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import { MotionEffect } from "@/components/effects/motion-effect";
import SectionDescription from "@/components/ui/SectionDescription";
import dynamic from "next/dynamic";
import LightFeatureCard1 from "@/components/ui/LightFeatureCard1";

const LightFeatureCardSlider1 = dynamic(
  () => import("@/components/ui/LightFeatureCardSlider1"),
  {
    ssr: false,
  },
);

const Policies = ({ legal = [] }) => {
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
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt=""
            width={106}
            height={98}
            className="absolute right-[5rem] bottom-[6rem] rotate-[35deg]"
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5rem]">
            <div className="flex w-full flex-col items-center justify-center gap-[1rem] text-center">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionTitle text="Our Policies" textColor="#312749" />
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
                    text="These policies explain how we operate, how we protect data, and how our website should be used."
                    textColor="#625C70"
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
                    <LightFeatureCard1
                      icon={item.icon.asset.url}
                      title={item.title}
                      description={item.excerpt}
                      link={`/legal/${item.slug.current}`}
                      linkText="More Details"
                      color={item.color}
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

export default Policies;

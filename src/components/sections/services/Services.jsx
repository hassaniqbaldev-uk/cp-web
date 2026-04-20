"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import { SERVICES_CARD } from "@/contants";
import ServicesLogoShape from "@/components/decorative-elements/ServicesLogoShape";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";
import LightFeatureCard2 from "@/components/ui/LightFeatureCard2";

const LightFeatureCardSlider2 = dynamic(
  () => import("@/components/ui/LightFeatureCardSlider2"),
  {
    ssr: false,
  },
);

const Services = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Element*/}
        <div className="absolute inset-0 z-[2]">
          <ServicesLogoShape className="pointer-events-none absolute top-[2rem] right-[-1rem] h-[7.1rem] w-[5.2rem] rotate-[-34deg] select-none md:top-[7.8rem] md:h-[17.7rem] md:w-[12.9rem]" />
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
                <SectionLabel text="Our Services" textColor="#EE8D00" />
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
              <div className="mt-[5px] mb-[14px] max-w-[25rem] md:max-w-[85rem]">
                <SectionTitle text="Everything you need to grow online" />
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
              <div className="max-w-[25rem] md:max-w-[85rem]">
                <SectionDescription text="From strategy to launch to long-term growth we're with you every step." />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] hidden grid-cols-3 gap-[3.3rem] xl:grid">
            {SERVICES_CARD.map((item, idx) => (
              <MotionEffect
                key={idx}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4 + idx * 0.15}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <LightFeatureCard2
                  title={item.title}
                  description={item.description}
                  hoverShadow={item.boxShadow}
                  color={item.color}
                  link={item.link}
                  linkText={item.linkText}
                  points={item.listItem}
                  icon={item.icon}
                />
              </MotionEffect>
            ))}
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
              <LightFeatureCardSlider2 slideData={SERVICES_CARD} />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default Services;

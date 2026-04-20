"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import { EXPERTISE_CARD } from "@/contants";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";
import LightFeatureCard1 from "@/components/ui/LightFeatureCard1";

const LightFeatureCardSlider1 = dynamic(
  () => import("@/components/ui/LightFeatureCardSlider1"),
  {
    ssr: false,
  },
);

const Expertise = () => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect
              slide={{
                direction: "down",
              }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="Our Expertise" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{
                direction: "down",
              }}
              fade
              zoom
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-[5px] mb-[14px] max-w-[28rem] md:max-w-[85rem]">
                <SectionTitle text="We help businesses like yours" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{
                direction: "down",
              }}
              fade
              zoom
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="max-w-[25rem] md:max-w-[85rem]">
                <SectionDescription text="Tailored strategies for every stage of growth." />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] hidden grid-cols-3 gap-[3.3rem] xl:grid">
            {EXPERTISE_CARD.map((item, idx) => (
              <MotionEffect
                key={idx}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4 + idx * 0.15}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <LightFeatureCard1
                  icon={item.icon}
                  color={item.color}
                  hoverShadow={item.boxShadow}
                  description={item.description}
                  title={item.title}
                  link={item.link}
                  linkText={item.linkText}
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
              <LightFeatureCardSlider1 slideData={EXPERTISE_CARD} />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default Expertise;

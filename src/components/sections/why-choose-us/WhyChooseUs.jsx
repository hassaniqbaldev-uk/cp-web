"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
import SendIcon from "@/assets/icons/ui/send-icon.svg";
import BusinessIcon from "@/assets/icons/ui/business-icon.svg";
import Image from "next/image";
import Counter from "@/components/ui/Counter";
import { MotionEffect } from "@/components/effects/motion-effect";

const features = [
  {
    title: "Strategic Before Creative",
    description:
      "Every successful website begins with research, planning, and understanding your customers.",
    color: "#ED910C",
  },
  {
    title: "Built for Search Visibility",
    description:
      "Technical SEO, structured content, fast performance, and clean development practices are considered from day one—not added later.",
    color: "#3078FF",
  },
  {
    title: "Designed Around Conversions",
    description:
      "Beautiful design is important, but results matter more. Every page is created to encourage visitors to take action.",
    color: "#FF37B3",
  },
  {
    title: "Fast, Secure & Scalable",
    description:
      "We develop websites using modern technologies and best practices that support speed, security, accessibility, and future growth.",
    color: "#7EE972",
  },
  {
    title: "Transparent Communication",
    description:
      "No unnecessary jargon, hidden costs, or confusing reports. You'll always know what we're doing and why.",
    color: "#ED910C",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Many of our clients continue working with us long after launch for support, improvements, SEO, and ongoing digital growth.",
    color: "#FF37B3",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="bg-[#f0f6ff] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center gap-[4.6rem] md:gap-[8rem] xl:flex-row">
            <div className="flex w-[30rem] flex-col items-center text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionLabel text="WHY CHOOSE US" textColor="#3078FF" />
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
                <div className="mt-[1rem] mb-[2rem]">
                  <SectionTitle text="Why Businesses Choose CreativePixels" />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <p className="mb-[4rem] text-[1.8rem] leading-[2.8rem] font-normal text-[#625C70]">
                  Choosing the right website partner isn't about finding the
                  cheapest quote. It's about working with people who understand
                  how websites contribute to business growth.
                </p>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.55}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <PrimaryButton
                    bGcolor="#FF37B3"
                    text="Contact Us"
                    href="/contact"
                    textColor="#ffffff"
                  />
                </div>
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="grid gap-[2rem] md:grid-cols-2 xl:w-[60rem]">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start border-b pb-[2rem] text-left`}
                  >
                    <h5
                      style={{
                        color: feature.color,
                      }}
                      className="mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
                    >
                      {feature.title}
                    </h5>

                    <p className="text-[1.6rem] leading-[2.4rem] font-normal">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyChooseUs;

"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import IdeaIcon2 from "@/assets/icons/ui/idea-icon-2.svg";
import CodeScreenIcon from "@/assets/icons/ui/code-screen-icon.svg";
import ConnectIcon from "@/assets/icons/ui/connect-icon.svg";
import GuidelineIcon from "@/assets/icons/ui/guideline-icon.svg";
import Carousel from "@/components/ui/Carousel";
import { MotionEffect } from "@/components/effects/motion-effect";

export const steps = [
  {
    id: "01",
    title: "Discovery Workshop",
    description:
      "We facilitate a deep-dive session to uncover your brand's archetype, values, and personality.",
    icon: IdeaIcon2,
  },
  {
    id: "02",
    title: "Concept Development",
    description:
      "Our designers explore multiple visual territories, presenting you with distinct strategic directions.",
    icon: CodeScreenIcon,
  },
  {
    id: "03",
    title: "Refinement & Systems",
    description:
      "We select the strongest direction and build out the full visual language and asset library.",
    icon: ConnectIcon,
  },
  {
    id: "04",
    title: "Guidelines & Handoff",
    description:
      "You receive a comprehensive brand book and all source files, empowering your team to use the brand correctly.",
    icon: GuidelineIcon,
  },
];

export const themeColors = {
  primary: {
    color: "#FF37B3",
    gradient:
      "linear-gradient(180deg, #FF37B3 19.93%, rgba(255, 55, 179, 0) 100%)",
  },
  secondary: {
    color: "#EE7621",
    gradient:
      "linear-gradient(180deg, #EE7621 19.93%, rgba(238, 118, 33, 0) 100%)",
  },
  accent: {
    color: "#3078FF",
    gradient:
      "linear-gradient(180deg, #3078FF 19.93%, rgba(48, 120, 255, 0) 100%)",
  },
  success: {
    color: "#F14A58",
    gradient:
      "linear-gradient(180deg, #F14A58 19.93%, rgba(241, 74, 88, 0) 100%)",
  },
};

export const themeColorList = Object.values(themeColors);

// CP-05 refactor (21 Aug 2026): header is content-driven via `service.heading` (defaults preserve the
// current copy, so the 16 existing pages are unchanged). Step icons are OPTIONAL — a step without one
// renders as a numbered row with no icon column.
const DEFAULT_HEADING = {
  label: "Our Methodology",
  title: "How we deliver results",
  description: "A proven process that minimises risk and maximises ROI.",
};

const Methodology = ({ service }) => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  const heading = { ...DEFAULT_HEADING, ...(service.heading || {}) };

  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text={heading.label} textColor="#3078FF" />
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
              <div className="mt-[.5rem] mb-[1.4rem]">
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
              <div>
                <SectionDescription
                  text={heading.description}
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          {/* Desktop cards. Tightened (CRO): the giant index and heavy padding made this block one of the
              tallest on the money pages. Denser rows — smaller index, tighter padding/leading — so the page
              reaches the ask faster while keeping the numbered, scannable structure. */}
          <div className="mt-[4rem] hidden flex-col gap-[1.8rem] xl:flex">
            {service.card.map((step, idx) => {
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
                  <div
                    className="flex items-center justify-between rounded-[2rem] border px-[4rem] py-[2.4rem]"
                    style={{ borderColor: theme.color }}
                  >
                    <h3
                      style={{
                        backgroundImage: theme.gradient,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }}
                      className="block text-[9rem] leading-[9rem] font-bold tracking-[-0.03em]"
                    >
                      0{idx + 1}
                    </h3>

                    <div className="flex items-center gap-[5rem] text-left">
                      <div className="flex max-w-[62rem] flex-col gap-[0.6rem]">
                        <h4 className="text-[2.6rem] leading-[3.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                          {step.title}
                        </h4>

                        <p className="text-[1.8rem] leading-[2.6rem] tracking-normal text-[#625C70]">
                          {step.description}
                        </p>
                      </div>

                      {step.icon?.asset?.url && (
                        <div className="h-[8rem] min-w-[7.4rem]">
                          <Image
                            src={step.icon.asset.url}
                            width={130}
                            height={140}
                            alt=""
                            unoptimized
                            className="h-[8rem] w-auto"
                          />
                        </div>
                      )}
                    </div>
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
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="mt-[5rem] block w-full xl:hidden">
              <Carousel
                items={service.card}
                breakpoints={{
                  767: { slidesPerView: 2, spaceBetween: 0 },
                  1024: { slidesPerView: 3, spaceBetween: 0 },
                }}
                slideClassName="!flex !h-auto !items-center !justify-center px-[1rem] pt-[.5rem] pb-[10rem]"
                renderItem={(step, idx) => {
                  const theme = getThemeColor(idx);

                  return (
                    <div
                      className="flex h-full flex-col items-center justify-between gap-[3rem] rounded-[2rem] border px-[3rem] py-[3.4rem] xl:gap-[0rem] xl:px-[5rem]"
                      style={{ borderColor: theme.color }}
                    >
                      <h3
                        style={{
                          backgroundImage: theme.gradient,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="hidden text-[13rem] leading-[13rem] font-bold tracking-[-0.03em] md:inline-block xl:text-[16rem] xl:leading-[16rem]"
                      >
                        0{idx + 1}
                      </h3>

                      <div className="flex flex-col items-center gap-[5rem] text-center lg:gap-[8rem]">
                        <div className="flex max-w-[60rem] flex-col gap-[1rem]">
                          <h4 className="text-[2.8rem] leading-[3.5rem] font-bold tracking-[-0.02em] text-[#312749] lg:text-[3.4rem] lg:leading-[4.8rem]">
                            {step.title}
                          </h4>

                          <p className="text-[1.8rem] leading-[2.4rem] tracking-normal text-[#625C70] lg:text-[2.2rem] lg:leading-[2.8rem]">
                            {step.description}
                          </p>
                        </div>

                        {step.icon?.asset?.url && (
                          <div className="h-[14rem] min-w-[13rem]">
                            <Image
                              src={step.icon.asset.url}
                              width={130}
                              height={140}
                              alt=""
                              unoptimized
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default Methodology;

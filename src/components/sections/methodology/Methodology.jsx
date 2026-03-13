"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import IdeaIcon2 from "@/assets/icons/ui/idea-icon-2.svg";
import CodeScreenIcon from "@/assets/icons/ui/code-screen-icon.svg";
import ConnectIcon from "@/assets/icons/ui/connect-icon.svg";
import GuidelineIcon from "@/assets/icons/ui/guideline-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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

const Methodology = ({ service }) => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

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
                <SectionLabel text="Our Methodology" textColor="#3078FF" />
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
                <SectionTitle
                  text="How we deliver results"
                  textColor="#312749"
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
                  text="A proven process that minimises risk and maximises ROI."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          {/* Desktop cards */}
          <div className="mt-[5rem] hidden flex-col gap-[3.5rem] xl:flex">
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
                    className="flex items-center justify-between rounded-[2rem] border px-[5rem] py-[3.4rem]"
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
                      className="block text-[16rem] leading-[16rem] font-bold tracking-[-0.03em]"
                    >
                      0{idx + 1}
                    </h3>

                    <div className="flex items-center gap-[8rem] text-left">
                      <div className="flex max-w-[60rem] flex-col gap-[1rem]">
                        <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
                          {step.title}
                        </h4>

                        <p className="text-[2.2rem] leading-[2.8rem] tracking-normal text-[#625C70]">
                          {step.description}
                        </p>
                      </div>

                      <div className="h-[14rem] min-w-[13rem]">
                        <Image
                          src={step.icon.asset.url}
                          width={130}
                          height={140}
                          alt="Icon"
                          unoptimized
                        />
                      </div>
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
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                }}
                className="mySwiper"
              >
                {service.card.map((step, idx) => {
                  const theme = getThemeColor(idx);

                  return (
                    <SwiperSlide
                      key={idx}
                      className="!flex !h-auto !items-center !justify-center px-[1rem] pt-[.5rem] pb-[10rem]"
                    >
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

                          <div className="h-[14rem] min-w-[13rem]">
                            <Image
                              src={step.icon.asset.url}
                              width={130}
                              height={140}
                              alt="Icon"
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default Methodology;

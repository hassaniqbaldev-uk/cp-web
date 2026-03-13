"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";
import DiscoveryIcon from "@/assets/icons/ui/discovery-icon.svg";
import CollaborativeIcon from "@/assets/icons/ui/collaborative-icon.svg";
import DesignIcon2 from "@/assets/icons/ui/design-icon-2.svg";
import MonitorIcon from "@/assets/icons/ui/monitor-icon.svg";
import SupportIcon2 from "@/assets/icons/ui/support-icon-2.svg";

export const steps = [
  {
    id: "01",
    title: "Discovery & Fit",
    description:
      "We start by understanding your agency's goals, client expectations, and existing workflows. This is where we learn how we can best integrate as your white label.",
    icon: DiscoveryIcon,
  },
  {
    id: "02",
    title: "Collaborative Planning",
    description:
      "From UX planning and wireframes to broader agency growth strategy, we map out the scope together so it aligns with your goals and tools.",
    icon: CollaborativeIcon,
  },
  {
    id: "03",
    title: "Design & Development",
    description:
      "Need Figma design only? Custom WordPress development? Or a full end-to-end build? We tailor each project so you get exactly what your clients need.",
    icon: DesignIcon2,
  },
  {
    id: "04",
    title: "Seamless Integration",
    description:
      "We plug into your systems — from project management tools to communication channels — so our work feels like part of your own in-house team.",
    icon: MonitorIcon,
  },
  {
    id: "05",
    title: "Quality & Ongoing Support",
    description:
      "Rigorous QA, smooth handoff, and ongoing white label support. We help you deliver consistent results while you focus on growing client relationships.",
    icon: SupportIcon2,
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

const Process4 = () => {
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
              <SectionLabel text="Our Working Process" textColor="#3078FF" />
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
                  text="How We Work With Agencies"
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
              <SectionDescription
                text="Every agency works differently with their own systems, tools, and workflows. Some partner with us for white label web design, others for WordPress development, and many for both. Whether you need outsourced production or long-term agency growth support, we adapt to your way of working, not the other way around."
                textColor="#625C70"
              />
            </MotionEffect>
          </div>

          <div className="mt-[5rem] hidden flex-col gap-[3.5rem] xl:flex">
            {steps.map((step, idx) => {
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
                          src={step.icon}
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
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
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
                {steps.map((step, idx) => {
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
                              src={step.icon}
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

export default Process4;

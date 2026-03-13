"use client";
import Image from "next/image";
import ServicesLogoShape from "@/assets/svgs/services-logo-shape.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";

export const expertiseData = [
  {
    step: "1",
    title: "Human-Led Strategy",
    description:
      "No faceless account managers. You get direct access to Hassan and senior strategists who understand your business goals first, technology second.",
  },
  {
    step: "2",
    title: "No Templates",
    description:
      "We don't churn out cookie-cutter sites. Every solution is custom-architected to solve your specific problems and scale with your growth.",
  },
  {
    step: "3",
    title: "Outcome Focused",
    description:
      "We don't just deliver 'code'. We deliver leads, sales, and efficiency. If it doesn't move the needle for your business, we don't build it.",
  },
];

export const themeColors = {
  primary: {
    color: "#EE7621",
  },
  secondary: {
    color: "#FF37B3",
  },
  accent: {
    color: "#3078FF",
  },
};

export const themeColorList = Object.values(themeColors);

const Expertise2 = () => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  return (
    <>
      <section className="relative overflow-hidden bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Element*/}
        <div className="pointer-events-none absolute top-[7.8rem] right-[0rem] h-[17.7rem] w-[12.9rem] rotate-[-34deg] select-none">
          <Image
            src={ServicesLogoShape}
            alt="Services Logo Shape"
            width={129}
            height={177}
            unoptimized
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5px] text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="Our Expertise" textColor="#EE8D00" />
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
              <div>
                <SectionTitle
                  text="What makes us different?"
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
                  text="We're not a factory. We're a strategic partner invested in your long-term success."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] hidden w-full grid-cols-3 gap-[3rem] xl:grid">
            {expertiseData.map((item, idx) => {
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
                    style={{
                      background: theme.color,
                    }}
                    className="flex h-[29rem] w-full flex-col items-start justify-center rounded-[3rem] px-[3rem] text-left"
                  >
                    <div
                      style={{
                        boxShadow: "5px 5px 44px 0px #FFFFFFCC",
                        color: theme.color,
                      }}
                      className="inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] bg-white text-center text-[2.6rem] font-semibold tracking-normal"
                    >
                      0{item.step}
                    </div>

                    <h4 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                      {item.title}
                    </h4>

                    <p className="text-[1.6rem] leading-[2.4rem] tracking-normal text-white">
                      {item.description}
                    </p>
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
            className="mt-[5rem] w-full"
          >
            <div className="block w-full xl:hidden">
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
                {expertiseData.map((item, idx) => {
                  const theme = getThemeColor(idx);

                  return (
                    <SwiperSlide
                      key={idx}
                      className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
                    >
                      <div
                        style={{
                          background: theme.color,
                        }}
                        className="flex h-full w-full flex-col items-start justify-center rounded-[3rem] p-[2rem] text-left"
                      >
                        <div
                          style={{
                            boxShadow: "5px 5px 44px 0px #FFFFFFCC",
                            color: theme.color,
                          }}
                          className="inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] bg-white text-center text-[2.6rem] font-semibold tracking-normal"
                        >
                          0{item.step}
                        </div>

                        <h4 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                          {item.title}
                        </h4>

                        <p className="text-[1.6rem] leading-[2.4rem] tracking-normal text-white">
                          {item.description}
                        </p>
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

export default Expertise2;

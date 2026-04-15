"use client";
import { LP_PROCESS_CARD } from "@/contants";
import { MotionEffect } from "../effects/motion-effect";
import SectionDescription from "../ui/SectionDescription";
import PrimaryButton from "./LpPrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const LpProcessSection = () => {
  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center gap-[2rem] text-center xl:mb-[7rem]">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.25}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[3rem] leading-[3.7rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[7rem] md:leading-[7.5rem]">
              <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                A Simple,
              </span>{" "}
              <span className="block"> Proven Process</span>
            </h2>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <SectionDescription
              text="Our WordPress web design process is simple, transparent, and results-driven:"
              textColor="#625C70"
            />
          </MotionEffect>
        </div>

        <div className="hidden grid-cols-4 xl:grid">
          {LP_PROCESS_CARD.map((item, idx) => (
            <MotionEffect
              key={item.step}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.45 + idx * 0.15}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex h-full flex-col items-center gap-[3.8rem]">
                <div className="relative flex w-full justify-center">
                  <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t border-black/30" />

                  <div
                    style={{
                      boxShadow: item.boxShadow,
                      backgroundColor: item.color,
                    }}
                    className="relative z-[1] inline-flex size-[7.9rem] items-center justify-center rounded-[1.6rem] text-center text-[3.5rem] font-extrabold tracking-[-0.02em] text-white"
                  >
                    0{item.step}
                  </div>
                </div>

                <div
                  style={{
                    borderColor: item.color,
                  }}
                  className="lp-process-card flex flex-col justify-center gap-[3.5rem] border py-[3rem]"
                >
                  <div className="flex h-full flex-col items-start px-[2.8rem] text-left">
                    <h5
                      style={{ color: item.color }}
                      className="mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
                    >
                      {item.title}
                    </h5>

                    <p className="text-[1.6rem] leading-[2.4rem] font-normal text-[#312749]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </MotionEffect>
          ))}
        </div>

        {/* Responsive */}
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.5}
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
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
              {LP_PROCESS_CARD.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!flex !h-auto !justify-center pt-[8rem] pb-[5rem]"
                >
                  <div
                    key={item.step}
                    className="flex h-full w-full flex-col items-center gap-[3.8rem]"
                  >
                    <div className="relative flex w-full justify-center">
                      <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t border-black/30" />

                      <div
                        style={{
                          boxShadow: item.boxShadow,
                          backgroundColor: item.color,
                        }}
                        className="relative z-[1] inline-flex size-[7.9rem] items-center justify-center rounded-[1.6rem] text-center text-[3.5rem] font-extrabold tracking-[-0.02em] text-white"
                      >
                        0{item.step}
                      </div>
                    </div>

                    <div
                      style={{
                        borderColor: item.color,
                      }}
                      className="lp-process-card flex flex-col justify-center gap-[3.5rem] border py-[3rem]"
                    >
                      <div className="flex h-full flex-col items-start px-[2.8rem] text-left">
                        <h5
                          style={{ color: item.color }}
                          className="mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
                        >
                          {item.title}
                        </h5>

                        <p className="text-[1.6rem] leading-[2.4rem] font-normal text-[#312749]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </MotionEffect>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.55}
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        >
          <div className="mt-[6rem] flex justify-center">
            <PrimaryButton
              href="#audit"
              text="Schedule Your Free Audit"
              bGcolor="#FF37B3"
              textColor="#FFFFFF"
            />
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default LpProcessSection;

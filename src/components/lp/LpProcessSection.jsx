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
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-[2rem] text-center xl:mb-[7rem]">
            <h2 className="text-[3rem] leading-[3.7rem] font-bold tracking-[-0.01em] text-[#312749] md:text-[7rem] md:leading-[7.5rem]">
              <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                Getting Started
              </span>{" "}
            </h2>

            <div className="max-w-[80rem]">
              <SectionDescription
                text="Getting Started Is Simple. Even If You're Not Technical You don't need to know anything about WordPress. That's our job."
                textColor="#625C70"
              />
            </div>
          </div>

          <div className="hidden grid-cols-4 xl:grid">
            {LP_PROCESS_CARD.map((item, idx) => (
              <div
                key={idx}
                className="flex h-full flex-col items-center gap-[3.8rem]"
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
                  <div className="flex h-full flex-col items-center px-[2.8rem] text-center">
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
            ))}
          </div>

          {/* Responsive */}
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
                      <div className="flex h-full flex-col items-center px-[2.8rem] text-center">
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

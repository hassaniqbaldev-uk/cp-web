"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROCESS_3_CARD } from "@/contants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";

const Process3 = () => {
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
              <SectionLabel text="Our Process" textColor="#EE8D00" />
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-[5px] mb-[14px]">
                <SectionTitle
                  text="How we work with agencies"
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
                text="We adapt to your workflow, not the other way around."
                textColor="#625C70"
              />
            </MotionEffect>
          </div>

          <div className="mt-[7rem] hidden grid-cols-5 xl:grid">
            {PROCESS_3_CARD.map((item, idx) => (
              <MotionEffect
                key={item.step}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4 + idx * 0.15}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center gap-[3.8rem]">
                  <div className="relative flex w-full justify-center">
                    <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t-2 border-[#F1F1F3]" />

                    <div
                      style={{
                        boxShadow: "0px 12px 30px 0px #0000002E",
                        borderColor: item.color,
                      }}
                      className="relative z-[1] inline-flex size-[4.8rem] items-center justify-center rounded-full border-2 bg-white text-center text-[1.8rem] font-semibold tracking-[-0.02em] text-[#312749]"
                    >
                      0{item.step}
                    </div>
                  </div>

                  <div className="flex w-[23rem] flex-col items-center text-center">
                    <i
                      style={{
                        background: item.color,
                        boxShadow: item.boxShadow,
                      }}
                      className="inline-flex size-[6.4rem] items-center justify-center rounded-[1.6rem]"
                    >
                      <Image
                        src={item.icon}
                        width={item.iconWidth}
                        height={item.iconHeight}
                        alt="Icon"
                        unoptimized
                      />
                    </i>

                    <h4 className="mt-[3rem] mb-[2.2rem] text-[1.8rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                      {item.title}
                    </h4>

                    <p className="text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                      {item.description}
                    </p>
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
                {PROCESS_3_CARD.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !justify-center pb-[5rem]"
                  >
                    <div className="flex w-full flex-col items-center gap-[3.8rem]">
                      <div className="relative flex w-full justify-center">
                        <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t-2 border-[#F1F1F3]" />

                        <div
                          style={{
                            boxShadow: "0px 12px 30px 0px #0000002E",
                            borderColor: item.color,
                          }}
                          className="relative z-[1] inline-flex size-[4.8rem] items-center justify-center rounded-full border-2 bg-white text-center text-[1.8rem] font-semibold tracking-[-0.02em] text-[#312749]"
                        >
                          0{item.step}
                        </div>
                      </div>

                      <div className="flex w-full flex-col items-center text-center">
                        <i
                          style={{
                            background: item.color,
                            boxShadow: item.boxShadow,
                          }}
                          className="inline-flex size-[6.4rem] items-center justify-center rounded-[1.6rem]"
                        >
                          <Image
                            src={item.icon}
                            width={item.iconWidth}
                            height={item.iconHeight}
                            alt="Icon"
                            unoptimized
                          />
                        </i>

                        <h4 className="mt-[3rem] mb-[2.2rem] text-[1.8rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                          {item.title}
                        </h4>

                        <p className="max-w-[30rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default Process3;

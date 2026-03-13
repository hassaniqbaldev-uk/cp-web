"use client";
import Image from "next/image";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { PROCESS_CARD } from "@/contants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";

const Process = () => {
  return (
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-between gap-[1.5rem] md:gap-[4rem] xl:flex-row xl:items-start">
            <div className="flex w-[30rem] flex-col items-center gap-[1rem] text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionLabel text="The Process" textColor="#FF37B3" />
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
                <h4 className="text-[3rem] leading-[3.5rem] font-bold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
                  Your roadmap from
                  <span className="bg-gradient-orange-pink block bg-clip-text text-transparent">
                    idea to impact.
                  </span>
                </h4>
              </MotionEffect>
            </div>

            <div className="flex w-[30rem] flex-col items-center gap-[3.2rem] text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionDescription
                    text="We've refined our delivery process over 10 years to minimise risk and maximise speed to market."
                    textColor="#ffffff"
                  />
                </div>
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
                    text="Start Your Project"
                    textColor="#312749"
                    bGcolor="#ffffff"
                    href="/contact"
                  />
                </div>
              </MotionEffect>
            </div>
          </div>

          <div className="mt-[6.5rem] hidden grid-cols-4 xl:grid">
            {PROCESS_CARD.map((item, idx) => (
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
                    <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t border-white/30" />

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

                  <div className="process-card flex flex-col justify-center gap-[3.5rem]">
                    <div className="flex flex-col items-start px-[2.8rem] text-left">
                      <h5
                        style={{ color: item.color }}
                        className="mt-[12px] mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
                      >
                        {item.title}
                      </h5>

                      <p className="text-[1.6rem] leading-[2.4rem] font-normal text-white">
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
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full"
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
                {PROCESS_CARD.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !justify-center pt-[8rem] pb-[5rem]"
                  >
                    <div
                      key={item.step}
                      className="flex flex-col items-center gap-[3.8rem]"
                    >
                      <div className="process-card flex flex-col justify-center gap-[3.5rem]">
                        <div
                          style={{
                            boxShadow: item.boxShadow,
                            backgroundColor: item.color,
                          }}
                          className="absolute top-[-3rem] left-[2.8rem] z-[10] inline-flex size-[5.9rem] items-center justify-center rounded-[1.6rem] text-center text-[2.6rem] font-extrabold tracking-[-0.02em] text-white"
                        >
                          0{item.step}
                        </div>

                        <div className="flex flex-col items-start px-[2.8rem] text-left">
                          <h5
                            style={{ color: item.color }}
                            className="mt-[12px] mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
                          >
                            {item.title}
                          </h5>

                          <p className="text-[1.6rem] leading-[2.4rem] font-normal text-white">
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
        </div>
      </section>
    </>
  );
};
export default Process;

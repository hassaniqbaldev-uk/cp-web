"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";
import SentIcon from "@/assets/icons/ui/sent-icon.svg";
import LoadingIcon from "@/assets/icons/ui/loading-icon.svg";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CaseStudiesHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[17.2rem] pb-[5rem] xl:px-[0rem] xl:pb-[9.4rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape2 className="absolute top-[25rem] right-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-60 md:h-[13.4rem] md:w-[26.8rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel text="Our Work" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="mt-[1rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8.5rem]">
                <span className="block">Real work.</span>{" "}
                <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                  Real results.
                </span>
              </h1>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.3}
            >
              <div className="max-w-[70.6rem]">
                <SectionDescription
                  text="Explore how we've helped ambitious brands across industries scale their digital presence through strategy, design, and technology."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          {/* Desktop */}
          <div className="mt-[5rem] hidden grid-cols-3 gap-[3rem] xl:mt-[6rem] xl:grid">
            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
            >
              <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#EE7621] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
                <div className="relative size-[6.3rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                    <i>
                      <Image
                        src={GraphicDesignIcon}
                        alt="Icon"
                        width={28}
                        height={28}
                      />
                    </i>
                  </div>
                  <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#EE7621]" />
                </div>
                <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                  <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#EE7621] xl:text-[6.8rem] xl:leading-[6rem]">
                    100%
                  </h4>
                  <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                    Custom Designed Sites
                  </span>
                </div>
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.6}
            >
              <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#3078FF] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
                <div className="relative size-[6.3rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                    <i>
                      <Image src={SentIcon} alt="Icon" width={30} height={30} />
                    </i>
                  </div>
                  <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#3078FF]" />
                </div>
                <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                  <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#3078FF] xl:text-[6.8rem] xl:leading-[6rem]">
                    200+
                  </h4>
                  <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                    Projects Delivered
                  </span>
                </div>
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.75}
            >
              <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#FF37B3] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
                <div className="relative size-[6.3rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                    <i>
                      <Image
                        src={LoadingIcon}
                        alt="Icon"
                        width={30}
                        height={30}
                      />
                    </i>
                  </div>
                  <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#FF37B3]" />
                </div>
                <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                  <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#FF37B3] xl:text-[6.8rem] xl:leading-[6rem]">
                    65%
                  </h4>
                  <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                    Faster Load Times
                  </span>
                </div>
              </div>
            </MotionEffect>
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            delay={0.45}
          >
            <div className="mt-[3rem] block w-full xl:hidden">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                  767: { slidesPerView: 2, spaceBetween: 0 },
                  1024: { slidesPerView: 3, spaceBetween: 0 },
                }}
                className="mySwiper"
              >
                <SwiperSlide className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]">
                  <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#EE7621] bg-white p-[2rem] text-left">
                    <div className="relative size-[6.3rem]">
                      <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                        <i>
                          <Image src={GraphicDesignIcon} alt="Icon" width={28} height={28} />
                        </i>
                      </div>
                      <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#EE7621]" />
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#EE7621]">
                        100%
                      </h4>
                      <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70]">
                        Custom Designed Sites
                      </span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]">
                  <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#3078FF] bg-white p-[2rem] text-left">
                    <div className="relative size-[6.3rem]">
                      <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                        <i>
                          <Image src={SentIcon} alt="Icon" width={30} height={30} />
                        </i>
                      </div>
                      <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#3078FF]" />
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#3078FF]">
                        200+
                      </h4>
                      <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70]">
                        Projects Delivered
                      </span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]">
                  <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#FF37B3] bg-white p-[2rem] text-left">
                    <div className="relative size-[6.3rem]">
                      <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                        <i>
                          <Image src={LoadingIcon} alt="Icon" width={30} height={30} />
                        </i>
                      </div>
                      <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#FF37B3]" />
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#FF37B3]">
                        65%
                      </h4>
                      <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70]">
                        Faster Load Times
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesHero;

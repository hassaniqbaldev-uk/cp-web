"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const BrandingHeroSlider = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
      >
        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-full flex-col gap-[5px] p-[3rem]">
            <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#FFE103]">
              Logo Design
            </h4>

            <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
              Unique, scalable logos crafted to tell your story and work
              everywhere — from print to digital.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="branding-hero-glass flex h-[28rem] items-center justify-center p-[3rem] md:h-[32rem]">
            <Image
              src="/images/branding-hero-card-img-1.png"
              width={366}
              height={303}
              alt="Image"
              className="size-full"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-full flex-col gap-[5px] p-[3rem]">
            <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#F14A58]">
              Digital-First Branding
            </h4>

            <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
              Designed in Figma, optimized for websites, dashboards, and apps —
              ready for development handoff.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-[28rem] items-center justify-center p-[3rem] md:h-[32rem]">
            <Image
              src="/images/branding-hero-card-img-2.png"
              width={328}
              height={239}
              alt="Image"
              className="size-full"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-[28rem] items-center justify-center p-[3rem] md:h-[32rem]">
            <Image
              src="/images/branding-hero-card-img-3.png"
              width={298}
              height={246}
              alt="Image"
              className="size-full"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-full flex-col gap-[5px] p-[3rem]">
            <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#3078FF]">
              Brand Identity Systems
            </h4>

            <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
              Typography, colors, and brand guidelines that keep your identity
              consistent across every touchpoint.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-[28rem] items-center justify-center p-[3rem] md:h-[32rem]">
            <Image
              src="/images/branding-hero-card-img-4.png"
              width={282}
              height={242}
              alt="Image"
              className="size-full"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-full flex-col gap-[5px] p-[3rem]">
            <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#44B276]">
              Impact & Trust
            </h4>

            <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
              150+ clients trusted us to launch or refresh their brands. Results
              that drive recognition and growth.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-full flex-col gap-[5px] p-[3rem]">
            <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#EE8D00]">
              Creative Strategy
            </h4>

            <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
              Branding built on insight — audience, market, and competitor
              research that turns design into impact.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-[28rem] items-center justify-center p-[3rem] md:h-[32rem]">
            <Image
              src="/images/branding-hero-card-img-5.png"
              width={288}
              height={220}
              alt="Image"
              className="size-full"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-full flex-col gap-[5px] p-[3rem]">
            <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#FF37B3]">
              Supporting Materials
            </h4>

            <p className="text-[1.8rem] leading-[2.6rem] font-normal text-white">
              From pitch decks to packaging, we provide ongoing creative support
              to keep your brand evolving.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="branding-hero-glass flex h-[28rem] items-center justify-center py-[3rem] md:h-[32rem]">
            <Image
              src="/images/branding-hero-card-img-6.png"
              width={388}
              height={259}
              alt="Image"
              className="size-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BrandingHeroSlider;

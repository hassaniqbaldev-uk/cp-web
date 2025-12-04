"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {
  withDifferenceData,
  withoutDifferenceData,
} from "@/constants/agenciesPage";

const DifferenceSlider2 = () => {
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
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {withoutDifferenceData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!flex !h-auto !items-center !justify-center py-[1rem]"
          >
            <div
              key={item.id}
              style={{
                background:
                  "url('/images/difference-gradient-slide-bg-02.svg') no-repeat center / 100% 100%",
              }}
              className="h-[32rem] w-[30rem]"
            >
              <div className="relative top-[-1rem] flex flex-col items-center gap-[4.4rem] px-[3rem] text-center">
                <i
                  style={{
                    background:
                      "linear-gradient(301.75deg, rgba(255, 255, 255, 0.1) 1.41%, rgba(157, 157, 157, 0.1) 95.05%)",
                    backdropFilter: "blur(3.3rem)",
                  }}
                  className="relative inline-flex size-[4.9rem] items-center justify-center rounded-[1.2rem] border border-white"
                >
                  <item.icon />
                </i>

                <div className="flex flex-col gap-[1rem]">
                  <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h4>

                  <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DifferenceSlider2;

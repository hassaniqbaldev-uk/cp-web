"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { whatWeCanHelpData } from "@/constants/uiUxPage";

const WhatWeCanHelpSlider = () => {
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
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {whatWeCanHelpData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div
              key={idx}
              className="flex h-full flex-col items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-[1.5rem]">
                  <i
                    className={`flex size-[5rem] items-center justify-center rounded-[1.6rem] md:size-[5.6rem] ${item.iconBg}`}
                  >
                    <item.icon className={item.iconWidth} />
                  </i>
                  <span className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[2.6rem] md:leading-[3.2rem]">
                    {item.title}
                  </span>
                </div>
                <p className="mt-[2rem] mb-[3.2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                  {item.description}
                </p>
              </div>
              <hr className="h-[1px] w-full border-0 bg-[#9c9c9c]/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WhatWeCanHelpSlider;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { whatWeCanHelpData3 } from "@/constants/brandingPage";

const WhatWeCanHelpSlider3 = () => {
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
        {whatWeCanHelpData3.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-[1.4rem]">
                <i className="flex min-w-min items-center justify-center">
                  {item.icon}
                </i>
                <span className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                  {item.title}
                </span>
              </div>
              <p className="mt-[.8rem] mb-[2rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                {item.description}
              </p>
              <hr className="w-full border-t border-[#9c9c9c]/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WhatWeCanHelpSlider3;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { industriesData } from "@/constants/uiUxPage";

const IndustriesSlider = () => {
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
        {industriesData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center"
            >
              <item.icon className="size-[6rem] md:size-[8.2rem]" />

              <h5 className="mt-[2rem] mb-[1rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                {item.title}
              </h5>

              <p className="text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default IndustriesSlider;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { generalQAData } from "@/constants/agenciesPage";

const GeneralQASlider = () => {
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
        }}
      >
        {generalQAData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div className="flex size-full flex-col items-center gap-[2.2rem] text-center xl:flex-row xl:items-start xl:text-left">
              <div className="inline-flex h-[5.6rem] min-w-[5.6rem] items-center justify-center rounded-[.8rem] border border-[#9c9c9c]">
                <item.icon />
              </div>

              <div className="flex flex-col gap-[.5rem]">
                <h4 className="text-[2.2rem] leading-[3.2rem] font-medium">
                  {item.question}
                </h4>
                <p className="text-[1.6rem] leading-[2.4rem] font-medium">
                  {item.answer}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GeneralQASlider;

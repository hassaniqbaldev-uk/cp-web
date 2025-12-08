"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ourApproachCards } from "@/constants/smPostPage";

const OurApproach3Slider = () => {
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
        {ourApproachCards.map((card, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div className="our-approach-3-card flex size-full flex-col items-center justify-between gap-[3rem] p-[3rem]">
              <div className="flex flex-col items-center text-center">
                <span className="label inline-flex h-[3.2rem] items-center justify-center px-[1.5rem] text-[1.4rem] leading-[2rem] font-medium text-[#070707]">
                  {card.label}
                </span>

                <div className="mt-[1.5rem] flex flex-col gap-[1rem]">
                  <h4 className="text-[2.4rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707]">
                    {card.title}
                  </h4>

                  <p className="max-w-[38rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="size-[12.8rem]">
                <card.Icon className="size-[12.8rem]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OurApproach3Slider;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { whatWeCanHelpData2 } from "@/constants/wpElementorPage";

const WhatWeCanHelpSlider2 = () => {
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
        {whatWeCanHelpData2.map((card, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div
              key={idx}
              className="size-full rounded-[1.8rem] px-[.8rem] pt-[.8rem] pb-[4rem]"
              style={{
                background: card.bgGradient,
              }}
            >
              <div
                className="flex h-full flex-col items-start justify-between rounded-[1.2rem] bg-white p-[2rem] md:p-[3.2rem]"
                style={{
                  boxShadow: "0px 14px 20.33px 0px #00000026",
                }}
              >
                <div>
                  <div className="flex flex-col items-center gap-[1.5rem]">
                    <div className="min-w-max">
                      <card.icon className={card.iconWidth} />
                    </div>

                    <span className="text-center text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                      {card.title}
                    </span>
                  </div>
                  <p className="mt-[2rem] text-center text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                    {card.description}
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

export default WhatWeCanHelpSlider2;

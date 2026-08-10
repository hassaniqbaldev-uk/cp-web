"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProcessSlider = ({ PROCESS_CARD }) => {
  return (
    <>
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
            className="!flex !h-auto !justify-center px-[2rem] pt-[8rem] pb-[5rem]"
          >
            <div className="flex h-full flex-col items-center gap-[3.8rem]">
              <div className="relative flex w-full justify-center">
                <hr className="absolute top-1/2 z-[0] w-full -translate-y-1/2 border-t border-white/30" />

                <div
                  style={{
                    backgroundColor: item.color,
                  }}
                  className="relative z-[1] inline-flex size-[7.9rem] w-full items-center justify-center rounded-[1.6rem] text-center text-[3rem] font-extrabold tracking-[-0.02em] text-white"
                >
                  {item.step}
                </div>
              </div>

              <div className="process-card flex w-full flex-col items-start justify-center gap-[3.5rem] py-[3rem]">
                <div className="flex h-full flex-col items-start px-[2.8rem] text-left">
                  <h5
                    style={{ color: item.color }}
                    className="mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
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
    </>
  );
};

export default ProcessSlider;

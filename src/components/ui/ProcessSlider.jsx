"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CarouselAutoplayControl from "@/components/ui/CarouselAutoplayControl";

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
            className="!flex !h-auto !justify-center pt-[8rem] pb-[5rem]"
          >
            <div
              key={item.step}
              className="flex h-full flex-col items-center gap-[3.8rem]"
            >
              <div className="process-card flex flex-col justify-center gap-[3.5rem]">
                <div
                  style={{
                    boxShadow: item.boxShadow,
                    backgroundColor: item.color,
                  }}
                  className="absolute top-[-3rem] left-[2.8rem] z-[10] inline-flex size-[5.9rem] items-center justify-center rounded-[1.6rem] text-center text-[2.6rem] font-extrabold tracking-[-0.02em] text-white"
                >
                  0{item.step}
                </div>

                <div className="flex h-full flex-col items-start px-[2.8rem] py-[3rem] text-left">
                  <h5
                    style={{ color: item.color }}
                    className="mt-[12px] mb-[8px] text-[1.8rem] leading-[2.6rem] font-bold"
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
        <CarouselAutoplayControl slot="container-end" />
      </Swiper>
    </>
  );
};

export default ProcessSlider;

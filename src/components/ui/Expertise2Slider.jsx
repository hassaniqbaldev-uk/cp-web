"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Expertise2Slider = ({ expertiseData, getThemeColor }) => {
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
        {expertiseData.map((item, idx) => {
          const theme = getThemeColor(idx);

          return (
            <SwiperSlide
              key={idx}
              className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
            >
              <div
                style={{
                  background: theme.color,
                }}
                className="flex h-full w-full flex-col items-start justify-center rounded-[3rem] p-[2rem] text-left"
              >
                <div
                  style={{
                    boxShadow: "5px 5px 44px 0px #FFFFFFCC",
                    color: theme.color,
                  }}
                  className="inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] bg-white text-center text-[2.6rem] font-semibold tracking-normal"
                >
                  0{item.step}
                </div>

                <h4 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </h4>

                <p className="text-[1.6rem] leading-[2.4rem] tracking-normal text-white">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Expertise2Slider;

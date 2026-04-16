"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Process4Slider = ({ steps, getThemeColor }) => {
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
        {steps.map((step, idx) => {
          const theme = getThemeColor(idx);

          return (
            <SwiperSlide
              key={idx}
              className="!flex !h-auto !items-center !justify-center px-[1rem] pt-[.5rem] pb-[10rem]"
            >
              <div
                className="flex h-full flex-col items-center justify-between gap-[3rem] rounded-[2rem] border px-[3rem] py-[3.4rem] xl:gap-[0rem] xl:px-[5rem]"
                style={{ borderColor: theme.color }}
              >
                <h3
                  style={{
                    backgroundImage: theme.gradient,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="hidden text-[13rem] leading-[13rem] font-bold tracking-[-0.03em] md:inline-block xl:text-[16rem] xl:leading-[16rem]"
                >
                  0{idx + 1}
                </h3>

                <div className="flex flex-col items-center gap-[5rem] text-center lg:gap-[8rem]">
                  <div className="flex max-w-[60rem] flex-col gap-[1rem]">
                    <h4 className="text-[2.8rem] leading-[3.5rem] font-bold tracking-[-0.02em] text-[#312749] lg:text-[3.4rem] lg:leading-[4.8rem]">
                      {step.title}
                    </h4>

                    <p className="text-[1.8rem] leading-[2.4rem] tracking-normal text-[#625C70] lg:text-[2.2rem] lg:leading-[2.8rem]">
                      {step.description}
                    </p>
                  </div>

                  <div className="h-[14rem] min-w-[13rem]">
                    <Image
                      src={step.icon}
                      width={130}
                      height={140}
                      alt="Icon"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Process4Slider;

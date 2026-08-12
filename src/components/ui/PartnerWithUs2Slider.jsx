"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CarouselAutoplayControl from "@/components/ui/CarouselAutoplayControl";

const PartnerWithUs2Slider = ({ getThemeColor, service }) => {
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
        {service.card.map((item, idx) => {
          const theme = getThemeColor(idx);
          return (
            <SwiperSlide
              key={idx}
              className="!flex !h-auto !items-center !justify-center px-[1rem] pt-[.5rem] pb-[10rem]"
            >
              <div className="partner-with-us-2-card">
                <div className="flex h-full flex-col items-start p-[3rem] text-left">
                  <div
                    style={{
                      boxShadow: theme.shadow,
                      background: theme.color,
                    }}
                    className="inline-flex size-[4.8rem] min-w-max items-center justify-center rounded-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white"
                  >
                    {idx + 1}
                  </div>

                  <h4 className="mt-[2rem] text-[2.2rem] leading-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h4>

                  <p className="mt-[1rem] mb-[2rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <CarouselAutoplayControl slot="container-end" />
      </Swiper>
    </>
  );
};

export default PartnerWithUs2Slider;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ourProcessData } from "@/constants/wpElementorPage";

const OurProcessSlider5 = () => {
  return (
    <>
      <Swiper
        className="mySwiper !py-[4rem]"
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

          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {ourProcessData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center px-[1rem]"
          >
            <div
              className={`h-full w-full rounded-[1.8rem] px-[.8rem] pb-[.8rem]`}
              style={{
                background:
                  "linear-gradient(301.75deg,rgba(255, 255, 255, 0.05) 1.41%,rgba(29, 29, 29, 0.05) 95.05%)",
                backdropFilter: "blur(10px)",
                boxShadow: "11.86px 13.55px 20.33px 0px #00000026",
              }}
            >
              {/* Dots */}
              <div className="flex items-center justify-end gap-[3px] px-[.6rem] py-[1.6rem]">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="size-[.8rem] rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="our-process-5-card flex w-full flex-col items-start gap-[3.4rem] p-[2rem]">
                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                  {item.step}
                </span>

                <div className="flex flex-col items-start gap-[.8rem]">
                  <h5
                    className="text-[1.8rem] leading-[2.6rem] font-bold"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h5>
                  <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                    {item.desc}
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

export default OurProcessSlider5;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { approachItems } from "@/constants/uiUxPage";

const OurApproachSlider = () => {
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
        {approachItems.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div
              key={idx}
              className="flex flex-col items-center text-center xl:items-start xl:text-left"
            >
              <div
                className={`flex size-[8.8rem] items-center justify-center rounded-full ${item.bgColor}`}
                style={{ boxShadow: "0px 8px 24px -14px #000000B2" }}
              >
                <item.icon className={item.iconClass} />
              </div>

              <h3 className="mt-[2rem] mb-[.4rem] text-[2.2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#070707]">
                {item.title}
              </h3>

              <p className="text-[1.6rem] leading-[2.4rem] font-normal text-[#070707]">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OurApproachSlider;

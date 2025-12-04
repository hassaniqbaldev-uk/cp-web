"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const cardData = [
  {
    number: "200+",
    title: "Websites Launched",
    textColor: "text-[#FFC300]",
  },
  {
    number: "15+",
    title: "Years Crafting Digital Solutions",
    textColor: "text-[#FF37B3]",
  },
  {
    number: "150+",
    title: "Clients Who Chose Us",
    textColor: "text-[#FF8630]",
  },
  {
    number: "95%",
    title: "Repeat & Referral Rate",
    textColor: "text-[#F14A58]",
  },
];

const OurStatsSlider = () => {
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
        {cardData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div className="our-stats-card flex flex-col items-center !p-[4rem] text-center">
              <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
                {item.number}
              </h4>

              <h6 className={`text-[2rem] font-medium ${item.textColor}`}>
                {item.title}
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OurStatsSlider;

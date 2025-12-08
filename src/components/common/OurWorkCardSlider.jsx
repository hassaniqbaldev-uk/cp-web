"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const cardData = [
  {
    number: "95%",
    title: "Client Satisfaction Rate",
    bgColor: "bg-[#FFC300]",
  },
  {
    number: "200+",
    title: "Projects Delivered",
    bgColor: "bg-[#FF37B3]",
  },
  {
    number: "65%",
    title: "Faster Launch Times",
    bgColor: "bg-[#F14A58]",
  },
];

const OurWorkCardSlider = () => {
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
            <div
              className={`rounded-[3rem] ${item.bgColor} h-full w-full md:w-[40rem]`}
            >
              <h6 className="inline-flex items-start p-[2rem] text-[8rem] leading-[10rem] font-bold tracking-[-0.02em] md:pt-[3.4rem] md:pb-[.7rem] md:pl-[5rem] md:text-[11rem] md:leading-[13rem]">
                {item.number}{" "}
              </h6>

              <hr className="h-[1px] w-full border-0 bg-black/40" />

              <h4 className="p-[2rem] text-[2.2rem] leading-[3.2rem] font-medium md:max-w-[27.3rem] md:pt-[2rem] md:pb-[3.1rem] md:pl-[5rem]">
                {item.title}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OurWorkCardSlider;

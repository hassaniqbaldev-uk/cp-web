"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LightFeatureCard1 from "./LightFeatureCard1";

const LightFeatureCardSlider1 = ({ slideData }) => {
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
        {slideData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !justify-center px-[1rem] pt-[.5rem] pb-[5rem]"
          >
            <LightFeatureCard1
              icon={item.icon}
              color={item.color}
              description={item.description}
              title={item.title}
              link={item.link}
              linkText={item.linkText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LightFeatureCardSlider1;

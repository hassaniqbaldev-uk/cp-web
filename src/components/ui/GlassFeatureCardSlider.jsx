"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import GlassFeatureCard from "./GlassFeatureCard";
import CarouselAutoplayControl from "@/components/ui/CarouselAutoplayControl";

const GlassFeatureCardSlider = ({ slideData }) => {
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
            <GlassFeatureCard
              icon={item.icon}
              color={item.color}
              shadow={item.shadow}
              description={item.description}
              title={item.title}
              link={item.link}
              linkText={item.linkText}
              number={item.number}
            />
          </SwiperSlide>
        ))}
        <CarouselAutoplayControl slot="container-end" />
      </Swiper>
    </>
  );
};

export default GlassFeatureCardSlider;

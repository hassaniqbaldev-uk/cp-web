"use client";
import Image from "next/image";
import RatingStar from "@/assets/icons/rating-star.svg";
import { testimonialsCardData2 } from "@/constants/globals";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
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
        {testimonialsCardData2.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div className="testimonials-card flex h-full w-[30rem] flex-col justify-between md:w-[40rem]">
              <div>
                {/* Rating Stars */}
                <div className="relative h-[2.042rem] w-[11.379rem]">
                  <RatingStar />
                </div>

                {/* Review Text */}
                <p className="mt-[1.958rem] mb-[4.042rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
                  {item.review}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex flex-col gap-[1.2rem]">
                <div className="relative size-[5.6rem] min-w-max overflow-hidden rounded-full">
                  <img
                    src={item.authorImage}
                    alt={item.authorName}
                    className="size-full object-contain object-center"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
                    {item.authorName}
                  </span>
                  <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]/50">
                    {item.authorRole}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import StarIcon from "@/components/icons/StarIcon";
import CarouselAutoplayControl from "@/components/ui/CarouselAutoplayControl";

const TestimonialsSlider = ({ testimonials }) => {
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
        {testimonials.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !justify-center px-[1rem] pt-[.5rem] pb-[5rem]"
          >
            <div className="flex w-full flex-col justify-between gap-[1.5rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[1.5rem] py-[2.3rem] backdrop-blur-[10px]">
              <div className="flex flex-col items-start gap-[1.5rem] text-left">
                <ul className="flex items-center gap-[2px]">
                  {Array.from({ length: item.rating || 5 }).map((_, index) => (
                    <li key={index}>
                      <StarIcon color="#FFBF00" height="14" width="14" />
                    </li>
                  ))}
                </ul>

                <p className="text-[1.4rem] leading-[2.1rem] font-medium tracking-normal text-[#625C70]">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-[1rem]">
                <div className="flex overflow-hidden rounded-full">
                  <Image
                    src={item.avatar}
                    alt="Avatar Image"
                    width={40}
                    height={40}
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <h6 className="text-[1.2rem] leading-[1.8rem] font-semibold tracking-normal text-[#312749]">
                    {item.name}
                  </h6>

                  <span className="text-[1.1rem] leading-[1.7rem] font-medium tracking-normal text-[#625C70]">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <CarouselAutoplayControl slot="container-end" />
      </Swiper>
    </>
  );
};

export default TestimonialsSlider;

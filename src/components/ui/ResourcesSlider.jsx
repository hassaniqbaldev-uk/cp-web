"use client";

import Link from "next/link";
import RightArrowIcon from "../icons/RightArrowIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import CarouselAutoplayControl from "@/components/ui/CarouselAutoplayControl";

const ResourcesSlider = ({ legal }) => {
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
        {legal.map((item, idx) => {
          return (
            <SwiperSlide
              key={idx}
              className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
            >
              <div className="client-resources-card">
                <div className="flex h-full flex-col items-start justify-between p-[3rem] text-left">
                  <div className="flex flex-col items-start">
                    <i
                      style={{
                        background: item.color,
                      }}
                      className="inline-flex size-[5.8rem] min-w-max items-center justify-center rounded-[1.5rem]"
                    >
                      <Image
                        src={item.icon.asset.url}
                        alt={item.title}
                        width={30}
                        height={30}
                        unoptimized
                      />
                    </i>

                    <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                      {item.title}
                    </h4>

                    <p className="mt-[1rem] mb-[3rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                      {item.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/legal/${item.slug.current}`}
                    className="relative z-[10] inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-white"
                  >
                    More Details
                    <RightArrowIcon color="#ffffff" />
                  </Link>
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

export default ResourcesSlider;

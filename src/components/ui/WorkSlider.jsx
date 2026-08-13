"use client";

import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/caseStudies.image";
import CarouselAutoplayControl from "./CarouselAutoplayControl";

const WorkSlider = ({ caseStudies }) => {
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
        {caseStudies.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !justify-center !pt-[2rem] pb-[5rem]"
          >
            <Link
              style={{
                boxShadow: "11px 11px 65px 0px #00000012",
              }}
              href={`/case-studies/${item.slug}`}
              className="flex h-full w-[27.5rem] flex-col gap-[2.2rem] rounded-[3rem] bg-white px-[1.5rem] pt-[1.5rem] pb-[2rem]"
            >
              <div className="flex h-[18.3rem] w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={urlFor(item.thumbnailImage)
                    ?.width(275)
                    .height(183)
                    .fit("crop")
                    .url()}
                  alt={item.title || "Case Study Thumbnail Image"}
                  width={275}
                  height={183}
                  className="w-full object-cover object-center"
                  unoptimized
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-[1rem] text-left">
                  <h4 className="text-[2rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                    {item.title}
                  </h4>

                  <span className="text-[1.4rem] leading-[1.9rem] font-semibold text-[#625C70]">
                    {item.excerpt}
                  </span>
                </div>

                <i
                  style={{
                    backgroundColor: item.iconBg,
                  }}
                  className="inline-flex size-[4.6rem] min-w-[4.6rem] items-center justify-center rounded-full"
                >
                  <TiltArrowIcon color={item.iconColor} />
                </i>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <CarouselAutoplayControl slot="container-end" />
      </Swiper>
    </>
  );
};

export default WorkSlider;

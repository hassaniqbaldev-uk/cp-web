"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import RightArrowIcon from "../icons/RightArrowIcon";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import Image from "next/image";

const ServicesSlider = ({ SERVICES_CARD }) => {
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
        {SERVICES_CARD.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]"
          >
            <div
              style={{
                borderColor: item.color,
              }}
              className="flex h-full w-full flex-col items-start justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left backdrop-blur-[10px] transition-all duration-200"
            >
              <div>
                <div className="relative size-[6.3rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                    <i>
                      <Image
                        src={item.icon}
                        alt="Icon"
                        width={item.iconWidth}
                        height={item.iconHeight}
                        unoptimized
                      />
                    </i>
                  </div>
                  <div
                    style={{
                      background: item.color,
                    }}
                    className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                  />
                </div>

                <h3 className="mt-[2.6rem] mb-[1.4rem] text-[2.2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem]">
                  {item.title}
                </h3>

                <p className="text-[1.4rem] leading-[2.4rem] font-normal text-[#625C70] md:text-[1.6rem]">
                  {item.description}
                </p>

                <ul className="mt-[1.4rem] mb-[2.6rem] flex flex-col items-start">
                  {item.listItem.map((list, idx) => (
                    <li
                      key={idx}
                      className="inline-flex items-center gap-[1.3rem] text-[1.4rem] leading-[2.8rem] tracking-normal text-[#625C70] md:text-[1.6rem]"
                    >
                      <i>
                        <CheckMarkIcon color={item.color} />
                      </i>

                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={item.link}
                style={{
                  color: item.color,
                }}
                className="group inline-flex items-center gap-[.8rem] text-[1.4rem] leading-[1.4rem] font-semibold tracking-normal md:text-[1.6rem]"
              >
                {item.linkText}{" "}
                <i className="transition-all duration-200 group-hover:-rotate-45">
                  <RightArrowIcon color={item.color} />
                </i>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ServicesSlider;

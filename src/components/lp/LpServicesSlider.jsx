"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RightArrowIcon from "../icons/RightArrowIcon";
import Image from "next/image";
import useServiceStore from "@/store/useServiceStore";

const LpServicesSlider = ({ LP_SERVICES_CARD }) => {
  const { setSelectedService } = useServiceStore();

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
        {LP_SERVICES_CARD.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]"
          >
            <div
              style={{
                borderColor: item.color,
              }}
              className="flex h-full w-full flex-col items-start justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left transition-all duration-300"
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

                <h3 className="mt-[2.5rem] text-[1.8rem] font-semibold tracking-[-0.02em] text-[#312749]">
                  {item.title}
                </h3>

                <p className="mt-[1rem] mb-[2.5rem] text-[1.4rem] leading-[2.4rem] font-normal text-[#625C70]">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedService(item.value);
                  document
                    .getElementById("audit")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  color: item.color,
                }}
                className="group inline-flex items-center gap-[.8rem] text-[1.6rem] leading-[1.4rem] font-semibold tracking-normal"
              >
                {item.linkText}{" "}
                <i className="transition-all duration-200 group-hover:-rotate-45">
                  <RightArrowIcon color={item.color} />
                </i>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LpServicesSlider;

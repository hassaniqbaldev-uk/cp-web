"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RightArrowIcon from "../icons/RightArrowIcon";
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
            className="!flex !h-auto !justify-center px-[1rem] pt-[.5rem] pb-[5rem]"
          >
            <div
              style={{
                border: `1px solid ${item.color}`,
              }}
              className="flex h-full w-full flex-col justify-between gap-[4rem] rounded-[3rem] bg-white p-[3rem] transition-all duration-200"
            >
              {/* Head */}
              <div className="flex flex-col items-start text-left">
                <i className="relative h-[6.3rem] w-[6.3rem] rounded-[1.5rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex h-[5.8rem] w-[5.8rem] items-center justify-center rounded-[1.3rem] border-white/20 bg-white/35 backdrop-blur-[1rem]">
                    <img
                      src={item.icon}
                      className="h-[3rem] w-[3rem]"
                      alt="Icon"
                    />
                  </div>

                  <div
                    style={{
                      background: item.color,
                    }}
                    className="absolute right-0 bottom-0 z-[0] h-[5.8rem] w-[5.8rem] rounded-[1.5rem]"
                  />
                </i>

                <h4 className="mt-[3rem] text-[2.4rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749] xl:text-[2.6rem] xl:leading-[3rem]">
                  {item.title}
                </h4>

                <p className="mt-[1rem] text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
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
                className="group inline-flex gap-[.8rem] text-[1.6rem] leading-[2rem] font-semibold tracking-normal"
              >
                {item.linkText}{" "}
                <i className="relative top-[.5rem] left-[0rem] transition-all duration-200 group-hover:left-[.5rem]">
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

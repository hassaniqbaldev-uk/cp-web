"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";
import SentIcon from "@/assets/icons/ui/sent-icon.svg";
import LoadingIcon from "@/assets/icons/ui/loading-icon.svg";
import CarouselAutoplayControl from "@/components/ui/CarouselAutoplayControl";

const CaseStudiesHeroSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          767: { slidesPerView: 2, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]">
          <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#EE7621] bg-white p-[2rem] text-left">
            <div className="relative size-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <i>
                  <Image
                    src={GraphicDesignIcon}
                    alt="Icon"
                    width={28}
                    height={28}
                  />
                </i>
              </div>
              <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#EE7621]" />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#EE7621]">
                100%
              </h4>
              <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70]">
                Custom Designed Sites
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]">
          <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#3078FF] bg-white p-[2rem] text-left">
            <div className="relative size-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <i>
                  <Image src={SentIcon} alt="Icon" width={30} height={30} />
                </i>
              </div>
              <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#3078FF]" />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#3078FF]">
                200+
              </h4>
              <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70]">
                Projects Delivered
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]">
          <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#FF37B3] bg-white p-[2rem] text-left">
            <div className="relative size-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <i>
                  <Image src={LoadingIcon} alt="Icon" width={30} height={30} />
                </i>
              </div>
              <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#FF37B3]" />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#FF37B3]">
                65%
              </h4>
              <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70]">
                Faster Load Times
              </span>
            </div>
          </div>
        </SwiperSlide>
        <CarouselAutoplayControl slot="container-end" />
      </Swiper>
    </>
  );
};

export default CaseStudiesHeroSlider;

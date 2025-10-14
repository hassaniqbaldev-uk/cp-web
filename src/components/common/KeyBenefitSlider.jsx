"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import { keyBenefitCards } from "@/constants/uiUxPage";
import DarkBgCheck from "@/assets/icons/dark-bg-check.svg";

const KeyBenefitSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      slidesPerView={1}
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      className="mySwiper key-benefit-slider"
    >
      {keyBenefitCards.map((card, idx) => (
        <SwiperSlide key={idx} className="!h-auto">
          <div className="key-benefit-card flex h-full w-[37.9rem] items-start gap-[1.2rem] px-[2.8rem] py-[3rem]">
            <DarkBgCheck className="size-[3.2rem] min-w-[3.2rem]" />
            <div className="flex flex-col">
              <span className="text-[2rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                {card.title}
              </span>
              <p className="text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]">
                {card.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default KeyBenefitSlider;

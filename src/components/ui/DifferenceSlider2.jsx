"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import LimitedIcon from "@/assets/icons/ui/limited-icon.svg";
import HigherIcon from "@/assets/icons/ui/higher-icon.svg";
import SlowIcon from "@/assets/icons/ui/slow-icon.svg";
import HardIcon from "@/assets/icons/ui/hard-icon.svg";
import LessIcon from "@/assets/icons/ui/less-icon.svg";
import WeakerIcon from "@/assets/icons/ui/weaker-icon.svg";
import DifferenceGradientSlideBg2 from "@/assets/images/backgrounds/difference-gradient-slide-bg-02.svg";
import Image from "next/image";

export const withoutDifferenceData = [
  {
    id: 1,
    icon: LimitedIcon,
    title: "Limited Skills",
    description: "In-house only, gaps in expertise.",
  },
  {
    id: 2,
    icon: HigherIcon,
    title: "Higher Overheads",
    description: "Salaries, training, and recruitment costs.",
  },
  {
    id: 3,
    icon: SlowIcon,
    title: "Slow Turnaround",
    description: "Capacity limits delay projects.",
  },
  {
    id: 4,
    icon: HardIcon,
    title: "Hard to Scale",
    description: "Struggle to take on new clients quickly.",
  },
  {
    id: 5,
    icon: LessIcon,
    title: "Less Strategy Time",
    description: "Stuck in production, not growth.",
  },
  {
    id: 6,
    icon: WeakerIcon,
    title: "Weaker Offering",
    description: "Can’t always deliver the full package under your brand.",
  },
];

const DifferenceSlider2 = () => {
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
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {withoutDifferenceData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!flex !h-auto !items-center !justify-center py-[1rem]"
          >
            <div key={item.id} className="relative h-[32rem] w-[30rem]">
              <Image
                src={DifferenceGradientSlideBg2}
                alt="Background Image"
                fill
                priority
                className="pointer-events-none absolute inset-0 z-[1] select-none"
                unoptimized
              />
              <div className="relative top-[-1rem] z-[10] flex flex-col items-center gap-[4.4rem] px-[3rem] text-center">
                <i
                  style={{
                    background:
                      "linear-gradient(301.75deg, rgba(255, 255, 255, 0.1) 1.41%, rgba(157, 157, 157, 0.1) 95.05%)",
                    backdropFilter: "blur(3.3rem)",
                  }}
                  className="relative inline-flex size-[4.9rem] items-center justify-center rounded-[1.2rem] border border-white"
                >
                  <img src={item.icon.src} alt={item.title} />
                </i>

                <div className="flex flex-col gap-[1rem]">
                  <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h4>

                  <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DifferenceSlider2;

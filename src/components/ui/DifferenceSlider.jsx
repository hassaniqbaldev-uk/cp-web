"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ExpertiseIcon from "@/assets/icons/ui/expertise-icon.svg";
import CostIcon from "@/assets/icons/ui/cost-icon.svg";
import ScaleableIcon from "@/assets/icons/ui/scaleable-icon.svg";
import FasterIcon from "@/assets/icons/ui/faster-icon.svg";
import FocusIcon from "@/assets/icons/ui/focus-icon.svg";
import GridIcon from "@/assets/icons/ui/grid-icon.svg";
import DifferenceGradientSlideBg from "@/assets/images/backgrounds/difference-gradient-slide-bg.svg";
import Image from "next/image";

export const withDifferenceData = [
  {
    id: 1,
    icon: ExpertiseIcon,
    title: "Expertise on Demand",
    description:
      "Tap into senior designers, developers, and strategists when you need them.",
  },
  {
    id: 2,
    icon: CostIcon,
    title: "Cost-Efficient",
    description:
      "Deliver more projects without the overheadof hiring full-time. Scalable Capacity - Scale up or down",
  },
  {
    id: 3,
    icon: ScaleableIcon,
    title: "Scalable Capacity",
    description:
      "Scale up or down instantly based on client demand. Faster Delivery - Hit deadlines with",
  },
  {
    id: 4,
    icon: FasterIcon,
    title: "Faster Delivery",
    description: "Hit deadlines with proven processes and experienced teams.",
  },
  {
    id: 5,
    icon: FocusIcon,
    title: "Focus on Clients",
    description: "Spend more time building relationships and winning new work.",
  },
  {
    id: 6,
    icon: GridIcon,
    title: "Seamless Branding",
    description: "Every project delivered under your agency's name.",
  },
];

const DifferenceSlider = () => {
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
        {withDifferenceData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!flex !h-auto !items-center !justify-center py-[1rem]"
          >
            <div key={item.id} className="relative h-[32rem] w-[30rem]">
              <Image
                src={DifferenceGradientSlideBg}
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

export default DifferenceSlider;

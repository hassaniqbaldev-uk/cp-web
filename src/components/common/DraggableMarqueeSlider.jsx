"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import { ourServicesCardData } from "@/constants/servicesPage";
import Link from "next/link";
import Image from "next/image";

const DraggableMarqueeSlider = () => {
  const swiperRef = useRef(null);
  const startX = useRef(0);

  return (
    <Swiper
      className="mySwiper draggable-slider"
      modules={[Autoplay]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false, // default direction (left → right)
      }}
      spaceBetween={15}
      loop={true}
      speed={3500}
      slidesPerView={"auto"}
      freeMode={true}
      grabCursor={true}
      onTouchStart={(swiper, e) => {
        startX.current = e.touches ? e.touches[0].clientX : e.clientX;
      }}
      onTouchEnd={(swiper, e) => {
        const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const deltaX = endX - startX.current;

        if (deltaX > 0) {
          // 👉 Swipe Right → Move Right
          swiper.params.autoplay.reverseDirection = true;
          swiper.autoplay.start();
        } else if (deltaX < 0) {
          // 👈 Swipe Left → Move Left
          swiper.params.autoplay.reverseDirection = false;
          swiper.autoplay.start();
        }
      }}
    >
      {ourServicesCardData.map((item, idx) => (
        <SwiperSlide key={idx} className="!flex !h-auto !w-auto !items-center">
          <Link
            href={item.href}
            className="group relative inline-block h-[22rem] w-[30rem] overflow-hidden rounded-[2rem] md:h-[32.6rem] md:w-[47rem]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority
              sizes="auto"
              className="size-full transition-all duration-300 group-hover:scale-[1.05]"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DraggableMarqueeSlider;

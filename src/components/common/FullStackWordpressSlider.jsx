"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import { fullStackWordpressSlides } from "@/constants/wpElementorPage";
import LeftArrowLightIcon from "@/assets/icons/left-arrow-light-icon.svg";
import { useRef } from "react"; // Add this import

const FullStackWordpressSlider = () => {
  // Create refs for Swiper instance and navigation
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  // Initialize Swiper with custom navigation
  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;

    // Override the navigation elements
    swiper.params.navigation.prevEl = prevButtonRef.current;
    swiper.params.navigation.nextEl = nextButtonRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  };

  // Custom navigation handlers
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      }}
      onSwiper={handleSwiperInit}
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
      }}
      className="mySwiper"
    >
      {fullStackWordpressSlides.map((item, idx) => (
        <SwiperSlide
          key={idx}
          className="!flex !items-center !justify-center xl:!h-auto xl:!w-auto"
        >
          <div className="w-full overflow-hidden rounded-[1.3rem] 2xl:h-[35.2rem]">
            <Image
              src={item.src}
              width={257}
              height={352}
              alt={item.alt}
              className="size-full" // Added object-cover for better image display
            />
          </div>
        </SwiperSlide>
      ))}

      {/* Custom Navigation */}
      <div className="mt-[4rem] flex items-center gap-[2rem] md:gap-[3.7rem]">
        <div className="flex items-center gap-[.8rem]">
          <button
            ref={prevButtonRef}
            onClick={goPrev}
            className="hover:bg-opacity-10 inline-flex size-[4rem] cursor-pointer items-center justify-center rounded-full border border-white transition-all md:size-[5.4rem]"
          >
            <LeftArrowLightIcon />
          </button>

          <button
            ref={nextButtonRef}
            onClick={goNext}
            className="hover:bg-opacity-10 inline-flex size-[4rem] cursor-pointer items-center justify-center rounded-full border border-white transition-all md:size-[5.4rem]"
          >
            <LeftArrowLightIcon className="rotate-180" />
          </button>
        </div>

        <div className="h-[1px] w-full bg-white"></div>
      </div>
    </Swiper>
  );
};

export default FullStackWordpressSlider;

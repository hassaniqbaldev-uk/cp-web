"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CardImg1 from "@/assets/images/hero/about-hero-slide-img-1.png";
import CardImg2 from "@/assets/images/hero/about-hero-slide-img-1.png";
import CardImg3 from "@/assets/images/hero/about-hero-slide-img-1.png";
import CardImg4 from "@/assets/images/hero/about-hero-slide-img-1.png";

const slides = [
  { id: 1, img: CardImg1, alt: "About Hero" },
  { id: 2, img: CardImg2, alt: "Home Hero" },
  { id: 3, img: CardImg3, alt: "How We Work" },
  { id: 4, img: CardImg4, alt: "Partner With Us" },
];

const AboutHeroSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative h-full w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        className="h-full w-full overflow-hidden rounded-[3rem]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              className="size-full object-cover"
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="absolute bottom-[3rem] left-[3.2rem] z-[10] flex items-center gap-[1.2rem]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
          className="flex size-[5.2rem] cursor-pointer items-center justify-center rounded-full bg-[#312749] text-white transition"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
          className="flex size-[5.2rem] cursor-pointer items-center justify-center rounded-full bg-[#312749] text-white transition"
        >
          <ArrowRight size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default AboutHeroSlider;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import { webDesignServiceCards } from "@/constants/uiUxPage";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ServiceSlider1 = () => {
  const cardRefs = useRef([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null); // 👈 which card is open

  // Hide all card descriptions initially
  useGSAP(() => {
    gsap.set(".card-description", {
      height: 0,
      opacity: 0,
      marginTop: 0,
    });
  });

  const showDescription = (index) => {
    const cardRef = cardRefs.current[index];
    if (!cardRef) return;
    const description = cardRef.querySelector(".card-description");

    gsap.to(description, {
      height: "auto",
      opacity: 1,
      marginTop: "1rem",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const hideDescription = (index) => {
    const cardRef = cardRefs.current[index];
    if (!cardRef) return;
    const description = cardRef.querySelector(".card-description");

    gsap.to(description, {
      height: 0,
      opacity: 0,
      marginTop: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  // 👇 Handles click toggle + autoplay control
  const handleCardClick = (index) => {
    if (activeIndex === index) {
      // already open → close and resume autoplay
      hideDescription(index);
      setActiveIndex(null);
      swiperRef.current?.autoplay?.start();
    } else {
      // close previous one
      if (activeIndex !== null) hideDescription(activeIndex);
      // open this one
      showDescription(index);
      setActiveIndex(index);
      swiperRef.current?.autoplay?.stop();
    }
  };

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)} // capture instance
      navigation={false}
      slidesPerView={1}
      spaceBetween={10}
      grabCursor={true}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 15 },
        1280: { slidesPerView: 3, spaceBetween: 15 },
      }}
      className="mySwiper web-design-service-slider"
    >
      {webDesignServiceCards.map((card, idx) => (
        <SwiperSlide key={idx}>
          <div
            ref={(el) => (cardRefs.current[idx] = el)}
            className="relative h-[45rem] cursor-pointer overflow-hidden rounded-[2rem] md:h-[52rem]"
            onClick={() => handleCardClick(idx)} // 👈 click toggle
          >
            <div className="absolute inset-0 z-[0]">
              <img
                src={card.image}
                alt={card.title}
                className="size-full object-cover object-top"
              />
            </div>

            <div
              className={`absolute bottom-0 flex w-full flex-col items-center justify-center ${card.bgColor} px-[5rem] py-[2.4rem] text-center`}
            >
              <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-white md:text-[2.6rem] md:leading-[3.2rem]">
                {card.title}
              </h5>

              <p className="card-description overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal text-white">
                {card.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider1;

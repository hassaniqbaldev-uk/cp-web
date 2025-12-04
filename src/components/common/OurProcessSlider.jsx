"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ourProcessData } from "@/constants/uiUxPage";
import {
  arrow,
  FloatingArrow,
  useClick,
  useFloating,
  useInteractions,
  offset,
  flip,
  shift,
  FloatingPortal,
} from "@floating-ui/react";
import { useRef, useState, useEffect } from "react";
import LightBgPlus from "@/assets/icons/light-bg-plus.svg";

const OurProcessSlider = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const swiperRef = useRef(null); // 👈 store swiper instance

  // 👇 Pause autoplay when a popover opens, resume when all closed
  useEffect(() => {
    if (openIndex !== null) {
      swiperRef.current?.autoplay?.stop(); // 🛑 pause autoplay
    } else {
      swiperRef.current?.autoplay?.start(); // ▶️ resume autoplay
    }
  }, [openIndex]);

  return (
    <Swiper
      className="mySwiper"
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)} // 👈 capture swiper instance
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
    >
      {ourProcessData.map((item, idx) => (
        <SwiperSlide
          key={idx}
          className="!flex !h-auto !items-center !justify-center"
        >
          <ProcessStep
            key={idx}
            item={item}
            index={idx}
            isOpen={openIndex === idx}
            onOpenChange={(open) => setOpenIndex(open ? idx : null)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// ✅ Each process step (popover + logic)
const ProcessStep = ({ item, isOpen, onOpenChange }) => {
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange,
    placement: "bottom",
    middleware: [
      offset(15),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
  });

  const click = useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  return (
    <div className="flex h-full w-full flex-col items-center border-l border-white/40 text-center [&:last-child]:border-r">
      <span className="mb-[1rem] text-[1.6rem] leading-[2.4rem] font-medium text-white/50 uppercase">
        {item.step}
      </span>

      <div className="relative flex w-full flex-col gap-[2rem]">
        <span className="text-[1.8rem] leading-[2.6rem] font-normal text-white capitalize">
          {item.title}
        </span>

        {/* Reference element */}
        <div
          ref={refs.setReference}
          {...getReferenceProps()}
          className="flex h-[3.2rem] w-full cursor-pointer items-center justify-center rounded-[20rem]"
          style={{
            background: item.backgroundColor,
          }}
        >
          <LightBgPlus className="size-[2.2rem]" />
        </div>

        {/* Floating popover in portal */}
        {isOpen && (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
              {...getFloatingProps()}
              className="z-50 rounded-[2.5rem] bg-white px-[1.7rem] py-[3.3rem]"
            >
              <FloatingArrow ref={arrowRef} context={context} fill="white" />
              <p className="max-w-[22.5rem] text-center text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]">
                {item.description}
              </p>
            </div>
          </FloatingPortal>
        )}
      </div>
    </div>
  );
};

export default OurProcessSlider;

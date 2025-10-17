"use client";

import { useLoadingStore } from "@/store/useLoadingStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn2 from "../common/CommonBtn2";
import { heroSlideData } from "@/constants/smPostPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const SmPostHeroSection = () => {
  const { isLoading } = useLoadingStore();
  const lineRef = useRef(null);
  const container = useRef();
  const labelRef = useRef();

  useGSAP(
    () => {
      if (isLoading) return;

      const linePath = lineRef.current?.querySelector("path");

      // SVG Animation - COMPLETELY INDEPENDENT
      if (linePath) {
        gsap.to(lineRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.fromTo(
          linePath,
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            duration: 4,
            ease: "power2.inOut",
          },
        );
      }

      gsap.fromTo(
        labelRef.current,
        { rotate: "-2deg" },
        {
          rotation: "+=3",
          duration: 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          repeatDelay: 0.5,
        },
      );
    },
    {
      scope: container,
      dependencies: [isLoading],
    },
  );

  return (
    <section
      ref={container}
      className="relative w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] px-[3rem] pt-[14rem] pb-[3.7rem] xl:px-[0rem] xl:pt-[16.7rem]"
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1] opacity-0">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[144rem] overflow-hidden pl-[12rem]">
        <div className="flex items-center gap-[3rem]">
          <div className="flex w-full flex-col items-center text-center xl:min-w-[58.5rem] xl:items-start xl:text-left">
            <div ref={labelRef}>
              <SectionLabel2
                text="Our Services"
                bgColor="bg-[#FFC300]"
                textColor="text-[#070707]"
              />
            </div>

            <h1 className="mt-[2.9rem] text-[3rem] leading-[3rem] font-bold tracking-[-0.03em] text-white md:text-[4.5rem] md:leading-[5.5rem] lg:text-[6rem] lg:leading-[7rem] xl:text-[6.9rem] xl:leading-[8.3rem]">
              Social Media Post
            </h1>

            <p className="mt-[1.2rem] mb-[2.5rem] max-w-[60rem] text-[1.6rem] leading-[2.4rem] font-normal text-white md:text-[1.8rem] md:leading-[2.6rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mollis, libero eget volutpat porta, mi felis elementum leo, et
              aliquet orci felis sit amet orci. Donec varius justo eget orci
              laoreet, non bibendum justo cursus. Proin a nisi semper, ultrices
              risus nec, dapibus ligula.
            </p>

            <CommonBtn2 />
          </div>

          <div className="w-full xl:min-w-[77rem]">
            <Swiper
              className="mySwiper"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={2}
              spaceBetween={16.5}
            >
              {heroSlideData.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="!flex !h-auto !items-center !justify-center"
                >
                  <div className="relative size-full select-none">
                    <Image
                      src={item.img}
                      width={379}
                      height={430}
                      alt={item.alt}
                      className="size-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmPostHeroSection;

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke36 from "@/assets/decorative-elements/line-stroke-36.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Add this
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { EffectCoverflow } from "swiper/modules";
import { service5SlideData } from "@/constants/brandingPage";

const ServiceSection5 = () => {
  const container = useRef();
  const labelRef = useRef();

  useGSAP(
    () => {
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
    },
  );

  return (
    <section
      ref={container}
      className="service-sec-5 relative rounded-tl-[5rem] rounded-tr-[5rem] bg-[#F7F0FE] py-[8rem] xl:py-[9rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke36 className="absolute top-[10rem] left-1/2 w-full -translate-x-1/2 md:top-[16.8rem]" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center gap-[2.2rem] text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Web Design Services"
              bgColor="bg-[#F14A58]"
              textColor="text-[#ffffff]"
            />
          </div>

          <h4 className="px-[3rem] text-center text-[4rem] leading-[5rem] font-bold tracking-[-0.03em] md:text-[6rem] md:leading-[7.4rem] xl:px-[0rem]">
            Full-Stack Branding Services
          </h4>
        </div>

        <div className="w-full">
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 15,
              stretch: 250,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              768: {
                coverflowEffect: {
                  rotate: 15,
                  stretch: 400,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              1024: {
                coverflowEffect: {
                  rotate: 15,
                  stretch: 450,
                  depth: 300,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              1280: {
                coverflowEffect: {
                  rotate: 20,
                  stretch: 500,
                  depth: 400,
                  modifier: 1,
                  slideShadows: false,
                },
              },
            }}
          >
            {service5SlideData.map((item) => (
              <SwiperSlide key={item.id}>
                <Image
                  src={item.img}
                  width={770}
                  height={520}
                  alt={item.alt}
                  className="size-full"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection5;

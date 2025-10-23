"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
import { wpElementorHeroSlides } from "@/constants/wpElementorPage";
import LineStroke36 from "@/assets/decorative-elements/line-stroke-36.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Add this
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { EffectCoverflow } from "swiper/modules";

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
      className="service-sec-5 relative rounded-tl-[5rem] rounded-tr-[5rem] bg-[#F7F0FE] px-[3rem] py-[8rem] xl:px-[0rem] xl:py-[9rem]"
    >
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[1]">
        <LineStroke36 className="absolute top-[16.8rem] left-1/2 w-full -translate-x-1/2" />
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

          <h4 className="text-center text-[4rem] leading-[5rem] font-bold tracking-[-0.03em] md:text-[6rem] md:leading-[7.4rem]">
            Full-Stack Branding Services
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
              rotate: 20,
              stretch: 500,
              depth: 400,
              modifier: 1,
              slideShadows: false,
            }}
          >
            <SwiperSlide>
              <Image
                src="/images/service-section-5-slide-img-1.png"
                width={770}
                height={520}
                alt="Service 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/service-section-5-slide-img-2.png"
                width={770}
                height={520}
                alt="Service 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/service-section-5-slide-img-3.png"
                width={770}
                height={520}
                alt="Service 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/service-section-5-slide-img-4.png"
                width={770}
                height={520}
                alt="Service 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/service-section-5-slide-img-5.png"
                width={770}
                height={520}
                alt="Service 1"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection5;

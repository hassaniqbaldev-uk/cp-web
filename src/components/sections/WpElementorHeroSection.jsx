"use client";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import LineStroke01 from "@/assets/decorative-elements/line-stroke-01.svg";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn2 from "../common/CommonBtn2";
import Image from "next/image";
import { wpElementorHeroSlides } from "@/constants/wpElementorPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules"; // Add this
import "swiper/css";
import "swiper/css/effect-coverflow"; // Add this

const WpElementorHeroSection = () => {
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
      className="relative w-full rounded-br-[5rem] rounded-bl-[5rem] pt-[14rem] xl:h-[79rem]"
      style={{
        background:
          "url('/images/ui-ux-hero-bg-gradient.webp') no-repeat center center/cover",
      }}
    >
      {/* Decorative stroke line */}
      <div ref={lineRef} className="absolute inset-0 z-[1] opacity-0">
        <LineStroke01 className="absolute bottom-[2.058rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[10] mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
        <div className="flex flex-col items-center text-center">
          <div ref={labelRef}>
            <SectionLabel2
              text="Our Services"
              bgColor="bg-[#FFC300]"
              textColor="text-[#070707]"
            />
          </div>

          <h1 className="mt-[2.9rem] text-[3rem] leading-[3rem] font-bold tracking-[-0.03em] text-white md:text-[4.5rem] md:leading-[5.5rem] lg:text-[6rem] lg:leading-[7rem] xl:text-[6.9rem] xl:leading-[8.3rem]">
            WP / Elementor
          </h1>

          <p className="mt-[1.2rem] mb-[4rem] max-w-[90rem] text-[1.6rem] leading-[2.4rem] font-normal text-white md:text-[1.8rem] md:leading-[2.6rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis, libero eget volutpat porta, mi felis elementum leo, et
            aliquet orci felis sit amet orci. Donec varius justo eget orci
            laoreet, non bibendum justo cursus. Proin a nisi semper, ultrices
            risus nec, dapibus ligula.
          </p>

          <CommonBtn2 />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[150rem]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
            scale: 0.45,
          }}
          className="wp-elementor-hero-swiper !size-full !py-[4rem] md:!py-[7rem]"
        >
          {wpElementorHeroSlides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="!flex !items-center !justify-center !select-none"
            >
              <div
                className="slide-item h-[18rem] min-w-[25rem] overflow-hidden rounded-[1rem] transition-all duration-500 md:h-[30rem] md:min-w-[45rem] md:rounded-[1.5rem] lg:h-[35rem] lg:min-w-[50rem] xl:h-[40rem] xl:min-w-[60rem] 2xl:h-[44rem] 2xl:min-w-[68rem]"
                style={{ boxShadow: "0px 7.85px 39.25px 0px #00000040" }}
              >
                <Image
                  src={slide.src}
                  width={680}
                  height={441}
                  alt={slide.alt}
                  className="size-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WpElementorHeroSection;

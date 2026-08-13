"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TiltArrowIcon from "../icons/TiltArrowIcon";
import Link from "next/link";
import Image from "next/image";

const LpHeroSlider = ({ projects }) => {
  return (
    <>
      <Swiper
        spaceBetween={12}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1025: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx} className="!h-auto pb-[8rem]">
            <div
              style={{
                boxShadow: "7.69px 6.59px 40.64px 0px #0000000F",
              }}
              target="_blank"
              className="flex h-full w-full flex-col gap-[2.7rem] rounded-[3rem] bg-white px-[1.5rem] pt-[1.5rem] pb-[3rem]"
            >
              <div className="flex h-[25rem] w-full overflow-hidden rounded-[1.7rem] xl:h-[28.9rem]">
                <Image
                  src={project.thumbnailImage}
                  alt={project.title || "Case Study Thumbnail Image"}
                  width={429}
                  height={289}
                  className="h-full w-full object-cover object-left"
                />
              </div>

              <div className="flex items-center justify-between gap-[2rem] px-[1rem]">
                <div className="flex flex-col items-start text-left">
                  <h2 className="line-clamp-1 text-[2.5rem] leading-[3.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                    {project.title}
                  </h2>

                  <span className="line-clamp-2 text-[1.4rem] leading-[1.9rem] font-semibold text-[#625C70] xl:text-[1.6rem] xl:leading-[2.6rem]">
                    {project.excerpt}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LpHeroSlider;

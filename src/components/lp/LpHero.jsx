"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.webp";
import HomeHeroLogoShape1 from "../decorative-elements/HomeHeroLogoShape1";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import SectionDescription from "../ui/SectionDescription";
import RightArrowIcon from "../icons/RightArrowIcon";
import Link from "next/link";
import StarIcon from "../icons/StarIcon";
import LpHeroCardImg from "@/assets/images/cards/lp-wordpress-hero-img.png";
import CpLogo from "@/assets/images/cards/3d-cp-logo.png";
import TiltArrowIcon from "../icons/TiltArrowIcon";
import { urlFor } from "@/sanity/caseStudies.image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const LpHero = ({ caseStudies }) => {
  return (
    <section>
      <div className="relative h-[65rem] w-full overflow-hidden px-[2rem] md:h-[80rem] xl:h-[90rem] xl:px-[0rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[70px] left-[-10px] h-[8rem] w-[4rem] rotate-[25deg] md:top-[150px] md:h-[18.4rem] md:w-[9.1rem] xl:top-[80px]" />
        </div>

        <div className="absolute top-0 right-0 z-[3] hidden h-[90rem] w-[87rem] xl:block">
          <Image
            src={LpHeroCardImg}
            width={870}
            height={900}
            alt="Card Image"
          />
          <Image
            src={CpLogo}
            width={164}
            height={179}
            alt="Card Image"
            className="absolute bottom-[5rem] left-[30rem]"
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex w-full flex-col items-center pt-[18rem] text-center xl:w-[66rem] xl:items-start xl:pt-[23.5rem] xl:text-left">
            <SectionLabel text="Wordpress" textColor="#FF37B3" />

            <h1 className="mt-[1.5rem] mb-[2.5rem] max-w-[56.8rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8rem]">
              <span className="block">Tired of a Website That</span>
              <span className="bg-gradient-yellow-orange block bg-clip-text text-transparent">
                Doesn’t Convert?
              </span>
            </h1>

            <div className="mb-[4.2rem] max-w-[59.4rem]">
              <SectionDescription
                text="Your website is your first impression. We design WordPress sites that look professional, load fast, and turn visitors into customers."
                textColor="#FFFFFF"
              />
            </div>

            <div className="flex flex-col items-center gap-[2.6rem] md:flex-row">
              <Link
                href="/audit"
                className="gradient-button inline-flex cursor-pointer items-center justify-center"
              >
                <div className="text-span">
                  <span className="relative z-[10]">
                    Get Your Free WordPress Audit
                  </span>
                </div>

                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mr-[-4px] ml-[-2px]"
                >
                  <path
                    d="M0.0732422 0C1.45666 2.39049 4.0394 4 7 4C9.9606 4 12.5433 2.39049 13.9268 0H16V18H13.9268C12.5433 15.6095 9.9606 14 7 14C4.0394 14 1.45666 15.6095 0.0732422 18H0V0H0.0732422Z"
                    fill="#FF37B3"
                  />
                </svg>

                <div className="relative inline-flex size-[4rem] items-center justify-center rounded-full bg-[#FF37B3] md:size-[5rem]">
                  <RightArrowIcon color="#ffffff" width="14" height="14" />
                </div>
              </Link>

              <div className="flex flex-col">
                <div className="flex items-center justify-center gap-[.3rem] md:justify-start">
                  <StarIcon height="21" width="21" color="#FFE400" />
                  <StarIcon height="21" width="21" color="#FFE400" />
                  <StarIcon height="21" width="21" color="#FFE400" />
                  <StarIcon height="21" width="21" color="#FFE400" />
                  <StarIcon height="21" width="21" color="#FFE400" />
                </div>

                <span className="text-[2rem] leading-[3.2rem] font-bold tracking-normal text-white">
                  4.9/5 from 47+ Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[20] mt-[-3rem]">
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
          {caseStudies.map((caseStudy) => (
            <SwiperSlide key={caseStudy._id} className="!h-auto pb-[8rem]">
              <Link
                style={{
                  boxShadow: "7.69px 6.59px 40.64px 0px #0000000F",
                }}
                href={`/case-studies/${caseStudy.slug}`}
                className="flex h-full w-full flex-col gap-[2.7rem] rounded-[3rem] bg-white px-[1.5rem] pt-[1.5rem] pb-[3rem]"
              >
                <div className="flex h-[25rem] w-full overflow-hidden rounded-[1.7rem] xl:h-[28.9rem]">
                  <Image
                    src={urlFor(caseStudy.thumbnailImage)
                      ?.width(429)
                      .height(289)
                      .fit("crop")
                      .url()}
                    alt={caseStudy.title || "Case Study Thumbnail Image"}
                    width={429}
                    height={289}
                    className="w-full object-cover object-left"
                    unoptimized
                  />
                </div>

                <div className="flex items-center justify-between gap-[2rem] px-[1rem]">
                  <div className="flex flex-col items-start text-left">
                    <h4 className="line-clamp-1 text-[2.5rem] leading-[3.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                      {caseStudy.title}
                    </h4>

                    <span className="line-clamp-2 text-[1.4rem] leading-[1.9rem] font-semibold text-[#625C70] xl:text-[1.6rem] xl:leading-[2.6rem]">
                      {caseStudy.excerpt}
                    </span>
                  </div>

                  <i
                    className="inline-flex size-[4.6rem] min-w-[4.6rem] items-center justify-center rounded-full xl:size-[5rem] xl:min-w-[5rem]"
                    style={{
                      background: caseStudy.iconBg,
                    }}
                  >
                    <TiltArrowIcon color={caseStudy.iconColor} />
                  </i>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LpHero;

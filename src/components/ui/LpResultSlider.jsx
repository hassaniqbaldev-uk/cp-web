"use client";

import LpLaptop from "@/assets/svgs/lp-laptop.svg";
import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import NdifoImg from "@/assets/images/cards/ndifo-slide-img.png";
import SmokeyImg from "@/assets/images/cards/smokey-carter-slide-img.png";
import IvyDukeImg from "@/assets/images/cards/ivy-duke-slide-img.png";
import GameArtImg from "@/assets/images/cards/game-art-slide-img.png";
import AyoaImg from "@/assets/images/cards/ayoa-slide-img.png";
import CasaImg from "@/assets/images/cards/casa-slide-img.png";
import LittleAstroImg from "@/assets/images/cards/little-astro-slide-img.png";
import NewCompassImg from "@/assets/images/cards/new-compass-slide-img.png";
import TeleqoTechImg from "@/assets/images/cards/teleqo-tech-slide-img.png";
import AlertForceImg from "@/assets/images/cards/alert-force-slide-img.png";
import CheckMarkIcon from "../icons/CheckMarkIcon";

const slides = [
  { id: 1, img: NdifoImg, alt: "Slide Image" },
  { id: 2, img: SmokeyImg, alt: "Slide Image" },
  { id: 3, img: IvyDukeImg, alt: "Slide Image" },
  { id: 4, img: GameArtImg, alt: "Slide Image" },
  { id: 5, img: AyoaImg, alt: "Slide Image" },
  { id: 6, img: CasaImg, alt: "Slide Image" },
  { id: 7, img: LittleAstroImg, alt: "Slide Image" },
  { id: 8, img: NewCompassImg, alt: "Slide Image" },
  { id: 9, img: TeleqoTechImg, alt: "Slide Image" },
  { id: 10, img: AlertForceImg, alt: "Slide Image" },
];

const LpResultSlider = () => {
  return (
    <div className="relative">
      <div className="relative h-[21.6rem] w-[29rem] md:h-[39.5rem] md:w-[63rem] lg:h-[47rem] lg:w-[77.6rem]">
        <Image
          src={LpLaptop}
          width={776}
          height={470}
          alt="Laptop Frame"
          className="absolute inset-0 h-full w-full"
        />

        {/* Slider */}
        <div className="absolute top-[2.3rem] left-1/2 h-[15.8rem] w-[24rem] -translate-x-1/2 overflow-hidden rounded-tl-[.4rem] rounded-tr-[.4rem] md:top-[1.2rem] md:h-[34rem] md:w-[52.5rem] md:rounded-tl-[.8rem] md:rounded-tr-[.8rem] lg:top-[.8rem] lg:h-[41.7rem] lg:w-[64rem] lg:rounded-tl-[.6rem] lg:rounded-tr-[.6rem]">
          <Carousel
            items={slides}
            pagination={false}
            slideClassName="size-full"
            swiperProps={{
              allowTouchMove: false,
              simulateTouch: false,
              slideToClickedSlide: false,
            }}
            renderItem={(item) => (
              <Image
                src={item.img}
                fill
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            )}
          />
        </div>

        <div className="pointer-events-none relative hidden h-full w-full md:block">
          <div className="absolute top-[5rem] left-[-3rem] flex items-center gap-[1.2rem] rounded-[1.2rem] bg-white px-[1rem] py-[1rem] lg:left-[-8rem] lg:px-[1.2rem] xl:left-[-15rem]">
            <i className="relative h-[4.3rem] w-[4.3rem] rounded-[1.5rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex h-[4rem] w-[4rem] items-center justify-center rounded-[.8rem] border-white/20 bg-white/35 backdrop-blur-[1rem]">
                <CheckMarkIcon color="#ffffff" height="21" width="21" />
              </div>

              <div className="absolute right-0 bottom-0 z-[0] h-[4rem] w-[4rem] rounded-[1rem] bg-[#44B276]" />
            </i>

            <span className="max-w-[20rem] text-[1.2rem] leading-[1.4rem] font-bold tracking-normal text-[#312749] lg:text-[1.4rem] lg:leading-[1.7rem]">
              Increase lead generation by 40% within 3 months
            </span>
          </div>

          <div className="absolute top-[7rem] right-[-3rem] flex items-center gap-[1.2rem] rounded-[1.2rem] bg-white px-[1rem] py-[1rem] lg:right-[-8rem] lg:px-[1.2rem] xl:right-[-15rem]">
            <i className="relative h-[4.3rem] w-[4.3rem] rounded-[1.5rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex h-[4rem] w-[4rem] items-center justify-center rounded-[.8rem] border-white/20 bg-white/35 backdrop-blur-[1rem]">
                <CheckMarkIcon color="#ffffff" height="21" width="21" />
              </div>

              <div className="absolute right-0 bottom-0 z-[0] h-[4rem] w-[4rem] rounded-[1rem] bg-[#FF37B3]" />
            </i>

            <span className="max-w-[20rem] text-[1.2rem] leading-[1.4rem] font-bold tracking-normal text-[#312749] lg:text-[1.4rem] lg:leading-[1.7rem]">
              Boost sales and conversions through optimized layouts
            </span>
          </div>

          <div className="absolute right-[-1rem] bottom-[10rem] flex items-center gap-[1.2rem] rounded-[1.2rem] bg-white px-[1rem] py-[1rem] lg:right-[-5rem] lg:px-[1.2rem] xl:right-[-10rem]">
            <i className="relative h-[4.3rem] w-[4.3rem] rounded-[1.5rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex h-[4rem] w-[4rem] items-center justify-center rounded-[.8rem] border-white/20 bg-white/35 backdrop-blur-[1rem]">
                <CheckMarkIcon color="#ffffff" height="21" width="21" />
              </div>

              <div className="absolute right-0 bottom-0 z-[0] h-[4rem] w-[4rem] rounded-[1rem] bg-[#3078FF]" />
            </i>

            <span className="max-w-[20rem] text-[1.2rem] leading-[1.4rem] font-bold tracking-normal text-[#312749] lg:text-[1.4rem] lg:leading-[1.7rem]">
              Improve user engagement and reduce bounce rates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpResultSlider;

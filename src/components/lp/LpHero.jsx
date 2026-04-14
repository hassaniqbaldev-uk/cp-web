"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.webp";
import HomeHeroLogoShape1 from "../decorative-elements/HomeHeroLogoShape1";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import SectionDescription from "../ui/SectionDescription";
import RightArrowIcon from "../icons/RightArrowIcon";
import StarIcon from "../icons/StarIcon";
import LpHeroCardImg from "@/assets/images/cards/lp-wordpress-hero-img.png";
import CpLogo from "@/assets/images/cards/3d-cp-logo.png";
import NdifoImg from "@/assets/images/cards/ndifo.png";
import SmokeyImg from "@/assets/images/cards/smokey-carter.png";
import IvyDukeImg from "@/assets/images/cards/ivy-duke.png";
import GameArtImg from "@/assets/images/cards/game-art.png";
import dynamic from "next/dynamic";

const projects = [
  {
    id: "1",
    slug: "https://www.ndifosafari.com/",
    title: "Ndifo Safari",
    excerpt: "Escape into the safari",
    thumbnailImage: NdifoImg,
    iconBg: "#58937F",
    iconColor: "#FFFFFF",
  },
  {
    id: "2",
    slug: "https://thesmokeycarter.com",
    title: "Smokey Carter",
    excerpt: "Saucey eCommerce",
    thumbnailImage: SmokeyImg,
    iconBg: "#FA5D27",
    iconColor: "#FFFFFF",
  },
  {
    id: "3",
    slug: "https://ivyandduke.co.uk",
    title: "Ivy & Duke",
    excerpt: "Ecommerce Website Design",
    thumbnailImage: IvyDukeImg,
    iconBg: "#8B9266",
    iconColor: "#FFFFFF",
  },
  {
    id: "4",
    slug: "https://www.gameartbrain.com/",
    title: "Ivy & Duke",
    excerpt: "Ecommerce Website Design",
    thumbnailImage: GameArtImg,
    iconBg: "#536A56",
    iconColor: "#FFFFFF",
  },
  {
    id: "5",
    slug: "https://www.ndifosafari.com/",
    title: "Ndifo Safari",
    excerpt: "Escape into the safari",
    thumbnailImage: NdifoImg,
    iconBg: "#58937F",
    iconColor: "#FFFFFF",
  },
  {
    id: "6",
    slug: "https://thesmokeycarter.com",
    title: "Smokey Carter",
    excerpt: "Saucey eCommerce",
    thumbnailImage: SmokeyImg,
    iconBg: "#FA5D27",
    iconColor: "#FFFFFF",
  },
  {
    id: "7",
    slug: "https://ivyandduke.co.uk",
    title: "Ivy & Duke",
    excerpt: "Ecommerce Website Design",
    thumbnailImage: IvyDukeImg,
    iconBg: "#8B9266",
    iconColor: "#FFFFFF",
  },
  {
    id: "8",
    slug: "https://www.gameartbrain.com/",
    title: "Ivy & Duke",
    excerpt: "Ecommerce Website Design",
    thumbnailImage: GameArtImg,
    iconBg: "#536A56",
    iconColor: "#FFFFFF",
  },
];

const LpHeroSlider = dynamic(() => import("./LpHeroSlider"), {
  ssr: false,
  loading: () => <div className="h-[47.4rem] md:h-[45.5rem] xl:h-[50rem]" />, // placeholder to prevent layout shift
});

const LpHero = () => {
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
          <HomeHeroLogoShape1 className="absolute top-[100px] left-[-10px] h-[8rem] w-[4rem] rotate-[25deg] md:top-[150px] md:h-[18.4rem] md:w-[9.1rem] xl:top-[80px]" />
        </div>

        <div className="absolute top-0 right-[-10rem] z-[3] hidden h-[90rem] w-[87rem] xl:block">
          <MotionEffect
            slide={{ direction: "right" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            delay={0.6}
          >
            <Image
              src={LpHeroCardImg}
              width={870}
              height={900}
              alt="Card Image"
            />
          </MotionEffect>
          <MotionEffect
            slide={{ direction: "right" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            delay={0.6}
          >
            <Image
              src={CpLogo}
              width={164}
              height={179}
              alt="Card Image"
              className="absolute bottom-[5rem] left-[30rem]"
            />
          </MotionEffect>
        </div>

        <div className="relative z-[10] container">
          <div className="flex w-full flex-col items-center pt-[16rem] text-center md:pt-[18rem] xl:w-[66rem] xl:items-start xl:pt-[23.5rem] xl:text-left">
            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel text="Wordpress" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="mt-[1.5rem] mb-[2.5rem] max-w-[75rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[6.5rem] md:leading-[8rem]">
                <span className="block">
                  High-Converting WordPress Websites
                </span>
                <span className="bg-gradient-yellow-orange block bg-clip-text text-transparent">
                  Built for Paid Traffic
                </span>
              </h1>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.3}
            >
              <div className="mb-[2rem] max-w-[59.4rem] md:mb-[4.2rem]">
                <SectionDescription
                  text=" Turn your ad clicks into real leads and customers. We design WordPress websites optimized for conversions, speed, and performance."
                  textColor="#FFFFFF"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
            >
              <div className="flex flex-col items-center gap-[2.6rem] md:flex-row">
                <a
                  href="#audit"
                  className="gradient-button inline-flex cursor-pointer items-center justify-center"
                >
                  <div className="text-span">
                    <span className="relative z-[10]">
                      Get Your Free Website Audit
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
                </a>

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
            </MotionEffect>
          </div>
        </div>
      </div>

      <div className="relative z-[20] mt-[-3rem]">
        <MotionEffect
          slide={{ direction: "down" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          fade
          delay={0.8}
        >
          <LpHeroSlider projects={projects} />
        </MotionEffect>
      </div>
    </section>
  );
};

export default LpHero;

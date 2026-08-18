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
import AyoaImg from "@/assets/images/cards/ayoa.png";
import CasaImg from "@/assets/images/cards/casa.png";
import LittleAstroImg from "@/assets/images/cards/little-astro.png";
import NewCompassImg from "@/assets/images/cards/new-compass.png";
import TeleqoTechImg from "@/assets/images/cards/teleqo-tech.png";
import AlertForceImg from "@/assets/images/cards/alert-force.png";
import dynamic from "next/dynamic";
import LpAuditForm from "./LpAuditForm";

const projects = [
  {
    id: "1",
    title: "Ndifo Safari",
    excerpt: "Luxury safari website redesigned.",
    thumbnailImage: NdifoImg,
  },
  {
    id: "2",
    title: "Smokey Carter",
    excerpt: "Award-winning BBQ brand redesign.",
    thumbnailImage: SmokeyImg,
  },
  {
    id: "3",
    title: "Ivy & Duke",
    excerpt: "Luxury safari website redesigned.",
    thumbnailImage: IvyDukeImg,
  },
  {
    id: "4",
    title: "Game Art Brain",
    excerpt: "Website for a global gaming art outsourcing studio.",
    thumbnailImage: GameArtImg,
  },
  {
    id: "5",
    title: "Little Astronauts",
    excerpt:
      "Two websites supporting a Hull soft play venue from launch to full rebuild.",
    thumbnailImage: LittleAstroImg,
  },
  {
    id: "6",
    title: "Ayoa",
    excerpt:
      "Full website redesign for one of the UK's leading AI-powered mind mapping and productivity tools.",
    thumbnailImage: AyoaImg,
  },
  {
    id: "7",
    title: "AlertForce",
    excerpt:
      "Redevelopment for Australia's leading WHS and OHS compliance training provider.",
    thumbnailImage: AlertForceImg,
  },
  {
    id: "8",
    title: "Casa Botanica Panama",
    excerpt:
      "Bringing a luxury villa brand to life on WordPress, migrated from Squarespace.",
    thumbnailImage: CasaImg,
  },
  {
    id: "9",
    title: "Teleqo Tech",
    excerpt:
      "Website redesign and SEO for a US enterprise mobile mapping and geospatial intelligence company.",
    thumbnailImage: TeleqoTechImg,
  },
  {
    id: "10",
    title: "New Compass",
    excerpt:
      "Redesign, SEO and ongoing maintenance for a US-based cloud LiDAR mapping software company.",
    thumbnailImage: NewCompassImg,
  },
];

const LpHeroSlider = dynamic(() => import("./LpHeroSlider"), {
  ssr: false,
});

const LpHero = () => {
  return (
    <section>
      <div className="relative w-full overflow-hidden px-[2rem] xl:px-[0rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        <div className="relative z-[10] container pt-[15rem] pb-[10rem] xl:pt-[20rem]">
          <div className="flex w-full flex-col items-center justify-center gap-[4rem] xl:flex-row">
            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              className="flex w-full flex-col items-center text-center md:w-[68rem] xl:items-start xl:text-left"
            >
              <h1 className="mb-[2.5rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7rem]">
                <span className="block">Tired of a website</span>
                <span className="bg-gradient-yellow-orange block bg-clip-text text-transparent">
                  That doesn’t convert?
                </span>
              </h1>

              <div className="mb-[2rem] max-w-[70rem] md:mb-[4.2rem]">
                <SectionDescription
                  text="Your visitors decide in seconds whether to stay or leave. We build fast, professional WordPress sites that make that first second count and turn visitors into paying customers."
                  textColor="#FFFFFF"
                />
              </div>

              <div className="flex flex-col items-center gap-[2.6rem] md:flex-row">
                <a
                  href="#audit"
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

            <MotionEffect
              slide={{ direction: "down" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              className="w-full md:w-[50rem]"
              id="audit"
            >
              <LpAuditForm />
            </MotionEffect>
          </div>
        </div>
      </div>

      <div className="relative z-[20] mt-[-3rem]">
        <MotionEffect
          slide={{ direction: "down" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          fade
          delay={0.6}
        >
          <LpHeroSlider projects={projects} />
        </MotionEffect>
      </div>
    </section>
  );
};

export default LpHero;

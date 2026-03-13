"use client";
import Image from "next/image";
import ServicesLogoShape from "@/assets/svgs/services-logo-shape.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import WebDesignIcon from "@/assets/icons/ui/web-design-icon.svg";
import AnalysisIcon from "@/assets/icons/ui/analysis-icon.svg";
import IdentityIcon from "@/assets/icons/ui/identity-icon.svg";
import NavUiIcon from "@/assets/icons/ui/nav-ui-icon.svg";
import PaperIcon from "@/assets/icons/ui/paper-icon.svg";
import ShapeIcon from "@/assets/icons/ui/shape-icon.svg";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import { MotionEffect } from "@/components/effects/motion-effect";

export const expertiseData = [
  {
    icon: WebDesignIcon,
    iconWidth: 35,
    iconHeight: 35,
    title: "Visual Identity",
    description:
      "The core visual elements of your brand. We create distinct, memorable logos and visual systems.",
    listItem: ["Logo Design", "Color Palettes", "Typography Selection"],
  },
  {
    icon: AnalysisIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Brand Strategy",
    description:
      "Defining who you are, who you serve, and why it matters. We build the strategic foundation.",
    listItem: [
      "Brand Archetypes",
      "Positioning Statement",
      "Competitor Analysis",
    ],
  },
  {
    icon: IdentityIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Verbal Identity",
    description:
      "It's not just what you say, but how you say it. We define your brand's voice and tone.",
    listItem: ["Tone of Voice", "Tagline Development", "Messaging Framework"],
  },
  {
    icon: NavUiIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Brand Guidelines",
    description:
      "A comprehensive manual ensuring your team and partners use the brand correctly every time.",
    listItem: ["Logo Usage", "Digital Guidelines", "Print Guidelines"],
  },
  {
    icon: PaperIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Collateral Design",
    description:
      "Applying your new brand to the real world, from business cards to slide decks.",
    listItem: ["Stationery", "Social Media Kits", "Pitch Decks"],
  },
  {
    icon: ShapeIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Rebranding",
    description:
      "Carefully evolving an existing brand to stay relevant without alienating loyal customers.",
    listItem: ["Brand Audit", "Evolution Strategy", "Launch Planning"],
  },
];

export const themeColors = {
  primary: {
    color: "#3078FF",
    shadow: "4px 12px 30px 0px #3078FF1C",
  },
  secondary: {
    color: "#EE7621",
    shadow: "4px 12px 30px 0px #EE76211C",
  },
  accent: {
    color: "#FF37B3",
    shadow: "4px 12px 30px 0px #FF37B31C",
  },
  success: {
    color: "#44B276",
    shadow: "4px 12px 30px 0px #44B2761C",
  },
  highlight: {
    color: "#BF00B4",
    shadow: "4px 12px 30px 0px #BF00B41C",
  },
  danger: {
    color: "#F14A58",
    shadow: "4px 12px 30px 0px #F14A581C",
  },
};

export const themeColorList = Object.values(themeColors);

const Expertise3 = ({ service }) => {
  const [hovered, setHovered] = useState(null);

  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

  return (
    <>
      <section className="relative overflow-hidden bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Element*/}
        <div className="pointer-events-none absolute top-[7.8rem] right-[0rem] h-[17.7rem] w-[12.9rem] rotate-[-34deg] select-none">
          <Image
            src={ServicesLogoShape}
            alt="Services Logo Shape"
            width={129}
            height={177}
            unoptimized
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5px] text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel
                  text="Specialised Expertise"
                  textColor="#EE8D00"
                />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionTitle text="What we build" textColor="#312749" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="max-w-[74rem]">
                <SectionDescription
                  text="Deep expertise across the entire ecosystem. We don't just 'install themes' — we engineer solutions."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          {/* Desktop cards */}
          <div className="mt-[5rem] hidden w-full grid-cols-3 gap-[3rem] xl:grid">
            {service.card.map((item, idx) => {
              const theme = getThemeColor(idx);

              return (
                <MotionEffect
                  key={idx}
                  slide={{ direction: "down" }}
                  fade
                  inView
                  delay={0.4 + idx * 0.15}
                  transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
                >
                  <div
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      borderColor: theme.color,
                      boxShadow: hovered === idx ? theme.shadow : "",
                    }}
                    className="flex h-full w-full flex-col rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="relative size-[6.3rem]">
                      <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                        <Image
                          src={item.icon.asset.url}
                          alt="Icon"
                          width={35}
                          height={35}
                          unoptimized
                        />
                      </div>

                      <div
                        className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                        style={{ backgroundColor: theme.color }}
                      />
                    </div>

                    <h3 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold text-[#312749]">
                      {item.title}
                    </h3>

                    <p className="text-[1.6rem] text-[#625C70]">
                      {item.description}
                    </p>

                    {Array.isArray(item.listItem) &&
                      item.listItem.length > 0 && (
                        <>
                          <hr className="my-[2rem] w-full border-t border-[#E4E3E8]" />

                          <ul className="flex flex-col items-start">
                            {item.listItem.map((list, idx) => (
                              <li
                                key={idx}
                                className="inline-flex items-center gap-[1.3rem] text-[1.6rem] leading-[2.8rem] tracking-normal text-[#625C70]"
                              >
                                <i>
                                  <CheckMarkIcon color={theme.color} />
                                </i>
                                <span>{list.label}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                  </div>
                </MotionEffect>
              );
            })}
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="mt-[5rem] block w-full xl:hidden">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                }}
                className="mySwiper"
              >
                {service.card.map((item, idx) => {
                  const theme = getThemeColor(idx);

                  return (
                    <SwiperSlide
                      key={idx}
                      className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
                    >
                      <div
                        style={{
                          borderColor: theme.color,
                        }}
                        className="flex h-full w-full flex-col rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] transition-all duration-300"
                      >
                        {/* Icon */}
                        <div className="relative size-[6.3rem]">
                          <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                            <Image
                              src={item.icon.asset.url}
                              alt="Icon"
                              width={35}
                              height={35}
                              unoptimized
                            />
                          </div>

                          <div
                            className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                            style={{ backgroundColor: theme.color }}
                          />
                        </div>

                        <h3 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold text-[#312749]">
                          {item.title}
                        </h3>

                        <p className="text-[1.6rem] text-[#625C70]">
                          {item.description}
                        </p>

                        {Array.isArray(item.listItem) &&
                          item.listItem.length > 0 && (
                            <>
                              <hr className="my-[2rem] w-full border-t border-[#E4E3E8]" />

                              <ul className="flex flex-col items-start">
                                {item.listItem.map((list, idx) => (
                                  <li
                                    key={idx}
                                    className="inline-flex items-center gap-[1.3rem] text-[1.6rem] leading-[2.8rem] tracking-normal text-[#625C70]"
                                  >
                                    <i>
                                      <CheckMarkIcon color={theme.color} />
                                    </i>
                                    <span>{list.label}</span>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default Expertise3;

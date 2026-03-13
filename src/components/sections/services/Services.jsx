"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import Image from "next/image";
import { SERVICES_CARD } from "@/contants";
import Link from "next/link";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { useState } from "react";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ServicesLogoShape from "@/components/decorative-elements/ServicesLogoShape";
import { MotionEffect } from "@/components/effects/motion-effect";

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Element*/}
        <div className="absolute inset-0 z-[2]">
          <ServicesLogoShape className="pointer-events-none absolute top-[2rem] right-[-1rem] h-[7.1rem] w-[5.2rem] rotate-[-34deg] select-none md:top-[7.8rem] md:h-[17.7rem] md:w-[12.9rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="Our Services" textColor="#EE8D00" />
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
              <div className="mt-[5px] mb-[14px] max-w-[25rem] md:max-w-[85rem]">
                <SectionTitle text="Everything you need to grow online" />
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
              <div className="max-w-[25rem] md:max-w-[85rem]">
                <SectionDescription text="From strategy to launch to long-term growth—we're with you every step." />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] hidden grid-cols-3 gap-[3.3rem] xl:grid">
            {SERVICES_CARD.map((item, idx) => (
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
                    borderColor: hovered === idx ? item.color : "transparent",
                    boxShadow: hovered === idx ? item.boxShadow : "",
                  }}
                  className="flex w-full flex-col items-start justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left backdrop-blur-[10px] transition-all duration-200"
                >
                  <div className="relative size-[6.3rem]">
                    <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                      <i>
                        <Image
                          src={item.icon}
                          alt="Icon"
                          width={item.iconWidth}
                          height={item.iconHeight}
                          unoptimized
                        />
                      </i>
                    </div>
                    <div
                      style={{
                        background: item.color,
                      }}
                      className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                    />
                  </div>

                  <div>
                    <h3 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749]">
                      {item.title}
                    </h3>

                    <p className="text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
                      {item.description}
                    </p>

                    <ul className="mt-[1.5rem] mb-[5.3rem] flex flex-col items-start">
                      {item.listItem.map((list, idx) => (
                        <li
                          key={idx}
                          className="inline-flex items-center gap-[1.3rem] text-[1.6rem] leading-[2.8rem] tracking-normal text-[#625C70]"
                        >
                          <i>
                            <CheckMarkIcon color={item.color} />
                          </i>

                          <span>{list}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={item.link}
                      style={{
                        color: item.color,
                      }}
                      className="group inline-flex items-center gap-[.8rem] text-[1.6rem] leading-[1.4rem] font-semibold tracking-normal"
                    >
                      {item.linkText}{" "}
                      <i className="transition-all duration-200 group-hover:-rotate-45">
                        <RightArrowIcon color={item.color} />
                      </i>
                    </Link>
                  </div>
                </div>
              </MotionEffect>
            ))}
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
            <div className="mt-[3rem] block w-full xl:hidden">
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
                {SERVICES_CARD.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]"
                  >
                    <div
                      style={{
                        borderColor: item.color,
                      }}
                      className="flex h-full w-full flex-col items-start justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left backdrop-blur-[10px] transition-all duration-200"
                    >
                      <div>
                        <div className="relative size-[6.3rem]">
                          <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                            <i>
                              <Image
                                src={item.icon}
                                alt="Icon"
                                width={item.iconWidth}
                                height={item.iconHeight}
                                unoptimized
                              />
                            </i>
                          </div>
                          <div
                            style={{
                              background: item.color,
                            }}
                            className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                          />
                        </div>

                        <h3 className="mt-[2.6rem] mb-[1.4rem] text-[2.2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem]">
                          {item.title}
                        </h3>

                        <p className="text-[1.4rem] leading-[2.4rem] font-normal text-[#625C70] md:text-[1.6rem]">
                          {item.description}
                        </p>

                        <ul className="mt-[1.4rem] mb-[2.6rem] flex flex-col items-start">
                          {item.listItem.map((list, idx) => (
                            <li
                              key={idx}
                              className="inline-flex items-center gap-[1.3rem] text-[1.4rem] leading-[2.8rem] tracking-normal text-[#625C70] md:text-[1.6rem]"
                            >
                              <i>
                                <CheckMarkIcon color={item.color} />
                              </i>

                              <span>{list}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={item.link}
                        style={{
                          color: item.color,
                        }}
                        className="group inline-flex items-center gap-[.8rem] text-[1.4rem] leading-[1.4rem] font-semibold tracking-normal md:text-[1.6rem]"
                      >
                        {item.linkText}{" "}
                        <i className="transition-all duration-200 group-hover:-rotate-45">
                          <RightArrowIcon color={item.color} />
                        </i>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default Services;

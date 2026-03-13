"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import Image from "next/image";
import Link from "next/link";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { EXPERTISE_CARD } from "@/contants";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { MotionEffect } from "@/components/effects/motion-effect";

const Expertise = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect
              slide={{
                direction: "down",
              }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="Our Expertise" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{
                direction: "down",
              }}
              fade
              zoom
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-[5px] mb-[14px] max-w-[28rem] md:max-w-[85rem]">
                <SectionTitle text="We help businesses like yours" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{
                direction: "down",
              }}
              fade
              zoom
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="max-w-[25rem] md:max-w-[85rem]">
                <SectionDescription text="Tailored strategies for every stage of growth." />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] hidden grid-cols-3 gap-[3.3rem] xl:grid">
            {EXPERTISE_CARD.map((item, idx) => (
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
                    boxShadow: hovered === idx ? item.boxShadow : "",
                    borderColor: item.color,
                  }}
                  className="flex h-full w-full flex-col items-start justify-between justify-center rounded-[3rem] border px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left transition-all duration-300"
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

                    <h3 className="mt-[3rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749]">
                      {item.title}
                    </h3>

                    <p className="mt-[1rem] mb-[3.5rem] text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
                      {item.description}
                    </p>
                  </div>

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
                {EXPERTISE_CARD.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]"
                  >
                    <div
                      style={{
                        borderColor: item.color,
                      }}
                      className="flex h-full w-full flex-col items-start justify-between rounded-[3rem] border px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left transition-all duration-300"
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

                        <h3 className="mt-[2.5rem] text-[1.8rem] font-semibold tracking-[-0.02em] text-[#312749]">
                          {item.title}
                        </h3>

                        <p className="mt-[1rem] mb-[2.5rem] text-[1.4rem] leading-[2.4rem] font-normal text-[#625C70]">
                          {item.description}
                        </p>
                      </div>

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
export default Expertise;

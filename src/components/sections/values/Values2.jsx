"use client";
import Image from "next/image";
import GroupIcon from "@/assets/icons/ui/group-icon.svg";
import FriendsIcon from "@/assets/icons/ui/friends-icon.svg";
import CupIcon from "@/assets/icons/ui/cup-icon.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";

export const valuesCards = [
  {
    title: "Human First",
    description:
      "We don't do burnout. We believe rested, happy people do the best work. 4-day work week trials and flexible hours.",
    icon: GroupIcon,
    color: "#FF37B3",
    boxShadow: "4px 12px 30px 0px #FF37B31C",
  },
  {
    title: "Mastery Focused",
    description:
      "We pay for your books, courses, and conferences. If you aren't growing, neither are we.",
    icon: CupIcon,
    color: "#EE8D00",
    boxShadow: "4px 12px 30px 0px #EE76211C",
  },
  {
    title: "Remote Friendly",
    description:
      "HQ is in Manchester, but our team is global. Work from where you feel most productive.",
    icon: FriendsIcon,
    color: "#3078FF",
    boxShadow: "4px 12px 30px 0px #3078FF1C",
  },
];

const Values2 = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="hidden grid-cols-3 gap-[3.3rem] xl:grid">
            {valuesCards.map((item, idx) => (
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
                    borderColor: hovered === idx ? item.color : "#F1F0F3",
                  }}
                  className="flex w-full flex-col items-start justify-center rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left backdrop-blur-[10px] transition-all duration-200"
                >
                  <div className="relative size-[6.3rem]">
                    <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                      <i>
                        <Image
                          src={item.icon}
                          alt="Icon"
                          width={30}
                          height={30}
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

                  <h3 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749]">
                    {item.title}
                  </h3>

                  <p className="text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
                    {item.description}
                  </p>
                </div>
              </MotionEffect>
            ))}
          </div>

          {/* Responsive */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
            className="w-full"
          >
            <div className="block w-full xl:hidden">
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
                {valuesCards.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !justify-center px-[1rem] pb-[5rem]"
                  >
                    <div
                      style={{
                        boxShadow: item.boxShadow,
                        borderColor: item.color,
                      }}
                      className="flex h-full w-full flex-col items-start justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left backdrop-blur-[10px] transition-all duration-200"
                    >
                      <div className="relative size-[6.3rem]">
                        <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                          <i>
                            <Image
                              src={item.icon}
                              alt="Icon"
                              width={30}
                              height={30}
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
                      </div>
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
export default Values2;

"use client";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import UxIcon from "@/assets/icons/ui/ux-icon.svg";
import WordpressIcon from "@/assets/icons/ui/wordpress-icon.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";
import SectionDescription from "@/components/ui/SectionDescription";

export const ourPoliciesData = [
  {
    icon: UxIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Privacy Policy",
    description:
      "How we collect, use, store, and protect personal information when you visit our website, contact us, or work with CreativePixels.",
    link: "/legal/privacy-policy",
  },
  {
    icon: WordpressIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Cookies Policy",
    description:
      "Information about cookies and similar technologies used on our website, including analytics and marketing tools.",
    link: "/legal/cookies-policy",
  },
  // {
  //   icon: ShopifyIcon,
  //   iconWidth: 20,
  //   iconHeight: 26,
  //   title: "Acceptable Use Policy",
  //   description:
  //     "Guidelines for appropriate use of our services and platforms.",
  //   link: "/legal/acceptable-use-policy",
  // },
  // {
  //   icon: DeveloperIcon,
  //   iconWidth: 30,
  //   iconHeight: 30,
  //   title: "GDPR & DPA Agreement",
  //   description:
  //     "Sets out how personal data is processed when we act on behalf of clients, including GDPR responsibilities, security measures, and approved subprocessors.",
  //   link: "/legal/gdpr-dpa",
  // },
  {
    icon: WordpressIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Data Processing Agreement",
    description:
      "These policies explain how we operate, how we protect data, and how our website should be used.",
    link: "/legal/data-processing-agreement",
  },
];

const Policies = ({ legal = [] }) => {
  return (
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt="Logo Shape"
            width={106}
            height={98}
            className="absolute right-[5rem] bottom-[6rem] rotate-[35deg]"
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5rem]">
            <div className="flex w-full flex-col items-center justify-center gap-[1rem] text-center">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionTitle text="Our Policies" textColor="#312749" />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div>
                  <SectionDescription
                    text="These policies explain how we operate, how we protect data, and how our website should be used."
                    textColor="#625C70"
                  />
                </div>
              </MotionEffect>
            </div>

            <div className="hidden w-full grid-cols-3 gap-[3rem] xl:grid">
              {legal.map((item, idx) => {
                return (
                  <MotionEffect
                    key={idx}
                    slide={{ direction: "down" }}
                    fade
                    inView
                    delay={0.4 + idx * 0.15}
                    transition={{
                      type: "tween",
                      duration: 1.0,
                      ease: "easeOut",
                    }}
                  >
                    <div
                      style={{
                        borderColor: item.color,
                      }}
                      className="flex h-full w-full flex-col justify-between rounded-[3rem] border px-[3rem] pt-[3.1rem] pb-[2.8rem] transition-all duration-300"
                    >
                      <div className="flex flex-col items-start">
                        {/* Icon */}
                        <div className="relative size-[6.3rem]">
                          <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                            <Image
                              src={item.icon.asset.url}
                              alt={item.title}
                              width={30}
                              height={30}
                              unoptimized
                            />
                          </div>

                          <div
                            className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>

                        <h3 className="mt-[3rem] text-[2.6rem] font-semibold text-[#312749]">
                          {item.title}
                        </h3>

                        <p className="mt-[1rem] mb-[3.5rem] text-[1.6rem] text-[#625C70]">
                          {item.excerpt}
                        </p>
                      </div>

                      <Link
                        href={`/legal/${item.slug.current}`}
                        className="inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold"
                        style={{ color: item.color }}
                      >
                        More Details
                        <RightArrowIcon color={item.color} />
                      </Link>
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
                  {legal.map((item, idx) => {
                    return (
                      <SwiperSlide
                        key={idx}
                        className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
                      >
                        <div
                          style={{
                            borderColor: item.color,
                          }}
                          className="flex h-full w-full flex-col justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] transition-all duration-300"
                        >
                          <div className="flex flex-col items-start">
                            {/* Icon */}
                            <div className="relative size-[6.3rem]">
                              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                                <Image
                                  src={item.icon.asset.url}
                                  alt={item.title}
                                  width={30}
                                  height={30}
                                  unoptimized
                                />
                              </div>

                              <div
                                className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                                style={{ backgroundColor: item.color }}
                              />
                            </div>

                            <h3 className="mt-[3rem] text-[2.6rem] font-semibold text-[#312749]">
                              {item.title}
                            </h3>

                            <p className="mt-[1rem] mb-[3.5rem] text-[1.6rem] text-[#625C70]">
                              {item.excerpt}
                            </p>
                          </div>

                          <Link
                            href={`/legal/${item.slug.current}`}
                            className="inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold"
                            style={{ color: item.color }}
                          >
                            More Details
                            <RightArrowIcon color={item.color} />
                          </Link>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default Policies;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import HeadphoneIcon from "@/assets/icons/ui/headphone-icon.svg";
import EmailIcon from "@/assets/icons/ui/email-icon.svg";
import TimelineIcon from "@/assets/icons/ui/timeline-icon.svg";
import { useEffect } from "react";

const ContactHeroSlider = () => {
  useEffect(() => {
    (async function () {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
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
        <SwiperSlide className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[5rem]">
          <div className="contact-hero-card h-[33rem] w-full">
            <div className="absolute inset-0 z-[10] flex flex-col items-center justify-between p-[2rem] text-center">
              <div>
                <i
                  style={{
                    boxShadow: "5px 5px 44px 0px #3078FFCC",
                  }}
                  className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#3078FF]"
                >
                  <Image src={TimelineIcon} width={34} height={34} alt="Icon" />
                </i>

                <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                  Book Strategy Call
                </h4>

                <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                  Fastest way to get answers.{" "}
                </p>
              </div>

              <div className="w-full">
                <button
                  data-cal-namespace="15min"
                  data-cal-link="hassan-iqbal-mznzu9/15min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[1rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#3078FF] hover:bg-[#3078FF]"
                >
                  15-min chat with Hassan
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[5rem]">
          <div className="contact-hero-card h-[33rem] w-full">
            <div className="absolute inset-0 z-[10] flex flex-col items-center justify-between p-[2rem] text-center">
              <div>
                <i
                  style={{
                    boxShadow: "5px 5px 44px 0px #ED910CCC",
                  }}
                  className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#ED910C]"
                >
                  <Image src={EmailIcon} width={34} height={34} alt="Icon" />
                </i>

                <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                  Have a Brief?
                </h4>

                <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                  Email your brief and we will get back to you.
                </p>
              </div>

              <div className="w-full">
                <Link
                  href="mailto:hello@cp.agency"
                  className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[1rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#ED910C] hover:bg-[#ED910C]"
                >
                  hello@cp.agency
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[5rem]">
          <div className="contact-hero-card h-[33rem] w-full">
            <div className="absolute inset-0 z-[10] flex flex-col items-center justify-between p-[2rem] text-center">
              <div>
                <i
                  style={{
                    boxShadow: "5px 5px 44px 0px #FF37B3CC",
                  }}
                  className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#FF37B3]"
                >
                  <Image
                    src={HeadphoneIcon}
                    width={34}
                    height={34}
                    alt="Icon"
                  />
                </i>

                <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                  Direct Call
                </h4>

                <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                  Prefer to call?
                </p>
              </div>

              <div className="w-full">
                <Link
                  href="tel:01618202667"
                  className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[1rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#FF37B3] hover:bg-[#FF37B3]"
                >
                  0161 820 2667
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ContactHeroSlider;

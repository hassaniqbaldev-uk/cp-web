"use client";
import BlinkBadge from "@/components/common/BlinkBadge";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import ConsultationCtaButton from "@/components/common/ConsultationCtaButton";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import ViewCaseStudyButton from "@/components/common/ViewCaseStudyButton";
import { logoPopupData } from "@/constants/globals";
import StrokeLine1 from "@/components/decorativeElements/StrokeLine1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleLogoClick = (idx) => {
    if (activePopup === idx) {
      // Close popup → resume autoplay
      setActivePopup(null);
      swiperInstance?.autoplay?.start();
    } else {
      // Open popup → stop autoplay
      setActivePopup(idx);
      swiperInstance?.autoplay?.stop();
    }
  };

  const getDynamicMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const now = new Date();
    const currentMonth = now.getMonth();
    return months[currentMonth];
  };

  const dynamicText = getDynamicMonth();

  useEffect(() => {
    (async function () {
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
      <section
        className="hero-section relative h-[79rem] w-full overflow-hidden rounded-br-[5rem] rounded-bl-[5rem] px-[3rem] pt-[17rem] xl:px-[0rem]"
        style={{
          background:
            "url('assets/images/home-hero-gradient-bg.png') no-repeat center center/cover",
        }}
      >
        {/*Decorative Elements*/}
        <div className="pointer-events-none absolute bottom-[2rem] left-1/2 -translate-x-1/2 select-none">
          <StrokeLine1 />
        </div>

        {/*Content*/}
        <div className="flex flex-col items-center justify-center">
          <button
            data-cal-namespace="15min"
            data-cal-link="hassan-iqbal-mznzu9/15min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className="cursor-pointer"
          >
            <BlinkBadge text={`Limited ${dynamicText} Slots Available`} />
          </button>

          <h1 className="mt-[2.7rem] max-w-[106.5rem] text-center text-[2rem] leading-[3rem] font-bold tracking-[-0.03em] text-white md:text-[4.5rem] md:leading-[6rem] lg:text-[6rem] lg:leading-[7rem] xl:text-[7rem] xl:leading-[8.4rem]">
            Grow your digital presence today with real{" "}
            <span className="bg-gradient-yellow-orange bg-clip-text text-transparent">
              human-led
            </span>{" "}
            strategy.
          </h1>

          <p className="mt-[2rem] mb-[2.6rem] max-w-[65.3rem] text-center text-[1.4rem] leading-[2.2rem] tracking-normal text-white md:text-[2.2rem] md:leading-[3.2rem]">
            Smart websites, standout branding, and ongoing support everything
            you need to grow with confidence.
          </p>

          <ConsultationCtaButton />

          <div className="mt-[5.9rem] flex flex-col items-center justify-center gap-[3rem]">
            <span className="text-center text-[1.8rem] leading-[2.6rem] font-normal tracking-normal text-white">
              Trusted by brands in the UK, US & Australia
            </span>

            <div className="hidden items-center justify-center gap-[4.5rem] xl:flex">
              {logoPopupData.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActivePopup(idx)}
                  onMouseLeave={() => setActivePopup(null)}
                >
                  <button
                    onClick={() =>
                      setActivePopup(activePopup === idx ? null : idx)
                    }
                    className={`cursor-pointer transition-all duration-300 ${
                      activePopup === idx
                        ? "opacity-100 grayscale-0"
                        : "opacity-70 grayscale-100"
                    }`}
                  >
                    <img
                      src={item.logo}
                      alt="Logo Image"
                      className={`${item.class}`}
                    />
                  </button>

                  <div
                    className={`absolute bottom-full left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
                      activePopup === idx
                        ? "pointer-events-auto visible pb-[1.6rem] opacity-100"
                        : "pointer-events-none invisible pb-[0rem] opacity-0"
                    }`}
                  >
                    <Tilt>
                      <div className="flex w-[27rem] flex-col items-center gap-[2rem] overflow-hidden rounded-[1.6rem] bg-white pb-[2rem]">
                        <div className="h-[19.4rem] w-full overflow-hidden rounded-br-[1.6rem] rounded-bl-[1.6rem]">
                          <Image
                            src={item.popupImage}
                            alt="Popup Image"
                            height={194}
                            width={270}
                            className="size-full object-cover object-top"
                            unoptimized
                          />
                        </div>

                        <ViewCaseStudyButton href={item.href} />
                      </div>
                    </Tilt>
                  </div>
                </div>
              ))}
            </div>

            <div className="block w-full xl:hidden">
              <Swiper
                className="mySwiper"
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={2}
                spaceBetween={0}
                breakpoints={{
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 0,
                  },
                }}
                onSwiper={setSwiperInstance} // capture swiper instance
              >
                {logoPopupData.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !w-auto !items-center !justify-center px-[3rem]"
                  >
                    <div
                      className="relative"
                      onMouseLeave={() => handleLogoClick(idx)}
                    >
                      <button
                        onClick={() => handleLogoClick(idx)}
                        className={`cursor-pointer transition-all duration-300 ${
                          activePopup === idx
                            ? "opacity-100 grayscale-0"
                            : "opacity-70 grayscale-100"
                        }`}
                      >
                        <img
                          src={item.logo}
                          alt="Logo Image"
                          className={`${item.class}`}
                        />
                      </button>

                      <div
                        className={`absolute bottom-full left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
                          activePopup === idx
                            ? "pointer-events-auto visible pb-[1.6rem] opacity-100"
                            : "pointer-events-none invisible pb-[0rem] opacity-0"
                        }`}
                      >
                        <Tilt>
                          <div className="flex w-[27rem] flex-col items-center gap-[2rem] overflow-hidden rounded-[1.6rem] bg-white pb-[2rem]">
                            <div className="h-[19.4rem] w-full overflow-hidden rounded-br-[1.6rem] rounded-bl-[1.6rem]">
                              <Image
                                src={item.popupImage}
                                alt="Popup Image"
                                height={194}
                                width={270}
                                className="size-full object-cover object-top"
                                unoptimized
                              />
                            </div>

                            <ViewCaseStudyButton href={item.href} />
                          </div>
                        </Tilt>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;

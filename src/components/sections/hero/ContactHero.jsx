"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/contact-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import HeadphoneIcon from "@/assets/icons/ui/headphone-icon.svg";
import EmailIcon from "@/assets/icons/ui/email-icon.svg";
import TimelineIcon from "@/assets/icons/ui/timeline-icon.svg";
import Link from "next/link";
import SectionDescription from "@/components/ui/SectionDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const ContactHero = () => {
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
      <section className="relative w-full overflow-hidden px-[2rem] pt-[10rem] pb-[5rem] md:pt-[15.7rem] xl:px-[0rem] xl:pb-[8.3rem]">
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
          <HomeHeroLogoShape1 className="absolute top-[70px] left-[-10px] h-[8rem] w-[4rem] rotate-[25deg] md:top-[5.8px] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape2 className="absolute top-[12rem] right-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-50 md:right-[8rem] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute bottom-[8rem] left-[-6rem] h-[10rem] w-[10rem] rotate-[33deg] opacity-50 md:h-[13.2rem] md:w-[14.2rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center gap-[4rem]">
            <div className="flex flex-col items-center text-center">
              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
              >
                <SectionLabel text="Contact" textColor="#FF37B3" />
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
                delay={0.15}
              >
                <h1 className="mt-[1.4rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                  <span className="block">Let&apos;s build something</span>
                  <span className="bg-gradient-pink-white block bg-clip-text text-transparent">
                    extraordinary.
                  </span>
                </h1>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                zoom
                delay={0.3}
              >
                <div className="max-w-[62.8rem]">
                  <SectionDescription
                    text="Ready to start? Choose how you'd like to connect."
                    textColor="#FFFFFF"
                  />
                </div>
              </MotionEffect>
            </div>

            <div className="hidden grid-cols-3 gap-[3.4rem] xl:grid">
              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.45}
              >
                <div className="contact-hero-card">
                  <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center">
                    <i
                      style={{
                        boxShadow: "5px 5px 44px 0px #3078FFCC",
                      }}
                      className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#3078FF]"
                    >
                      <Image
                        src={TimelineIcon}
                        width={34}
                        height={34}
                        alt="Icon"
                      />
                    </i>

                    <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                      Book Strategy Call
                    </h4>

                    <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                      Fastest way to get answers.{" "}
                    </p>

                    <div className="w-full px-[3rem]">
                      <button
                        data-cal-namespace="15min"
                        data-cal-link="hassan-iqbal-mznzu9/15min"
                        data-cal-config='{"layout":"month_view","theme":"dark"}'
                        className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[3rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#3078FF] hover:bg-[#3078FF]"
                      >
                        15-min chat with Hassan
                      </button>
                    </div>
                  </div>
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.6}
              >
                <div className="contact-hero-card">
                  <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center">
                    <i
                      style={{
                        boxShadow: "5px 5px 44px 0px #ED910CCC",
                      }}
                      className="inline-flex size-[6.5rem] min-w-max items-center justify-center rounded-[1.5rem] bg-[#ED910C]"
                    >
                      <Image
                        src={EmailIcon}
                        width={34}
                        height={34}
                        alt="Icon"
                      />
                    </i>

                    <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                      Have a Brief?
                    </h4>

                    <p className="mt-[1rem] mb-[2rem] text-[1.6rem] font-semibold tracking-normal text-white">
                      Email your brief and we will get back to you.
                    </p>

                    <div className="w-full px-[3rem]">
                      <Link
                        href="mailto:hello@cp.agency"
                        className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[3rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#ED910C] hover:bg-[#ED910C]"
                      >
                        hello@cp.agency
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
                fade
                delay={0.75}
              >
                <div className="contact-hero-card">
                  <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center">
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

                    <div className="w-full px-[3rem]">
                      <Link
                        href="tel:01618202667"
                        className="flex h-[5.6rem] w-full items-center justify-center rounded-[6rem] border border-white/20 px-[3rem] py-[8px] text-[1.8rem] font-medium tracking-normal text-white transition-all duration-300 hover:border-[#FF37B3] hover:bg-[#FF37B3]"
                      >
                        0161 820 2667
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionEffect>
            </div>

            {/* Responsive */}
            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              delay={0.45}
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
                            <Image
                              src={TimelineIcon}
                              width={34}
                              height={34}
                              alt="Icon"
                            />
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
                            <Image
                              src={EmailIcon}
                              width={34}
                              height={34}
                              alt="Icon"
                            />
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
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;

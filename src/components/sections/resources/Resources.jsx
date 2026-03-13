"use client";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import MagnifyingGlassIcon3 from "@/assets/icons/ui/magnifying-glass-icon-3.svg";
import MegaphoneIcon from "@/assets/icons/ui/megaphone-icon.svg";
import BoostIcon from "@/assets/icons/ui/boost-icon.svg";
import EmailIcon2 from "@/assets/icons/ui/email-icon-2.svg";
import DataAnalysticsIcon from "@/assets/icons/ui/data-analytics-icon.svg";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";
import SectionDescription from "@/components/ui/SectionDescription";
import GraphicDesignIcon from "@/assets/icons/ui/graphic-design-icon.svg";

export const clientResourcesData = [
  // {
  //   icon: MagnifyingGlassIcon3,
  //   iconWidth: 30,
  //   iconHeight: 30,
  //   title: "Project Agreement",
  //   description: "Standard terms for website design and development projects.",
  //   link: "/legal/project-agreement",
  // },
  // {
  //   icon: MegaphoneIcon,
  //   iconWidth: 30,
  //   iconHeight: 30,
  //   title: "Retainer Agreement",
  //   description: "Terms for ongoing monthly marketing and support retainers.",
  //   link: "/legal/retainer-agreement",
  // },
  {
    icon: BoostIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "NDA Template",
    description:
      "A mutual non-disclosure agreement used where confidential information is shared, including agency, white-label, and sensitive projects.",
    link: "/legal/nda-template",
  },
  {
    icon: GraphicDesignIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Terms of Service",
    description:
      "The core agreement covering how we work with clients, including services, payments, intellectual property, hosting, third-party tools, and responsibilities.",
    link: "/legal/terms",
  },

  // {
  //   icon: EmailIcon2,
  //   iconWidth: 30,
  //   iconHeight: 30,
  //   title: "Payment Terms",
  //   description: "Invoicing, payment schedules, and refund policies.",
  //   link: "/legal/payment-terms",
  // },
  // {
  //   icon: DataAnalysticsIcon,
  //   iconWidth: 30,
  //   iconHeight: 30,
  //   title: "Intellectual Property",
  //   description: "Ownership, licensing, and usage rights for deliverables.",
  //   link: "/legal/intellectual-property",
  // },
  // {
  //   icon: DataAnalysticsIcon,
  //   iconWidth: 30,
  //   iconHeight: 30,
  //   title: "Complaints Procedure",
  //   description: "How to raise concerns and our resolution process.",
  //   link: "/legal/complaints-procedure",
  // },
  {
    icon: DataAnalysticsIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Support & Maintenance Schedule",
    description:
      "What’s included in ongoing support and maintenance, how requests are handled, response times, and what falls outside standard support.",
    link: "/legal/support-maintenance-schedule",
  },
];

const Resources = ({ legal = [] }) => {
  return (
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5rem]">
            <div className="flex w-full flex-col items-center justify-center text-center">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionTitle text="Client Resources" textColor="#FFFFFF" />
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
                    text="These documents apply when working with CreativePixels as a client, agency, or partner."
                    textColor="#FFFFFF"
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
                    <div className="client-resources-card">
                      <div className="flex h-full flex-col items-start justify-between p-[3rem] text-left">
                        <div className="flex flex-col items-start">
                          <i
                            style={{
                              background: item.color,
                            }}
                            className="inline-flex size-[5.8rem] min-h-[5.8rem] min-w-max items-center justify-center rounded-[1.5rem]"
                          >
                            <Image
                              src={item.icon.asset.url}
                              alt={item.title}
                              width={30}
                              height={30}
                              unoptimized
                            />
                          </i>

                          <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                            {item.title}
                          </h4>

                          <p className="mt-[1rem] mb-[3rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                            {item.excerpt}
                          </p>
                        </div>

                        <Link
                          href={`/legal/${item.slug.current}`}
                          className="relative z-[10] inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-white"
                        >
                          More Details
                          <RightArrowIcon color="#ffffff" />
                        </Link>
                      </div>
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
                        <div className="client-resources-card">
                          <div className="flex h-full flex-col items-start justify-between p-[3rem] text-left">
                            <div className="flex flex-col items-start">
                              <i
                                style={{
                                  background: item.color,
                                }}
                                className="inline-flex size-[5.8rem] min-w-max items-center justify-center rounded-[1.5rem]"
                              >
                                <Image
                                  src={item.icon.asset.url}
                                  alt={item.title}
                                  width={30}
                                  height={30}
                                  unoptimized
                                />
                              </i>

                              <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                                {item.title}
                              </h4>

                              <p className="mt-[1rem] mb-[3rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                                {item.excerpt}
                              </p>
                            </div>

                            <Link
                              href={`/legal/${item.slug.current}`}
                              className="relative z-[10] inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-white"
                            >
                              More Details
                              <RightArrowIcon color="#ffffff" />
                            </Link>
                          </div>
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

export default Resources;

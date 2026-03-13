"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { urlFor } from "@/sanity/caseStudies.image";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import { useState } from "react";
import { MotionEffect } from "@/components/effects/motion-effect";

const Work = ({ caseStudies }) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouse = useMousePosition();

  const casaBotanica =
    caseStudies.find((item) => item.slug === "casa-botanica-panama") ||
    caseStudies[0];

  const ndifoSafari =
    caseStudies.find((item) => item.slug === "ndifo-safari") || caseStudies[1];

  const smokeyCarter =
    caseStudies.find((item) => item.slug === "the-smokey-carter") ||
    caseStudies[2];

  return (
    <>
      {mouse && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-[7rem] w-[7rem] items-center justify-center rounded-full bg-[#FF37B3] text-white opacity-0 xl:flex"
          animate={{
            x: mouse.x - 35,
            y: mouse.y - 35,
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        >
          <span className="text-[1.6rem] font-medium">View</span>
        </motion.div>
      )}

      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-[3rem] xl:flex-row">
            <div className="flex w-[30rem] flex-col items-center text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionLabel text="Our Work" textColor="#EE8D00" />
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
                <div className="mt-[5px] mb-[14px]">
                  <SectionTitle text="Digital Done Right." />
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
                <div>
                  <SectionDescription text="We've crafted websites and brands that blend design, development, and strategy into measurable success." />
                </div>
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="hidden md:block">
                <PrimaryButton
                  text="View All Projects"
                  textColor="#FFFFFF"
                  href="/case-studies"
                  bGcolor="#FF37B3"
                />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[7.4rem] hidden w-full gap-[3rem] xl:flex">
            <div className="w-[79.1rem]">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <Link
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${casaBotanica.slug}`}
                  className="flex flex-col gap-[3.9rem] rounded-[3rem] bg-white px-[3rem] pt-[2rem] pb-[4rem]"
                >
                  <div className="flex h-[49.7rem] w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={urlFor(casaBotanica.thumbnailImage)
                        ?.width(737)
                        .height(497)
                        .fit("crop")
                        .url()}
                      alt={casaBotanica.title || "Case Study Thumbnail Image"}
                      width={737}
                      height={497}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex w-full flex-col">
                    <hr className="my-[3.2rem] w-full border-t border-black/20" />

                    <div className="flex h-full items-center justify-between">
                      <div className="flex flex-col items-start text-left">
                        <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
                          {casaBotanica.title}
                        </h4>

                        <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                          {casaBotanica.excerpt}
                        </span>
                      </div>

                      <i
                        style={{
                          background: casaBotanica.iconBg,
                        }}
                        className="inline-flex size-[6rem] min-w-[6rem] items-center justify-center rounded-full"
                      >
                        <TiltArrowIcon color={casaBotanica.iconColor} />
                      </i>
                    </div>
                  </div>
                </Link>
              </MotionEffect>
            </div>

            <div className="flex w-[40rem] flex-col gap-[2rem]">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.55}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <Link
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${ndifoSafari.slug}`}
                  className="flex w-full flex-col gap-[2rem] rounded-[3rem] bg-white px-[2rem] pt-[1.5rem] pb-[3rem]"
                >
                  <div className="flex h-[22.7rem] w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={urlFor(ndifoSafari.thumbnailImage)
                        ?.width(365)
                        .height(227)
                        .fit("crop")
                        .url()}
                      alt={ndifoSafari.title || "Case Study Thumbnail Image"}
                      width={365}
                      height={227}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start text-left">
                      <h4 className="text-[2.6rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749]">
                        {ndifoSafari.title}
                      </h4>

                      <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                        {ndifoSafari.excerpt}
                      </span>
                    </div>

                    <i
                      style={{
                        background: ndifoSafari.iconBg,
                      }}
                      className="inline-flex size-[6rem] min-w-[6rem] items-center justify-center rounded-full"
                    >
                      <TiltArrowIcon color={ndifoSafari.iconColor} />
                    </i>
                  </div>
                </Link>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.7}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <Link
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${smokeyCarter.slug}`}
                  className="flex w-full flex-col gap-[2rem] rounded-[3rem] bg-white px-[2rem] pt-[1.5rem] pb-[3rem]"
                >
                  <div className="flex h-[22.7rem] w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={urlFor(smokeyCarter.thumbnailImage)
                        ?.width(365)
                        .height(227)
                        .fit("crop")
                        .url()}
                      alt={smokeyCarter.title || "Case Study Thumbnail Image"}
                      width={365}
                      height={227}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start text-left">
                      <h4 className="text-[2.6rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749]">
                        {smokeyCarter.title}
                      </h4>

                      <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                        {smokeyCarter.excerpt}
                      </span>
                    </div>

                    <i
                      style={{
                        background: smokeyCarter.iconBg,
                      }}
                      className="inline-flex size-[6rem] min-w-[6rem] items-center justify-center rounded-full"
                    >
                      <TiltArrowIcon color={smokeyCarter.iconColor} />
                    </i>
                  </div>
                </Link>
              </MotionEffect>
            </div>
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
                {[casaBotanica, ndifoSafari, smokeyCarter].map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="!flex !h-auto !justify-center !pt-[2rem] pb-[5rem]"
                  >
                    <Link
                      style={{
                        boxShadow: "11px 11px 65px 0px #00000012",
                      }}
                      href={`/case-studies/${item.slug}`}
                      className="flex h-full w-[27.5rem] flex-col gap-[2.2rem] rounded-[3rem] bg-white px-[1.5rem] pt-[1.5rem] pb-[2rem]"
                    >
                      <div className="flex h-[18.3rem] w-full overflow-hidden rounded-[1.5rem]">
                        <Image
                          src={urlFor(item.thumbnailImage)
                            ?.width(275)
                            .height(183)
                            .fit("crop")
                            .url()}
                          alt={item.title || "Case Study Thumbnail Image"}
                          width={275}
                          height={183}
                          className="w-full object-cover object-center"
                          unoptimized
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start gap-[1rem] text-left">
                          <h4 className="text-[2rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                            {item.title}
                          </h4>

                          <span className="text-[1.4rem] leading-[1.9rem] font-semibold text-[#625C70]">
                            {item.excerpt}
                          </span>
                        </div>

                        <i
                          style={{
                            backgroundColor: item.iconBg,
                          }}
                          className="inline-flex size-[4.6rem] min-w-[4.6rem] items-center justify-center rounded-full"
                        >
                          <TiltArrowIcon color={item.iconColor} />
                        </i>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-[3rem] flex items-center justify-center md:hidden">
                <PrimaryButton
                  text="View All Projects"
                  textColor="#FFFFFF"
                  href="/case-studies"
                  bGcolor="#FF37B3"
                />
              </div>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default Work;

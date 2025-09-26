"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { caseStudiesCardData } from "@/constants/globals";

const CaseStudiesMarquee = () => {
  return (
    <>
      <Swiper
        className="mySwiper case-studies-slider"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {caseStudiesCardData.map((caseStudy, index) => (
          <SwiperSlide key={index}>
            <div
              className={`case-studies-grid h-full w-full !p-[2rem] md:w-[50rem] xl:!p-[3rem]`}
            >
              <Link
                href={`/case-studies/${caseStudy.slug}`}
                className="flex size-full flex-col gap-[4rem]"
              >
                <div className="relative h-[25rem] w-full overflow-hidden rounded-[2rem] md:h-[35rem]">
                  <Image
                    src={caseStudy.image}
                    alt="Case Study Image"
                    height={440}
                    width={555}
                    priority
                    className="size-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-col items-center text-center">
                  {/* Tags */}
                  <ul className="flex flex-wrap justify-center gap-[1rem]">
                    {caseStudy.tags.map((tag, index) => (
                      <li
                        key={index}
                        className={`inline-flex h-[4rem] items-center justify-center gap-[.8rem] rounded-[.4rem] px-[1.2rem] py-[.8rem] text-[1.4rem] leading-[2.2rem] font-medium text-white uppercase md:text-[1.6rem] md:leading-[2.4rem] ${
                          tag.color || "bg-text-primary"
                        }`}
                      >
                        {tag.icon && (
                          <i className="relative inline-flex size-[2rem] items-center justify-center">
                            <tag.icon />
                          </i>
                        )}
                        <span>{tag.label}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Title */}
                  <h3 className="text-text-primary mt-[1.4rem] line-clamp-2 text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] md:text-[3rem] md:leading-[4rem] xl:text-[3.4rem] xl:leading-[4.8rem]">
                    {caseStudy.title}
                  </h3>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CaseStudiesMarquee;

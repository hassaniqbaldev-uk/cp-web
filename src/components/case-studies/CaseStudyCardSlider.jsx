"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import ContactArrowIcon from "@/assets/icons/contact-arrow.svg";

const CaseStudyCardSlider = ({ caseStudies }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      slidesPerView={1}
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      className="mySwiper !overflow-visible"
    >
      {caseStudies.map((caseStudy) => (
        <SwiperSlide key={caseStudy.id}>
          <Link
            href={`/case-studies/${caseStudy.Slug}`}
            className="case-study-card-slider flex flex-col items-center p-[2rem] text-center"
          >
            <div
              className="relative block h-[20rem] w-full overflow-hidden rounded-[1.4rem] md:h-[23rem] lg:h-[33rem] xl:h-[40rem]"
              style={{ boxShadow: "0px 4px 24px 0px #1A1A1A80" }}
            >
              <Image
                src={`${caseStudy.ThumbnailImage.url}`}
                fill
                priority
                className="size-full object-cover"
                alt={`${caseStudy.ThumbnailImage.alternativeText}`}
                unoptimized
              />
            </div>

            <div className="mt-[3rem] flex h-full w-full flex-col justify-between">
              <h3 className="my-[1rem] line-clamp-1 text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
                {caseStudy.Title}
              </h3>

              <div className="mb-[2rem] flex w-full flex-col items-center justify-between gap-[2rem] xl:flex-row">
                <div className="flex flex-col items-center gap-[1.1rem] xl:flex-row">
                  <span className="text-text-primary/60 text-[1.6rem] leading-[2.4rem] font-medium uppercase">
                    TECHNOLOGY USED
                  </span>

                  <ul className="flex items-center gap-[2rem]">
                    {caseStudy.Technologies.slice(0, 2).map((tech) => (
                      <li key={tech.id} className="h-[2.2rem]">
                        <img
                          src={`${tech.Technology.url}`}
                          alt={
                            tech.Technology.alternativeText ||
                            tech.Technology.name ||
                            "Technology"
                          }
                          className="size-full object-contain"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <i className="inline-flex size-[4.9rem] rotate-45 items-center justify-center">
                  <ContactArrowIcon />
                </i>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CaseStudyCardSlider;

//1

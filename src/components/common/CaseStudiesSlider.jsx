"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import ContactArrowIcon from "@/assets/icons/contact-arrow.svg";

const CaseStudiesSlider = ({ caseStudies }) => {
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
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      className="mySwiper case-studies-slider"
    >
      {caseStudies.map((cs, idx) => (
        <SwiperSlide key={idx}>
          <Link
            href={`/case-studies/${cs.slug}`}
            className="case-studies-card flex flex-col items-center p-[2rem] text-center"
          >
            <div className="shadow-03 relative block w-full overflow-hidden rounded-[1.4rem] xl:h-[38rem]">
              <Image
                src={cs.image}
                alt="Case Study Image"
                height={345}
                width={488}
                priority
                className="size-full"
              />
            </div>

            <div className="mt-[3rem] flex h-full flex-col justify-between">
              <h3 className="my-[1rem] line-clamp-2 max-w-[50rem] text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
                {cs.title}
              </h3>

              <div className="mb-[2rem] flex w-full flex-col items-center justify-between gap-[2rem] xl:flex-row">
                <div className="flex flex-col items-center gap-[1.1rem] xl:flex-row">
                  <span className="text-text-primary/60 text-[1.6rem] leading-[2.4rem] font-medium uppercase">
                    TECHNOLOGY USED
                  </span>

                  <ul className="flex items-center gap-[2rem]">
                    {cs.technologies.slice(0, 2).map((tech) => (
                      <li key={tech.id}>
                        {tech.logo && (
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="h-[2.2rem]"
                          />
                        )}
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

export default CaseStudiesSlider;

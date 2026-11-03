"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Starfield from "../ui/Starfield";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// NOTE: only one testimonial from the reference so far. Add more here (and
// their avatar images under /images/store-review/) to populate the slider.
const testimonials = [
  {
    id: "ben-little-astro",
    quote:
      "Fantastic! One of the best! Hassan and his team are really very talented and built an outstanding website.",
    rating: "5.0",
    name: "Ben, Little Astro",
    avatar: "/images/book-a-call/ben-img-avatar.png", // TODO: add avatar image
  },
  // TODO: replace the placeholders below with real client testimonials.
  {
    id: "placeholder-2",
    quote: "Add the second client testimonial here — real quote and name.",
    rating: "5.0",
    name: "Client name, Company",
    avatar: null,
  },
  {
    id: "placeholder-3",
    quote: "Add the third client testimonial here — real quote and name.",
    rating: "5.0",
    name: "Client name, Company",
    avatar: null,
  },
];

const Stars = ({ rating }) => (
  <span className="flex items-center gap-[6px]">
    <span className="flex items-center gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#F7B500] text-[#F7B500]" />
      ))}
    </span>

    <span className="text-[12px] font-semibold tracking-[-0.02em] text-white/60">
      {rating}
    </span>
  </span>
);

const TestimonialCard = ({ quote, rating, name, avatar }) => (
  <div className="gradient-border max-bf-sm:p-[30px] relative flex h-full flex-col justify-between rounded-[20px] bg-white/[0.08] p-[40px] backdrop-blur-[10px]">
    <div>
      <Quote
        size={50}
        className="fill-blue text-blue rotate-180"
        strokeWidth={0}
      />

      <p className="max-bf-sm:text-[18px] max-bf-sm:leading-[26px] mt-[20px] text-[35px] leading-[45px] tracking-[-0.06em] text-white">
        {quote}
      </p>
    </div>

    <div className="mt-[28px] border-t border-white/15 pt-[24px]">
      <div className="flex items-center gap-[14px]">
        <span className="size-[47px] shrink-0 overflow-hidden rounded-full bg-white/15">
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              width={47}
              height={47}
              className="size-full object-cover"
            />
          )}
        </span>

        <div>
          <Stars rating={rating} />

          <p className="mt-[4px] text-[16px] tracking-[-0.02em] text-white">
            {name}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const StoreReviewTestimonials = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <Section
      id="testimonials"
      className="max-bf-xl:py-[60px] relative overflow-hidden bg-black py-[120px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/store-review/blue-gradient-bg.png"
          alt=""
          width={1256}
          height={1096}
          className="max-bf-xl:top-[300px] max-bf-sm:top-[550px] max-bf-lg:top-[500px] absolute top-[100px] right-[-100px]"
        />

        <Starfield className="absolute top-0 right-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
      </div>

      <Container className="max-bf-xl:px-[40px] max-bf-sm:px-[20px] relative z-10">
        <div className="max-bf-xl:flex-col max-bf-xl:items-start max-bf-xl:gap-[40px] flex items-center justify-between gap-[60px]">
          <div className="max-bf-xl:w-full max-bf-sm:flex max-bf-sm:text-center w-[510px] shrink-0 flex-col items-center">
            <p className="max-bf-sm:text-[12px] text-[22px] font-medium tracking-[-0.02em] text-white uppercase">
              What clients say
            </p>

            <h2 className="max-bf-sm:text-[30px] max-bf-sm:leading-[34px] mt-[10px] text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-white">
              Clients who’d
              <br />
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                work with us
              </span>
              <br />
              again.
            </h2>

            <div className="max-bf-xl:mt-[30px] mt-[50px] flex items-center gap-[16px]">
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                aria-label="Previous testimonial"
                className="flex size-[48px] items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-black"
              >
                <ArrowLeft size={20} strokeWidth={2} />
              </button>

              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                aria-label="Next testimonial"
                className="flex size-[48px] items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-black"
              >
                <ArrowRight size={20} strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="max-bf-xl:w-full w-[540px] shrink-0">
            <Swiper
              onSwiper={setSwiper}
              loop={testimonials.length > 1}
              slidesPerView={1}
              spaceBetween={30}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="!h-auto">
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StoreReviewTestimonials;

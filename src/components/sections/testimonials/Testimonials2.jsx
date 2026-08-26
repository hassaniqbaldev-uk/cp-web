"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import StarIcon from "@/components/icons/StarIcon";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const Testimonials2Slider = dynamic(
  () => import("@/components/ui/Testimonials2Slider"),
  { ssr: false },
);

const Testimonials2 = ({ testimonials = [] }) => {
  // Featured leads (row-span-2, with its image); the rest fill the grid, last one spans two columns.
  const featured = testimonials.find((t) => t.featured) || testimonials[0];
  const rest = testimonials.filter((t) => t._id !== featured?._id);
  const lastIndex = rest.length - 1;

  // Mobile slider shows every review (featured first), matching the desktop set.
  const sliderItems = (featured ? [featured, ...rest] : rest).map((t) => ({
    rating: t.rating,
    text: t.quote,
    name: t.name,
    company: t.company,
    avatar: t.avatarUrl,
  }));

  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.1}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <SectionLabel
                text="Trusted by growth-focused brands"
                textColor="#3078FF"
              />
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
            <div className="mt-[10px] mb-[18px] md:mt-[5px] md:mb-[14px]">
              <SectionTitle text="Built with Pixels. Backed by people." />
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
            <div className="flex items-center justify-center">
              <span className="text-[1.4rem] leading-[3.2rem] font-bold text-[#625C70] md:text-[2rem]">
                Real reviews from real clients
              </span>
            </div>
          </MotionEffect>
        </div>

        {/* Desktop Bento Grid — single container animation */}
        {testimonials.length > 0 && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <div className="my-[5rem] hidden grid-cols-3 gap-[1.3rem] xl:grid">
              {/* Featured Testimonial - Left Column (row-span-2) */}
              {featured && (
                <div className="row-span-2 flex h-full w-full flex-col items-start justify-between gap-[4rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] pt-[3rem] pb-[4.1rem] backdrop-blur-[10px]">
                  <div className="flex flex-col gap-[2rem]">
                    {featured.featuredImageUrl && (
                      <div className="flex h-[20rem] w-full overflow-hidden rounded-[1.2rem]">
                        <Image
                          src={featured.featuredImageUrl}
                          alt=""
                          width={319}
                          height={319}
                          className="size-full object-cover object-top-left"
                        />
                      </div>
                    )}

                    <div className="flex flex-col items-start gap-[1.9rem] text-left">
                      <ul className="flex items-center gap-[3px]">
                        {Array.from({ length: featured.rating || 5 }).map(
                          (_, index) => (
                            <li key={index}>
                              <StarIcon color="#FFBF00" height="20" width="20" />
                            </li>
                          ),
                        )}
                      </ul>

                      <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                        {featured.quote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-[1.2rem]">
                    <div className="flex overflow-hidden rounded-full">
                      {featured.avatarUrl && (
                        <Image
                          src={featured.avatarUrl}
                          alt=""
                          width={56}
                          height={56}
                          unoptimized
                        />
                      )}
                    </div>

                    <div className="flex flex-col items-start text-left">
                      <p className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                        {featured.name}
                      </p>

                      <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                        {featured.company}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Testimonials */}
              {rest.map((testimonial, index) => (
                <div
                  key={testimonial._id}
                  className={`${index === lastIndex ? "col-span-2" : ""} flex h-full w-full flex-col justify-between gap-[4rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4.1rem] backdrop-blur-[10px]`}
                >
                  <div className="flex flex-col items-start gap-[1.9rem] text-left">
                    <ul className="flex items-center gap-[3px]">
                      {Array.from({ length: testimonial.rating || 5 }).map(
                        (_, i) => (
                          <li key={i}>
                            <StarIcon color="#FFBF00" height="20" width="20" />
                          </li>
                        ),
                      )}
                    </ul>

                    <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-[1.2rem]">
                    <div className="flex overflow-hidden rounded-full">
                      {testimonial.avatarUrl && (
                        <Image
                          src={testimonial.avatarUrl}
                          alt=""
                          width={56}
                          height={56}
                          unoptimized
                        />
                      )}
                    </div>

                    <div className="flex flex-col items-start text-left">
                      <p className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                        {testimonial.name}
                      </p>

                      <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MotionEffect>
        )}

        {/* Responsive Swiper */}
        {sliderItems.length > 0 && (
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.6}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <div className="my-[3rem] block w-full xl:hidden">
              <Testimonials2Slider testimonials={sliderItems} />
            </div>
          </MotionEffect>
        )}
      </div>
    </section>
  );
};

export default Testimonials2;

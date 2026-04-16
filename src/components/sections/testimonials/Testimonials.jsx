"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import StarIcon from "@/components/icons/StarIcon";
import TestimonialAvatar1 from "@/assets/icons/ui/testimonial-avatar-1.svg";
import TestimonialAvatar2 from "@/assets/svgs/ayoa-testimonial-avatar.svg";
import TestimonialAvatar3 from "@/assets/icons/ui/testimonial-avatar-3.svg";
import TestimonialAvatar4 from "@/assets/svgs/game-art-testimonial-avatar.svg";
import TestimonialCardImg from "@/assets/images/cards/testimonial-card-img.webp";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const TestimonialsSlider = dynamic(
  () => import("@/components/ui/TestimonialsSlider"),
  {
    ssr: false,
    loading: () => <div className="h-[37.6rem]" />, // placeholder height to prevent layout shift
  },
);

const testimonials = [
  {
    rating: 5,
    text: "CreativePixels' expertise on our programme materials was invaluable. Together, we raised over £478,000 to protect children in danger.",
    name: "Special Events Coordinator",
    company: "Coordinator, UNICEF UK",
    image: TestimonialCardImg,
    avatar: TestimonialAvatar1,
  },
  {
    rating: 5,
    text: "I would highly recommend Hassan, he was excellent throughout the process of designing and developing our new website.",
    name: "James Brien",
    company: "Ayoa",
    avatar: TestimonialAvatar2,
  },
  {
    rating: 5,
    text: "My new site is significantly faster and easier to navigate. We've seen a 30% increase in inquiries since launch.",
    name: "Simon Hobbs",
    company: "Owner, Precise Print",
    avatar: TestimonialAvatar3,
  },
  {
    rating: 5,
    text: "The new webpage Hassan created for Game Art Brain is a game-changer for our brand. He developed a signature style that is both unique and perfectly aligned with our identity, completely revitalizing our online presence. His work is meticulous, handling a huge number of images and complex layouts with an artist's touch.",
    name: "Ahmed Omar",
    company: "GameArtBrain",
    avatar: TestimonialAvatar4,
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="container">
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
              <SectionLabel text="Testimonials" textColor="#3078FF" />
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
            <div className="flex items-center justify-center gap-[1.2rem]">
              <ul className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <StarIcon color="#FF37B3" className="size-[1.5rem]" />
                  </li>
                ))}
              </ul>

              <span className="text-[1.4rem] leading-[3.2rem] font-bold text-[#625C70] md:text-[2rem]">
                4.9/5 from 47+ Clients
              </span>
            </div>
          </MotionEffect>
        </div>

        {/* Desktop Bento Grid — single container animation */}
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.4}
          transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
        >
          <div className="my-[5rem] hidden grid-cols-3 gap-[1.3rem] xl:grid">
            {/* Card 1 — row-span-2 */}
            <div className="row-span-2 flex h-full w-full flex-col items-center gap-[2rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] pt-[3rem] pb-[4.1rem] backdrop-blur-[10px]">
              <div className="flex overflow-hidden rounded-[1.2rem]">
                <Image
                  src={TestimonialCardImg}
                  alt="Card Image"
                  width={319}
                  height={319}
                  unoptimized
                />
              </div>

              <div className="flex flex-col gap-[4rem]">
                <div className="flex flex-col items-start gap-[1.9rem] text-left">
                  <ul className="flex items-center gap-[3px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <li key={index}>
                        <StarIcon color="#FFBF00" height="20" width="20" />
                      </li>
                    ))}
                  </ul>

                  <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                    &quot;CreativePixels&apos; expertise on our programme
                    materials was invaluable. Together, we raised over £478,000
                    to protect children in danger.&quot;
                  </p>
                </div>

                <div className="flex items-center gap-[1.2rem]">
                  <div className="flex overflow-hidden rounded-full">
                    <Image
                      src={TestimonialAvatar1}
                      alt="Avatar Image"
                      width={56}
                      height={56}
                      unoptimized
                    />
                  </div>

                  <div className="flex flex-col items-start text-left">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                      Special Events Coordinator
                    </h6>

                    <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                      Coordinator, UNICEF UK
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex h-[31.5rem] w-full flex-col justify-between rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4.1rem] backdrop-blur-[10px]">
              <div className="flex flex-col items-start gap-[1.9rem] text-left">
                <ul className="flex items-center gap-[3px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <StarIcon color="#FFBF00" height="20" width="20" />
                    </li>
                  ))}
                </ul>

                <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                  I would highly recommend Hassan, he was excellent throughout
                  the process of designing and developing our new website.
                </p>
              </div>

              <div className="flex items-center gap-[1.2rem]">
                <div className="flex overflow-hidden rounded-full">
                  <Image
                    src={TestimonialAvatar2}
                    alt="Avatar Image"
                    width={56}
                    height={56}
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                    James Brien
                  </h6>

                  <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                    Ayoa
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex h-[31.5rem] w-full flex-col justify-between rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4.1rem] backdrop-blur-[10px]">
              <div className="flex flex-col items-start gap-[1.9rem] text-left">
                <ul className="flex items-center gap-[3px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <StarIcon color="#FFBF00" height="20" width="20" />
                    </li>
                  ))}
                </ul>

                <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                  &quot;My new site is significantly faster and easier to
                  navigate. We&apos;ve seen a 30% increase in inquiries since
                  launch.&quot;
                </p>
              </div>

              <div className="flex items-center gap-[1.2rem]">
                <div className="flex overflow-hidden rounded-full">
                  <Image
                    src={TestimonialAvatar3}
                    alt="Avatar Image"
                    width={56}
                    height={56}
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                    Simon Hobbs
                  </h6>

                  <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                    Owner, Precise Print
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 — col-span-2 */}
            <div className="col-span-2 flex h-[31.5rem] w-full flex-col justify-between rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4.1rem] backdrop-blur-[10px]">
              <div className="flex flex-col items-start gap-[1.9rem] text-left">
                <ul className="flex items-center gap-[3px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <StarIcon color="#FFBF00" height="20" width="20" />
                    </li>
                  ))}
                </ul>

                <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                  The new webpage Hassan created for Game Art Brain is a
                  game-changer for our brand. He developed a signature style
                  that is both unique and perfectly aligned with our identity,
                  completely revitalizing our online presence. His work is
                  meticulous, handling a huge number of images and complex
                  layouts with an artist&apos;s touch.
                </p>
              </div>

              <div className="flex items-center gap-[1.2rem]">
                <div className="flex overflow-hidden rounded-full">
                  <Image
                    src={TestimonialAvatar4}
                    alt="Avatar Image"
                    width={56}
                    height={56}
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                    Ahmed Omar
                  </h6>

                  <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                    GameArtBrain
                  </span>
                </div>
              </div>
            </div>
          </div>
        </MotionEffect>

        {/* Responsive */}
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.6}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="my-[3rem] block w-full xl:hidden">
            <TestimonialsSlider testimonials={testimonials} />
          </div>
        </MotionEffect>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.5}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <PrimaryButton
              text="See More Reviews & Results"
              textColor="#FFFFFF"
              href="/testimonials"
              bGcolor="#312749"
            />
          </div>
        </MotionEffect>
      </div>
    </>
  );
};

export default Testimonials;

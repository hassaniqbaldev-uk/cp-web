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

const testimonials = [
  {
    name: "James Wilson",
    role: "CEO, TechFlow",
    text: `“CreativePixels helped us turn our website into a consistent lead generator. The difference was immediate.”`,
    avatar: TestimonialAvatar2,
  },
  {
    name: "Emma K.",
    role: "Business Owner",
    text: `“Our conversions improved significantly after launch. Our ad spend finally feels worth it.”`,
    avatar: TestimonialAvatar2,
  },
  {
    name: "Simon Hobbs",
    role: "Owner, Precise Print",
    text: `“Professional, fast, and focused on results. Exactly what we needed.”`,
    avatar: TestimonialAvatar2,
  },
];

const LpTestimonialSlider = dynamic(() => import("./LpTestimonialSlider"), {
  ssr: false,
  loading: () => <div className="h-[24.5rem]" />, // placeholder to prevent layout shift
});

const LpTestimonialSection = () => {
  return (
    <section className="bg-[#ED910C1A] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
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
            inView
            delay={0.25}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          >
            <div className="mt-[10px] mb-[18px] md:mt-[5px] md:mb-[14px]">
              <SectionTitle text=" Trusted by Businesses That Want Results" />
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
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

        <div className="my-[5rem] hidden grid-cols-3 gap-[1.3rem] xl:grid">
          {testimonials.map((item, idx) => (
            <MotionEffect
              key={idx}
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.45 + idx * 0.15}
              transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex h-full w-full flex-col justify-between gap-[3rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4rem] backdrop-blur-[10px]">
                <div className="flex flex-col items-start gap-[2rem] text-left">
                  <ul className="flex items-center gap-[2px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <li key={index}>
                        <StarIcon color="#FFBF00" height="20" width="20" />
                      </li>
                    ))}
                  </ul>

                  <p className="text-[1.6rem] leading-[2.4rem] font-medium text-[#625C70]">
                    {item.text}
                  </p>
                </div>

                <div className="flex items-center gap-[1rem]">
                  <div className="flex overflow-hidden rounded-full">
                    <Image
                      src={item.avatar}
                      alt="Avatar Image"
                      width={56}
                      height={56}
                    />
                  </div>

                  <div className="flex flex-col items-start text-left">
                    <h6 className="text-[1.8rem] font-semibold text-[#312749]">
                      {item.name}
                    </h6>

                    <span className="text-[1.6rem] font-medium text-[#625C70]">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </MotionEffect>
          ))}
        </div>

        {/* Responsive */}
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.5}
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        >
          <div className="my-[3rem] block w-full xl:hidden">
            <LpTestimonialSlider testimonials={testimonials} />
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default LpTestimonialSection;

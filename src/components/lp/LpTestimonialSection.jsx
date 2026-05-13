"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import StarIcon from "@/components/icons/StarIcon";
import LittleAstroAvatar from "@/assets/svgs/little-astro-avatar.svg";
import CadVisualsAvatar from "@/assets/svgs/3dcad-visuals-avatar.svg";
import AlterforceAvatar from "@/assets/svgs/alertforce-avatar.svg";
import AyoaAvatar from "@/assets/svgs/ayoa-avatar.svg";
import CasabotanicaAvatar from "@/assets/svgs/casabotanica-avatar.svg";
import ExpressAvatar from "@/assets/svgs/express-conveyancing-avatar.svg";
import GameArtAvatar from "@/assets/svgs/game-art-brain-avatar.svg";
import HomecareAvatar from "@/assets/svgs/homecare-avatar.svg";
import LoopAvatar from "@/assets/svgs/loop-avatar.svg";
import PolymaxAvatar from "@/assets/svgs/polymax-avatar.svg";
import SafetyRacAvatar from "@/assets/svgs/safety-rac-avatar.svg";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const testimonials = [
  {
    name: "Ben",
    role: "Little Astro",
    text: `“Fantastic! One of the best! Hassan and his team are really very talented and built an outstanding website”`,
    avatar: LittleAstroAvatar,
  },
  {
    name: "Sandra",
    role: "Homecare",
    text: `“It was a pleasure working with CreativePixels on designing our brand new website. I highly recommend his service.”`,
    avatar: HomecareAvatar,
  },
  {
    name: "Alex",
    role: "Loop",
    text: `“CreativePixels did an incredible job helping us to create branding material from scratch. They were extremely flexible, and exceeded our expectations.”`,
    avatar: LoopAvatar,
  },
  {
    name: "James Brian",
    role: "AYOA",
    text: `“I would highly recommend CreativePixels, they were excellent throughout the process of designing and developing our new website.”`,
    avatar: AyoaAvatar,
  },
  {
    name: "JAnthony",
    role: "Express-conveyancing.",
    text: `“CreativePixels have been exceptional. They followed a less than ideal brief so well and came up with an end result of exactly what we had in mind. Highly recommended, and we will be continuing to use CreativePixels for our ongoing projects.”`,
    avatar: ExpressAvatar,
  },
  {
    name: "Tim",
    role: "PolyMax",
    text: `“We couldn't be happier with the work CreativePixels produced, they took our brief and elevated it to the next level. They were great to work with, and delivered everything on time. I am very happy to recommend CreativePixels.”`,
    avatar: PolymaxAvatar,
  },
];

const LpTestimonialSlider = dynamic(() => import("./LpTestimonialSlider"), {
  ssr: false,
});

const LpTestimonialSection = () => {
  return (
    <section className="bg-[#ED910C1A] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <div className="container">
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center">
            <div>
              <SectionLabel text="Testimonials" textColor="#3078FF" />
            </div>

            <div className="mt-[10px] mb-[18px] md:mt-[5px] md:mb-[14px]">
              <SectionTitle text=" Trusted by Businesses That Want Results" />
            </div>

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
          </div>

          <div className="my-[5rem] hidden grid-cols-3 gap-[1.3rem] xl:grid">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex h-full w-full flex-col justify-between gap-[3rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4rem] backdrop-blur-[10px]"
              >
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
            ))}
          </div>

          {/* Responsive */}
          <div className="my-[3rem] block w-full xl:hidden">
            <LpTestimonialSlider testimonials={testimonials} />
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default LpTestimonialSection;

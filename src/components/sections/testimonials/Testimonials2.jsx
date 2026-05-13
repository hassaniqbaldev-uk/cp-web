"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import StarIcon from "@/components/icons/StarIcon";
import TestimonialAvatar1 from "@/assets/icons/ui/testimonial-avatar-1.svg";
import LittleAstroAvatar from "@/assets/svgs/little-astro-avatar.svg";
import CadVisualsAvatar from "@/assets/svgs/3dcad-visuals-avatar.svg";
import AlertforceAvatar from "@/assets/svgs/alertforce-avatar.svg";
import AyoaAvatar from "@/assets/svgs/ayoa-avatar.svg";
import CasabotanicaAvatar from "@/assets/svgs/casabotanica-avatar.svg";
import ExpressAvatar from "@/assets/svgs/express-conveyancing-avatar.svg";
import GameArtAvatar from "@/assets/svgs/game-art-brain-avatar.svg";
import HomecareAvatar from "@/assets/svgs/homecare-avatar.svg";
import LoopAvatar from "@/assets/svgs/loop-avatar.svg";
import PolymaxAvatar from "@/assets/svgs/polymax-avatar.svg";
import SafetyRacAvatar from "@/assets/svgs/safety-rac-avatar.svg";
import AlertForceTestimonialImg from "@/assets/images/cards/alert-force-testimonial-image.png";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";
import dynamic from "next/dynamic";

const Testimonials2Slider = dynamic(
  () => import("@/components/ui/Testimonials2Slider"),
  {
    ssr: false,
  },
);

const featuredTestimonial = {
  image: AlertForceTestimonialImg,
  quote:
    "CreativePixels are a real professional and an absolute pleasure to work with. Great guiding advice, exceeded my expectations and overall an absolute treasure and asset for our business. Thank you, we truly appreciate all of your contributions and we look forward to continuing to work together.",
  name: "Brendan Torazzi",
  role: "Alertforce",
  avatar: AlertforceAvatar,
};

const testimonials = [
  {
    rating: 5,
    text: "Fantastic! One of the best! Hassan and his team are really very talented and built an outstanding website",
    name: "Ben",
    company: "Little Astro",
    avatar: LittleAstroAvatar,
  },
  {
    rating: 5,
    text: "It was a pleasure working with CreativePixels on designing our brand new website. I highly recommend his service.",
    name: "Sandra",
    company: "Homecare",
    avatar: HomecareAvatar,
  },
  {
    rating: 5,
    text: "CreativePixels did an incredible job helping us to create branding material from scratch. They were extremely flexible, and exceeded our expectations.",
    name: "Alex",
    company: "Loop",
    avatar: LoopAvatar,
  },
  {
    rating: 5,
    text: "I would highly recommend CreativePixels, they were excellent throughout the process of designing and developing our new website.",
    name: "James Brian",
    company: "AYOA",
    avatar: AyoaAvatar,
  },
  {
    rating: 5,
    text: "CreativePixels have been exceptional. They followed a less than ideal brief so well and came up with an end result of exactly what we had in mind. Highly recommended, and we will be continuing to use CreativePixels for our ongoing projects.",
    name: "Anthony",
    company: "Express-conveyancing.",
    avatar: ExpressAvatar,
  },
  {
    rating: 5,
    text: "We couldn't be happier with the work CreativePixels produced, they took our brief and elevated it to the next level. They were great to work with, and delivered everything on time. I am very happy to recommend CreativePixels.",
    name: "Tim",
    company: "PolyMax",
    avatar: PolymaxAvatar,
  },
  {
    rating: 5,
    text: "CreativePixels are a real professional and an absolute pleasure to work with. Great guiding advice, exceeded my expectations and overall an absolute treasure and asset for our business. Thank you, we truly appreciate all of your contributions and we look forward to continuing to work together.",
    name: "Brendan Torazzi",
    company: "Alertforce",
    avatar: AlertforceAvatar,
  },
  {
    rating: 5,
    text: "I had the pleasure of working with CreativePixels on the development of my health and safety consultancy website, and I couldn’t be more pleased with the outcome. CreativePixels developed the site in WordPress, and from start to finish, the team were incredibly helpful, friendly, and professional. They took the time to understand my needs and provided valuable insights that helped bring the vision of my website to life. Their attention to detail and dedication to making sure everything was perfect really stood out. I highly recommend CreativePixels for anyone looking for a talented and approachable web design team!",
    name: "Abdul",
    company: "Safety Rac",
    avatar: SafetyRacAvatar,
  },
  {
    rating: 5,
    text: "CreativePixels were fantastic to work with. Nothing ever felt like too much trouble, and the team went above and beyond to keep the project moving. They delivered the website on time and within budget, while also helping create missing content where needed to keep everything on schedule. We would absolutely work with CreativePixels again and are continuing to use their services for ongoing maintenance and SEO support.",
    name: "Scott Burkhardt",
    company: "Casabotanica",
    avatar: CasabotanicaAvatar,
  },
  {
    rating: 5,
    text: "CreativePixels are the best website developers I have ever worked with! That is saying a lot as I have had circa 10 websites built in the last 7 years, with many different developers. Their design skills are amazing and they gave me better ideas than my own for the new website they built. They listen well to a brief and give honest feedback and improvements. The site they produced for our company is truly stunning! We got a new enquiry the day it went live! That has never happened before. CreativePixels are the best :). Highly recommend.",
    name: "Gareth",
    company: "3dcad visuals",
    avatar: CadVisualsAvatar,
  },
  {
    rating: 5,
    text: "The new webpage CreativePixels created for Game Art Brain is a game-changer for our brand. CreativePixels developed a signature style that is both unique and perfectly aligned with our identity, completely revitalizing our online presence. Their work is meticulous, handling a huge number of images and complex layouts with an artist's touch. Throughout the process, the communication was exceptional and their ability to translate our feedback into a stunning reality was incredible. CreativePixels is a true design professional who delivers visionary results.",
    name: "Ahmed Omar",
    company: "Game Art Brain",
    avatar: GameArtAvatar,
  },
];

const responsiveTestimonials = [
  {
    rating: 5,
    text: "Fantastic! One of the best! Hassan and his team are really very talented and built an outstanding website",
    name: "Ben",
    company: "Little Astro",
    avatar: LittleAstroAvatar,
  },
  {
    rating: 5,
    text: "It was a pleasure working with CreativePixels on designing our brand new website. I highly recommend his service.",
    name: "Sandra",
    company: "Homecare",
    avatar: HomecareAvatar,
  },
  {
    rating: 5,
    text: "CreativePixels did an incredible job helping us to create branding material from scratch. They were extremely flexible, and exceeded our expectations.",
    name: "Alex",
    company: "Loop",
    avatar: LoopAvatar,
  },
  {
    rating: 5,
    text: "I would highly recommend CreativePixels, they were excellent throughout the process of designing and developing our new website.",
    name: "James Brian",
    company: "AYOA",
    avatar: AyoaAvatar,
  },
];

const Testimonials2 = () => {
  const lastIndex = testimonials.length - 1;

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
            {/* Featured Testimonial - Left Column (row-span-2) */}
            <div className="row-span-2 flex h-full w-full flex-col items-start justify-between gap-[4rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] pt-[3rem] pb-[4.1rem] backdrop-blur-[10px]">
              <div className="flex flex-col gap-[2rem]">
                <div className="flex h-[20rem] w-full overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={featuredTestimonial.image}
                    alt="Card Image"
                    width={319}
                    height={319}
                    className="size-full object-cover object-top-left"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-start gap-[1.9rem] text-left">
                  <ul className="flex items-center gap-[3px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <li key={index}>
                        <StarIcon color="#FFBF00" height="20" width="20" />
                      </li>
                    ))}
                  </ul>

                  <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                    {featuredTestimonial.quote}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[1.2rem]">
                <div className="flex overflow-hidden rounded-full">
                  <Image
                    src={featuredTestimonial.avatar}
                    alt="Avatar Image"
                    width={56}
                    height={56}
                    unoptimized
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                    {featuredTestimonial.name}
                  </h6>

                  <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                    {featuredTestimonial.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Regular Testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${index === lastIndex ? "col-span-2" : ""} flex h-full w-full flex-col justify-between gap-[4rem] rounded-[2rem] border border-[#E4E3E8] bg-white px-[3rem] py-[4.1rem] backdrop-blur-[10px]`}
              >
                <div className="flex flex-col items-start gap-[1.9rem] text-left">
                  <ul className="flex items-center gap-[3px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li key={i}>
                        <StarIcon color="#FFBF00" height="20" width="20" />
                      </li>
                    ))}
                  </ul>

                  <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex items-center gap-[1.2rem]">
                  <div className="flex overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt="Avatar Image"
                      width={56}
                      height={56}
                      unoptimized
                    />
                  </div>

                  <div className="flex flex-col items-start text-left">
                    <h6 className="text-[1.8rem] leading-[2.6rem] font-semibold tracking-normal text-[#312749]">
                      {testimonial.name}
                    </h6>

                    <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#625C70]">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionEffect>

        {/* Responsive Swiper */}
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.6}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="my-[3rem] block w-full xl:hidden">
            <Testimonials2Slider testimonials={responsiveTestimonials} />
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default Testimonials2;

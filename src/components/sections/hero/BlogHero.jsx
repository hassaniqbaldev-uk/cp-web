"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import BlogHeroBg from "@/assets/images/backgrounds/blog-hero-bg.webp";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Link from "next/link";
import TimelineIcon from "@/components/icons/TimelineIcon";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import { MotionEffect } from "@/components/effects/motion-effect";

const BlogHero = ({ hero }) => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[10rem] pb-[5rem] md:pt-[19.2rem] xl:px-[0rem] xl:pb-[10rem]">
        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[5.8px] left-[12px] h-[8rem] w-[4rem] rotate-[25deg] opacity-40 md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape2 className="absolute top-[27rem] right-[4rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-60 md:right-[8rem] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
            >
              <div>
                <SectionLabel text="Thinking & Research" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.15}
            >
              <h1 className="my-[1.4rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8.5rem]">
                <span className="block">Insights for the</span>{" "}
                <span className="bg-gradient-pink-blue bg-clip-text text-transparent">
                  digital age.
                </span>
              </h1>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
              fade
              zoom
              delay={0.3}
            >
              <div>
                <SectionDescription
                  text="Deep dives into strategy, design, and technology. No fluff, just
              actionable advice for digital leaders."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          <MotionEffect
            slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            delay={0.45}
          >
            <div
              style={{
                boxShadow: "0px 12px 40px 0px #00000014",
              }}
              className="relative mt-[5rem] h-[45rem] w-full overflow-hidden rounded-[3rem] md:mt-[6rem] md:h-[51.5rem]"
            >
              {/*Background Image*/}
              <Image
                src={hero.coverImage.asset.url}
                alt={hero.title}
                fill
                priority
                className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
                unoptimized
              />

              <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center p-[2rem] text-center md:p-[5rem] xl:items-start xl:text-left">
                <div className="flex items-center gap-[1.2rem]">
                  <span className="inline-flex h-[2.8rem] items-center justify-center rounded-[20rem] bg-[#FF37B3] px-[1.2rem] text-center text-[1.1rem] leading-[2.4rem] font-bold tracking-normal text-white md:text-[1.4rem]">
                    {hero.category}
                  </span>

                  <div className="inline-flex items-center justify-center gap-[6px] text-center">
                    <i className="inline-flex size-[1.4rem] items-center justify-center">
                      <TimelineIcon color="#ffffff" />
                    </i>

                    <span className="text-[1.1rem] leading-[2.4rem] font-bold tracking-normal text-white md:text-[1.4rem]">
                      {hero.readTime} MIN READ
                    </span>
                  </div>
                </div>

                <div className="mt-[2rem] max-w-[55.7rem] md:mt-[4rem]">
                  <SectionTitle text={hero.title} textColor="#FFFFFF" />
                </div>

                <p className="mt-[2rem] mb-[4rem] max-w-[50.8rem] text-[1.6rem] leading-[2.2rem] font-medium tracking-normal text-white md:mb-[6rem] md:text-[1.8rem] md:leading-[2.8rem]">
                  {hero.excerpt}
                </p>

                <Link
                  href={`/blog/${hero.slug.current}`}
                  style={{
                    color: "#FF37B3",
                  }}
                  className="inline-flex items-center gap-[.8rem] text-[1.4rem] leading-[1.4rem] font-semibold tracking-normal md:text-[1.6rem]"
                >
                  <span>Read Article</span>{" "}
                  <i>
                    <RightArrowIcon color="#FF37B3" />
                  </i>
                </Link>
              </div>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default BlogHero;

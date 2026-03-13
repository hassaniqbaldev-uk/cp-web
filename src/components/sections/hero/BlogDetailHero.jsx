"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/contact-hero-bg.webp";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { MotionEffect } from "@/components/effects/motion-effect";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import { usePathname } from "next/navigation";

const BlogDetailHero = ({ post }) => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <>
      <section className="relative w-full px-[2rem] pt-[10rem] pb-[5rem] md:pt-[20rem] xl:px-[0rem] xl:pb-[20rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        <div className="relative z-[10] container">
          <MotionEffect
            slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            zoom
          >
            <div className="flex flex-wrap items-center gap-[1rem] text-[1.4rem] leading-[1.8rem] font-medium tracking-[-0.02em] text-white uppercase md:gap-[2.5rem] md:text-[1.8rem] md:leading-[2rem] md:font-bold">
              {/* HOME */}
              <Link
                href="/"
                className={`transition-colors ${
                  isActive("/")
                    ? "text-[#FF37B3]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                HOME
              </Link>

              <i className="inline-flex size-[1.2rem] -rotate-90 items-center justify-center stroke-white text-center">
                <ChevronDownIcon height="6" width="10" />
              </i>

              {/* BLOG */}
              <Link
                href="/blog"
                className={`transition-colors ${
                  pathname.startsWith("/blog")
                    ? "text-[#FF37B3]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                BLOGS
              </Link>

              <i className="inline-flex size-[1.2rem] -rotate-90 items-center justify-center stroke-white text-center">
                <ChevronDownIcon height="6" width="10" />
              </i>

              {/* CURRENT POST (always active, not clickable) */}
              <span className="text-white">{post.title}</span>
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            zoom
            delay={0.15}
          >
            <h1 className="mt-[3.4rem] mb-[4rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7rem] xl:text-[7rem] xl:leading-[8rem]">
              {post.title}
            </h1>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }} transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fade
            delay={0.3}
          >
            <div
              style={{
                boxShadow: "0px 12px 40px 0px #00000014",
              }}
              className="flex h-[25rem] w-full items-center justify-center overflow-hidden rounded-[2rem] text-center md:h-[40rem] md:rounded-[3rem] lg:h-[51.5rem] xl:mb-[-44rem]"
            >
              <Image
                src={post.coverImage.asset.url}
                width={1200}
                height={515}
                alt="Cover Image"
                className="size-full object-cover"
                unoptimized
              />
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};

export default BlogDetailHero;

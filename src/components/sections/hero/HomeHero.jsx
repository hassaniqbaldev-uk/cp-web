"use client";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";
import HomeHeroCardImg from "@/assets/images/cards/home-hero-card-img.webp";
import HomeHeroLoginBox from "@/assets/images/hero/home-hero-login-box.svg";
import HomeHeroLogo3d from "@/assets/svgs/home-hero-logo-3d.svg";
import HomeHeroTooltip1 from "@/assets/images/hero/home-hero-tooltip-1.svg";
import HomeHeroTooltip2 from "@/assets/images/hero/home-hero-tooltip-2.svg";
import HomeHeroLogoShape2 from "@/assets/svgs/home-hero-logo-shape-2.svg";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { CLIENT_LOGO } from "@/contants";
import SectionDescription from "@/components/ui/SectionDescription";
import { motion } from "framer-motion";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import Counter from "@/components/ui/Counter";
import useMousePosition from "@/utils/useMousePosition";
import Cursor from "@/assets/svgs/you-cursor.svg";
import { MotionEffect } from "@/components/effects/motion-effect";

const HomeHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mouse = useMousePosition();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      {mouse && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[100] hidden items-center justify-center opacity-0 xl:flex"
          animate={{
            x: mouse.x - 27,
            y: mouse.y - 27,
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        >
          <Image
            src={Cursor}
            width={54}
            height={34}
            alt="Cursor"
            className="size-[5.4rem]"
            unoptimized
          />
        </motion.div>
      )}

      <section className="relative w-full overflow-hidden pt-[10rem] pb-[4rem] md:pt-[20rem]">
        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[70px] left-[-10px] h-[8rem] w-[4rem] rotate-[25deg] md:top-[150px] md:h-[18.4rem] md:w-[9.1rem] xl:top-[5.8px]" />
        </div>

        <div className="relative z-[10] container px-[2rem] lg:px-[0rem]">
          <div className="flex w-full flex-col items-center gap-[4rem] md:gap-[9.4rem] xl:flex-row xl:items-start">
            <div className="flex w-[27.5rem] flex-col items-center text-center md:w-[63rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{
                  direction: "down",
                }}
                fade
                zoom
              >
                <div className="flex flex-col-reverse items-center gap-[1.2rem] xl:flex-row">
                  <button
                    data-cal-namespace="15min"
                    data-cal-link="hassan-iqbal-mznzu9/15min"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    className="inline-flex h-[3.2rem] items-center justify-center gap-[5px] rounded-[20rem] border border-white/20 bg-[#DBD5DD1A] px-[1rem] py-[1rem] md:h-[4rem] md:gap-[1rem] md:px-[2rem] md:py-[.8rem]"
                  >
                    <div className="relative size-[1.1rem] md:size-[1.8rem]">
                      <div className="absolute top-1/2 left-1/2 size-[1.1rem] -translate-1/2 animate-ping rounded-full bg-[#FF37B3]/20 md:size-[1.8rem]" />
                      <div className="absolute top-1/2 left-1/2 size-[6px] -translate-1/2 rounded-full bg-[#FF37B3] md:size-[10px]" />
                    </div>

                    <span className="text-[1.1rem] leading-[2.4rem] font-medium text-white md:text-[1.6rem]">
                      Book your FREE 2026 strategy call today
                    </span>
                  </button>
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{
                  direction: "down",
                }}
                fade
                zoom
                delay={0.15}
              >
                <h1 className="mt-[1.5rem] mb-[1rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                  <span className="block overflow-hidden">
                    <span className="block">Grow your digital</span>
                  </span>

                  <span className="block overflow-hidden">
                    <span className="block">presence with real</span>
                  </span>

                  <span className="block overflow-hidden">
                    <span className="bg-gradient-yellow-orange block bg-clip-text text-transparent">
                      human-led strategy
                    </span>
                  </span>
                </h1>
              </MotionEffect>

              <MotionEffect
                slide={{
                  direction: "down",
                }}
                fade
                zoom
                delay={0.3}
              >
                <div className="mb-[3rem] max-w-[62.8rem]">
                  <SectionDescription
                    text="Smart websites, standout branding, and ongoing support
                everything you need to grow with confidence."
                    textColor="#FFFFFF"
                  />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{
                  direction: "down",
                }}
                fade
                zoom
                delay={0.45}
              >
                <div>
                  <GradientButton text="Book with Hassan" />
                </div>
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{
                direction: "down",
              }}
              fade
              zoom
              delay={0.45}
            >
              <div className="w-[28.7rem] md:w-[42.4rem]">
                <div
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                  className="relative z-[5] flex h-[26.9rem] w-[28.7rem] cursor-none items-center justify-center md:h-[41.5rem] md:w-[42.4rem]"
                >
                  <Image
                    src={HomeHeroCardImg}
                    alt="Card Image"
                    width={424}
                    height={415}
                    className="h-[20.7rem] w-[21.1rem] md:h-[41.5rem] md:w-[42.4rem]"
                    unoptimized
                  />

                  <div className="absolute top-[-1.5rem] left-[.5rem] h-[6.8rem] w-[3.4rem] rotate-[34deg] md:top-[-10.5rem] md:left-[-3.8rem] md:h-[17.1rem] md:w-[8.5rem]">
                    <Image
                      src={HomeHeroLogoShape2}
                      alt="Card Logo Shape"
                      width={85}
                      height={171}
                      unoptimized
                    />
                  </div>

                  <div className="absolute top-[5rem] left-[2rem] h-[1.8rem] w-[5.3rem] md:top-[4.3rem] md:left-[-3.8rem] md:h-[3.8rem] md:w-[10.7rem]">
                    <Image
                      src={HomeHeroTooltip1}
                      alt="Card Tooltip"
                      width={107}
                      height={38}
                      unoptimized
                    />
                  </div>

                  <div className="absolute right-[-.5rem] bottom-[8rem] h-[1.8rem] w-[5.3rem] md:right-[-8.8rem] md:bottom-[10.8rem] md:h-[3.8rem] md:w-[10.7rem]">
                    <Image
                      src={HomeHeroTooltip2}
                      alt="Card Tooltip"
                      width={108}
                      height={38}
                      unoptimized
                    />
                  </div>

                  <div className="absolute bottom-[-7rem] left-[2rem] h-[13.6rem] w-[6.1rem] rotate-[-9deg] md:left-[-5rem] md:w-[12.4rem] md:rotate-[-8.7deg]">
                    <Image
                      src={HomeHeroLogo3d}
                      alt="Card Logo"
                      width={124}
                      height={136}
                      unoptimized
                    />
                  </div>

                  <div
                    style={{
                      boxShadow: "30px 24px 64px 0px #426BFD6E",
                    }}
                    className="absolute top-[.5rem] right-[0rem] flex size-[7.4rem] flex-col items-start justify-center rounded-[1rem] bg-[#0073F8] px-[1rem] text-left md:top-[-4.7rem] md:right-[-6.8rem] md:size-[15rem] md:rounded-[2rem] md:px-[2rem]"
                  >
                    <span className="text-[.7rem] font-bold tracking-normal text-white md:text-[1.6rem]">
                      Projects
                    </span>

                    <hr className="mt-[.7rem] mb-[.3rem] w-full border-t border-white md:mt-[1.6rem] md:mb-[.8rem]" />

                    <div className="inline-flex items-center text-[2.3rem] leading-[2.9rem] font-bold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
                      <Counter value={200} />{" "}
                      <span className="text-[#FFD900]">+</span>
                    </div>

                    <span className="text-[.5rem] font-medium text-white md:text-[1.2rem]">
                      Project Completed
                    </span>
                  </div>

                  <div className="absolute right-[1rem] bottom-[.5rem] h-[5.6rem] w-[9rem] overflow-hidden rounded-[.5rem] backdrop-blur-[20px] md:right-[-5.5rem] md:bottom-[-4.9rem] md:h-[11.3rem] md:w-[18.2rem] md:rounded-[1rem]">
                    <Image
                      src={HomeHeroLoginBox}
                      alt="Card Box"
                      width={182}
                      height={113}
                      unoptimized
                    />

                    <motion.div
                      initial="initial"
                      whileHover="hover"
                      className="absolute top-1/2 left-1/2 -translate-1/2"
                    >
                      <Link
                        href="/case-studies"
                        className="text-text relative inline-flex h-[1.2rem] cursor-none items-center justify-center overflow-hidden rounded-[4rem] bg-[#FFD900] px-[1.5rem] text-center text-[.6rem] font-bold tracking-normal whitespace-nowrap md:h-[2.5rem] md:px-[3rem] md:text-[1.2rem]"
                      >
                        <motion.span
                          variants={{
                            initial: { y: "0%" },
                            hover: { y: "-130%" },
                          }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="block"
                        >
                          Our Work
                        </motion.span>
                        <motion.span
                          variants={{
                            initial: { y: "100%" },
                            hover: { y: "0%" },
                          }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          Our Work
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </MotionEffect>
          </div>

          <MotionEffect
            slide={{
              direction: "down",
            }}
            fade
            zoom
            delay={0.6}
          >
            <hr className="mt-[3rem] mb-[2.4rem] w-full border-t border-white/15 md:mt-[8rem]" />

            <div
              className="w-full"
              style={{
                maskImage:
                  "linear-gradient(to right,rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%,rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <Marquee speed={30} pauseOnHover gradient={false}>
                {CLIENT_LOGO.map((logo, index) => (
                  <div
                    key={index}
                    className="mx-[1.3rem] flex items-center justify-center md:mx-[2.7rem]"
                  >
                    <Link
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={`object-contain opacity-70 grayscale-100 transition-all duration-300 hover:opacity-100 hover:grayscale-0 ${logo.size}`}
                        priority={index < 3}
                        unoptimized
                      />
                    </Link>
                  </div>
                ))}
              </Marquee>
            </div>
          </MotionEffect>
        </div>
      </section>
    </>
  );
};
export default HomeHero;

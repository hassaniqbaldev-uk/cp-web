"use client";

import RightArrowIcon from "@/components/icons/RightArrowIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import { MotionEffect } from "@/components/effects/motion-effect";
import SectionDescription from "@/components/ui/SectionDescription";
import dynamic from "next/dynamic";

const ResourcesSlider = dynamic(
  () => import("@/components/ui/ResourcesSlider"),
  {
    ssr: false,
    loading: () => <div className="h-[55rem]" />, // placeholder height to prevent layout shift
  },
);

const Resources = ({ legal = [] }) => {
  return (
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5rem]">
            <div className="flex w-full flex-col items-center justify-center text-center">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <SectionTitle text="Client Resources" textColor="#FFFFFF" />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div>
                  <SectionDescription
                    text="These documents apply when working with CreativePixels as a client, agency, or partner."
                    textColor="#FFFFFF"
                  />
                </div>
              </MotionEffect>
            </div>

            <div className="hidden w-full grid-cols-3 gap-[3rem] xl:grid">
              {legal.map((item, idx) => {
                return (
                  <MotionEffect
                    key={idx}
                    slide={{ direction: "down" }}
                    fade
                    inView
                    delay={0.4 + idx * 0.15}
                    transition={{
                      type: "tween",
                      duration: 1.0,
                      ease: "easeOut",
                    }}
                  >
                    <div className="client-resources-card">
                      <div className="flex h-full flex-col items-start justify-between p-[3rem] text-left">
                        <div className="flex flex-col items-start">
                          <i
                            style={{
                              background: item.color,
                            }}
                            className="inline-flex size-[5.8rem] min-h-[5.8rem] min-w-max items-center justify-center rounded-[1.5rem]"
                          >
                            <Image
                              src={item.icon.asset.url}
                              alt={item.title}
                              width={30}
                              height={30}
                              unoptimized
                            />
                          </i>

                          <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                            {item.title}
                          </h4>

                          <p className="mt-[1rem] mb-[3rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                            {item.excerpt}
                          </p>
                        </div>

                        <Link
                          href={`/legal/${item.slug.current}`}
                          className="relative z-[10] inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-white"
                        >
                          More Details
                          <RightArrowIcon color="#ffffff" />
                        </Link>
                      </div>
                    </div>
                  </MotionEffect>
                );
              })}
            </div>

            {/* Responsive */}
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              className="w-full"
            >
              <div className="block w-full xl:hidden">
                <ResourcesSlider legal={legal} />
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;

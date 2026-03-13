"use client";
import Image from "next/image";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import { urlFor } from "@/sanity/caseStudies.image";
import { MotionEffect } from "@/components/effects/motion-effect";

const TheChallenge = ({ caseStudy }) => {
  return (
    <>
      <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <div className="container">
          <div className="flex flex-col gap-[2rem] md:gap-[5rem]">
            <div className="flex w-full flex-col items-center justify-between gap-[2rem] text-center xl:flex-row xl:gap-[5rem] xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-[2.3rem] leading-[3rem] font-bold tracking-[-0.03em] text-[#263238] md:text-[4.8rem] md:leading-[6rem]">
                  {caseStudy.theChallenge.title}
                </h2>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <p className="max-w-[65rem] text-[1.6rem] leading-[2.6rem] font-medium tracking-normal text-[#263238] md:text-[2.2rem] md:leading-[4rem]">
                  {caseStudy.theChallenge.description}
                </p>
              </MotionEffect>
            </div>

            <div className="flex w-full flex-col items-center gap-[4rem] xl:flex-row xl:items-stretch">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <div className="flex h-full w-full items-center justify-center md:w-[57.8rem]">
                  <Image
                    src={urlFor(caseStudy.theChallenge.cardImage1)
                      .width(578)
                      .height(820)
                      .url()}
                    alt={caseStudy.theChallenge.title}
                    width={578}
                    height={820}
                    unoptimized
                  />
                </div>
              </MotionEffect>

              <div className="flex w-full flex-col justify-between gap-[5rem] md:w-[58.4rem]">
                <ul className="flex flex-col gap-[2rem] md:gap-[3.8rem]">
                  {caseStudy.theChallenge.points.map((item, idx) => (
                    <MotionEffect
                      key={idx}
                      slide={{ direction: "down" }}
                      fade
                      inView
                      delay={0.1 + idx * 0.15}
                      transition={{
                        type: "tween",
                        duration: 1.0,
                        ease: "easeOut",
                      }}
                    >
                      <li className="inline-flex gap-[1rem] md:gap-[2rem]">
                        <i>
                          <CheckMarkIcon
                            width="26"
                            height="26"
                            color="#263238"
                            className="size-[1.5rem] md:size-[2.6rem]"
                          />
                        </i>
                        <span className="max-w-[50rem] text-[1.6rem] leading-[2rem] tracking-normal text-[#263238] md:text-[2.2rem] md:leading-[2.8rem]">
                          {item}
                        </span>
                      </li>
                    </MotionEffect>
                  ))}
                </ul>

                <MotionEffect
                  slide={{ direction: "down" }}
                  fade
                  inView
                  delay={0.25}
                  transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
                >
                  <div className="flex h-full w-full items-end justify-center">
                    <Image
                      src={urlFor(caseStudy.theChallenge.cardImage2)
                        .width(584)
                        .height(375)
                        .url()}
                      alt={caseStudy.theChallenge.title}
                      width={584}
                      height={375}
                      unoptimized
                    />
                  </div>
                </MotionEffect>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheChallenge;

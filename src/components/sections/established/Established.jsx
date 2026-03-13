"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
import SendIcon from "@/assets/icons/ui/send-icon.svg";
import BusinessIcon from "@/assets/icons/ui/business-icon.svg";
import Image from "next/image";
import Counter from "@/components/ui/Counter";
import { MotionEffect } from "@/components/effects/motion-effect";

const Established = () => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center gap-[4.6rem] md:gap-[8rem] xl:flex-row">
            <div className="flex w-[30rem] flex-col items-center text-center md:w-[58.5rem] xl:items-start xl:text-left">
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
                    text="Established in 2018"
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
                <div className="mt-[1rem] mb-[2rem]">
                  <SectionTitle text="Not just another agency. Your long-term digital partner." />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <p className="mb-[4rem] text-[1.8rem] leading-[2.8rem] font-normal text-[#625C70]">
                  In an industry of &quot;churn and burn,&quot; we&apos;ve been
                  building lasting relationships for over a decade. We
                  don&apos;t just ship code; we solve business problems. <br />{" "}
                  <br /> Founded by Hassan Iqbal, CreativePixels is a human-led
                  agency that combines data-driven strategy with world-class
                  design. No jargon, no hidden fees just real results.
                </p>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.55}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div>
                  <PrimaryButton
                    color="#312749"
                    text="Read Our Story"
                    href="/about"
                    textColor="#ffffff"
                  />
                </div>
              </MotionEffect>
            </div>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative h-[27.3rem] w-[27.5rem] md:h-[53.6rem] md:w-[53.8rem]">
                <div className="absolute top-0 left-0 inline-flex size-[13.6rem] flex-col items-center justify-center gap-[.7rem] rounded-full bg-[#0073F8] text-center md:size-[26.8rem] md:gap-[1.4rem]">
                  <span className="text-[3.4rem] leading-[3rem] font-semibold tracking-[-0.02em] text-white md:text-[6.8rem] md:leading-[6rem]">
                    <Counter value={10} prefix="£" suffix="M+" />
                  </span>

                  <span className="text-[.8rem] leading-[1rem] font-bold tracking-normal text-white md:text-[1.6rem] md:leading-[2rem]">
                    Client Revenue <br /> Generated
                  </span>
                </div>

                <div className="absolute top-0 right-0 h-[14.7rem] w-[13.8rem] md:h-[28.9rem] md:w-[27rem]">
                  <div className="absolute inset-0 rounded-[1.5rem] bg-[#FFD900] md:rounded-[3rem]" />

                  <div className="absolute bottom-0 left-0 z-[1] flex h-[13.6rem] w-full flex-col items-start justify-between rounded-[1.5rem] bg-[#ED910C] px-[1.4rem] pt-[1.4rem] pb-[1.7rem] text-left md:h-[26.8rem] md:rounded-[3rem] md:px-[3rem] md:pt-[2.8rem] md:pb-[3.3rem]">
                    <i>
                      <Image
                        src={SendIcon}
                        alt="Icon"
                        width={44}
                        height={44}
                        className="size-[2.2rem] md:size-[4.4rem]"
                        unoptimized
                      />
                    </i>

                    <div className="flex flex-col items-start">
                      <span className="text-[3.4rem] leading-[3rem] font-semibold tracking-[-0.02em] text-white md:text-[6.8rem] md:leading-[6rem]">
                        <Counter value={200} suffix="+" />
                      </span>

                      <span className="text-[.8rem] leading-[1rem] font-bold tracking-normal text-white md:text-[1.6rem] md:leading-[2rem]">
                        Projects Delivered
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[14.7rem] w-[13.8rem] md:h-[28.9rem] md:w-[27rem]">
                  <div className="absolute inset-0 rounded-[1.5rem] bg-[#B21F81] md:rounded-[3rem]" />

                  <div className="absolute top-0 left-0 z-[1] flex h-[13.6rem] w-full flex-col items-start justify-between rounded-[1.5rem] bg-[#FF12A4] px-[1.5rem] pt-[1.6rem] pb-[1.8rem] text-left md:h-[26.8rem] md:rounded-[3rem] md:px-[3rem] md:pt-[2.8rem] md:pb-[3.3rem]">
                    <i>
                      <Image
                        src={BusinessIcon}
                        alt="Icon"
                        width={44}
                        height={44}
                        className="size-[2.2rem] md:size-[4.4rem]"
                        unoptimized
                      />
                    </i>

                    <div className="flex flex-col items-start">
                      <span className="text-[3.4rem] leading-[3rem] font-semibold tracking-[-0.02em] text-white md:text-[6.8rem] md:leading-[6rem]">
                        <Counter value={12} suffix="+" />
                      </span>

                      <span className="text-[.8rem] leading-[1rem] font-bold tracking-normal text-white md:text-[1.6rem] md:leading-[2rem]">
                        Years in Business
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 bottom-0 inline-flex size-[13.6rem] flex-col items-center justify-center gap-[.7rem] rounded-full bg-[#618402] text-center md:size-[26.8rem] md:gap-[1.4rem]">
                  <span className="text-[3.4rem] leading-[3rem] font-semibold tracking-[-0.02em] text-white md:text-[6.8rem] md:leading-[6rem]">
                    <Counter value={100} suffix="%" />
                  </span>

                  <span className="text-[.8rem] leading-[1rem] font-bold tracking-normal text-white md:text-[1.6rem] md:leading-[2rem]">
                    Human-Led Strategy
                  </span>
                </div>
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};
export default Established;

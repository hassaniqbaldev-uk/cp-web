"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionLabel from "@/components/ui/SectionLabel";
import SendIcon from "@/assets/icons/ui/send-icon.svg";
import BusinessIcon from "@/assets/icons/ui/business-icon.svg";
import Image from "next/image";
import Counter from "@/components/ui/Counter";
import { MotionEffect } from "@/components/effects/motion-effect";
import { FOUNDED_YEAR, YEARS_IN_BUSINESS } from "@/content/company";

const LpEstablishedSection = () => {
  return (
    <>
      <section className="px-[2rem] pt-[5rem] xl:px-[0rem] xl:pt-[10rem]">
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <div className="container">
            <div className="flex flex-col items-center gap-[4.6rem] md:gap-[8rem] xl:flex-row">
              <div className="flex w-[30rem] flex-col items-center text-center md:w-[58.5rem] xl:items-start xl:text-left">
                <div>
                  <SectionLabel text="ABOUT" textColor="#3078FF" />
                </div>

                <div className="mt-[1rem] mb-[2rem]">
                  <SectionTitle
                    text={`Built by Hassan Iqbal in ${FOUNDED_YEAR} Because Too Many Businesses Were Getting Burned by Agencies That Disappeared After Launch.`}
                  />
                </div>

                <p className="mb-[4rem] text-[1.8rem] leading-[2.8rem] font-normal text-[#625C70]">
                  In an industry full of churn-and-burn agencies, we&apos;ve
                  spent over {YEARS_IN_BUSINESS} years doing things
                  differently. We don&apos;t
                  just ship code we solve business problems and stick around to
                  make sure they stay solved. <br /> <br />
                  CreativePixels is a human-led agency that combines data-driven
                  strategy with design that works. No jargon, no hidden fees,
                  just clear results.
                </p>
              </div>

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
                        <Counter value={YEARS_IN_BUSINESS} suffix="+" />
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
            </div>
          </div>
        </MotionEffect>
      </section>
    </>
  );
};
export default LpEstablishedSection;

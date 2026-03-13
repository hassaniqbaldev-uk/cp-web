"use client";
import Image from "next/image";
import ClientReviewBg from "@/assets/images/backgrounds/client-review-bg.webp";
import SectionTitle from "@/components/ui/SectionTitle";
import CloseEye from "@/components/decorative-elements/close-eye";
import Quote from "@/assets/svgs/quote.svg";
import { MotionEffect } from "@/components/effects/motion-effect";

const ClientReview = () => {
  return (
    <>
      <section className="w-full overflow-hidden px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.1}
          transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
        >
          <div className="relative container overflow-hidden rounded-[2rem] px-[2rem] py-[4rem] md:px-[3rem]">
            {/*Background Image*/}
            <Image
              src={ClientReviewBg}
              alt="Background Image"
              fill
              priority
              className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
              unoptimized
            />

            <div className="relative z-[10] mb-[3rem] flex items-center justify-between gap-[3rem]">
              <SectionTitle text="Client Review" textColor="#ffffff" />
            </div>

            <div className="relative z-[10] flex w-full flex-col justify-between gap-[4rem] overflow-hidden rounded-[1.5rem] bg-white p-[2rem] md:p-[3rem] xl:flex-row">
              <div className="xl:w-[70rem]">
                <div className="flex flex-col items-start gap-[2.8rem] md:flex-row">
                  <div className="relative top-[.6rem] inline-flex min-w-max items-center justify-center">
                    <Image src={Quote} width={27} height={24} alt="Icon" />
                  </div>

                  <p className="text-[1.8rem] leading-[2.4rem] font-medium tracking-normal text-[#263238] md:text-[2.2rem] md:leading-[3.3rem]">
                    &quot;From beginning to end, it was an incredible
                    experience. Working with the entire team was enjoyable due
                    to their creativity and expertise. <br /> <br />
                    They completely understood our goals as a studio with a very
                    ambitious and distinctive website, from concept to design.
                    We are quite happy with the outcome.”
                  </p>

                  <div className="relative hidden h-[18.2rem] min-w-[.1rem] bg-[#D9D9D9] md:block">
                    <div className="absolute top-1/2 right-0 h-[7.5rem] w-[.2rem] -translate-y-1/2 bg-[#FF37B3]" />
                  </div>
                </div>

                <div className="mt-[4rem] mb-[2rem] h-[.1rem] w-full bg-[#D9D9D9]" />

                <div className="flex items-center gap-[1rem]">
                  <div className="flex size-[5.6rem] min-w-[5.6rem] items-center justify-center overflow-hidden rounded-full bg-black">
                    <CloseEye className="w-[3rem]" />
                  </div>

                  <div className="flex flex-col items-start text-left">
                    <h6 className="text-[1.4rem] leading-[2.4rem] font-semibold tracking-normal text-[#312749] md:text-[1.8rem] md:leading-[2.6rem]">
                      Agency Owner, Managing Director
                    </h6>

                    <span className="text-[1.2rem] leading-[2rem] font-medium tracking-normal text-[#625C70] md:text-[1.6rem] md:leading-[2.4rem]">
                      Award Winning Agency based in Cheshire
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex h-[25rem] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-black md:h-[50rem] xl:h-[34rem] xl:w-[34rem]">
                <CloseEye className="w-[14rem] md:w-[18rem]" />
              </div>
            </div>
          </div>
        </MotionEffect>
      </section>
    </>
  );
};

export default ClientReview;

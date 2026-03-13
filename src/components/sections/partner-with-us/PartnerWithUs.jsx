"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import PartnerWithUsBg from "@/assets/images/backgrounds/partner-with-us-bg.webp";
import PartnerWithUsCardImg from "@/assets/images/cards/partner-with-us-card-img.webp";
import PenIcon from "@/assets/icons/ui/pen-icon.svg";
import XIcon from "@/assets/icons/ui/x-icon.svg";
import CpIcon from "@/assets/icons/ui/cp-icon.svg";
import Image from "next/image";
import CheckMarkIcon3 from "@/components/icons/CheckMarkIcon3";
import { MotionEffect } from "@/components/effects/motion-effect";

const PartnerWithUs = () => {
  return (
    <>
      <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={PartnerWithUsBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center text-center">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <SectionLabel text="partner with us" textColor="#3078FF" />
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.25}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-[5px] mb-[14px]">
                <SectionTitle text="Why partner with us?" textColor="#312749" />
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
              <SectionDescription
                text="Compare the difference between hiring in-house vs partnering with CreativePixels."
                textColor="#625C70"
              />
            </MotionEffect>
          </div>

          <div className="mt-[5rem] grid w-full grid-cols-1 gap-[3.3rem] lg:grid-cols-2">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.4}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
            >
              <div className="flex w-full flex-col items-start rounded-[3rem] border border-[#FF37B3] bg-white p-[2rem] text-left md:p-[4rem]">
                <div className="relative size-[6.3rem]">
                  <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                    <i>
                      <Image
                        src={PenIcon}
                        alt="Icon"
                        width={35}
                        height={35}
                        unoptimized
                      />
                    </i>
                  </div>
                  <div
                    style={{
                      background: "#FF37B3",
                    }}
                    className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                  />
                </div>

                <h4 className="mt-[3rem] mb-[1.5rem] text-[2.2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem]">
                  Traditional Hiring
                </h4>

                <ul className="flex flex-col gap-[1rem]">
                  {[
                    "High fixed salary costs & overheads",
                    "Limited skill set of single employees",
                    "Management & HR headaches",
                    "Capacity bottlenecks during busy periods",
                    "Paying for idle time during quiet periods",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-[1.6rem]">
                      <i className="min-w-max">
                        <Image
                          src={XIcon}
                          alt="Icon"
                          width={12}
                          height={12}
                          unoptimized
                        />
                      </i>

                      <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70] md:text-[1.8rem]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.55}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
            >
              <div className="relative w-full overflow-hidden rounded-[3rem] p-[2rem] text-left md:p-[4rem]">
                {/*Background Image*/}
                <Image
                  src={PartnerWithUsCardImg}
                  alt="Background Image"
                  fill
                  priority
                  className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
                  unoptimized
                />

                <div className="relative z-[10] flex flex-col items-start text-left">
                  <div
                    style={{
                      boxShadow: "5px 5px 44px 0px #FF37B3CC",
                    }}
                    className="relative inline-flex size-[6.3rem] items-center justify-center rounded-[1.5rem] bg-[#FF37B3]"
                  >
                    <i>
                      <Image
                        src={CpIcon}
                        alt="Icon"
                        width={35}
                        height={35}
                        unoptimized
                      />
                    </i>
                  </div>

                  <h4 className="mt-[3rem] mb-[1.5rem] text-[2.2rem] font-semibold tracking-[-0.02em] text-white md:text-[2.6rem]">
                    CreativePixels Partner
                  </h4>

                  <ul className="flex flex-col gap-[1rem]">
                    {[
                      "Pay only for work delivered",
                      "Full team access (Dev, Design, SEO, Strategy)",
                      "Zero management or HR required",
                      "Infinite scalability on demand",
                      "White label - we are YOUR team",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-[1.6rem]">
                        <i className="min-w-max">
                          <CheckMarkIcon3 fillColor="#ffffff" />
                        </i>

                        <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-white md:text-[1.8rem]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs;

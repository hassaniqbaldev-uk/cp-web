"use client";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import { OPPORTUNITIES_DATA } from "@/contants";
import Image from "next/image";
import BriefcaseIcon from "@/assets/icons/ui/breifcase-icon.svg";
import LocationIcon from "@/assets/icons/ui/location-icon.svg";
import TimelineIcon from "@/components/icons/TimelineIcon";
import { MotionEffect } from "@/components/effects/motion-effect";

const Opportunities = () => {
  return (
    <>
      <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center xl:items-start">
            <MotionEffect
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.1}
              transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <SectionLabel text="Opportunities" textColor="#EE8D00" />
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
              <div className="mt-[5px] mb-[30px]">
                <SectionTitle text="Open Positions" textColor="#312749" />
              </div>
            </MotionEffect>

            <div className="flex w-full flex-col gap-[1.2rem]">
              {OPPORTUNITIES_DATA.length > 0 ? (
                OPPORTUNITIES_DATA.map((item, idx) => (
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
                    <div className="flex flex-col items-start justify-between gap-[3rem] rounded-[1.6rem] border border-[#E4E3E8] bg-[#FCFCFD] px-[4rem] py-[3.5rem] lg:flex-row lg:items-center">
                      <div className="flex flex-col items-start gap-[1rem] text-left">
                        <h4 className="text-[2rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem]">
                          {item.title}
                        </h4>

                        <ul className="flex flex-wrap items-center gap-[1rem] lg:gap-[2.4rem]">
                          <li className="inline-flex items-center gap-[8px]">
                            <i>
                              <Image
                                src={BriefcaseIcon}
                                width={18}
                                height={16}
                                alt="Icon"
                                unoptimized
                              />
                            </i>

                            <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70] md:text-[1.6rem]">
                              {item.department}
                            </span>
                          </li>

                          <li className="inline-flex items-center gap-[8px]">
                            <i>
                              <TimelineIcon
                                color="#625C70"
                                width="18"
                                height="18"
                              />
                            </i>

                            <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70] md:text-[1.6rem]">
                              {item.timing}
                            </span>
                          </li>

                          <li className="inline-flex items-center gap-[8px]">
                            <i>
                              <Image
                                src={LocationIcon}
                                width={14}
                                height={16}
                                alt="Icon"
                                unoptimized
                              />
                            </i>

                            <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70] md:text-[1.6rem]">
                              {item.location}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <PrimaryButton
                          text="Apply Now"
                          textColor="#FFFFFF"
                          bGcolor="#FF37B3"
                          href={item.href}
                        />
                      </div>
                    </div>
                  </MotionEffect>
                ))
              ) : (
                <MotionEffect
                  slide={{ direction: "down" }}
                  fade
                  inView
                  delay={0.4}
                  transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
                >
                  <div className="rounded-[1.6rem] border border-[#E4E3E8] bg-[#FCFCFD] px-[4rem] py-[5rem] text-center">
                    <p className="text-[1.8rem] font-medium tracking-[-0.02em] text-[#625C70] md:text-[2rem]">
                      No open roles at the moment. Check back soon!
                    </p>
                  </div>
                </MotionEffect>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opportunities;

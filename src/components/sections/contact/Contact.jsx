"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import ClockIcon from "@/assets/icons/ui/clock-icon.svg";
import CheckmarkIcon2 from "@/assets/icons/ui/checkmark-icon-2.svg";
import RefreshIcon from "@/assets/icons/ui/refresh-icon.svg";
import SendIcon2 from "@/assets/icons/ui/send-icon-2.svg";
import ContactAssistantImg from "@/assets/images/cards/contact-assistant-img.png";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import TestimonialAvatar1 from "@/assets/icons/ui/testimonial-avatar-1.svg";
import TestimonialAvatar2 from "@/assets/icons/ui/testimonial-avatar-2.svg";
import TestimonialAvatar3 from "@/assets/icons/ui/testimonial-avatar-3.svg";
import TestimonialAvatar4 from "@/assets/icons/ui/testimonial-avatar-4.svg";
import { MotionEffect } from "@/components/effects/motion-effect";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center gap-[4rem] xl:flex-row xl:items-start">
          <div className="flex w-[30rem] flex-col items-center text-center md:w-[56.3rem] xl:items-start xl:text-left">
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div>
                <SectionLabel text="Book a call" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="mt-[1rem] mb-[2rem]">
                <SectionTitle text="Unlock your brand's hidden potential." />
              </div>
            </MotionEffect>

            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div>
                <SectionDescription text="Stop guessing. Let's build a roadmap to scale your digital presence with a custom strategy." />
              </div>
            </MotionEffect>

            <MotionEffect
              slide={{ direction: "down" }}
              fade
              inView
              delay={0.55}
              transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
            >
              <div className="mt-[3.2rem] mb-[2.2rem] flex w-full flex-col items-start gap-[1.2rem] rounded-[2rem] border border-[#3078FF] bg-white px-[3rem] py-[3.5rem] text-left md:mt-[4rem] md:mb-[2rem] md:gap-[2.5rem]">
                <div className="flex items-start gap-[1.2rem] md:items-center">
                  <i>
                    <Image src={ClockIcon} alt="Icon" width={24} height={24} />
                  </i>

                  <h4 className="text-[1.8rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[2.2rem]">
                    Included in your free strategy:
                  </h4>
                </div>

                <ul className="grid grid-cols-1 gap-x-[5rem] gap-y-[.6rem] md:grid-cols-2 md:gap-y-[1.2rem]">
                  {[
                    "Review current position",
                    "Competitor Intel",
                    "Competitor Intel",
                    "Growth Opportunities",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-[1.2rem]">
                      <i className="inline-flex size-[2.4rem] items-center justify-center rounded-full bg-[#44b276]/20">
                        <Image
                          src={CheckmarkIcon2}
                          alt="Icon"
                          width={14}
                          height={14}
                        />
                      </i>

                      <span className="text-[1.6rem] font-semibold tracking-normal text-[#625C70]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionEffect>
          </div>

          <div
            style={{
              boxShadow: "17px 21px 34px 0px #6D6D6D1A",
            }}
            className="flex hidden h-[52.7rem] w-full flex-col overflow-hidden rounded-[2rem] border border-[#EE7621] bg-white md:w-[61.8rem]"
          >
            {/* Header */}
            <div className="flex h-[7.7rem] w-full items-center justify-between border-b border-[#B0ADB7] px-[2rem] py-[1.6rem]">
              <div className="flex items-center gap-[5px]">
                <div className="relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-amber-200 text-[1rem]">
                  <div className="absolute right-[2px] bottom-[2px] size-[1rem] rounded-full bg-[#50C461] outline-2 outline-white" />
                  Avatar
                </div>

                <div className="flex flex-col items-start text-left">
                  <h5 className="text-[2.2rem] leading-[2.5rem] font-semibold tracking-[-0.02em] text-[#312749]">
                    Pixel AI
                  </h5>

                  <div className="inline-flex items-center gap-[3px]">
                    <div className="size-[5px] rounded-full bg-[#50C461]" />

                    <span className="text-[1.6rem] leading-[2rem] font-normal tracking-normal text-[#625c70]/70">
                      Replies instantly
                    </span>
                  </div>
                </div>
              </div>

              <button className="inline-flex size-[2rem] cursor-pointer items-center justify-center">
                <i>
                  <Image src={RefreshIcon} width={20} height={20} alt="Icon" />
                </i>
              </button>
            </div>
            {/* Main */}
            <div className="flex flex-1 items-center justify-center overflow-scroll">
              <Image
                src={ContactAssistantImg}
                width={594}
                height={329}
                alt="Image"
              />
            </div>
            {/* Footer */}
            <div className="flex h-[9.1rem] w-full items-center justify-center border-t border-[#B0ADB7] p-[2rem]">
              <fieldset className="relative h-full w-full overflow-hidden rounded-[1.2rem] border border-[#B0ADB7] bg-white">
                <input
                  type="text"
                  className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                  placeholder="Type your answer..."
                />

                <button className="absolute top-1/2 right-0 inline-flex h-full w-[5rem] -translate-y-1/2 cursor-pointer items-center justify-center bg-white">
                  <i>
                    <Image src={SendIcon2} width={24} height={24} alt="Icon" />
                  </i>
                </button>
              </fieldset>
            </div>
          </div>

          {/* New Form */}
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <ContactForm />
          </MotionEffect>
        </div>
      </div>
    </>
  );
};

export default Contact;

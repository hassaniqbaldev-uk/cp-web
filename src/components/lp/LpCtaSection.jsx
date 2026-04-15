import LandingCtaBg from "@/assets/images/backgrounds/landing-cta-bg.png";
import Image from "next/image";
import PrimaryButton from "./LpPrimaryButton";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import { MotionEffect } from "../effects/motion-effect";

const LpCtaSection = () => {
  return (
    <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
      <MotionEffect
        slide={{ direction: "down" }}
        fade
        inView
        delay={0.2}
        transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative container overflow-hidden rounded-[3rem] px-[2rem] py-[3rem] md:px-[7rem] md:py-[6rem]">
          {/*Background Image*/}
          <Image
            src={LandingCtaBg}
            alt="Background Image"
            fill
            priority
            className="pointer-events-none absolute inset-0 z-[1] rounded-[3rem] object-cover select-none"
          />

          <div className="relative z-[10] flex flex-col justify-between gap-[4rem] lg:flex-row">
            <div className="w-full text-center lg:w-[52rem] lg:text-left">
              <h2 className="mb-[3.8rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
                No Risk.
                <span className="bg-gradient-pink-orange block bg-clip-text text-transparent">
                  No Obligation.
                </span>
              </h2>

              <div>
                <PrimaryButton
                  text="Start Your Risk-Free Audit"
                  textColor="#FFFFFF"
                  bGcolor="#312749"
                  href="#audit"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-[1.6rem] lg:w-[45rem]">
              {[
                "Free consultation",
                "No pressure to commit",
                "Clear next steps tailored to your business",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-[1.5rem] border-b border-[#98989866] pb-[1.6rem]"
                >
                  <i className="relative top-[.7rem] min-w-max">
                    <CheckMarkIcon color="#FF37B3" />
                  </i>{" "}
                  <span className="text-[2rem] leading-[3.2rem] font-semibold tracking-normal text-[#312749]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionEffect>
    </section>
  );
};

export default LpCtaSection;

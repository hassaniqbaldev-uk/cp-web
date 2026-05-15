import Image from "next/image";
import CpLogo from "@/assets/images/cards/3d-cp-logo.png";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import PrimaryButton from "./LpPrimaryButton";
import ServicesLogoShape from "../decorative-elements/ServicesLogoShape";
import AboutHeroLogoShape1 from "../decorative-elements/AboutHeroLogoShape1";

const LpWhySection = () => {
  return (
    <section className="relative w-full px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      {/*Background Image*/}
      <Image
        src={HeroBg}
        alt="Background Image"
        fill
        priority
        className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
      />

      {/*Background Element*/}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <ServicesLogoShape className="pointer-events-none absolute top-[2rem] right-[-1rem] h-[7.1rem] w-[5.2rem] rotate-[-34deg] select-none md:top-[50rem] md:h-[17.7rem] md:w-[12.9rem]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] select-none">
        <AboutHeroLogoShape1 className="pointer-events-none absolute top-[80rem] left-[1rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 select-none md:top-[0rem] md:left-[-4rem] md:h-[22.5rem] md:w-[11.2rem]" />
      </div>

      <div className="relative z-[10] container flex flex-col items-center justify-between gap-[5rem] xl:flex-row">
        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col md:w-[63rem]">
            <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
              <div>
                <SectionLabel text="Why choose us" textColor="#3078FF" />
              </div>

              {/* <h2 className="mt-[1.5rem] mb-[2.5rem] max-w-[50rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
                <span>Why Choose Creative Pixels for</span>{" "}
                <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                  WordPress?
                </span>
              </h2> */}

              <p className="mt-[1.5rem] mb-[2.5rem] text-[1.6rem] leading-[2.4rem] font-semibold tracking-[-0.01em] text-[#312749] md:text-[2.4rem] md:leading-[3rem]">
                Why Hundreds of UK Businesses Trust Creative Pixels With Their
                WordPress Site Most agencies hand you a website and disappear.
                We stick around because a site that doesn&apos;t perform is a
                problem for both of us.
              </p>
            </div>

            <h4 className="text-[2.2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[3.4rem]">
              Here&apos;s what makes us different:
            </h4>

            <ul className="my-[3rem] flex flex-col gap-[.8rem]">
              {[
                "We fix the root cause, not just the symptoms. No band-aid solutions that break again in 3 months",
                "You'll never be left in the dark. Clear timelines, honest quotes, and plain-English updates throughout",
                "We've handled 150+ WordPress projects. chances are, we've seen your exact problem and already know how to fix it",
                "Your site is built to grow, easy for you to manage, and ready to scale as your business does",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-[1.2rem]">
                  <i className="relative top-[.7rem] min-w-max">
                    <CheckMarkIcon color="#EE7621" height="15" width="15" />
                  </i>

                  <span className="text-[1.8rem] font-medium tracking-[2rem] tracking-normal text-[#312749]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <h4 className="mb-[5rem] max-w-[63rem] text-[2.2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[3.4rem]">
              With over 7 years in the industry and a 4.9/5 rating, we
              don&apos;t just build websites. We build websites that work.
            </h4>

            <div>
              <PrimaryButton
                text="Start Your WordPress Project"
                bGcolor="#312749"
                textColor="#ffffff"
                href="#audit"
              />
            </div>
          </div>
        </MotionEffect>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.3}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-[25rem] md:w-[35rem] xl:h-[53rem] xl:w-[49rem]">
            <Image
              src={CpLogo}
              width={490}
              height={530}
              alt="Card Image"
              className="h-full w-full"
            />
          </div>
        </MotionEffect>
      </div>
    </section>
  );
};

export default LpWhySection;

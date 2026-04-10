import Image from "next/image";
import CpLogo from "@/assets/images/cards/3d-cp-logo.png";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import PrimaryButton from "../ui/PrimaryButton";
import ServicesLogoShape from "../decorative-elements/ServicesLogoShape";
import AboutHeroLogoShape1 from "../decorative-elements/AboutHeroLogoShape1";

const LpWhySection = () => {
  return (
    <section className="relative w-full px-[2rem] py-[8rem] xl:px-[0rem]">
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
        <AboutHeroLogoShape1 className="pointer-events-none absolute top-[0rem] left-[25rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 select-none md:left-[10rem] md:h-[22.5rem] md:w-[11.2rem]" />
      </div>

      <div className="relative z-[10] container flex items-center justify-between gap-[5rem]">
        <div className="flex w-[63rem] flex-col">
          <div>
            <SectionLabel text="Why choose us" textColor="#3078FF" />
          </div>

          <h2 className="mt-[1.5rem] mb-[2.5rem] max-w-[50rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
            <span>Why Choose Creative Pixels for</span>{" "}
            <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
              WordPress?
            </span>
          </h2>

          <h4 className="text-[2.6rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#312749]">
            We specialize in WordPress web design that is:
          </h4>

          <ul className="my-[3rem] flex flex-col gap-[.8rem]">
            {[
              "Conversion-Focused: Designed to turn visitors into leads",
              "Fully Responsive: Looks perfect on desktop, tablet, and mobile",
              "SEO-Friendly: Optimized to rank higher on search engines",
              "Customizable & Scalable: Easy to manage & grow with your business",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-[1.2rem]">
                <CheckMarkIcon color="#EE7621" height="15" width="15" />

                <span className="text-[1.8rem] font-medium tracking-[2rem] tracking-normal text-[#312749]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <h4 className="mb-[5rem] max-w-[63rem] text-[2.6rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#312749]">
            With years of experience and hundreds of successful projects, we
            know how to deliver websites that actually perform.
          </h4>

          <div>
            <PrimaryButton
              text="Start Your WordPress Project"
              bGcolor="#312749"
              textColor="#ffffff"
            />
          </div>
        </div>

        <div className="h-[53rem] w-[49rem]">
          <Image
            src={CpLogo}
            width={490}
            height={530}
            alt="Card Image"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LpWhySection;

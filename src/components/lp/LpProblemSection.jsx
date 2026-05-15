import Image from "next/image";
import LpProplemCardImg from "@/assets/images/cards/lp-problem-card-img.png";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import PrimaryButton from "./LpPrimaryButton";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";

const LpProblemSection = () => {
  return (
    <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
      <MotionEffect
        slide={{
          direction: "down",
        }}
        fade
        inView
        transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-[1.3rem] text-center">
          {/* <div>
            <SectionLabel text="problems you’re facing" textColor="#3078FF" />
          </div> */}

          {/* <div className="max-w-[90rem]">
            <SectionTitle text="Sound Familiar?" />
          </div> */}
        </div>

        <div className="container mt-[5rem] flex flex-col items-start justify-between gap-[4rem] rounded-[3rem] border border-[#EE7621] bg-[#FDF4E7] px-[2rem] py-[3rem] md:pr-[3rem] md:pl-[3rem] lg:flex-row lg:items-center lg:pr-[5rem]">
          <div className="w-full overflow-hidden rounded-[2rem] md:h-[46rem] lg:w-[54rem]">
            <Image
              src={LpProplemCardImg}
              width={540}
              height={460}
              alt="Card Image"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="w-full lg:w-[53rem]">
            <h4 className="text-[2.2rem] leading-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[2.8rem]">
              Are You Facing Any of These Problems?
            </h4>

            <ul className="my-[2.5rem] flex flex-col gap-[.8rem]">
              {[
                "Your site loads slowly and visitors leave before they even see it",
                "Pages are broken, plugins conflict, or things randomly stop working",
                "You built it yourself (or hired someone cheap) and now it's a mess",
                "You've lost access, been hacked, or something broke after an update",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-[1.2rem]">
                  <i className="relative top-[.2rem] min-w-max">
                    <CheckMarkIcon color="#EE7621" height="15" width="15" />
                  </i>

                  <span className="text-[1.6rem] leading-[2rem] font-medium tracking-[2rem] tracking-normal text-[#312749]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mb-[4.5rem] text-[1.6rem] leading-[2.5rem] font-medium tracking-normal text-[#312749]">
              Sound Familiar? You&apos;re Not Alone. <br /> <br />
              Thousands of business owners struggle with the exact same
              WordPress headaches. If any of this sounds like your site,
              it&apos;s time for a professional WordPress fix — built to perform
              and built to last.
            </p>

            <PrimaryButton
              text="Request Your Free Audit"
              bGcolor="#FF37B3"
              textColor="#ffffff"
              href="#audit"
            />
          </div>
        </div>
      </MotionEffect>
    </section>
  );
};

export default LpProblemSection;

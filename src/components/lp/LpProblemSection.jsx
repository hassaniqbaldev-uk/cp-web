import Image from "next/image";
import LpProplemCardImg from "@/assets/images/cards/lp-problem-card-img.png";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import PrimaryButton from "../ui/LpPrimaryButton";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";

const LpProblemSection = () => {
  return (
    <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
      <div className="flex flex-col items-center gap-[1.3rem] text-center">
        <MotionEffect
          slide={{
            direction: "down",
          }}
          fade
          zoom
          inView
          delay={0.1}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <SectionLabel text="problems you’re facing" textColor="#3078FF" />
          </div>
        </MotionEffect>

        <MotionEffect
          slide={{
            direction: "down",
          }}
          fade
          zoom
          inView
          delay={0.25}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-[90rem]">
            <SectionTitle text=" You’re Paying for Traffic But Your Website Isn’t Converting" />
          </div>
        </MotionEffect>
      </div>

      <MotionEffect
        slide={{ direction: "down" }}
        fade
        inView
        delay={0.6}
        transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
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
              Every click costs you money. But if your website isn’t built to
              convert, you’re losing potential customers every day.
            </h4>

            <ul className="my-[2.5rem] flex flex-col gap-[.8rem]">
              {[
                "Don’t guide users to take action",
                "Load too slowly and increase drop-offs",
                "Fail on mobile devices",
                "Lack clear messaging and structure",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-[1.2rem]">
                  <i className="min-w-max">
                    <CheckMarkIcon color="#EE7621" height="15" width="15" />
                  </i>

                  <span className="text-[1.8rem] font-medium tracking-[2rem] tracking-normal text-[#312749]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mb-[4.5rem] text-[1.6rem] leading-[2.5rem] font-medium tracking-normal text-[#312749]">
              This isn’t a traffic issue it’s a conversion issue
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

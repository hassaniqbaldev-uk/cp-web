import Image from "next/image";
import LpProplemCardImg from "@/assets/images/cards/lp-problem-card-img.png";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import PrimaryButton from "../ui/PrimaryButton";
import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";

const LpProblemSection = () => {
  return (
    <section className="pb-[13rem]">
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
          <div>
            <SectionTitle text="Is Your WordPress Website Underperforming?" />
          </div>
        </MotionEffect>
      </div>

      <MotionEffect
        slide={{
          direction: "down",
        }}
        fade
        zoom
        inView
        delay={0.3}
        transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mt-[5rem] flex items-center justify-between gap-[4rem] rounded-[3rem] border border-[#EE7621] bg-[#FDF4E7] py-[3rem] pr-[5rem] pl-[3rem]">
          <div className="h-[46rem] w-[54rem] overflow-hidden rounded-[2rem]">
            <Image
              src={LpProplemCardImg}
              width={540}
              height={460}
              alt="Card Image"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="w-[53rem]">
            <h4 className="text-[2.6rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749]">
              Many businesses struggle with WordPress websites that don&apos;t
              deliver results. Common issues include:
            </h4>

            <ul className="my-[2.5rem] flex flex-col gap-[.8rem]">
              {[
                "Slow loading speeds that turn visitors away",
                "Outdated or cluttered themes that harm your brand image",
                "No clear lead generation paths",
                "Poor mobile experience causing lost opportunities",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-[1.2rem]">
                  <CheckMarkIcon color="#EE7621" height="15" width="15" />

                  <span className="text-[1.8rem] font-medium tracking-[2rem] tracking-normal text-[#312749]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mb-[4.5rem] text-[1.6rem] leading-[2.5rem] font-medium tracking-normal text-[#312749]">
              If your website has any of these issues, it&apos;s time for a
              professional redesign that focuses on performance and results.
            </p>

            <PrimaryButton
              text="See How We Can Help"
              bGcolor="#FF37B3"
              textColor="#ffffff"
            />
          </div>
        </div>
      </MotionEffect>
    </section>
  );
};

export default LpProblemSection;

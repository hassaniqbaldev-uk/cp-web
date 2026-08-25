import { MotionEffect } from "../effects/motion-effect";
import SectionLabel from "../ui/SectionLabel";
import SectionDescription from "../ui/SectionDescription";
import LpAuditForm from "./LpAuditForm";

const LpAuditSection = () => {
  return (
    <section
      id="audit"
      className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]"
    >
      <div className="relative z-[10] container">
        <div className="flex flex-col items-center justify-center gap-[4rem] xl:flex-row">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex w-full flex-col items-center text-center md:w-[54rem] xl:items-start xl:text-left">
              <div>
                <SectionLabel text="Free wordpress Audit" textColor="#3078FF" />
              </div>

              <h2 className="mt-[1.3rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
                Get Your Free{" "}
                <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                  WordPress Website Audit
                </span>
              </h2>

              <div className="max-w-[58.5rem]">
                <SectionDescription
                  text="We’ll show you exactly what’s stopping your website from converting  and how to fix it."
                  textColor="#625C70"
                />
              </div>

              <h5 className="mt-[3rem] text-[1.8rem] leading-[2.2rem] font-bold tracking-normal md:text-[2rem] md:leading-[2.5rem]">
                No spam. Your details stay private.
              </h5>
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.3}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-[59.5rem]"
          >
            <LpAuditForm />
          </MotionEffect>
        </div>
      </div>
    </section>
  );
};

export default LpAuditSection;

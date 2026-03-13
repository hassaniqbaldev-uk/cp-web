"use client";
import Counter from "@/components/ui/Counter";
import { MotionEffect } from "@/components/effects/motion-effect";

const Stats = () => {
  return (
    <section className="px-[2rem] pt-[5rem] md:pt-[22rem] xl:px-[0rem]">
      <div className="container flex flex-col items-center justify-center gap-[5rem] xl:flex-row">
        <div className="grid w-full gap-[2.4rem] md:grid-cols-3">
          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.1}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <div className="flex size-full flex-col items-start justify-center gap-[2rem] rounded-[3rem] bg-[#FF37B3] p-[4rem] text-left">
              <h4 className="text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                <Counter value={12} suffix="+" />
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Years Experience
              </span>
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.25}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <div className="flex size-full flex-col items-start justify-center gap-[2rem] rounded-[3rem] bg-[#EE7621] p-[4rem] text-left">
              <h4 className="text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                <Counter value={200} suffix="+" />
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Projects Launched
              </span>
            </div>
          </MotionEffect>

          <MotionEffect
            slide={{ direction: "down" }}
            fade
            inView
            delay={0.4}
            transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
          >
            <div className="flex size-full flex-col items-start justify-center gap-[2rem] rounded-[3rem] bg-[#F14A58D9] p-[4rem] text-left">
              <h4 className="text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                <Counter value={15} suffix="+" />
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Team Members
              </span>
            </div>
          </MotionEffect>
        </div>

        <MotionEffect
          slide={{ direction: "down" }}
          fade
          inView
          delay={0.5}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-center text-[2.2rem] leading-[3.3rem] font-normal tracking-normal text-[#625C70] xl:max-w-[36.9rem] xl:text-left">
            We founded CreativePixels because we were tired of agencies
            over-promising and under-delivering. We&apos;re here to change that
            with honest work and real results.
          </p>
        </MotionEffect>
      </div>
    </section>
  );
};

export default Stats;

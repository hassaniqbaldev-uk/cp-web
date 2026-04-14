import Image from "next/image";
import LpResultImg from "@/assets/images/cards/lp-result-img.png";
import { MotionEffect } from "../effects/motion-effect";

const LpResultSection = () => {
  return (
    <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
      <MotionEffect
        slide={{ direction: "down" }}
        fade
        inView
        delay={0.5}
        transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
      >
        <div
          style={{
            background:
              "linear-gradient(184.61deg, #F8E19E 3.73%, #F5A267 90.31%, #EE7621 130.8%)",
          }}
          className="relative container h-[40rem] rounded-[3rem] px-[2rem] md:h-[52rem] lg:h-[65rem] xl:h-[68rem] xl:px-[0rem]"
        >
          <div className="relative z-[10] flex flex-col items-center gap-[1rem] pt-[5rem] text-center md:pt-[7rem]">
            <h2 className="text-[4rem] leading-[5rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[5rem] md:leading-[6rem] lg:text-[7rem] lg:leading-[8rem]">
              Results Our Clients Love
            </h2>

            <p className="text-[2rem] leading-[2.5rem] font-normal tracking-normal text-[#312749]">
              We believe in measurable results. Our WordPress projects have
              helped clients:
            </p>
          </div>

          <div className="absolute bottom-[-1.5rem] left-1/2 z-[10] w-full max-w-[110rem] -translate-x-1/2 px-[2rem] md:bottom-[-3.8rem] lg:bottom-[-5.3rem] xl:bottom-[-6.1rem] xl:px-[0rem]">
            <Image
              src={LpResultImg}
              width={1100}
              height={450}
              alt="Card Image"
            />
          </div>
        </div>
      </MotionEffect>
    </section>
  );
};

export default LpResultSection;

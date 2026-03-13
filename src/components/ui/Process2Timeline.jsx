"use client";
import Image from "next/image";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import { motion, useTransform } from "framer-motion";

const Process2Timeline = ({
  item,
  index,
  totalSteps,
  scrollYProgress,
  isLast,
}) => {
  // 🔢 Calculate this step's scroll range
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;
  const mid = start + (end - start) * 0.4;

  // 🟣 Step circle fills first
  const stepFill = useTransform(scrollYProgress, [start, mid], [0, 1]);

  // 🔵 Line fills after step completes
  const lineFill = useTransform(scrollYProgress, [mid, end], [0, 1]);

  return (
    <>
      <div
        style={{ flexDirection: item.flexDirection }}
        className={`relative hidden w-full items-center justify-center gap-[16rem] xl:flex ${
          isLast ? "pb-0" : "pb-[10rem]"
        }`}
      >
        {/* STEP CIRCLE */}
        <div className="absolute top-0 left-1/2 size-[4.8rem] -translate-x-1/2 overflow-hidden rounded-full bg-[#dfdfdf]/50">
          <motion.div
            style={{
              background: item.color,
              scale: stepFill,
            }}
            className="absolute inset-0 rounded-full"
          />

          <span
            style={{ color: item.color }}
            className="absolute top-1/2 left-1/2 z-10 flex size-[4rem] -translate-1/2 items-center justify-center rounded-full bg-white text-[1.8rem] font-semibold"
          >
            0{item.step}
          </span>
        </div>

        {/* PROGRESS LINE */}
        <div className="absolute top-0 left-1/2 z-[-1] h-full w-[4px] -translate-x-1/2 bg-[#dfdfdf]/50">
          <motion.div
            style={{
              background: item.color,
              scaleY: lineFill,
              transformOrigin: "top",
            }}
            className="h-full w-full"
          />
        </div>

        {/* IMAGE */}
        <div
          // style={{ background: item.cardImageBg }}
          className="flex h-[42rem] w-[52rem] items-center justify-center rounded-[1.6rem]"
        >
          <Image
            src={item.cardImage}
            width={1098}
            height={960}
            alt="Image"
            unoptimized
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            textAlign: item.textAlign,
            alignItems: item.alignment,
          }}
          className="flex w-[52rem] flex-col"
        >
          <h3 className="mt-[2rem] text-[3.4rem] font-bold text-[#312749]">
            {item.title}
          </h3>

          <h4
            style={{ color: item.color }}
            className="text-[2.2rem] font-semibold"
          >
            {item.subTitle}
          </h4>

          <p className="mt-[1.2rem] text-[1.8rem] text-[#625C70]">
            {item.description}
          </p>

          <div className="mt-[2rem] flex w-full flex-col gap-[1rem] rounded-[1.6rem] border border-[#E4E3E8] bg-[#FBFAFB] p-[2rem]">
            <h5 className="text-[1.4rem] leading-[2.4rem] font-bold tracking-normal text-black uppercase">
              Key Deliverables
            </h5>

            <ul
              style={{
                placeItems: item.alignment,
              }}
              className="grid grid-cols-2"
            >
              {item.list.map((item2, idx) => (
                <li
                  key={idx}
                  style={{
                    flexDirection: item.flexDirection,
                  }}
                  className="inline-flex items-center gap-[1rem]"
                >
                  <i>
                    <CheckMarkIcon color={item.color} />
                  </i>

                  <span className="text-[1.6rem] leading-[2.8rem] font-medium tracking-normal text-[#312749]">
                    {item2}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className="px-[5rem]">
        <div
          className={`relative flex w-full flex-col items-start justify-center gap-[5rem] lg:flex-row lg:items-center xl:hidden ${isLast ? "pb-[0rem]" : "pb-[5rem] lg:pb-[10rem]"}`}
        >
          {/* Progress Step */}
          <div className="absolute top-0 left-[-4rem] size-[4.8rem] -translate-x-1/2 overflow-hidden rounded-full bg-[#dfdfdf]/50">
            <motion.div
              style={{
                background: item.color,
                scale: stepFill,
              }}
              className="absolute inset-0 rounded-full"
            />

            <span
              style={{
                color: item.color,
              }}
              className="absolute top-1/2 left-1/2 z-[2] flex size-[4rem] -translate-1/2 items-center justify-center rounded-full bg-white text-center text-[1.8rem] font-semibold tracking-[-0.02em]"
            >
              0{item.step}
            </span>
          </div>
          {/* Progress Line */}
          <div className="absolute top-0 left-[-4rem] z-[-1] h-full w-[4px] -translate-x-1/2 bg-[#dfdfdf]/50">
            <motion.div
              style={{
                background: item.color,
                scaleY: lineFill,
                transformOrigin: "top",
              }}
              className="h-full w-full"
            />
          </div>

          <div
            // style={{
            //   background: item.cardImageBg,
            // }}
            className="flex h-auto w-auto w-full items-center justify-center rounded-[1.6rem] lg:h-[42rem] lg:w-[52rem]"
          >
            <Image
              src={item.cardImage}
              width={1098}
              height={960}
              alt="Card Image"
              unoptimized
            />
          </div>

          <div className="flex w-full flex-col items-start text-left lg:w-[52rem]">
            <div className="relative size-[6.3rem]">
              <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                <i>
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={30}
                    height={30}
                    unoptimized
                  />
                </i>
              </div>
              <div
                style={{
                  background: item.color,
                }}
                className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
              />
            </div>

            <h3 className="my-[1rem] mt-[2rem] text-[2rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[3rem]">
              {item.title}
            </h3>

            <h4
              style={{
                color: item.color,
              }}
              className="text-[1.8rem] leading-[2rem] font-semibold tracking-normal md:text-[2.2rem] md:leading-[2rem]"
            >
              {item.subTitle}
            </h4>

            <p className="mt-[1.2rem] mb-[2rem] text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70] md:text-[1.6rem] md:leading-[2.8rem]">
              {item.description}
            </p>

            <div className="flex w-full flex-col gap-[1rem] rounded-[1.6rem] border border-[#E4E3E8] bg-[#FBFAFB] p-[2rem]">
              <h5 className="text-[1.4rem] leading-[2.4rem] font-bold tracking-normal text-black uppercase">
                Key Deliverables
              </h5>

              <ul className="grid grid-cols-1 md:grid-cols-2">
                {item.list.map((item2, idx) => (
                  <li key={idx} className="inline-flex items-center gap-[1rem]">
                    <i>
                      <CheckMarkIcon color={item.color} />
                    </i>

                    <span className="text-[1.2rem] leading-[2.4rem] font-medium tracking-normal text-[#312749]">
                      {item2}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process2Timeline;

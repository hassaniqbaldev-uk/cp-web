"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { teamCardData } from "@/constants/aboutPage";

const TeamCardMarquee = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="left"
        className="overflow-hidden"
      >
        {teamCardData.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActive(idx)}
            onMouseLeave={() => setActive(null)}
            className="our-team-card relative mx-[.9rem] h-[40rem] w-[30.9rem] overflow-hidden rounded-[1.6rem]"
          >
            <div className="absolute bottom-0 left-0 z-[1]">
              <Image
                src={item.image.src}
                alt="Team Image"
                width={item.image.width}
                height={item.image.height}
              />
            </div>

            <div className="absolute bottom-[2.7rem] left-[2.5rem] z-[2] flex flex-col gap-[.3rem]">
              <h5 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                {item.name}
              </h5>

              <h6 className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                {item.role}
              </h6>
            </div>

            <div
              className={`absolute inset-0 z-[3] transition-all duration-500 ${
                active === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="our-team-card size-full opacity-95" />

              <div className="absolute inset-0 flex flex-col justify-between px-[2.5rem] pt-[3.3rem] pb-[2.6rem]">
                <div className="flex flex-col gap-[1.368rem]">
                  <div className="size-[4rem] overflow-hidden rounded-full">
                    <Image
                      src={item.hover.avatar}
                      alt="Team Avatar"
                      width={40}
                      height={40}
                      priority
                    />
                  </div>

                  <div className="flex flex-col gap-[.132rem]">
                    <h5 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
                      {item.hover.name}
                    </h5>

                    <h6 className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                      {item.hover.role}
                    </h6>
                  </div>
                </div>

                <div className="flex flex-col gap-[1.5rem]">
                  <Link
                    href={item.hover.linkedin.href}
                    className="relative h-[2.1rem] w-[2rem]"
                  >
                    <item.hover.linkedin.icon />
                  </Link>

                  <p className="text-[1.6rem] leading-[2.4rem] font-medium text-white">
                    {item.hover.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default TeamCardMarquee;

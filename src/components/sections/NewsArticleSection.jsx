"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SectionLabel2 from "../common/SectionLabel2";
// import NewsArticleTab from "../common/RecentBlogsFilterTab";
import Image from "next/image";
import CommonBtn3 from "../common/CommonBtn3";
import Link from "next/link";

const NewsArticleSection = () => {
  const labelRef = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        labelRef.current,
        { rotate: "-2deg" },
        {
          rotation: "+=3",
          duration: 0.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          repeatDelay: 0.5,
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <section ref={container} className="pt-[18rem]">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <div ref={labelRef}>
            <SectionLabel2
              text="News Articles"
              bgColor="bg-[#FFC300]"
              textColor="#070707"
            />
          </div>

          <h1 className="my-[2rem] text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] text-[#070707] md:text-[7rem] md:leading-[8.4rem]">
            Blogs
          </h1>

          <p className="text-[1.8rem] leading-[2.8rem] font-medium text-[#070707] md:text-[2.2rem] md:leading-[3.2rem]">
            Read our lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis venenatis aliquet pulvinar. Nunc viverra faucibus diam
            adipiscing elit.
          </p>
        </div>

        <div className="mt-[5rem] grid grid-cols-2 grid-rows-2 gap-[3.3rem]">
          <div className="news-article-glass row-span-2 flex size-full flex-col overflow-hidden">
            <div className="relative flex h-[24.9rem] w-full items-center justify-center">
              <Image
                src="/images/news-article-tab-img-1.png"
                width={379}
                height={240}
                alt="Image"
                className="size-full"
              />
            </div>

            <div className="flex flex-col gap-[1.5rem] pt-[2.5rem] pr-[5rem] pb-[3.5rem] pl-[3.5rem]">
              <div className="flex items-center gap-[2rem]">
                <span className="inline-flex h-[4rem] items-center justify-center rounded-[.8rem] bg-[#070707] px-[1.2rem] text-center text-[1.6rem] leading-[2.4rem] font-medium text-white">
                  Design and Branding
                </span>

                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]/60">
                  10 min read
                </span>
              </div>

              <div className="flex flex-col">
                <h4 className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#070707]">
                  Venenatis aliquet pulvinar. Nunc viverra faucibus diam.
                </h4>

                <p className="mt-[.5rem] mb-[2.5rem] text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                  Lorem ipsum dolor amet, consectetur anadipiscing elit.
                  Venenatis aliquet pulvinar. Nunc viverra faucibus diam.
                </p>

                <CommonBtn3 href="" label="Learn More" bgColor="#EE8D00" />
              </div>
            </div>
          </div>

          <Link
            href=""
            className="news-article-glass flex size-full items-center gap-[2rem] overflow-hidden p-[2rem]"
          >
            <div className="relative flex h-[24rem] w-[22.9rem] items-center justify-center overflow-hidden rounded-[1.2rem]">
              <Image
                src="/images/news-article-tab-img-1.png"
                width={229}
                height={240}
                alt="Image"
                className="size-full"
              />
            </div>

            <div className="flex w-[29.5rem] flex-col gap-[2rem]">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-[3.2rem] items-center justify-center rounded-[.8rem] bg-[#070707] px-[1.2rem] text-center text-[1.6rem] leading-[2.4rem] font-medium text-white">
                  Design and Branding
                </span>

                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]/60">
                  10 min read
                </span>
              </div>

              <div className="flex flex-col gap-[1.5rem]">
                <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                  Venenatis aliquet pulvinar. Nunc viverra faucibus diam.
                </h4>

                <p className="text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                  Lorem ipsum dolor amet, consectetur anadipiscing elit.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href=""
            className="news-article-glass flex size-full items-center gap-[2rem] overflow-hidden p-[2rem]"
          >
            <div className="relative flex h-[24rem] w-[22.9rem] items-center justify-center overflow-hidden rounded-[1.2rem]">
              <Image
                src="/images/news-article-tab-img-1.png"
                width={229}
                height={240}
                alt="Image"
                className="size-full"
              />
            </div>

            <div className="flex w-[29.5rem] flex-col gap-[2rem]">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-[3.2rem] items-center justify-center rounded-[.8rem] bg-[#070707] px-[1.2rem] text-center text-[1.6rem] leading-[2.4rem] font-medium text-white">
                  Design and Branding
                </span>

                <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#070707]/60">
                  10 min read
                </span>
              </div>

              <div className="flex flex-col gap-[1.5rem]">
                <h4 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-[#070707]">
                  Venenatis aliquet pulvinar. Nunc viverra faucibus diam.
                </h4>

                <p className="text-[1.8rem] leading-[2.6rem] font-normal text-[#070707]">
                  Lorem ipsum dolor amet, consectetur anadipiscing elit.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="mt-[7rem]">
          <NewsArticleTab />
        </div> */}
      </div>
    </section>
  );
};

export default NewsArticleSection;

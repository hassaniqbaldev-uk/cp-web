"use client";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";
import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import PlayYellowIcon from "@/assets/icons/play-yellow-icon.svg";
import SubtractDarkIcon from "@/assets/icons/subtract-dark.svg";
import LineStroke19 from "@/assets/decorative-elements/line-stroke-19.svg";
import LineStroke20 from "@/assets/decorative-elements/line-stroke-20.svg";
import LineStroke22 from "@/assets/decorative-elements/line-stroke-22.svg";
import LineStroke23 from "@/assets/decorative-elements/line-stroke-23.svg";
import LineStroke27 from "@/assets/decorative-elements/line-stroke-27.svg";
import LineStroke28 from "@/assets/decorative-elements/line-stroke-28.svg";
import LineStroke29 from "@/assets/decorative-elements/line-stroke-29.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLoadingStore } from "@/store/useLoadingStore";
import CaseStudyDetailMarquee from "../common/CaseStudyDetailMarquee";
import RatingStar from "@/assets/icons/rating-star.svg";

const CaseStudyDetailSection = ({ caseStudy }) => {
  const labelRef = useRef();
  const badgeRef = useRef();
  const headingRef = useRef();
  const btnRef1 = useRef();
  const btnRef2 = useRef();
  const gridRef1 = useRef();
  const gridRef2 = useRef();
  const gridRef3 = useRef();
  const gridRef4 = useRef();
  const gridRef5 = useRef();
  const mainImgRef = useRef();
  const titleRef1 = useRef();
  const descRef1 = useRef();
  const titleRef2 = useRef();
  const descRef2 = useRef();
  const imgRef1 = useRef();
  const imgRef2 = useRef();
  const imgRef3 = useRef();
  const lineRef = useRef(null);
  const { isLoading } = useLoadingStore(); // 👈 access global loader state

  useEffect(() => {
    if (isLoading) return; // ⛔ don’t run until loader is done

    const gridRefs = [gridRef2, gridRef3, gridRef4, gridRef5];
    const imgRefs = [imgRef1, imgRef2, imgRef3];

    const line = lineRef.current.querySelector("path");

    if (line) {
      gsap.fromTo(
        line,
        { drawSVG: "0%" }, // start hidden
        {
          drawSVG: "100%", // fully drawn
          duration: 5,
          ease: "power2.inOut",
        },
      );
    }

    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

    const tl = gsap.timeline();

    tl.to(badgeRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.2,
    })

      .to(headingRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })

      .to(btnRef1.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })

      .fromTo(
        gsap.utils.toArray(gridRef1.current.children),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
      )

      .to(mainImgRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

    gsap.to(titleRef1.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef1.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(descRef1.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descRef1.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gridRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          gsap.utils.toArray(ref.current.children),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: index * 0.2, // Stagger the start of each grid animation
            clearProps: "all",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    gsap.to(titleRef2.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef2.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(descRef2.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descRef2.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(btnRef2.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: btnRef2.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    imgRefs.forEach((ref) => {
      if (ref.current) {
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, [isLoading]);

  return (
    <section className="relative pt-[15rem] pb-[5rem] md:pt-[20.6rem] xl:pb-[9.8rem]">
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke19 className="absolute top-[15.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <LineStroke23 className="absolute top-[5.5rem] right-[-8.8rem]" />

        <div
          ref={badgeRef}
          className="shadow-02 absolute top-[14rem] right-[11.5rem] size-[17rem] rotate-[15deg] overflow-hidden rounded-full opacity-0"
        >
          <Image
            src={caseStudy.badgeImage}
            width={170}
            height={170}
            alt="Case Study Badge"
            className="size-full object-cover object-center"
            unoptimized
          />
        </div>
      </div>

      <div className="absolute inset-0 z-[0]">
        <LineStroke27 className="absolute top-[176.8rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="absolute inset-0 z-[0]">
        <LineStroke28 className="absolute top-[294.2rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <LineStroke29 className="absolute top-[530rem] right-[-30rem] w-full" />
      </div>

      <div className="relative z-[1]">
        <div className="mx-auto flex max-w-[120.3rem] flex-col items-center px-[3rem] text-center xl:items-start xl:px-[0rem] xl:text-left">
          <div ref={labelRef} className="inline-flex rotate-[2deg]">
            <SectionLabel2 text="Case Study" />
          </div>

          <div
            ref={headingRef}
            className="mt-[1.5rem] mb-[2.5rem] max-w-[100rem] opacity-0"
          >
            <SectionTitle label={caseStudy.title} />
          </div>

          <div ref={btnRef1} className="opacity-0">
            <CommonBtn3 label="Visit Live Site" href={caseStudy.linkButton} />
          </div>

          <div
            ref={gridRef1}
            className="mt-[5.5rem] mb-[5rem] flex w-full flex-col items-center gap-[3rem] md:flex-row md:gap-[0rem] lg:items-start"
          >
            <div className="flex flex-col items-center gap-[1rem] text-center md:w-[33.33%] xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FFC300] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                {caseStudy.gridRow?.column1?.label || "Industry"}
              </span>

              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                {caseStudy.gridRow?.column1?.text || "Training/Licensing"}
              </span>
            </div>

            <div className="mx-[5rem] hidden h-[9.5rem] w-[1px] bg-black/20 md:block" />

            <div className="flex flex-col items-center gap-[1rem] text-center md:w-[33.33%] xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FF37B3] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                {caseStudy.gridRow?.column2?.label || "Services"}
              </span>

              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                {caseStudy.gridRow?.column2?.text ||
                  "Health & safety training courses"}
              </span>
            </div>

            <div className="mx-[5rem] hidden h-[9.5rem] w-[1px] bg-black/20 md:block" />

            <div className="flex flex-col items-center gap-[1rem] text-center md:w-[33.33%] xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#007BFF] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                {caseStudy.gridRow?.column4?.label || "Tools Used"}
              </span>

              <div className="flex flex-wrap items-center justify-center gap-[2rem] xl:justify-start">
                {caseStudy.gridRow?.column4?.images?.map((imageUrl, index) => (
                  <div className="flex items-center justify-center" key={index}>
                    <img src={imageUrl} alt="Tool" className="h-[2.2rem]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={mainImgRef}
          className="relative mx-auto w-full max-w-[120.3rem] overflow-hidden rounded-[2rem] px-[3rem] opacity-0 xl:h-[71.6rem] xl:px-[0rem]"
        >
          <Image
            src={caseStudy.mainImage}
            alt="Case Study Image"
            height={716}
            width={1204}
            priority
            className="size-full object-cover object-top"
            unoptimized
          />
        </div>

        <div className="mx-auto my-[5rem] flex max-w-[120.3rem] flex-col items-center px-[3rem] text-center xl:my-[9rem] xl:items-start xl:px-[0rem] xl:text-left">
          <h3
            ref={titleRef2}
            className="mb-[3rem] text-[2.5rem] leading-[3.5rem] font-semibold tracking-[-0.02em] opacity-0 md:text-[4rem] md:leading-[5rem] lg:text-[4.8rem] lg:leading-[6rem]"
          >
            {caseStudy.contentTitle?.title2 && (
              <p>
                <span className="text-[#FF37B3]">
                  {caseStudy.contentTitle.title2.substring(0, 15)}
                </span>
                {caseStudy.contentTitle.title2.substring(15)}
              </p>
            )}
          </h3>

          <p
            ref={descRef2}
            className="text-[2rem] leading-[3.5rem] font-medium tracking-[-1px] opacity-0 md:text-[2.6rem] md:leading-[4.4rem]"
          >
            {caseStudy.contentDescription?.description2}
          </p>
          {/* 
          <div className="mt-[4rem]">
            <Link
              href=""
              ref={btnRef2}
              className="inline-flex items-center opacity-0"
            >
              <span className="inline-flex h-[5rem] min-w-[24.5rem] items-center justify-center rounded-[6rem] border border-[#141414] bg-[#141414] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white md:text-[2rem]">
                What Howard Says
              </span>
              <i className="-mx-[.4rem] inline-flex size-[1.8rem] items-center justify-center">
                <SubtractDarkIcon />
              </i>
              <i className="inline-flex size-[5rem] items-center justify-center rounded-full border border-[#141414] bg-[#141414]">
                <PlayYellowIcon />
              </i>
            </Link>
          </div> */}
        </div>

        <div
          ref={gridRef3}
          className="mx-auto grid w-full max-w-[120.3rem] grid-cols-1 gap-[1rem] px-[3rem] md:grid-cols-2 lg:gap-[3.3rem] xl:px-[0rem]"
        >
          <div className="w-full overflow-hidden rounded-[2rem] lg:h-[43.9rem]">
            <Image
              src={caseStudy.imageColumn1}
              alt="Case Study Image"
              width={585}
              height={439}
              priority
              className="size-full object-cover"
              unoptimized
            />
          </div>

          <div className="w-full overflow-hidden rounded-[2rem] lg:h-[43.9rem]">
            <Image
              src={caseStudy.imageColumn2}
              alt="Case Study Image"
              width={585}
              height={439}
              priority
              className="size-full object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="mx-auto my-[5rem] flex max-w-[120.3rem] flex-col items-center gap-[3.3rem] px-[3rem] xl:my-[9rem] xl:flex-row xl:items-start xl:px-[0rem]">
          <div className="relative flex h-[40rem] items-center justify-center overflow-hidden rounded-tl-[2rem] rounded-tr-[2rem] md:h-[50rem] md:w-[40rem] xl:h-[51.4rem] xl:w-[37.9rem]">
            <Image
              src={caseStudy.imageColumn3}
              width={379}
              height={514}
              className="size-full object-contain"
              alt="Image"
              unoptimized
            />

            <div className="absolute bottom-0 h-[4.8rem] w-full bg-[linear-gradient(180deg,rgba(18,18,18,0)_0%,#ffffff_100%)]" />
          </div>

          <div className="flex flex-col items-center gap-[3rem] xl:w-[79.1rem] xl:items-start">
            <div className="flex flex-col gap-[1rem] text-center md:gap-[2rem] xl:text-left">
              <h3 className="text-text-primary text-[3.5rem] leading-[4.5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem]">
                {caseStudy.contentTitle?.title3}
              </h3>

              <p className="text-text-primary text-[1.8rem] leading-[2.6rem] font-normal">
                {caseStudy.contentDescription?.description3}
              </p>
            </div>

            <div className="flex flex-col items-center gap-[3.3rem] lg:flex-row xl:items-end">
              <div className="relative flex h-[30rem] w-[27.6rem] items-center justify-center overflow-hidden rounded-[1.6rem]">
                <Image
                  src={caseStudy.imageColumn4}
                  width={276}
                  height={300}
                  className="size-full object-cover"
                  alt="Image"
                  unoptimized
                />
              </div>

              <div className="flex flex-col items-center gap-[1rem] lg:items-start xl:w-[48.3rem]">
                <div className="relative flex size-[6.6rem] items-center justify-center">
                  <Image
                    src={caseStudy.imageColumn5}
                    width={66}
                    height={66}
                    alt="Image"
                    className="size-full object-contain"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col gap-[2rem] md:gap-[0rem]">
                  {/* {[
                    "Showcase their cutting-edge software solutions",
                    "Improve performance and user experience",
                    "Provide scalability for future growth",
                    "Strengthen SEO and online visibility",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-[.8rem]">
                      <div className="size-[1rem] rounded-full border-2 border-[#FF37B3]" />

                      <span className="text-text-primary w-full border-b border-black/25 text-[1.4rem] font-normal md:text-[1.8rem] md:leading-[5.6rem]">
                        {item}
                      </span>
                    </div>
                  ))} */}

                  {caseStudy.gridCardRow?.card2.innerCards?.map((innerCard) => (
                    <div key={innerCard.id} className="">
                      {/* <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                        {innerCard.title}
                      </h4> */}

                      <div className="flex w-full flex-col gap-[1.5rem]">
                        {innerCard.labels?.map((label, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-[.8rem]"
                          >
                            <div className="relative top-[.6rem] size-[1rem] rounded-full border-2 border-[#FF37B3] md:top-[1rem]" />
                            <span className="text-text-primary w-full border-b border-black/25 text-[1.4rem] font-normal md:text-[1.8rem] md:leading-[3rem]">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[3rem] xl:px-[0rem]">
          <div className="case-study-detail-gradient-card mx-auto w-full max-w-[120.3rem] overflow-hidden md:min-h-[56.5rem]">
            <div className="flex flex-col gap-[1rem] p-[3rem] md:gap-[2rem] md:px-[6rem] md:py-[7.3rem]">
              <h3 className="text-text-primary text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem]">
                {caseStudy.contentTitle?.title4}
              </h3>

              <p className="text-text-primary text-[1.6rem] font-normal md:text-[1.8rem] md:leading-[2.6rem] lg:max-w-[41.2rem]">
                {caseStudy.contentDescription?.description4}
              </p>

              <div className="flex flex-col items-start gap-[2rem] md:gap-[1.5rem] lg:max-w-[51.5rem]">
                {caseStudy.gridCardRow2?.column1.workflowItems?.map((item) => (
                  <div key={item.id} className="flex items-start gap-[.8rem]">
                    <div className="relative top-[.6rem] size-[1rem] rounded-full border-2 border-[#FF37B3] md:top-[1rem]" />
                    <span className="text-text-primary w-full border-b border-black/25 text-[1.6rem] font-normal md:text-[1.8rem] md:leading-[3rem]">
                      {item.label1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute top-[21.5rem] right-[15rem] hidden items-center justify-center select-none lg:flex xl:right-[24.3rem]">
              <Image
                src="/images/dash-line.svg"
                width={178}
                height={91}
                alt="Image"
                className="size-full object-contain"
                unoptimized
              />
            </div>

            <div className="pointer-events-none absolute top-[-10rem] right-[10rem] hidden size-[35rem] items-center justify-center select-none lg:flex xl:top-[-13rem] xl:right-[16.9rem] xl:size-[51.5rem]">
              <Image
                src={caseStudy.imageColumn6}
                width={515}
                height={515}
                alt="Image"
                className="size-full object-contain"
                unoptimized
              />
            </div>

            <div className="pointer-events-none absolute right-[0rem] bottom-[-10rem] hidden size-[35rem] items-center justify-center select-none lg:flex xl:bottom-[-13rem] xl:size-[51.5rem]">
              <Image
                src={caseStudy.imageColumn7}
                width={515}
                height={515}
                alt="Image"
                className="size-full object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div
          className="my-[5rem] py-[5rem] xl:my-[9rem] xl:py-[8rem]"
          style={{
            background:
              "url('/images/hero-bg-gradient.webp') no-repeat center center/cover",
          }}
        >
          <div className="mx-auto flex max-w-[116rem] flex-col items-center gap-[2rem] px-[3rem] text-center xl:items-start xl:px-[0rem] xl:text-left">
            <h3 className="text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
              {caseStudy.contentTitle?.title5}
            </h3>

            <p className="text-[2.2rem] leading-[3rems] font-medium tracking-[-1px] text-white md:text-[2.6rem] md:leading-[4.4rem]">
              {caseStudy.contentDescription?.description5}
            </p>
          </div>

          <div className="mt-[5rem]">
            <CaseStudyDetailMarquee caseStudy={caseStudy} />
          </div>
        </div>

        {/* <div className="mx-auto flex max-w-[120.3rem] flex-col items-center gap-[2rem] px-[3rem] text-center md:my-[5rem] md:mt-[5.8rem] xl:items-start xl:px-[0rem] xl:text-left">
          <div ref={titleRef1} className="opacity-0">
            <SectionTitle label={caseStudy.contentTitle?.title1} />
          </div>

          <div ref={descRef1} className="opacity-0">
            <SectionDescription
              label={caseStudy.contentDescription?.description1}
            />
          </div>
        </div>

        <div
          ref={gridRef2}
          className="lg::grid-cols-3 mx-auto grid max-w-[120.3rem] grid-cols-1 justify-items-center gap-[4rem] px-[3rem] text-center md:grid-cols-2 xl:grid-cols-4 xl:justify-items-start xl:px-[0rem] xl:text-left"
        >
          <div className="flex flex-col">
            <h3 className="text-[3rem] leading-[5rem] font-semibold tracking-[-0.02em] text-[#44b276] lg:text-[3.4rem] lg:leading-[4.8rem]">
              {caseStudy.gridRow2?.column1?.label || "3.2x"}
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              {caseStudy.gridRow2?.column1?.text || "Increase in page speeds"}
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[3rem] leading-[5rem] font-semibold tracking-[-0.02em] text-[#007Bff] lg:text-[3.4rem] lg:leading-[4.8rem]">
              {caseStudy.gridRow2?.column2?.label || "29%"}
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              {caseStudy.gridRow2?.column2?.text ||
                "Higher Click Through Rates (CTR's)"}
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[3rem] leading-[5rem] font-semibold tracking-[-0.02em] text-[#FFC300] lg:text-[3.4rem] lg:leading-[4.8rem]">
              {caseStudy.gridRow2?.column3?.label || "2.7%"}
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              {caseStudy.gridRow2?.column3?.text ||
                "Decrease in drop-off rates"}
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[3rem] leading-[5rem] font-semibold tracking-[-0.02em] text-[#FF37B3] lg:text-[3.4rem] lg:leading-[4.8rem]">
              {caseStudy.gridRow2?.column5?.label ||
                "Higher organic visibility"}
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              {caseStudy.gridRow2?.column5?.text ||
                "For cloud software and data management keywords"}
            </span>
          </div>
        </div> */}

        <div
          ref={imgRef3}
          className="relative mx-auto mt-[5rem] mb-[-5rem] h-[25rem] w-full max-w-[120.3rem] overflow-hidden rounded-[2rem] px-[3rem] opacity-0 md:h-[40rem] lg:mt-[9rem] lg:h-[61.2rem] xl:mb-[-10rem] xl:px-[0rem]"
        >
          <Image
            src={caseStudy.imageColumn13}
            alt="Case Study Image"
            width={1203}
            height={612}
            priority
            className="size-full rounded-[2rem] object-cover"
            unoptimized
          />
        </div>

        {/* <div
          style={{
            background:
              "linear-gradient(0deg, #070707, #070707),linear-gradient(119.9deg, #070707 1.18%, #212121 49.71%, #070707 100%)",
          }}
          className="mt-[5rem] px-[3rem] py-[5rem] xl:mt-[9rem] xl:px-[0rem] xl:py-[7rem]"
        >
          <div className="mx-auto grid max-w-[122.3rem] grid-cols-1 items-center gap-[3.3rem] lg:grid-cols-2 xl:h-[56rem]">
            <div className="case-study-detail-gradient-card h-full w-full p-[2rem] md:px-[3.5rem] md:py-[4.4rem]">
              <RatingStar />

              <h4 className="mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]">
                {caseStudy.contentTitle?.title6}
              </h4>

              <p className="mt-[1rem] mb-[2rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
                {caseStudy.contentDescription?.description6}
              </p>

              <div className="flex items-center gap-[1.2rem] text-left">
                <div className="relative h-[5.6rem] min-w-[5.6rem] overflow-hidden rounded-full">
                  <Image
                    src={caseStudy.imageColumn15}
                    alt="Image"
                    width={56}
                    height={56}
                    className="size-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
                    {caseStudy.contentTitle?.title7}
                  </span>
                  <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]">
                    {caseStudy.contentTitle?.title8}
                  </span>
                </div>
              </div>
            </div>

            <div className="case-study-detail-gradient-card h-full w-full p-[2rem]">
              <Image
                src={caseStudy.imageColumn14}
                width={585}
                height={520}
                alt="IMage"
                className="size-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CaseStudyDetailSection;

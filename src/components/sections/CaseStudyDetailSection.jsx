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
import LineStroke21 from "@/assets/decorative-elements/line-stroke-21.svg";
import LineStroke22 from "@/assets/decorative-elements/line-stroke-22.svg";
import LineStroke23 from "@/assets/decorative-elements/line-stroke-23.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLoadingStore } from "@/store/useLoadingStore";

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
    <section className="relative px-[3rem] pt-[15rem] pb-[5rem] md:pt-[20.6rem] xl:px-[0rem] xl:pb-[9.8rem]">
      <div ref={lineRef} className="absolute inset-0 z-[0]">
        <LineStroke19 className="absolute top-[15.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="absolute inset-0 z-[0]">
        <LineStroke20 className="absolute top-[552rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="absolute inset-0 z-[0]">
        <LineStroke22 className="absolute top-[355rem] left-1/2 w-full -translate-x-1/2" />
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
          />
        </div>
      </div>

      <div className="relative z-[1] mx-auto max-w-[120.3rem]">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
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
            className="mt-[5.5rem] mb-[5rem] grid w-full grid-cols-1 items-center gap-[2rem] md:grid-cols-2 lg:grid-cols-4 lg:items-start"
          >
            <div className="flex flex-col items-center gap-[1rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FFC300] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                {caseStudy.gridRow?.column1?.label || "Industry"}
              </span>

              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                {caseStudy.gridRow?.column1?.text || "Training/Licensing"}
              </span>
            </div>

            <div className="flex flex-col items-center gap-[1rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#FF37B3] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                {caseStudy.gridRow?.column2?.label || "Services"}
              </span>

              <span className="max-w-[20rem] text-[1.8rem] leading-[2.6rem] font-normal">
                {caseStudy.gridRow?.column2?.text ||
                  "Health & safety training courses"}
              </span>
            </div>

            <div className="flex flex-col items-center gap-[1rem] text-center xl:items-start xl:text-left">
              <span className="inline-flex items-center justify-center rounded-[.4rem] bg-[#F14A58] px-[1.2rem] py-[.2rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase">
                {caseStudy.gridRow?.column3?.label || "Timeline"}
              </span>

              <span className="text-[1.8rem] leading-[2.6rem] font-normal">
                {caseStudy.gridRow?.column3?.text || "45 Days"}
              </span>
            </div>

            <div className="flex flex-col items-center gap-[1rem] text-center xl:items-start xl:text-left">
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
          className="relative w-full overflow-hidden rounded-[2rem] opacity-0 xl:h-[71.6rem]"
        >
          <Image
            src={caseStudy.mainImage}
            alt="Case Study Image"
            height={716}
            width={1204}
            priority
            className="size-full object-cover object-top"
          />
        </div>
        <div className="my-[3rem] flex flex-col items-center gap-[2rem] text-center md:my-[5rem] md:mt-[5.8rem] xl:items-start xl:text-left">
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
          className="grid grid-cols-1 justify-items-center gap-[4rem] text-center md:grid-cols-3 xl:justify-items-start xl:text-left"
        >
          <div className="flex flex-col">
            <h3 className="text-[6rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#44B276] md:text-[8rem] md:leading-[10rem] lg:text-[11rem] lg:leading-[13rem]">
              {caseStudy.gridRow2?.column1?.label || "3.2x"}
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              {caseStudy.gridRow2?.column1?.text || "Increase in page speeds"}
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[6rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#007BFF] md:text-[8rem] md:leading-[10rem] lg:text-[11rem] lg:leading-[13rem]">
              {caseStudy.gridRow2?.column2?.label || "29%"}
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              {caseStudy.gridRow2?.column2?.text ||
                "Higher Click Through Rates (CTR's)"}
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[6rem] leading-[8rem] font-normal tracking-[-0.02em] text-[#FFC300] md:text-[8rem] md:leading-[10rem] lg:text-[11rem] lg:leading-[13rem]">
              {caseStudy.gridRow2?.column3?.label || "2.7%"}
            </h3>

            <hr className="mt-[.7rem] mb-[2rem] h-[1px] w-full border-0 bg-black/40" />

            <span className="text-text-primary/70 text-[1.8rem] leading-[2.6rem] font-normal">
              {caseStudy.gridRow2?.column3?.text ||
                "Decrease in drop-off rates"}
            </span>
          </div>
        </div>
        <div className="my-[5rem] flex flex-col items-center text-center lg:my-[9rem] xl:items-start xl:text-left">
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
          </div>
        </div>
        <div
          ref={gridRef3}
          className="grid w-full grid-cols-1 gap-[1rem] md:grid-cols-2 lg:gap-[3.3rem]"
        >
          <div className="w-full overflow-hidden rounded-[2rem] lg:h-[43.9rem]">
            <Image
              src={caseStudy.imageColumn1}
              alt="Case Study Image"
              width={585}
              height={439}
              priority
              className="size-full object-cover"
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
            />
          </div>
        </div>
        <div
          ref={imgRef1}
          className="mt-[2rem] mb-[5rem] h-[25rem] w-full overflow-hidden rounded-[2rem] opacity-0 md:h-[40rem] lg:mt-[3.3rem] lg:mb-[8rem] lg:h-[61.2rem]"
        >
          <Image
            src={caseStudy.imageColumn3}
            alt="Case Study Image"
            width={1203}
            height={612}
            priority
            className="size-full object-cover"
          />
        </div>
        <div
          ref={imgRef2}
          className="h-[25rem] w-full overflow-hidden rounded-[2rem] opacity-0 backdrop-blur-[10px] md:h-[40rem] lg:h-[56.5rem]"
        >
          <Image
            src={caseStudy.imageColumn4}
            alt="Case Study Image"
            width={1203}
            height={565}
            priority
            className="size-full object-cover"
          />
        </div>
        <div
          ref={gridRef4}
          className="my-[5rem] flex flex-col gap-[3.3rem] lg:my-[8rem] xl:flex-row"
        >
          <div className="relative flex h-[30rem] items-center justify-center overflow-hidden rounded-[1.2rem] bg-[#FFC300] px-[4rem] py-[3rem] text-center xl:block xl:h-[53.3rem] xl:min-w-[37.9rem] xl:text-left">
            <div className="absolute inset-0 z-[0]">
              <LineStroke21 className="absolute top-[10rem] left-1/2 w-full -translate-x-1/2 xl:top-[32.3rem]" />
            </div>

            <div className="relative z-[1]">
              <i className="inline-flex size-[8rem] items-center justify-center">
                <img
                  src={caseStudy.gridCardRow?.card1.icon}
                  alt="Icon"
                  className="object-contain"
                />
              </i>

              <h3 className="mt-[2rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem] xl:mt-[4.65rem]">
                {caseStudy.gridCardRow?.card1.label}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[3.3rem] md:grid-cols-2">
            {caseStudy.gridCardRow?.card2.innerCards?.map((innerCard) => (
              <div
                key={innerCard.id}
                className="case-study-detail-gradient-card flex flex-col items-center justify-center text-center xl:items-start xl:text-left"
              >
                <h4 className="mb-[1.5rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em]">
                  {innerCard.title}
                </h4>

                <ul className="flex flex-wrap justify-center gap-[1.2rem] xl:justify-start">
                  {innerCard.labels.map((label, index) => (
                    <li
                      key={index}
                      className="case-study-detail-gradient-card-tag text-[1.6rem] leading-[2.4rem] font-medium"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={gridRef5}
          className="grid grid-cols-1 gap-[3.3rem] xl:grid-cols-2"
        >
          <div className="case-study-detail-gradient-card-02 flex flex-col justify-center gap-[4.1rem]">
            <h3 className="text-center text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem] xl:text-left">
              {caseStudy.gridCardRow2?.column1.title}
            </h3>

            <div className="flex flex-col gap-[2rem]">
              {caseStudy.gridCardRow2?.column1.workflowItems?.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-[1.4rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                    {item.label1}
                  </span>
                  <span className="text-[1.4rem] leading-[2.4rem] font-normal text-[#ED910C] md:text-[1.8rem] md:leading-[2.6rem]">
                    {item.label2}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-[2rem] md:h-[52.4rem]">
            <Image
              src={caseStudy.gridCardRow2?.column2.image}
              alt="Case Study Image"
              width={585}
              height={524}
              priority
              className="size-full object-cover object-top"
            />
          </div>
        </div>

        <div
          ref={imgRef3}
          className="mt-[5rem] h-[25rem] w-full overflow-hidden rounded-[2rem] opacity-0 md:h-[40rem] lg:mt-[9rem] lg:h-[61.2rem]"
        >
          <Image
            src={caseStudy.imageColumn5}
            alt="Case Study Image"
            width={1203}
            height={612}
            priority
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailSection;

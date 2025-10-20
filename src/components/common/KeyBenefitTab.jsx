"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DarkBgCheck from "@/assets/icons/dark-bg-check.svg";
import CheckIcon from "@/assets/icons/check-icon.svg";
import Image from "next/image";
import { keyBenefitTabData } from "@/constants/smPostPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";

const KeyBenefitTab = () => {
  const [activeTab, setActiveTab] = useState(keyBenefitTabData[0].id);
  const contentRef = useRef(null);

  // Animate when tab changes
  useGSAP(() => {
    if (!contentRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // fade out old content, fade in new one
    tl.fromTo(
      contentRef.current.querySelector(".tab-content"),
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1.5 },
    );
  }, [activeTab]);

  return (
    <Tabs
      defaultValue={keyBenefitTabData[0].id}
      onValueChange={(value) => setActiveTab(value)}
      className="justify-between gap-[2rem] xl:flex-row"
    >
      {/* ---- Tabs List ---- */}
      <TabsList className="flex flex-col gap-[1.6rem]">
        {keyBenefitTabData.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="flex xl:w-[37.9rem]"
          >
            <div
              className={`key-benefit-glass flex size-full cursor-pointer items-center gap-[1.2rem] px-[1.6rem] py-[2rem] text-left text-[1.6rem] font-normal transition-all duration-300 ${activeTab === tab.id ? "text-text-primary !bg-[#FFC300]" : "text-white"}`}
            >
              <DarkBgCheck className="h-[3.2rem] w-[2.8rem] md:h-[3.5rem] md:w-[3.2rem]" />
              <span>{tab.title}</span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* ---- Tabs Content (GSAP animated) ---- */}
      <div
        ref={contentRef}
        className="relative flex-initial overflow-hidden xl:w-[79.1rem]"
      >
        {keyBenefitTabData.map(
          (tab) =>
            tab.id === activeTab && (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="tab-content size-full flex-initial"
                forceMount
              >
                <div className="key-benefit-glass flex size-full flex-col items-center gap-[2.6rem] px-[1.6rem] py-[2rem] md:flex-row">
                  <div className="h-full w-full shrink-0 md:w-[30.7rem]">
                    <Image
                      src={tab.image}
                      width={307}
                      height={370}
                      className="size-full"
                      alt={tab.heading}
                    />
                  </div>

                  <div className="w-full md:w-[39.3rem]">
                    <h3 className="text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] text-white md:text-[3.4rem] md:leading-[4.8rem]">
                      {tab.heading}
                    </h3>

                    <p className="my-[1rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
                      {tab.description}
                    </p>

                    <ul className="flex flex-col gap-[1.6rem]">
                      {tab.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-[1rem] text-[1.8rem] leading-[2.4rem] font-normal text-white"
                        >
                          <i className="min-w-max">
                            <CheckIcon className="relative top-[.8rem] flex w-[1.4rem] items-center justify-center" />
                          </i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ),
        )}
      </div>
    </Tabs>
  );
};

export default KeyBenefitTab;

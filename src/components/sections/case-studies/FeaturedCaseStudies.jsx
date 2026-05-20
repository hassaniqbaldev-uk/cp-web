"use client";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import { urlFor } from "@/sanity/caseStudies.image";
import CheckMarkIcon2 from "@/components/icons/CheckMarkIcon2";
import { Filter, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FeaturedCaseStudies = ({
  caseStudies,
  services,
  industries,
  activeService,
  activeIndustry,
}) => {
  const servicesListRef = useRef(null);
  const industriesListRef = useRef(null);
  const sectionRef = useRef(null);
  const isFirstRender = useRef(true);
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveFilters = Boolean(activeService || activeIndustry);
  const activeServiceTitle = services.find(
    (s) => s.slug === activeService,
  )?.title;
  const activeIndustryTitle = industries.find(
    (i) => i.slug === activeIndustry,
  )?.title;

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const closeFilters = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeService, activeIndustry]);

  return (
    <>
      <section
        ref={sectionRef}
        className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]"
      >
        <div className="container">
          <div className="flex items-start gap-[2rem] xl:gap-[3.3rem]">
            <div className="sticky top-[5rem] left-0 hidden w-[28rem] flex-col gap-[2rem] lg:flex">
              {/* Sticky Filter Tab */}
              <div className="overflow-hidden rounded-[2rem] border border-[#625c70]/50 bg-white py-[3.5rem] backdrop-blur-[10px]">
                <Accordion type="single" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] px-[4rem] text-[1.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] uppercase">
                      <div className="flex items-center gap-[1rem]">
                        <span>Services</span>{" "}
                        {!activeService ? null : (
                          <CheckMarkIcon2
                            height="18"
                            width="18"
                            fillColor="#FF37B3"
                          />
                        )}
                      </div>{" "}
                      <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>

                    <AccordionContent>
                      <ul
                        ref={servicesListRef}
                        className="no-scrollbar flex h-[45vh] flex-col overflow-y-scroll"
                      >
                        <li>
                          <Link
                            scroll={false}
                            href={
                              activeIndustry
                                ? `/case-studies?industry=${activeIndustry}`
                                : "/case-studies"
                            }
                            className={`relative block w-full px-[4rem] text-left text-[1.6rem] leading-[3.6rem] transition-all duration-200 ${
                              !activeService
                                ? "font-bold text-[#FF37B3]"
                                : "font-normal text-[#625C70]"
                            }`}
                          >
                            <div
                              className={`absolute top-1/2 left-0 h-[24px] w-[4px] -translate-y-1/2 bg-[#FF37B3] ${
                                !activeService ? "opacity-100" : "opacity-0"
                              }`}
                            />
                            <span>All Services</span>
                          </Link>
                        </li>

                        {services.map((s) => {
                          const isActive = activeService === s.slug;

                          return (
                            <li key={s._id}>
                              <Link
                                scroll={false}
                                href={`/case-studies?service=${s.slug}${
                                  activeIndustry
                                    ? `&industry=${activeIndustry}`
                                    : ""
                                }`}
                                className={`relative block w-full px-[4rem] text-left text-[1.6rem] leading-[3.6rem] transition-all duration-200 ${
                                  isActive
                                    ? "font-bold text-[#FF37B3]"
                                    : "font-normal text-[#625C70]"
                                }`}
                              >
                                <div
                                  className={`absolute top-1/2 left-0 h-[24px] w-[4px] -translate-y-1/2 bg-[#FF37B3] ${
                                    isActive ? "opacity-100" : "opacity-0"
                                  }`}
                                />
                                <span>{s.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <hr className="mx-auto my-[1.5rem] w-[19.6rem] border-t border-[#625c70]/50" />

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] px-[4rem] text-[1.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] uppercase">
                      <div className="flex items-center gap-[1rem]">
                        <span>Industries</span>{" "}
                        {!activeIndustry ? null : (
                          <CheckMarkIcon2
                            height="18"
                            width="18"
                            fillColor="#FF37B3"
                          />
                        )}
                      </div>{" "}
                      <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>

                    <AccordionContent>
                      <ul
                        ref={industriesListRef}
                        className="no-scrollbar flex h-[45vh] flex-col overflow-y-scroll"
                      >
                        <li>
                          <Link
                            scroll={false}
                            href={
                              activeService
                                ? `/case-studies?service=${activeService}`
                                : "/case-studies"
                            }
                            className={`relative block w-full px-[4rem] text-left text-[1.6rem] leading-[3.6rem] transition-all duration-200 ${
                              !activeIndustry
                                ? "font-bold text-[#FF37B3]"
                                : "font-normal text-[#625C70]"
                            }`}
                          >
                            <div
                              className={`absolute top-1/2 left-0 h-[24px] w-[4px] -translate-y-1/2 bg-[#FF37B3] ${
                                !activeIndustry ? "opacity-100" : "opacity-0"
                              }`}
                            />
                            <span>All Industries</span>
                          </Link>
                        </li>

                        {industries.map((i) => {
                          const isActive = activeIndustry === i.slug;

                          return (
                            <li key={i._id}>
                              <Link
                                scroll={false}
                                href={`/case-studies?industry=${i.slug}${
                                  activeService
                                    ? `&service=${activeService}`
                                    : ""
                                }`}
                                className={`relative block w-full px-[4rem] text-left text-[1.6rem] leading-[3.6rem] transition-all duration-200 ${
                                  isActive
                                    ? "font-bold text-[#FF37B3]"
                                    : "font-normal text-[#625C70]"
                                }`}
                              >
                                <div
                                  className={`absolute top-1/2 left-0 h-[24px] w-[4px] -translate-y-1/2 bg-[#FF37B3] ${
                                    isActive ? "opacity-100" : "opacity-0"
                                  }`}
                                />
                                <span>{i.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {hasActiveFilters && (
                  <div className="px-[4rem] pt-[2rem]">
                    <Link
                      scroll={false}
                      onClick={() => {
                        if (servicesListRef.current)
                          servicesListRef.current.scrollTop = 0;
                        if (industriesListRef.current)
                          industriesListRef.current.scrollTop = 0;
                      }}
                      href="/case-studies"
                      className="inline-flex h-[5rem] w-full items-center justify-center rounded-[7rem] bg-[#312749] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white"
                    >
                      Clear Filters
                    </Link>
                  </div>
                )}
              </div>

              <PrimaryButton
                href="/audit"
                text="Get My Free Audit"
                textColor="#FFFFFF"
                bGcolor="#FF37B3"
              />
            </div>

            <div className="flex flex-1 flex-col gap-[3rem] xl:gap-[4.3rem]">
              <div className="flex flex-col items-start gap-[8px] text-left">
                <SectionTitle text="Featured Case Studies" />
                <SectionDescription text="Deep dives into complex challenges, strategic solutions, and measurable impact." />
                {hasActiveFilters && (
                  <div className="mt-[2rem] hidden items-center gap-[2rem] lg:flex">
                    <p className="min-w-max text-[1.6rem] leading-[2.4rem] font-normal tracking-normal md:text-[2rem] md:leading-[3.2rem]">
                      You’re looking for:
                    </p>
                    <div className="flex flex-wrap items-center gap-[1rem]">
                      {!activeService ? null : (
                        <div className="inline-flex items-center justify-center gap-[.8rem] rounded-[10rem] border border-[#625c70]/50 py-[1rem] pr-[2rem] pl-[3rem]">
                          <span className="text-[1.8rem] font-semibold text-[#312749] uppercase">
                            {activeServiceTitle}
                          </span>
                          <Link
                            scroll={false}
                            onClick={() => {
                              if (servicesListRef.current)
                                servicesListRef.current.scrollTop = 0;
                            }}
                            href={
                              activeIndustry
                                ? `/case-studies?industry=${activeIndustry}`
                                : "/case-studies"
                            }
                          >
                            <X className="size-[2.5rem] text-[#312749]" />
                          </Link>
                        </div>
                      )}

                      {!activeIndustry ? null : (
                        <div className="inline-flex items-center justify-center gap-[.8rem] rounded-[10rem] border border-[#625c70]/50 py-[1rem] pr-[2rem] pl-[3rem]">
                          <span className="text-[1.8rem] font-semibold text-[#312749] uppercase">
                            {activeIndustryTitle}
                          </span>
                          <Link
                            scroll={false}
                            onClick={() => {
                              if (industriesListRef.current)
                                industriesListRef.current.scrollTop = 0;
                            }}
                            href={
                              activeService
                                ? `/case-studies?service=${activeService}`
                                : "/case-studies"
                            }
                          >
                            <X className="size-[2.5rem] text-[#312749]" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Responsive Filters */}
                <div className="relative mt-[2rem] flex w-full items-center lg:hidden">
                  <div className="flex w-full flex-col-reverse items-end justify-end gap-[2rem]">
                    {hasActiveFilters && (
                      <div className="flex w-full flex-col items-start gap-[1rem] md:flex-row md:items-center">
                        <p className="min-w-max text-[1.4rem] leading-[2.4rem] font-normal tracking-normal">
                          You’re looking for:
                        </p>
                        <div className="flex flex-wrap items-center gap-[1rem]">
                          {!activeService ? null : (
                            <div className="inline-flex min-w-max items-center justify-center gap-[.8rem] rounded-[10rem] border border-[#625c70]/50 py-[1rem] pr-[2rem] pl-[3rem]">
                              <span className="text-[1.2rem] font-semibold text-[#312749] uppercase">
                                {activeServiceTitle}
                              </span>
                              <Link
                                scroll={false}
                                onClick={() => {
                                  if (servicesListRef.current)
                                    servicesListRef.current.scrollTop = 0;
                                }}
                                href={
                                  activeIndustry
                                    ? `/case-studies?industry=${activeIndustry}`
                                    : "/case-studies"
                                }
                              >
                                <X className="size-[1.8rem] text-[#312749]" />
                              </Link>
                            </div>
                          )}

                          {!activeIndustry ? null : (
                            <div className="inline-flex min-w-max items-center justify-center gap-[.8rem] rounded-[10rem] border border-[#625c70]/50 py-[1rem] pr-[2rem] pl-[3rem]">
                              <span className="text-[1.2rem] font-semibold text-[#312749] uppercase">
                                {activeIndustryTitle}
                              </span>
                              <Link
                                scroll={false}
                                onClick={() => {
                                  if (industriesListRef.current)
                                    industriesListRef.current.scrollTop = 0;
                                }}
                                href={
                                  activeService
                                    ? `/case-studies?service=${activeService}`
                                    : "/case-studies"
                                }
                              >
                                <X className="size-[1.8rem] text-[#312749]" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={toggleFilters}
                      className={`inline-flex items-center gap-[1rem] rounded-[5rem] border border-[#625c70]/50 py-[1rem] pr-[2rem] pl-[3rem] transition-all duration-200 ${isOpen ? "border-[transparent] bg-[#FF37B3] text-white" : "border-[#625c70]/50 text-[#312749]"}`}
                    >
                      <span className="text-[1.6rem] font-semibold text-inherit uppercase">
                        Filters
                      </span>{" "}
                      <i className="relative">
                        <Filter className="size-[2rem] text-inherit" />
                        {hasActiveFilters && (
                          <div
                            className={`absolute top-[-.1rem] right-0 size-[.8rem] rounded-full ${isOpen ? "bg-[#FFD900]" : "bg-[#F14A58]"}`}
                          />
                        )}
                      </i>
                    </button>
                  </div>

                  <div
                    className={`absolute top-full left-0 z-[500] w-full pt-[1rem] duration-200 ${
                      isOpen
                        ? "animate-in slide-in-from-bottom-5 fade-in pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div
                      style={{
                        boxShadow: "7.69px 6.59px 40.64px 0px #0000000F",
                      }}
                      className="size-full rounded-[2rem] bg-white py-[2rem]"
                    >
                      <Accordion type="single" defaultValue="item-1">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] px-[4rem] text-[1.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] uppercase">
                            <div className="flex items-center gap-[1rem]">
                              <span>Services</span>{" "}
                              {!activeService ? null : (
                                <CheckMarkIcon2
                                  height="20"
                                  width="18"
                                  fillColor="#FF37B3"
                                />
                              )}
                            </div>{" "}
                            <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                              <ChevronDownIcon />
                            </i>
                          </AccordionTrigger>

                          <AccordionContent>
                            <ul
                              ref={servicesListRef}
                              className="no-scrollbar flex h-[44vh] flex-col overflow-y-scroll"
                            >
                              <li>
                                <Link
                                  onClick={closeFilters}
                                  scroll={false}
                                  href={
                                    activeIndustry
                                      ? `/case-studies?industry=${activeIndustry}`
                                      : "/case-studies"
                                  }
                                  className={`relative block w-full px-[4rem] text-left text-[1.6rem] leading-[3.6rem] transition-all duration-200 ${
                                    !activeService
                                      ? "font-bold text-[#FF37B3]"
                                      : "font-normal text-[#625C70]"
                                  }`}
                                >
                                  <div
                                    className={`absolute top-1/2 left-0 h-[24px] w-[4px] -translate-y-1/2 bg-[#FF37B3] ${
                                      !activeService
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }`}
                                  />
                                  <span>All Services</span>
                                </Link>
                              </li>

                              {services.map((s) => {
                                const isActive = activeService === s.slug;

                                return (
                                  <li key={s._id}>
                                    <Link
                                      onClick={closeFilters}
                                      scroll={false}
                                      href={`/case-studies?service=${s.slug}${
                                        activeIndustry
                                          ? `&industry=${activeIndustry}`
                                          : ""
                                      }`}
                                      className={`relative block w-full px-[4rem] text-left text-[1.6rem] leading-[3.6rem] transition-all duration-200 ${
                                        isActive
                                          ? "font-bold text-[#FF37B3]"
                                          : "font-normal text-[#625C70]"
                                      }`}
                                    >
                                      <div
                                        className={`absolute top-1/2 left-0 h-[24px] w-[4px] -translate-y-1/2 bg-[#FF37B3] ${
                                          isActive ? "opacity-100" : "opacity-0"
                                        }`}
                                      />
                                      <span>{s.title}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        <hr className="mx-auto my-[1.5rem] w-full border-t border-[#625c70]/20" />

                        <AccordionItem value="item-2">
                          <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] px-[4rem] text-[1.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] uppercase">
                            <div className="flex items-center gap-[1rem]">
                              <span>Industries</span>{" "}
                              {!activeIndustry ? null : (
                                <CheckMarkIcon2
                                  height="20"
                                  width="18"
                                  fillColor="#FF37B3"
                                />
                              )}
                            </div>{" "}
                            <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                              <ChevronDownIcon />
                            </i>
                          </AccordionTrigger>

                          <AccordionContent>
                            <ul
                              ref={industriesListRef}
                              className="no-scrollbar flex h-[44vh] flex-col overflow-y-scroll"
                            >
                              <li>
                                <Link
                                  onClick={closeFilters}
                                  scroll={false}
                                  href={
                                    activeService
                                      ? `/case-studies?service=${activeService}`
                                      : "/case-studies"
                                  }
                                  className={`relative block w-full px-[4rem] text-left text-[1.6rem] leading-[3.6rem] transition-all duration-200 ${
                                    !activeIndustry
                                      ? "font-bold text-[#FF37B3]"
                                      : "font-normal text-[#625C70]"
                                  }`}
                                >
                                  <div
                                    className={`absolute top-1/2 left-0 h-[24px] w-[4px] -translate-y-1/2 bg-[#FF37B3] ${
                                      !activeIndustry
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }`}
                                  />
                                  <span>All Industries</span>
                                </Link>
                              </li>

                              {industries.map((i) => {
                                const isActive = activeIndustry === i.slug;

                                return (
                                  <li key={i._id}>
                                    <Link
                                      onClick={closeFilters}
                                      scroll={false}
                                      href={`/case-studies?industry=${i.slug}${
                                        activeService
                                          ? `&service=${activeService}`
                                          : ""
                                      }`}
                                      className={`relative block w-full px-[4rem] text-left text-[1.6rem] leading-[3.6rem] transition-all duration-200 ${
                                        isActive
                                          ? "font-bold text-[#FF37B3]"
                                          : "font-normal text-[#625C70]"
                                      }`}
                                    >
                                      <div
                                        className={`absolute top-1/2 left-0 h-[24px] w-[4px] -translate-y-1/2 bg-[#FF37B3] ${
                                          isActive ? "opacity-100" : "opacity-0"
                                        }`}
                                      />
                                      <span>{i.title}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      {hasActiveFilters && (
                        <div className="px-[4rem] pt-[2rem]">
                          <Link
                            scroll={false}
                            onClick={() => {
                              if (servicesListRef.current)
                                servicesListRef.current.scrollTop = 0;
                              if (industriesListRef.current)
                                industriesListRef.current.scrollTop = 0;
                              closeFilters();
                            }}
                            href="/case-studies"
                            className="inline-flex h-[5rem] w-full items-center justify-center rounded-[7rem] bg-[#312749] px-[3rem] py-[1rem] text-[1.8rem] font-semibold text-white"
                          >
                            Clear Filters
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                key={`${activeService || "all"}-${activeIndustry || "all"}`}
                className="grid grid-cols-1 gap-x-[3rem] gap-y-[3rem] md:grid-cols-2 md:gap-y-[6rem]"
              >
                {caseStudies.map((caseStudy) => (
                  <div
                    key={caseStudy._id}
                    className="animate-in fade-in duration-500"
                  >
                    <Link
                      style={{
                        boxShadow: "7.69px 6.59px 40.64px 0px #0000000F",
                      }}
                      href={`/case-studies/${caseStudy.slug}`}
                      className="flex h-full w-full flex-col gap-[2.7rem] rounded-[3rem] bg-white px-[1.5rem] pt-[1.5rem] pb-[3rem]"
                    >
                      <div className="flex h-[25rem] w-full overflow-hidden rounded-[1.7rem] xl:h-[28.9rem]">
                        <Image
                          src={urlFor(caseStudy.thumbnailImage)
                            ?.width(429)
                            .height(289)
                            .fit("crop")
                            .url()}
                          alt={caseStudy.title || "Case Study Thumbnail Image"}
                          width={429}
                          height={289}
                          className="w-full object-cover object-left"
                          unoptimized
                        />
                      </div>

                      <div className="flex items-center justify-between gap-[2rem] px-[1rem]">
                        <div className="flex flex-col items-start text-left">
                          <h4 className="text-[2.5rem] leading-[3.6rem] font-bold tracking-[-0.02em] text-[#312749]">
                            {caseStudy.title}
                          </h4>

                          <span className="text-[1.4rem] leading-[1.9rem] font-semibold text-[#625C70] xl:text-[1.6rem] xl:leading-[2.6rem]">
                            {caseStudy.excerpt}
                          </span>
                        </div>

                        <i
                          className="inline-flex size-[4.6rem] min-w-[4.6rem] items-center justify-center rounded-full xl:size-[5rem] xl:min-w-[5rem]"
                          style={{
                            background: caseStudy.iconBg,
                          }}
                        >
                          <TiltArrowIcon color={caseStudy.iconColor} />
                        </i>
                      </div>
                    </Link>
                  </div>
                ))}

                {caseStudies.length === 0 && (
                  <p className="col-span-2 text-center text-[#625C70]">
                    No case studies match your filters.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCaseStudies;

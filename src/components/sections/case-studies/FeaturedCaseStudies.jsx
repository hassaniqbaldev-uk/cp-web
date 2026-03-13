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
import { motion } from "framer-motion";

const FeaturedCaseStudies = ({
  caseStudies,
  services,
  industries,
  activeService,
  activeIndustry,
}) => {
  const hasActiveFilters = Boolean(activeService || activeIndustry);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex items-start gap-[2rem] xl:gap-[3.3rem]">
            <div className="sticky top-[12rem] left-0 hidden w-[28rem] flex-col gap-[2rem] lg:flex">
              {/* Sticky Filter Tab */}
              <div className="rounded-[2rem] border border-[#625c70]/50 bg-white py-[3.5rem] backdrop-blur-[10px]">
                <Accordion type="single" defaultValue="item-1" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] px-[4rem] text-[1.8rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] uppercase">
                      <span>Services</span>{" "}
                      <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>

                    <AccordionContent>
                      <ul className="flex flex-col">
                        <li>
                          <Link
                            href={
                              activeIndustry
                                ? `/case-studies?industry=${activeIndustry}`
                                : "/case-studies"
                            }
                            scroll={false}
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
                                href={`/case-studies?service=${s.slug}${
                                  activeIndustry
                                    ? `&industry=${activeIndustry}`
                                    : ""
                                }`}
                                scroll={false}
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
                      <span>Industries</span>{" "}
                      <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDownIcon />
                      </i>
                    </AccordionTrigger>

                    <AccordionContent>
                      <ul className="flex flex-col">
                        <li>
                          <Link
                            href={
                              activeService
                                ? `/case-studies?service=${activeService}`
                                : "/case-studies"
                            }
                            scroll={false}
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
                                href={`/case-studies?industry=${i.slug}${
                                  activeService
                                    ? `&service=${activeService}`
                                    : ""
                                }`}
                                scroll={false}
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
                      href="/case-studies"
                      scroll={false}
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
              </div>

              <motion.div
                key={`${activeService || "all"}-${activeIndustry || "all"}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-x-[3rem] gap-y-[3rem] md:grid-cols-2 md:gap-y-[6rem]"
              >
                {caseStudies.map((caseStudy) => (
                  <motion.div variants={itemVariants} key={caseStudy._id}>
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
                  </motion.div>
                ))}

                {caseStudies.length === 0 && (
                  <p className="col-span-2 text-center text-[#625C70]">
                    No case studies match your filters.
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCaseStudies;

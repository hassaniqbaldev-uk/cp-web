"use client";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionEffect } from "@/components/effects/motion-effect";

const DynamicQuestions = ({ service }) => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col justify-center gap-[5rem] xl:flex-row xl:items-start xl:gap-[12.4rem]">
            {/* Left text column */}
            <div className="flex flex-col items-center text-center xl:w-[33rem] xl:items-start xl:text-left">
              <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
                <div>
                  <SectionTitle text="Common Questions" textColor="#312749" />
                </div>
              </MotionEffect>

              <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
                <div className="mt-[1rem] mb-[3rem]">
                  <SectionDescription
                    text="Everything you need to know about partnering with us."
                    textColor="#625C70"
                  />
                </div>
              </MotionEffect>

              <MotionEffect slide={{ direction: "down" }} fade inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
                <div>
                  <PrimaryButton
                    text="Have More Questions?"
                    textColor="#FFFFFF"
                    bGcolor="#FF37B3"
                    href="/contact"
                  />
                </div>
              </MotionEffect>
            </div>

            {/* Right accordion column */}
            <div className="flex-1">
              <Accordion type="single" collapsible>
                {service.map((item, idx) => (
                  <MotionEffect key={idx} slide={{ direction: "down" }} fade inView delay={0.25 + idx * 0.1} transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}>
                    <AccordionItem
                      value={`item-${idx}`}
                      className={`border-b-2 border-[#F1F1F3] py-[1.5rem] ${idx === 0 ? "pt-[0rem]" : ""}`}
                    >
                      <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] text-left text-[1.6rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.2rem] md:leading-[4rem]">
                        <span>{item.question}</span>{" "}
                        <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                          <ChevronDownIcon />
                        </i>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pt-[1rem]">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </MotionEffect>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicQuestions;

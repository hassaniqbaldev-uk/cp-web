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

export const questionsData = [
  {
    question: "Are you okay with signing NDAs?",
    answer:
      "Yes. We are happy to sign NDAs and ensure complete confidentiality for all client projects.",
  },
  {
    question: "What is your typical working process?",
    answer:
      "Absolutely. All work is delivered under your brand name and email domain with no external attribution.",
  },
  {
    question: "Do you only work with WordPress?",
    answer:
      "We collaborate via Slack, email, or your preferred project management tool for seamless communication.",
  },
  {
    question:
      "Can you work directly with our clients using our own email addresses?",
    answer:
      "Turnaround times vary by scope, but we typically deliver 2x faster than in-house teams.",
  },
  {
    question: "Can you help with agency growth strategy?",
    answer:
      "Yes. You can scale capacity instantly based on client demand without long-term commitments.",
  },
  {
    question: "Do you work with agencies outside the UK?",
    answer:
      "Yes. We offer long-term maintenance and support to ensure your projects remain up to date.",
  },
  {
    question: "How quickly can you start on a new project?",
    answer:
      "Yes. We offer long-term maintenance and support to ensure your projects remain up to date.",
  },
];

const Questions = ({ data = questionsData }) => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col justify-center gap-[5rem] xl:flex-row xl:items-start xl:gap-[12.4rem]">
            <div className="flex flex-col items-center text-center xl:w-[33rem] xl:items-start xl:text-left">
              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.1}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <SectionTitle text="Common Questions" textColor="#312749" />
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                zoom
                inView
                delay={0.25}
                transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
              >
                <div className="mt-[1rem] mb-[3rem]">
                  <SectionDescription
                    text="Everything you need to know about partnering with us."
                    textColor="#625C70"
                  />
                </div>
              </MotionEffect>

              <MotionEffect
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
              >
                <PrimaryButton
                  text="Have More Questions?"
                  textColor="#FFFFFF"
                  bGcolor="#FF37B3"
                  href="/contact"
                />
              </MotionEffect>
            </div>

            <div className="flex-1">
              <Accordion type="single" collapsible>
                {data.map((item, idx) => (
                  <MotionEffect
                    key={idx}
                    slide={{ direction: "down" }}
                    fade
                    inView
                    delay={0.1 + idx * 0.1}
                    transition={{
                      type: "tween",
                      duration: 1.0,
                      ease: "easeOut",
                    }}
                  >
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

                {/* <hr className="mx-auto my-[1.5rem] w-full border-t-2 border-[#F1F1F3]" /> */}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;

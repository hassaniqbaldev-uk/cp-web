"use client";
import Image from "next/image";
import { MotionEffect } from "@/components/effects/motion-effect";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import { YEARS_IN_BUSINESS, PROJECTS_DELIVERED } from "@/content/company";
import {
  AUDIT_TURNAROUND,
  AUDIT_TURNAROUND_IS_COMMITTED,
  AUDIT_REVIEWER,
  AUDIT_TESTIMONIAL,
} from "@/content/audit";

import UxIcon from "@/assets/icons/ui/ux-icon.svg";
import MagnifierIcon from "@/assets/icons/ui/magnifying-glass-icon-2.svg";
import SpeedIcon from "@/assets/icons/ui/speed-security-icon.svg";
import FocusIcon from "@/assets/icons/ui/focus-icon.svg";
import SendIcon from "@/assets/icons/ui/send-icon.svg";
import ScanIcon from "@/assets/icons/ui/scan-icon.svg";
import ImacIcon from "@/assets/icons/ui/imac-icon.svg";
import CheckmarkIcon2 from "@/assets/icons/ui/checkmark-icon-2.svg";
import ShieldCheckIcon from "@/assets/icons/ui/shield-check-icon.svg";

// Turnaround appears in prose in two places (a process step and an FAQ). Compose it once so it reads
// naturally whether or not Hassan has committed to a hard number (see src/content/audit.js).
const turnaroundPhrase = AUDIT_TURNAROUND_IS_COMMITTED
  ? `in ${AUDIT_TURNAROUND}`
  : `within ${AUDIT_TURNAROUND}`;

// What the audit actually looks at — the scope, so a visitor knows this is a real review, not a lead form
// dressed up. Four areas, each in plain terms (what it means for them, not jargon).
const REVIEW_AREAS = [
  {
    icon: UxIcon,
    title: "UX & user journey",
    text: "Where visitors hesitate, get confused, or leave before doing what you brought them there to do.",
  },
  {
    icon: MagnifierIcon,
    title: "SEO & visibility",
    text: "How well search engines understand your site, and the easy rankings you are leaving on the table.",
  },
  {
    icon: SpeedIcon,
    title: "Speed & performance",
    text: "What is slowing your pages down on real phones and connections, and which fixes actually move the needle.",
  },
  {
    icon: FocusIcon,
    title: "Conversion & clarity",
    text: "Whether the next step is obvious on every page, and where enquiries or sales are quietly leaking away.",
  },
];

// How it works — three honest steps. This is where the two facts Hassan owes surface (who reviews it, how
// long it takes); both read correctly today via the placeholders in src/content/audit.js.
const STEPS = [
  {
    icon: SendIcon,
    title: "Send us your URL",
    text: "Fill in the form above. Your website and an email is all we need to get started.",
  },
  {
    icon: ScanIcon,
    title: "A specialist reviews it",
    text: `${AUDIT_REVIEWER} goes through your site by hand, the way a real visitor and a search engine would, not an automated scan.`,
  },
  {
    icon: ImacIcon,
    title: "You get a personal video",
    text: `A short walkthrough recorded for your site, with a clear, prioritised list of what to fix first. Back with you ${turnaroundPhrase}.`,
  },
];

// No-obligation reassurances — the barrier-lowering the page exists to do.
const REASSURANCES = [
  "No obligation, and no sales call unless you ask for one.",
  "A real person reviews it, never an automated scanner.",
  "Your website and details stay private. We never sell them on.",
  "Plain English, so you do not need to be technical to act on it.",
];

const FAQS = [
  {
    question: "Is it actually free?",
    answer:
      "Yes, completely. No card details, no trial, no catch. It is a genuine review we offer so you can see how we think before deciding whether to work with us.",
  },
  {
    question: "Do I have to buy anything afterwards?",
    answer:
      "No. There is no obligation at all. You get the audit, you keep it, and there is no sales call unless you ask us for one.",
  },
  {
    question: "How long does it take to get back?",
    answer: `Your audit lands in your inbox ${turnaroundPhrase} of submitting the form.`,
  },
  {
    question: "Who actually looks at my site?",
    answer: `${AUDIT_REVIEWER} reviews it personally, not a piece of software. That is the whole point: an automated tool can list problems, but it cannot tell you which ones actually matter for your business.`,
  },
  {
    question: "What if I am not technical?",
    answer:
      "That is exactly who this is for. The video walks through everything in plain English and tells you what to prioritise, so you can act on it or hand it to whoever builds your site.",
  },
  {
    question: "Will you spam me or sell my details?",
    answer:
      "No. We use your details to send the audit and nothing else. They are never sold or passed on.",
  },
];

const AuditDetails = () => {
  return (
    <>
      {/* ── What we review (scope) ─────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div>
                <SectionLabel text="What we review" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="mt-[.5rem] mb-[1.4rem]">
                <SectionTitle text="A real look at what is holding your site back." textColor="#312749" />
              </div>
            </MotionEffect>

            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="max-w-[64rem]">
                <SectionDescription
                  text="We go through your site the way your customers and Google do, and pull out the specific things worth your attention across four areas."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-2 xl:mt-[6rem]">
            {REVIEW_AREAS.map((area, idx) => (
              <MotionEffect
                key={area.title}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4 + idx * 0.1}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
                className="h-full"
              >
                <div
                  style={{ boxShadow: "11px 11px 65px 0px #00000012" }}
                  className="flex h-full flex-col gap-[1.4rem] rounded-[2.4rem] bg-white p-[3rem]"
                >
                  <span className="inline-flex size-[5rem] min-w-[5rem] items-center justify-center rounded-full bg-[#FF37B3]/10">
                    <Image src={area.icon} alt="" width={24} height={24} className="size-[2.4rem]" />
                  </span>
                  <h3 className="text-[2rem] leading-[2.6rem] font-bold tracking-[-0.02em] text-[#312749]">
                    {area.title}
                  </h3>
                  <p className="text-[1.6rem] leading-[2.5rem] text-[#625C70]">{area.text}</p>
                </div>
              </MotionEffect>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works (process) ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div>
                <SectionLabel text="How it works" textColor="#FF37B3" />
              </div>
            </MotionEffect>

            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="mt-[.5rem] mb-[1.4rem]">
                <SectionTitle text="Three steps, and the work is on us." textColor="#312749" />
              </div>
            </MotionEffect>

            <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
              <div className="max-w-[60rem]">
                <SectionDescription
                  text="No calls to book, no forms to chase. Send your URL and we do the rest."
                  textColor="#625C70"
                />
              </div>
            </MotionEffect>
          </div>

          <div className="mt-[5rem] grid grid-cols-1 gap-[3rem] md:grid-cols-3 xl:mt-[6rem]">
            {STEPS.map((step, idx) => (
              <MotionEffect
                key={step.title}
                slide={{ direction: "down" }}
                fade
                inView
                delay={0.4 + idx * 0.12}
                transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-[1.4rem] rounded-[2.4rem] bg-white p-[3rem]">
                  <div className="flex items-center gap-[1.4rem]">
                    <span className="inline-flex size-[5rem] min-w-[5rem] items-center justify-center rounded-full bg-[#FF37B3]/10">
                      <Image src={step.icon} alt="" width={24} height={24} className="size-[2.4rem]" />
                    </span>
                    <span className="text-[2rem] font-bold tracking-[-0.02em] text-[#FF37B3]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-[2rem] leading-[2.6rem] font-bold tracking-[-0.02em] text-[#312749]">
                    {step.title}
                  </h3>
                  <p className="text-[1.6rem] leading-[2.5rem] text-[#625C70]">{step.text}</p>
                </div>
              </MotionEffect>
            ))}
          </div>
        </div>
      </section>

      {/* ── A person, not a plugin (honest proof + no-obligation) ──────────────────────────────────
          The audit's real, defensible proof: a senior person reviews it, backed by a genuine track record
          (real numbers from src/content/company.js). NO client quote is shown here unless a real
          audit-specific one exists (AUDIT_TESTIMONIAL) — we do not dress up general testimonials as audit
          proof, and we never invent one. */}
      <section className="bg-white px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col items-center gap-[4rem] xl:flex-row xl:items-center xl:gap-[8rem]">
            {/* Left — the argument */}
            <div className="flex w-full flex-col items-center text-center xl:w-1/2 xl:items-start xl:text-left">
              <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
                <div>
                  <SectionLabel text="Who reviews it" textColor="#FF37B3" />
                </div>
              </MotionEffect>

              <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
                <div className="mt-[.5rem] mb-[1.4rem]">
                  <SectionTitle text="A person, not a plugin." textColor="#312749" />
                </div>
              </MotionEffect>

              <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
                <div className="max-w-[54rem]">
                  <SectionDescription
                    text="Free audit tools spit out a generic checklist. Ours is recorded by someone who has actually designed, built and grown sites for a living, so you hear which problems matter and which to ignore."
                    textColor="#625C70"
                  />
                </div>
              </MotionEffect>

              {/* Real track record — the honest substantiation behind the reviewer's judgement. */}
              <MotionEffect slide={{ direction: "down" }} fade inView delay={0.5} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }} className="w-full">
                <div className="mt-[3.5rem] flex items-center justify-center gap-[3rem] xl:justify-start xl:gap-[4rem]">
                  <div className="text-center xl:text-left">
                    <p className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.4rem]">
                      {YEARS_IN_BUSINESS}
                      <span className="text-[#FF37B3]">+</span>
                    </p>
                    <p className="mt-[.4rem] text-[1.5rem] font-medium text-[#625C70]">years designing &amp; building sites</p>
                  </div>
                  <div className="h-[4.4rem] w-px bg-[#E5E7EB]" aria-hidden="true" />
                  <div className="text-center xl:text-left">
                    <p className="text-[3.6rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.4rem]">
                      {PROJECTS_DELIVERED}
                      <span className="text-[#FF37B3]">+</span>
                    </p>
                    <p className="mt-[.4rem] text-[1.5rem] font-medium text-[#625C70]">projects delivered for real clients</p>
                  </div>
                </div>
              </MotionEffect>

              {/* Real audit-specific quote, ONLY if one genuinely exists. Never a placeholder. */}
              {AUDIT_TESTIMONIAL && (
                <MotionEffect slide={{ direction: "down" }} fade inView delay={0.55} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }} className="w-full">
                  <figure className="mt-[3.5rem] border-l-2 border-[#FF37B3] pl-[2.4rem] text-left">
                    <blockquote className="text-[1.8rem] leading-[2.8rem] font-medium text-[#312749]">
                      &ldquo;{AUDIT_TESTIMONIAL.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-[1.2rem] text-[1.5rem] text-[#625C70]">
                      {AUDIT_TESTIMONIAL.name}
                      {AUDIT_TESTIMONIAL.role ? `, ${AUDIT_TESTIMONIAL.role}` : ""}
                      {AUDIT_TESTIMONIAL.company ? `, ${AUDIT_TESTIMONIAL.company}` : ""}
                    </figcaption>
                  </figure>
                </MotionEffect>
              )}
            </div>

            {/* Right — no-obligation reassurances */}
            <MotionEffect slide={{ direction: "down" }} fade inView delay={0.4} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }} className="w-full xl:w-1/2">
              <div
                style={{ boxShadow: "11px 11px 65px 0px #00000012" }}
                className="flex w-full flex-col gap-[2rem] rounded-[2.4rem] bg-[#F7FAFF] p-[3rem] md:p-[4rem]"
              >
                <div className="flex items-center gap-[1.2rem]">
                  <Image src={ShieldCheckIcon} alt="" width={20} height={23} />
                  <h3 className="text-[2rem] font-bold tracking-[-0.02em] text-[#312749]">No strings attached</h3>
                </div>
                <ul className="flex flex-col gap-[1.6rem]">
                  {REASSURANCES.map((item) => (
                    <li key={item} className="flex items-start gap-[1.2rem]">
                      <i className="mt-[.3rem] inline-flex size-[2.4rem] min-w-[2.4rem] items-center justify-center rounded-full bg-[#44b276]/20">
                        <Image src={CheckmarkIcon2} alt="" width={14} height={14} />
                      </i>
                      <span className="text-[1.6rem] leading-[2.4rem] font-medium text-[#625C70]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionEffect>
          </div>
        </div>
      </section>

      {/* ── FAQ (barrier-lowering) ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[#F7FAFF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="flex flex-col justify-center gap-[4rem] xl:flex-row xl:items-start xl:gap-[12.4rem]">
            <div className="flex flex-col items-center text-center xl:w-[33rem] xl:items-start xl:text-left">
              <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
                <div>
                  <SectionTitle text="Questions, answered." textColor="#312749" />
                </div>
              </MotionEffect>

              <MotionEffect slide={{ direction: "down" }} fade zoom inView delay={0.25} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}>
                <div className="mt-[1rem]">
                  <SectionDescription
                    text="The things people usually want to know before requesting one."
                    textColor="#625C70"
                  />
                </div>
              </MotionEffect>
            </div>

            <div className="flex-1">
              <Accordion type="single" collapsible>
                {FAQS.map((item, idx) => (
                  <MotionEffect key={idx} slide={{ direction: "down" }} fade inView delay={0.25 + idx * 0.1} transition={{ type: "tween", duration: 1.0, ease: "easeOut" }}>
                    <AccordionItem
                      value={`item-${idx}`}
                      className={`border-b-2 border-[#E7ECF5] py-[1.5rem] ${idx === 0 ? "pt-[0rem]" : ""}`}
                    >
                      <AccordionTrigger className="group flex w-full items-center justify-between gap-[1rem] text-left text-[1.6rem] leading-[2.4rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.2rem] md:leading-[4rem]">
                        <span>{item.question}</span>{" "}
                        <i className="origin-center stroke-[#312749] transition-all duration-200 group-data-[state=open]:rotate-180">
                          <ChevronDownIcon />
                        </i>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pt-[1rem] text-[1.6rem] leading-[2.6rem] text-[#625C70]">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </MotionEffect>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing nudge — points back to the SAME form (single conversion). Deliberately a light text
          link, not a second button, so it never competes with the audit form. ─────────────────────── */}
      <section className="bg-white px-[2rem] pb-[6rem] text-center xl:pb-[10rem]">
        <MotionEffect slide={{ direction: "down" }} fade inView delay={0.1} transition={{ type: "tween", duration: 0.8, ease: "easeOut" }} className="w-full">
          <div className="container flex flex-col items-center gap-[1rem]">
            <p className="text-[2rem] leading-[2.8rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[2.6rem]">
              Ready to see what yours could be doing better?
            </p>
            <a
              href="#audit-form"
              className="group inline-flex items-center gap-[0.6rem] text-[1.6rem] leading-[2.8rem] font-bold tracking-[-0.01em] text-[#312749] md:text-[1.8rem]"
            >
              <span className="underline decoration-[#FF37B3]/40 decoration-2 underline-offset-[5px] transition-colors duration-200 group-hover:decoration-[#FF37B3]">
                Get your free audit
              </span>
              <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:-translate-y-[3px]">
                &uarr;
              </span>
            </a>
          </div>
        </MotionEffect>
      </section>
    </>
  );
};

export default AuditDetails;

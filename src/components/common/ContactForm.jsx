"use client";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ContactFormInput from "./ContactFormInput";
import WaveHand from "./WaveHand";
import CommonBtn3 from "./CommonBtn3";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactForm = () => {
  const formContainerRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    // Set initial state
    gsap.set(formContainerRef.current, {
      height: 0,
      autoAlpha: 0,
    });

    // Expand animation on scroll
    gsap.to(formContainerRef.current, {
      height: "auto",
      autoAlpha: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formContainerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="contact-form-bg w-full">
      <h2 className="mb-[4rem] inline-flex items-center gap-[.5rem] text-[3.5rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[4.8rem]">
        Hello, how can we help? <WaveHand />
      </h2>

      <div ref={formContainerRef} className="overflow-hidden">
        <form ref={formRef} action="" className="flex flex-col gap-[3rem]">
          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="name" className="md:min-w-[25rem]">
              My name is
            </Label>

            <ContactFormInput placeholder="Enter your name" type="text" />
          </fieldset>

          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="service" className="md:min-w-[38.9rem]">
              I need a help with
            </Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select desired service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="design-branding">
                  Design & Branding
                </SelectItem>
                <SelectItem value="website-development">
                  Website Development
                </SelectItem>
                <SelectItem value="maintenance-growth">
                  Maintenance & Growth
                </SelectItem>
              </SelectContent>
            </Select>
          </fieldset>

          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="email" className="md:min-w-[35.8rem]">
              Here is my email
            </Label>

            <ContactFormInput
              placeholder="Enter your email address"
              type="email"
            />
          </fieldset>

          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="message" className="md:min-w-[29.7rem]">
              And message
            </Label>

            <Textarea placeholder="Enter your message" />
          </fieldset>

          <div className="mt-[1.5rem] mb-[1rem]">
            {/* <CommonBtn4 label="Submit Request" /> */}
            <CommonBtn3 href="" label="Submit Request" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

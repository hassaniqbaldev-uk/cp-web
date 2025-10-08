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
import { useRef, useState } from "react";
import gsap from "gsap";
import RightArrowIcon from "@/assets/icons/right-arrow-icon.svg";
import { useGSAP } from "@gsap/react";

const ContactForm = () => {
  const formContainerRef = useRef();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    service: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useGSAP(() => {
    gsap.set(formContainerRef.current, {
      height: 0,
      autoAlpha: 0,
    });

    gsap.to(formContainerRef.current, {
      height: "auto",
      autoAlpha: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formContainerRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    console.log("Submitting formData:", formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Your message has been sent!");
        setFormData({ name: "", service: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch (err) {
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-bg w-full">
      <h2 className="mb-[4rem] inline-flex items-center gap-[.5rem] text-[3.5rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[4.8rem]">
        Hello, how can we help? <WaveHand />
      </h2>

      <div ref={formContainerRef} className="overflow-hidden">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-[3rem]"
        >
          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="name" className="md:min-w-[25rem]">
              My name is
            </Label>
            <ContactFormInput
              placeholder="Enter your name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="service" className="md:min-w-[38.9rem]">
              I need a help with
            </Label>
            <Select
              value={formData.service}
              onValueChange={(value) =>
                setFormData({ ...formData, service: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select desired service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Design & Branding">
                  Design & Branding
                </SelectItem>
                <SelectItem value="Website Development">
                  Website Development
                </SelectItem>
                <SelectItem value="Maintenance & Growth">
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
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="flex flex-col items-start gap-[1.6rem] md:flex-row md:items-center">
            <Label htmlFor="message" className="md:min-w-[29.7rem]">
              And message
            </Label>
            <Textarea
              placeholder="Enter your message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div className="mt-[1.5rem] mb-[1rem]">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex cursor-pointer items-center"
            >
              {/* Text */}
              <div className="bg-text-primary relative z-[2] h-[4rem] min-w-max overflow-hidden rounded-[6rem] px-[2rem] text-[1.6rem] font-semibold text-white md:h-[5rem] md:px-[3rem] md:text-[2rem]">
                <span className="flex size-full items-center justify-center transition-all duration-200 group-hover:-translate-y-full">
                  {loading ? "Sending..." : "Submit Request"}
                </span>

                <span className="flex size-full items-center justify-center transition-all duration-200 group-hover:-translate-y-full">
                  {loading ? "Sending..." : "Submit Request"}
                </span>
              </div>

              {/* Wrapper (animated arrow) */}
              <div className="relative flex items-center justify-center">
                {/* Subtract Icon */}
                <i className="mx-[-.5rem]">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.47559 0C3.85901 2.39049 6.44175 4 9.40234 4C12.3629 4 14.9457 2.39049 16.3291 0H18.4023V18H16.3291C14.9457 15.6095 12.3629 14 9.40234 14C6.44175 14 3.85901 15.6095 2.47559 18H0.402344V0H2.47559Z"
                      fill="#070707"
                    />
                  </svg>
                </i>

                {/* Arrow Icon */}
                <div className="bg-text-primary relative size-[4rem] overflow-hidden rounded-full md:size-[5rem]">
                  <i className="absolute top-0 left-0 flex size-full items-center justify-center transition-all duration-200 group-hover:left-full">
                    <RightArrowIcon className="fill-white" />
                  </i>

                  <i className="absolute top-0 -left-full flex size-full items-center justify-center transition-all duration-200 group-hover:-left-0">
                    <RightArrowIcon className="fill-white" />
                  </i>
                </div>
              </div>
            </button>
          </div>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

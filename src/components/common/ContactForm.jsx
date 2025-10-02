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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

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

  useEffect(() => {
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
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

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
              id="email"
              name="email"
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
              onChange={handleChange}
              required
            />
          </fieldset>

          <div className="mt-[1.5rem] mb-[1rem]">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </div>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

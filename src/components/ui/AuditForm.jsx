"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AuditForm = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    websiteUrl: "",
    email: "",
    name: "",
    service: "",
    primaryGoal: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.websiteUrl || !formData.email) {
      setStatus("❌ Please fill in the required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Your audit request has been submitted!");
        setFormData({
          websiteUrl: "",
          email: "",
          name: "",
          service: "",
          primaryGoal: "",
        });
      } else {
        setStatus("❌ Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        boxShadow: "13px 13px 40px 0px #00000014",
      }}
      className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border-t-8 border-[#FF37B3] bg-white px-[2.7rem] py-[4rem] md:w-[52.5rem]"
    >
      {/* Header */}
      <div className="flex w-full flex-col gap-[1rem] border-b border-[#D6D6D6] pb-[2.5rem]">
        <h4 className="text-[2.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
          Claim Your Free Audit
        </h4>

        <p className="text-[1.6rem] font-normal tracking-normal text-[#625C70]">
          Join 150+ companies we&apos;ve helped.
        </p>
      </div>
      {/* Main */}
      <div className="mt-[2.5rem] mb-[3rem] flex w-full flex-col items-start gap-[2.5rem]">
        <fieldset className="w-full">
          <label
            htmlFor="website-url"
            className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
          >
            Website URL <span className="text-[#F14A58]">*</span>{" "}
          </label>

          <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
            <input
              id="website-url"
              type="text"
              name="websiteUrl"
              className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
              placeholder="https://company.com"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        <fieldset className="w-full">
          <label
            htmlFor="work-email"
            className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
          >
            Work Email <span className="text-[#F14A58]">*</span>{" "}
          </label>

          <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
            <input
              id="work-email"
              type="email"
              name="email"
              className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
              placeholder="jane@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        <div className="grid w-full grid-cols-1 gap-[1.5rem] md:grid-cols-2">
          <fieldset className="w-full">
            <label
              htmlFor="name"
              className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
            >
              Name
            </label>

            <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
              <input
                id="name"
                type="text"
                name="name"
                className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <fieldset className="w-full">
            <label
              htmlFor="revenue-range"
              className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
            >
              I need help with
            </label>

            <Select
              value={formData.service}
              onValueChange={(value) =>
                setFormData({ ...formData, service: value })
              }
            >
              <SelectTrigger className="!h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB] px-[1.5rem] text-[1.6rem] font-normal tracking-normal text-[#625C70]">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent align="center">
                <SelectItem value="Design & Branding">
                  Design & Branding
                </SelectItem>
                <SelectItem value="Website Development">
                  Website Development
                </SelectItem>
                <SelectItem value="Maintenance & Growth">
                  Maintenance & Growth
                </SelectItem>
                <SelectItem value="Something else">Something else</SelectItem>
              </SelectContent>
            </Select>
          </fieldset>
        </div>

        <fieldset className="w-full">
          <label
            htmlFor="primary-goal"
            className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
          >
            Primary Goal?
          </label>

          <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
            <input
              id="primary-goal"
              type="text"
              name="primaryGoal"
              className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
              placeholder="What do you want to fix?"
              value={formData.primaryGoal}
              onChange={handleChange}
            />
          </div>
        </fieldset>
      </div>
      {/* Footer */}
      <div className="flex w-full flex-col items-center justify-center gap-[2.3rem]">
        <motion.button
          type="submit"
          disabled={loading}
          initial="initial"
          whileHover="hover"
          className="inline-flex w-full cursor-pointer items-center justify-center"
        >
          <span className="relative inline-flex h-[4rem] w-full items-center justify-center overflow-hidden rounded-[7rem] bg-[#ED910C] px-[3rem] py-[1rem] text-center text-[1.4rem] font-semibold tracking-normal text-white md:h-[5rem] md:text-[1.8rem]">
            <motion.span
              variants={{
                initial: { y: "0%" },
                hover: { y: "-130%" },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="block"
            >
              {loading ? "Submitting..." : "Get My Free Audit"}
            </motion.span>
            <motion.span
              variants={{
                initial: { y: "100%" },
                hover: { y: "0%" },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {loading ? "Submitting..." : "Get My Free Audit"}
            </motion.span>
          </span>

          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-[-3px]"
          >
            <path
              d="M1.5752 0C2.62647 1.81667 4.58995 3.04004 6.83984 3.04004C9.08953 3.03987 11.0523 1.81654 12.1035 0H13.6787V13.6787H12.1035C11.0523 11.8621 9.08956 10.6388 6.83984 10.6387C4.58992 10.6387 2.62646 11.862 1.5752 13.6787H0V0H1.5752Z"
              fill="#ED910C"
            />
          </svg>

          <i className="relative inline-flex size-[4rem] min-w-[4rem] items-center justify-center overflow-hidden rounded-full bg-[#ED910C] md:size-[5rem] md:min-w-[5rem]">
            <motion.span
              variants={{
                initial: { y: "0%" },
                hover: { y: "-130%" },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <RightArrowIcon
                color="#ffffff"
                width="18"
                height="18"
                className="size-[1.4rem] md:size-[1.8rem]"
              />
            </motion.span>
            <motion.span
              variants={{
                initial: { y: "100%" },
                hover: { y: "0%" },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <RightArrowIcon
                color="#ffffff"
                width="18"
                height="18"
                className="size-[1.4rem] md:size-[1.8rem]"
              />
            </motion.span>
          </i>
        </motion.button>

        {status && (
          <p className="text-[1.4rem] font-medium">{status}</p>
        )}
      </div>
    </form>
  );
};

export default AuditForm;

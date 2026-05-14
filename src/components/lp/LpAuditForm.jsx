"use client";
import RightArrowIcon from "../icons/RightArrowIcon";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LP_SERVICES_CARD } from "@/contants";
import useServiceStore from "@/store/useServiceStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LpAuditForm = () => {
  const { selectedService, setSelectedService } = useServiceStore();
  const router = useRouter();

  const serviceName =
    LP_SERVICES_CARD.find((item) => item.value === selectedService)?.title ||
    selectedService;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !selectedService ||
      !formData.email ||
      !formData.message
    ) {
      setStatus("❌ Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/lp-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: serviceName,
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/thank-you");
        return;
      }

      setStatus("❌ Failed to submit. Please try again later.");
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Something went wrong. Try again.");
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
      onSubmit={handleSubmit}
      style={{
        boxShadow: "13px 13px 40px 0px #00000014",
      }}
      className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border-t-8 border-[#FF37B3] bg-white px-[3rem] py-[4rem]"
    >
      {/* Main */}
      <div className="mb-[2rem] flex w-full flex-col items-start gap-[2.5rem]">
        <div className="grid w-full grid-cols-1 gap-[1.5rem] md:grid-cols-2">
          <fieldset className="w-full">
            <label
              htmlFor="name"
              className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
            >
              My name is <span className="text-[#F14A58]">*</span>
            </label>

            <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
              <input
                id="name"
                type="text"
                name="name"
                className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                placeholder="John smith"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <fieldset className="w-full min-w-0">
            <label
              htmlFor="help"
              className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
            >
              I need a help with <span className="text-[#F14A58]">*</span>
            </label>

            <Select
              value={selectedService || undefined}
              onValueChange={setSelectedService}
            >
              <SelectTrigger className="!h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB] px-[1.5rem] text-[1.6rem] font-normal tracking-normal text-[#625C70]">
                <SelectValue placeholder="Select desired service" />
              </SelectTrigger>
              <SelectContent align="center">
                {LP_SERVICES_CARD.map((item, idx) => (
                  <SelectItem key={idx} value={item.value}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </fieldset>
        </div>

        <fieldset className="w-full">
          <label
            htmlFor="work-email"
            className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
          >
            Here is my email <span className="text-[#F14A58]">*</span>{" "}
          </label>

          <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
            <input
              id="work-email"
              type="email"
              name="email"
              className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset className="w-full">
          <label
            htmlFor="message"
            className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
          >
            Anything else
          </label>

          <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
            <input
              id="message"
              type="text"
              placeholder="E.g URL or what we can help with"
              name="message"
              className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
              value={formData.message}
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
          <span className="relative inline-flex h-[4rem] w-full items-center justify-center overflow-hidden rounded-[7rem] bg-[#FF37B3] px-[3rem] py-[1rem] text-center text-[1.4rem] font-semibold tracking-normal text-white md:h-[5rem] md:text-[1.8rem]">
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
              fill="#FF37B3"
            />
          </svg>

          <i className="relative inline-flex size-[4rem] min-w-[4rem] items-center justify-center overflow-hidden rounded-full bg-[#FF37B3] md:size-[5rem] md:min-w-[5rem]">
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

        {status && <p className="text-[1.4rem] font-medium">{status}</p>}
      </div>
    </form>
  );
};

export default LpAuditForm;

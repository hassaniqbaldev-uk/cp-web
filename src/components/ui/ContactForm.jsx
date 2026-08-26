"use client";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Form from "@/components/forms/Form";

const validate = (v) => {
  const e = {};
  if (!v.name?.trim()) e.name = "Please enter your name.";
  if (!v.service) e.service = "Please select a service.";
  if (!v.email?.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    e.email = "Please enter a valid email.";
  return e;
};

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form
      endpoint="/api/contact"
      values={formData}
      validate={validate}
      analyticsForm="contact"
      onSuccess={() => router.push("/thank-you")}
      style={{
        boxShadow: "13px 13px 40px 0px #00000014",
      }}
      className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border-t-8 border-[#FF37B3] bg-white p-[3.8rem] md:w-[59.5rem]"
    >
      {({ errors, errorId, fieldProps, submitting }) => (
        <>
          {/* Header */}
          <div className="flex w-full flex-col gap-[1rem] border-b border-[#D6D6D6] pb-[2.5rem]">
            <h4 className="text-[2.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
              Hello, how can we help?
            </h4>
          </div>
          {/* Main */}
          <div className="mt-[2.5rem] mb-[3rem] flex w-full flex-col items-start gap-[2.5rem]">
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
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    {...fieldProps("name")}
                  />
                </div>
                {errors.name && (
                  <p
                    id={errorId("name")}
                    className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]"
                  >
                    {errors.name}
                  </p>
                )}
              </fieldset>

              <fieldset className="w-full">
                <label
                  htmlFor="service"
                  className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                >
                  I need help with <span className="text-[#F14A58]">*</span>
                </label>

                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger
                    id="service"
                    aria-label="What do you need help with"
                    {...fieldProps("service")}
                    className="!h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB] px-[1.5rem] text-[1.6rem] font-normal tracking-normal text-[#625C70]"
                  >
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
                {errors.service && (
                  <p
                    id={errorId("service")}
                    className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]"
                  >
                    {errors.service}
                  </p>
                )}
              </fieldset>
            </div>

            <fieldset className="w-full">
              <label
                htmlFor="email"
                className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
              >
                Here is my email <span className="text-[#F14A58]">*</span>
              </label>

              <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  {...fieldProps("email")}
                />
              </div>
              {errors.email && (
                <p
                  id={errorId("email")}
                  className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]"
                >
                  {errors.email}
                </p>
              )}
            </fieldset>

            <fieldset className="w-full">
              <label
                htmlFor="message"
                className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
              >
                And message{" "}
                <span className="font-normal text-[#625C70]">(optional)</span>{" "}
              </label>

              <div className="w-full overflow-hidden rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                <textarea
                  id="message"
                  name="message"
                  className="h-[12.8rem] w-full resize-none p-[1.5rem] outline-0"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  {...fieldProps("message")}
                />
              </div>
              {errors.message && (
                <p
                  id={errorId("message")}
                  className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]"
                >
                  {errors.message}
                </p>
              )}
            </fieldset>
          </div>
          {/* Footer */}
          <div className="flex w-full flex-col items-center justify-center gap-[2.3rem]">
            <motion.button
              type="submit"
              disabled={submitting}
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
                  {submitting ? "Sending..." : "Submit Request"}
                </motion.span>
                <motion.span
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {submitting ? "Sending..." : "Submit Request"}
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
          </div>
        </>
      )}
    </Form>
  );
};

export default ContactForm;

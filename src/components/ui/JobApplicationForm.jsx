"use client";
import React, { useEffect, useRef, useState } from "react";

const JobApplicationForm = ({
  jobTitle = "UI/UX Product Designer",
  onClose,
}) => {
  // States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  //   Ref
  const fileInputRef = useRef(null);

  //   Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") setFullName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "message") setMessage(value);
    if (name === "portfolio") setPortfolio(value);

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFile = (file) => {
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Only .pdf, .doc, .docx files are allowed",
      }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resume: "File size must be under 5MB" }));
      return;
    }

    setResumeFile(file);

    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);
      formData.append("portfolio", portfolio);
      formData.append("resume", resumeFile);
      formData.append("jobTitle", jobTitle);

      const res = await fetch("/api/job-application", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);

        // reset all fields
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setPortfolio("");
        setResumeFile(null);
        // localStorage.removeItem(`jobApplicationDraft_${jobTitle}`);
      } else {
        setStatus("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // const handleSaveDraft = () => {
  //   const draft = {
  //     fullName,
  //     email,
  //     phone,
  //     message,
  //     portfolio,
  //   };

  //   localStorage.setItem(
  //     `jobApplicationDraft_${jobTitle}`,
  //     JSON.stringify(draft),
  //   );
  //   setStatus("✅ Draft saved!");
  // };

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    // Email
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone (optional — only validate if filled)
    if (phone.trim() && !/^[0-9+\-\s()]{7,15}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Resume
    if (!resumeFile) {
      newErrors.resume = "Please upload your resume";
    }

    // Portfolio (optional — only validate if filled)
    if (portfolio.trim() && !/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(portfolio)) {
      newErrors.portfolio = "Please enter a valid URL";
    }

    return newErrors;
  };

  // useEffect(() => {
  //   const saved = localStorage.getItem(`jobApplicationDraft_${jobTitle}`);
  //   if (saved) {
  //     const draft = JSON.parse(saved);
  //     setFullName(draft.fullName || "");
  //     setEmail(draft.email || "");
  //     setPhone(draft.phone || "");
  //     setMessage(draft.message || "");
  //     setPortfolio(draft.portfolio || "");
  //   }
  // }, [jobTitle]);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setErrors({});
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <>
      <div
        style={{ boxShadow: "13px 13px 40px 0px #00000014" }}
        className={`relative flex max-h-[95vh] w-[95%] flex-col rounded-[2rem] border-t-8 border-[#EE8D00] bg-white p-[2rem] md:w-[80rem] md:p-[3.8rem] ${isSubmitted ? "pointer-events-none overflow-y-hidden" : "pointer-events-auto overflow-y-auto"}`}
      >
        {/* Header */}
        <div className="flex w-full items-start justify-between border-b border-[#D6D6D6] pb-[2.5rem]">
          <h4 className="text-[2rem] leading-[2.6rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[3rem]">
            {jobTitle}
          </h4>
          <button
            onClick={() => {
              setErrors({});
              onClose();
            }}
            className="flex h-[3.2rem] w-[3.2rem] flex-shrink-0 items-center justify-center rounded-full border border-[#E4E3E8] text-[#625C70] transition-colors hover:bg-[#f5f5f5]"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M13 1L1 13M1 1l12 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Main */}
        <form onSubmit={handleSubmit}>
          {/* Fields */}
          <div className="mt-[2.5rem] mb-[3rem] flex w-full flex-col items-start gap-[2.5rem]">
            {/* Full Name */}
            <fieldset className="w-full">
              <label className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                Full name <span className="text-[#F14A58]">*</span>
              </label>
              <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  className="h-full w-full bg-transparent p-[1.5rem] text-[1.5rem] outline-0"
                  onChange={handleChange}
                  value={fullName}
                  name="fullName"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
              {errors.fullName && (
                <p className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]">
                  {errors.fullName}
                </p>
              )}
            </fieldset>

            {/* Email + Phone */}
            <div className="grid w-full grid-cols-1 gap-[1.5rem] md:grid-cols-2">
              <fieldset className="w-full">
                <label className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                  Email <span className="text-[#F14A58]">*</span>
                </label>
                <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                  <input
                    className="h-full w-full bg-transparent p-[1.5rem] text-[1.5rem] outline-0"
                    onChange={handleChange}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]">
                    {errors.email}
                  </p>
                )}
              </fieldset>

              <fieldset className="w-full">
                <label className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                  Phone number
                </label>
                <div className="flex h-[5.2rem] w-full items-center overflow-hidden rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                  <input
                    className="h-full w-full bg-transparent p-[1.5rem] text-[1.5rem] outline-0"
                    onChange={handleChange}
                    value={phone}
                    name="phone"
                    type="tel"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]">
                    {errors.phone}
                  </p>
                )}
              </fieldset>
            </div>

            {/* Upload Resume */}
            <fieldset className="w-full">
              <label className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                Upload resume <span className="text-[#F14A58]">*</span>
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onClick={() => fileInputRef.current.click()}
                className={`flex w-full cursor-pointer flex-col items-center justify-center gap-[1rem] rounded-[1.6rem] border-2 border-dashed bg-[#F9FAFB] px-[2rem] py-[2.5rem] transition-colors hover:border-[#EE8D00] md:py-[3rem] ${dragOver ? "border-[#EE8D00]" : "border-[#E5E7EB]"}`}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  className="text-[#625C70]"
                >
                  <path
                    d="M18 24V12M18 12l-5 5M18 12l5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 26a6 6 0 01-.17-11.99A9 9 0 0124.6 10.4 6 6 0 0130 16.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {resumeFile ? (
                  <p className="text-[1.4rem] font-medium text-[#312749]">
                    {resumeFile.name}
                  </p>
                ) : (
                  <>
                    <p className="text-center text-[1.4rem] text-[#312749]">
                      Drag and drop your file, or{" "}
                      <span className="font-semibold underline">
                        click here.
                      </span>
                    </p>
                    <p className="text-[1.2rem] text-[#9b97a6]">
                      .pdf, .doc, .docx | Max 5MB
                    </p>
                  </>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFile(e.target.files[0])}
                  onClick={(e) => e.stopPropagation()}
                  className="hidden"
                />
              </div>
              {errors.resume && (
                <p className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]">
                  {errors.resume}
                </p>
              )}
            </fieldset>

            {/* Message/Cover Letter */}
            <fieldset className="w-full">
              <label className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                Message/Cover Letter
              </label>
              <div className="w-full overflow-hidden rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                <textarea
                  className="h-[12.8rem] w-full resize-none bg-transparent p-[1.5rem] text-[1.5rem] outline-0"
                  rows={4}
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                />
              </div>
            </fieldset>

            {/* Portfolio */}
            <fieldset className="w-full">
              <label className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                Portfolio
              </label>
              <div className="flex h-[5.2rem] w-full items-center overflow-hidden rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                <span className="flex h-full items-center border-r border-[#E5E7EB] px-[1.4rem] text-[1.4rem] text-[#9b97a6] select-none">
                  https://
                </span>
                <input
                  className="h-full w-full bg-transparent px-[1.2rem] text-[1.5rem] outline-0"
                  name="portfolio"
                  value={portfolio}
                  onChange={handleChange}
                  type="text"
                  placeholder="yourportfolio.com"
                />
              </div>
              {errors.portfolio && (
                <p className="mt-[0.5rem] text-[1.3rem] text-[#F14A58]">
                  {errors.portfolio}
                </p>
              )}
            </fieldset>
          </div>

          {/* Status Message */}
          {status && (
            <p className="mb-[1rem] text-center text-[1.4rem]">{status}</p>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-[1rem] md:flex-row md:items-center md:justify-end md:gap-[1.2rem]">
            {/* <button
              type="button"
              onClick={handleSaveDraft}
              className="w-full rounded-[7rem] border border-[#E5E7EB] px-[2rem] py-[1.2rem] text-[1.4rem] font-semibold text-[#312749] transition-colors hover:bg-[#f5f5f5] md:w-auto md:py-[1rem]"
            >
              Save draft
            </button> */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-[7rem] bg-[#EE8D00] px-[3rem] py-[1.2rem] text-[1.4rem] font-semibold text-white transition-colors hover:bg-[#d47e00] md:w-auto md:py-[1rem]"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Thank You Message */}
        <div
          className={`absolute top-1/2 left-1/2 flex w-[80%] -translate-1/2 flex-col items-center justify-center rounded-[2rem] border border-[#e9e9e9] bg-white py-[6rem] text-center transition-all duration-200 ${isSubmitted ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
        >
          <div className="mb-[2rem] flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-[#EE8D00]/10">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 6L9 17l-5-5"
                stroke="#EE8D00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="text-[2.4rem] font-bold tracking-[-0.02em] text-[#312749]">
            Thank You!
          </h3>

          <p className="mt-[1rem] max-w-[40rem] text-[1.6rem] leading-[2.4rem] text-[#625C70]">
            Your application has been submitted successfully. We&apos;ll review
            it and get back to you soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default JobApplicationForm;

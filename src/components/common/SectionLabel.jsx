const SectionLabel = ({
  text,
  dotColor = "bg-[#FFE400]",
  borderColor = "border-white/50",
  textColor = "text-white",
  className = "",
}) => {
  return (
    <div
      className={`inline-flex h-[4rem] items-center justify-center gap-[1rem] rounded-[.8rem] border-[0.5px] border-dashed px-[2rem] py-[1rem] text-[1.4rem] leading-[2.2rem] font-medium md:h-[4.4rem] md:min-w-[18.3rem] md:text-[1.6rem] md:leading-[2.4rem] ${borderColor} ${textColor} ${className}`}
    >
      {/* Pulsing dot */}
      <span className="relative">
        <span
          className={`absolute top-1/2 left-1/2 inline-flex size-[1.8rem] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-75 ${dotColor}`}
        ></span>
        <span
          className={`relative inline-flex size-[1rem] rounded-full ${dotColor}`}
        ></span>
      </span>

      {text}
    </div>
  );
};

export default SectionLabel;

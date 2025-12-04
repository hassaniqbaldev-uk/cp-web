const SectionLabel2 = ({
  text,
  borderColor = "border-[#070707]",
  textColor = "text-white",
  bgColor = "bg-[#F14A58]",
  className = "",
}) => {
  return (
    <div
      className={`inline-flex h-[3.5rem] items-center justify-center gap-[1rem] rounded-[.8rem] border-[1px] px-[2rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium ${borderColor} ${textColor} ${className} ${bgColor}`}
    >
      {text}
    </div>
  );
};

export default SectionLabel2;

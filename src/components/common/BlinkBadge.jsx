const BlinkBadge = ({ text }) => {
  return (
    <>
      <div className="inline-flex h-[4rem] items-center justify-center gap-[1rem] rounded-[.8rem] bg-white/20 px-[1rem] py-[1rem] md:h-[4.4rem] md:px-[2rem]">
        <div className="relative size-[1.8rem]">
          <div className="absolute top-1/2 left-1/2 size-[1.8rem] -translate-1/2 animate-ping rounded-full bg-[#FFE400]/20" />
          <div className="absolute top-1/2 left-1/2 size-[1rem] -translate-1/2 rounded-full bg-[#FFE400]" />
        </div>

        <span className="text-[1.4rem] leading-[2.4rem] font-medium text-white md:text-[1.6rem]">
          {text}
        </span>
      </div>
    </>
  );
};
export default BlinkBadge;

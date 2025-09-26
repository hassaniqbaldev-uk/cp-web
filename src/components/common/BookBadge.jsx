const BookBadge = () => {
  return (
    <div className="inline-flex h-[4rem] min-w-[25rem] items-center justify-center gap-[1rem] rounded-[.8rem] bg-white/20 px-[2rem] py-[1rem] text-[1.4rem] leading-[2.2rem] font-medium text-white md:h-[4.4rem] md:min-w-[28.1rem] md:text-[1.6rem] md:leading-[2.4rem]">
      {/* Pulsing dot */}
      <span className="relative">
        <span className="absolute top-1/2 left-1/2 inline-flex size-[1.8rem] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#31EE33] opacity-75"></span>
        <span className="relative inline-flex size-[1rem] rounded-full bg-[#31EE33]"></span>
      </span>
      Book a free 15-min audit call
    </div>
  );
};

export default BookBadge;

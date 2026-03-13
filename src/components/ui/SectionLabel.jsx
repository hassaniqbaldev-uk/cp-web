const SectionLabel = ({ text, textColor }) => {
  return (
    <>
      <span
        style={{ color: textColor }}
        className="text-[1.4rem] font-bold tracking-[-0.02em] uppercase md:text-[1.8rem]"
      >
        {text}
      </span>
    </>
  );
};
export default SectionLabel;
